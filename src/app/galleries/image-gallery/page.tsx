import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

/** 
 * Map each gallery slug to a list of images (with their natural width/height).
 * Add as many as you like; mixed sizes are fine.
 * Tip: keep these in /public and replace w/h with the real dimensions to avoid layout shift.
 */
const GALLERIES: Record<
  string,
  { src: string; width: number; height: number }[]
> = {
  "destination-languedoc": [
    { src: "", width: 2667, height: 4000 },
    { src: "/galleries/destination/02.jpg", width: 4000, height: 2667 },
    { src: "/galleries/destination/03.jpg", width: 3000, height: 2000 },
    { src: "/galleries/destination/04.jpg", width: 2000, height: 3000 },
    { src: "/galleries/destination/05.jpg", width: 3500, height: 2333 },
    // …add more (any mix of orientations/sizes)
  ],
  "elopement-greece": [
    { src: "/galleries/elopement/01.jpg", width: 3000, height: 2000 },
    { src: "/galleries/elopement/02.jpg", width: 2133, height: 3200 },
    { src: "/galleries/elopement/03.jpg", width: 4000, height: 2667 },
    // …
  ],
};

export default function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // In app router, params is a Promise in RSC
  // (works in Next 14+ with the "params as promise" option enabled)
  // If your project uses plain params, just remove the await.
  const slug = (React as any).use(params)?.slug ?? ""; // fallback if using edge
  // If the above feels awkward, switch to:
  // const { slug } = await params;

  const images = GALLERIES[slug];
  if (!images) return notFound();

  return (
    <main className="bg-ivory">
      {/* Masonry via CSS columns. No text, just images. */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {images.map(({ src, width, height }, i) => (
            <div key={i} className="mb-6 break-inside-avoid">
              <Image
                src={src}
                alt=""
                width={width}
                height={height}
                // Prevent cropping:
                className="w-full h-auto object-contain rounded"
                // Optional: better decoding for large sets
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
