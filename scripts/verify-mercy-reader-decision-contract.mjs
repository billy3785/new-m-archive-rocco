import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const repoDir = resolve(new URL("..", import.meta.url).pathname);
const read = (relativePath) => readFile(resolve(repoDir, relativePath), "utf8");
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const route = await read("app/api/decisions/route.ts");
const schema = await read("db/schema.ts");
const reader = await read("components/mercy-reader.tsx");
const desk = await read("app/page.tsx");

assert(route.includes("getChatGPTUser"), "decision route is missing the authenticated user boundary");
assert(route.includes("if (!user)"), "decision route does not reject anonymous access");
for (const controlledSet of ["decisionTypes", "domains", "scopes", "evidenceBases"]) assert(route.includes(`const ${controlledSet} = new Set`), `controlled decision set is missing: ${controlledSet}`);
assert(route.includes('promotionStatus: "recorded"'), "submitted decisions are not kept in the recorded state");
assert(route.includes('promotionReceipt: JSON.stringify(decisionReceipt)'), "submitted decisions do not persist their receipt");
assert(route.includes('schema: "mercy-private-curator-decision/v1"'), "private decision receipt schema is missing");
assert(route.includes('state: "recorded_pending_qa"'), "private decision receipt is missing the pending-QA state");
assert(route.includes('promotion_state: "not_attempted"'), "decision route does not make the no-promotion state explicit");
for (const write of ["canonical_authority: 0", "inventory_authority: 0", "archive_media: 0", "archive_filesystem: 0", "public_network: 0"]) assert(route.includes(write), `decision receipt write boundary is missing: ${write}`);
assert(route.includes("private_decision_ledger: 1"), "private ledger write is not named in the receipt");
assert(route.includes("getDb().insert(curatorDecisions)"), "decision route is not durable through the private ledger");
assert((route.match(/getDb\(\)\.insert\(/g) || []).length === 1, "decision route has an unexpected second database write");
assert(schema.includes('promotionReceipt: text("promotion_receipt")'), "decision schema does not retain the receipt field");
assert(reader.includes("recorded pending QA"), "Reader success state does not expose pending QA");
assert(desk.includes('recorded: "Saved · private receipt recorded · pending QA"'), "Desk history does not expose the recorded receipt state");

console.log("MERCY private decision contract verified: authenticated controlled input, durable private-ledger receipt, recorded_pending_qa state, explicit promotion-not-attempted boundary, zero prohibited writes, and no curator decision submitted during verification.");
