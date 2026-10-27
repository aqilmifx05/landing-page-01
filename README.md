# MIFX — Forex landing (migrated from Framer)

Hand-coded rebuild of **https://get.mifx.com/forex** (previously published from Framer).

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack, Cache Components) · React 19 · TypeScript |
| Styling | Tailwind CSS v4 · shadcn/ui (`radix-nova` style, **Radix** primitives) |
| UI primitives | Button, Table, Popover (Radix), Carousel (Embla + autoplay) |
| Fonts / images | Inter via `next/font` (self-hosted) · `next/image` with static imports (AVIF/WebP) |
| Analytics | Google Tag Manager via `@next/third-parties` (`GTM-TG7GVFT`) |
| Output | `/forex` is fully static (prerendered at build) |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /forex
npm run build && npm start
npm run lint
```

Requires Node.js ≥ 20.9.

### Environment (optional)

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_LIVE` | unset | **Vercel only.** Until set to `true`, Vercel deployments are test builds: GTM off + `noindex`. Set it on the Production environment at go-live. |
| `NEXT_PUBLIC_GTM_ENABLED` | unset | Set `true` to load GTM on a Vercel test deployment (for GTM Preview) while the page stays `noindex`. |
| `NEXT_PUBLIC_GTM_ID` | `GTM-TG7GVFT` | GTM container used when the site is live |
| `NEXT_PUBLIC_SITE_URL` | `https://get.mifx.com` | `metadataBase` for canonical / OG URLs |

Non-Vercel hosts are treated as live by default. `NEXT_PUBLIC_*` values are baked in at build time — redeploy after changing them.

## Test on Vercel

**Option A — CLI (fastest, no Git needed)**

```bash
cd mifx-forex
npx vercel          # log in, accept defaults → gives a preview URL
npx vercel --prod   # optional: a stable *.vercel.app URL
```

**Option B — GitHub import (auto-deploys on every push)**

1. Push this folder to a GitHub repo (it's already a git repo with one commit).
2. vercel.com/new → Import the repo → framework auto-detected as Next.js → Deploy.

Either way, open `<your-url>/forex` (the root `/` redirects there). Test deployments are
`noindex` and don't load GTM until `NEXT_PUBLIC_SITE_LIVE=true` (or `NEXT_PUBLIC_GTM_ENABLED=true` for tracking tests) is set.

## Project structure

```
src/
  app/
    layout.tsx            Inter font, GTM, base metadata, viewport
    globals.css           MIFX design tokens → Tailwind theme + shadcn variables
    forex/page.tsx        Page composition + page metadata (title, OG, Twitter)
  content/forex.ts        ALL copy, links, table rows, testimonials, footer legal text
  content/tracking-ids.ts id + aria-label for every tracked button (GTM)
  components/
    landing/              One component per page section
      site-header.tsx       fixed header (transparent → tinted on scroll)
      hero.tsx              title, phone + floating badges, regulator ticker
      regulator-marquee.tsx CSS-only infinite logo ticker
      trading-tools.tsx     Trading Signal / Sentiment / News cards
      spread-table.tsx      shadcn Table + ⓘ explainers (InfoHint)
      info-hint.tsx         Radix Popover: hover (mouse) / tap (touch) / keyboard
      platform-benefits.tsx phone-in-hand composition, benefit cards, stats
      testimonials.tsx      shadcn Carousel (Embla) w/ autoplay, dots, mobile arrows
      final-cta.tsx         closing CTA with floating product tiles
      site-footer.tsx       links, legal registrations, certifications, app badges
      reveal-observer.tsx   one-shot "appear" animation (replaces Framer effects)
      section-heading.tsx, cta-button.tsx, social-icons.tsx
    ui/                   shadcn/ui components (button, table, popover, carousel)
  assets/images/          raster images (statically imported → automatic width/height, no layout shift)
public/
  images/                 SVGs (logo, store badges, store icons, carousel arrows)
  og-image.png
```

**Editing copy?** Change `src/content/forex.ts` only — components contain no hard-coded text.

## Design tokens

Extracted from the Framer project and defined in `src/app/globals.css`:

- **Breakpoints** (match Framer's four): mobile < 810, `tablet:` ≥ 810px, `desktop:` ≥ 1200px, `wide:` ≥ 1600px (taller hero, larger phone, narrower testimonial cards).
- **Colors**: `brand-{50…900}` (primary `#00bf72`, accent text `#4ec785`), `navy-950 #01101c`, `navy-900 #011b2b`, `ink-{50…900}` neutrals, `star`.
- **shadcn mapping**: `--primary` = brand green, `--primary-foreground` = `#002e17`, `--secondary` = dark-green "Masuk" button, `--background` = navy.
- **Type scale** (mobile → tablet → desktop, measured in Framer): `.t-hero` 28/35 → 56/63.84 → 72/88.2 · `.t-h2` 28/35 → 32/40 → 48/51.84 · `.t-card` 20/28 → 20/28 → 24/31.92 · `.t-body` 14/19.6 → 16/22.4 → 16/24 · `.t-small` 12/15.6 → 12/15.6 → 14/19.6 · `.t-ui` 14/19.6 → 14/19.6 → 16/24 · `.t-fine` 14/19.6.
- Button sizes added to shadcn Button: `size="nav"` (40px) and `size="cta"` (48×264px).

## Migration notes (Framer → code)

- **Parity checked** element-by-element (positions, sizes, type) at 390 / 810 / 1000 / 1199 / 1440 / 1600 / 1920px against the live Framer page; page heights within 8px on mobile/desktop/wide.
- **Hero background** reproduces Framer exactly: per-breakpoint size/position of the light streaks and radial glow, plus the half-speed scroll parallax (CSS scroll-driven animation, no JS).
- **Tablet**: Framer's tablet hero is 900px tall and clips its own CTA and the regulator row; here it is 1080px so both stay visible (everything below shifts down 180px, otherwise identical).
- **Interactions preserved**: ⓘ explainers (hover on desktop, tap on mobile), auto-playing testimonial carousel with dots and mobile arrows, infinite regulator ticker, floating badges, section appear animations.
- **Copy fix**: Framer's desktop "Keamanan" card said "BAPPEPTI"; corrected to **BAPPEBTI** (the mobile copy already had it right).
- **Footer**: added the LinkedIn icon (the Framer link existed but its icon-font glyph didn't render). Social icons are inline SVG instead of the private `monex-icon` font.
- **Language**: `<html lang="id">` (Framer shipped `lang="en"` for Indonesian content) + `translate="no"` / `google: notranslate` as before.
- Root `/` redirects (307) to `/forex`, since this domain hosts landing pages under paths. Remove the redirect in `next.config.ts` if `/` gets its own page.
- The regulator ticker uses individual logos (JFX, ICDX, KBI, ICH, Kemendag) cropped from Framer's sprite strip, matching what the live ticker shows.
- Accessibility: semantic sections with `aria-labelledby`, real `<table>` with header scopes, labelled icon buttons, carousel dots as a tablist, reduced-motion respected (ticker, floats, reveals off).

## Click tracking (GTM)

Every tracked control gets a unique `id` and an `aria-label` from **`src/content/tracking-ids.ts`**:

```tsx
import { track, tracking } from "@/content/tracking-ids";

<a {...track(tracking.hero.cta)} href="…">Mulai Trading Forex</a>
// renders: <a id="btn-hero-start-trading" aria-label="Mulai Trading Forex: buka akun demo MIFX" …>
```

- New button → add an entry `{ id, label }` to `tracking`, then spread `track(...)` on the element.
- Navigation CTAs are `<a href>` (they go to another page); on-page actions (ⓘ hints, carousel arrows/dots) are `<button>`.
- GTM: enable built-in variables *Click ID*, *Click URL*, *Click Text*; use a **Click – Just Links** trigger for the `<a>` CTAs and **Click – All Elements** for the `<button>`s, filtered on `Click ID` (e.g. matches RegEx `^btn-`). Read the aria-label with an *Auto-Event Variable → Element Attribute → aria-label*.

## Deploy

Static-friendly: any Node host (`npm run build && npm start`) or Vercel. Point `get.mifx.com/forex` at the new deployment once QA signs off; keep the Framer page live until then for side-by-side checks.
