import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "homepage_hero" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge_label" varchar DEFAULT 'Engineering Enablement' NOT NULL,
  	"headline" varchar DEFAULT 'Engineering Enablement for the Age of AI.' NOT NULL,
  	"subheadline" varchar DEFAULT 'AHA Software is a consulting firm that builds products. Our SpecKit platform turns requirements into executable specifications — helping enterprise engineering teams eliminate rework and ship with confidence. Built enablement programs for AWS consulting partners at scale.' NOT NULL,
  	"primary_cta_text" varchar DEFAULT 'Explore Our Services' NOT NULL,
  	"primary_cta_link" varchar DEFAULT '/services' NOT NULL,
  	"secondary_cta_text" varchar DEFAULT 'Schedule a Consultation' NOT NULL,
  	"secondary_cta_link" varchar DEFAULT '/contact' NOT NULL,
  	"quote_text" varchar,
  	"quote_attribution" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "homepage_pillars_pillars_capabilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_pillars_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_pillars" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'How We Deliver Results' NOT NULL,
  	"section_subheading" varchar DEFAULT 'A consulting firm that builds products. A product built from consulting expertise. Three ways we help enterprise engineering teams ship better software, faster.' NOT NULL,
  	"section_label" varchar DEFAULT 'Section 01 // How We Deliver' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "homepage_speckit_feature_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_speckit" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_label" varchar DEFAULT 'Product + Framework + Methodology' NOT NULL,
  	"heading" varchar DEFAULT 'Introducing SpecKit.' NOT NULL,
  	"description" varchar DEFAULT 'SpecKit™ is a platform, a framework, and a methodology — built by AHA Software to close the gap between what you specify and what gets shipped. License the tooling, bring in AHA to implement it, or train your teams to run it independently.' NOT NULL,
  	"proof_point" varchar DEFAULT 'Proven across enterprise engagements — from Fortune 500 consulting to AWS-scale enablement.' NOT NULL,
  	"integration_title" varchar DEFAULT 'Seamless Integration' NOT NULL,
  	"integration_description" varchar DEFAULT 'SpecKit plugs into your existing CI/CD pipelines and development workflows. No platform migration required — just better traceability from spec to deployment.' NOT NULL,
  	"cta_text" varchar DEFAULT 'Join the Waitlist' NOT NULL,
  	"cta_link" varchar DEFAULT '/contact' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "homepage_contact_contact_entries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_contact_challenge_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Ready to Transform Your Engineering Organization?' NOT NULL,
  	"subheadline" varchar DEFAULT 'Schedule a consultation to discuss engineering enablement, SpecKit implementation, or a delivery health check. No sales pitches — just technical experts who understand your stack.' NOT NULL,
  	"submit_button_text" varchar DEFAULT 'Schedule a Consultation' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "homepage_pillars_pillars_capabilities" ADD CONSTRAINT "homepage_pillars_pillars_capabilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_pillars_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_pillars_pillars" ADD CONSTRAINT "homepage_pillars_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_speckit_feature_cards" ADD CONSTRAINT "homepage_speckit_feature_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_speckit"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_contact_contact_entries" ADD CONSTRAINT "homepage_contact_contact_entries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_contact_challenge_options" ADD CONSTRAINT "homepage_contact_challenge_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_contact"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_pillars_pillars_capabilities_order_idx" ON "homepage_pillars_pillars_capabilities" USING btree ("_order");
  CREATE INDEX "homepage_pillars_pillars_capabilities_parent_id_idx" ON "homepage_pillars_pillars_capabilities" USING btree ("_parent_id");
  CREATE INDEX "homepage_pillars_pillars_order_idx" ON "homepage_pillars_pillars" USING btree ("_order");
  CREATE INDEX "homepage_pillars_pillars_parent_id_idx" ON "homepage_pillars_pillars" USING btree ("_parent_id");
  CREATE INDEX "homepage_speckit_feature_cards_order_idx" ON "homepage_speckit_feature_cards" USING btree ("_order");
  CREATE INDEX "homepage_speckit_feature_cards_parent_id_idx" ON "homepage_speckit_feature_cards" USING btree ("_parent_id");
  CREATE INDEX "homepage_contact_contact_entries_order_idx" ON "homepage_contact_contact_entries" USING btree ("_order");
  CREATE INDEX "homepage_contact_contact_entries_parent_id_idx" ON "homepage_contact_contact_entries" USING btree ("_parent_id");
  CREATE INDEX "homepage_contact_challenge_options_order_idx" ON "homepage_contact_challenge_options" USING btree ("_order");
  CREATE INDEX "homepage_contact_challenge_options_parent_id_idx" ON "homepage_contact_challenge_options" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "homepage_hero" CASCADE;
  DROP TABLE "homepage_pillars_pillars_capabilities" CASCADE;
  DROP TABLE "homepage_pillars_pillars" CASCADE;
  DROP TABLE "homepage_pillars" CASCADE;
  DROP TABLE "homepage_speckit_feature_cards" CASCADE;
  DROP TABLE "homepage_speckit" CASCADE;
  DROP TABLE "homepage_contact_contact_entries" CASCADE;
  DROP TABLE "homepage_contact_challenge_options" CASCADE;
  DROP TABLE "homepage_contact" CASCADE;`)
}
