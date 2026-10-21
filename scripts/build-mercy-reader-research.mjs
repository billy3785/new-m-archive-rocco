import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const repoDir = resolve(new URL("..", import.meta.url).pathname);
const workspaceRoot = resolve(repoDir, "..");
const workerDir = resolve(workspaceRoot, "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph");
const outputPath = resolve(repoDir, "lib/mercy-reader-research.ts");

const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
const readJsonl = async (path) => (await readFile(path, "utf8"))
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => JSON.parse(line));
const json = (value) => JSON.stringify(value, null, 2);

const receipt = await readJson(resolve(workerDir, "worker-receipt.json"));
const sourceSearch = await readJson(resolve(workerDir, "source-search-receipt.json"));
const learning = await readJson(resolve(workerDir, "learning-ledger.json"));
const proposals = await readJsonl(resolve(workerDir, "connection-proposals.jsonl"));
const representationLedger = await readJsonl(resolve(workerDir, "representation-match-ledger.jsonl"));
const contradictionLedger = await readJsonl(resolve(workerDir, "contradiction-ledger.jsonl"));
const auxiliaryAudit = await readJson(resolve(workerDir, "auxiliary-source-lane-audit.json"));
const auxiliaryQa = await readJson(resolve(workerDir, "auxiliary-source-lane-audit-qa-receipt.json"));

const compactPointer = (pointer) => ({
  family: pointer.family ?? null,
  packetId: pointer.packet_id ?? null,
  graphFactId: pointer.graph_fact_id ?? null,
  graphFactTitle: pointer.graph_fact_title ?? null,
  sourceClusters: Array.isArray(pointer.source_clusters) ? pointer.source_clusters : [],
  sourceLocator: pointer.source_locator ?? null,
});

const readerProposals = proposals.map((proposal) => ({
  proposalId: proposal.proposal_id,
  subjectId: proposal.subject_id,
  objectId: proposal.object_id,
  predicate: proposal.predicate,
  state: proposal.state,
  confidence: proposal.confidence,
  dateClaim: proposal.date_claim ?? null,
  evidencePointers: Array.isArray(proposal.evidence_pointers) ? proposal.evidence_pointers.map(compactPointer) : [],
  nonclaims: Array.isArray(proposal.nonclaims) ? proposal.nonclaims : [],
}));

const readerQuestions = (learning.questions ?? []).map((question) => ({
  questionId: question.question_id,
  question: question.question,
  state: question.state,
  priority: question.priority,
  answerEffect: question.answer_effect,
  impact: question.eligible_impact,
  evidencePointers: question.evidence_pointers ?? [],
  suppressedCounts: question.suppressed_counts ?? {},
}));

const readerMeta = {
  jobId: receipt.job_id,
  status: receipt.status,
  implementationVersion: receipt.implementation_version,
  years: receipt.years,
  sourceRecordCount: receipt.metrics.source_record_count,
  proposalCount: receipt.metrics.connection_proposal_count,
  directFirstMeetingHitCount: receipt.metrics.direct_first_meeting_material_girl_hit_count,
  aliasProposalCount: receipt.metrics.alias_proposal_count,
  contradictionLedgerCount: receipt.metrics.contradiction_ledger_count,
  representationLedgerCount: receipt.metrics.representation_ledger_count,
  searchedLanes: [...receipt.searched_lanes, "retained_mad_eyes_html", "local_master_case_projections"],
  inputFingerprints: Object.fromEntries(Object.entries(receipt.input_files).map(([key, value]) => [key, value.fingerprint])),
  sourceSearch: {
    state: sourceSearch.explicit_miss?.state ?? "unresolved",
    reason: sourceSearch.explicit_miss?.reason ?? "The retained-source search did not produce a conclusion.",
    queryFamilies: Object.fromEntries(Object.entries(sourceSearch.query_families ?? {}).map(([family, value]) => [family, value.unique_record_count ?? 0])),
  },
  nextBoundedBatch: auxiliaryAudit.conclusion?.next_safe_action ?? receipt.next_packet?.next_bounded_batch ?? "No next bounded batch recorded.",
  auxiliarySourceLaneAudit: {
    status: auxiliaryAudit.status,
    qaStatus: auxiliaryQa.status,
    directFirstMeetingHit: auxiliaryAudit.conclusion?.direct_first_meeting_hit ?? null,
    madEyesFileCount: auxiliaryAudit.source_lanes?.mad_eyes_retained_html?.files?.length ?? 0,
    masterCaseFileCount: auxiliaryAudit.source_lanes?.local_master_case_projections?.current_file_count ?? 0,
    masterCaseMatchingFileCount: auxiliaryAudit.source_lanes?.local_master_case_projections?.current_matching_file_count ?? 0,
    sourceAuditPath: "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph/auxiliary-source-lane-audit.json",
    qaReceiptPath: "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph/auxiliary-source-lane-audit-qa-receipt.json",
  },
  authorityBoundary: receipt.authority_boundary,
  writes: receipt.writes,
  publicNetwork: receipt.inference?.public_network ?? 0,
  workerReceiptPath: "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph/worker-receipt.json",
  sourceSearchReceiptPath: "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph/source-search-receipt.json",
};

const lines = [
  "// Generated from the completed, receipt-backed MERCY connection worker. Do not hand-edit.",
  "// Derived research only: no canonical, inventory, media, filesystem, or public-network writes.",
  "",
  "export type MercyResearchPointer = {",
  "  family: string | null;",
  "  packetId: string | null;",
  "  graphFactId: string | null;",
  "  graphFactTitle: string | null;",
  "  sourceClusters: string[];",
  "  sourceLocator: string | null;",
  "};",
  "",
  "export type MercyResearchProposal = {",
  "  proposalId: string;",
  "  subjectId: string;",
  "  objectId: string;",
  "  predicate: string;",
  "  state: string;",
  "  confidence: string;",
  "  dateClaim: { role: string; value: string; precision: string } | null;",
  "  evidencePointers: MercyResearchPointer[];",
  "  nonclaims: string[];",
  "};",
  "",
  "export type MercyResearchQuestion = {",
  "  questionId: string;",
  "  question: string;",
  "  state: string;",
  "  priority: string;",
  "  answerEffect: string;",
  "  impact: { candidate_connections: number; cross_year_arc: number; potential_representation_links: number };",
  "  evidencePointers: Array<{ graph_fact_id: string }>;",
  "  suppressedCounts: Record<string, number>;",
  "};",
  "",
  "export const mercyResearchMeta = ",
  `${json(readerMeta)} as const;`,
  "",
  "export const mercyResearchProposals: MercyResearchProposal[] = ",
  json(readerProposals),
  ";",
  "",
  "export const mercyResearchQuestions: MercyResearchQuestion[] = ",
  json(readerQuestions),
  ";",
  "",
  "export const mercyResearchRepresentationLedger = ",
  `${json(representationLedger)} as const;`,
  "",
  "export const mercyResearchContradictionLedger = ",
  `${json(contradictionLedger)} as const;`,
  "",
];

await writeFile(outputPath, lines.join("\n"));
console.log(`Generated ${readerProposals.length} research proposals, ${readerQuestions.length} curator questions, and ${representationLedger.length + contradictionLedger.length} ledger rows.`);
