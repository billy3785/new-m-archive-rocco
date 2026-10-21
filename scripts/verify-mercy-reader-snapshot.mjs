import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(scriptDir, "../lib/mercy-reader-data.ts");
const source = await readFile(dataPath, "utf8");

const requiredLiterals = [
  ["source snapshot hash", 'sourceSha256: "sha256:de33369ab4d58986ec0131f62989fe1b6399523b6d7321f31220f7bc74b696b9"'],
  ["QA state", 'qaState: "qa_pending"'],
  ["read mode", 'readMode: "sqlite_read_only_query_only"'],
  ["visible facts", "visibleFacts: 256"],
  ["typed connections", "typedConnections: 1352"],
  ["representations", "representations: 12"],
  ["uncertainties", "uncertaintyCount: 70"],
  ["authority boundary", "No canonical, inventory, archive-media, or filesystem mutation."],
];

const failures = [];
for (const [label, literal] of requiredLiterals) {
  if (!source.includes(literal)) failures.push(`missing ${label}: ${literal}`);
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
