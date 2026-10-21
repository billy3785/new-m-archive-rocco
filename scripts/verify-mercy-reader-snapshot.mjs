import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(scriptDir, "../lib/mercy-reader-data.ts");
const yearsPath = resolve(scriptDir, "../lib/mercy-reader-years.ts");
const candidatesPath = resolve(scriptDir, "../lib/mercy-reader-candidates.ts");
const source = await readFile(dataPath, "utf8");
const yearsSource = await readFile(yearsPath, "utf8");
const candidatesSource = await readFile(candidatesPath, "utf8");

const requiredLiterals = [
  ["source snapshot hash", 'sourceSha256: "sha256:de33369ab4d58986ec0131f62989fe1b6399523b6d7321f31220f7bc74b696b9"'],
  ["read mode", 'readMode: "sqlite_read_only_query_only"'],
  ["visible facts", "visibleFacts: 256"],
  ["typed connections", "typedConnections: 1352"],
  ["representations", "representations: 12"],
  ["uncertainties", "uncertaintyCount: 70"],
  ["authority boundary", "No canonical, inventory, archive-media, or filesystem mutation."],
  ["aggregate graph fingerprint", "sourceDbSha256: \"sha256:375543de27929855f1f04511a18a8f4f6efe68163ecc662c8dc90d20beb43a8d\""],
  ["cohort QA pass", 'qaState: "qa_pass_working_canon_visible"'],
  ["aggregate graph QA pass", 'qaState: "qa_pass_working_graph"'],
  ["repaired projection QA pass", "sourceProjectionQaState: \"qa_pass_repaired_projection\""],
  ["full-span year count", "years: 69"],
  ["full-span fact count", "visibleFacts: 183344"],
  ["full-span connection count", "typedConnections: 2254894"],
];

const failures = [];
for (const [label, literal] of requiredLiterals) {
  if (!source.includes(literal)) failures.push(`missing ${label}: ${literal}`);
}

const generatedCounts = [
  ["year summaries", /\"factCount\":/g, 69],
  ["year highlights", /\"factId\": \"mercy\.fact\./g, 113],
  ["highlight source evidence", /\"sourceEvidence\": \{/g, 113],
  ["year representation previews", /\"representationId\": \"representation\.inventory\.asset:/g, 332],
];
for (const [label, pattern, expected] of generatedCounts) {
  const actual = yearsSource.match(pattern)?.length ?? 0;
  if (actual !== expected) failures.push(`${label}: expected ${expected}, found ${actual}`);
}
if (!yearsSource.includes("sha256:375543de27929855f1f04511a18a8f4f6efe68163ecc662c8dc90d20beb43a8d")) {
  failures.push("generated year index is missing the aggregate graph fingerprint");
}
const candidateQueueLiterals = [
  ["candidate queue QA state", 'qaState: "qa_pass_derived_only"'],
  ["candidate queue count", "candidateCount: 21"],
  ["candidate queue hold count", "heldAdapterObservationCount: 14"],
  ["candidate queue authority boundary", "Derived source-scoped candidates only; no canonical promotion, inventory mutation, media mutation, filesystem mutation, or public-network acquisition."],
];
for (const [label, literal] of candidateQueueLiterals) {
  if (!candidatesSource.includes(literal)) failures.push(`missing ${label}: ${literal}`);
}
const candidateIds = [...candidatesSource.matchAll(/\"candidateId\": \"([^\"]+)\"/g)].map((match) => match[1]);
if (candidateIds.length !== 21 || new Set(candidateIds).size !== 21) {
  failures.push(`candidate queue IDs: expected 21 unique IDs, found ${candidateIds.length} (${new Set(candidateIds).size} unique)`);
}
if (!candidatesSource.includes("sha256:ae71058bc34c7ee802f4886659e5cb79ead86d244126e5ca97f95fc5808bbbb8") || !candidatesSource.includes("sha256:a9eadcc1c5566d5b998ad56eb03fc1e444fa5a086e91637b5b151eab66e8a741")) {
  failures.push("candidate queue is missing its normalized-result or QA receipt fingerprint");
}

const expectedCounts = [
  ["timeline facts", /factId: "(mercy\.fact\.[^"]+)"/g, 12],
  ["reader connections", /connectionId: "(mercy\.connection\.reader\.[^"]+)"/g, 5],
  ["inventory representations", /representationId: "(representation\.inventory\.asset:[^"]+)"/g, 3],
];
for (const [label, pattern, expected] of expectedCounts) {
  const actual = new Set([...source.matchAll(pattern)].map((match) => match[1])).size;
  if (actual !== expected) failures.push(`${label}: expected ${expected}, found ${actual}`);
}

if (failures.length > 0) {
  console.error("MERCY Reader snapshot verification failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("MERCY Reader snapshot verified: 1985 cohort, pinned source hash, QA state, metrics, and visible item counts agree.");
}
