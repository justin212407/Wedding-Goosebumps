// next.config.ts
import type { NextConfig } from "next";
import path from "node:path";

const isVercel = process.env.VERCEL === "1";
const ASSET_HOST = process.env.NEXT_PUBLIC_ASSET_BASE!; // R2 CDN

const LOADER = path.resolve(
  __dirname,
  "src/visual-edits/component-tagger-loader.js"
);

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "img.weddinggoosebumps.com" },
    ],
  },

  async rewrites() {
    return [
      { source: "/logo/:path*",           destination: `${ASSET_HOST}/logo/:path*` },
      { source: "/about/:path*",          destination: `${ASSET_HOST}/about/:path*` },
      { source: "/about-page/:path*",     destination: `${ASSET_HOST}/about-page/:path*` },
      { source: "/galleries-page/:path*", destination: `${ASSET_HOST}/galleries-page/:path*` },
      { source: "/gallery/:path*",        destination: `${ASSET_HOST}/gallery/:path*` },
      { source: "/offerings-page/:path*", destination: `${ASSET_HOST}/offerings-page/:path*` },
      // add any other top-level folders you actually use
    ];
  },

  ...(isVercel ? {} : {
    turbopack: { rules: { "*.{jsx,tsx}": { loaders: [LOADER] } } },
  }),

  webpack: (config) => {
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
