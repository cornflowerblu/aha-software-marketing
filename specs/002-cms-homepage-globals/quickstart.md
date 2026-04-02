# Quickstart: Verify CMS-Driven Homepage Globals

## Prerequisites

- Bun installed
- `.env` with `DATABASE_URL` pointing to a Neon branch
- Run migration: `bunx payload migrate`
- Run seed: `bun run src/seed.ts` (or verify globals are populated)

## Steps

1. Start the dev server:
   ```bash
   bun run dev
   ```

2. Verify homepage renders identically to pre-CMS version (zero visual regression):
   - Open http://localhost:3000
   - All 5 sections should display with current content
   - No blank sections, no loading states, no errors

3. Verify admin panel globals:
   - Open http://localhost:3000/admin
   - Login with admin credentials
   - Sidebar should show "Homepage" group with 4 globals:
     - [ ] Hero Section
     - [ ] Core Pillars
     - [ ] SpecKit Section
     - [ ] Contact Section

4. Test Hero editing (US1):
   - [ ] Navigate to Homepage > Hero Section
   - [ ] All fields populated with current content (seeded)
   - [ ] Change headline to "Test Headline", save
   - [ ] Reload http://localhost:3000 — "Test Headline" appears
   - [ ] Revert headline, save — original content restored

5. Test Pillars editing (US2):
   - [ ] Navigate to Homepage > Core Pillars
   - [ ] 3 pillar entries visible, each with icon/title/description/capabilities
   - [ ] Change pillar 1 title to "Test Pillar", save
   - [ ] Reload homepage — "Test Pillar" appears as first pillar
   - [ ] Add a 4th pillar, save — grid shows 4 pillars
   - [ ] Reorder pillars via drag-and-drop — order changes on homepage
   - [ ] Revert all changes

6. Test SpecKit editing (US3):
   - [ ] Navigate to Homepage > SpecKit Section
   - [ ] All fields populated (label, heading, description, cards, CTA)
   - [ ] Change CTA text to "Download Whitepaper", link to "/whitepaper", save
   - [ ] Reload homepage — new CTA text and link appear
   - [ ] Revert changes

7. Test Contact editing (US4):
   - [ ] Navigate to Homepage > Contact Section
   - [ ] Heading, subheadline, email entry, 4 challenge options visible
   - [ ] Add a new challenge option "Cloud Migration", save
   - [ ] Reload homepage — dropdown includes "Cloud Migration"
   - [ ] Remove challenge option, save — removed from dropdown
   - [ ] Revert changes

8. Test fallback behavior:
   - [ ] In admin, clear the hero headline field, save
   - [ ] Reload homepage — fallback headline appears (not blank)
   - [ ] Restore the headline

## Run Tests

```bash
bun run test          # Unit + integration (includes global schema tests)
bun run build         # Verify build succeeds
```
