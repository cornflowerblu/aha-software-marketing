# AHA Software Marketing Site

> **Status: Active Development** — Core scaffold, CMS collections, layout components, and design docs (_Ethereal Atrium_ in [`docs/DESIGN.md`](docs/DESIGN.md); `/styleguide` when enabled) are in place. Blog, events, auth, and premium content features are in progress.

A full-stack marketing platform for AHA Software, built to support thought leadership, event management, premium content paywalls, and SEO-optimized publishing. Replaces the previous single-page static site with a production-grade CMS-driven platform.

---

## Tech Stack

| Layer             | Choice                                      |
| ----------------- | ------------------------------------------- |
| **Framework**     | Next.js 16 (App Router)                     |
| **CMS**           | Payload CMS v3 (co-located in the same app) |
| **Database**      | Neon (serverless Postgres)                  |
| **Styling**       | Tailwind CSS v4                             |
| **Hosting**       | Vercel                                      |
| **Payments**      | Stripe (subscriptions + one-time)           |
| **Email**         | Resend                                      |
| **CRM**           | HubSpot (free tier)                         |
| **Media Storage** | Vercel Blob                                 |
| **Runtime**       | Bun                                         |

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.3+
- A [Neon](https://neon.tech) Postgres database
- (Optional for full functionality) Stripe, Resend, and HubSpot accounts

### Installation

```bash
bun install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable                | Description                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| `DATABASE_URL`          | Neon Postgres connection string                                  |
| `PAYLOAD_SECRET`        | Random secret for Payload CMS (use a strong value in production) |
| `STRIPE_SECRET_KEY`     | Stripe secret key (`sk_test_...` for dev)                        |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret (`whsec_...`)                      |
| `RESEND_API_KEY`        | Resend API key for transactional email                           |
| `HUBSPOT_API_KEY`       | HubSpot private app token                                        |
| `NEXT_PUBLIC_SITE_URL`  | Full site URL (`http://localhost:3000` for dev)                  |

### Development

```bash
bun run dev
```

The site runs at `http://localhost:3000` and the Payload admin panel is at `http://localhost:3000/admin`.

---

## Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public-facing pages
│   │   ├── layout.tsx        # Shared header + footer
│   │   ├── page.tsx          # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   ├── blog/             # Listing + [slug] detail
│   │   ├── events/           # Listing + [slug] detail + registration
│   │   ├── premium/          # Premium content hub (paywalled)
│   │   ├── login/
│   │   └── register/
│   ├── (payload)/
│   │   └── admin/            # Payload CMS admin panel
│   ├── api/
│   │   ├── contact/          # Contact form → HubSpot
│   │   ├── register-event/   # Event registration handler
│   │   └── webhooks/stripe/  # Stripe webhook (subscription updates)
│   └── globals.css           # Tailwind theme + design tokens
├── collections/              # Payload CMS data models
│   ├── Posts.ts
│   ├── Events.ts
│   ├── Users.ts
│   ├── Registrations.ts
│   ├── Categories.ts
│   └── Media.ts
├── globals/
│   ├── SiteSettings.ts       # Logo, social links, footer copy
│   └── Navigation.ts         # Nav menu structure (CMS-managed)
├── components/
│   ├── layout/               # Header, Footer
│   └── ui/                   # Button, Card, Badge, Input, Textarea, AnimateOnScroll, SectionLabel
└── payload.config.ts         # Payload master config
```

---

## CMS Collections

Content is managed through the Payload admin panel at `/admin`.

### Posts (Blog)

- Rich text content via Lexical editor (video embeds, code blocks, CTAs, image galleries)
- Category taxonomy, featured images, author attribution
- `premium` flag gates content behind paywall
- SEO fields (meta title, description, OG image) via `@payloadcms/plugin-seo`
- Draft/published workflow

### Events

- Date/time, location (physical or virtual), capacity tracking
- Free or paid (Stripe price ID for paid events)
- Virtual meeting link revealed only after registration
- Post-event recording upload (optionally gated as premium)
- Registration deadline and status (`upcoming` | `past` | `cancelled`)

### Users

- Payload-native auth (email + password)
- Three roles: `admin`, `premium`, `registered`
- `stripeCustomerId` and `subscriptionStatus` synced via Stripe webhook

### Registrations

- Links a user to an event
- Tracks payment status (`paid` | `free` | `pending`) and attendance
- Created on free registration or confirmed via Stripe webhook for paid events

### Categories / Media

- Blog category taxonomy with slugs
- Media uploads with required `alt` text for accessibility and SEO

---

## Features

### SEO

- `generateMetadata()` on every page using Payload SEO fields
- JSON-LD structured data: `Organization`, `Article`, `Event`, `BreadcrumbList`, `WebSite`
- Dynamic `sitemap.ts` and `robots.ts`
- Canonical URLs, semantic HTML (`<article>`, `<time datetime="...">`, proper heading hierarchy)
- Self-hosted fonts via `next/font` (no Google Fonts CDN, no FOUT)
- `next/image` for automatic WebP/AVIF optimization

### Events System

- Public listing with upcoming/past archive
- Registration flow: free (email + name) or paid (Stripe Checkout redirect)
- Email confirmation via Resend after registration
- Add-to-Calendar (generates `.ics` + Google Calendar link)
- Capacity progress bar and sold-out handling
- Post-event recordings optionally unlocked as premium content

### Auth & Premium Content

- Three access tiers: **Public** → **Registered** (free account) → **Premium** (paid subscription)
- Stripe subscription checkout with webhook-driven role updates
- Content marked `premium: true` shows a preview + blurred paywall gate for non-subscribers

### CRM Integration

- Contact form submissions create HubSpot contacts + deals
- Event registrations sync as HubSpot contacts tagged with the event name
- Premium signups update HubSpot lifecycle stage

---

## Design system

**Canonical spec:** _Ethereal Atrium_ (_Digital Conservatory_) — [`docs/DESIGN.md`](docs/DESIGN.md). **Figma (visual source of truth):** [AHA Design System](https://www.figma.com/design/zlXMI6B9Y88ykFSawN4hqO/AHA-Design-System). Tokens + components: `/styleguide` when `ENABLE_STYLEGUIDE=true`.

**Production site (`globals.css` today):** high-end editorial marketing (warm stone base, layered surfaces). Typography and colors below match **shipped** pages until they align with Ethereal Atrium.

### Typography (production)

- **Headlines:** `Fraunces` (serif) — italic brand voice, tight tracking (`-0.02em`)
- **Body / Labels:** `DM Sans` (sans-serif) — clean, professional readability
- Both fonts are self-hosted via `next/font`

### Color palette (`globals.css`)

| Token                 | Value     | Usage                           |
| --------------------- | --------- | ------------------------------- |
| `primary`             | `#005c55` | Brand anchor, high-action CTAs  |
| `primary-container`   | `#0f766e` | Hero moments, gradient endpoint |
| `background`          | `#fff8f2` | Warm stone base                 |
| `on-background`       | `#1e1b17` | Primary text (never pure black) |
| `tertiary`            | `#7f4025` | Clay/copper accent, badges      |
| `secondary-container` | `#c5e6e1` | Category chips, tags            |

Surface layers use tonal stacking (`surface` → `surface-container-low` → `surface-container-lowest`) for depth without relying on borders.

**Key rules:** no 1px borders for sectioning (use tonal shifts), no pure black text, ambient shadows only (large + diffused at low opacity), signature gradient on primary CTAs (`linear-gradient(135deg, #005c55, #0f766e)`).

---

## Implementation Phases

| Phase                  | Scope                                                                                     | Status         |
| ---------------------- | ----------------------------------------------------------------------------------------- | -------------- |
| **1 — Foundation**     | Scaffold, design system, layout components, homepage, about, services, contact, basic SEO | ✅ In progress |
| **2 — Blog**           | Posts + Categories collections, blog listing + post detail, RSS feed, OG images           | 🔜 Upcoming    |
| **3 — Events**         | Events + Registrations, listing + detail pages, registration flow, email, calendar export | 🔜 Upcoming    |
| **4 — Auth & Premium** | User auth, Stripe subscriptions, paywall gate, premium hub                                | 🔜 Upcoming    |
| **5 — CRM & Polish**   | HubSpot integration, dark mode, view transitions, scroll animations, performance audit    | 🔜 Upcoming    |

---

## Testing

```bash
# Unit + integration tests
bun test

# Unit tests only
bun run test:unit

# E2E tests (Playwright)
bun run test:e2e

# E2E with interactive UI
bun run test:e2e:ui

# Coverage report
bun run test:coverage
```

E2E test suites cover: homepage, navigation, blog, events, contact, premium, and responsive layout.

---

## Deployment

The project deploys to Vercel. Pushing to `main` triggers a production deployment; all other branches get a preview URL.

```bash
# Production build check (local)
bun run build

# Lint
bun run lint
```

Set all environment variables from `.env.example` in your Vercel project settings before deploying.

---

## Stripe Webhook Setup

For local development, use the [Stripe CLI](https://stripe.com/docs/stripe-cli) to forward webhook events:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the printed webhook signing secret to `STRIPE_WEBHOOK_SECRET` in `.env.local`. The webhook handler processes `checkout.session.completed` and `customer.subscription.*` events to update user subscription status in Payload.
