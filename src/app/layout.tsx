import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

// Framer used Inter (400/500/600/700); next/font self-hosts it — no Google request at runtime.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * "Live" switch. On Vercel, every deployment is treated as a test (no GTM,
 * noindex) until NEXT_PUBLIC_SITE_LIVE=true is set for the production
 * environment — so test URLs never pollute analytics or search results.
 * Other hosts default to live, as before.
 */
const isLive = process.env.VERCEL ? process.env.NEXT_PUBLIC_SITE_LIVE === "true" : true;
/**
 * GTM also loads when NEXT_PUBLIC_GTM_ENABLED=true — use it on a Vercel test
 * deployment to check click tracking in GTM Preview while the page stays noindex.
 */
const gtmEnabled = isLive || process.env.NEXT_PUBLIC_GTM_ENABLED === "true";
const GTM_ID = gtmEnabled ? (process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-TG7GVFT") : "";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://get.mifx.com"),
  title: "MIFX",
  robots: isLive
    ? { index: true, follow: true, "max-image-preview": "large" }
    : { index: false, follow: false },
  other: { google: "notranslate" },
};

export const viewport: Viewport = {
  themeColor: "#01101c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" translate="no" className={`${inter.variable} antialiased`}>
      {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
