/**
 * Click-tracking attributes for every clickable control on /forex.
 *
 *   id     → unique per element; GTM matches it with the built-in "Click ID" variable.
 *   label  → rendered as aria-label: the accessible name screen readers announce.
 *            GTM can read it with an "Auto-Event Variable → Element Attribute: aria-label".
 *
 * Rules
 *  - Naming: btn-{section}-{action}. Never reuse an id; GTM triggers match the exact string.
 *  - An aria-label REPLACES the visible text for screen readers, so it must start with
 *    the words shown on the button (WCAG 2.5.3 "Label in Name"), then add context.
 *
 * Usage in a component:
 *    <a {...track(tracking.hero.cta)} href="…">Mulai Trading Forex</a>
 */

export type TrackTarget = { id: string; label: string };

/** Spread onto an element: sets both `id` and `aria-label`. */
export function track(target: TrackTarget) {
  return { id: target.id, "aria-label": target.label } as const;
}

const OPEN_ACCOUNT = "buka akun demo MIFX";

export const tracking = {
  header: {
    login: { id: "btn-header-login", label: "Masuk ke Client Area MIFX" },
    openAccount: { id: "btn-header-open-account", label: `Buka Akun: ${OPEN_ACCOUNT}` },
  },
  hero: {
    cta: { id: "btn-hero-start-trading", label: `Mulai Trading Forex: ${OPEN_ACCOUNT}` },
  },
  spread: {
    cta: { id: "btn-spread-start-trading", label: `Mulai Trading Sekarang: ${OPEN_ACCOUNT}` },
    /** ⓘ explainers in the table header — column: spread | size | swap */
    info: (column: string, question: string): TrackTarget => ({
      id: `btn-spread-info-${column}`,
      label: question,
    }),
  },
  benefits: {
    cta: { id: "btn-benefits-start-trading", label: `Mulai Trading Forex: ${OPEN_ACCOUNT}` },
  },
  testimonials: {
    prev: { id: "btn-testimonial-prev", label: "Testimoni sebelumnya" },
    next: { id: "btn-testimonial-next", label: "Testimoni berikutnya" },
    /** Carousel dots, 1-based ids: btn-testimonial-dot-1 … -5 */
    dot: (index: number, name: string): TrackTarget => ({
      id: `btn-testimonial-dot-${index + 1}`,
      label: `Testimoni ${index + 1}: ${name}`,
    }),
  },
  finalCta: {
    cta: { id: "btn-final-start-trading", label: `Mulai Trading Forex: ${OPEN_ACCOUNT}` },
  },
  footer: {
    appStore: { id: "btn-footer-app-store", label: "Download aplikasi MIFX di App Store" },
    googlePlay: { id: "btn-footer-google-play", label: "Download aplikasi MIFX di Google Play" },
    /** network: instagram | youtube | tiktok | linkedin */
    social: (network: string, name: string): TrackTarget => ({
      id: `btn-footer-social-${network}`,
      label: `MIFX di ${name}`,
    }),
  },
} as const;
