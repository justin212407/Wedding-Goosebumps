// next.config.ts
import type { NextConfig } from "next";
import path from "node:path";

const isVercel = process.env.VERCEL === "1";
const BLOB_HOST = process.env.NEXT_PUBLIC_BLOB_HOST; // 👈 add this

const LOADER = path.resolve(
  __dirname,
  "src/visual-edits/component-tagger-loader.js"
);

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  images: {
    // unoptimized: true, // (optional bailout)
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Allow Blob host explicitly (recommended)
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      // Keep your broad allowance if you prefer
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // 👇 add rewrites so /public/* paths proxy to Blob
  async rewrites() {
    return [
      { source: "/logo/:path*",           destination: `${BLOB_HOST}/logo/:path*` },
      { source: "/about/:path*",          destination: `${BLOB_HOST}/about/:path*` },
      { source: "/about-page/:path*",     destination: `${BLOB_HOST}/about-page/:path*` },
      { source: "/galleries-page/:path*", destination: `${BLOB_HOST}/galleries-page/:path*` },
      { source: "/gallery/:path*",        destination: `${BLOB_HOST}/gallery/:path*` },
      // add other top-level public folders later if you start using them
    ];
  },

  ...(isVercel
    ? {}
    : {
        turbopack: {
          rules: {
            "*.{jsx,tsx}": { loaders: [LOADER] },
          },
        },
      }),

  webpack: (config) => {
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
