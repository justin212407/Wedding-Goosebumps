"use client";

import React from "react";
import Image from "next/image";

export const ImageGallery: React.FC = () => {
  const MAIN_IMG =
    "/quintessential-section/Main%20image%20230202105837-MM_09599.jpg";

  const THUMBNAILS = [
    "/quintessential-section/Copy%20of%20230202105837-MM_09465%20(1).jpg",
    "/quintessential-section/Copy%20of%20230202105837-MM_09833.jpg",
    "/quintessential-section/Copy%20of%20230202105837-MM_09845.jpg"
  ];

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F8F5F0] text-charcoal">
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <div className="grid gap-18 lg:grid-cols-[600px_1fr] 2xl:grid-cols-[640px_1fr] items-start">
          
          {/* LEFT: big image */}
          <div className="relative h-[80vh] lg:h-[114vh] bg-[#efe9df]">
            <Image
              src={MAIN_IMG}
              alt="Quintessential Aesthetics of France"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT: 3 images row + text */}
          <div className="px-6 lg:px-0 pr-6">
            
            {/* Thumbnails row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 pr-6">
              {THUMBNAILS.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] bg-[#efe9df] p-2"
                >
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Text block */}
            <div className="max-w-[680px]">
              <p className="text-[0.75rem] md:text-sm font-lora tracking-[0.2em] uppercase text-charcoal/80 mb-2">
                WE DESIGN FROM THE SOUL OF YOUR STORY
              </p>
              <h2 className="font-playfair-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight text-charcoal mb-2 uppercase">
                THE COUTURE
              </h2>
              <h2 className="font-playfair-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight text-charcoal mb-2 uppercase">
                AESTHETICS <span className="italic lowercase">of</span>
              </h2>
              <h2 className="font-playfair-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight text-charcoal mb-6 uppercase">
                CELEBRATION
              </h2>
              <p className="font-lora text-sm md:text-base leading-relaxed text-charcoal/90 mb-6">
                Throughout our collaborative design journey, we dive deep into our couples’ stories — <em>their
                cultures, family legacies, and shared dreams.</em> These conversations become the heartbeat of
                our process. We use every detail to design weddings that are emotionally resonant, visually
                stunning, and uniquely yours.
              </p>
              <div className="pt-2">
                <p className="font-lora text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-charcoal">
                  HOW WE DO IT
                </p>
                <div className="w-12 h-px bg-charcoal/40 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
