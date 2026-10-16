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

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-TG7GVFT";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://get.mifx.com"),
  title: "MIFX",
  robots: { index: true, follow: true, "max-image-preview": "large" },
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
