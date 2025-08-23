"use client";

import Image from "next/image";

export default function KindWords() {
  return (
    <section className="bg-ivory text-charcoal py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-none px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-start gap-y-12 lg:gap-x-20">

          {/* LEFT — small portrait at extreme left */}
          <div className="order-2 lg:order-1 flex justify-start lg:mt-80 pl-0">
            <div className="relative w-[280px] sm:w-[320px] md:w-[300px] aspect-[3/4]">
              <Image
                src="/kind-words-section/Copy%20of%20DSC02686.jpg"
                alt="Champagne tower"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* CENTER — quote block, stretched */}
          <div className="order-1 lg:order-2 relative text-center px-6 lg:px-0 mt-40">

            {/* vertical label with hairline */}
            <div
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-3"
              aria-hidden="true"
            >
            </div>

{/* giant serif quote */}
<h2 className="font-playfair-display text-6xl md:text-7xl lg:text-[50px] uppercase leading-none text-right">
  The Highest level{" "}
  <span className="italic lowercase font-light align-baseline">
    of
  </span>{" "}
  service
</h2>

<h3 className="font-lora text-xs tracking-[0.2em] uppercase mb-8 max-w-[350px] ml-auto leading-none text-right">
              Attention to detail and exceptional, personalized attentiveness
            </h3>

{/* body copy */}
<p className="mt-6 max-w-[800px] font-lora text-[16.5px] leading-[1.9] text-charcoal/85 text-right ml-auto">
  We take on a limited number of weddings each year, ensuring every celebration
  receives the time, creativity, and emotional investment it deserves.{" "}
  <i>
    Our bespoke planning and design services are tailored for an exclusive
    clientele seeking a deeply personal, couture wedding experience.
  </i>{" "}
  From intimate elopements for two to grand celebrations with n number of guests,
  we bring the same level of artistry, precision, and heart to every event we curate.
</p>


            {/* thin divider */}
            <div className="mx-auto mt-6 h-[2px] w-[120px] bg-charcoal/15" />

          </div>

          {/* RIGHT — big hero portrait at extreme right */}
          <div className="order-3 flex justify-end pr-0">
            <div className="relative w-[360px] sm:w-[480px] md:w-[360px] lg:w-[540px] aspect-[3/4]">
              <Image
                src="/kind-words-section/main%20image%20DSC03052.jpg"
                alt="Groom kissing bride’s forehead"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
