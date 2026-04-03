# Design implementation notes: marketing site (Figma comps)

_Living document — last updated March 2026_

> **Canonical product specification — Ethereal Atrium ("Digital Conservatory"):** [`docs/DESIGN.md`](../DESIGN.md). Use that document for philosophy, palette (cool teal / frost), typography (**Plus Jakarta Sans**), and rules. Interactive reference: `/styleguide` when `ENABLE_STYLEGUIDE=true`.
>
> **Figma (visual source of truth):** [AHA Design System](https://www.figma.com/design/zlXMI6B9Y88ykFSawN4hqO/AHA-Design-System) — file key `zlXMI6B9Y88ykFSawN4hqO`.
>
> **This file** is a detailed **implementation** companion for the **currently shipped** homepage and Stitch exports: warm stone `globals.css` tokens, **Newsreader** / **Manrope** (and Fraunces/DM Sans in code), Motion patterns, and gradient CTAs. Treat it as engineering reference until marketing pages migrate to Ethereal Atrium tokens and Figma.

---

## 1. Overview & creative direction (shipped marketing comps)

### High-end editorial marketing (pre–Ethereal migration)

The live site rejects a generic SaaS look and leans **editorial**: broadsheet or gallery-monograph energy. Authority through whitespace, serif-forward headlines, layered **warm stone** surfaces, and intentional asymmetry.

**Signature feel (implemented):**

- **Intentional asymmetry:** 7/5, 8/4 splits; wide margins and offset blocks.
- **Tonal authority:** **Warm Stone** palette (`#fff8f2` family) as the calm base.
- **Structural breathing room:** spacing scale and generous section padding.
- **Motion as a verb:** animations communicate state and pacing (Motion library).

---

## 2. Colors & Surface Philosophy

The palette is rooted in organic, earth-toned neutrals contrasted by a deep, authoritative teal.

### Color Tokens

| Token               | Hex                      | Usage                                                         |
| ------------------- | ------------------------ | ------------------------------------------------------------- |
| `primary`           | `#005c55`                | High-action CTAs, active nav states, gradient start           |
| `primary_container` | `#0f766e`                | Brand fill, gradient end, icon fills                          |
| `surface`           | `#fff8f2`                | "Warm Stone" page base, card backgrounds                      |
| `surface_low`       | `#faf4ed`                | Alternating section backgrounds (e.g. Pillars)                |
| `surface_mid`       | `#f5ede4`                | Contact section, footer, image placeholder fills              |
| `surface_warm`      | `#ebe3da`                | Chip/badge backgrounds                                        |
| `on_surface`        | `#1e1b17`                | All body text — never use pure `#000000`                      |
| `on_surface_muted`  | `rgba(30,27,23,0.6–0.7)` | Secondary body copy, descriptions                             |
| `border_subtle`     | `#d1c9c0`                | Input underlines, section dividers (15% opacity rule applies) |
| `tertiary`          | `#7f4025`                | Sparingly: accent, notification, data callout                 |
| `teal_light`        | `#ccfbf1`                | Text on dark teal (Spec Kit section)                          |

### The "No-Line" Rule

**Explicit Instruction:** Prohibit 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts.

- To separate sections, transition between `surface` tokens (e.g. `#fff8f2` → `#faf4ed` → `#f5ede4`).
- **Nesting:** Treat the UI as stacked sheets of fine paper. A card sits on a section to create natural depth without a single stroke.

### The "Ghost Border" Exception

If a border is absolutely required (e.g. accessibility, form inputs), use `outline-variant` at **15% opacity maximum**. 100% opaque borders are forbidden — they "trap" the content.

```css
/* Correct */
border: 1px solid rgba(209, 201, 192, 0.15);

/* Forbidden */
border: 1px solid #d1c9c0;
```

### The "Glass & Gradient" Rule ✅ IMPLEMENTED

To avoid a flat, "templated" look, use Glassmorphism for floating navigation and the Signature Gradient for all primary CTAs.

**Glassmorphism (Navigation):**

```css
backdrop-filter: blur(20px);
background: rgba(255, 248, 242, 0.72); /* → 0.85 on scroll */
```

- The nav border (`rgba(209,201,192,x)`) is scroll-linked: opacity animates from `0 → 1` as the user scrolls, making the glass edge appear as content passes beneath it.

**Signature Gradient (Primary CTAs):**

```css
background: linear-gradient(135deg, #005c55 0%, #0f766e 100%);
```

- Applied to: "Start the Transformation" (hero), "Work Together" (nav), "Initiate Consultation" (contact form), article category badges.
- Hover: `box-shadow: 0 8–20px 24–40px rgba(0, 92, 85, 0.25–0.35)` — lift effect only, preserving the gradient.
- **No flat `backgroundColor` on hover** — this would destroy the gradient.

**CTA Idle Shimmer:**
Every primary gradient button contains a looping light sweep animation:

```
gradient strip: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)
animation: x from -100% → 200%, duration 1.8s, repeatDelay 4.5–6s, easeInOut
```

This is an idle animation (always running, not hover-triggered) — creating a "breathing jewel" feel without requiring user interaction.

---

## 3. Typography

The system uses a high-contrast pairing: **Newsreader** (Serif) for authority and **Manrope** (Sans-Serif) for functional clarity.

> ⚠️ **Font Variants in Use:** Figma exports these as named variants within the font family. Use these exact names in code.

### Newsreader (Serif) — The "Voice"

Used for anything meant to be _heard_ in the brand's voice: headlines, display text, blockquotes, pull quotes, card titles, and form placeholder text.

| Variant            | CSS Name                        | Usage                                                          |
| ------------------ | ------------------------------- | -------------------------------------------------------------- |
| Extra Light        | `Newsreader:Extra_Light`        | Display (128px hero), headlines, section titles, card titles   |
| Extra Light Italic | `Newsreader:Extra_Light_Italic` | Brand italic emphasis (e.g. "Post-AI"), nav links, pull quotes |

**Tracking (letter-spacing) scale for Newsreader:**

- Display (128px): `-6.4px` (`-0.05em`)
- Hero headline (72px): `-1.8px`
- Section headline (60px): `-1.5px`
- Card title (30–36px): `0` (natural)

### Manrope (Sans-Serif) — The "Clarity"

Used for all functional text: body copy, labels, overlines, metadata, button text, nav links (non-italic).

| Variant | CSS Name          | Usage                                                     |
| ------- | ----------------- | --------------------------------------------------------- |
| Regular | `Manrope:Regular` | Body copy, descriptions, supporting text                  |
| Bold    | `Manrope:Bold`    | Overlines, labels, button text, metadata, footer headings |

**Label convention:** `label-md` → 9–11px, ALL-CAPS, `tracking: 2–4px`. Used for overlines, category chips, section counters, stat labels.

### Typography Rules

- Use **Sentence case** for all headlines — not Title Case. It maintains sophisticated approachability.
- All text uses `on_surface` (`#1e1b17`) — never `#000000`.
- Body text on dark backgrounds uses `rgba(255,255,255,0.6–0.8)`.

---

## 4. Elevation & Depth

### The Layering Principle (Primary Depth Method)

Forget shadows in 90% of use cases. Depth is achieved via **Tonal Layering** — stacked sheets of fine paper:

```
Surface (desk)          → #fff8f2
  Section (blotter)     → #faf4ed / #f5ede4
    Card/Element (paper) → #fff8f2 (lifted back up on card)
```

### Ambient Shadows (Floating Elements Only)

For truly floating elements (dropdowns, pull-quote cards, sticky CTAs):

```css
box-shadow: 0 20px 40px rgba(30, 27, 23, 0.05); /* large, diffused, tinted */
```

For elevated cards (hero image card):

```css
box-shadow: -40px 40px 80px 0px rgba(0, 0, 0, 0.1);
```

**The rule:** Color is `on-surface` tinted at 4–10% opacity. Blur is always large (20px+). Never small, dark, or "hard" shadows.

---

## 5. Motion & Animation System

All animations use the **Motion** library (`motion/react`). Motion is not decorative — it communicates editorial pacing, entrance hierarchy, and spatial depth.

### Core Easing

```js
// "Editorial ease" — fast exit, slow arrival. Feels authoritative, never playful.
ease: [0.22, 1, 0.36, 1];
```

### Animation Variants (Reusable)

```js
// Entrance: fade up from 30px below
const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

// Entrance: fade only
const fadeIn = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
	},
};

// Parent that staggers children
const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15, delayChildren: 0.1 },
	},
};
```

### Scroll-Triggered Entrances

Use `useInView` with `once: true` and `margin: "-100px"` so elements animate in slightly before they fully enter the viewport.

```jsx
<AnimatedSection>
	{" "}
	{/* wrapper component using useInView + fadeInUp */}
	<SectionContent />
</AnimatedSection>
```

### Parallax

The hero section background and the Spec Kit section texture use scroll-based parallax via `useScroll` + `useTransform`:

```js
// Hero: content fades and lifts as user scrolls past
const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

// Spec Kit: texture drifts upward at reduced speed
const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
```

### Hover Interactions

| Element              | Behavior                                       |
| -------------------- | ---------------------------------------------- |
| Pillar cards         | `y: -8px` lift on hover                        |
| Article cards        | `y: -12px` lift + nested image scale `1.05`    |
| Footer links         | `x: +4px` nudge                                |
| Nav links            | `y: -2px` float                                |
| Pillar service items | Line width expands `16px → 32px`               |
| Secondary CTA        | Subtle `rgba(15,118,110,0.05)` background wash |

### Idle Animations

- **CTA shimmer:** All primary gradient buttons animate a light sweep (`rgba(255,255,255,0.18)`) on a loop — always visible, never hover-dependent.

---

## 6. Components

### Buttons

**Primary CTA (Gradient)**

```jsx
<motion.div
  whileHover={{ scale: 1.02–1.05, boxShadow: "0 8–20px 24–40px rgba(0,92,85,0.35)" }}
  whileTap={{ scale: 0.95–0.98 }}
  className="relative overflow-hidden cursor-pointer px-[32–40px] py-[10–24px]"
  style={{ background: "linear-gradient(135deg, #005c55 0%, #0f766e 100%)" }}
>
  {/* Idle shimmer sweep */}
  <motion.div
    className="absolute inset-0 pointer-events-none"
    animate={{ x: ["-100%", "200%"] }}
    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 4.5, ease: "easeInOut" }}
    style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)" }}
  />
  <span>{/* Manrope Bold, ALL-CAPS, tracking 2–3.3px */}</span>
</motion.div>
```

**Secondary CTA (Ghost)**

```jsx
<motion.div
	whileHover={{ backgroundColor: "rgba(15, 118, 110, 0.05)" }}
	className='relative cursor-pointer px-[41px] py-[21px]'
>
	<div
		aria-hidden='true'
		className='absolute border border-[#d1c9c0] border-solid inset-0 pointer-events-none'
	/>
	<span>{/* Manrope Bold, ALL-CAPS */}</span>
</motion.div>
```

**Tertiary / Text Link**
Manrope Bold text in `primary_container`. On hover: animated underline or `x: +8px` nudge.

### Category Badges / Chips

```jsx
<div
	style={{ background: "linear-gradient(135deg, #005c55 0%, #0f766e 100%)" }}
	className='px-[12px] py-[6px]'
>
	<span>{/* Manrope Bold, 9px, ALL-CAPS, white */}</span>
</div>
```

- Use `rounded-full` for taxonomy tags (e.g. "Strategic Alignment" overline): `bg-[#ebe3da]`, `text-[#0f766e]`.
- Use the gradient for editorial category stamps (e.g. "Engineering", "DevOps" on article cards).

### Navigation (Glassmorphism)

```jsx
<motion.div
	style={{ backgroundColor }} /* useTransform: 0.72 → 0.85 opacity on scroll */
	className='fixed backdrop-blur-[20px] ...'
>
	{/* Scroll-linked border: opacity 0 → 1 as user scrolls */}
	<motion.div
		style={{ borderColor: `rgba(209,201,192,${borderOpacity})` }}
		className='absolute border-b border-solid inset-0 ...'
	/>
</motion.div>
```

### Cards & Content Blocks

- **The Rule of No Dividers:** No `<hr>` tags. Separate content via spacing only (`spacing-12` or `spacing-16`).
- Card background: `surface` (`#fff8f2`) on top of `surface_low` section — natural tonal lift.
- Padding: generous `p-[41–49px]` — "gallery room" principle.
- Hover: `y: -8 to -12px` lift animation via Motion.

### Input Fields

```
- Label: Manrope Bold, 10px, ALL-CAPS, rgba(15,118,110,0.6), tracking 2px
- Placeholder: Newsreader Extra Light, 18px, #6b7280
- Border: border-b-2, #d1c9c0 (bottom only — "high-end stationery" effect)
- Focus: 2px solid primary bottom-border (no box-shadow, no outline)
```

### Section Anatomy

Each section follows this structure:

1. **Overline:** Manrope Bold, 10px, ALL-CAPS, `rgba(15,118,110,0.4)`, tracking 4px — e.g. `Section 01 // Capabilities`
2. **Headline:** Newsreader Extra Light, 48–72px, `#1e1b17`, negative tracking
3. **Subheadline / description:** Manrope Regular, 18–20px, `rgba(30,27,23,0.6)`
4. **Content grid:** 12-column, `gap-x-[48–64px]`
5. **Bottom padding:** `py-[128px]` minimum — "double when in doubt"

---

## 7. Spacing & Layout

- **Base grid:** 12-column, `max-width: 1280px` (content), `max-width: 1440px` (nav/footer)
- **Horizontal gutter:** `px-[48px]`
- **Section vertical rhythm:** `py-[128px]` — the "premium pause"
- **Component gap:** `gap-[96px]` between section header and content grid
- **Card internal gap:** `gap-[40–48px]`

---

## 8. Do's and Don'ts

### Do

- **Do** use asymmetrical column splits (e.g. 8+4, 6+6, 7+4+1-gap).
- **Do** use Newsreader for any text meant to be "heard" in the brand's voice.
- **Do** lean into "Warm Stone" (`#fff8f2`) — white space should feel warm, not sterile.
- **Do** use `spacing-20` (7rem / 128px) for vertical section gaps.
- **Do** add `overflow-hidden` to any element with Motion shimmer or clip animations.
- **Do** keep `once: true` on `useInView` — elements should animate in once and stay visible.
- **Do** use `relative` positioning on any container with `position: absolute` children.

### Don't

- **Don't** use 1px solid borders to wrap cards or sections.
- **Don't** use pure `#000000` for text. Use `on-surface` (`#1e1b17`).
- **Don't** use standard drop shadows with high opacity or small blur radius.
- **Don't** cram content — if a section feels "full," double the padding.
- **Don't** override gradient `background` with `backgroundColor` on hover (destroys the gradient).
- **Don't** use `bounce` or `elastic` easing — only `[0.22, 1, 0.36, 1]` (editorial ease) or spring (`stiffness: 400, damping: 17`) for physical interactions.
- **Don't** animate color — animate `opacity`, `transform`, and `box-shadow` only.

---

## 9. Implementation Notes (React / Tailwind)

### Motion Setup

```js
import { motion, useScroll, useTransform, useInView } from "motion/react";
// Package: "motion" (not "framer-motion")
// Import path: 'motion/react' (subpath)
```

### Scroll-Linked Values

```js
const { scrollY } = useScroll();
const { scrollYProgress } = useScroll({
	target: ref,
	offset: ["start start", "end start"],
});

// Map scroll position to CSS values
const opacity = useTransform(scrollY, [0, 100], [0, 1]);
const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
```

### Applying Motion Values to Non-Motion Elements

Use `style` prop on `motion.div` with `MotionValue` objects — never pass them to regular HTML elements.

### Fixed Navigation z-index

Nav uses `z-50` (`z-index: 50`). All content sections use default stacking.

### `useInView` Margin

Always use `margin: "-100px"` so elements begin their entrance animation before they're fully scrolled into view — avoids a "pop-in" feeling.
