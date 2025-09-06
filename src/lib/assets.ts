// src/lib/assets.ts
const ASSET_BASE = "https://img.weddinggoosebumps.com";

// encodes each segment so spaces, #, ?, etc. are safe
export function r2(path: string) {
  const parts = path.replace(/^\/+/, "").split("/").map(encodeURIComponent);
  return `${ASSET_BASE}/${parts.join("/")}`;
}
