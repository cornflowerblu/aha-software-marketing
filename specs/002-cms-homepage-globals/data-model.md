# Data Model: CMS-Driven Homepage Globals

**Feature**: `002-cms-homepage-globals`
**Date**: 2026-04-02

## Entities

### HomepageHero (Global)

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| badgeLabel | text | yes | 50 | Badge text above headline (e.g., "Engineering Enablement") |
| headline | text | yes | 100 | Main h1 headline |
| subheadline | textarea | yes | 500 | Supporting paragraph below headline |
| primaryCtaText | text | yes | 40 | Primary button label (e.g., "Explore Our Services") |
| primaryCtaLink | text | yes | 200 | Primary button href (e.g., "/services") |
| secondaryCtaText | text | yes | 40 | Secondary button label (e.g., "Schedule a Consultation") |
| secondaryCtaLink | text | yes | 200 | Secondary button href (e.g., "/contact") |
| quoteText | text | no | 200 | Optional pull quote text |
| quoteAttribution | text | no | 100 | Optional quote attribution |

**Validation**: If quoteText is provided, quoteAttribution is required.
**Admin group**: "Homepage"
**Admin label**: "Hero Section"

---

### HomepagePillars (Global)

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| sectionHeading | text | yes | 100 | Section h2 heading (e.g., "How We Deliver Results") |
| sectionSubheading | textarea | yes | 300 | Section description paragraph |
| sectionLabel | text | yes | 50 | Counter label (e.g., "Section 01 // How We Deliver") |
| pillars | array | yes (min 1, max 6) | — | List of pillar entries |
| pillars.icon | text | yes | 50 | Material Symbols icon name (e.g., "hub") |
| pillars.title | text | yes | 60 | Pillar heading (e.g., "SpecKit Platform") |
| pillars.description | textarea | yes | 300 | Pillar description paragraph |
| pillars.capabilities | array | yes (min 1, max 5) | — | List of capability tags |
| pillars.capabilities.label | text | yes | 50 | Capability text (e.g., "Spec-Driven Development") |

**Validation**: Minimum 1 pillar, maximum 6. Each pillar must have at least 1 capability.
**Admin group**: "Homepage"
**Admin label**: "Core Pillars"

---

### HomepageSpecKit (Global)

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| sectionLabel | text | yes | 60 | Section label (e.g., "Product + Framework + Methodology") |
| heading | text | yes | 80 | Section h2 heading (e.g., "Introducing SpecKit.") |
| description | textarea | yes | 500 | Main description paragraph |
| proofPoint | text | yes | 200 | Qualitative proof point text |
| featureCards | array | yes (min 1, max 4) | — | List of feature cards |
| featureCards.icon | text | yes | 50 | Material Symbols icon name |
| featureCards.title | text | yes | 60 | Card heading |
| featureCards.description | textarea | yes | 300 | Card description |
| integrationTitle | text | yes | 80 | Integration card heading |
| integrationDescription | textarea | yes | 300 | Integration card description |
| ctaText | text | yes | 40 | CTA link text (e.g., "Join the Waitlist") |
| ctaLink | text | yes | 200 | CTA href (e.g., "/contact") |

**Validation**: Minimum 1 feature card, maximum 4.
**Admin group**: "Homepage"
**Admin label**: "SpecKit Section"

---

### HomepageContact (Global)

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| heading | text | yes | 100 | Section h2 heading |
| subheadline | textarea | yes | 300 | Description paragraph |
| contactEntries | array | no (max 5) | — | List of contact info entries |
| contactEntries.icon | text | yes | 50 | Material Symbols icon name (e.g., "mail") |
| contactEntries.label | text | yes | 50 | Entry label (e.g., "Email") |
| contactEntries.value | text | yes | 200 | Entry value (e.g., "roger@ahasw.com") |
| challengeOptions | array | yes (min 1, max 10) | — | Dropdown options for challenge field |
| challengeOptions.label | text | yes | 80 | Option text |
| submitButtonText | text | yes | 40 | Form submit button label |

**Validation**: At least 1 challenge option required.
**Admin group**: "Homepage"
**Admin label**: "Contact Section"

---

## Relationships

None. All 4 globals are independent — no foreign keys or cross-references.

## State Transitions

None. Globals are simple key-value stores edited by admin, read by frontend.

## Seed Data

All 4 globals seeded during migration with the exact content currently hardcoded in spec 001 components:

- **HomepageHero**: headline="Engineering Enablement for the Age of AI.", CTAs to /services and /contact, badge="Engineering Enablement"
- **HomepagePillars**: 3 pillars (SpecKit Platform, Enterprise Enablement, Strategic Advisory), heading="How We Deliver Results"
- **HomepageSpecKit**: 3 feature cards (Platform, Framework, Methodology), CTA="Join the Waitlist" → /contact
- **HomepageContact**: heading="Ready to Transform Your Engineering Organization?", email=roger@ahasw.com, 4 challenge options
