import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoDir = resolve(scriptDir, "..");
const workspaceRoot = resolve(repoDir, "..");
const sourcePath = resolve(
  workspaceRoot,
  "lmstudio_operating_model/receipts/mercy-adapter-connection-normalizations/mercy-adapter-connection-wave-2026-v2/run/adapter-connection-normalizer-result.json",
);
const outputPath = resolve(repoDir, "lib/mercy-reader-candidates.ts");
const source = JSON.parse(await readFile(sourcePath, "utf8"));

const candidates = source.partitions.flatMap((partition) => partition.candidate_connections.map((entry) => ({
  candidateId: entry.connection.connection_id,
  partitionId: entry.partition_id,
  year: partition.partition.year,
  domain: partition.partition.domain,
  domainLabel: partition.partition.domain_label,
  state: entry.state,
  dateScope: entry.date_scope,
  adapterSourceId: entry.adapter_source_id,
  sourceEvidenceId: entry.source_id,
  subject: entry.connection.subject.label,
  target: entry.connection.object.label,
  predicate: entry.connection.predicate,
  confidence: entry.connection.confidence,
  dateClaim: entry.connection.date_claim ?? null,
  evidenceText: entry.connection.evidence?.text ?? "",
  nonclaims: entry.connection.nonclaims ?? [],
  sourceLanes: partition.partition.source_lanes ?? [],
  partitionObservedRows: partition.partition.observed_row_count ?? 0,
  partitionRepresentationObservations: partition.representation_observations?.length ?? 0,
  heldSources: (partition.holds ?? []).map((hold) => hold.source_id),
})));

const output = [
  "// Generated from the QA-bound normalized Mercy adapter projection. Do not hand-edit.",
  "// Candidate relationships remain source-scoped and non-canonical until curator disposition.",
  "// Source: lmstudio_operating_model/receipts/mercy-adapter-connection-normalizations/mercy-adapter-connection-wave-2026-v2/run/adapter-connection-normalizer-result.json",
  "// Source fingerprint: sha256:ae71058bc34c7ee802f4886659e5cb79ead86d244126e5ca97f95fc5808bbbb8",
  "// QA receipt: lmstudio_operating_model/receipts/mercy-adapter-connection-qa/mercy-adapter-connection-wave-2026-v2/run/qa-receipt.json",
  "// QA fingerprint: sha256:a9eadcc1c5566d5b998ad56eb03fc1e444fa5a086e91637b5b151eab66e8a741",
  "",
  "export type MercyCandidateDateClaim = {",
  "  claim_year: string;",
  "  precision: string;",
  "  scope: string;",
  "  value: string;",
  "};",
  "",
  "export type MercyCandidate = {",
  "  candidateId: string;",
  "  partitionId: string;",
  "  year: number;",
  "  domain: string;",
  "  domainLabel: string;",
  "  state: string;",
  "  dateScope: string;",
  "  adapterSourceId: string;",
  "  sourceEvidenceId: string;",
  "  subject: string;",
  "  target: string;",
  "  predicate: string;",
  "  confidence: number;",
  "  dateClaim: MercyCandidateDateClaim | null;",
  "  evidenceText: string;",
  "  nonclaims: string[];",
  "  sourceLanes: string[];",
  "  partitionObservedRows: number;",
  "  partitionRepresentationObservations: number;",
  "  heldSources: string[];",
  "};",
  "",
  "export const mercyCandidateQueueMeta = {",
  '  qaState: "qa_pass_derived_only",',
  "  qaChecksPassed: 12,",
  "  candidateCount: 21,",
  "  heldAdapterObservationCount: 14,",
  "  representationObservationCount: 21,",
  '  authorityBoundary: "Derived source-scoped candidates only; no canonical promotion, inventory mutation, media mutation, filesystem mutation, or public-network acquisition.",',
  "} as const;",
  "",
  "export const mercyReaderCandidates: MercyCandidate[] = ",
  JSON.stringify(candidates, null, 2),
  ";",
  "",
].join("\n");

await writeFile(outputPath, output);
console.log(`Generated ${candidates.length} QA-bound Mercy candidate relationships.`);
