import { Eye, Shield, Truck, PhoneCall, Cpu, TrendingUp, CheckCircle } from "lucide-react";
import controlRoomImg from "../assets/control_room.png";
import FadeIn from "./FadeIn";

const features = [
  {
    icon: Eye,
    title: "Real-Time Tracking",
    desc: "Advanced GPS integration for precise shipment monitoring at every step of the journey.",
    stat: "Live",
    statColor: "text-emerald-400",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    desc: "State-of-the-art facilities with specialized handling for fragile and high-value items.",
    stat: "100% Insured",
    statColor: "text-primary-300",
  },
  {
    icon: Truck,
    title: "75k+ Vehicle Network",
    desc: "Extensive nationwide reach across 15,425+ pin codes with multi-modal transport.",
    stat: "15,425+ Pincodes",
    statColor: "text-primary-400",
  },
  {
    icon: PhoneCall,
    title: "24/7/365 Support",
    desc: "Round-the-clock dedicated customer assistance for every logistics partnership.",
    stat: "< 2 Min Response",
    statColor: "text-primary-300",
  },
];

const Infrastructure = () => {
  return (
    <section className="bg-[#0B1528] py-24 text-white overflow-hidden relative">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text & Features ── */}
          <FadeIn direction="right" className="text-left order-2 lg:order-1">
            <span className="text-[10px] font-extrabold tracking-widest text-primary-300 uppercase block mb-4">
              Operational Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Unrivaled Infrastructure <br className="hidden sm:inline" />
              for{" "}
              <span className="text-primary-300">Absolute Reliability</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-lg">
              Backed by proprietary technology and a vast physical network, we deliver with
              precision regardless of volume, distance, or complexity.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
                        <Icon className="h-5 w-5 text-primary-300" />
                      </div>
                      <span className={`text-[9px] font-extrabold tracking-wider uppercase ${f.statColor}`}>
                        {f.stat}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-white mb-1.5">{f.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tech callout */}
            <div className="bg-gradient-to-r from-primary-900/40 to-[#002557]/40 border border-primary-800/40 rounded-2xl p-5 flex items-start gap-4">
              <div className="p-3 bg-primary-500/15 rounded-xl flex-shrink-0">
                <Cpu className="h-5 w-5 text-primary-300" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-primary-300 mb-1">
                  AI-Powered Route Optimization
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Proprietary machine learning algorithms and cloud-based inventory
                  management cut delivery times by up to 34%.
                </p>
              </div>
              <TrendingUp className="h-5 w-5 text-emerald-400 flex-shrink-0 self-center ml-auto" />
            </div>
          </FadeIn>

          {/* ── Right: Control Room Image ── */}
          <FadeIn direction="left" delay={0.3} className="relative order-1 lg:order-2 group">
            {/* Glow frame */}
            <div className="absolute -inset-[2px] bg-gradient-to-br from-primary-600/40 via-primary-400/20 to-transparent rounded-3xl blur-sm pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={controlRoomImg}
                alt="iKart Express Operations Control Room"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[480px] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/60 via-transparent to-transparent" />

              {/* Floating stat strip */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className="flex items-center justify-around gap-4 rounded-2xl px-6 py-4"
                  style={{ background: "rgba(7,13,25,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {[
                    { val: "99.1%", label: "On-Time" },
                    { val: "2M+", label: "Monthly" },
                    { val: "24/7", label: "Ops" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <span className="block text-lg font-black text-primary-300 leading-none">{s.val}</span>
                      <span className="text-[9px] font-bold text-white/50 tracking-widest uppercase">{s.label}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 ml-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400">Live Ops</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
