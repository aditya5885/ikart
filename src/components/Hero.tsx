import heroBg from "../assets/ind_hero_bg.png";
import FadeIn from "./FadeIn";

const Hero = () => {

  return (
    <section id="home" className="relative bg-[#0B1528] pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Layered dark overlay — keeps image visible but text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1528]/80 via-[#0B1528]/65 to-[#0B1528]/90" />
      {/* Subtle blue glow accents on top */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Title */}
        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Moving Businesses Forward <br />
            Across <span className="text-primary-300">Kerala & India</span>
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn direction="up" delay={0.2}>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-300 font-medium mb-12 leading-relaxed">
            Reliable logistics, parcel delivery, freight movement, warehousing, and supply chain solutions designed for modern businesses.
          </p>
        </FadeIn>

        {/* Frosted Glass Availability Form */}
        <FadeIn direction="up" delay={0.3}>
          <form 
            onSubmit={(e) => { 
              e.preventDefault(); 
              window.location.href = "/contact"; 
            }} 
            className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl mb-12 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 items-end">
            
            {/* Pickup */}
            <div>
              <label className="text-[10px] tracking-wider text-slate-700 font-extrabold mb-1.5 block uppercase">
                PICKUP
              </label>
              <input
                type="text"
                placeholder="Enter Origin"
                className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                required
              />
            </div>

            {/* Delivery */}
            <div>
              <label className="text-[10px] tracking-wider text-slate-700 font-extrabold mb-1.5 block uppercase">
                DELIVERY
              </label>
              <input
                type="text"
                placeholder="Enter Destination"
                className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                required
              />
            </div>

            {/* Service */}
            <div>
              <label className="text-[10px] tracking-wider text-slate-700 font-extrabold mb-1.5 block uppercase">
                SERVICE
              </label>
              <select className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm appearance-none focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer">
                <option value="express">Express Parcel</option>
                <option value="cargo">Standard Cargo</option>
                <option value="cold-chain">Cold Chain</option>
                <option value="warehousing">Warehousing</option>
              </select>
            </div>

            {/* Shipment */}
            <div>
              <label className="text-[10px] tracking-wider text-slate-700 font-extrabold mb-1.5 block uppercase">
                SHIPMENT
              </label>
              <input
                type="text"
                placeholder="Weight (kg)"
                className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-[10px] tracking-wider text-slate-700 font-extrabold mb-1.5 block uppercase">
                PHONE
              </label>
              <input
                type="text"
                placeholder="Contact No"
                className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                required
              />
            </div>

            {/* Button */}
            <div>
              <button type="submit" className="w-full h-11 bg-[#0A1D37] hover:bg-[#030E1C] text-white font-extrabold text-sm rounded-xl transition-colors duration-200 shadow-md flex items-center justify-center">
                Get Quote
              </button>
            </div>

            </div>
          </form>
        </FadeIn>

      </div>
    </section>
  );
};

export default Hero;
