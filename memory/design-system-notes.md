# Design system analysis (shipping vs Ethereal Atrium)

## Source of truth

- **`docs/DESIGN.md`** — Canonical **Ethereal Atrium** (_Digital Conservatory_): cool teal / frost, Plus Jakarta Sans, Material tokens. **`/styleguide`** when `ENABLE_STYLEGUIDE=true`.
- **Shipped marketing site** — Still **Fraunces + DM Sans** and **warm stone** `globals.css` (below) until migration.
- `docs/ARCHITECTURE.md` — Color tokens for production + project structure
- `docs/homepage-comp.png` - Homepage layout reference
- `docs/stitch-homepage.html` - Homepage layout/structure (apply correct fonts+colors)
- `docs/stitch-blog.html`, `stitch-event.html`, `stitch-premium.html` - PRIMARY visual refs (correct tokens)
- Logo: "AHA Software" everywhere

## Fonts (production — pre-migration)

- **Headline**: `Fraunces` (serif) - italic for brand voice, tight tracking (-0.02em)
- **Body**: `DM Sans` (sans-serif) - clean, professional readability
- **Labels**: `DM Sans` uppercase with tracking-[0.2em] for metadata/overlines
- Self-host via next/font
- Ethereal target: **Plus Jakarta Sans** (see `docs/DESIGN.md` + styleguide)

## Color tokens (`globals.css` + comps)

- **primary**: #005c55 - brand anchor, high-action CTAs
- **primary-container**: #0f766e - hero moments, gradient endpoint
- **on-primary**: #ffffff
- **on-primary-container**: #ccfbf1 (homepage) / #a3faef (other comps)
- **background**: #fff8f2 - "Warm Stone" base
- **on-background**: #1e1b17 - NEVER pure black
- **tertiary**: #7f4025 - clay accent, sparingly for accents/notifications
- **tertiary-container**: #9c573a
- **secondary**: #466460 (from blog/event/premium comps)
- **secondary-container**: #c5e6e1 - category chips/tags
- **Signature Gradient**: linear-gradient(135deg, #005c55, #0f766e)

### Surface Layers (Tonal Depth - "stacked sheets of fine paper")

- surface: #fff8f2 (the desk)
- surface-container-lowest: #ffffff (the paper - card backgrounds)
- surface-container-low: #faf2eb (the blotter - section backgrounds)
- surface-container: #f4ede6 (default containers)
- surface-container-high: #eee7e0 (elevated surfaces)
- surface-container-highest: #e8e1db
- surface-variant: #e8e1db (input backgrounds)
- surface-dim: #e0d9d2

### Utility Tokens

- outline: #6e7977 (metadata text)
- outline-variant: #bdc9c6 (borders at LOW OPACITY ONLY - max 15%)
- on-surface: #1e1b17
- on-surface-variant: #3e4947
- error: #ba1a1a
- inverse-surface: #33302c
- inverse-on-surface: #f7efe9
- inverse-primary: #80d5cb

## Key Design Rules (from DESIGN.md)

1. **No-Line Rule**: No 1px borders for sectioning. Use background color shifts only.
2. **No Pure Black**: Use on-surface (#1e1b17) for text.
3. **Tonal Layering**: Cards on sections via surface token stacking. No drop shadows 90% of the time.
4. **Glass & Gradient**: Nav = surface at 80% opacity + 20px backdrop-blur. CTAs = signature gradient.
5. **Ambient Shadows**: on-surface tinted at 4-6% opacity, large diffused blur (0 20px 40px).
6. **Ghost Border**: outline-variant at 15% opacity max - never 100% opaque borders.
7. **Asymmetric Grids**: 7/5, 8/4 column splits. Break 12-column monotony.
8. **No Dividers**: No <hr> tags. Separate with spacing-12 or spacing-16.
9. **Premium Spacing**: spacing-20 (7rem) for vertical section gaps.

## Component Patterns

- **Primary Button**: Signature gradient, rounded-md, Manrope title-sm, bold
- **Secondary Button**: surface-container-high bg, on-surface text, no border
- **Tertiary Button**: Text-only in primary color, 2px underline on hover
- **Cards**: surface-container-lowest bg, padding-8 (2.75rem), no borders
- **Inputs**: surface-variant bg, focus = 2px solid primary bottom-border only
- **Chips**: rounded-full, secondary-container bg, on-secondary-container text
- **Section Labels**: label-md (0.75rem), All-Caps, 0.05em letter spacing

## Typography Scale

- display-lg: 3.5rem, -0.02em tracking (hero headlines)
- headline-lg through headline-sm: Newsreader, sentence case
- body-lg: 1rem Manrope (standard marketing copy)
- label-md: 0.75rem Manrope, ALL-CAPS, 0.05em spacing
