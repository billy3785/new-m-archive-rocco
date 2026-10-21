import { writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoDir = resolve(scriptDir, "..");
const workspaceRoot = resolve(repoDir, "..");
const dbPath = resolve(
  workspaceRoot,
  "lmstudio_operating_model/knowledge/mercy-working-canon/mercy-full-span-connected-working-canon-1958-2026-v1.aggregate-v1/mercy-working-graph-1958-2026-v1.rebuild-20261021-indexed.sqlite",
);
const sourceLabel = "lmstudio_operating_model/knowledge/mercy-working-canon/mercy-full-span-connected-working-canon-1958-2026-v1.aggregate-v1/mercy-working-graph-1958-2026-v1.rebuild-20261021-indexed.sqlite";
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
      ROW_NUMBER() OVER (
        PARTITION BY year
        ORDER BY date_start, confidence DESC, fact_id
      ) AS rank_in_year
    FROM fact
    WHERE date_start IS NOT NULL
      AND fact_type = 'historical_event'
  )
  SELECT year, fact_id, fact_type, title, date_start, date_end, date_precision,
         confidence, assertion, source_lanes_json
  FROM ranked
  WHERE rank_in_year <= 6
  ORDER BY year, date_start, confidence DESC, fact_id;
`);

const json = (value) => JSON.stringify(value, null, 2);
const lines = [
  "// Generated from the read-only aggregate MERCY working graph. Do not hand-edit.",
  "// Source status remains derived/qa_pending; this index never promotes canonical or inventory claims.",
  `// Source DB: ${sourceLabel}`,
  "// Source DB fingerprint: sha256:5fdd7b4e671dd46337afa72293ff85ba28e131a666a629f5560e04b9b3f0b828",
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
  }))),
  ";",
  "",
];

await writeFile(outputPath, lines.join("\n"));
console.log(`Generated ${years.length} year summaries and ${highlights.length} historical highlights from the aggregate working graph.`);
