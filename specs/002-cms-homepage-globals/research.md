# Research: CMS-Driven Homepage Globals

**Feature**: `002-cms-homepage-globals`
**Date**: 2026-04-02

## Research Summary

No unknowns in Technical Context — the project already uses Payload CMS globals (SiteSettings, Navigation) with an established pattern. Research focused on three implementation decisions.

## Decision 1: Global Fetch Strategy

**Decision**: Fetch all 4 homepage globals in the page-level server component (`page.tsx`), pass as props to section components. Use `getPayload()` singleton with try/catch — undefined on failure, components use hardcoded defaults.

**Rationale**: This matches the pattern already established in spec 001 (Insights section fetches posts in page.tsx). Centralizing fetches in page.tsx keeps components pure (props in, JSX out) and makes testing easier. The homepage is already dynamic (ƒ) from the Insights CMS fetch, so adding 4 more global fetches has no rendering strategy impact.

**Alternatives considered**:
- Each component fetches its own global (rejected: 5 independent DB connections per page load instead of batching)
- Static generation with ISR (rejected: homepage already dynamic from spec 001)
- Client-side fetch (rejected: SEO disadvantage, loading states, CLS)

## Decision 2: Admin Grouping

**Decision**: Use Payload's `admin.group` option on each global config to group all 4 under "Homepage" in the admin sidebar.

**Rationale**: Payload CMS supports `admin: { group: 'Homepage' }` on global configs natively. No custom admin UI needed. Roger sees: Homepage > Hero, Homepage > Pillars, Homepage > SpecKit, Homepage > Contact.

**Alternatives considered**:
- Custom admin dashboard (rejected: overkill for 4 globals)
- No grouping (rejected: 6 ungrouped globals in sidebar is hard to navigate)

## Decision 3: Migration & Seeding Strategy

**Decision**: Two-step approach: (1) run `bunx payload migrate:create` to generate the migration that registers new global tables, (2) update `seed.ts` to populate the 4 globals with current hardcoded content. Seed runs after migration in CI.

**Rationale**: Payload auto-generates migrations for new globals. The seed script already exists and handles Posts, Events, and Media. Adding global seeding follows the established pattern. Seeding ensures Roger sees populated fields in admin from day one (per clarification Q2).

**Alternatives considered**:
- Default values in global field configs only (rejected: `defaultValue` in Payload only applies to new documents created via admin, not to the initial empty state)
- Manual data entry by Roger (rejected: tedious, error-prone, and defeats the purpose of seamless migration)

## Decision 4: Field Type Selection for Rich Content

**Decision**: Use `text` fields (not `richText`) for all homepage content. The homepage sections use plain strings rendered with specific Tailwind typography classes — not CMS-formatted rich text.

**Rationale**: Rich text (Lexical editor) produces complex JSON that requires the `.editorial-rich-text` wrapper and Payload's rich text renderer. Homepage sections use precise typographic styling (`font-headline`, `text-5xl`, `italic`, etc.) that rich text would override. Plain `text` and `textarea` fields give Roger simple, predictable editing.

**Alternatives considered**:
- Rich text for descriptions (rejected: homepage typography is designer-controlled, not content-controlled)
- Markdown fields (rejected: Payload doesn't have native markdown; adds parsing complexity)
