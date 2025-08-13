import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

export default function InquirePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Split screen layout */}
      <div className="min-h-screen flex">
        {/* Left side - Large romantic photo */}
        <div className="w-1/2 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-gray-300"
            style={{
              backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/719d37fe-897e-47a7-947a-3db0f4cae8a6/generated_images/luxurious-punjabi-bride-in-traditional-r-771e21b2-20250801201413.jpg')`
            }}
          />
        </div>

        {/* Right side - Contact content */}
        <div className="w-1/2 bg-[#F8F5F0] flex flex-col">
          {/* Header with Jennifer Fox branding */}
          <div className="text-center pt-16 pb-8">
            <h1 className="font-playfair-display text-2xl tracking-[0.3em] text-charcoal font-normal">
              JENNIFER FOX
            </h1>
          </div>

          {/* Main content area */}
          <div className="flex-1 px-16 py-12">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60 font-lora mb-4">
                GET IN TOUCH
              </p>
              <h2 className="font-playfair-display text-4xl text-charcoal leading-tight mb-6">
                WE'D LOVE TO<br />
                HEAR FROM YOU!
              </h2>
              <p className="text-charcoal/70 leading-relaxed font-lora mb-8">
                Please fill out our contact form or send us an email. In order to 
                provide our clients with the highest level of service, Jennifer Fox 
                Weddings accepts a limited number of events per year.
              </p>
            </div>

            {/* Email contact with decorative initial */}
            <div className="flex items-center mb-12">
              <div className="font-playfair-display text-5xl text-gold mr-4 leading-none">
                J
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60 font-lora">
                  HELLO@JENNIFERFOXWEDDINGS.COM
                </p>
              </div>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-3 gap-2">
              <div 
                className="aspect-square bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/719d37fe-897e-47a7-947a-3db0f4cae8a6-jenniferfoxweddings-com/assets/images/provence-wedding-shoes-photography-7.jpg')`
                }}
              />
              <div 
                className="aspect-square bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/719d37fe-897e-47a7-947a-3db0f4cae8a6-jenniferfoxweddings-com/assets/images/provence-wedding-planner-table-setting-design-jennifer-fox-weddings-2.jpg')`
                }}
              />
              <div 
                className="aspect-square bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/719d37fe-897e-47a7-947a-3db0f4cae8a6-jenniferfoxweddings-com/assets/images/provence-wedding-inspiration-outdoor-ceremony-seating-jennifer-fox-weddings-7.jpg')`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="bg-[#F8F5F0] px-6 sm:px-10 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair-display text-4xl sm:text-5xl text-charcoal tracking-wide mb-8">
              INQUIRY FORM
            </h2>
          </div>

          <form className="space-y-8">
            {/* Full Names */}
            <div>
              <input
                type="text"
                placeholder="Full Names of Couple Getting Married"
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors"
              />
            </div>

            {/* Role */}
            <div>
              <input
                type="text"
                placeholder="I am the (Bride, Groom, Parents, etc.)"
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number (Including Country Code)"
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors"
              />
            </div>

            {/* Date */}
            <div>
              <input
                type="text"
                placeholder="Ideal Date or Time of Year"
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors"
              />
            </div>

            {/* Guest Count */}
            <div>
              <input
                type="text"
                placeholder="Estimated Guest Count"
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors"
              />
            </div>

            {/* Venue */}
            <div>
              <input
                type="text"
                placeholder="Desired Venue or Location"
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors"
              />
            </div>

            {/* Budget */}
            <div>
              <input
                type="text"
                placeholder="Estimated Wedding Budget (in Euros)"
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors"
              />
            </div>

            {/* How did you hear */}
            <div>
              <input
                type="text"
                placeholder="How did you hear about us?"
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors"
              />
            </div>

            {/* Vision */}
            <div>
              <textarea
                placeholder="How do you envision your Wedding?"
                rows={4}
                className="w-full bg-transparent border-0 border-b border-charcoal/20 text-charcoal placeholder-charcoal/50 font-lora text-base py-4 px-0 focus:outline-none focus:border-charcoal/40 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-8">
              <button
                type="submit"
                className="bg-[#B5A484] hover:bg-[#A69373] transition-colors duration-300 text-white font-lora text-sm uppercase tracking-[0.2em] px-12 py-4"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Images and FAQ Section */}
      <div className="flex min-h-screen">
        {/* Left side - Two images stacked with padding from left margin */}
        <div className="w-1/2 flex flex-col pl-16">
          {/* Top image - Luxury Punjabi wedding ceremony */}
          <div className="h-1/2 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/719d37fe-897e-47a7-947a-3db0f4cae8a6/generated_images/elegant-punjabi-wedding-ceremony-scene-w-98218a3d-20250801201429.jpg')`
              }}
            />
          </div>
          
          {/* Bottom image - Château/venue */}
          <div className="h-1/2 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/719d37fe-897e-47a7-947a-3db0f4cae8a6-jenniferfoxweddings-com/assets/images/provence-wedding-inspiration-outdoor-ceremony-seating-jennifer-fox-weddings-7.jpg')`
              }}
            />
          </div>
        </div>

        {/* Right side - FAQ content - properly centered */}
        <div className="w-1/2 bg-[#F8F5F0] flex flex-col justify-center px-16">
          {/* FAQ number indicator - centered */}
          <div className="text-center mb-12">
            <div className="font-playfair-display text-lg tracking-[0.3em] text-charcoal/60">
              02
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-charcoal/60 font-lora mt-2">
              of 06
            </div>
          </div>

          {/* Main FAQ content - properly centered and contained */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-12">
              <h3 className="font-playfair-display text-3xl text-charcoal leading-snug mb-8">
                Q &nbsp;&nbsp;HOW MUCH DOES IT COST TO<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HAVE A WEDDING IN FRANCE?
              </h3>
              
              <div>
                <span className="font-playfair-display text-3xl text-charcoal">A</span>
                <p className="text-charcoal/70 leading-relaxed font-lora mt-6 max-w-xl mx-auto">
                  This very much depends on what region you choose to marry. For 
                  example, Provence, the French Riviera and Paris are the most 
                  exclusive wedding regions in France and thus start at a higher 
                  price point than say Burgundy or Normandy. Depending on the 
                  size of your wedding, Jennifer Fox Weddings works with wedding 
                  budgets that start at 2,000 Euros per person.
                </p>
              </div>

              <div className="mt-12">
                <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60 font-lora">
                  NEXT QUESTION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="sticky top-0 h-screen">
          <div className="relative w-full h-full">
            {/* Video Container */}
            <div className="absolute inset-0">
              <iframe 
                className="absolute inset-0 w-full h-full object-cover"
                src="https://www.dailymotion.com/embed/video/x8iwzz4?autoplay=1&mute=1&quality=1080"
                title="Jennifer Fox Weddings Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-8">
                <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4">
                  TIMELESS ELEGANCE
                </h2>
                <p className="font-lora text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                  Where luxury meets tradition in the most beautiful celebration of love
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll overlay - this allows scrolling over the video */}
        <div className="absolute inset-0 z-10" />
      </section>

      <Footer />
    </main>
  );
}