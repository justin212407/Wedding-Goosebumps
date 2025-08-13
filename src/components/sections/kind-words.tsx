"use client";

import Image from "next/image";
export default function KindWords() {
  return (
    <section className="bg-ivory text-charcoal py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-y-10 lg:gap-x-8">
          
          {/* ← Left: single small portrait, dropped way down */}
          <div className="lg:col-span-3 flex justify-start lg:mt-64">
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4]">
              <Image
                src="/kind-words-section/Copy%20of%20DSC02686.jpg"
                alt="Ceremony setup in a garden"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* — Centre: quote in 4 cols */}
          <div className="lg:col-span-4 mx-auto text-center relative px-4 sm:px-8 lg:px-0">
            <p
              aria-hidden="true"
              className="
                absolute top-1/2 -translate-y-1/2 right-0
                transform rotate-180 font-lora text-[10px] text-charcoal/50
                uppercase tracking-[0.3em]
              "
              style={{ writingMode: "vertical-rl" }}
            >
              kind words
            </p>
            <div className="max-w-md mx-auto">
              <h3 className="epicene-display-light text-3xl sm:text-4xl md:text-[2.625rem] leading-[1.2]">
                "Trust the process, Jenn knows what she is doing."
              </h3>
              <p className="font-lora text-base leading-relaxed mt-8 mb-4">
                Everything was flawless, and we actually got to enjoy our day and
                every moment was so incredibly special. I can’t thank her enough
                for the memories my family has because of her attention to detail
                and willingness to throw her all into it.
              </p>
              <p className="font-lora text-xs tracking-[0.2em] uppercase">
                Natalie & Ryan
              </p>
            </div>
          </div>

          {/* — Right: big hero portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[360px] sm:w-[440px] md:w-[520px] lg:w-[600px] aspect-[4/5]">
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
