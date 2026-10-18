import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const curatorDecisions = sqliteTable("curator_decisions", {
  id: text("id").primaryKey(),
  actorId: text("actor_id").notNull(),
  actorName: text("actor_name").notNull(),
  decisionType: text("decision_type").notNull(),
  domain: text("domain").notNull(),
  subjectLabel: text("subject_label").notNull(),
  targetLabel: text("target_label").notNull(),
  note: text("note").notNull().default(""),
  scope: text("scope").notNull(),
  evidenceBasis: text("evidence_basis").notNull(),
  sourceContext: text("source_context").notNull().default(""),
  relationship: text("relationship"),
  impactItems: integer("impact_items").notNull().default(1),
  pointAward: integer("point_award").notNull(),
  promotionStatus: text("promotion_status").notNull().default("ready_for_promotion"),
  promotionReceipt: text("promotion_receipt"),
  createdAt: text("created_at").notNull(),
});
