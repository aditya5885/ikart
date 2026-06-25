import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import {
  ShoppingCart,
  HeartPulse,
  Factory,
  Store,
  Package,
  Briefcase,
  Play,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  TrendingUp,
  Thermometer,
  Zap,
} from "lucide-react";
import indHeroBg from "../assets/ind_hero_bg.png";
import indEcommerce from "../assets/ind_ecommerce.png";
import indManufacturing from "../assets/ind_manufacturing.png";
import indRetail from "../assets/ind_retail.png";
import indCorporateOffice from "../assets/ind_corporate_office.png";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800 overflow-x-hidden">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative pt-28 pb-20 min-h-[75vh] flex items-center overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${indHeroBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/95 via-[#0B1528]/80 to-[#0B1528]/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Center: Copy */}
              <FadeIn direction="right" delay={0.2} className="lg:col-span-12 max-w-4xl mx-auto text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-400/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                  <span className="text-[10px] font-extrabold tracking-widest text-primary-300 uppercase">
                    Logistics Solutions
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  Tailored Logistics <br />
                  for{" "}
                  <span className="text-primary-300">Every Industry</span>
                </h1>

                <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
                  Delivering sector-specific expertise that enables us to engineer precise,
                  scalable logistics solutions — connecting businesses to consumers with
                  real-time intelligence and global supply chain standards.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/20"
                  >
                    Connect with an Expert
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+914842900800"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-bold text-sm rounded-xl transition-all duration-200 bg-white/5 backdrop-blur-sm"
                  >
                    <Phone className="h-4 w-4 text-primary-300" />
                    +91 484 2900 800
                  </a>
                </div>

                {/* Social proof */}
                <div className="mt-8 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["VK", "AM", "JD", "RN"].map((init) => (
                      <div
                        key={init}
                        className="w-8 h-8 rounded-full bg-primary-600 border-2 border-[#0B1528] flex items-center justify-center text-[9px] font-extrabold text-white"
                      >
                        {init}
                      </div>
                    ))}
                  </div>
                  <span className="text-white/60 text-xs font-semibold ml-2">
                    <span className="text-white font-extrabold">500+</span> businesses trust us
                  </span>
                </div>
              </FadeIn>


            </div>
          </div>
        </section>

        {/* ── Industries We Empower ── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <FadeIn direction="up">
              <div className="mb-12">
                <span className="text-[10px] font-extrabold tracking-widest text-primary-600 uppercase block mb-3">
                  Specialized Verticals
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                  Industries We Empower
                </h2>
                <div className="w-12 h-1 bg-primary-500 rounded-full" />
              </div>
            </FadeIn>

            {/* ─ Row 1: E-commerce (large dark) + Healthcare ─ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">

              {/* E-commerce — large card */}
              <FadeIn direction="up" delay={0.1} className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[320px] flex flex-col justify-end shadow-xl group h-full">
                <img
                  src={indEcommerce}
                  alt="E-commerce logistics"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/90 via-[#0B1528]/40 to-transparent" />

                {/* Play button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                    <Play className="h-6 w-6 text-white fill-current ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <ShoppingCart className="h-5 w-5 text-primary-300" />
                    <span className="text-[10px] font-extrabold tracking-widest text-primary-300 uppercase">
                      E-commerce
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-4">
                    Last-mile Excellence <br /> Across Kerala
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-3 w-3 text-emerald-400" />
                      20+ Metro Business Partners
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-3 w-3 text-emerald-400" />
                      Cash on Delivery Guarantee
                    </span>
                  </div>
                </div>
              </FadeIn>

              {/* Healthcare */}
              <FadeIn direction="up" delay={0.2} className="lg:col-span-5 bg-[#002557] rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-primary-400/10 rounded-full pointer-events-none" />
                <div>
                  <div className="p-3 bg-white/10 rounded-2xl w-fit mb-5">
                    <HeartPulse className="h-6 w-6 text-primary-300" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">Healthcare</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Specialized cold-chain expertise for pharmaceuticals, hospitals, and life-changing medical supplies.
                  </p>
                  <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 w-fit">
                    <Thermometer className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-extrabold text-white">100% Temperature Integrity</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-primary-300 font-extrabold text-sm mt-8 hover:gap-3 transition-all"
                >
                  View SOS <ArrowRight className="h-4 w-4" />
                </a>
              </FadeIn>
            </div>

            {/* ─ Row 2: Manufacturing + Retail Chain + FMCG ─ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

              {/* Manufacturing */}
              <FadeIn direction="up" delay={0.3}>
                <div className="relative rounded-3xl overflow-hidden min-h-[260px] flex flex-col justify-end shadow-lg group h-full">
                  <img
                    src={indManufacturing}
                    alt="Manufacturing logistics"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Factory className="h-4 w-4 text-primary-300" />
                      <span className="text-[9px] font-extrabold tracking-widest text-primary-300 uppercase">Manufacturing</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-white mb-3">
                      Industrial Transport Solutions
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-4">
                      Specialized handling for heavy industrial equipment and bulk shipments nationwide.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[9px] font-bold bg-white/10 text-white/70 px-2 py-1 rounded-full">FTL / LTL</span>
                      <span className="text-[9px] font-bold bg-white/10 text-white/70 px-2 py-1 rounded-full">Oversized Cargo</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Retail Chain */}
              <FadeIn direction="up" delay={0.4}>
                <div className="relative rounded-3xl overflow-hidden min-h-[260px] flex flex-col justify-end shadow-lg group h-full">
                  <img
                    src={indRetail}
                    alt="Retail chain logistics"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Store className="h-4 w-4 text-primary-300" />
                      <span className="text-[9px] font-extrabold tracking-widest text-primary-300 uppercase">Retail Chain</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-white mb-3">
                      Multi-channel Distribution
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-4">
                      Multi-channel distribution and shelf stocking efficiency for large supermarket chains.
                    </p>
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                      <TrendingUp className="h-3.5 w-3.5" />
                      99.1% Fulfilment Rate
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* FMCG */}
              <FadeIn direction="up" delay={0.5}>
                <div className="bg-amber-50 border border-amber-200/50 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group h-full">
                  <div>
                    <div className="p-3 bg-primary-500/20 rounded-2xl w-fit mb-5">
                      <Package className="h-6 w-6 text-primary-300" />
                    </div>
                    <span className="text-[9px] font-extrabold tracking-widest text-primary-300 uppercase block mb-2">FMCG</span>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                      Fast-Moving Consumer Goods
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Made to refresh for fast-moving consumer goods. Maintaining shelf life through speed with temperature-sensitive delivery.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary-300" />
                    <span className="text-xs font-bold text-slate-700">20+ Cities Distribution Reach</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ─ Row 3: Corporate Partnerships + Office Image ─ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

              {/* Corporate Partnerships */}
              <FadeIn direction="up" delay={0.6} className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-primary-50 rounded-2xl">
                    <Briefcase className="h-6 w-6 text-[#002557]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold tracking-widest text-primary-600 uppercase block">Enterprise</span>
                    <h3 className="text-xl font-extrabold text-slate-900">Corporate Partnerships</h3>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-lg">
                  Dedicated account management and superior logistics frameworks for multinational enterprises and large corporate entities operating in key south India markets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                    Custom SLA Contracts
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                    24/7 Dedicated Support
                  </span>
                </div>
              </FadeIn>

              {/* Corporate Office image card */}
              <FadeIn direction="up" delay={0.7} className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[280px] shadow-xl group h-full">
                <img
                  src={indCorporateOffice}
                  alt="Corporate office"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Corporate Office
                  </span>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ── Consultant CTA ── */}
        <section className="bg-[#0B1528] py-20 relative overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left: Copy + Buttons */}
              <FadeIn direction="right" className="lg:col-span-7">
                <span className="text-[10px] font-extrabold tracking-widest text-primary-300 uppercase block mb-4">
                  Consult with an Industry Advisor
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                  Let's Solve Your Industry's <br />
                  <span className="text-primary-300">Logistics Challenges</span>
                </h2>
                <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
                  Connect with a specialized consultant to design a supply chain that drives cost advantage and gives your company the competitive edge in the Kerala market.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/15"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule Consultation
                  </a>
                  <a
                    href="tel:+914842900800"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-bold text-sm rounded-xl transition-all duration-200 bg-white/5"
                  >
                    <Phone className="h-4 w-4 text-primary-300" />
                    Call +91 484 2900 800
                  </a>
                </div>
              </FadeIn>

              {/* Right: Industries Served card */}
              <FadeIn direction="left" delay={0.2} className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 min-w-[240px] w-full max-w-xs">
                  <span className="text-[10px] font-extrabold tracking-widest text-white/50 uppercase block mb-4">
                    Industries Served
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { emoji: "🛒", label: "E-commerce" },
                      { emoji: "🏥", label: "Healthcare" },
                      { emoji: "🏭", label: "Manufacturing" },
                      { emoji: "🏪", label: "Retail Chain" },
                      { emoji: "📦", label: "FMCG" },
                      { emoji: "🏢", label: "Corporate" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-xl px-3 py-2"
                      >
                        <span className="text-base leading-none">{item.emoji}</span>
                        <span className="text-[11px] font-bold text-white/80">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <span className="text-2xl font-black text-primary-300">6</span>
                    <span className="text-xs font-bold text-white/50 ml-1.5">Specialized Verticals</span>
                  </div>
                </div>
                {/* Trust line */}
                <p className="text-white/40 text-xs font-semibold text-center lg:text-right max-w-xs">
                  Our advisors have helped 500+ businesses optimize their Kerala supply chains
                </p>
              </FadeIn>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
