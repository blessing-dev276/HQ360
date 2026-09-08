# HQ360 Website — Full Overview

> Context document for sharing with an AI assistant (e.g. ChatGPT) so it can understand
> the whole project and give useful help. Written 2026-09-08.

---

## 1. What this is

A marketing website for **HQ360** (also referred to as "House of Synergy"), a full-service
agency for **authors and personal / brand building**. Positioning: an evolution of a
book-marketing agency into a complete author-and-personal-brand growth studio — visibility,
credibility, sales and media presence, not just book rankings.

- **Live app:** https://hq360.lovable.app
- **Built with:** [Lovable](https://lovable.dev) (Lovable project id `304d40f6-011a-44b5-88a3-50abdec31077`).
  Commits pushed to `main` sync back into the Lovable editor. Do **not** rewrite published
  git history (no force-push / rebase / amend of pushed commits).
- **Tagline:** "Where Your Story Meets Its Spark."
- **Hero eyebrow:** "Book marketing, brand building, and press for authors and creators"
- **Contact email in content:** hello@houseofsynergy.co
- **Instagram:** https://www.instagram.com/hq3_60/ (TikTok and X links are placeholders `#`)

### Content status
Almost all copy — every stat, quote, name, price, case study — is **placeholder / illustrative
content** for layout, meant to be replaced with verified client data before launch. This is
stated explicitly at the top of `src/data/site.ts`. The one block of apparently real content
is the **Sanman Thapa book launch** (photos + cover-reveal video, published with Arti Facts
Publishing).

### Content rules from the original brief
- No "AI" wording and no hyphens in visible copy.
- No animation anywhere **except** the blazing logo mark.

---

## 2. Tech stack

| Area | Choice |
| --- | --- |
| Framework | **TanStack Start** (`@tanstack/react-start`) + **TanStack Router** (file-based routing) |
| UI runtime | **React 19** |
| Build tool | **Vite 8** (`@lovable.dev/vite-tanstack-config`), config in `vite.config.ts` |
| Server / SSR | Nitro (via TanStack Start); server entry `src/server.ts`, client entry `src/start.ts` |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite`), single stylesheet `src/styles.css`, oklch design tokens |
| Component library | shadcn-style primitives in `src/components/ui/*` (Radix UI under the hood), config `components.json` |
| Data fetching | `@tanstack/react-query` (QueryClient created per request in `src/router.tsx`) |
| Icons | `lucide-react` |
| Forms / validation | `react-hook-form` + `zod` |
| Carousel | `embla-carousel-react` |
| Charts | `recharts` (available; `src/components/ui/chart.tsx`) |
| Backend | **Supabase** (`@supabase/supabase-js`) |
| Package manager | **Bun** (`bun.lock`, `bunfig.toml`) — npm scripts still work |
| Lint / format | ESLint 9 (`eslint.config.js`) + Prettier (`.prettierrc`) |
| Language | TypeScript 5.8, path alias `@/*` -> `src/*` (`tsconfig.json`, `vite-tsconfig-paths`) |

### Scripts (`package.json`)
- `dev` — `vite dev`
- `build` — `vite build` (`build:dev` for development mode)
- `preview` — `vite preview`
- `lint` — `eslint .`
- `format` — `prettier --write .`

---

## 3. Project structure

```
src/
  routes/                 file-based routes (TanStack Start). routeTree.gen.ts is auto-generated — do not hand-edit.
    __root.tsx            app shell: <html>/<body>, global <head> meta + fonts, SiteHeader, <main id="main">, SiteFooter,
                          CookieBanner, StickyCta, ExitIntentOffer, 404 + error boundaries, skip-to-content link
    index.tsx             /                Home
    services.index.tsx    /services        Services overview
    services.$slug.tsx    /services/:slug  Service detail (loader looks up SERVICES by slug)
    results.tsx           /results         Results & case studies (+ CompareSlider)
    reviews.tsx           /reviews         Video testimonials, review screenshots, written testimonials
    about.tsx             /about           About / team
    pricing.tsx           /pricing         Flagship bundle + a la carte grid + pricing FAQs
    resources.tsx         /resources       Free lead magnets (audit / positioning report / launch checklist)
    blog.index.tsx        /blog            Blog listing
    blog.$slug.tsx        /blog/:slug      Blog article (loader looks up POSTS by slug)
    faqs.tsx              /faqs            FAQ accordion (General / Process / Pricing / Ethics)
    guarantee.tsx         /guarantee       What we do and don't guarantee
    book-launch.tsx       /book-launch     Sanman Thapa launch: cover-reveal video, covers, photo gallery
    contact.tsx           /contact         "Book a Free Strategy Call" — form (client-only, no submit wiring) + calendar embed placeholder
    privacy.tsx           /privacy         Legal
    terms.tsx             /terms           Legal
    api/public/resource-request.ts   POST endpoint: validates {email, slug, title}, inserts into Supabase, tries email delivery

  components/
    Logo.tsx              reusable SVG flame/"S" logo; props: variant "gradient" | "mono", markOnly, size
    site/                 page-level building blocks:
      SiteHeader.tsx      sticky header, nav from NAV, "Book a Free Strategy Call" CTA, mobile hamburger
      SiteFooter.tsx      charcoal footer: logo + tagline, Company / Free Tools / Legal columns, socials, NewsletterSignup
      Primitives.tsx      Section, SectionHeading, Eyebrow, PrimaryCta, SecondaryCta, StatRow, PlaceholderNote
      ProofSection.tsx, FeaturedAuthor.tsx, AwardsSection.tsx, ConnectedPlatforms.tsx, PlatformLogos.tsx
      CompareSlider.tsx   drag-to-compare before/after
      CookieBanner.tsx, StickyCta.tsx, ExitIntentOffer.tsx, RiskReversal.tsx, NewsletterSignup.tsx
      TeamAvatar.tsx
    ui/                   ~50 shadcn/Radix primitives (accordion, dialog, carousel, form, etc.)

  data/                   all site content lives here as typed TS constants (see section 4)
    site.ts   launch.ts   proof.ts

  assets/                 *.asset.json files — Lovable asset references (each JSON holds a { url } for an image/video)

  integrations/supabase/  client.ts (browser), client.server.ts (service-role admin), auth-*.ts, types.ts (generated DB types)

  lib/
    resource-delivery.server.ts   email delivery stub — currently logs and returns false (sending domain not configured yet)
    utils.ts (cn helper), error-capture.ts, error-page.ts, lovable-error-reporting.ts

  hooks/use-mobile.tsx
  router.tsx              getRouter(): creates QueryClient + router, scroll restoration
  styles.css              Tailwind v4 + full design-token system (oklch)

public/
  favicon.svg
  robots.txt
  resources/              the actual downloadable PDFs:
    hq360-brand-and-book-audit.pdf, hq360-positioning-report.pdf,
    hq360-launch-checklist.pdf, hq360-pricing-one-pager.pdf

supabase/
  config.toml
  migrations/2026073111...sql   creates public.resource_requests table
```

### Routing conventions (TanStack Start, file-based)
- Every `.tsx` in `src/routes/` is a route. `routeTree.gen.ts` is generated.
- Dynamic segment = bare `$` (e.g. `services.$slug.tsx` -> `/services/:slug`).
- `__root.tsx` is the only layout/shell. Do **not** add `src/pages/`, `app/layout.tsx`, etc.
- Each route sets its own SEO via `head: () => ({ meta, links })` — unique title + description,
  OpenGraph + Twitter card tags, some with canonical links.

---

## 4. Content model (`src/data/`)

### `site.ts` — the main content file
Exports (all placeholder unless noted):

- `BRAND` — `{ name: "HQ360", tagline, eyebrow, email: "hello@houseofsynergy.co" }`
- `NAV` — header nav: Home `/`, Service `/services`, Reviews `/reviews`, Pricing `/pricing`, About Us `/about`
  (note: footer also links to Results, Book Launch, Blog, Contact, Resources, FAQs, Guarantee, Privacy, Terms)
- `STATS` — 4 hero stats (75+ books/brands, 260+ verified reviews, 58 clients since 2024, 28 avg days to results)
- `AWARDS` — 3 award blurbs (2023-2025)
- `PLATFORMS` — Amazon, Goodreads, Apple Books, Barnes & Noble, Kobo, Audible, Forbes, Publishers Weekly, Podcast Networks
- `SERVICES` — 10 services, each `{ slug, number, title, short, before, after, detail, deliverables[], audience }`:
  1. `listing-optimization` — Amazon and Book Listing Optimization
  2. `goodreads-reader-lists` — Goodreads and Reader List Placement
  3. `bestseller-launch` — Bestseller Launch Campaigns
  4. `author-branding` — Author Branding and Media Kit
  5. `press-and-pr` — Press and PR Placement
  6. `review-campaigns` — Verified Review and Social Proof Campaigns
  7. `email-funnels` — Email Marketing and Launch Funnels
  8. `social-and-direct` — Social and Direct to Audience Promotion
  9. `personal-brand-strategy` — Personal Brand Strategy
  10. `speaking-and-thought-leadership` — Speaking and Thought Leadership Placement
- `CASES` — 6 case studies `{ slug, category, title, client, summary, beforeLabel, before, afterLabel, after, metrics[] }`
  (categories: Thriller, Self Help, Business, Memoir, Personal Brand, Fiction)
- `PROCESS` — 6 steps: Audit, Research, Strategy, Launch, Tracking, Optimization
- `DIFFERENTIATORS` — 3 cards: "We turn away work we cannot help", "Research before promises", "Full reporting, not vibes"
- `TEAM` — 6 members `{ name, role, initials, photo }`: Richard, Ebenezer, Zainab, Racheal, Emmanuel, Blessing
- `TESTIMONIALS` — 4 written quotes
- `COMPARISON` — table: columns `["HQ360", "Typical agency", "Doing it yourself"]`, 7 rows
- `PRICING_FLAGSHIP` — "The Full Launch", `$1,400`, "all services, one flat fee", 8 features
- `PRICING_ALACARTE` — 10 line items with price + cadence (one time / per month / per launch / per quarter)
- `FAQ_GROUPS` — General / Process / Pricing / Ethics, 3 Q&A each
- `PRICING_FAQS` — 6 pricing-specific Q&A
- `POSTS` — 3 blog posts `{ slug, title, excerpt, category, date, readTime, body[] }`
- `RESOURCES` — 3 lead magnets `{ slug, title, body, cta, file }` pointing at the PDFs in `public/resources/`

### `launch.ts` — Sanman Thapa book launch (appears real)
- `LAUNCH` — author "Sanman Thapa", book "From the Window: The City of What Ifs", publisher "Arti Facts Publishing",
  intro text, cover-reveal `video`
- `LAUNCH_COVERS` — 3 images (front, back, first printed copy)
- `LAUNCH_GALLERY` — ~14 launch-day photos with alt text + captions (some flagged `wide`)
- Images/video are imported from `src/assets/*.asset.json` (Lovable-hosted URLs)

### `proof.ts` — social proof media
- `VIDEO_TESTIMONIALS` — 2 client videos
- `REVIEW_SHOTS` — 4 screenshots (reviews from sanman_thapa, Brandon, hmarkos, plus a sales dashboard)

---

## 5. Backend (Supabase)

Only one backend feature is wired up: the **free-resource request flow**.

- **Table** `public.resource_requests` (migration `supabase/migrations/20260731115014_*.sql`):
  `id uuid pk`, `email text`, `resource_slug text`, `resource_title text`,
  `emailed_at timestamptz null`, `created_at timestamptz default now()`.
  RLS **enabled**, and only `service_role` is granted access (no public policies) — so writes
  must go through the server route, not the browser client.
- **API route** `POST /api/public/resource-request` (`src/routes/api/public/resource-request.ts`):
  - zod-validates `{ email, slug, title }`
  - inserts a row using `supabaseAdmin` (service-role client from `src/integrations/supabase/client.server.ts`)
  - calls `deliverResourceEmail(...)` in `src/lib/resource-delivery.server.ts`
  - **Email delivery is a stub**: it just `console.log`s and returns `false` ("Delivery is wired
    up once the sending domain is configured"). The user still gets the PDF directly from the site.
- **Env vars** (`.env`): `SUPABASE_URL`, `SUPABASE_PROJECT_ID`, `SUPABASE_PUBLISHABLE_KEY` and
  their `VITE_`-prefixed copies for the browser client. (No service-role key committed in the
  snapshot — it is expected from the environment.)
- `src/integrations/supabase/auth-*.ts` and `types.ts` exist (generated types + auth middleware
  scaffolding) but there is **no user-facing auth / login** in the site.

The **contact form** (`/contact`) and **newsletter signup** are currently front-end only —
they set a local "thank you" state and do not POST anywhere.

---

## 6. Design system (`src/styles.css`)

- Tailwind v4, single stylesheet, all colors in **oklch**, exposed as CSS custom properties and
  mapped into Tailwind via `@theme inline`.
- Brand tokens / palette named in the file: Cream `#FFFECB`, Dusty Olive `#80876A`,
  Onyx `#000F08`, Dim Grey `#776B69`, plus ember-family tokens: `--ember`, `--ember-deep`,
  `--blaze`, `--gold`, `--charcoal`, `--ink`, `--ink-muted`, `--surface`, `--surface-raised`.
  (The original brief called for an ember red -> orange -> gold fire palette and a warm
  off-white base; the shipped tokens are a warmer/olive interpretation.)
- Standard shadcn token set also present (`--background`, `--foreground`, `--primary`, `--card`,
  `--muted`, `--border`, `--ring`, chart + sidebar tokens), plus a `dark` variant.
- Utility classes referenced in components include `rule-fire` (gradient divider) and
  `shadow-editorial`.
- **Fonts** (loaded in `__root.tsx` from Google Fonts): **Fraunces** (serif, headlines) +
  **Inter** (sans, body/UI).
- Accessibility baked in: heading hierarchy, alt text on media, skip-to-content link,
  keyboard-navigable nav + accordions, focus-visible rings.

---

## 7. Global chrome / cross-cutting

Rendered on every page via `__root.tsx`:
- `SiteHeader` (sticky, responsive, mobile menu)
- `SiteFooter` (newsletter signup, nav columns, socials)
- `CookieBanner` — cookie-consent banner
- `StickyCta` — persistent "book a call" prompt
- `ExitIntentOffer` — exit-intent modal offering a free audit
- 404 (`NotFoundComponent`) and error boundary (`ErrorComponent`, reports to Lovable)
- SEO: per-route meta/OG/Twitter tags; site-wide defaults + font preconnects in root head;
  `public/robots.txt`

---

## 8. Notable gaps / things a helper should know

- Nearly all copy is placeholder and marked as such — real numbers/names/prices/testimonials
  still need to be supplied.
- Email delivery for resource requests is not implemented (stub returns `false`).
- Contact form and newsletter signup do not persist or send anything yet.
- TikTok and X social links are `#` placeholders.
- `routeTree.gen.ts` is generated — never edit by hand; it regenerates on dev/build.
- Keep `main` in a working state and never rewrite pushed history (Lovable sync).
- Two brand names coexist in the repo: `BRAND.name` is "HQ360"; the README/brief calls it
  "House of Synergy" and the email domain is `houseofsynergy.co`.
