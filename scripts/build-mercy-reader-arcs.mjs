import { writeFile } from "node:fs/promises";
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

const readJson = async (path) => JSON.parse(await (await import("node:fs/promises")).readFile(path, "utf8"));
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
];
const ids = selectedFactIds.map((id) => `'${id}'`).join(",");
const facts = await runSqlite(`SELECT fact_id,year,fact_type,title,assertion,date_start,date_end,date_precision,confidence,visibility_state,source_lanes_json,uncertainties_json FROM fact WHERE fact_id IN (${ids}) ORDER BY year,date_start,fact_id;`);
const sourceRows = await runSqlite(`SELECT fact_id,ordinal,source_item_id,source_authority,source_type,source_locator,source_url,payload_json FROM source_bundle WHERE fact_id IN (${ids}) ORDER BY fact_id,ordinal;`);
const receipt = await readJson(resolve(workerDir, "worker-receipt.json"));
const sourceSearch = await readJson(resolve(workerDir, "source-search-receipt.json"));

const factsById = new Map(facts.map((fact) => [fact.fact_id, fact]));
const sourcesByFact = new Map();
for (const row of sourceRows) {
  const rows = sourcesByFact.get(row.fact_id) ?? [];
  rows.push(row);
  sourcesByFact.set(row.fact_id, rows);
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

const factStep = (factId) => {
  const fact = factsById.get(factId);
  if (!fact) throw new Error(`missing arc fact: ${factId}`);
  const sources = sourcesByFact.get(factId) ?? [];
  const firstSource = pointersFor(factId, 1)[0] ?? null;
  return {
    stepId: fact.fact_id,
    year: fact.year,
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
  uncertainties: ["This is a year-level relationship-end claim carried by a later source, not a dated 1989 event record.", "It does not establish a precise separation, filing, or divorce day."],
};

const arc = {
  arcId: "mercy.arc.madonna-sean-penn-1985-1989",
  title: "Madonna & Sean Penn · marriage through supported 1989 end claim",
  summary: "A source-labelled relationship arc from the 1985 wedding through shared 1986 contexts, a 1987 separation interview, a 1988 shared performance context, and a retained source claim that the marriage ended in 1989.",
  state: "archive_visible_supported_with_explicit_gap",
  years: [1985, 1986, 1987, 1988, 1989],
  steps: [
    factStep("mercy.fact.4c1d21bfa7cbd55361bc"),
    factStep("mercy.fact.ea26511de50d033f7e3f"),
    factStep("mercy.fact.caf970534db4f661c9f6"),
    factStep("mercy.core.fact.54fdcb9f29343bda0aeb"),
    factStep("mercy.fact.af5d1e120a9c84210f69"),
    endStep,
  ],
  gaps: [
    "The retained-source search found no explicit account that Sean Penn first met Madonna on the Material Girl set; that lead remains a source-scoped candidate.",
    "The 1989 endpoint is supported as a year claim in a later source, not as a separately dated 1989 event record.",
  ],
  inputFingerprints: Object.fromEntries(Object.entries(receipt.input_files).map(([key, value]) => [key, value.fingerprint])),
  workerJobId: receipt.job_id,
  sourceSearchState: sourceSearch.explicit_miss?.state || "unresolved",
  authorityBoundary: "Derived arc projection only; source facts remain separately labelled and no canonical, inventory, media, filesystem, or public-network writes occurred.",
  nextAction: "Resolve or preserve the first-meeting candidate through a new retained-source lane or curator testimony; do not infer it from the arc sequence.",
};

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
  "export type MercyArcStep = {",
  "  stepId: string; year: number; label: string; dateStart: string; dateEnd: string; datePrecision: string; dateRole: string; dateBasis: string; factType: string; assertion: string; confidence: number; state: string; place: string; sourceCount: number; sourceExcerpt: string; sourcePointers: MercyArcSourcePointer[]; uncertainties: Array<{ detail?: string; kind?: string } | string>;",
  "};",
  "",
  "export type MercyReaderArc = {",
  "  arcId: string; title: string; summary: string; state: string; years: number[]; steps: MercyArcStep[]; gaps: string[]; inputFingerprints: Record<string, string>; workerJobId: string; sourceSearchState: string; authorityBoundary: string; nextAction: string;",
  "};",
  "",
  "export const mercyReaderArcs: MercyReaderArc[] = ",
  `${json([arc])};`,
  "",
];

await writeFile(outputPath, lines.join("\n"));
console.log(`Generated ${arc.steps.length} steps across ${arc.years.length} years for ${arc.arcId}.`);
