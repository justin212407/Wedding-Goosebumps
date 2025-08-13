import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-ivory text-charcoal py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 xl:gap-24">
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="font-lora text-sm tracking-[0.2em] lowercase mb-4">
              about Wedding Goosebumps
            </p>
            <h3 className="font-playfair-display text-[2.5rem] leading-tight lowercase mb-6">
              luxury weddings and events
            </h3>
            <p className="font-lora text-xs tracking-[0.3em] uppercase mb-10">
              France & Destination&nbsp;&nbsp;&nbsp;Since 2015
            </p>
            <p className="font-lora text-base leading-relaxed max-w-md">
              Wedding Goosebumps is a <em className="font-style: italic">full service destination wedding planning and design agency</em> that specializes in creating elegant and exclusive weddings across France.
            </p>
          </div>
          
          <div className="w-full lg:w-6/12">
            <Image
              src="/about/Copy of DSC08348.jpg"
              alt="Wedding Goosebumps arranging a luxury wedding table setting"
              width={667}
              height={1000}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;