# AHA Software Marketing Site - Architecture & Implementation Plan

## Context

The current ahasw.com is a single-page static HTML file (~19KB, all inline CSS/JS) deployed on Cloudflare Workers. It's a clean landing page but has no blog, no dynamic content, no SEO depth, and no way to manage content without editing raw HTML. AHA Software is expanding into events, premium content, and thought leadership, and needs a real marketing platform that supports multi-modal content updates, heavy SEO optimization, event management with registration, premium content paywalls, and CRM integration for lead tracking.

## Decided Stack

| Layer             | Choice                     | Rationale                                                                                             |
| ----------------- | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Framework**     | Next.js (App Router)       | SSR/SSG for SEO, React ecosystem, API routes for backend logic                                        |
| **CMS**           | Payload CMS v3             | Built on Next.js, lives in the same app at `/admin`, TypeScript-first, auth/media/versioning included |
| **Database**      | Neon (serverless Postgres) | Payload's recommended DB, serverless, generous free tier, works great with Vercel                     |
| **Hosting**       | Vercel                     | Best-in-class Next.js support, automatic deploys, image optimization, preview URLs                    |
| **Payments**      | Stripe                     | Subscriptions + one-time payments for premium content and paid events                                 |
| **CRM**           | HubSpot (free tier)        | Sync event registrations and contact form submissions as leads                                        |
| **Email**         | Resend (or AWS SES)        | Event confirmations, registration emails                                                              |
| **Styling**       | Tailwind CSS               | Carry forward Fraunces + DM Sans typography, teal (#0f766e) + warm stone palette                      |
| **Media Storage** | Vercel Blob or S3          | For Payload media uploads (images, video thumbnails)                                                  |

## Project Structure

```
aha-software-marketing/
├── src/
│   ├── app/
│   │   ├── (frontend)/              # Public-facing pages (grouped route)
│   │   │   ├── layout.tsx           # Public layout (header, footer, nav)
│   │   │   ├── page.tsx             # Homepage
│   │   │   ├── about/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx         # Blog listing
│   │   │   │   └── [slug]/page.tsx  # Blog post detail
│   │   │   ├── events/
│   │   │   │   ├── page.tsx         # Events listing + calendar
│   │   │   │   └── [slug]/page.tsx  # Event detail + registration
│   │   │   ├── premium/
│   │   │   │   └── page.tsx         # Premium content hub
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── (payload)/
│   │   │   └── admin/[[...segments]]/page.tsx  # Payload admin panel
│   │   ├── api/
│   │   │   ├── webhooks/stripe/route.ts        # Stripe webhook handler
│   │   │   ├── register-event/route.ts         # Event registration
│   │   │   └── contact/route.ts                # Contact form -> HubSpot
│   │   ├── sitemap.ts               # Dynamic sitemap generation
│   │   ├── robots.ts                # robots.txt
│   │   └── layout.tsx               # Root layout (fonts, metadata)
│   ├── collections/                 # Payload CMS collections
│   │   ├── Posts.ts                 # Blog posts
│   │   ├── Events.ts               # Events
│   │   ├── Pages.ts                 # Generic pages
│   │   ├── Media.ts                 # Media uploads
│   │   ├── Users.ts                 # Users (admin, premium, free)
│   │   ├── Registrations.ts         # Event registrations
│   │   └── Categories.ts            # Blog categories/tags
│   ├── blocks/                      # Payload rich content blocks
│   │   ├── RichText.ts
│   │   ├── VideoEmbed.ts
│   │   ├── CodeBlock.ts
│   │   ├── CallToAction.ts
│   │   └── ImageGallery.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Nav.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/                      # Shared UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── AnimateOnScroll.tsx
│   │   ├── blog/
│   │   │   ├── PostCard.tsx
│   │   │   └── PostContent.tsx
│   │   ├── events/
│   │   │   ├── EventCard.tsx
│   │   │   ├── EventCalendar.tsx
│   │   │   ├── RegistrationForm.tsx
│   │   │   └── AddToCalendar.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   └── FeaturedContent.tsx
│   │   └── premium/
│   │       ├── PaywallGate.tsx
│   │       └── PricingCard.tsx
│   ├── lib/
│   │   ├── stripe.ts               # Stripe client + helpers
│   │   ├── hubspot.ts              # HubSpot API client
│   │   ├── seo.ts                  # JSON-LD generators, meta helpers
│   │   ├── calendar.ts             # iCal/Google Calendar export
│   │   └── payload.ts              # Payload client utilities
│   ├── globals/                     # Payload globals
│   │   ├── SiteSettings.ts         # Site-wide settings (logo, social links, etc.)
│   │   └── Navigation.ts           # Nav menu structure
│   └── payload.config.ts           # Payload master config
├── public/
│   └── fonts/                       # Self-hosted Fraunces + DM Sans
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Payload CMS Collections

### Posts

- `title` (text, required)
- `slug` (auto-generated from title)
- `content` (Lexical rich text with blocks: video embed, code block, CTA, image gallery)
- `excerpt` (textarea)
- `featuredImage` (upload -> Media)
- `categories` (relationship -> Categories)
- `author` (relationship -> Users)
- `publishedAt` (date)
- `status` (draft | published)
- `premium` (boolean - gated behind paywall)
- SEO fields via `@payloadcms/plugin-seo` (meta title, description, image)

### Events

- `title` (text)
- `slug` (auto-generated)
- `description` (Lexical rich text)
- `featuredImage` (upload -> Media)
- `date` (date + time)
- `endDate` (date + time, optional)
- `location` (text - physical address or "Virtual")
- `virtualLink` (text - Zoom/Teams link, visible after registration)
- `capacity` (number, optional)
- `price` (number, 0 = free)
- `stripePriceId` (text - for paid events)
- `registrationDeadline` (date)
- `status` (upcoming | past | cancelled)
- `recording` (upload -> Media, for post-event premium content)
- SEO fields

### Users

- Payload default auth fields (email, password, hash, salt)
- `name` (text)
- `role` (admin | premium | registered | public)
- `stripeCustomerId` (text)
- `subscriptionStatus` (active | cancelled | none)

### Registrations

- `user` (relationship -> Users)
- `event` (relationship -> Events)
- `registeredAt` (date, auto)
- `paymentStatus` (paid | free | pending)
- `stripePaymentId` (text)
- `attended` (boolean)

### Categories

- `title` (text)
- `slug` (auto-generated)
- `description` (textarea)

### Media

- Payload default upload fields
- `alt` (text, required for accessibility/SEO)
- `caption` (text)

## SEO Implementation

1. **Payload SEO Plugin** - adds meta title, description, OG image fields to Posts, Events, Pages
2. **JSON-LD Structured Data** on every page:
   - `Organization` schema (sitewide)
   - `Article` schema (blog posts)
   - `Event` schema (event pages, with offers for paid events)
   - `BreadcrumbList` (all pages)
   - `WebSite` with `SearchAction` (homepage)
3. **Dynamic `sitemap.ts`** - queries all published posts, events, pages from Payload
4. **Dynamic `robots.ts`** - standard rules, reference sitemap
5. **`generateMetadata()`** on every page using Payload SEO fields
6. **Canonical URLs** on all pages
7. **Semantic HTML** - `<article>`, `<nav>`, `<main>`, `<time datetime="...">`, proper heading hierarchy
8. **Next.js Image** - automatic WebP/AVIF, lazy loading, srcset
9. **Self-hosted fonts** with `next/font` (eliminates FOUT, no external requests)
10. **Blog categories/tags** create crawlable taxonomy pages at `/blog/category/[slug]`

## Events System

1. Public listing page at `/events` with upcoming events + past events archive
2. Optional calendar view (month grid showing event dates)
3. Event detail pages with full description, date/time, location, remaining spots
4. Registration form:
   - Free events: email + name, create/link user account
   - Paid events: Stripe Checkout redirect, webhook confirms registration
5. Email confirmation via Resend after registration
6. "Add to Calendar" button (generates .ics file and Google Calendar link)
7. Post-event: recording/resources can be uploaded and optionally gated as premium
8. Registration -> HubSpot contact sync

## Premium Content / Paywalls

1. Payload auth handles user accounts (registration, login, sessions)
2. Content marked as `premium: true` shows preview + blurred content + CTA
3. Stripe Checkout for premium subscriptions
4. Stripe webhook at `/api/webhooks/stripe` updates user `subscriptionStatus` in Payload
5. Three access tiers:
   - **Public**: Homepage, services, about, free blog posts, event listings
   - **Registered** (free account): Access to some gated content, event registration
   - **Premium** (paid): All content, event recordings, premium blog posts
6. Middleware or server component checks subscription status before rendering premium content

## CRM (HubSpot) Integration

1. Contact form submissions -> create HubSpot contact + deal
2. Event registrations -> create/update HubSpot contact, tag with event name
3. Premium signups -> update HubSpot contact with lifecycle stage
4. Use HubSpot free CRM API (no paid tier needed for this volume)

## Design system

**Canonical specification — Ethereal Atrium ("Digital Conservatory"):** See [`docs/DESIGN.md`](./DESIGN.md). Interactive tokens and components: `/styleguide` when `ENABLE_STYLEGUIDE=true` (source: `src/app/(styleguide)/styleguide.css`).

**Production marketing site (current `globals.css`):** Reference HTML comps live in `docs/stitch-*.html` (homepage, blog, event, premium). The tables below describe **shipped** tokens until pages align with Ethereal Atrium.

### Creative direction (production site — pre-migration)

High-end editorial marketing: premium broadsheet / gallery-monograph feel. Authority through whitespace, layered surfaces, and intentional asymmetry. **Figma (source of truth):** [AHA Design System](https://www.figma.com/design/zlXMI6B9Y88ykFSawN4hqO/AHA-Design-System); legacy page comps: _Consulting Homepage — Refined Style_ in the older Webpage file.

### Typography

- **Headline**: `Fraunces` (serif) - italic for brand voice, tight tracking (`-0.02em`)
- **Body**: `DM Sans` (sans-serif) - clean, professional readability
- **Labels**: `DM Sans` uppercase with `tracking-[0.2em]` for metadata/overlines
- Self-hosted via `next/font` (no Google Fonts CDN requests)

### Color Tokens (Material Design 3)

#### Core

| Token                  | Value     | Usage                                          |
| ---------------------- | --------- | ---------------------------------------------- |
| `primary`              | `#005c55` | Brand anchor, high-action CTAs                 |
| `primary-container`    | `#0f766e` | Hero moments, gradient endpoint                |
| `on-primary`           | `#ffffff` | Text on primary surfaces                       |
| `on-primary-container` | `#a3faef` | Text on primary-container                      |
| `background`           | `#fff8f2` | "Warm Stone" base - warmer than standard white |
| `on-background`        | `#1e1b17` | Primary text (never pure black)                |
| `tertiary`             | `#7f4025` | Clay/copper accent for badges, notifications   |
| `tertiary-container`   | `#9c573a` | Tertiary surface                               |

#### Surface Layers (Tonal Depth)

| Token                       | Value     | Role                              |
| --------------------------- | --------- | --------------------------------- |
| `surface`                   | `#fff8f2` | Base (the desk)                   |
| `surface-container-lowest`  | `#ffffff` | Card backgrounds (the paper)      |
| `surface-container-low`     | `#faf2eb` | Section backgrounds (the blotter) |
| `surface-container`         | `#f4ede6` | Default containers                |
| `surface-container-high`    | `#eee7e0` | Elevated surfaces                 |
| `surface-container-highest` | `#e8e1db` | Highest elevation                 |
| `surface-variant`           | `#e8e1db` | Input backgrounds                 |
| `surface-dim`               | `#e0d9d2` | Dimmed/disabled surfaces          |

#### Utility

| Token                 | Value     | Usage                         |
| --------------------- | --------- | ----------------------------- |
| `outline`             | `#6e7977` | Subtle metadata text          |
| `outline-variant`     | `#bdc9c6` | Borders (at low opacity only) |
| `on-surface-variant`  | `#3e4947` | Secondary text                |
| `secondary`           | `#466460` | Secondary actions             |
| `secondary-container` | `#c5e6e1` | Category chips, tags          |
| `error`               | `#ba1a1a` | Error states                  |
| `inverse-surface`     | `#33302c` | Dark mode surfaces            |
| `inverse-on-surface`  | `#f7efe9` | Dark mode text                |

### The Rules

1. **No-Line Rule**: No `1px solid` borders for sectioning. Define boundaries through background color shifts between surface layers.
2. **No Pure Black**: Use `on-surface` (`#1e1b17`) for text. Never `#000000`.
3. **Tonal Layering for Depth**: Cards sit on sections via surface token stacking. Forget drop shadows in 90% of cases.
4. **Glassmorphism for Floating Elements**: Nav bar uses `bg-[#fff8f2]/80 backdrop-blur-lg` with ambient shadow `shadow-[0_20px_40px_rgba(30,27,23,0.05)]`.
5. **Signature Gradient**: Primary CTAs use `linear-gradient(135deg, #005c55, #0f766e)` for a jewel-tone depth.
6. **Asymmetric Grids**: Use 7/5, 8/4 column splits instead of even 6/6. Intentional asymmetry creates editorial feel.

### Component Patterns (from Comps)

#### Navigation (shared across all screens)

- Fixed position, glassmorphism background
- Logo: `font-headline font-bold text-2xl tracking-tighter`
- Links: `font-headline italic text-lg tracking-tight` with `opacity-80 hover:opacity-100`
- Active link: `border-b-2 border-[#005c55]`
- CTA button: Primary gradient, uppercase tracking

#### Buttons

- **Primary**: Signature gradient, `text-on-primary`, uppercase `tracking-[0.2em]`, bold
- **Secondary**: `bg-surface-container-high text-on-surface`, no border
- **Outline**: `border-2 border-primary text-primary`, hover fills
- **Text/Link**: Primary color, uppercase tracking, optional underline on hover

#### Cards

- **Blog cards**: No visible border, image with `group-hover:scale-105`, category badge overlay
- **Service pillars**: `border-t border-outline-variant` with `hover:border-primary`
- **Premium content cards**: `bg-surface-container-lowest`, `hover:translate-y-[-8px]` with teal-tinted shadow
- **Event capacity**: Progress bar with `bg-primary` fill

#### Forms (from event registration & contact)

- Input: `bg-surface-container` with `border-b-2 border-transparent focus:border-primary`
- Label: `text-xs uppercase tracking-widest text-outline`
- No rounded corners on inputs (minimal border-radius)

#### Section Labels

- `text-xs uppercase tracking-[0.2em]` in tertiary or primary color
- Often followed by large serif headline

#### Footer

- 4-column grid on `bg-[#f5ede4]`
- Category headers: `text-sm uppercase tracking-wide font-bold text-[#005c55]`
- Links: `opacity-60 hover:opacity-100 hover:translate-x-1 transition-all`

#### Editorial Grid Background

- Dot pattern: `radial-gradient(circle, #bdc9c6 1px, transparent 1px)` at `40-60px` size
- Applied at `opacity-10-20` as subtle texture

#### Icons

- Material Symbols Outlined (Google)
- Variable weight/fill: `font-variation-settings: 'FILL' 0, 'wght' 400`

### Enhancements (Phase 5)

- **View Transitions API** - smooth crossfade between page navigations
- **Scroll-driven animations** - elements fade/slide in on viewport entry
- **Dark mode** - full token set supports it, toggle with smooth transition
- **Micro-interactions** - button hover effects, card lifts, link underline animations
- **Blog reading progress** bar
- **Smooth scroll** with offset for fixed header

## Phased Implementation

### Phase 1: Foundation (build first)

- `create-payload-app` with Next.js template
- Neon Postgres connection
- Tailwind config with design system tokens (colors, fonts, spacing)
- Self-hosted fonts via `next/font`
- Layout components: Header, Footer, Nav (desktop + mobile)
- Homepage (migrated from current site, componentized, enhanced)
- About page
- Services page
- Contact page with form (email submission)
- Basic SEO: metadata, sitemap, robots.txt, JSON-LD Organization
- Vercel deployment

### Phase 2: Blog & Content

- Posts + Categories + Media collections in Payload
- Payload SEO plugin
- Blog listing page with pagination
- Blog post detail page with rich content rendering
- Category/tag pages
- RSS feed at `/feed.xml`
- JSON-LD Article schema
- Open Graph images

### Phase 3: Events

- Events + Registrations collections
- Events listing page (list view + optional calendar)
- Event detail page with registration form
- Email confirmation (Resend integration)
- Add to Calendar functionality
- JSON-LD Event schema
- Capacity tracking

### Phase 4: Auth & Premium Content

- User registration + login pages
- Payload auth configuration
- Stripe integration (subscriptions)
- Stripe webhook handler
- PaywallGate component for content gating
- Premium content hub page
- User profile/dashboard

### Phase 5: CRM & Polish

- HubSpot integration (contact form, event registration, signup syncs)
- Dark mode implementation
- View Transitions
- Scroll animations (AnimateOnScroll component)
- Micro-interactions and hover effects
- Performance audit and optimization
- Lighthouse / Core Web Vitals tuning

## Key Dependencies

```json
{
	"dependencies": {
		"next": "^15",
		"react": "^19",
		"react-dom": "^19",
		"payload": "^3",
		"@payloadcms/next": "^3",
		"@payloadcms/db-postgres": "^3",
		"@payloadcms/richtext-lexical": "^3",
		"@payloadcms/plugin-seo": "^3",
		"@payloadcms/storage-vercel-blob": "^3",
		"stripe": "^17",
		"resend": "^4",
		"@hubspot/api-client": "^12",
		"tailwindcss": "^4",
		"@tailwindcss/typography": "^0.5"
	}
}
```

## Verification

1. **Local dev**: `bun run dev` -> site loads at localhost:3000, admin at localhost:3000/admin
2. **Content creation**: Create a blog post in `/admin`, verify it appears on `/blog` with correct SEO meta
3. **Event flow**: Create event -> register -> confirm email received -> verify registration in admin
4. **Premium flow**: Create premium post -> verify paywall gate shows for unauthenticated users -> purchase subscription -> verify content unlocks
5. **SEO audit**: Run Lighthouse on key pages, verify structured data with Google Rich Results Test, validate sitemap
6. **Vercel deploy**: Push to main -> verify preview deployment -> promote to production
