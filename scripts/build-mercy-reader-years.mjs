import { writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoDir = resolve(scriptDir, "..");
const workspaceRoot = resolve(repoDir, "..");
const dbPath = resolve(
  workspaceRoot,
  "lmstudio_operating_model/knowledge/mercy-working-canon/mercy-full-span-connected-working-canon-1958-2026-v1.aggregate-v1/mercy-working-graph-1958-2026-v1.repaired-20261021-v1.sqlite",
);
const sourceLabel = "lmstudio_operating_model/knowledge/mercy-working-canon/mercy-full-span-connected-working-canon-1958-2026-v1.aggregate-v1/mercy-working-graph-1958-2026-v1.repaired-20261021-v1.sqlite";
const outputPath = resolve(repoDir, "lib/mercy-reader-years.ts");

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

const years = await runSqlite(`
  SELECT
    year,
    json_extract(metrics_json, '$.fact_count') AS fact_count,
    json_extract(metrics_json, '$.date_claim_count') AS date_claim_count,
    json_extract(metrics_json, '$.connection_count') AS connection_count,
    json_extract(metrics_json, '$.representation_count') AS representation_count,
    json_extract(metrics_json, '$.source_bundle_count') AS source_bundle_count,
    status
  FROM year_projection
  ORDER BY year;
`);

const highlights = await runSqlite(`
  WITH ranked AS (
    SELECT
      year,
      fact_id,
      fact_type,
      substr(title, 1, 180) AS title,
      date_start,
      date_end,
      date_precision,
      confidence,
      substr(assertion, 1, 240) AS assertion,
      source_lanes_json,
      (SELECT COUNT(*) FROM source_bundle source_count WHERE source_count.fact_id = fact.fact_id) AS source_item_count,
      (SELECT source_item_id FROM source_bundle source_first WHERE source_first.fact_id = fact.fact_id ORDER BY ordinal LIMIT 1) AS source_item_id,
      (SELECT source_authority FROM source_bundle source_first WHERE source_first.fact_id = fact.fact_id ORDER BY ordinal LIMIT 1) AS source_authority,
      (SELECT source_type FROM source_bundle source_first WHERE source_first.fact_id = fact.fact_id ORDER BY ordinal LIMIT 1) AS source_type,
      (SELECT source_locator FROM source_bundle source_first WHERE source_first.fact_id = fact.fact_id ORDER BY ordinal LIMIT 1) AS source_locator,
      (SELECT source_url FROM source_bundle source_first WHERE source_first.fact_id = fact.fact_id ORDER BY ordinal LIMIT 1) AS source_url,
      (SELECT payload_json FROM source_bundle source_first WHERE source_first.fact_id = fact.fact_id ORDER BY ordinal LIMIT 1) AS source_payload_json,
      ROW_NUMBER() OVER (
        PARTITION BY year
        ORDER BY date_start, confidence DESC, fact_id
      ) AS rank_in_year
    FROM fact
    WHERE date_start IS NOT NULL
      AND fact_type = 'historical_event'
  )
  SELECT year, fact_id, fact_type, title, date_start, date_end, date_precision,
         confidence, assertion, source_lanes_json, source_item_count, source_item_id,
         source_authority, source_type, source_locator, source_url, source_payload_json
  FROM ranked
  WHERE rank_in_year <= 6
  ORDER BY year, date_start, confidence DESC, fact_id;
`);

const representations = await runSqlite(`
  WITH ranked AS (
    SELECT
      year,
      representation_id,
      observation_state,
      unresolved_reason,
      logical_representation_id,
      payload_json,
      ROW_NUMBER() OVER (
        PARTITION BY year
        ORDER BY CASE WHEN observation_state = 'logical_archive_file' THEN 0 ELSE 1 END,
                 representation_id
      ) AS rank_in_year
    FROM representation
  )
  SELECT year, representation_id, observation_state, unresolved_reason,
         logical_representation_id, payload_json
  FROM ranked
  WHERE rank_in_year <= 6
  ORDER BY year, rank_in_year, representation_id;
`);

const json = (value) => JSON.stringify(value, null, 2);
const parse = (value) => {
  try { return JSON.parse(value || "{}"); } catch { return {}; }
};
const readerRepresentations = representations.map((row) => {
  const payload = parse(row.payload_json);
  const label = payload.preferred_label || payload.label || row.representation_id;
  return {
    year: row.year,
    representationId: row.representation_id,
    label,
    relativePath: payload.relative_path || [payload.parent_path, label].filter(Boolean).join("/") || "(path not supplied)",
    dateToken: payload.date_token || "",
    observationState: row.observation_state || "",
    provenanceState: payload.provenance_state || "",
    logicalRepresentationId: row.logical_representation_id || payload.logical_representation_id || "",
    unresolvedReason: row.unresolved_reason || payload.unresolved_reason || "",
    sourceSenses: Array.isArray(payload.source_senses) ? payload.source_senses : [],
    caution: row.observation_state === "technical_sidecar"
      ? "Technical sidecar observation retained separately; it is not proof of a second historical copy."
      : row.unresolved_reason || "Year-scoped archive representation observation; its presence does not prove assignment to a specific event.",
  };
});
const lines = [
  "// Generated from the read-only aggregate MERCY working graph. Do not hand-edit.",
  "// Source graph status is qa_pass_working_graph; this index never promotes canonical or inventory claims.",
  `// Source DB: ${sourceLabel}`,
  "// Source DB fingerprint: sha256:375543de27929855f1f04511a18a8f4f6efe68163ecc662c8dc90d20beb43a8d",
  "",
  "export type MercyYearSummary = {",
  "  year: number;",
  "  factCount: number;",
  "  dateClaimCount: number;",
  "  connectionCount: number;",
  "  representationCount: number;",
  "  sourceBundleCount: number;",
  "  status: string;",
  "};",
  "",
  "export type MercyYearHighlight = {",
  "  year: number;",
  "  factId: string;",
  "  factType: string;",
  "  title: string;",
  "  dateStart: string;",
  "  dateEnd: string;",
  "  datePrecision: string;",
  "  confidence: number;",
  "  assertion: string;",
  "  sourceLanes: string[];",
  "  sourceItemCount: number;",
  "  sourceEvidence: MercyYearSourceEvidence | null;",
  "};",
  "",
  "export type MercyYearSourceEvidence = {",
  "  sourceItemId: string;",
  "  authority: string;",
  "  sourceType: string;",
  "  locator: string;",
  "  url: string;",
  "  excerpt: string;",
  "};",
  "",
  "export type MercyYearRepresentation = {",
  "  year: number;",
  "  representationId: string;",
  "  label: string;",
  "  relativePath: string;",
  "  dateToken: string;",
  "  observationState: string;",
  "  provenanceState: string;",
  "  logicalRepresentationId: string;",
  "  unresolvedReason: string;",
  "  sourceSenses: string[];",
  "  caution: string;",
  "};",
  "",
  "export const mercyReaderYears: MercyYearSummary[] = ",
  json(years.map((row) => ({
    year: row.year,
    factCount: row.fact_count ?? 0,
    dateClaimCount: row.date_claim_count ?? 0,
    connectionCount: row.connection_count ?? 0,
    representationCount: row.representation_count ?? 0,
    sourceBundleCount: row.source_bundle_count ?? 0,
    status: row.status,
  }))),
  ";",
  "",
  "export const mercyReaderYearHighlights: MercyYearHighlight[] = ",
  json(highlights.map((row) => ({
    year: row.year,
    factId: row.fact_id,
    factType: row.fact_type,
    title: row.title,
    dateStart: row.date_start,
    dateEnd: row.date_end,
    datePrecision: row.date_precision,
    confidence: row.confidence,
    assertion: row.assertion,
    sourceLanes: JSON.parse(row.source_lanes_json || "[]"),
    sourceItemCount: row.source_item_count ?? 0,
    sourceEvidence: row.source_item_id ? (() => {
      const payload = JSON.parse(row.source_payload_json || "{}");
      return {
        sourceItemId: row.source_item_id,
        authority: row.source_authority || "",
        sourceType: row.source_type || "",
        locator: row.source_locator || "",
        url: row.source_url || payload.url || "",
        excerpt: payload.caption_excerpt || "",
      };
    })() : null,
  }))),
  ";",
  "",
  "export const mercyReaderYearRepresentations: MercyYearRepresentation[] =",
  json(readerRepresentations),
  ";",
  "",
];

await writeFile(outputPath, lines.join("\n"));
console.log(`Generated ${years.length} year summaries and ${highlights.length} historical highlights from the aggregate working graph.`);
