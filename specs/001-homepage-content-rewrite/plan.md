# Implementation Plan: Homepage Content Rewrite

**Branch**: `001-homepage-content-rewrite` | **Date**: 2026-04-02 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-homepage-content-rewrite/spec.md`

## Summary

Rewrite all user-facing content on the AHA Software homepage to align with the founder-defined positioning: AHA is a consulting firm that builds products, targeting enterprise CTOs/CIOs, with SpecKit (product + framework + methodology) as the differentiator and AWS/Amazon enablement as the proof point. This is a content-only change — no visual redesign, no new components, no structural changes.

## Technical Context

**Language/Version**: TypeScript 6.0.2 + React 19.2.4 + JSX/TSX
**Primary Dependencies**: Next.js 16.2.1, Payload CMS 3.80, Tailwind 4.2.2
**Storage**: Neon serverless Postgres (via Payload CMS for blog article fetching)
**Testing**: Bun test (unit), Playwright 1.58.2 (E2E)
**Target Platform**: Vercel (web, SSR + static)
**Project Type**: Marketing website (Next.js App Router)
**Performance Goals**: No regression — homepage currently renders as static (○), must remain static or ISR
**Constraints**: Content-only changes within existing component architecture. No new components, no layout changes, no new dependencies.
**Scale/Scope**: 5 TSX component files + 1 page file + E2E test updates

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Status |
|-----------|------------|--------|
| I. Positioning-First | All content traceable to positioning spec | ✅ PASS — spec directly implements positioning answers |
| II. Spec-Driven Delivery | Feature has spec before implementation | ✅ PASS — spec.md complete with clarifications |
| III. Design System Fidelity | Use tokens, no hardcoded colors | ✅ PASS — content-only change, no style modifications |
| IV. Security by Default | No new API routes or silent errors | ✅ PASS — no API changes in scope |
| V. Test What Matters | Tests cover changed behavior | ✅ PASS — E2E tests will verify new content renders |
| VI. CI/CD Safety Nets | No pipeline changes | ✅ PASS — no CI/CD modifications |
| VII. CMS-Driven Content | Insights section pulls from CMS | ✅ PASS — FR-011 requires CMS integration for insights |

**Gate result**: ALL PASS. No violations. Proceeding.

## Project Structure

### Documentation (this feature)

```text
specs/001-homepage-content-rewrite/
├── plan.md              # This file
├── spec.md              # Feature specification (complete)
├── research.md          # Phase 0 output (below)
├── data-model.md        # Phase 1 output — N/A (no new entities)
├── quickstart.md        # Phase 1 output (verification guide)
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (files to modify)

```text
src/
├── components/
│   └── home/
│       ├── HeroSection.tsx           # US1: Hero copy, CTAs, AWS proof point
│       ├── CorePillarsSection.tsx     # US1: Pillar titles, descriptions, capabilities
│       ├── SpecKitSection.tsx         # US2: Triple-facet content, metrics, CTA
│       ├── InsightsSection.tsx        # US5: CMS integration, fallback content
│       └── ContactSection.tsx         # US3/US4: Challenge options, contact info, CTA
├── app/
│   └── (frontend)/
│       └── page.tsx                  # Homepage composition (may need Payload fetch)
└── lib/
    └── seo.ts                        # Update organization schema if descriptions change

tests/
└── e2e/
    └── homepage.spec.ts              # Verify new content renders correctly
```

**Structure Decision**: Existing Next.js App Router structure. All changes are content updates within existing components — no new files, no new directories.

## Complexity Tracking

> No constitution violations. No complexity justifications needed.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| (none)    | —          | —                                   |
