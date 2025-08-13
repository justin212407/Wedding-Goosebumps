"use client";

import Image from "next/image";
import Link from "next/link";

const ServiceLevelSection = () => {
  return (
    <section className="bg-ivory text-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-center">
          
          {/* TEXT SIDE */}
          <div className="lg:col-span-2 flex flex-col text-left max-lg:items-center max-lg:text-center">
            <h2 className="font-playfair-display text-6xl md:text-7xl lg:text-[60px] uppercase leading-none">
              MEET THE
              <br />
              HEART BEHIND{" "}
              <span className="italic lowercase font-light align-baseline">
                the
              </span>{" "}
              GOOSEBUMPS
            </h2>

            <div className="w-24 h-px bg-charcoal/20 my-10 max-lg:mx-auto" />

            <h3 className="font-lora text-xs tracking-[0.2em] uppercase mb-8 max-w-[350px]">
              "Ali has this rare gift — he sees what matters most. He doesn’t just
              build events, he builds emotion into every corner, every moment. You
              don’t just remember the wedding… you remember how it made you feel."
            </h3>

            <p className="font-lora text-base leading-loose max-w-md mb-10">
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

            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/719d37fe-897e-47a7-947a-3db0f4cae8a6-jenniferfoxweddings-com/assets/images/jennifer_fox_weddings_english_speaking_wedding_planning_and_design_agency_in_france_crafting_refined_and_bespoke_weddings_and_celebrations_provence_paris_and_destination_logo-6-12.svg"
              alt="Ali Waris Khan Monogram"
              width={56}
              height={67}
              className="opacity-70 mb-10"
            />

            <Link href="/about">
              <span className="font-lora text-xs uppercase tracking-[0.2em] border-b-2 border-charcoal pb-1 inline-block">
                THE SOUL OF WEDDING GOOSEBUMPS
              </span>
            </Link>
          </div>

          {/* IMAGE SIDE — full image visible, centered */}
          <div className="lg:col-span-3 w-full flex justify-center">
            <Image
              src="/service-level-section/Copy%20of%20MM_09664.jpg"
              alt="Ali and couple on stairs"
              width={800}
              height={1200}
              className="w-full max-w-md h-auto object-contain rounded-lg"
              sizes="(max-width: 1023px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLevelSection;
