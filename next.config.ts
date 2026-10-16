import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Serve AVIF first, then WebP (Framer only served WebP)
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // The Framer site's landing lives at /forex; send the bare domain there.
    return [{ source: "/", destination: "/forex", permanent: false }];
  },
};

export default nextConfig;
