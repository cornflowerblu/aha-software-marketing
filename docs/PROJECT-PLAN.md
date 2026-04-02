# AHA Software Marketing Site — Project Plan

> Generated 2026-03-29 from a 6-agent parallel audit of the entire codebase.
> Covers: codebase structure, CI/CD, test coverage, architecture, PRs/branches, and content.

---

## Current State Summary

### What's Built (It's Solid)

| Dimension | Count | Status |
|-----------|-------|--------|
| Pages | 12 routes (9 public + admin + login/register) | All complete |
| Components | 32 React components | All in use, zero dead code |
| Payload Collections | 7 + 2 globals | Fully wired with relationships |
| API Routes | 6 endpoints | All functional |
| Integrations | 6 (Stripe, HubSpot, Resend, Blob, Axiom, Analytics) | All connected |
| Tests | 22 files (~154 tests) | Unit + integration + E2E |
| CI/CD | 2 workflows, canary verification, auto-rollback | Maturity 3.5/5 |
| Source code | ~8,116 lines + ~2,940 component lines | TypeScript strict, zero `any` |

**Stack**: Next.js 16.2.1 + Payload CMS 3.80 + Neon Postgres + Vercel + Tailwind 4 + Bun

### The Problem: Identity Crisis

The engineering is production-grade. The content doesn't know what it's selling.

The site simultaneously presents AHA Software as:
- A **product company** (Spec Kit as something you buy)
- A **consulting firm** (software consulting, DevOps, CTO advisory)
- A **publisher** ("The Digital Curator", "editorial craftsmanship")

A visitor cannot answer "what does AHA Software do for me?" after browsing the site.

---

## Phase 0: Housekeeping

**Time**: 30 minutes
**Priority**: Do first — clears the deck for real work

### Tasks

- [ ] `git checkout main && git pull origin main`
- [ ] Delete stale local branches (11 total — all PRs merged/closed):
  ```
  git branch -d vercel/install-vercel-speed-insights-jzifdn \
    feature/axiom-web-vitals feature/figma-pages \
    feature/fix-design-proportions feature/vercel-blob \
    fix/ci-environment-gating fix/final-polish fix/site-issues \
    hotfix/ci-environments hotfix/ci-per-deployment-url \
    hotfix/ci-test-failures
  ```
- [ ] Delete stale remote branches (13 total):
  ```
  git push origin --delete \
    copilot/fix-e2e-bug-in-blog-listing copilot/sub-pr-8 \
    copilot/sub-pr-8-again feature/figma-pages \
    feature/fix-design-proportions feature/vercel-blob \
    fix/ci-environment-gating fix/final-polish fix/site-issues \
    hotfix/ci-environments hotfix/ci-per-deployment-url \
    hotfix/ci-test-failures
  ```
- [ ] Verify prod deployment at https://ahasw.com is live and healthy
- [ ] Verify Payload admin at /admin is accessible

---

## Phase 1: Positioning & Content

**Time**: 1-2 sessions
**Priority**: CRITICAL — everything else is pointless without this
**Branch**: `feature/content-positioning`

### Positioning (ANSWERED by Roger, 2026-03-29)

1. **What is AHA Software?** Consulting firm that also builds products (hybrid). Has built and trademarked SpecKit.
2. **Who is the customer?** Enterprise CTOs / CIOs.
3. **What is SpecKit?** All three: a product we built, a framework we implement, AND a methodology we teach. Combines spec-driven development philosophy with a business platform to enhance SDLC delivery.
4. **What problem does AHA solve?** Help your engineering team (and organization) rediscover their identity in the age of AI. AHA performs enablement at scale — proven at Amazon (AWS) for the largest consulting firms on earth, now deployed for enterprise across industries.
5. **What's the desired visitor journey?** Land → Learn → Contact → Engage (confirmed).

### Key Messaging Implications

- **SpecKit is triple-faceted**: product + framework + methodology. The site should explain all three, not pick one.
- **AWS/Amazon credibility is the killer proof point** — currently MISSING from the site entirely. Must be prominent.
- **Target audience is C-suite** (CTOs/CIOs) — language should be executive-grade, not developer-marketing.
- **"Age of AI" framing is correct** — but needs to be grounded in outcomes, not buzzwords.
- **Consulting + Product hybrid** is the real differentiator — AHA isn't just advisors, they built the tool too.

### Content Fixes (by file)

#### Homepage
- **`src/components/home/HeroSection.tsx`**
  - Rewrite "Radical Change for the Post-AI Organization" — keep the AI framing but ground it:
    - e.g., "Help your engineering team rediscover their identity in the age of AI"
    - or: "Enablement at scale — from Amazon to your enterprise"
  - Position SpecKit as the vehicle: "Built and trademarked by AHA, SpecKit combines spec-driven development with a business platform to transform how your teams deliver"
  - CTAs: "Learn How We Work" → "Schedule a Consultation"

- **`src/components/home/CorePillarsSection.tsx`** (lines 4-25)
  - Current pillars: Software Consulting / DevOps Excellence / Strategic Advisory
  - Problem: overlap, contradiction, too broad, too developer-focused for CTO audience
  - Reframe around what a CTO/CIO cares about:
    - **"SpecKit Platform"** — the product (spec-driven dev + business platform)
    - **"Enterprise Enablement"** — the consulting (at-scale transformation, proven at AWS)
    - **"Strategic Advisory"** — the methodology (CTO advisory, AI readiness, delivery health)
  - Each pillar: problem → AHA's approach → outcome → proof point

- **`src/components/home/SpecKitSection.tsx`** (lines 36-41)
  - SpecKit is ALL THREE: product, framework, methodology
  - Show the three facets clearly:
    - **Product**: "A platform that turns specifications into executable requirements"
    - **Framework**: "An implementation methodology we deploy inside your organization"
    - **Methodology**: "A philosophy we teach through workshops and premium content"
  - Add: "Trademarked by AHA Software" for credibility

- **`src/components/home/ContactSection.tsx`** (lines 22-27)
  - Replace challenge options to match CTO/CIO concerns:
    - "AI Readiness Assessment"
    - "Engineering Enablement at Scale"
    - "SpecKit Implementation"
    - "Delivery Health Check"

#### About
- **`src/app/(frontend)/about/page.tsx`**
  - ADD the AWS/Amazon proof point — this is the most credible thing about AHA and it's nowhere on the site
  - "Roger Urich founded AHA Software" is fine but needs context: what did he do at Amazon? What scale?
  - Frame the hybrid model as a strength: "We don't just advise — we built SpecKit because we needed it ourselves"

#### Blog
- **`src/app/(frontend)/blog/page.tsx`** (line 19, lines 145-210)
  - Remove "The Digital Curator" + "Perspectives on the Modern Workforce"
  - Reposition as: "Insights on engineering enablement, AI readiness, and spec-driven delivery"
  - Replace fallback blog content (currently about typography/publishing — irrelevant to CTOs):
    - "The Resurgence of Long-Form" → "Why Spec-Driven Development Eliminates Rework"
    - "Semantic Systems in Modern UI Design" → "What CTOs Get Wrong About AI Adoption"
    - "Typography as Interface" → "Enablement at Scale: Lessons from AWS"
    - "The ROI of Editorial Design" → "Measuring the ROI of SpecKit"

#### Events
- **`src/app/(frontend)/events/page.tsx`** (lines 82-114)
  - Replace fallback events with CTO-relevant examples:
    - "The Future is Yesterday" → "AI Readiness Workshop for Engineering Leaders"
    - "Radical QA: Zero-Rework Workshop" → keep, rename to "SpecKit Workshop: Zero-Rework Delivery"

#### Premium
- **`src/app/(frontend)/premium/page.tsx`** (lines 14-36)
  - This is where SpecKit-as-methodology lives — "Learn SpecKit" premium content
  - "Radical Change at Scale - DevConf 2024" → "Implementing SpecKit for Enterprise Teams"
  - Frame premium as the self-service path: "Not ready for consulting? Learn the methodology first."

#### Services
- **`src/app/(frontend)/services/page.tsx`**
  - Kill "precise structuralism" — replace with clear service tiers:
    - **SpecKit Platform**: license the product
    - **Enterprise Enablement**: AHA deploys SpecKit inside your org (consulting)
    - **Strategic Advisory**: CTO advisory, AI readiness audits, delivery health checks
  - Must mirror homepage pillars exactly
  - Add: "Proven at Amazon (AWS)" proof point on each service

#### Footer
- **`src/components/layout/Footer.tsx`** (lines 36-40)
  - Kill "precision structuralism" — replace with the real positioning:
    - e.g., "Enabling engineering teams to thrive in the age of AI"
    - or: "SpecKit — the platform, framework, and methodology for spec-driven delivery"

#### Navigation
- **`src/components/layout/Header.tsx`**
  - "Insights" → "Blog" (simpler for CTO audience)
  - Consider adding "SpecKit" as a top-level nav item (it's the product — deserves its own page)
  - Consider: Services | SpecKit | Blog | Events | About | Contact

---

## Phase 2: Security Hardening

**Time**: 1 session
**Priority**: HIGH — public-facing API routes are vulnerable
**Branch**: `feature/security-hardening`

### Tasks

- [ ] **Add rate limiting to API routes** (2-3 hours)
  - All of: `/api/contact`, `/api/newsletter`, `/api/register-event`, `/api/subscribe`
  - Use Vercel WAF rate limiting or middleware-level throttling
  - Prevent email quota exhaustion and HubSpot API limit abuse

- [ ] **Replace fire-and-forget syncs** (4-6 hours)
  - `src/app/api/newsletter/route.ts` line 137: `Promise.allSettled(syncPromises)` not awaited
  - Options: await with proper error handling, use `waitUntil()` (Next.js `after()`), or Vercel Queues
  - HubSpot/Resend sync failures must be logged and retriable

- [ ] **Add error logging to Payload hooks** (30 min)
  - `src/collections/Users.ts` line 23: silent catch on Stripe customer creation
  - Log to Axiom so failures are visible
  - Consider: should Stripe failure block user creation? (currently doesn't)

- [ ] **Fix event registration race condition** (1-2 hours)
  - `src/app/api/register-event/route.ts` lines 83-95
  - Capacity check then create is not atomic
  - Use database transaction or optimistic locking

- [ ] **Add CSRF protection** (1-2 hours)
  - Contact and newsletter forms accept POST from any origin
  - Add SameSite cookie or CSRF token validation

- [ ] **Add email verification for event registration** (2-3 hours)
  - `register-event` creates user with random UUID password (line 113)
  - Users can't log in — intentional? If so, document. If not, add verification flow.

---

## Phase 3: Test Critical Paths

**Time**: 1-2 sessions
**Priority**: HIGH — auth, payments, and integrations are completely untested
**Branch**: `feature/test-coverage`

### Current Coverage Gaps

| Area | Current State | What's Needed |
|------|---------------|---------------|
| Auth (login/register) | NOT TESTED | Login flow, token lifecycle, credential validation |
| Stripe payments | STUB ONLY (webhook signature check) | Checkout session, customer creation, webhook events, subscription updates |
| HubSpot integration | EXPORTS ONLY (function exists check) | Contact creation, field mapping, API error handling |
| Resend/Newsletter | PARTIAL (E2E hits real API) | Validation, adapter config, audience sync logic |
| E2E user flows | "Does it load?" checks | Sign-up → login → purchase → access premium content |
| Error scenarios | Incomplete | Network failures, service timeouts, invalid data |

### Tasks

- [ ] **Auth integration tests** (2-3 hours)
  - Login with valid/invalid credentials
  - Register new user, verify token generation
  - Session management, token expiry

- [ ] **Stripe tests with sandbox** (3-4 hours)
  - Checkout session creation
  - Webhook event processing (subscription created/updated/deleted)
  - Customer creation from user signup
  - Use Stripe test mode keys

- [ ] **HubSpot integration tests** (1-2 hours)
  - Contact creation and update
  - Field mapping correctness
  - API error handling (rate limit, auth failure)

- [ ] **E2E user flow tests** (2-3 hours)
  - Full journey: visit → browse → contact form → confirmation
  - Event: browse → register → payment → confirmation email
  - Newsletter: subscribe → verify in DB
  - Premium: login → access gated content

- [ ] **Error scenario tests** (1-2 hours)
  - API routes return proper errors on network failures
  - External service timeouts don't crash the app
  - Partial writes are handled (user created but Stripe fails)

- [ ] **Fix existing E2E failures** (1-2 hours)
  - Investigate root cause (likely auth flow or CMS data dependency)
  - Fix blog grid visibility fragility

---

## Phase 4: CI/CD & Infrastructure Polish

**Time**: 1 session
**Priority**: MEDIUM — pipeline works but has known fragility
**Branch**: `fix/ci-polish`

### Tasks

- [ ] **Robust migration detection** (1 hour)
  - Replace fragile grep for box-drawing chars (`a721aa8`)
  - Use Payload CLI exit code or structured output instead

- [ ] **Post-rollback verification** (1 hour)
  - After `vercel rollback`, run smoke tests to confirm stability
  - Currently: rollback fires but no verification it worked

- [ ] **Fix integration test issue** (1 hour)
  - `ci-main.yml` line 153: "We need to fix this" comment
  - Investigate and resolve

- [ ] **Define Payload access control** (2-3 hours)
  - Add read/write policies to collections
  - Role-based access (admin vs registered user)
  - Prevent unauthorized data access if admin auth is compromised

- [ ] **Pin `@types/bun`** (5 min)
  - Currently `"latest"` — should be specific version for reproducible builds

- [ ] **Document CI timeout rationale** (30 min)
  - 60x10s polling, 50 req/page canary, 30s wait — add comments explaining why

- [ ] **Consider progressive canary stages** (optional)
  - Currently: 10% → 100%
  - Could add: 10% → 25% → 50% → 100% for lower blast radius

---

## Spec-Driven Development (SpecKit Dogfooding)

### Why This Is Non-Negotiable

This site promotes SpecKit for eliminating rework. It was built without specs and now needs rework. **Dogfooding SpecKit on ahasw.com is both practical and the best possible marketing.**

If a prospect asks "does SpecKit actually work?" — the answer should be "we used it to build this site."

### Positioning Spec: DONE

Roger answered the 5 positioning questions on 2026-03-29. See above.

### Remaining Specs to Write

1. **Page Specs** (one per page, write during Phase 1)
   - Job: what is this page supposed to accomplish?
   - Audience: CTO/CIO landing from where? (organic search, LinkedIn, referral, event follow-up?)
   - Content requirements: hero, sections, CTAs, proof points
   - Success metric: what does "working" look like? (form submission, time on page, scroll depth)

2. **SpecKit Product Spec** (write before or during Phase 1)
   - What does the SpecKit platform actually do? (features, screenshots, demo)
   - What does the SpecKit framework look like when implemented? (process diagram)
   - What does the SpecKit methodology teach? (curriculum, outcomes)
   - This is the content for a dedicated `/speckit` page

3. **Integration Specs** (write during Phase 2)
   - Contract: what data flows in/out for each integration?
   - Error handling: what happens when HubSpot/Resend/Stripe is down?
   - Retry policy: fire-and-forget → queued (see security hardening)
   - Testing: how do we verify it works? (see Phase 3)

---

## Priority Matrix

| Phase | Priority | Time | Blocks |
|-------|----------|------|--------|
| 0: Housekeeping | Do first | 30 min | Everything |
| 1: Content & Positioning | CRITICAL | 1-2 sessions | Phases 3-4 (no point testing wrong content) |
| 2: Security Hardening | HIGH | 1 session | Nothing (can parallelize with Phase 1) |
| 3: Test Coverage | HIGH | 1-2 sessions | Phase 4 |
| 4: CI/CD Polish | MEDIUM | 1 session | Nothing |

### Suggested Order

```
Session 1:  Phase 0 (housekeeping) + Positioning Spec (answers to 5 questions)
Session 2:  Phase 1 (content rewrite) + Phase 2 (security, in parallel)
Session 3:  Phase 3 (test coverage)
Session 4:  Phase 4 (CI/CD polish) + Final verification
```

---

## Audit Source Data

This plan was generated from a 6-agent parallel audit:

| Agent | Focus | Key Finding |
|-------|-------|-------------|
| codebase-analyst | Structure & inventory | 83 files, 32 components, zero dead code |
| cicd-auditor | Pipeline & deployment | 3.5/5 maturity, 18+ CI fix commits |
| test-reviewer | Test coverage & quality | Auth, payments, integrations untested |
| pr-analyst | PRs & branch hygiene | All 15 PRs resolved, 24 stale branches |
| arch-reviewer | Architecture & tech debt | Good foundation, needs rate limiting + error handling |
| content-auditor | Content coherence | Identity crisis — product vs consulting vs publishing |

Full audit details saved to: `.claude/projects/.../memory/project-audit-2026-03-29.md`
