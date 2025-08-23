"use client";

import Image from "next/image";
import Link from "next/link";

const ServiceLevelSection = () => {
  return (
    <section className="bg-ivory text-charcoal py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-1 items-center">

          {/* TEXT SIDE */}
          <div className="lg:col-span-2 flex flex-col items-end text-right">
            <h2 className="font-playfair-display text-6xl md:text-7xl lg:text-[50px] uppercase leading-none">
              MEET THE HEART BEHIND{" "}
              <span className="italic lowercase font-light align-baseline">
                the
              </span>{" "}
              GOOSEBUMPS
            </h2>

            <div className="w-24 h-px bg-charcoal/20 my-6" />

            <p className="font-lora text-base leading-loose max-w-md mb-10">
            "Ali has this rare gift he sees what matters most. He doesn’t just
              build events, he builds emotion into every corner, every moment. You
              don’t just remember the wedding… you remember how it made you feel."
              With{" "}
              <em className="italic">
                over 15 years of experience and 150+ weddings brought to life,
              </em>{" "}
              Ali Waris Khan is the creative force behind Wedding Goosebumps.
              Known for his emotionally driven approach, Ali turns visions into
              immersive experiences. His deep cultural intuition, trend-forward
              eye, and heart-first planning style make him more than a wedding
              designer — he’s a storyteller in celebration form.
            </p>

            <Link href="/about">
              <span className="font-lora text-xs uppercase tracking-[0.2em] border-b-2 border-charcoal pb-1 inline-block">
                THE SOUL OF WEDDING GOOSEBUMPS
              </span>
            </Link>
          </div>

          {/* IMAGE SIDE — full image visible, centered */}
          <div className="lg:col-span-3 w-full flex justify-center py-2">
            <Image
              src="/service-level-section/Copy%20of%20MM_09664.jpg"
              alt="Ali and couple on stairs"
              width={1100}
              height={1700}
              className="w-full max-w-lg h-auto object-contain"
              sizes="(max-width: 1032px) 110vw, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLevelSection;
