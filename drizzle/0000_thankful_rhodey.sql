CREATE TABLE `curator_decisions` (
	`id` text PRIMARY KEY NOT NULL,
	`actor_id` text NOT NULL,
	`actor_name` text NOT NULL,
	`decision_type` text NOT NULL,
	`domain` text NOT NULL,
	`subject_label` text NOT NULL,
	`target_label` text NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`scope` text NOT NULL,
	`evidence_basis` text NOT NULL,
	`source_context` text DEFAULT '' NOT NULL,
	`relationship` text,
	`impact_items` integer DEFAULT 1 NOT NULL,
	`point_award` integer NOT NULL,
	`promotion_status` text DEFAULT 'ready_for_promotion' NOT NULL,
	`promotion_receipt` text,
	`created_at` text NOT NULL
);
