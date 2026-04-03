<!--
  Sync Impact Report
  ==================
  Version change: N/A → 1.0.0 (initial ratification)
  Modified principles: N/A (first version)
  Added sections:
    - Core Principles (7 principles)
    - Technology & Stack Constraints
    - Development Workflow
    - Governance
  Removed sections: N/A
  Templates requiring updates:
    - .specify/templates/plan-template.md — ✅ compatible (Constitution Check section aligns)
    - .specify/templates/spec-template.md — ✅ compatible (user stories + acceptance criteria align)
    - .specify/templates/tasks-template.md — ✅ compatible (phase structure aligns)
  Follow-up TODOs: None
-->

# AHA Software Marketing Site Constitution

## Core Principles

### I. Positioning-First Development

Every feature, page, and content change MUST be traceable to the
positioning spec (docs/PROJECT-PLAN.md, "Positioning" section).

AHA Software is a consulting firm that builds products. SpecKit is
simultaneously a product, a framework, and a methodology. The target
customer is Enterprise CTOs/CIOs. The core value proposition is
engineering enablement at scale in the age of AI, proven at Amazon (AWS).

All user-facing copy MUST:

- Clearly communicate AHA's hybrid consulting + product identity
- Position SpecKit's triple nature (product, framework, methodology)
- Speak to C-suite decision-makers, not developer-marketing audiences
- Reference the AWS/Amazon proof point as primary credibility signal
- Support the visitor journey: Land → Learn → Contact → Engage

Rationale: The site was built without positioning clarity, resulting in
an identity crisis (product vs consulting vs publisher). This principle
prevents that drift from recurring.

### II. Spec-Driven Delivery (Dogfooding)

AHA promotes SpecKit for eliminating rework. This site MUST be built
using SpecKit's own spec-driven methodology.

- Every feature MUST have a specification before implementation begins
- Page content changes require a page spec (job, audience, CTAs, success metric)
- Integration changes require a contract spec (data flow, error handling, retry policy)
- Specs live in `.specify/` and are the source of truth for implementation

Rationale: Dogfooding SpecKit on ahasw.com validates the methodology
and serves as proof that it works. A prospect asking "does SpecKit
actually work?" should be answerable with "we used it to build this site."

### III. Design System Fidelity

**Canonical product specification:** _Ethereal Atrium_ (_Digital Conservatory_) —
`docs/DESIGN.md`, with interactive tokens at `/styleguide` when
`ENABLE_STYLEGUIDE=true`.

**Visual source of truth (Figma):** [AHA Design System](https://www.figma.com/design/zlXMI6B9Y88ykFSawN4hqO/AHA-Design-System) (`zlXMI6B9Y88ykFSawN4hqO`). **Shipped marketing UI** still uses `src/app/globals.css` in many places until tokens align with Figma + Ethereal Atrium. All implementations MUST:

- Use CSS custom property tokens from `src/app/globals.css` for production routes — never hardcode hex colors
- Use `font-headline` (Newsreader) for headings and `font-body` (DM Sans) for body text
- Use custom shadow utilities (`shadow-ambient`, `shadow-lift`) — never standard Tailwind shadows
- Follow the No-Line Rule: define boundaries through background color shifts, not borders
- Use asymmetric grids (7/5, 8/4 column splits) — never 6/6
- Reference `get_design_context` + `get_screenshot` from Figma before implementing any visual change

Rationale: The design system is the one area of the project with zero
debt. This principle preserves that quality.

### IV. Security by Default

All public-facing API routes MUST implement:

- Rate limiting (per-IP throttling to prevent spam and quota exhaustion)
- Input validation at the system boundary (forms, API payloads)
- CSRF protection on state-changing endpoints
- Proper error handling — no silent catches, no fire-and-forget for critical data flows
- Atomic operations for capacity-constrained resources (event registration)

External service syncs (HubSpot, Resend, Stripe) MUST NOT use
fire-and-forget patterns for data that must be consistent. Use
`waitUntil()`, queues, or awaited promises with error logging.

Rationale: The audit found no rate limiting, silent Stripe failures,
CSRF gaps, and race conditions. These are not acceptable for a site
targeting enterprise CTOs.

### V. Test What Matters

Tests MUST cover critical business paths:

- Authentication flows (login, register, token lifecycle)
- Payment processing (Stripe checkout, webhooks, subscription state)
- External integration contracts (HubSpot contact sync, Resend email delivery)
- User journeys end-to-end (not just "does the page load?")

Unit tests use `bun test`. E2E tests use Playwright. Integration tests
run against real Neon database branches. Tests MUST assert on behavior
and outcomes, not just existence.

Coverage gaps in auth, payments, and integrations are the highest
priority testing debt.

Rationale: The test suite has good coverage of schemas and validation
but completely misses auth, payments, and external integrations —
the paths where failures cost real money.

### VI. CI/CD Safety Nets

The deployment pipeline MUST maintain:

- Two-tier approval: DB mutations (migrations, seeds) require human approval;
  tests and deployments run automatically
- Per-deployment E2E testing: new code is tested before receiving production traffic
- Canary verification: traffic simulation + smoke tests + log scanning before 100% rollout
- Automatic rollback on canary failure
- Post-rollback verification (smoke test after rollback confirms stability)

Pipeline changes MUST NOT reduce safety. Adding stages is encouraged;
removing gates requires explicit justification in the PR description.

Rationale: The pipeline is at 3.5/5 maturity after 18+ iterative fixes.
These safety nets are hard-won and must not regress.

### VII. CMS-Driven Content

All dynamic content (blog posts, events, premium articles) MUST be
managed through Payload CMS collections — not hardcoded in components.

Fallback/placeholder content displayed when the CMS is unavailable MUST:

- Accurately represent AHA's actual services and positioning
- Be clearly representative of the type of content (not typography articles
  on a consulting site)
- Never contain lorem ipsum, TODO markers, or obviously fabricated data

Rationale: The current fallback content (articles about typography and
editorial design) actively undermines the site's credibility when the
CMS is down.

## Technology & Stack Constraints

**Runtime**: Bun (NOT npm/node) for all operations:

- `bun install`, `bun run dev`, `bun test`, `bunx` for all tooling
- Bun auto-loads `.env` — do not use dotenv

**Framework**: Next.js 16 App Router + Payload CMS v3

- Server Components by default; Client Components only when interactivity requires it
- Payload collections in `src/collections/`, globals in `src/globals/`
- Rich text via Payload Lexical editor, rendered with `.editorial-rich-text` wrapper

**Database**: Neon serverless Postgres

- Three branches: main (prod), vercel-dev (preview), local-dev
- Migrations managed by Payload CLI (`bunx payload migrate`)
- Migration detection in CI MUST use structured output, not fragile grep

**Deployment**: Vercel

- Rolling Releases with canary verification
- Vercel Blob for media storage
- Axiom for observability (web vitals, structured logging)
- Required checks gate deployment promotion

**Dependencies**: Pin all versions. `@types/bun` MUST NOT use `"latest"`.

**Styling**: Tailwind 4 with CSS custom properties. No inline styles.
No hardcoded colors. No standard Tailwind shadows.

## Development Workflow

### Feature Development

1. Create a feature spec (`.specify/specs/[feature]/spec.md`)
2. Get spec approved (positioning alignment check against Principle I)
3. Create implementation plan (`.specify/specs/[feature]/plan.md`)
4. Generate tasks (`.specify/specs/[feature]/tasks.md`)
5. Implement on a feature branch
6. PR with passing CI checks (lint, typecheck, unit tests, build)
7. Merge to main triggers full pipeline (migrate → test → E2E → canary → deploy)

### Content Changes

1. Write a page spec defining: job, audience, content requirements, CTAs, success metric
2. Verify alignment with Principle I (positioning)
3. Implement content changes
4. Visual verification against Figma design (Principle III)
5. E2E test confirms page loads and key elements render

### Code Review Requirements

All PRs MUST verify:

- No hardcoded colors or inline styles (Principle III)
- No silent error catching without logging (Principle IV)
- No fire-and-forget for critical data syncs (Principle IV)
- New user-facing copy aligns with positioning spec (Principle I)
- Tests cover the changed behavior, not just structure (Principle V)

### Amendment Procedure

Amendments to this constitution require:

1. A PR with the proposed change and rationale
2. Version bump following semver (MAJOR: principle removal/redefinition,
   MINOR: new principle or material expansion, PATCH: clarification/wording)
3. Updated `LAST_AMENDED_DATE`
4. Consistency propagation check across all `.specify/templates/`

Compliance with this constitution is verified during code review and
tracked via the Constitution Check section in implementation plans.

## Governance

This constitution is the highest-authority document for development
decisions on the AHA Software marketing site. It supersedes ad-hoc
decisions, prior conversation context, and individual preferences.

When a principle conflicts with expedience, the principle wins.
Complexity that violates a principle MUST be justified in the
Complexity Tracking section of the implementation plan.

For runtime development guidance, refer to:

- `docs/PROJECT-PLAN.md` — phased roadmap and task details
- `.specify/memory/constitution.md` — this file (governance)
- `CLAUDE.md` — tooling conventions (Bun, testing, frontend patterns)
- `.claude/rules/figma-design-system.md` — design system rules

**Version**: 1.0.0 | **Ratified**: 2026-04-02 | **Last Amended**: 2026-04-02
