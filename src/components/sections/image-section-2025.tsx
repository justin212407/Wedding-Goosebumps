"use client";

import React from 'react';

interface ImageGalleryProps {}

export const ImageGallery: React.FC<ImageGalleryProps> = () => {
  const MAIN_IMG =
    "/quintessential-section/Main%20image%20230202105837-MM_09599.jpg";

  const THUMBNAILS = [
    "/quintessential-section/Copy%20of%20230202105837-MM_09465%20(1).jpg",
    "/quintessential-section/Copy%20of%20230202105837-MM_09833.jpg",
    "/quintessential-section/Copy%20of%20230202105837-MM_09845.jpg",
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-[#F8F5F0]">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* ← Big image, completely flush to the page edge */}
        <div className="w-full lg:w-1/3">
          <img
            src={MAIN_IMG}
            alt="Quintessential Aesthetics of France"
            className="
              w-full
              h-[400px] md:h-[600px] lg:h-[800px]
              object-cover
            "
          />
        </div>

        {/* → Everything else inside your normal centered container */}
        <div className="w-full lg:w-2/3">
          <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-6">
            
            {/* — Thumbnails row */}
            <div className="flex gap-4">
  {THUMBNAILS.map((src, i) => (
    <img
      key={i}
      src={src}
      alt={`Thumbnail ${i + 1}`}
      className="
        flex-none               /* prevent flex-grow */
        w-[90px]                /* mobile width */
        md:w-[110px]            /* tablet width */
        lg:w-[130px]            /* desktop width */
        h-[175px]               /* mobile height */
        md:h-[225px]            /* tablet height */
        lg:h-[275px]            /* desktop height */
        object-cover
      "
    />
  ))}
</div>


            {/* — Text block */}
            <div className="max-w-xl">
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
              
              <p className="font-lora text-sm md:text-base leading-relaxed text-charcoal/90 mb-4">
              Throughout our collaborative design journey, we dive deep into our couples’ stories — <em>their
              cultures, family legacies, and shared dreams.</em>These conversations become the heartbeat of
our process. We use every detail to design weddings that are emotionally resonant, visually
stunning, and uniquely yours.
              </p>
              
              <div className="pt-6">
                <p className="font-lora text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-charcoal">
                  HOW WE DO IT
                </p>
                <div className="w-12 h-px bg-charcoal/40 mt-2"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
