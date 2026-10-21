import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const repoDir = resolve(new URL("..", import.meta.url).pathname);
const workspaceRoot = resolve(repoDir, "..");
const receiptPath = resolve(workspaceRoot, "lmstudio_operating_model/receipts/mercy-reader-representation-inspection-2026-10-21-v1/receipt.json");

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const receipt = JSON.parse(await readFile(receiptPath, "utf8"));
assert(receipt.status === "completed_read_only_representation_inspection", "representation inspection is not terminal");
assert(receipt.graph_inputs?.graph_database_fingerprint === "sha256:a58a64bd595ff091637ccd7795fdea601176e1ee9a9b57a0a0ce69adab589b99", "representation inspection is bound to the wrong graph");
assert(receipt.writes?.canonical_authority === 0, "canonical authority write boundary is not zero");
assert(receipt.writes?.inventory_authority === 0, "inventory authority write boundary is not zero");
assert(receipt.writes?.archive_media === 0, "archive media write boundary is not zero");
assert(receipt.writes?.archive_filesystem === 0, "archive filesystem write boundary is not zero");
assert(receipt.writes?.public_network === 0, "public network write boundary is not zero");

for (const expected of [
  {
    id: "representation.inventory.asset:10187",
    bytes: 107870,
    sha256: "0a0d1563958cb05c145b90b03de724c589be21626554f95a22ab4570b9ec3d83",
  },
  {
    id: "representation.inventory.asset:10351",
    bytes: 1744966,
    sha256: "34d2252e4bafb1d8f777445d5f344ecdbf1739ae1901ef8ae0890e96aa2c9d0f",
  },
]) {
  const row = receipt.representations.find((representation) => representation.representation_id === expected.id);
  assert(row, `representation receipt row is missing: ${expected.id}`);
  const file = await stat(row.absolute_path);
  assert(file.isFile(), `representation path is not a file: ${row.absolute_path}`);
  assert(file.size === expected.bytes && row.bytes === expected.bytes, `representation byte count drift: ${expected.id}`);
  const hash = createHash("sha256").update(await readFile(row.absolute_path)).digest("hex");
  assert(hash === expected.sha256 && row.sha256 === expected.sha256, `representation fingerprint drift: ${expected.id}`);
  assert(row.historical_match?.fact_id === "mercy.fact.2394fba0a99f5cb480a3", `representation historical match drift: ${expected.id}`);
  assert(row.historical_match?.state === "visible_inferred_filename_match", `representation match state drift: ${expected.id}`);
}

console.log("MERCY representation inspection verified: both Beautiful Stranger Top of the Pops files exist at their preserved paths, bytes and SHA-256 fingerprints agree, the aired-program match remains inferred, and all prohibited writes are zero.");
