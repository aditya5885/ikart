import { ShoppingCart, HeartPulse, Factory, Store, Package, Briefcase, ArrowRight } from "lucide-react";
import indEcommerce from "../assets/ind_ecommerce.png";
import indManufacturing from "../assets/ind_manufacturing.png";
import indRetail from "../assets/ind_retail.png";
import indCorporateOffice from "../assets/ind_corporate_office.png";
import FadeIn from "./FadeIn";

const Industries = () => {
  return (
    <section id="industries" className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-extrabold tracking-widest text-blue-600 uppercase block mb-3">
                Specialized Verticals
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Industries We Empower
              </h2>
              <div className="w-10 h-1 bg-[#FFB800] rounded-full mb-4" />
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Sector-specific logistics expertise that drives growth and operational efficiency.
              </p>
            </div>
            <a
              href="/industries"
              className="self-start md:self-end inline-flex items-center gap-2 px-6 py-3 bg-[#0B1528] hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-lg whitespace-nowrap"
            >
              View All Industries
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* ── E-commerce — large hero card ── */}
          <FadeIn direction="up" delay={0.2} className="md:col-span-5 h-full">
            <div className="relative rounded-3xl overflow-hidden min-h-[320px] md:min-h-[380px] h-full flex flex-col justify-end shadow-xl group cursor-pointer">
              <img
                src={indEcommerce}
                alt="E-commerce"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/90 via-[#0B1528]/30 to-transparent" />
              <div className="relative z-10 p-7">
                <div className="inline-flex items-center gap-2 bg-[#FFB800]/20 border border-[#FFB800]/30 text-[#FFB800] text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">
                  <ShoppingCart className="h-3 w-3" /> E-commerce
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Last-mile <br />Excellence</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-4 max-w-xs">
                  COD management, returns processing, and real-time tracking for online retailers.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">20+ Cities</span>
                  <a href="/industries" className="inline-flex items-center gap-1 text-xs font-bold text-white/70 hover:text-white transition-colors">
                    Explore <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Right column: 2x2 grid ── */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Healthcare — dark gradient */}
            <div className="relative rounded-3xl overflow-hidden min-h-[180px] flex flex-col justify-end shadow-lg group cursor-pointer bg-gradient-to-br from-blue-900 to-[#002557]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full -mr-12 -mt-12 pointer-events-none" />
              <div className="relative z-10 p-6">
                <div className="p-2.5 bg-white/10 rounded-xl w-fit mb-4">
                  <HeartPulse className="h-5 w-5 text-[#FFB800]" />
                </div>
                <h3 className="text-base font-extrabold text-white mb-1">Healthcare</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-3">
                  Cold-chain pharma with 100% temperature integrity.
                </p>
                <span className="text-[9px] font-bold text-[#FFB800] bg-[#FFB800]/10 px-2.5 py-1 rounded-full">
                  100% Temp Controlled
                </span>
              </div>
            </div>

            {/* Manufacturing — photo */}
            <div className="relative rounded-3xl overflow-hidden min-h-[180px] flex flex-col justify-end shadow-lg group cursor-pointer">
              <img
                src={indManufacturing}
                alt="Manufacturing"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="relative z-10 p-6">
                <Factory className="h-4 w-4 text-[#FFB800] mb-3" />
                <h3 className="text-base font-extrabold text-white mb-1">Manufacturing</h3>
                <span className="text-[9px] font-bold text-white/60 bg-white/10 px-2.5 py-1 rounded-full">
                  FTL · LTL · ODC
                </span>
              </div>
            </div>

            {/* Retail Chain — photo */}
            <div className="relative rounded-3xl overflow-hidden min-h-[180px] flex flex-col justify-end shadow-lg group cursor-pointer">
              <img
                src={indRetail}
                alt="Retail Chain"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="relative z-10 p-6">
                <Store className="h-4 w-4 text-[#FFB800] mb-3" />
                <h3 className="text-base font-extrabold text-white mb-1">Retail Chain</h3>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">
                  99.1% Fill Rate
                </span>
              </div>
            </div>

            {/* FMCG — amber light card */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200/50 min-h-[180px] flex flex-col justify-between p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div>
                <div className="p-2.5 bg-[#FFB800]/20 rounded-xl w-fit mb-4">
                  <Package className="h-5 w-5 text-[#FFB800]" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-1">FMCG</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Speed-first delivery maintaining shelf life at scale.
                </p>
              </div>
              <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full self-start">
                500+ SKUs
              </span>
            </div>

          </div>

          {/* ── Corporate — full width banner card ── */}
          <FadeIn direction="up" delay={0.6} className="md:col-span-12">
            <div className="relative rounded-3xl overflow-hidden min-h-[180px] flex items-center shadow-xl group cursor-pointer">
              <img
                src={indCorporateOffice}
                alt="Corporate"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/95 via-[#0B1528]/60 to-transparent" />
              <div className="relative z-10 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Briefcase className="h-4 w-4 text-[#FFB800]" />
                    <span className="text-[9px] font-extrabold tracking-widest text-[#FFB800] uppercase">Enterprise</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Corporate Partnerships</h3>
                  <p className="text-white/60 text-sm max-w-md leading-relaxed">
                    Dedicated account management, custom SLAs, and analytics dashboards for multinational enterprises.
                  </p>
                </div>
                <a
                  href="/industries"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#FFB800] hover:bg-[#E5A500] text-[#0B1528] font-extrabold text-sm rounded-xl transition-all duration-200 shadow-lg"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Industries;
