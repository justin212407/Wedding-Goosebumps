// src/components/sections/hero-video.tsx
"use client";

import Image from "next/image";

const LOGO_URL = "/logo/logo.svg";
const TEXT_LOGO_URL = "/logo/text-logo.svg";
const HERO_VIDEO_URL = "/videos/hero.mp4";

export default function HeroVideo() {
  return (
    <header className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* video: no negative z-index */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-auto h-auto min-w-full min-h-full translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 object-cover z-0"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* overlay: above video */}
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* content: above both */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center p-4">
  <Image
    src={TEXT_LOGO_URL}
    alt="WEDDING GOOSBUMPS"
    width={1000}
    height={250}
    className="h-auto w-full max-w-[1000px] md:w-4/5 lg:w-3/4 -ml-2 invert brightness-0 "
    priority
  />
</div>

    </header>
  );
}
