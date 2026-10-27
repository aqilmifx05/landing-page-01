import type { Metadata } from "next";

import { FinalCta } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { PlatformBenefits } from "@/components/landing/platform-benefits";
import { RevealObserver } from "@/components/landing/reveal-observer";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { SpreadTable } from "@/components/landing/spread-table";
import { Testimonials } from "@/components/landing/testimonials";
import { TradingTools } from "@/components/landing/trading-tools";

const title = "MIFX Platform Trading Forex Legal, Cepat & Aman";
const description =
  "Mulai trading forex di MIFX, platform legal, aman, dan dipercaya ribuan trader Indonesia";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/forex" },
  openGraph: {
    title,
    description,
    url: "/forex",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function ForexPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TradingTools />
        <SpreadTable />
        <PlatformBenefits />
        <Testimonials />
        <FinalCta />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
