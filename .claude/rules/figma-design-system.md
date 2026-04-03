# Figma MCP Integration Rules — AHA Software

**Product design spec (Ethereal Atrium, _Digital Conservatory_):** [`docs/DESIGN.md`](../../docs/DESIGN.md) — cool teal / frost Material tokens, Plus Jakarta Sans, no-line rule. **Styleguide:** `/styleguide` when `ENABLE_STYLEGUIDE=true`.

**Visual source of truth (Figma):** **AHA Design System** — use this file for tokens, components, and layouts before implementing or auditing UI.

**Code today:** Production routes still use **`src/app/globals.css`** (warm stone, Fraunces/DM Sans) in many places; align new work to Figma + [`docs/DESIGN.md`](../../docs/DESIGN.md) and migrate tokens over time.

## Figma files

### AHA Design System (primary — source of truth)

- **File** (for `get_design_context` / `get_screenshot` / `get_metadata`): fileKey=`zlXMI6B9Y88ykFSawN4hqO`
  - URL: https://www.figma.com/design/zlXMI6B9Y88ykFSawN4hqO/AHA-Design-System
  - Example node (from share link): `node-id=11-4` → use **`11:4`** in MCP/API calls
- **Also see:** [`docs/DESIGN.md`](../../docs/DESIGN.md) (Ethereal Atrium written spec); **`/styleguide`** when `ENABLE_STYLEGUIDE=true`

### Legacy: marketing Webpage (Consulting Homepage comps)

- **File:** fileKey=`wHqVLyVESensvFpFBbYhMk`
  - URL: https://www.figma.com/design/wHqVLyVESensvFpFBbYhMk/Webpage?m=dev
  - Homepage: nodeId `1:680` ("Consulting Homepage - Refined Style", 1280x5364)
  - Nav: `1:942` · Hero: `1:743` · Core Pillars: `1:681` · Spec Kit: `1:764` · Insights: `1:807` · Contact: `1:843` · Footer: `1:902`
  - Use when matching **existing** shipped homepage sections to older comps; prefer **AHA Design System** for new system work.

### Other

- **Make file** (animation snippets): https://www.figma.com/make/qj2tEStlrJWpLUwKKGaQYF/Enhance-Visual-Effects
- **Stitch HTML:** `docs/stitch-*.html` — reference HTML only
- **Implementation notes (pre-migration site):** `docs/design/DESIGN_SYSTEM.md`

## Required Flow (do not skip)

1. Run `get_design_context` first to fetch the structured representation for the exact node(s)
2. If the response is too large or truncated, run `get_metadata` to get the high-level node map, then re-fetch only the required node(s) with `get_design_context`
3. Run `get_screenshot` for a visual reference of the node variant being implemented
4. Only after you have both `get_design_context` and `get_screenshot`, download any assets needed and start implementation
5. Translate the output (React + Tailwind) into this project's conventions, styles, and framework
6. Validate against Figma for 1:1 look and behavior before marking complete

## Component Organization

- **UI primitives**: `src/components/ui/` (Button, Card, Badge, Input, SectionLabel, AnimateOnScroll, Textarea)
- **Layout components**: `src/components/layout/` (Header, Footer)
- **Page-specific components**: `src/components/home/`, `src/components/blog/`, `src/components/events/`, `src/components/premium/`
- **All components accept a `className` prop** for composition
- **Export pattern**: default export for page components, named exports for UI/layout

## Design Tokens

- IMPORTANT: All color tokens are defined as CSS custom properties in `src/app/globals.css` under `@theme`
- IMPORTANT: Never hardcode hex colors — always use token classes: `text-primary`, `bg-background`, `text-on-surface`, etc.
- IMPORTANT: Never use pure black (`#000000`) — use `text-on-surface` (#1e1b17)
- Fonts: `font-headline` (Fraunces serif), `font-body` (DM Sans), `font-label` (DM Sans)
- Fonts are self-hosted via `next/font` in `src/app/layout.tsx`
- Material Symbols Outlined loaded via Google Fonts CDN for icons

### Key Color Tokens

| Class                           | Value   | Usage                           |
| ------------------------------- | ------- | ------------------------------- |
| `bg-background`                 | #fff8f2 | "Warm Stone" page background    |
| `text-on-background`            | #1e1b17 | Primary text                    |
| `text-primary` / `bg-primary`   | #005c55 | Brand CTAs, active states       |
| `bg-primary-container`          | #0f766e | Hero moments, gradient endpoint |
| `text-tertiary` / `bg-tertiary` | #7f4025 | Clay accent badges              |
| `bg-surface-container-low`      | #faf2eb | Section backgrounds             |
| `bg-surface-container`          | #f4ede6 | Footer, containers              |
| `bg-surface-container-lowest`   | #ffffff | Card backgrounds                |
| `text-outline`                  | #6e7977 | Metadata text                   |
| `border-outline-variant`        | #bdc9c6 | Borders (low opacity only)      |

## Styling Rules

- IMPORTANT: Use Tailwind utility classes — never inline styles
- Custom utilities defined in `src/app/globals.css`:
  - `editorial-gradient` — signature CTA gradient (primary → primary-container at 135°)
  - `editorial-grid` / `editorial-grid-sm` — dot-pattern backgrounds
  - `glassmorphism` — frosted glass effect for nav/modals
  - `ghost-border` — outline-variant at 15% opacity
  - `carbon-texture` — SVG texture for branded sections
- Shadows: Use `shadow-ambient`, `shadow-ambient-lg`, `shadow-editorial`, `shadow-lift` — never standard Tailwind shadows

## Design System Rules (CRITICAL)

1. **No-Line Rule**: No 1px solid borders for sectioning. Define boundaries through background color shifts between surface layers.
2. **Tonal Layering**: Cards on sections via surface token stacking. Base → surface-container-low → surface-container-lowest.
3. **Glassmorphism Nav**: `bg-[--color-background]/80 backdrop-blur-lg shadow-[0_20px_40px_rgba(30,27,23,0.05)]`
4. **Signature Gradient**: Primary CTAs use `editorial-gradient` utility
5. **Asymmetric Grids**: Use 7/5, 8/4 column splits (12-col grid). Never 6/6.
6. **Typography**: Headlines in `font-headline italic` with `tracking-tighter`. Labels in `font-label text-xs uppercase tracking-[0.2em]`.
7. **Section Labels**: `font-label text-xs uppercase tracking-[0.2em] text-tertiary` above section headings
8. **Card Hovers**: Blog cards: `group-hover:scale-105` on images. Premium cards: `hover:translate-y-[-8px]` with `shadow-lift`.
9. **Form Inputs**: Bottom-border only (`border-b-2 border-transparent focus:border-primary`), uppercase labels
10. **Footer Links**: `opacity-60 hover:opacity-100 hover:translate-x-1 transition-all`

## Asset Handling

- IMPORTANT: If the Figma MCP server returns a localhost source for an image or SVG, use that source directly
- IMPORTANT: DO NOT import new icon packages — use Material Symbols Outlined or assets from Figma
- IMPORTANT: DO NOT use placeholders if a localhost source is provided
- Store downloaded assets in `public/assets/`
- Use Next.js `Image` component for all images with proper width/height/alt

## Project-Specific Conventions

- **Framework**: Next.js 16 App Router + Payload CMS v3
- **Runtime**: Bun (NOT npm/node) — `bun install`, `bun run dev`, `bun test`
- **Database**: Neon serverless Postgres via `@payloadcms/db-postgres`
- **CMS Admin**: Payload at `/admin` — collections in `src/collections/`, globals in `src/globals/`
- **Rich Text**: Payload Lexical editor — render with `.editorial-rich-text` wrapper class
- **SEO**: `@payloadcms/plugin-seo` on Posts and Events collections
- **Path aliases**: `@/*` → `./src/*`, `@payload-config` → `./src/payload.config.ts`
- **Responsive breakpoints**: 375px (mobile), 768px (tablet), 1280px (desktop), 1440px (wide)
