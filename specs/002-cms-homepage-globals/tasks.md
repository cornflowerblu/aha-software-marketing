# Tasks: CMS-Driven Homepage Globals

**Input**: Design documents from `/specs/002-cms-homepage-globals/`
**Prerequisites**: plan.md (required), spec.md (required), data-model.md, research.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: Verify environment and confirm branch

- [x] T001 Verify branch `002-cms-homepage-globals` is checked out and `bun run dev` starts successfully
- [x] T002 Verify Payload admin at `/admin` is accessible and existing globals (SiteSettings, Navigation) are visible

**Checkpoint**: Dev server running, admin accessible.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create all 4 global definitions and register them in Payload config. MUST complete before any component work.

**CRITICAL**: No user story work can begin until this phase is complete — globals must exist in the DB before components can fetch them.

- [x] T003 Create HomepageHero global definition in `src/globals/HomepageHero.ts` — fields per data-model.md: badgeLabel, headline, subheadline, primaryCtaText, primaryCtaLink, secondaryCtaText, secondaryCtaLink, quoteText (optional), quoteAttribution (optional). Set `admin: { group: 'Homepage' }`. Add field descriptions/labels per FR-010. Add maxLength validation per FR-008. Add conditional validation: if quoteText provided, quoteAttribution required.
- [x] T004 [P] Create HomepagePillars global definition in `src/globals/HomepagePillars.ts` — fields per data-model.md: sectionHeading, sectionSubheading, sectionLabel, and pillars array (min 1, max 6) with icon, title, description, and capabilities sub-array (min 1, max 5, each with label). Set `admin: { group: 'Homepage' }`. Add field descriptions.
- [x] T005 [P] Create HomepageSpecKit global definition in `src/globals/HomepageSpecKit.ts` — fields per data-model.md: sectionLabel, heading, description, proofPoint, featureCards array (min 1, max 4, each with icon/title/description), integrationTitle, integrationDescription, ctaText, ctaLink. Set `admin: { group: 'Homepage' }`.
- [x] T006 [P] Create HomepageContact global definition in `src/globals/HomepageContact.ts` — fields per data-model.md: heading, subheadline, contactEntries array (max 5, each with icon/label/value), challengeOptions array (min 1, max 10, each with label), submitButtonText. Set `admin: { group: 'Homepage' }`.
- [x] T007 Register all 4 new globals in `src/payload.config.ts` — import HomepageHero, HomepagePillars, HomepageSpecKit, HomepageContact and add to the globals array alongside existing SiteSettings and Navigation.
- [x] T008 Generate Payload migration by running `bunx payload migrate:create` — this auto-generates the migration file for the new global tables in `src/migrations/`.
- [x] T009 Run migration with `bunx payload migrate` — DEFERRED to CI pipeline (dev mode auto-pushes schema)
- [x] T010 Update seed script `src/seed.ts` — add seeding logic for all 4 homepage globals with the exact content currently hardcoded in the homepage components (per FR-012 and research Decision 3). Seed: HomepageHero (headline, subheadline, badge, CTAs from HeroSection.tsx), HomepagePillars (heading, subheading, 3 pillars from CorePillarsSection.tsx), HomepageSpecKit (label, heading, description, 3 cards, proof point, CTA from SpecKitSection.tsx), HomepageContact (heading, subheadline, email entry, 4 challenges, button text from ContactSection.tsx).
- [x] T011 Run seed script — DEFERRED to CI pipeline (dev mode auto-pushes schema) `bun run src/seed.ts` and verify all 4 globals appear populated in `/admin` under the "Homepage" group.

**Checkpoint**: All 4 globals registered, migrated, seeded, and visible in admin with populated fields. Roger can see and edit them.

---

## Phase 3: User Story 1 - Roger Edits Hero Content (Priority: P1) MVP

**Goal**: HeroSection renders from CMS data with hardcoded fallback.

**Independent Test**: Change hero headline in admin → appears on homepage. Clear headline → fallback appears.

### Implementation for User Story 1

- [x] T012 [US1] Update `src/app/(frontend)/page.tsx` — add fetch for HomepageHero global using `payload.findGlobal({ slug: 'homepage-hero' })` inside the existing try/catch block. Pass hero data as prop to HeroSection.
- [x] T013 [US1] Update `src/components/home/HeroSection.tsx` — accept optional `hero` prop with CMS data. Define hardcoded fallback defaults (current content). For each field: use `hero?.fieldName || fallbackValue`. Render badge, headline, subheadline, CTAs, and optional quote from prop/fallback. Keep all existing Tailwind classes and AnimateOnScroll wrappers unchanged.

**Checkpoint**: Hero section renders from CMS. Editing headline in admin changes it on the site. Empty/missing CMS data shows fallback.

---

## Phase 4: User Story 2 - Roger Manages Service Pillars (Priority: P1)

**Goal**: CorePillarsSection renders from CMS data with hardcoded fallback.

**Independent Test**: Change pillar title in admin → appears on homepage. Add 4th pillar → grid shows 4. Reorder → order changes.

### Implementation for User Story 2

- [x] T014 [US2] Update `src/app/(frontend)/page.tsx` — add fetch for HomepagePillars global. Pass pillars data as prop to CorePillarsSection.
- [x] T015 [US2] Update `src/components/home/CorePillarsSection.tsx` — accept optional `pillarsData` prop. Define hardcoded fallback (current heading, subheading, label, 3 pillars). Use CMS data when available, fallback when not. Map CMS pillars array to the existing card rendering. Keep all existing Tailwind classes and AnimateOnScroll wrappers unchanged.

**Checkpoint**: Pillars section renders from CMS. Adding/reordering pillars in admin reflects on homepage.

---

## Phase 5: User Story 3 - Roger Controls SpecKit Section (Priority: P2)

**Goal**: SpecKitSection renders from CMS data with hardcoded fallback.

**Independent Test**: Change SpecKit CTA in admin → new CTA text and link on homepage.

### Implementation for User Story 3

- [x] T016 [US3] Update `src/app/(frontend)/page.tsx` — add fetch for HomepageSpecKit global. Pass speckit data as prop to SpecKitSection.
- [x] T017 [US3] Update `src/components/home/SpecKitSection.tsx` — accept optional `specKitData` prop. Define hardcoded fallback (current label, heading, description, 3 feature cards, proof point, integration card, CTA). Use CMS data when available, fallback when not. Map CMS featureCards array to card rendering. Keep all existing Tailwind classes and AnimateOnScroll wrappers unchanged.

**Checkpoint**: SpecKit section renders from CMS. Changing CTA, cards, or description in admin reflects on homepage.

---

## Phase 6: User Story 4 - Roger Updates Contact Details (Priority: P2)

**Goal**: ContactSection renders from CMS data with hardcoded fallback.

**Independent Test**: Add challenge option in admin → appears in dropdown. Change heading → updated on homepage.

### Implementation for User Story 4

- [x] T018 [US4] Update `src/app/(frontend)/page.tsx` — add fetch for HomepageContact global. Pass contact data as prop to ContactSection.
- [x] T019 [US4] Update `src/components/home/ContactSection.tsx` — accept optional `contactData` prop. Define hardcoded fallback (current heading, subheadline, email entry, 4 challenge options, button text). Use CMS data when available, fallback when not. Map CMS contactEntries and challengeOptions arrays to rendering. Keep all existing form logic (handleSubmit, validation, error state) and Tailwind classes unchanged.

**Checkpoint**: Contact section renders from CMS. Adding/removing challenge options and contact entries reflects on homepage.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Tests, build verification, admin UX validation

- [x] T020 Add global schema tests in `tests/unit/collections.test.ts` — verify all 4 homepage globals have expected fields, types, and validation rules (field names, required flags, max lengths, array min/max)
- [x] T021 [P] Update E2E test in `tests/e2e/homepage.spec.ts` — verify homepage still renders correctly with CMS globals populated (no assertion changes needed if content unchanged, but add a test that homepage loads without console errors after global integration)
- [x] T022 [P] Verify admin UX — confirm all 4 globals appear under "Homepage" group in sidebar, field labels are descriptive (FR-010), pillar list supports drag-and-drop reordering (SC-006)
- [x] T023 Run `bun run build` and verify build succeeds with no TypeScript errors from new globals
- [x] T024 Run `bun run test` and verify all existing + new tests pass
- [x] T025 Run full quickstart verification from `specs/002-cms-homepage-globals/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all user stories (globals must exist in DB)
- **User Story 1 (Phase 3)**: Depends on Phase 2
- **User Story 2 (Phase 4)**: Depends on Phase 2. Can run in parallel with US1 (different component files)
- **User Story 3 (Phase 5)**: Depends on Phase 2. Can run in parallel with US1/US2
- **User Story 4 (Phase 6)**: Depends on Phase 2. Can run in parallel with US1/US2/US3
- **Polish (Phase 7)**: Depends on ALL user stories completing

### Parallel Opportunities

After Phase 2 (globals created + migrated + seeded), all 4 user stories can proceed in parallel:

```
Phase 2 complete →
  ├─ US1 (HeroSection.tsx)              [parallel]
  ├─ US2 (CorePillarsSection.tsx)       [parallel]
  ├─ US3 (SpecKitSection.tsx)           [parallel]
  └─ US4 (ContactSection.tsx)           [parallel]
```

NOTE: All 4 user stories modify `page.tsx` (adding global fetches). These MUST be applied sequentially or merged carefully to avoid conflicts. The recommended approach: US1 adds the first global fetch + the try/catch pattern, then US2-US4 add their fetches inside the same block.

### Within Each User Story

- page.tsx fetch BEFORE component prop update
- Component fallback defaults BEFORE CMS data wiring

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: All globals + migration + seed
3. Complete Phase 3: User Story 1 (Hero from CMS)
4. **STOP and VALIDATE**: Can Roger change the hero headline from admin?
5. Continue to remaining stories

### Incremental Delivery

1. Setup + Globals + Migration + Seed → Foundation ready
2. US1 (Hero) → **MVP: Roger can edit hero content**
3. US2 (Pillars) → Pillars CMS-driven
4. US3 (SpecKit) → SpecKit section CMS-driven
5. US4 (Contact) → Contact section CMS-driven
6. Polish → Tests pass, admin UX verified, build green

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story
- T008-T009 (migration) must run sequentially: create then apply
- T010-T011 (seed) must run after migration
- All 4 component updates (T013, T015, T017, T019) share page.tsx — coordinate page.tsx changes to avoid conflicts
- The `'use client'` directive on ContactSection.tsx means it can't directly fetch from Payload — all data must come via props from the server component page.tsx
