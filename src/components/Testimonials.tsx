import { Star, Quote } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    text: "iKart Express has significantly improved our distribution operations across Kerala. Their timely deliveries and professional support have helped us scale efficiently without missing a single deadline.",
    name: "Vipin Kumar",
    role: "Operations Director",
    company: "Retail Hub",
    initials: "VK",
    rating: 5,
    color: "from-blue-600 to-blue-800",
  },
  {
    text: "From warehousing to last-mile delivery, their logistics solutions have streamlined our supply chain and reduced operational overhead by over 30%. An outstanding partner.",
    name: "Dr. Anjali Menon",
    role: "Head of Supply Chain",
    company: "Eco Outdoor Gear",
    initials: "AM",
    rating: 5,
    color: "from-[#002557] to-[#001a40]",
  },
  {
    text: "The integration with our eCommerce platform was seamless. Their tracking system provides complete real-time visibility and our customers love the experience.",
    name: "Jayan Das",
    role: "Founder & CEO",
    company: "Kerala Krafts",
    initials: "JD",
    rating: 5,
    color: "from-slate-700 to-slate-900",
  },
];

const stats = [
  { value: "10K+", label: "Monthly Deliveries" },
  { value: "500+", label: "Business Clients" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "24/7", label: "Live Tracking" },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[10px] font-extrabold tracking-widest text-blue-600 uppercase block mb-3">
                Client Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Trusted By Businesses{" "}
                <span className="text-[#002557]">Across Kerala</span>
              </h2>
              <div className="w-10 h-1 bg-[#FFB800] rounded-full" />
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed md:text-right">
              Reliable logistics, warehousing, and supply chain solutions that help
              businesses grow with confidence.
            </p>
          </div>
        </FadeIn>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <FadeIn key={s.label} direction="up" delay={0.2 + i * 0.1}>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <span className="block text-3xl md:text-4xl font-black text-[#002557] leading-none mb-2">
                  {s.value}
                </span>
                <span className="text-xs font-semibold text-slate-500">{s.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <FadeIn key={i} direction="up" delay={0.3 + i * 0.1} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group flex flex-col h-full">
                {/* Top color accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />

                <div className="p-8 flex flex-col flex-grow">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-slate-100 mb-4 fill-current" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(item.rating)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-8">
                    "{item.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-sm font-extrabold flex-shrink-0`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <span className="block font-extrabold text-slate-900 text-sm">{item.name}</span>
                      <span className="block text-xs text-slate-500 font-medium">{item.role}</span>
                      <span className="block text-[10px] font-bold text-blue-600 tracking-wide uppercase mt-0.5">
                        {item.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
