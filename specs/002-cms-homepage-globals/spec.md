# Feature Specification: CMS-Driven Homepage Globals

**Feature Branch**: `002-cms-homepage-globals`
**Created**: 2026-04-02
**Status**: Draft
**Input**: Follow-up to spec 001 (homepage content rewrite). Move hardcoded homepage content into CMS globals.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Roger Edits Hero Content Without Code Deploy (Priority: P1)

Roger (site owner/admin) logs into the Payload CMS admin panel at `/admin`, navigates to the "Homepage Hero" global, edits the headline text, saves, and sees the updated headline on the live homepage — without touching code, opening a terminal, or triggering a deploy.

**Why this priority**: The hero section is the most frequently changed content on the homepage. Headline A/B testing, seasonal messaging updates, and event-driven copy changes (e.g., after a conference) all require fast iteration. Currently, every copy change requires a developer, a code commit, and a CI/CD pipeline run.

**Independent Test**: Log into `/admin`, change the hero headline to "Test Headline", save. Reload the homepage. "Test Headline" appears. Revert. Original headline returns.

**Acceptance Scenarios**:

1. **Given** Roger is logged into the CMS admin, **When** he navigates to the Homepage Hero global, **Then** he sees editable fields for headline, subheadline, badge label, two CTAs (each with text and link), and an optional quote with attribution.
2. **Given** Roger edits the hero headline and saves, **When** he visits the homepage, **Then** the new headline is displayed.
3. **Given** the hero global has not been populated in the CMS, **When** the homepage loads, **Then** the current hardcoded content serves as the default fallback — no blank sections, no errors.

---

### User Story 2 - Roger Manages Service Pillars from CMS (Priority: P1)

Roger updates the three core service pillars (currently SpecKit Platform / Enterprise Enablement / Strategic Advisory) from the CMS. He can edit titles, descriptions, capabilities, and icons for each pillar. He can reorder them. The homepage renders whatever the CMS contains.

**Why this priority**: Service offerings evolve. Roger may want to rename a pillar, swap capabilities, or change the order based on what's resonating with CTOs. This should not require a code change.

**Independent Test**: Log into `/admin`, change pillar 1's title from "SpecKit Platform" to "SpecKit Product", save. Reload homepage. "SpecKit Product" appears as the first pillar.

**Acceptance Scenarios**:

1. **Given** Roger navigates to the Homepage Pillars global, **When** he views the editor, **Then** he sees a list of pillar entries, each with fields for icon name, title, description, and a list of capability tags.
2. **Given** Roger adds a fourth pillar, **When** the homepage loads, **Then** all four pillars render in the grid.
3. **Given** Roger reorders the pillars, **When** the homepage loads, **Then** the pillars appear in the new order.
4. **Given** the pillars global has not been populated, **When** the homepage loads, **Then** the current three pillars display as defaults.

---

### User Story 3 - Roger Controls SpecKit Section Messaging (Priority: P2)

Roger updates the SpecKit section content — label, heading, description, feature cards, proof point text, and the waitlist CTA — from the CMS admin. He can add or remove feature cards, update the proof point quote, and change CTA text and destination.

**Why this priority**: As SpecKit evolves (new features, new proof points, whitepaper launch), this section needs frequent updates. The CTA may change from "Join the Waitlist" to "Download the Whitepaper" to "Request a Demo" over time.

**Independent Test**: Change the SpecKit section CTA from "Join the Waitlist" to "Download the Whitepaper" in the CMS. Reload homepage. New CTA text appears with updated link.

**Acceptance Scenarios**:

1. **Given** Roger navigates to the Homepage SpecKit global, **When** he views the editor, **Then** he sees fields for section label, heading, description, feature cards (list with icon/title/description each), proof point text, and CTA (text + link).
2. **Given** Roger changes the CTA text and link, **When** the homepage loads, **Then** the new CTA renders with the correct destination.
3. **Given** the SpecKit global has not been populated, **When** the homepage loads, **Then** the current SpecKit content displays as defaults.

---

### User Story 4 - Roger Updates Contact Section Details (Priority: P2)

Roger updates the contact section — heading, subheadline, contact info entries, challenge dropdown options, and submit button text — from the CMS. When AHA gets a physical office, Roger can add an address. When challenge options need updating, he edits the list.

**Why this priority**: Contact info and service categories change less frequently than hero messaging, but when they do change (new office, new email, new service line), the update should be instant — not gated behind a deploy.

**Independent Test**: Add a new challenge option "Cloud Migration" in the CMS. Reload homepage contact form. The dropdown includes "Cloud Migration".

**Acceptance Scenarios**:

1. **Given** Roger navigates to the Homepage Contact global, **When** he views the editor, **Then** he sees fields for heading, subheadline, contact info entries (list with icon/label/value), challenge options (list of strings), and submit button text.
2. **Given** Roger adds a new contact info entry (e.g., phone number), **When** the homepage loads, **Then** the new entry appears alongside the email.
3. **Given** Roger removes a challenge option, **When** a visitor opens the dropdown, **Then** the removed option no longer appears.
4. **Given** the contact global has not been populated, **When** the homepage loads, **Then** the current contact content displays as defaults.

---

### Edge Cases

- What happens when a global is partially filled (e.g., heading set but CTA fields empty)? Fallback to defaults for empty fields only — don't show an incomplete section.
- What happens when Roger saves invalid data (e.g., CTA link without text)? The CMS should validate: if a CTA link is provided, CTA text is required.
- What happens when the CMS is unreachable at build/render time? Homepage renders with hardcoded fallback content — no blank sections, no errors.
- What happens to the Insights section? Out of scope — already CMS-driven from spec 001.
- What if Roger deletes all pillar entries? Render fallback pillars (minimum 1 required, enforced by CMS validation).

## Clarifications

### Session 2026-04-02

- Q: Should the Pillars global include the section heading and subheading (like the other 3 globals), or only pillar entries? → A: Include section heading + subheading in Pillars global, consistent with Hero, SpecKit, and Contact globals.
- Q: Should the CMS be seeded with current content during migration, or should defaults live only in component code? → A: Seed CMS with current content during migration. Roger sees populated, editable fields in admin from day one.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide four CMS-editable globals for homepage content: Hero, Pillars, SpecKit, and Contact.
- **FR-002**: Each global MUST have sensible default values matching the current hardcoded content, so the homepage works identically before any CMS edits.
- **FR-003**: Homepage components MUST fetch their corresponding global at render time and fall back to hardcoded defaults when the global is empty or the CMS is unreachable.
- **FR-004**: Hero global MUST include: badge label (text), headline (text), subheadline (text), primary CTA (text + link), secondary CTA (text + link), optional quote (text + attribution).
- **FR-005**: Pillars global MUST include: section heading (text), section subheading (text), section counter label (text), and a reorderable list of pillar entries, each with: icon name (text), title (text), description (text), capabilities (list of text strings). Minimum 1 pillar, maximum 6.
- **FR-006**: SpecKit global MUST include: section label (text), heading (text), description (text), feature cards (list with icon/title/description), proof point text (text), CTA (text + link), integration card (title + description).
- **FR-007**: Contact global MUST include: heading (text), subheadline (text), contact info entries (list with icon/label/value), challenge options (list of text strings), submit button text (text).
- **FR-008**: CMS validation MUST enforce: CTA links require corresponding CTA text, pillars must have at least 1 entry, all text fields must have max length constraints appropriate to their display context (e.g., headline max ~100 chars).
- **FR-009**: Changes saved in the CMS MUST be reflected on the homepage without a code deploy. The mechanism (rebuild trigger, ISR, or runtime fetch) is an implementation decision, but the user-facing requirement is: save in admin → see on site.
- **FR-010**: The admin editing experience MUST be intuitive — field labels and descriptions should make clear what each field controls and where it appears on the homepage.
- **FR-011**: All four globals MUST appear in a "Homepage" group in the admin sidebar for easy navigation.
- **FR-012**: A database migration MUST seed all four globals with the current hardcoded content from spec 001. Roger MUST see populated, editable fields in the admin panel from day one — not empty fields with invisible code-level defaults.

### Key Entities

- **Homepage Hero**: Single global containing hero section content (headline, subheadline, badge, CTAs, quote).
- **Homepage Pillars**: Single global containing section heading, subheading, counter label, and a list of service pillars (title, description, icon, capabilities per pillar).
- **Homepage SpecKit**: Single global containing SpecKit section content (label, heading, description, feature cards, proof point, CTA).
- **Homepage Contact**: Single global containing contact section content (heading, subheadline, contact entries, challenge options, button text).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Roger can update any homepage section's copy from the CMS admin and see the change on the live site within 5 minutes — without developer involvement.
- **SC-002**: The homepage renders identically to the current version before any CMS edits are made (zero visual regression from defaults).
- **SC-003**: When the CMS is unreachable, the homepage renders with fallback content — zero blank sections, zero errors.
- **SC-004**: All four homepage globals are accessible from a single "Homepage" group in the admin panel — Roger can find and edit them in under 30 seconds.
- **SC-005**: Every CMS text field has a descriptive label and help text that makes clear what it controls on the homepage.
- **SC-006**: Pillar list supports reordering via drag-and-drop in the admin interface.

## Assumptions

- The Insights section is already CMS-driven (spec 001) and is out of scope for this feature.
- Roger is the primary (and currently only) CMS admin user. No multi-user permission complexity needed.
- The current hardcoded content from spec 001 is the correct default for all fallback values.
- Existing CMS globals (SiteSettings, Navigation) and the global pattern they establish will be extended, not replaced.
- A database migration will be needed to register the new globals, but no destructive schema changes are required.
- The CMS admin panel at `/admin` is already functional and accessible.
