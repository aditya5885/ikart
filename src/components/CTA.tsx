import FadeIn from "./FadeIn";

const CTA = () => {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call-to-action Card */}
        <FadeIn direction="up">
          <div className="relative bg-[#0B1528] rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Ambient Glows */}
            <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[200%] bg-blue-600 rounded-full blur-[140px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[60%] h-[200%] bg-cyan-500 rounded-full blur-[140px] opacity-15 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
                Ready to Scale Your Logistics?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                Join thousands of businesses that trust iKart Express for their mission-critical shipping needs.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="bg-[#FFB800] hover:bg-[#E5A500] text-slate-900 font-extrabold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-[#FFB800]/15 flex items-center justify-center">
                  Request Pricing
                </a>
                <a href="/contact" className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-extrabold py-3.5 px-8 rounded-xl transition-all duration-200 bg-slate-950/30 backdrop-blur-sm flex items-center justify-center">
                  Get Business Quote
                </a>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default CTA;
