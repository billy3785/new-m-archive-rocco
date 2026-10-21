import { desc, eq } from "drizzle-orm";
import { createHash } from "node:crypto";
import { getChatGPTUser } from "@/app/chatgpt-auth";
import { getDb } from "@/db";
import { curatorDecisions } from "@/db/schema";

const decisionTypes = new Set(["confirm_identity", "separate_identity", "connect", "new_canonical", "hold_relationship"]);
const domains = new Set(["Person", "Place", "Thing", "Relationship"]);
const scopes = new Set(["this_case", "matching_claims", "source_family", "precedent"]);
const evidenceBases = new Set(["curator_assertion", "retained_source", "combined"]);

type DecisionPayload = {
  decisionType?: unknown;
  domain?: unknown;
  subjectLabel?: unknown;
  targetLabel?: unknown;
  note?: unknown;
  scope?: unknown;
  evidenceBasis?: unknown;
  sourceContext?: unknown;
  relationship?: unknown;
  impactItems?: unknown;
};

function normalizedText(value: unknown, maximum: number) {
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}

function awardFor(decisionType: string, scope: string, note: string, impactItems: number) {
  const base = { confirm_identity: 18, separate_identity: 16, connect: 22, new_canonical: 24, hold_relationship: 12 }[decisionType] ?? 0;
  const scopeBonus = { this_case: 0, matching_claims: 5, source_family: 10, precedent: 15 }[scope] ?? 0;
  const contextBonus = note.length >= 24 ? 5 : 0;
  return base + scopeBonus + contextBonus + Math.min(Math.max(impactItems - 1, 0), 8);
}

function buildDecisionReceipt(decision: {
  id: string;
  actorId: string;
  decisionType: string;
  domain: string;
  subjectLabel: string;
  targetLabel: string;
  scope: string;
  evidenceBasis: string;
  sourceContext: string;
  relationship: string | null;
  createdAt: string;
}) {
  const receiptBasis = JSON.stringify({
    decision_id: decision.id,
    actor_id: decision.actorId,
    decision_type: decision.decisionType,
    domain: decision.domain,
    subject_label: decision.subjectLabel,
    target_label: decision.targetLabel,
    scope: decision.scope,
    evidence_basis: decision.evidenceBasis,
    source_context: decision.sourceContext,
    relationship: decision.relationship,
    created_at: decision.createdAt,
  });
  return {
    schema: "mercy-private-curator-decision/v1",
    receipt_id: `mercy.decision.receipt.${decision.id}`,
    decision_id: decision.id,
    recorded_at: decision.createdAt,
    state: "recorded_pending_qa",
    promotion_state: "not_attempted",
    actor_id: decision.actorId,
    input_fingerprint: `sha256:${createHash("sha256").update(receiptBasis).digest("hex")}`,
    authority_boundary: "Private curator ledger only; no canonical, inventory, archive-media, filesystem, or public-network mutation.",
    writes: {
      private_decision_ledger: 1,
      canonical_authority: 0,
      inventory_authority: 0,
      archive_media: 0,
      archive_filesystem: 0,
      public_network: 0,
    },
    next_action: "Route the preserved curator assertion through QA before any promotion or reusable learning rule is considered.",
  };
}

function toDecision(row: typeof curatorDecisions.$inferSelect) {
  let receiptState = "legacy_unreceipted";
  try {
    receiptState = JSON.parse(row.promotionReceipt || "{}").state || receiptState;
  } catch {
    receiptState = "legacy_unreceipted";
  }
  return {
    id: row.id,
    decisionType: row.decisionType,
    domain: row.domain,
    subjectLabel: row.subjectLabel,
    targetLabel: row.targetLabel,
    note: row.note,
    scope: row.scope,
    evidenceBasis: row.evidenceBasis,
    pointAward: row.pointAward,
    promotionStatus: row.promotionStatus,
    receiptState,
    createdAt: row.createdAt,
  };
}

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in is required to open your private decision ledger." }, { status: 401 });
  try {
    const rows = await getDb().select().from(curatorDecisions).where(eq(curatorDecisions.actorId, user.userId)).orderBy(desc(curatorDecisions.createdAt)).limit(100);
    return Response.json({ decisions: rows.map(toDecision) });
  } catch (error) {
    const message = error instanceof Error ? error.message : "The private decision ledger is unavailable.";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in is required to record a curator decision." }, { status: 401 });
  try {
    const payload = (await request.json()) as DecisionPayload;
    const decisionType = normalizedText(payload.decisionType, 40);
    const domain = normalizedText(payload.domain, 40);
    const subjectLabel = normalizedText(payload.subjectLabel, 160);
    const targetLabel = normalizedText(payload.targetLabel, 200);
    const note = normalizedText(payload.note, 2_000);
    const scope = normalizedText(payload.scope, 40);
    const evidenceBasis = normalizedText(payload.evidenceBasis, 40);
    const sourceContext = normalizedText(payload.sourceContext, 500);
    const relationship = normalizedText(payload.relationship, 120);
    const requestedImpact = typeof payload.impactItems === "number" ? Math.floor(payload.impactItems) : 1;
    const impactItems = Math.max(1, Math.min(requestedImpact, 100));
    if (!decisionTypes.has(decisionType) || !domains.has(domain) || !scopes.has(scope) || !evidenceBases.has(evidenceBasis)) return Response.json({ error: "That decision uses an unsupported controlled value." }, { status: 400 });
    if (!subjectLabel || !targetLabel) return Response.json({ error: "A subject and a canonical target are required." }, { status: 400 });
    if (scope === "precedent" && note.length < 12) return Response.json({ error: "A reusable precedent needs a short explanation of its boundary." }, { status: 400 });
    const decisionId = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const decisionDraft = { id: decisionId, actorId: user.userId, decisionType, domain, subjectLabel, targetLabel, scope, evidenceBasis, sourceContext, relationship: relationship || null, createdAt };
    const decisionReceipt = buildDecisionReceipt(decisionDraft);
    const decision = {
      ...decisionDraft,
      actorName: user.displayName,
      note,
      impactItems,
      pointAward: awardFor(decisionType, scope, note, impactItems),
      promotionStatus: "recorded",
      promotionReceipt: JSON.stringify(decisionReceipt),
    };
    const [saved] = await getDb().insert(curatorDecisions).values(decision).returning();
    return Response.json({ decision: toDecision(saved), receipt: decisionReceipt }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "The decision could not be recorded.";
    return Response.json({ error: message }, { status: 500 });
  }
}
