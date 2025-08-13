import Image from 'next/image';
import Link from 'next/link';

const fonscolombeWeddingImg = "/journal-section/Copy of DEV00489.jpg";;
const grandControleWeddingImg = "/journal-section/Copy of DSC04431.jpg";

const JournalSection = () => {
  return (
    <section className="bg-ivory text-charcoal py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="text-center mb-20 md:mb-24">
          <p className="font-lora text-sm text-charcoal/80 tracking-[0.3em] uppercase mb-4">
            in the journal
          </p>
          <h2 className="font-playfair-display italic text-5xl md:text-6xl text-charcoal">
            see our latest work
          </h2>
        </div>

        <div className="space-y-20 md:space-y-24">
          {/* Entry 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-24 gap-y-10 items-center">
            <Link href="https://jenniferfoxweddings.com/2025/06/27/wedding-at-chateau-de-fonscolombe/">
              <Image
                src={fonscolombeWeddingImg}
                alt="Wedding ceremony at Château de Fonscolombe"
                width={530}
                height={707}
                className="w-full h-auto object-cover"
              />
            </Link>
            <div className="flex flex-col items-start">
              <p className="font-lora text-[11px] text-charcoal/80 uppercase tracking-[0.2em] mb-4">
                Featured
              </p>
              <h3 className="font-playfair-display text-h3 leading-tight mb-8 text-left">
                <Link href="https://jenniferfoxweddings.com/2025/06/27/wedding-at-chateau-de-fonscolombe/" className="text-charcoal hover:text-gold transition-colors duration-300">
                  Wedding at Château de Fonscolombe
                </Link>
              </h3>
              <hr className="w-16 border-t border-charcoal/20 mb-8" />
              <p className="font-lora text-base leading-relaxed text-charcoal/90 mb-8 text-left">
                J+R celebrated their wedding at Château de Fonscolombe, an elegant 18th-century Provençal estate near Aix-en-Provence. Feast your eyes on a few highlights of their exclusive wedding day celebration...
              </p>
              <Link href="https://jenniferfoxweddings.com/2025/06/27/wedding-at-chateau-de-fonscolombe/" className="font-lora text-[11px] uppercase tracking-[0.2em] border-b border-charcoal/40 pb-1 self-start hover:border-gold hover:text-gold transition-colors duration-300">
                Read Entry
              </Link>
            </div>
          </div>

          {/* Entry 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-24 gap-y-10 items-center">
             <Link href="https://jenniferfoxweddings.com/2024/06/18/wedding-at-le-grand-controle/" className="lg:order-last">
              <Image
                src={grandControleWeddingImg}
                alt="Wedding dinner at Le Grand Contrôle"
                width={530}
                height={707}
                className="w-full h-auto object-cover"
              />
            </Link>
            <div className="flex flex-col items-start lg:order-first">
              <p className="font-lora text-[11px] text-charcoal/80 uppercase tracking-[0.2em] mb-4">
                featured entry
              </p>
              <h3 className="font-playfair-display text-h3 leading-tight mb-8 text-left">
                <Link href="https://jenniferfoxweddings.com/2024/06/18/wedding-at-le-grand-controle/" className="text-charcoal hover:text-gold transition-colors duration-300">
                  Wedding at Le Grand Contrôle
                </Link>
              </h3>
              <hr className="w-16 border-t border-charcoal/20 mb-8" />
              <p className="font-lora text-base leading-relaxed text-charcoal/90 mb-8 text-left">
                A luxury wedding at Hotel Le Grand Contrôle in Versailles promises an experience of unparalleled elegance and historical grandeur. Nestled within the grounds of the iconic Palace of Versailles, this...
              </p>
              <Link href="https://jenniferfoxweddings.com/2024/06/18/wedding-at-le-grand-controle/" className="font-lora text-[11px] uppercase tracking-[0.2em] border-b border-charcoal/40 pb-1 self-start hover:border-gold hover:text-gold transition-colors duration-300">
                Read Entry
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20 md:mt-24">
          <Link href="https://jenniferfoxweddings.com/blog" className="font-lora text-xs uppercase tracking-[0.2em] text-charcoal border-b border-charcoal/40 pb-1 hover:text-gold hover:border-gold transition-colors duration-300">
            Read All Journal Entries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
