// components/VideoFullBleed.tsx
"use client";

import React from "react";

export default function VideoFullBleed() {
  return (
    // 1) w-screen makes it stretch full viewport width
    // 2) h-screen makes it full viewport height (remove if you want auto height)
    // 3) overflow-hidden clips any slight scaling artifacts
    <section className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/scroll-video-1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      
    </section>
  );
}
