# AHA Software Marketing - Designer Memory

## Project
- Next.js + Payload CMS + Tailwind CSS marketing site
- Use BUN for everything (not npm/npx/yarn)
- Stitch comp HTML files in docs/ are visual source of truth

## Design System (FINAL - confirmed by team lead)
- See [design-system-notes.md](./design-system-notes.md) for full analysis
- Fonts: Fraunces (headline/serif) + DM Sans (body/label/sans)
- Colors: primary #005c55, primary-container #0f766e, tertiary #7f4025
- Use full MD3 token set from ARCHITECTURE.md (matches blog/event/premium comps)
- Homepage comp layout is baseline BUT apply correct Fraunces+DM Sans fonts + correct tokens
- Logo: "AHA Software" everywhere
- Signature gradient: linear-gradient(135deg, #005c55, #0f766e)
- Background: #fff8f2 "Warm Stone"

## Task Order
1. Task #17 - Tailwind design system (blocked by #1 scaffold)
2. Task #18 - Header/Nav + Footer (blocked by #17)
3. Task #15 - UI component library (blocked by #17)
4. Task #16 - Homepage (blocked by #18, #15)
5. Task #19 - Blog pages (blocked by #9 CMS collections, #15)
6. Task #20 - Event pages (blocked by #9, #15)
7. Task #5 - Premium hub (blocked by #11 auth/stripe, #15)
