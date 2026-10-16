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
| `NEXT_PUBLIC_GTM_ID` | `GTM-TG7GVFT` | GTM container (set to empty string to disable, e.g. on staging) |
| `NEXT_PUBLIC_SITE_URL` | `https://get.mifx.com` | `metadataBase` for canonical / OG URLs |

## Project structure

```
src/
  app/
    layout.tsx            Inter font, GTM, base metadata, viewport
    globals.css           MIFX design tokens → Tailwind theme + shadcn variables
    forex/page.tsx        Page composition + page metadata (title, OG, Twitter)
  content/forex.ts        ALL copy, links, table rows, testimonials, footer legal text
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

- **Breakpoints** (match Framer): `tablet:` ≥ 810px, `desktop:` ≥ 1200px (mobile-first below 810).
- **Colors**: `brand-{50…900}` (primary `#00bf72`, accent text `#4ec785`), `navy-950 #01101c`, `navy-900 #011b2b`, `ink-{50…900}` neutrals, `star`.
- **shadcn mapping**: `--primary` = brand green, `--primary-foreground` = `#002e17`, `--secondary` = dark-green "Masuk" button, `--background` = navy.
- **Type scale**: `.heading-section` (28/35 → 48/52), `.heading-card` (20/28 → 24/32); hero 28 → 56 → 72px.
- Button sizes added to shadcn Button: `size="nav"` (40px) and `size="cta"` (48×264px).

## Migration notes (Framer → code)

- **Parity checked** with full-page screenshots at 1440 / 1000 / 390px against the live Framer page; page heights are within ~1%.
- **Interactions preserved**: ⓘ explainers (hover on desktop, tap on mobile), auto-playing testimonial carousel with dots and mobile arrows, infinite regulator ticker, floating badges, section appear animations.
- **Copy fix**: Framer's desktop "Keamanan" card said "BAPPEPTI"; corrected to **BAPPEBTI** (the mobile copy already had it right).
- **Footer**: added the LinkedIn icon (the Framer link existed but its icon-font glyph didn't render). Social icons are inline SVG instead of the private `monex-icon` font.
- **Language**: `<html lang="id">` (Framer shipped `lang="en"` for Indonesian content) + `translate="no"` / `google: notranslate` as before.
- Root `/` redirects (307) to `/forex`, since this domain hosts landing pages under paths. Remove the redirect in `next.config.ts` if `/` gets its own page.
- The regulator ticker uses individual logos (JFX, ICDX, KBI, ICH, Kemendag) cropped from Framer's sprite strip, matching what the live ticker shows.
- Accessibility: semantic sections with `aria-labelledby`, real `<table>` with header scopes, labelled icon buttons, carousel dots as a tablist, reduced-motion respected (ticker, floats, reveals off).

## Deploy

Static-friendly: any Node host (`npm run build && npm start`) or Vercel. Point `get.mifx.com/forex` at the new deployment once QA signs off; keep the Framer page live until then for side-by-side checks.
