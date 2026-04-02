# Tasks: Homepage Content Rewrite

**Input**: Design documents from `/specs/001-homepage-content-rewrite/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: Verify current state and confirm blocking dependencies

- [x] T001 Checkout branch `001-homepage-content-rewrite` and verify dev server starts with `bun run dev`
- [x] T002 Confirm Roger's inputs for blocking dependencies: (a) real contact email, (b) verified SpecKit metrics with attribution, (c) attributed hero quote. Record provided values or apply fallbacks per research.md.

**Checkpoint**: Dev server running, all blocking dependencies resolved or fallbacks chosen.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: SpecKit naming normalization across all homepage files — MUST complete before user story work to avoid merge conflicts

**CRITICAL**: No user story work can begin until this phase is complete.

- [x] T003 Normalize "Spec Kit", "GitHub Spec Kit", and "GitHub SpecKit" to "SpecKit" (one word, camelCase) in `src/components/home/HeroSection.tsx`
- [x] T004 [P] Normalize naming to "SpecKit" in `src/components/home/CorePillarsSection.tsx`
- [x] T005 [P] Normalize naming to "SpecKit" in `src/components/home/SpecKitSection.tsx`
- [x] T006 [P] Normalize naming to "SpecKit" in `src/components/home/ContactSection.tsx`
- [x] T007 [P] Normalize naming to "SpecKit" in `src/components/home/InsightsSection.tsx`

**Checkpoint**: All homepage component files use "SpecKit" consistently. No "Spec Kit", "GitHub Spec Kit", or "GitHub SpecKit" variants remain.

---

## Phase 3: User Story 1 - Enterprise CTO Understands What AHA Does (Priority: P1) MVP

**Goal**: A CTO landing on the homepage understands within 10 seconds what AHA does, who it's for, and why it's credible.

**Independent Test**: Read only the hero + core pillars sections. Can you answer "What does AHA Software do?" clearly?

### Implementation for User Story 1

- [x] T008 [US1] Rewrite hero headline in `src/components/home/HeroSection.tsx` — replace "Radical Change for the Post-AI Organization" with positioning-aligned headline about engineering enablement in the age of AI (FR-001)
- [x] T009 [US1] Rewrite hero subheadline in `src/components/home/HeroSection.tsx` — replace "We empower developers and align teams" with CTO-facing copy that references SpecKit by name and includes AWS proof point: "Built enablement programs for AWS consulting partners at scale" (FR-002, FR-003)
- [x] T010 [US1] Update hero CTAs in `src/components/home/HeroSection.tsx` — primary: "Explore Our Services" linking to `/services`, secondary: "Schedule a Consultation" linking to `/contact` (FR-010)
- [x] T011 [US1] Update hero badge label in `src/components/home/HeroSection.tsx` — replace "Strategic Alignment" with positioning-relevant label (e.g., "Engineering Enablement")
- [x] T012 [US1] Handle hero quote callout in `src/components/home/HeroSection.tsx` — replace or remove "The architect must be the builder" per Roger's input or fallback (remove quote card, let hero image stand alone) (FR-013)
- [x] T013 [US1] Rewrite core pillars section heading in `src/components/home/CorePillarsSection.tsx` — replace "The Pillars of Engineering Rigor" and kill "precise structuralism" subheading (FR-005)
- [x] T014 [US1] Replace pillar data array in `src/components/home/CorePillarsSection.tsx` — change three pillars from Software Consulting/DevOps Excellence/Strategic Advisory to SpecKit Platform/Enterprise Enablement/Strategic Advisory with CTO-facing descriptions and capabilities (FR-004)
- [x] T015 [US1] Update section counter label in `src/components/home/CorePillarsSection.tsx` — replace "Section 01 // Capabilities" with updated label matching new pillar framing

**Checkpoint**: Hero and Core Pillars clearly communicate AHA's identity, SpecKit, AWS credibility, and three distinct service outcomes. All content is CTO-appropriate.

---

## Phase 4: User Story 2 - Visitor Understands SpecKit's Triple Nature (Priority: P1)

**Goal**: The SpecKit section clearly presents all three facets: product (platform), framework (implementation), methodology (teaching).

**Independent Test**: Read only the SpecKit section. Can you name at least two of three facets?

### Implementation for User Story 2

- [x] T016 [US2] Rewrite SpecKit section label and heading in `src/components/home/SpecKitSection.tsx` — replace "Proprietary Methodology" label and update "Introducing Spec Kit" heading to reflect triple nature (FR-006)
- [x] T017 [US2] Rewrite SpecKit section description in `src/components/home/SpecKitSection.tsx` — replace methodology-only paragraph with copy explaining all three facets: platform you license, framework AHA implements, methodology you learn (FR-006)
- [x] T018 [US2] Replace feature cards data in `src/components/home/SpecKitSection.tsx` — replace "Automated QA Mapping" and "Branch Integrity" with cards representing the three SpecKit facets (FR-006)
- [x] T019 [US2] Update SpecKit metrics in `src/components/home/SpecKitSection.tsx` — replace "94% Rework Reduction" and "3.2x Velocity Increase" with Roger's verified figures and attribution, or remove stats section if figures unavailable (FR-007)
- [x] T020 [US2] Replace "Download Whitepaper" CTA in `src/components/home/SpecKitSection.tsx` — change to "Get Notified When It's Ready" or "Join the Waitlist" with link to newsletter signup or `/contact` (FR-014)
- [x] T021 [US2] Update GitHub Integration card in `src/components/home/SpecKitSection.tsx` — rewrite "Seamless GitHub Integration" to reflect SpecKit's actual integration story, remove dead `href="#"` link (FR-014, SC-004)

**Checkpoint**: SpecKit section presents all three facets. Metrics are real or removed. No dead links.

---

## Phase 5: User Story 3 + 4 - CTA Funnel + Contact Info (Priority: P2)

**Goal**: Coherent CTA progression across all sections. Real contact information only.

**Independent Test**: List all CTAs top-to-bottom. They escalate from learn → contact. All contact info is real.

### Implementation for User Stories 3 & 4

- [x] T022 [US3] Audit all CTAs across homepage components and document current state (list CTA text, destination, section) — verify T008-T021 CTAs form coherent funnel (FR-010)
- [x] T023 [US4] Replace contact info in `src/components/home/ContactSection.tsx` — remove fake London address ("42 Engineering Plaza, London EC2A"), remove fake email ("hello@ahasw.consulting"), replace with real email per Roger's input or fallback (roger@ahasw.com) (FR-008)
- [x] T024 [US4] Replace challenge options in `src/components/home/ContactSection.tsx` — change from "Eliminating Rework/DevOps Hardening/Cloud Architecture/GitHub Spec Kit Implementation" to "AI Readiness Assessment/Engineering Enablement at Scale/SpecKit Implementation/Delivery Health Check" (FR-009)
- [x] T025 [US3] Update contact section heading and CTA in `src/components/home/ContactSection.tsx` — replace "Ready for Radical Change?" with CTO-appropriate heading, update submit button from "Initiate Consultation" to "Schedule a Consultation" (FR-010)
- [x] T026 [US3] Update contact section subheadline in `src/components/home/ContactSection.tsx` — replace "Strategic Alignment workshop" pitch with positioning-aligned consultation description (FR-012)

**Checkpoint**: Every CTA on the homepage links to a real destination. Contact info is real. Challenge options match CTO concerns.

---

## Phase 6: User Story 5 - Insights Section CMS Integration (Priority: P3)

**Goal**: Insights section pulls from Payload CMS with positioning-aligned fallbacks.

**Independent Test**: With CMS data: shows real articles. Without: shows representative fallbacks about engineering/SpecKit.

### Implementation for User Story 5

- [x] T027 [US5] Add Payload CMS fetch to `src/app/(frontend)/page.tsx` — import `getPayload` from `src/lib/payload.ts`, fetch 2 most recent published posts, pass as props to InsightsSection (FR-011)
- [x] T028 [US5] Update InsightsSection component signature in `src/components/home/InsightsSection.tsx` — accept optional `posts` prop for CMS data, use fallback data when prop is empty/undefined
- [x] T029 [US5] Replace fallback article data in `src/components/home/InsightsSection.tsx` — change "High-Quality Software Delivery" and "DevOps for Modern Teams" to articles about SpecKit, engineering enablement, or AI readiness (FR-011, FR-012)
- [x] T030 [US5] Wire CMS article data to InsightsSection rendering in `src/components/home/InsightsSection.tsx` — map Payload Post fields (title, slug, excerpt, featuredImage, publishedAt, categories) to the existing article card structure

**Checkpoint**: With CMS posts available, insights section shows real articles. Without, shows representative fallbacks matching AHA positioning.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: E2E test updates, SEO metadata, final verification

- [x] T031 Update homepage E2E test assertions in `tests/e2e/homepage.spec.ts` — replace content assertions that check for old copy ("Radical Change", "Post-AI", "precise structuralism") with assertions for new copy (SpecKit, enablement, AWS proof point)
- [x] T032 [P] Update SEO metadata in `src/lib/seo.ts` — if `generateOrganizationSchema()` or `generateWebSiteSchema()` contain descriptions referencing old positioning, update to match new content
- [x] T033 [P] Verify no `href="#"` links remain on homepage — scan all 5 homepage components for dead anchor links (SC-004)
- [x] T034 Run `bun run build` and verify homepage still renders as static (○) — CMS fetch must not change route to dynamic (ƒ) unless ISR is configured
- [x] T035 Run full quickstart verification checklist from `specs/001-homepage-content-rewrite/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Phase 2 (naming normalization)
- **User Story 2 (Phase 4)**: Depends on Phase 2. Can run in parallel with US1 (different file: SpecKitSection.tsx)
- **User Stories 3+4 (Phase 5)**: Depends on Phase 2. Can run in parallel with US1/US2 (different file: ContactSection.tsx). T022 (CTA audit) should run after US1/US2 to verify funnel coherence.
- **User Story 5 (Phase 6)**: Depends on Phase 2. Can run in parallel with US1-US4 (different files: page.tsx + InsightsSection.tsx)
- **Polish (Phase 7)**: Depends on ALL user stories completing

### Parallel Opportunities

After Phase 2 (naming normalization), all user stories can proceed in parallel since they modify different files:

```
Phase 2 complete → 
  ├─ US1 (HeroSection.tsx + CorePillarsSection.tsx)
  ├─ US2 (SpecKitSection.tsx)           [parallel]
  ├─ US3+US4 (ContactSection.tsx)       [parallel]
  └─ US5 (page.tsx + InsightsSection.tsx) [parallel]
```

### Within Each User Story

- Content changes before CTA/link updates
- Data arrays before rendering logic
- Heading/label changes before body copy

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Naming normalization
3. Complete Phase 3: User Story 1 (Hero + Core Pillars)
4. **STOP and VALIDATE**: Does the hero clearly communicate what AHA does?
5. Continue to remaining stories

### Incremental Delivery

1. Setup + Naming → Foundation ready
2. US1 (Hero + Pillars) → **MVP: homepage communicates AHA's identity**
3. US2 (SpecKit section) → SpecKit triple nature clear
4. US3+US4 (Contact) → Real info, coherent funnel
5. US5 (Insights CMS) → Dynamic content from CMS
6. Polish → Tests pass, SEO updated, no dead links

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- T002 (blocking dependencies) may require pausing for Roger's input — use fallbacks if needed
- T022 (CTA audit) is best done after US1+US2 to verify full funnel
- T034 (build check) is critical — CMS fetch in page.tsx could change static → dynamic rendering
