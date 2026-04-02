# Feature Specification: Homepage Content Rewrite

**Feature Branch**: `001-homepage-content-rewrite`
**Created**: 2026-04-02
**Status**: Draft
**Input**: Project audit + positioning spec from Roger (2026-03-29)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Enterprise CTO Understands What AHA Does (Priority: P1)

An enterprise CTO/CIO lands on the AHA Software homepage (from LinkedIn, organic search, or referral) and within 10 seconds understands: AHA is a consulting firm that builds products, their core offering is SpecKit (a product + framework + methodology), they have credible enterprise experience (AWS/Amazon), and the clear next step is to learn more or schedule a consultation.

**Why this priority**: The homepage is the messaging DNA for the entire site. Every other page inherits its positioning. If a CTO can't answer "what does AHA do for me?" within seconds, the site fails at its fundamental job. The content audit found this is currently broken -- the site presents AHA as a product company, consulting firm, and publisher simultaneously.

**Independent Test**: Load the homepage, read only the hero section, and answer: "What does AHA Software do?" If the answer is clear, specific, and mentions enablement/SpecKit/enterprise, the story passes.

**Acceptance Scenarios**:

1. **Given** a CTO visits the homepage for the first time, **When** they read the hero section, **Then** they understand AHA helps engineering teams thrive in the age of AI through SpecKit and that AHA has proven this at enterprise scale including Amazon/AWS.
2. **Given** a CTO reads the hero section, **When** they look for a next step, **Then** they see exactly two clear CTAs: one to learn more (low commitment) and one to initiate contact (high commitment).
3. **Given** a CTO scrolls past the hero, **When** they reach the core pillars, **Then** they see three distinct outcomes AHA delivers -- not overlapping technical capabilities, but CTO-relevant business outcomes that map to real engagement types.

---

### User Story 2 - Visitor Understands SpecKit's Triple Nature (Priority: P1)

A visitor scrolling the homepage encounters the SpecKit section and clearly understands that SpecKit is simultaneously a product (platform they can license), a framework (implementation methodology AHA deploys), and a methodology (philosophy they can learn). The current section only presents the "methodology" facet.

**Why this priority**: SpecKit is AHA's differentiator -- the thing that makes them more than just another consulting firm. If visitors think it's only a methodology, they miss the product and framework dimensions. If they think it's only a product, they miss the consulting relationship.

**Independent Test**: Read only the SpecKit section and answer: "What is SpecKit?" If the answer includes all three facets (product, framework, methodology), the story passes.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the SpecKit section, **When** they read the content, **Then** they understand SpecKit has three facets: a platform, a framework AHA implements, and a methodology they teach.
2. **Given** a visitor reads the SpecKit section, **When** they look for proof points, **Then** they see credible evidence of SpecKit's impact (real or clearly attributed metrics, not unsourced statistics).
3. **Given** a visitor wants to engage with SpecKit, **When** they look for a CTA, **Then** they see a path appropriate to their readiness level (learn the methodology vs. schedule an implementation discussion).

---

### User Story 3 - Visitor Follows Coherent CTA Funnel (Priority: P2)

A visitor progresses through the homepage and encounters a coherent, escalating funnel: Learn (understand AHA's approach) -> Contact (initiate a conversation) -> Engage (start working together). CTAs across all sections reinforce this progression rather than competing or contradicting each other.

**Why this priority**: The content audit found that every section currently has different, unrelated CTAs ("Start the Transformation", "Our Methodology", "Download Whitepaper", "Initiate Consultation"). A CTO-level visitor needs a clear, professional progression -- not scattered asks.

**Independent Test**: List every CTA on the homepage. If they form a logical progression from low-commitment to high-commitment, and none contradict each other, the story passes.

**Acceptance Scenarios**:

1. **Given** a visitor reads the hero, **When** they see CTAs, **Then** one is low-commitment (learn/explore) and one is high-commitment (contact/schedule).
2. **Given** a visitor scrolls through all sections, **When** they encounter CTAs, **Then** the commitment level escalates naturally from "learn" at the top to "contact us" at the bottom.
3. **Given** a visitor reaches the contact section, **When** they see the form, **Then** the challenge options reflect real CTO/CIO concerns (AI readiness, enablement, delivery health) not developer-focused tasks.

---

### User Story 4 - Contact Information Is Accurate and Professional (Priority: P2)

The homepage contact section displays real, accurate business information -- not placeholder data. The contact form challenge options match AHA's actual service offerings and target the CTO/CIO audience.

**Why this priority**: The current homepage displays a fake London address ("42 Engineering Plaza, London EC2A") and a non-existent email domain ("hello@ahasw.consulting"). For a site targeting enterprise CTOs, fake contact info destroys credibility instantly.

**Independent Test**: Every piece of contact information on the homepage is real and reachable. Challenge options map to actual AHA service categories.

**Acceptance Scenarios**:

1. **Given** a visitor views the contact section, **When** they see the office address, **Then** it is either a real address or removed entirely (no fake addresses).
2. **Given** a visitor sees the contact email, **When** they note the domain, **Then** it matches the actual business domain (ahasw.com or equivalent).
3. **Given** a visitor opens the challenge dropdown, **When** they see options, **Then** the options reflect enterprise CTO concerns: AI Readiness Assessment, Engineering Enablement at Scale, SpecKit Implementation, Delivery Health Check.

---

### User Story 5 - Insights Section Shows Relevant Content (Priority: P3)

The homepage insights/articles preview section shows content relevant to enterprise engineering leadership -- not editorial/publishing topics. Articles preview real CMS content when available, with representative fallbacks that match AHA's positioning when the CMS is unavailable.

**Why this priority**: The current insights section has hardcoded articles that are reasonable ("High-Quality Software Delivery", "DevOps for Modern Teams") but the blog page fallbacks are about typography and editorial design. The homepage insights should always reflect AHA's actual expertise areas.

**Independent Test**: Read the insights section titles and excerpts. If they're clearly about engineering enablement, AI readiness, spec-driven delivery, or DevOps -- not publishing or editorial design -- the story passes.

**Acceptance Scenarios**:

1. **Given** the CMS has published articles, **When** the homepage loads, **Then** the insights section displays the two most recent published articles from the CMS.
2. **Given** the CMS is unavailable, **When** the homepage loads with fallback content, **Then** the fallback articles are about engineering enablement, SpecKit, or enterprise delivery -- not typography or editorial design.
3. **Given** a visitor clicks an insight article, **When** the blog post exists, **Then** they are taken to the full article page.

---

### Edge Cases

- What happens when the CMS is completely down? Fallback content must still convey AHA's positioning accurately.
- What happens on mobile? All content must be readable and CTAs must be tappable at 375px width.
- What if a visitor doesn't scroll past the hero? The hero alone must communicate the core value proposition.
- What about returning visitors? The messaging must be consistent with what they see on Services, About, and other pages.

## Clarifications

### Session 2026-04-02

- Q: What is the canonical spelling of the product name (SpecKit vs Spec Kit vs GitHub Spec Kit)? → A: **SpecKit** (one word, camelCase). All instances on the homepage and site-wide MUST use this spelling. Drop the "GitHub" prefix.
- Q: Where should the hero's low-commitment "learn more" CTA link to? → A: `/services` page (full service descriptions), not `#services` same-page anchor.
- Q: How specific should the AWS/Amazon proof point be in the hero? → A: Moderate specificity: "Built enablement programs for AWS consulting partners at scale." Not vague name-dropping, not confidential details.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Hero section MUST communicate AHA's identity as a consulting firm that builds products, targeting enterprise CTOs/CIOs.
- **FR-002**: Hero section MUST reference SpecKit (one word, camelCase — canonical spelling) by name and position it as the vehicle for AHA's value delivery. All instances site-wide MUST use "SpecKit" — not "Spec Kit", "GitHub Spec Kit", or other variants.
- **FR-003**: Hero section MUST include the AWS/Amazon proof point at moderate specificity: "Built enablement programs for AWS consulting partners at scale." Not vague name-dropping ("proven at enterprise scale") and not confidential client details.
- **FR-004**: Core pillars section MUST present exactly three distinct, non-overlapping service outcomes framed for CTO/CIO buyers: SpecKit Platform, Enterprise Enablement, Strategic Advisory.
- **FR-005**: Core pillars section MUST NOT use undefined jargon ("precise structuralism", "organizational DNA") without explanation.
- **FR-006**: SpecKit section MUST present all three facets: product (platform), framework (implementation), methodology (teaching/learning).
- **FR-007**: SpecKit section MUST display real, attributed impact metrics from client engagements. Current unattributed stats ("94% Rework Reduction", "3.2x Velocity Increase") MUST be replaced with verified numbers and attribution (e.g., "94% rework reduction across enterprise engagements"). Roger to provide exact figures and attribution language.
- **FR-008**: Contact section MUST display only real, verified contact information. Fake addresses and emails MUST be removed or replaced.
- **FR-009**: Contact form challenge options MUST reflect CTO/CIO-level concerns: AI Readiness Assessment, Engineering Enablement at Scale, SpecKit Implementation, Delivery Health Check.
- **FR-010**: All CTAs across the homepage MUST form a coherent funnel progressing from low-commitment (learn/explore) to high-commitment (contact/schedule). The hero's low-commitment CTA MUST link to `/services` (not a same-page anchor).
- **FR-011**: Insights section MUST pull published articles from the CMS when available, falling back to representative content that matches AHA's positioning.
- **FR-012**: All content MUST be consistent with the positioning: AHA is a consulting firm + product builder, customer is enterprise CTOs/CIOs, SpecKit is the differentiator, AWS/Amazon is the proof point.
- **FR-013**: Hero quote callout ("The architect must be the builder") MUST be either attributed to a real source or replaced with a relevant, attributed quote.
- **FR-014**: The "Download Whitepaper" link in the SpecKit section MUST be replaced with a newsletter/notification signup CTA (e.g., "Get Notified When It's Ready" or "Join the Waitlist"). A SpecKit whitepaper is planned but not yet available -- no dead `href="#"` links.

### Key Entities

- **Homepage Sections**: Hero, Core Pillars, SpecKit, Insights, Contact -- five sections in fixed order, each with a specific job in the visitor journey.
- **Service Pillars**: Three mutually exclusive engagement types that a CTO can choose from, mapping to real AHA service offerings.
- **SpecKit Facets**: Product (platform), Framework (implementation by AHA), Methodology (self-serve learning) -- three dimensions of the same offering.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can articulate what AHA Software does after viewing only the hero section (validated via peer review).
- **SC-002**: The three core pillars are distinguishable -- no reviewer describes two pillars as "basically the same thing."
- **SC-003**: A visitor who reads the SpecKit section can name at least two of the three facets (product, framework, methodology).
- **SC-004**: Every CTA on the homepage links to a real, functional destination (zero `href="#"` links).
- **SC-005**: All contact information on the page is verified as real and reachable.
- **SC-006**: The homepage content passes a positioning alignment review against the constitution's Principle I.
- **SC-007**: Mobile visitors (375px viewport) can read all content and interact with all CTAs without horizontal scrolling or overlapping elements.

## Assumptions

- The Figma design file layout (section order, grid proportions, visual hierarchy) remains unchanged -- this spec covers content, not visual redesign.
- Existing component architecture (HeroSection, CorePillarsSection, SpecKitSection, InsightsSection, ContactSection) remains -- we're updating content within these components, not restructuring them.
- The SpecKit brand name and trademark are finalized -- no naming changes expected.
- Roger (founder) will provide real contact information to replace the fake London address and email.
- CMS integration for the insights section already exists in the blog infrastructure -- we're connecting it, not building new data fetching.
- The AWS/Amazon experience is a factual, public proof point that AHA is authorized to reference on its website.
- "SpecKit" (one word, camelCase) is the canonical brand spelling. All prior references to "Spec Kit", "GitHub Spec Kit", or "GitHub SpecKit" in the codebase will be normalized to "SpecKit" as part of this feature.
