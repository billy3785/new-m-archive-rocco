import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const repoDir = resolve(new URL("..", import.meta.url).pathname);
const workspaceRoot = resolve(repoDir, "..");
const workerDir = resolve(workspaceRoot, "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph");
const generatedPath = resolve(repoDir, "lib/mercy-reader-research.ts");

const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
const readJsonl = async (path) => (await readFile(path, "utf8"))
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => JSON.parse(line));
const count = (text, pattern) => text.match(pattern)?.length ?? 0;
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const receipt = await readJson(resolve(workerDir, "worker-receipt.json"));
const learning = await readJson(resolve(workerDir, "learning-ledger.json"));
const proposals = await readJsonl(resolve(workerDir, "connection-proposals.jsonl"));
const representationLedger = await readJsonl(resolve(workerDir, "representation-match-ledger.jsonl"));
const contradictionLedger = await readJsonl(resolve(workerDir, "contradiction-ledger.jsonl"));
const generated = await readFile(generatedPath, "utf8");

assert(receipt.status === "completed_connection_discovery_worker", "worker receipt is not terminal");
assert(generated.includes(receipt.job_id), "generated research surface is bound to the wrong job");
for (const input of Object.values(receipt.input_files)) assert(generated.includes(input.fingerprint), `missing input fingerprint: ${input.fingerprint}`);
assert(count(generated, /"proposalId":/g) === proposals.length, "proposal count drift");
assert(count(generated, /"questionId":/g) === learning.eligible_question_count, "curator question count drift");
assert(count(generated, /"ledger_id":/g) === representationLedger.length + contradictionLedger.length, "ledger count drift");
assert(generated.includes(`"sourceRecordCount": ${receipt.metrics.source_record_count}`), "source record count drift");
assert(generated.includes(`"directFirstMeetingHitCount": ${receipt.metrics.direct_first_meeting_material_girl_hit_count}`), "first-meeting search count drift");
assert(generated.includes(`"publicNetwork": ${receipt.inference.public_network}`), "public-network count drift");
for (const field of ["archive_filesystem", "archive_media", "canonical_authority", "inventory_authority", "public_network"]) {
  assert(receipt.writes[field] === 0, `worker write boundary is not zero: ${field}`);
}
assert(generated.includes("source_scoped_candidate_connection"), "unresolved candidate state is not visible");
assert(generated.includes("awaiting_curator"), "curator question state is not visible");

console.log(`MERCY research surface verified: ${proposals.length} proposals, ${learning.eligible_question_count} curator question, ${representationLedger.length + contradictionLedger.length} ledger rows, pinned fingerprints, and zero prohibited writes agree.`);
