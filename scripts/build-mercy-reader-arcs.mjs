import { readFile, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { resolve } from "node:path";

const repoDir = resolve(new URL("..", import.meta.url).pathname);
const workspaceRoot = resolve(repoDir, "..");
const dbPath = resolve(workspaceRoot, "lmstudio_operating_model/knowledge/mercy-working-canon/mercy-full-span-connected-working-canon-1958-2026-v1.aggregate-v1/mercy-working-graph-1958-2026-v1.rebuild-20261021-resumed.sqlite");
const workerDir = resolve(workspaceRoot, "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v1");
const outputPath = resolve(repoDir, "lib/mercy-reader-arcs.ts");

const runSqlite = (sql) => new Promise((resolvePromise, reject) => {
  const child = spawn("sqlite3", ["-readonly", "-json", dbPath, sql], { stdio: ["ignore", "pipe", "pipe"] });
  let stdout = "";
  let stderr = "";
  child.stdout.on("data", (chunk) => { stdout += chunk; });
  child.stderr.on("data", (chunk) => { stderr += chunk; });
  child.on("error", reject);
  child.on("close", (code) => {
    if (code !== 0) reject(new Error(stderr || `sqlite3 exited with ${code}`));
    else resolvePromise(JSON.parse(stdout || "[]"));
  });
});

const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
const json = (value) => JSON.stringify(value, null, 2);
const parse = (value) => {
  try { return JSON.parse(value || "{}"); } catch { return {}; }
};

const selectedFactIds = [
  "mercy.fact.4c1d21bfa7cbd55361bc",
  "mercy.fact.ea26511de50d033f7e3f",
  "mercy.fact.caf970534db4f661c9f6",
  "mercy.core.fact.54fdcb9f29343bda0aeb",
  "mercy.fact.af5d1e120a9c84210f69",
  "mercy.core.fact.5f318d009c8aa8572698",
  "mercy.fact.c696daa25e5b53c1e885",
  "mercy.fact.2ad254019efa5d28d3df",
  "mercy.fact.0e0d4ab0ea7a39b05998",
  "mercy.fact.e2eba626f586a88ad991",
  "mercy.fact.a2b3bda5b8d8c0f44219",
  "mercy.fact.85b3cfc5c4eab92474d9",
  "mercy.fact.94de293f928b94d7e2fa",
  "mercy.fact.7886aba0b9f9fe5a7d68",
  "mercy.fact.0d47169ef0cfb585f8c3",
];
const ids = selectedFactIds.map((id) => `'${id}'`).join(",");
const facts = await runSqlite(`SELECT fact_id,year,fact_type,title,assertion,date_start,date_end,date_precision,confidence,visibility_state,source_lanes_json,uncertainties_json FROM fact WHERE fact_id IN (${ids}) ORDER BY year,date_start,fact_id;`);
const sourceRows = await runSqlite(`SELECT fact_id,ordinal,source_item_id,source_authority,source_type,source_locator,source_url,payload_json FROM source_bundle WHERE fact_id IN (${ids}) ORDER BY fact_id,ordinal;`);
const representationRows = await runSqlite(`SELECT representation_id,year,observation_state,logical_representation_id,unresolved_reason,payload_json,historical_match_json FROM representation WHERE json_extract(historical_match_json,'$.fact_id') IN (${ids}) ORDER BY year,representation_id;`);
const receipt = await readJson(resolve(workerDir, "worker-receipt.json"));
const sourceSearch = await readJson(resolve(workerDir, "source-search-receipt.json"));
const graphQa = await readJson(resolve(workspaceRoot, "lmstudio_operating_model/receipts/mercy-working-graph/mercy-working-graph-1958-2026-v1.rebuild-20261021-resumed-qa/qa-receipt.json"));

const factsById = new Map(facts.map((fact) => [fact.fact_id, fact]));
const sourcesByFact = new Map();
for (const row of sourceRows) {
  const rows = sourcesByFact.get(row.fact_id) ?? [];
  rows.push(row);
  sourcesByFact.set(row.fact_id, rows);
}

const representationsByFact = new Map();
for (const row of representationRows) {
  const match = parse(row.historical_match_json);
  const rows = representationsByFact.get(match.fact_id) ?? [];
  rows.push(row);
  representationsByFact.set(match.fact_id, rows);
}

const sourcePayloadText = (row) => {
  const payload = parse(row?.payload_json);
  if (payload.caption_excerpt) return payload.caption_excerpt;
  if (payload.claim_snippet) return payload.claim_snippet;
  const nested = parse(payload.object_excerpt);
  if (nested.value?.claim_snippet) return nested.value.claim_snippet;
  const rawNested = String(payload.object_excerpt || "");
  const snippetMatch = rawNested.match(/"claim_snippet"\s*:\s*"((?:\\.|[^"\\])*)/);
  if (snippetMatch) {
    try { return JSON.parse(`"${snippetMatch[1]}"`); } catch { return snippetMatch[1].replaceAll('\\"', '"'); }
  }
  return nested.value?.claim_snippet || nested.claim_snippet || "";
};

const pointersFor = (factId, limit = 4) => (sourcesByFact.get(factId) ?? []).slice(0, limit).map((row) => {
  const payload = parse(row.payload_json);
  return {
    sourceItemId: row.source_item_id,
    authority: row.source_authority || "",
    sourceType: row.source_type || "",
    locator: row.source_locator || "",
    url: row.source_url || payload.url || "",
    excerpt: sourcePayloadText(row),
  };
});

const representationPointersFor = (factId) => (representationsByFact.get(factId) ?? []).map((row) => {
  const payload = parse(row.payload_json);
  const match = parse(row.historical_match_json);
  const isSidecar = row.observation_state === "technical_sidecar";
  return {
    representationId: row.representation_id,
    label: payload.preferred_label || row.representation_id,
    relativePath: payload.relative_path || "",
    dateToken: payload.date_token || "",
    observationState: row.observation_state,
    provenanceState: payload.provenance_state || "",
    logicalRepresentationId: row.logical_representation_id || "",
    matchState: match.state || "",
    unresolvedReason: row.unresolved_reason || "",
    caution: isSidecar
      ? "Technical sidecar observed separately; it is not an additional historical representation."
      : "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object.",
  };
});

const factStep = (factId, lane) => {
  const fact = factsById.get(factId);
  if (!fact) throw new Error(`missing arc fact: ${factId}`);
  const sources = sourcesByFact.get(factId) ?? [];
  const firstSource = pointersFor(factId, 1)[0] ?? null;
  return {
    stepId: fact.fact_id,
    year: fact.year,
    lane,
    label: fact.title,
    dateStart: fact.date_start || "",
    dateEnd: fact.date_end || "",
    datePrecision: fact.date_precision,
    dateRole: "event_date",
    dateBasis: "source-preserved graph fact",
    factType: fact.fact_type,
    assertion: fact.assertion,
    confidence: fact.confidence,
    state: fact.visibility_state,
    place: "",
    sourceCount: sources.length,
    sourceExcerpt: firstSource?.excerpt || fact.assertion,
    sourcePointers: pointersFor(factId),
    representationIds: representationPointersFor(factId).map((representation) => representation.representationId),
    representations: representationPointersFor(factId),
    uncertainties: parse(fact.uncertainties_json),
  };
};

const endFactId = "mercy.core.fact.5f318d009c8aa8572698";
const endFact = factsById.get(endFactId);
const endSource = pointersFor(endFactId, 1)[0];
const endClaim = endSource?.excerpt || endFact?.assertion || "";
const endStep = {
  stepId: "mercy.arc.sean-penn.relationship-end-1989",
  year: 1989,
  lane: "relationship",
  label: "Relationship-end claim",
  dateStart: "1989",
  dateEnd: "1989",
  datePrecision: "year",
  dateRole: "relationship_end_claim",
  dateBasis: "Retained source excerpt states that the divorce occurred in 1989; the containing source record is published in 2005.",
  factType: endFact?.fact_type || "core_entity",
  assertion: endClaim,
  confidence: endFact?.confidence ?? 0,
  state: endFact?.visibility_state || "archive_visible_supported",
  place: "",
  sourceCount: sourcesByFact.get(endFactId)?.length ?? 0,
  sourceExcerpt: endClaim,
  sourcePointers: pointersFor(endFactId),
  representationIds: [],
  representations: [],
  uncertainties: ["This is a year-level relationship-end claim carried by a later source, not a dated 1989 event record.", "It does not establish a precise separation, filing, or divorce day."],
};

const arc = {
  arcId: "mercy.arc.madonna-sean-penn-1985-1989",
  title: "Madonna & Sean Penn · marriage through supported 1989 end claim",
  summary: "A source-labelled relationship arc from the 1985 wedding through shared 1986 contexts, a 1987 separation interview, a 1988 shared performance context, and a retained source claim that the marriage ended in 1989.",
  state: "archive_visible_supported_with_explicit_gap",
  years: [1985, 1986, 1987, 1988, 1989],
  steps: [
    factStep("mercy.fact.4c1d21bfa7cbd55361bc", "relationship"),
    factStep("mercy.fact.ea26511de50d033f7e3f", "shared film context"),
    factStep("mercy.fact.caf970534db4f661c9f6", "shared theatre context"),
    factStep("mercy.core.fact.54fdcb9f29343bda0aeb", "relationship"),
    factStep("mercy.fact.af5d1e120a9c84210f69", "shared performance context"),
    endStep,
  ],
  gaps: [
    "The retained-source search found no explicit account that Sean Penn first met Madonna on the Material Girl set; that lead remains a source-scoped candidate.",
    "The 1989 endpoint is supported as a year claim in a later source, not as a separately dated 1989 event record.",
  ],
  inputFingerprints: Object.fromEntries(Object.entries(receipt.input_files).map(([key, value]) => [key, value.fingerprint])),
  provenanceJobId: receipt.job_id,
  sourceSearchState: sourceSearch.explicit_miss?.state || "unresolved",
  authorityBoundary: "Derived arc projection only; source facts remain separately labelled and no canonical, inventory, media, filesystem, or public-network writes occurred.",
  nextAction: "Resolve or preserve the first-meeting candidate through a new retained-source lane or curator testimony; do not infer it from the arc sequence.",
};

const likeAVirginArc = {
  arcId: "mercy.arc.like-a-virgin-1984-1985",
  title: "Like a Virgin · from recording room to Virgin Tour",
  summary: "A source-labelled cross-medium arc through the 1984 recording sessions, album-cover and video work, publication context, launch event, and the 1985 Virgin Tour opening.",
  state: "archive_visible_supported_with_explicit_gap",
  years: [1984, 1985],
  steps: [
    factStep("mercy.fact.c696daa25e5b53c1e885", "recording / song and album"),
    factStep("mercy.fact.2ad254019efa5d28d3df", "album / cover"),
    factStep("mercy.fact.0e0d4ab0ea7a39b05998", "music video / visual"),
    factStep("mercy.fact.e2eba626f586a88ad991", "publication"),
    factStep("mercy.fact.a2b3bda5b8d8c0f44219", "album / launch event"),
    factStep("mercy.fact.85b3cfc5c4eab92474d9", "tour / performance"),
  ],
  gaps: [
    "The recording, album, video, publication, launch, and tour steps are separately sourced contexts; the arc does not claim that every named representation or performance is the same object.",
    "The video and album-cover records retain month-level or source-qualified timing; no exact shoot day is invented.",
  ],
  inputFingerprints: Object.fromEntries(Object.entries(receipt.input_files).map(([key, value]) => [key, value.fingerprint])),
  provenanceJobId: graphQa.qa_id,
  sourceSearchState: "source_bundles_materialized",
  authorityBoundary: "Derived arc projection only; source facts remain separately labelled and no canonical, inventory, media, filesystem, or public-network writes occurred.",
  nextAction: "Extend the arc with typed song-to-release, video-to-broadcast, and representation edges only when their source bundles and endpoint identities are independently visible.",
};

const photoRepresentationArc = {
  arcId: "mercy.arc.photo-sessions-publications-representations-1991-1995",
  title: "Photo sessions · publications, campaigns, and local representations",
  summary: "A source-labelled visual arc from the 1991 Truth or Dare advert through the 1992 Vanity Fair cover story and 1995 Versace campaign, with five matched local representations kept separate.",
  state: "archive_visible_supported_with_explicit_gap",
  years: [1991, 1992, 1995],
  steps: [
    factStep("mercy.fact.94de293f928b94d7e2fa", "advertisement / broadcast"),
    factStep("mercy.fact.7886aba0b9f9fe5a7d68", "publication / Vanity Fair"),
    factStep("mercy.fact.0d47169ef0cfb585f8c3", "campaign / Something to Remember"),
  ],
  gaps: [
    "The 1992 source preserves the location as unknown / Long Island / Hamptons / Miami; the arc does not choose among those alternatives.",
    "The five local representations are filename/context matches. They are not asserted to be the original shoot, an outtake, or the canonical publication object without further evidence.",
  ],
  inputFingerprints: Object.fromEntries(Object.entries(receipt.input_files).map(([key, value]) => [key, value.fingerprint])),
  provenanceJobId: graphQa.qa_id,
  sourceSearchState: "representation_historical_match_projection",
  authorityBoundary: "Derived visual arc and representation projection only; original paths and representation observations remain unchanged, and no canonical, inventory, media, filesystem, or public-network writes occurred.",
  nextAction: "Inspect source provenance and any retained publication/outtake evidence before upgrading a representation association; preserve each logical file and technical sidecar separately.",
};

const arcs = [arc, likeAVirginArc, photoRepresentationArc];

const lines = [
  "// Generated from the QA-passed resumed MERCY working graph and the bounded connection-worker receipt. Do not hand-edit.",
  "// This projection preserves source, date role, precision, uncertainty, and explicit gaps.",
  "",
  "export type MercyArcSourcePointer = {",
  "  sourceItemId: string;",
  "  authority: string;",
  "  sourceType: string;",
  "  locator: string;",
  "  url: string;",
  "  excerpt: string;",
  "};",
  "",
  "export type MercyArcRepresentation = {",
  "  representationId: string; label: string; relativePath: string; dateToken: string; observationState: string; provenanceState: string; logicalRepresentationId: string; matchState: string; unresolvedReason: string; caution: string;",
  "};",
  "",
  "export type MercyArcStep = {",
  "  stepId: string; year: number; lane: string; label: string; dateStart: string; dateEnd: string; datePrecision: string; dateRole: string; dateBasis: string; factType: string; assertion: string; confidence: number; state: string; place: string; sourceCount: number; sourceExcerpt: string; sourcePointers: MercyArcSourcePointer[]; representationIds: string[]; representations: MercyArcRepresentation[]; uncertainties: Array<{ detail?: string; kind?: string } | string>;",
  "};",
  "",
  "export type MercyReaderArc = {",
  "  arcId: string; title: string; summary: string; state: string; years: number[]; steps: MercyArcStep[]; gaps: string[]; inputFingerprints: Record<string, string>; provenanceJobId: string; sourceSearchState: string; authorityBoundary: string; nextAction: string;",
  "};",
  "",
  "export const mercyReaderArcs: MercyReaderArc[] = ",
  `${json(arcs)};`,
  "",
];

await writeFile(outputPath, lines.join("\n"));
console.log(`Generated ${arcs.length} arcs and ${arcs.reduce((total, item) => total + item.steps.length, 0)} steps across ${new Set(arcs.flatMap((item) => item.years)).size} years.`);
