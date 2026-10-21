import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const repoDir = resolve(new URL("..", import.meta.url).pathname);
const workspaceRoot = resolve(repoDir, "..");
const receiptPath = resolve(workspaceRoot, "lmstudio_operating_model/receipts/mercy-reader-virgin-tour-opening-inspection-2026-10-21-v1/receipt.json");

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const receipt = JSON.parse(await readFile(receiptPath, "utf8"));
assert(receipt.status === "completed_read_only_representation_inspection", "Virgin Tour inspection is not terminal");
assert(receipt.graph_inputs?.graph_database_fingerprint === "sha256:a58a64bd595ff091637ccd7795fdea601176e1ee9a9b57a0a0ce69adab589b99", "Virgin Tour inspection is bound to the wrong graph");
assert(receipt.graph_inputs?.fact_id === "mercy.fact.02cb7a58d582a22515b9", "Virgin Tour inspection fact drift");
assert(receipt.graph_inputs?.source_bundle_count === 15, "Virgin Tour source bundle count drift");
for (const field of ["canonical_authority", "inventory_authority", "archive_media", "archive_filesystem", "public_network"]) assert(receipt.writes?.[field] === 0, `prohibited write boundary is not zero: ${field}`);

for (const expected of [
  {
    id: "representation.inventory.asset:10259",
    bytes: 120753,
    sha256: "64b44e00cac94bdd56c70802aa1b5f04a7e16f4ff0fc0e9d0d238b2296195a60",
  },
  {
    id: "representation.inventory.asset:10690",
    bytes: 36418201,
    sha256: "8556f055139c26dad4bd6b652f8b31c0d08a1f515fc179dbaf9d016813b5ad39",
  },
]) {
  const row = receipt.representations.find((representation) => representation.representation_id === expected.id);
  assert(row, `Virgin Tour representation receipt row is missing: ${expected.id}`);
  const file = await stat(row.absolute_path);
  assert(file.isFile(), `Virgin Tour representation path is not a file: ${row.absolute_path}`);
  assert(file.size === expected.bytes && row.bytes === expected.bytes, `Virgin Tour representation byte count drift: ${expected.id}`);
  const hash = createHash("sha256").update(await readFile(row.absolute_path)).digest("hex");
  assert(hash === expected.sha256 && row.sha256 === expected.sha256, `Virgin Tour representation fingerprint drift: ${expected.id}`);
  assert(row.historical_match?.fact_id === "mercy.fact.02cb7a58d582a22515b9", `Virgin Tour historical match drift: ${expected.id}`);
  assert(row.historical_match?.state === "visible_inferred_filename_match", `Virgin Tour match state drift: ${expected.id}`);
}

console.log("MERCY Virgin Tour opening inspection verified: both preserved Seattle TV-news representations exist, bytes and SHA-256 fingerprints agree, the historical match remains filename/context inferred, and all prohibited writes are zero.");
