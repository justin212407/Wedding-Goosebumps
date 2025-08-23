import Image from 'next/image';
import Link from 'next/link';

const fonscolombeWeddingImg = "/journal-section/Copy of DEV00489.jpg";

const JournalSection = () => {
  return (
    <section className="bg-ivory text-charcoal py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-[1100px]">
        
        {/* — Section Intro */}
        <div className="text-center mb-20 md:mb-24">
          <p className="font-lora text-sm text-charcoal/80 tracking-[0.3em] uppercase mb-2">
            DISCOVER OUR PHILOSOPHY
          </p>
          <h2 className="font-playfair-display text-[42px] md:text-[48px] lg:text-[52px] tracking-tight">
            Where Emotion Becomes Experience, Every Detail Tells a Story!
          </h2>
          <div className="w-10 h-[1px] bg-charcoal/20 mx-auto my-4" />
          <p className="font-lora text-[15px] max-w-2xl mx-auto">
            Each celebration is a soulful canvas — <i>rich with meaning, memory, and magic.</i>
          </p>
        </div>

        {/* — Content Block: Image Left / Philosophy Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 xl:gap-x-24 items-start">
          
          {/* Left: Large Vertical Image (keep same visual balance) */}
          <div className="lg:col-span-6">
            <Image
              src="/journal-section/main.jpg"
              alt="Elegant celebration setting"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Right: Philosophy copy (word-for-word) */}
          <div className="lg:col-span-6 flex flex-col items-start mt-26">
            <p className="font-lora text-[11px] uppercase tracking-[0.2em] text-charcoal/80 mb-3">
              THE ART OF GOOSEBUMPS
            </p>

            <h3 className="font-playfair-display text-[22px] md:text-[24px] leading-snug mb-4">
              Why we do what we do.
            </h3>

            <div className="w-12 h-[1px] bg-charcoal/20 mb-6" />

            <p className="font-lora text-[16px] leading-relaxed text-charcoal/90 mb-6">
              We aren’t driven by checklists.
            </p>

            <p className="font-lora text-[15px] leading-relaxed text-charcoal/85 mb-6">
              We’re moved by a feeling — the one that stills the room, quickens the heart, and stays long after
              the music fades. That’s what we call a goosebump moment — and it’s what we aim to create every
              single time.
            </p>

            <p className="font-lora text-[15px] leading-relaxed text-charcoal/85">
              Every wedding we craft is a response to a story, a legacy, a longing. We don’t follow a formula;
              we follow emotion — designing atmospheres that feel lived in, loved in, and remembered.
              Because when done right, beauty doesn’t just impress. It resonates.
            </p>
          </div>
        </div>

        {/* — Optional footer link kept for navigation continuity */}
        <div className="text-center mt-20 md:mt-24">
          
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
