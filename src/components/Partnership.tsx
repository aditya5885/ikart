import { Check, ArrowRight, Zap, BarChart3, Headphones } from "lucide-react";
import cargoPortImg from "../assets/cargo_port.png";
import FadeIn from "./FadeIn";

const benefits = [
  {
    icon: Zap,
    text: "Priority processing and higher weight limits for your volume",
  },
  {
    icon: BarChart3,
    text: "Customized API integration for automated, real-time shipping",
  },
  {
    icon: Headphones,
    text: "Dedicated fleet and personnel for bulk & enterprise shipments",
  },
];

const badges = [
  { label: "Custom SLAs" },
  { label: "API Access" },
  { label: "Priority Fleet" },
];

const Partnership = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#0B1528] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 relative">

          {/* Ambient glow */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* ── Left: Content ── */}
          <FadeIn direction="right" className="relative z-10 p-10 sm:p-14 lg:p-16 flex flex-col justify-center text-left w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/25 w-fit mb-6">
              <span className="w-1.5 h-1.5 bg-[#FFB800] rounded-full" />
              <span className="text-[10px] font-extrabold tracking-widest text-[#FFB800] uppercase">
                Partner With iKart
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Scale Your Business <br />
              with{" "}
              <span className="text-[#FFB800]">Corporate Partnerships</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md">
              Join 500+ enterprises that rely on iKart for dedicated logistics frameworks,
              real-time analytics, and guaranteed SLAs — built around your business needs.
            </p>

            {/* Benefits */}
            <ul className="space-y-5 mb-10">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 p-2 bg-white/[0.06] border border-white/10 rounded-xl group-hover:bg-[#FFB800]/15 group-hover:border-[#FFB800]/20 transition-all duration-200">
                      <Icon className="h-4 w-4 text-[#FFB800]" />
                    </div>
                    <span className="text-sm text-slate-300 leading-relaxed pt-1 font-medium">
                      {b.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Feature badge chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full"
                >
                  <Check className="h-3 w-3 stroke-[3]" />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="self-start inline-flex items-center gap-2 px-8 py-4 bg-[#FFB800] hover:bg-[#E5A500] text-[#0B1528] font-extrabold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-[#FFB800]/15 group"
            >
              Become a Partner
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>

          {/* ── Right: Image ── */}
          <FadeIn direction="left" delay={0.3} className="relative min-h-[300px] lg:min-h-full overflow-hidden w-full">
            <img
              src={cargoPortImg}
              alt="iKart Express Cargo Container Port"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/50 via-transparent to-transparent lg:bg-gradient-to-l" />

            {/* Floating stat card */}
            <div
              className="absolute bottom-8 right-8 p-5 rounded-2xl shadow-2xl min-w-[160px]"
              style={{ background: "rgba(7,13,25,0.75)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="text-[9px] font-extrabold tracking-widest text-white/50 uppercase block mb-2">
                Active Partners
              </span>
              <span className="text-3xl font-black text-[#FFB800] block leading-none mb-1">500+</span>
              <span className="text-[10px] font-semibold text-emerald-400">↑ 18% this year</span>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Partnership;
