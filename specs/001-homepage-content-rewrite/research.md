# Research: Homepage Content Rewrite

**Feature**: `001-homepage-content-rewrite`
**Date**: 2026-04-02

## Research Summary

This feature is primarily a content rewrite — no new architectural decisions needed. Research focused on three areas: CMS integration pattern for the insights section, SpecKit naming normalization scope, and contact information handling.

## Decision 1: Insights Section CMS Integration

**Decision**: Fetch the 2 most recent published posts from Payload CMS at build time using the existing `getPayload()` client, with hardcoded fallback data matching AHA's positioning.

**Rationale**: The homepage is currently statically rendered (○ in Next.js build output). Server-side CMS fetching at build time preserves this performance characteristic. The existing `src/lib/payload.ts` singleton client is already used on blog/events listing pages. The pattern is proven.

**Alternatives considered**:
- Client-side fetch (rejected: slower initial load, CLS issues, SEO disadvantage)
- ISR with revalidation (viable but unnecessary complexity for 2 articles; can add later)
- Keep hardcoded (rejected: violates Constitution Principle VII — CMS-Driven Content)

## Decision 2: SpecKit Naming Normalization Scope

**Decision**: Normalize all instances of "Spec Kit", "GitHub Spec Kit", and "GitHub SpecKit" to "SpecKit" (one word, camelCase) within the 5 homepage component files. Do NOT normalize across the entire codebase — that's a separate task.

**Rationale**: Clarification Q1 established "SpecKit" as canonical. Scoping to homepage-only keeps this feature focused. A site-wide rename can be a follow-up PR.

**Alternatives considered**:
- Site-wide rename in this PR (rejected: scope creep, touches files outside this spec)
- Keep mixed naming (rejected: contradicts clarification decision and brand consistency)

## Decision 3: Contact Information Handling

**Decision**: Remove the fake London address and fake email. Replace with real email (roger@ahasw.com or contact@ahasw.com) and remove the physical address entirely until a real one is available. Roger to confirm preferred contact email.

**Rationale**: FR-008 requires real contact info only. Removing fake data is better than keeping it. A virtual/real address can be added when available — absence is better than fabrication for CTO credibility.

**Alternatives considered**:
- Keep fake address with "coming soon" label (rejected: still fake, still harms credibility)
- Use PO Box or virtual office (deferred: requires Roger to set up, out of scope)

## Decision 4: Hero Quote Handling

**Decision**: Replace "The architect must be the builder" (unattributed) with a quote from Roger or a relevant industry figure. If no suitable quote is available at implementation time, remove the quote card entirely and let the hero image stand alone.

**Rationale**: FR-013 requires attribution. An unattributed quote in a hero section targeting enterprise CTOs looks like placeholder content.

**Alternatives considered**:
- Attribute to Roger (viable if he approves a quote)
- Use a famous engineering quote (risky: feels generic)
- Remove quote card entirely (acceptable fallback)

## Decision 5: SpecKit Metrics Strategy

**Decision**: Roger confirmed real metrics exist from client engagements. Replace current unattributed "94% Rework Reduction" and "3.2x Velocity Increase" with verified numbers from Roger, including attribution language (e.g., "across enterprise engagements" or specific client type).

**Rationale**: FR-007 requires attributed metrics. Roger must provide the exact figures and approved attribution language before implementation.

**Alternatives considered**:
- Keep current numbers with generic attribution (rejected: may be inaccurate)
- Remove metrics entirely (fallback if Roger can't provide verified numbers in time)

## Blocking Dependencies

| Dependency | Owner | Status | Fallback |
|------------|-------|--------|----------|
| Real contact email | Roger | Pending | Use roger@ahasw.com (known working) |
| Verified SpecKit metrics | Roger | Pending | Remove stats, use qualitative proof points |
| Hero quote (attributed) | Roger | Pending | Remove quote card entirely |
| Real office address | Roger | Deferred | Remove address field, keep email only |
