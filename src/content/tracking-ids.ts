/**
 * Element IDs for click tracking (GTM "Click ID" / "Click Element" triggers).
 * Every clickable button on /forex gets one unique id from this file.
 *
 * Naming: btn-{section}-{action}. Change a value here and it updates everywhere;
 * tell the tracking team, since GTM triggers match on these exact strings.
 */
export const trackingIds = {
  header: {
    login: "btn-header-login",
    openAccount: "btn-header-open-account",
  },
  hero: {
    cta: "btn-hero-start-trading",
  },
  spread: {
    cta: "btn-spread-start-trading",
    /** ⓘ explainers in the table header: spread | size | swap */
    info: (column: string) => `btn-spread-info-${column}`,
  },
  benefits: {
    cta: "btn-benefits-start-trading",
  },
  testimonials: {
    prev: "btn-testimonial-prev",
    next: "btn-testimonial-next",
    /** Carousel dots, 1-based: btn-testimonial-dot-1 … -5 */
    dot: (index: number) => `btn-testimonial-dot-${index + 1}`,
  },
  finalCta: {
    cta: "btn-final-start-trading",
  },
  footer: {
    appStore: "btn-footer-app-store",
    googlePlay: "btn-footer-google-play",
    /** instagram | youtube | tiktok | linkedin */
    social: (network: string) => `btn-footer-social-${network}`,
  },
} as const;
