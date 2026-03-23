# Design System Document: High-End Editorial Software Marketing

## 1. Overview & Creative North Star

### The Creative North Star: "The Digital Curator"
This design system rejects the "SaaS-in-a-box" aesthetic. Instead of rigid grids and neon accents, we lean into a **High-End Editorial** experience. We treat software marketing like a premium broadsheet or a luxury gallery monograph. The "Digital Curator" approach prioritizes authority through whitespace, sophisticated serif typography, and a "layered paper" philosophy.

**The Signature Feel:**
- **Intentional Asymmetry:** Break the 12-column monotony. Use wide margins and offset text blocks to guide the eye.
- **Tonal Authority:** Trust is built through the "Warm Stone" palette, providing a softer, more humanistic foundation than pure white.
- **Structural Breathing Room:** We use the spacing scale to create "moments of pause," ensuring that high-level software concepts are digestible and prestigious.

---

## 2. Colors & Surface Philosophy

The palette is rooted in organic, earth-toned neutrals contrasted by a deep, authoritative teal.

### Color Tokens
- **Primary (`#005c55` / `#0f766e`):** Used for brand anchoring. Use the `primary_container` for hero moments and `primary` for high-action CTAs.
- **Surface & Background (`#fff8f2`):** Our "Warm Stone" base. It is warmer than standard digital backgrounds, reducing eye strain and feeling more "physical."
- **Tertiary (`#7f4025`):** A sophisticated clay-red used sparingly for accents, notifications, or secondary data points to provide warmth.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts.
- To separate a "Features" section from a "Hero," transition from `surface` to `surface-container-low`.
- **Nesting:** Treat the UI as stacked sheets of fine paper. A card (`surface-container-lowest`) should sit on a section (`surface-container-low`) to create natural depth without a single stroke of a pen.

### The "Glass & Gradient" Rule
To avoid a flat, "templated" look, use Glassmorphism for floating navigation and modal overlays:
- **Surface Blur:** Use `surface` at 80% opacity with a `20px` backdrop-blur.
- **Signature Gradients:** For primary CTAs, apply a subtle linear gradient from `primary` (#005c55) to `primary_container` (#0f766e) at a 135° angle. This adds a "jewel-tone" depth that feels bespoke.

---

## 3. Typography

The system uses a high-contrast pairing: **Newsreader** (Serif) for authority and **Manrope** (Sans-Serif) for functional clarity.

### Typography Scale
- **Display (Newsreader):** Use `display-lg` (3.5rem) for hero headlines. Character spacing should be set to `-0.02em` to feel tight and editorial.
- **Headlines (Newsreader):** `headline-lg` through `headline-sm`. These are the "voice" of the brand. Use "Sentence case" to maintain a sophisticated, approachable tone.
- **Body (Manrope):** `body-lg` (1rem) is the standard for marketing copy. Manrope’s geometric yet friendly structure balances the traditional feel of the serifs.
- **Labels (Manrope):** `label-md` (0.75rem) in All-Caps with `0.05em` letter spacing should be used for overlines or small categories to provide a "metadata" feel.

---

## 4. Elevation & Depth

### The Layering Principle
Forget shadows in 90% of use cases. Depth is achieved via **Tonal Layering**:
1. **Base:** `surface` (The desk)
2. **Section:** `surface-container-low` (The blotter)
3. **Card/Element:** `surface-container-lowest` (The paper)

### Ambient Shadows
When an element must float (e.g., a dropdown or a "sticky" CTA), use **Ambient Shadows**:
- **Color:** A tinted version of `on-surface` (Deep Charcoal) at 4-6% opacity.
- **Blur:** Large and diffused (e.g., `box-shadow: 0 20px 40px rgba(30, 27, 23, 0.05)`).
- **The Ghost Border:** If a border is required for accessibility, use `outline-variant` at **15% opacity**. 100% opaque borders are strictly forbidden as they "trap" the content.

---

## 5. Components

### Buttons
- **Primary:** Filled with the "Signature Gradient" (`primary` to `primary_container`). Use `rounded-md` (0.375rem). The text should be `title-sm` (Manrope) for a bold, functional feel.
- **Secondary:** `surface-container-high` background with `on-surface` text. No border.
- **Tertiary:** Text-only in `primary` color, with a 2px underline that appears on hover.

### Cards & Content Blocks
- **The Rule of No Dividers:** Forbid the use of horizontal rules (`<hr>`). Separate content using the Spacing Scale (typically `spacing-12` or `spacing-16`).
- **Composition:** Use `surface-container-lowest` for card backgrounds. Apply a generous `padding-8` (2.75rem) to give the content "gallery room."

### Input Fields
- **Styling:** Soft `surface-variant` backgrounds.
- **Focus State:** Instead of a heavy border change, use a `2px` solid `primary` bottom-border only. This mimics high-end stationery.

### Interactive Chips
- Use `rounded-full` for category tags. Background: `secondary_container`; Text: `on_secondary_container`. These should feel like small, polished stones.

---

## 6. Do's and Don'ts

### Do
- **Do** use asymmetrical layouts (e.g., a 7-column image next to a 4-column text block with a 1-column gap).
- **Do** use `Newsreader` for any text meant to be "heard" in the brand's voice.
- **Do** lean into the "Warm Stone" (`#fff8f2`) background; white space should feel warm, not sterile.
- **Do** use the `spacing-20` (7rem) for vertical section gaps to emphasize the premium nature of the content.

### Don't
- **Don't** use 1px solid borders to wrap cards or sections.
- **Don't** use pure black (`#000000`) for text. Use `on-surface` (`#1e1b17`) to maintain the organic editorial feel.
- **Don't** use standard "drop shadows" with high opacity or small blurs. 
- **Don't** cram content. If a section feels "full," double the padding. Premium is synonymous with space.