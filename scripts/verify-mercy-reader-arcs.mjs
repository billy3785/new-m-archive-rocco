import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const repoDir = resolve(new URL("..", import.meta.url).pathname);
const workspaceRoot = resolve(repoDir, "..");
const workerDir = resolve(workspaceRoot, "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v1");
const graphQaPath = resolve(workspaceRoot, "lmstudio_operating_model/receipts/mercy-working-graph/mercy-working-graph-1958-2026-v1.rebuild-20261021-resumed-qa/qa-receipt.json");
const virginTourInspectionPath = resolve(workspaceRoot, "lmstudio_operating_model/receipts/mercy-reader-virgin-tour-opening-inspection-2026-10-21-v1/receipt.json");
const generatedPath = resolve(repoDir, "lib/mercy-reader-arcs.ts");

const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
const count = (text, pattern) => text.match(pattern)?.length ?? 0;
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const receipt = await readJson(resolve(workerDir, "worker-receipt.json"));
const sourceSearch = await readJson(resolve(workerDir, "source-search-receipt.json"));
const graphQa = await readJson(graphQaPath);
const virginTourInspection = await readJson(virginTourInspectionPath);
const generated = await readFile(generatedPath, "utf8");

assert(receipt.status === "completed_connection_discovery_worker", "worker receipt is not terminal");
assert(generated.includes("mercy.arc.madonna-sean-penn-1985-1989"), "generated arc id is missing");
assert(generated.includes("mercy.arc.like-a-virgin-1984-1985"), "Like a Virgin arc id is missing");
assert(generated.includes("mercy.arc.photo-sessions-publications-representations-1991-1995"), "photo representation arc id is missing");
assert(generated.includes("mercy.arc.crazy-for-you-demo-to-release-1983-1985"), "Crazy for You demo-to-release arc id is missing");
assert(generated.includes("mercy.arc.beautiful-stranger-video-to-aired-representations-1999"), "Beautiful Stranger video-to-representations arc id is missing");
assert(generated.includes("mercy.arc.virgin-tour-opening-broadcast-representations-1985"), "Virgin Tour opening broadcast arc id is missing");
assert(generated.includes(receipt.job_id), "generated arc is bound to the wrong worker job");
assert(generated.includes(graphQa.qa_id), "Like a Virgin arc is bound to the wrong graph QA job");
assert(generated.includes(virginTourInspection.job_id), "Virgin Tour arc is bound to the wrong inspection job");
for (const input of Object.values(receipt.input_files)) {
  assert(generated.includes(input.fingerprint), `missing arc input fingerprint: ${input.fingerprint}`);
}
assert(count(generated, /"arcId":/g) === 6, "arc count drift");
assert(count(generated, /"stepId":/g) === 25, "arc step count drift");
for (const year of [1983, 1984, 1985, 1986, 1987, 1988, 1989, 1991, 1992, 1995, 1999]) assert(generated.includes(`"year": ${year}`), `arc year missing: ${year}`);
for (const lane of ["recording / song and album", "album / cover", "music video / visual", "publication", "tour / performance"]) assert(generated.includes(`"lane": "${lane}"`), `Like a Virgin lane missing: ${lane}`);
for (const lane of ["advertisement / broadcast", "publication / Vanity Fair", "campaign / Something to Remember"]) assert(generated.includes(`"lane": "${lane}"`), `photo representation lane missing: ${lane}`);
for (const lane of ["demo / song", "recording / song version", "film / scene", "single / release", "soundtrack / promotion"]) assert(generated.includes(`"lane": "${lane}"`), `Crazy for You lane missing: ${lane}`);
for (const lane of ["recording / song", "music video / shoot", "broadcast / video introduction", "publication / remix"]) assert(generated.includes(`"lane": "${lane}"`), `Beautiful Stranger lane missing: ${lane}`);
for (const representationId of ["representation.inventory.asset:10188", "representation.inventory.asset:10126", "representation.inventory.asset:10239", "representation.inventory.asset:10327", "representation.inventory.asset:10329"]) assert(generated.includes(`"representationId": "${representationId}"`), `representation missing: ${representationId}`);
for (const representationId of ["representation.inventory.asset:10187", "representation.inventory.asset:10351"]) assert(generated.includes(`"representationId": "${representationId}"`), `Beautiful Stranger representation missing: ${representationId}`);
for (const representationId of ["representation.inventory.asset:10259", "representation.inventory.asset:10690"]) assert(generated.includes(`"representationId": "${representationId}"`), `Virgin Tour representation missing: ${representationId}`);
assert(generated.includes("Filename/context association is evidence-labelled"), "representation caution is missing");
assert(generated.includes("The five local representations are filename/context matches"), "photo arc representation gap is missing");
assert(generated.includes('"dateRole": "relationship_end_claim"'), "relationship-end date role is missing");
assert(generated.includes("the containing source record is published in 2005"), "later-source basis is missing");
assert(generated.includes("first met Madonna on the Material Girl set"), "first-meeting gap is missing");
assert(generated.includes("source-scoped candidate"), "candidate state is not visible in the arc boundary");
assert(generated.includes("mercy.fact.64d3c813362a472e4579"), "Crazy for You demo fact is missing");
assert(generated.includes("The retained source explicitly distinguishes the live demo"), "demo/version distinction is missing");
assert(generated.includes("No local film master, B-roll, tag, or other archive representation"), "film representation boundary is missing");
assert(generated.includes("mercy.fact.2394fba0a99f5cb480a3"), "Beautiful Stranger aired-program fact is missing");
assert(generated.includes("The two local files are evidence-labelled filename/context matches"), "Beautiful Stranger representation caution is missing");
assert(generated.includes("No separately typed B-roll, tag, or technical-master relation"), "Beautiful Stranger unresolved endpoints are missing");
assert(generated.includes("mercy.fact.02cb7a58d582a22515b9"), "Virgin Tour opening fact is missing");
assert(generated.includes("contextually_matches_representation"), "Virgin Tour typed representation edge is missing");
assert(generated.includes("The two local files are receipt-backed filename/context matches"), "Virgin Tour representation boundary is missing");
for (const fingerprint of ["64b44e00cac94bdd56c70802aa1b5f04a7e16f4ff0fc0e9d0d238b2296195a60", "8556f055139c26dad4bd6b652f8b31c0d08a1f515fc179dbaf9d016813b5ad39"]) assert(generated.includes(fingerprint), `Virgin Tour inspection fingerprint missing: ${fingerprint}`);
assert(generated.includes(`"sourceSearchState": "${sourceSearch.explicit_miss?.state || "unresolved"}"`), "source-search state drift");
assert(count(generated, /The retained-source search found no explicit account/g) === 1, "first-meeting gap count drift");
assert(count(generated, /The 1989 endpoint is supported as a year claim/g) === 1, "1989 gap count drift");
for (const field of ["archive_filesystem", "archive_media", "canonical_authority", "inventory_authority", "public_network"]) {
  assert(receipt.writes[field] === 0, `worker write boundary is not zero: ${field}`);
  assert(graphQa.writes[field] === 0, `graph QA write boundary is not zero: ${field}`);
}

console.log("MERCY arc surface verified: 6 arcs, 25 source-labelled steps, 1983–1999 coverage, Like a Virgin lanes, nine representation observations, Virgin Tour opening typed representation edges, Crazy for You demo/version boundary, Beautiful Stranger aired-program representation boundary, Sean Penn year-level basis, explicit gaps, and zero prohibited writes agree.");
