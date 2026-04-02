# Quickstart: Verify Homepage Content Rewrite

## Prerequisites

- Bun installed
- `.env` file with `DATABASE_URL` pointing to a Neon branch with seed data

## Steps

1. Start the dev server:
   ```bash
   bun run dev
   ```

2. Open http://localhost:3000 in a browser

3. Verify each section against the spec:

### Hero Section (US1)
- [ ] Headline communicates "engineering enablement in the age of AI"
- [ ] SpecKit mentioned by name (one word: "SpecKit")
- [ ] AWS/Amazon proof point visible ("Built enablement programs for AWS consulting partners at scale")
- [ ] Two CTAs: low-commitment links to `/services`, high-commitment links to `/contact`
- [ ] No "GitHub Spec Kit" or "Post-AI Organization" phrasing

### Core Pillars Section (US1)
- [ ] Three pillars: SpecKit Platform, Enterprise Enablement, Strategic Advisory
- [ ] No "precise structuralism" or "organizational DNA"
- [ ] Each pillar has distinct outcome, not overlapping capabilities
- [ ] CTO-appropriate language (not developer-marketing)

### SpecKit Section (US2)
- [ ] All three facets shown: product (platform), framework (implementation), methodology (teaching)
- [ ] Metrics are real and attributed (or removed if not yet provided)
- [ ] No dead "Download Whitepaper" link — replaced with notification/waitlist CTA
- [ ] "SpecKit" spelling (not "Spec Kit" or "GitHub Spec Kit")

### Insights Section (US5)
- [ ] Shows articles from Payload CMS (if DB has posts)
- [ ] Fallback content is about engineering/SpecKit/enablement (not typography/editorial)
- [ ] Article links point to real `/blog/[slug]` pages

### Contact Section (US3/US4)
- [ ] No fake London address ("42 Engineering Plaza")
- [ ] Email uses real domain (ahasw.com)
- [ ] Challenge options: AI Readiness, Engineering Enablement, SpecKit Implementation, Delivery Health Check
- [ ] CTA text is professional ("Schedule a Consultation" or similar)

### Mobile (375px)
- [ ] All content readable, no horizontal scroll
- [ ] All CTAs tappable
- [ ] Hero section communicates value prop without scrolling

## Run Tests

```bash
bun run test          # Unit + integration
bun run test:e2e      # Playwright E2E (requires dev server running)
```
