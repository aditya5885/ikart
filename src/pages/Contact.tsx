import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import {
  Briefcase,
  Headphones,
  Newspaper,
  MapPin,
  Phone,
  Mail,
  Send,
  Globe,
  Share2,
  CheckCircle,
} from "lucide-react";
import contactHeroImg from "../assets/contact_hero.png";
import deliveryImg from "../assets/kerala_delivery.png";

// TODO: Replace this with your actual Web3Forms access key from https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = "1866ad8e-926f-47f6-b400-1e66fbb0d63b";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus("sent");
        setForm({ fullName: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("idle");
        alert(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("An error occurred. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800 overflow-x-hidden">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <header className="relative pt-28 pb-32 min-h-[72vh] flex items-center overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactHeroImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#002557]/90 to-[#002557]/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <FadeIn direction="up">
              <div className="max-w-3xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-400/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                  <span className="text-[10px] font-extrabold tracking-widest text-primary-300 uppercase">
                    Logistics Excellence
                  </span>
                </div>
                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                  Get in Touch with our <br />
                  <span className="text-primary-300">Logistics Experts</span>
                </h1>
                <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed">
                  Whether you are scaling regional operations or need personalized local
                  delivery solutions, our consultants are ready to optimize your
                  Kerala-wide supply chain.
                </p>
              </div>
            </FadeIn>
          </div>

        </header>

        {/* ── Form + Info Cards ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left: Contact Form */}
            <FadeIn direction="right" className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/50">
              <h2 className="text-2xl font-extrabold text-[#002557] mb-1">Send us a Message</h2>
              <p className="text-slate-500 text-sm mb-8">
                Fill out the form below and an industry specialist will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Enter Company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us about your logistics needs..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={`inline-flex items-center gap-2 px-10 py-4 rounded-xl font-extrabold text-sm shadow-lg transition-all duration-200 group
                    ${status === "sent"
                      ? "bg-emerald-500 text-white cursor-default"
                      : "bg-primary-600 hover:bg-primary-700 text-white"
                    }`}
                >
                  {status === "idle" && (
                    <>
                      Send Inquiry
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Message Sent!
                    </>
                  )}
                </button>
              </form>
            </FadeIn>

            {/* Right: Info Cards */}
            <FadeIn direction="left" delay={0.2} className="lg:col-span-5 flex flex-col gap-5">

              {/* Sales & Partnerships */}
              <div className="relative bg-[#002557] text-white p-8 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white mb-2">Sales & Partnerships</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      For corporate contracts, enterprise solutions, and large-scale logistics partnerships.
                    </p>
                    <a
                      href="mailto:adityashvkmr@gmail.com"
                      className="inline-flex items-center gap-1.5 text-primary-300 font-bold text-sm hover:underline"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      adityashvkmr@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Customer Support */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-xl flex-shrink-0">
                    <Headphones className="h-6 w-6 text-[#002557]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#002557] mb-2">Customer Support</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      Need help with an ongoing shipment? Our support team is available 24/7.
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+917306653758"
                        className="inline-flex items-center gap-2 text-[#002557] font-bold text-sm hover:text-primary-600 transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        +91 73066 53758
                      </a>
                      <a
                        href="mailto:adityashvkmr@gmail.com"
                        className="inline-flex items-center gap-2 text-[#002557] font-bold text-sm hover:text-primary-600 transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        adityashvkmr@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Media & Careers */}
              <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-200/60 rounded-xl flex-shrink-0">
                    <Newspaper className="h-6 w-6 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-800 mb-2">Media & Careers</h3>
                    <p className="text-slate-500 text-sm mb-1">
                      Inquiries:{" "}
                      <a href="mailto:adityashvkmr@gmail.com" className="font-semibold hover:text-slate-700 transition-colors">
                        adityashvkmr@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Branch Locations ── */}
        <section className="bg-slate-100/60 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/30">

              {/* Left: Photo */}
              <FadeIn direction="right" className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px]">
                <img
                  src={deliveryImg}
                  alt="iKart Express Kerala Delivery Network"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay badge */}
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002557]/90 border border-white/20 shadow-lg backdrop-blur-md">
                    <Globe className="h-3.5 w-3.5 text-primary-300" />
                    <span className="text-[10px] font-extrabold tracking-widest text-white uppercase">
                      Kerala Delivery Network
                    </span>
                  </div>
                </div>
              </FadeIn>

              {/* Right: Copy */}
              <FadeIn direction="left" delay={0.2} className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-center">
                <span className="text-[10px] font-extrabold tracking-widest text-[#002557] uppercase block mb-4">
                  Regional Presence
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#002557] mb-5 leading-tight">
                  Our Kerala Headquarters
                </h2>
                <p className="text-slate-500 text-base leading-relaxed mb-10">
                  Our high-tech distribution center in Kochi is strategically located to ensure
                  lightning-fast delivery across Kerala and the entire subcontinent.
                </p>

                <div className="space-y-7 border-t border-slate-200/60 pt-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary-50 rounded-xl flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#002557]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#002557] mb-1 text-sm">Our Office</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Panangad Nilam, Muppathadam,<br />
                        Muppathadam - 683110, Kerala
                      </p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary-50 rounded-xl flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#002557]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#002557] mb-1 text-sm">Contact Information</h4>
                      <a
                        href="tel:+917306653758"
                        className="text-slate-500 text-xs font-semibold hover:text-[#002557] transition-colors block"
                      >
                        +91 73066 53758
                      </a>
                      <a
                        href="mailto:adityashvkmr@gmail.com"
                        className="text-slate-500 text-xs font-semibold hover:text-[#002557] transition-colors block"
                      >
                        adityashvkmr@gmail.com
                      </a>
                    </div>
                  </div>
                  {/* Social row */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href="#"
                      aria-label="Share"
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#002557] hover:text-white hover:border-[#002557] transition-all"
                    >
                      <Share2 className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Website"
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#002557] hover:text-white hover:border-[#002557] transition-all"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

      </main>

      <Footer />


    </div>
  );
};

export default Contact;
