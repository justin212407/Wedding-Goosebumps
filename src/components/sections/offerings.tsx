import React from "react";
import Link from "next/link";

const OfferingsSection = () => (
  <section className="bg-ivory text-charcoal py-13 sm:py-23">
    <div className="max-w-4xl mx-auto px-8"> {/* equal margins: px controls sides */}
      {/* small uppercase heading + underline */}
      <h2 className="font-commuter-sans text-[13px] uppercase tracking-[0.3em] text-charcoal/80">
        ABOUT WEDDING GOOSEBUMPS
      </h2>
      <div className="h-[2.5px] w-30 bg-[#D9D5CF]" />

      {/* body copy */}
      <p className="mt-6 font-lora text-[18px] md:text-[19px] leading-[1.9]">
        Wedding Goosebump is a premier wedding designing and planning studio
        based in India, specializing in crafting soul-stirring luxury
        destination weddings across Europe, the Middle East, and India. From
        the shores of Lake Como to the royal palaces of Rajasthan,&nbsp;
        <em className="italic">
          we turn once-in-a-lifetime moments into emotionally immersive
          celebrations.
        </em>{" "}
        We take the stress out of planning a wedding away from home. Our expert
        team bridges cultures, languages, and local nuances — handling
        everything from logistics to luxury detailing with precision and heart.
        Whether you dream of a cliffside vow in Santorini or a regal baraat in
        Jaipur, we’re here to turn your vision into goosebump-worthy reality.
      </p>

      {/* offerings link */}
      <Link href="/offerings" className="inline-block mt-2">
        <span className="font-commuter-sans text-[12px] uppercase tracking-[0.3em] text-gold border-b-[1.5px] border-gold pb-1">
          OUR OFFERINGS
        </span>
      </Link>
    </div>
  </section>
);

export default OfferingsSection;
