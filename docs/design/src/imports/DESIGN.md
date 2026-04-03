# Design System Specification: The Ethereal Atrium

## 1. Overview & Creative North Star: "The Digital Conservatory"

This design system is anchored in the philosophy of the **Ethereal Atrium**. It rejects the heavy, boxed-in nature of traditional dashboard design in favor of a "Digital Conservatory"—a space defined by light, air, and organic flow.

To achieve a high-end editorial feel, we move away from rigid, predictable grids. Instead, we embrace **Intentional Asymmetry** and **Tonal Depth**. By utilizing the "cool and refreshing" palette of deep teals and the newly introduced muted lavender-slate, the interface should feel like looking through layers of mist and glass. This is not a "flat" design; it is a "layered" design where hierarchy is dictated by light and atmosphere rather than lines and boxes.

---

## 2. Color & Atmosphere

The palette is a transition from the refreshing depth of a boreal forest to the soft light of a Nordic morning.

### The Palette (Material Design Tokens)

- **Primary (Teal):** `#006a70` (Core Action) / `#c4f9fc` (Container — softer tint; see styleguide `bg-primary-container`)
- **Secondary (Slate Green):** `#4a6366` (Subtle Utility)
- **Tertiary (Muted Lavender/Slate):** `#546073` (Sophisticated Accent)
- **Neutral (Frost):** `#f6fafa` (Background) / `#ffffff` (Highest Surface)

### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Traditional "hairline" borders create visual clutter and break the airy aesthetic.

- **Solution:** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the definition a user needs without the "grid-lock" of lines.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers—like stacked sheets of frosted glass.

- **Base:** `surface` (`#f6fafa`)
- **Secondary Content:** `surface-container-low` (`#eef5f5`)
- **Interactive Cards:** `surface-container-lowest` (`#ffffff`) for a "lifted" feel.
- **Deep Inset/Modals:** `surface-container-highest` (`#dae5e5`)

### The "Glass & Gradient" Rule

To escape the "out-of-the-box" look, use **Glassmorphism** for floating elements (Navigation bars, Overlays). Use semi-transparent surface colors with a `backdrop-blur` of 12px–20px.

- **Signature Textures:** For Hero sections or primary CTAs, apply a subtle linear gradient from `primary` (#006a70) to `primary-dim` (#005d63) at a 135-degree angle. This adds "visual soul" that flat hex codes cannot replicate.

---

## 3. Typography: Editorial Authority

We use **Plus Jakarta Sans** for its geometric clarity and modern breathability.

- **Display (lg/md/sm):** Used for "Statement" moments. These should be set with tight letter-spacing (-0.02em) to feel like a high-end magazine masthead.
- **Headlines:** The "Anchor" of the page. Use `headline-lg` to create a clear entry point into content.
- **Body (lg/md):** Primary reading weight. Ensure a generous line-height (1.6) to maintain the "airy" feel.
- **Labels:** Use `label-md` in all-caps with increased letter-spacing (+0.05em) for category headers to create a sophisticated, curated look.

---

## 4. Elevation & Depth: Tonal Layering

We do not use shadows to signify "drop"; we use light to signify "presence."

- **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift.
- **Ambient Shadows:** If a floating effect is required (e.g., a dropdown or popover), use a shadow with a blur radius of 30px–50px at 4% opacity. The color should be a tinted teal-grey (derived from `on-surface`) rather than pure black.
- **The "Ghost Border" Fallback:** For accessibility in high-density data, use a "Ghost Border": `outline-variant` at **10% opacity**. It should be felt, not seen.

---

## 5. Components: Fluidity & Softness

### Corner Radius: Round Eight

Following the **Round Eight** scale, the `DEFAULT` is `0.5rem` (8px).

- **Buttons:** `full` (9999px) for a soft, pill-shaped organic feel.
- **Cards/Sections:** `lg` (1rem) or `xl` (1.5rem) to emphasize a friendly, approachable structure.

### Key Components

- **Buttons:**
- _Primary:_ Gradient fill (Primary to Primary-Dim) with `on-primary` text.
- _Secondary:_ `secondary-container` fill with `on-secondary-container` text. No border.
- **Cards:** Never use a divider line inside a card. Use `body-sm` text in the `tertiary` color to separate metadata from titles.
- **Input Fields:** Use a `surface-container-high` background. On focus, transition the background to `surface-container-lowest` and add a 1px "Ghost Border" in `primary`.
- **Chips:** Use `tertiary-container` with `on-tertiary-container` text for a sophisticated, muted accent that differentiates from primary actions.

---

## 6. Do's and Don'ts

### Do:

- **Do** use white space as a structural element. If an element feels cramped, increase the spacing rather than adding a line.
- **Do** use the Tertiary Lavender-Slate (`#546073`) for secondary information like "Date Created" or "Breadcrumbs" to keep the UI feeling cool.
- **Do** lean into asymmetry. A hero image that is slightly offset from the text creates a custom, editorial feel.

### Don't:

- **Don't** use pure black (#000000) for text. Always use `on-surface` (`#2a3435`) to maintain the Boreal softness.
- **Don't** use standard "Drop Shadows." If it looks like a default Photoshop shadow, it’s too heavy.
- **Don't** use high-contrast orange or red for anything other than critical errors. This system thrives on harmony.
- **Don't** use dividers. If you feel the need for a horizontal rule, use a 24px vertical gap instead.

---

## Living reference

- **Figma (visual source of truth):** [AHA Design System](https://www.figma.com/design/zlXMI6B9Y88ykFSawN4hqO/AHA-Design-System?node-id=11-4) — file key `zlXMI6B9Y88ykFSawN4hqO`; in MCP/API, `node-id=11-4` → `11:4`.
- **Code:** When `ENABLE_STYLEGUIDE=true`, the interactive token and component reference is **`/styleguide`** (Ethereal Atrium — Material tokens, Tailwind v4). Production marketing pages may still use **`src/app/globals.css`** until aligned with Figma and this specification.
