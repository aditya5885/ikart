import { useState } from "react";
import heroBg from "../assets/covered_van_hero.png";
import FadeIn from "./FadeIn";
import { Truck, Globe, Package } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "1866ad8e-926f-47f6-b400-1e66fbb0d63b";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("international");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const pickup = formData.get("pickup");
    const delivery = formData.get("delivery");
    const service = formData.get("service");
    const shipment = formData.get("shipment");
    const phone = formData.get("phone");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Quote Request (${activeTab.toUpperCase()})`,
          tab: activeTab,
          pickup,
          delivery,
          service,
          shipment_weight: shipment,
          phone
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus("sent");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("idle");
        alert(data.message || "Failed to request quote. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("An error occurred. Please check your connection and try again.");
    }
  };

  const tabs = [
    { id: "international", label: "International Delivery", icon: Globe },
    { id: "domestic", label: "Domestic Delivery", icon: Package },
    { id: "goods", label: "Goods Transportation", icon: Truck },
  ];

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

        {/* Frosted Glass Availability Form with Tabs */}
        <FadeIn direction="up" delay={0.3}>
          <div className="max-w-6xl mx-auto relative mt-16 md:mt-20">
            {/* Tab Switcher - Centered and Touching Form */}
            <div className="absolute -top-[41px] left-1/2 -translate-x-1/2 inline-flex p-1 bg-white/80 backdrop-blur-md border border-white/20 border-b-0 rounded-t-2xl shadow-lg gap-1 max-w-[calc(100%-2rem)] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden z-10">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-primary-500 text-white shadow-md shadow-primary-500/20 scale-[1.02]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl mb-12 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 items-end">

                {/* Pickup */}
                <div>
                  <label className="text-[10px] tracking-wider text-slate-700 font-extrabold mb-1.5 block uppercase">
                    PICKUP
                  </label>
                  {activeTab === "international" ? (
                    <input
                      type="text"
                      name="pickup"
                      placeholder="Origin Country"
                      className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      required
                    />
                  ) : (
                    <select
                      name="pickup"
                      defaultValue="Ernakulam"
                      className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm appearance-none focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer"
                    >
                      <option value="Ernakulam">Ernakulam</option>
                      <option value="Alappuzha">Alappuzha</option>
                      <option value="Idukki">Idukki</option>
                      <option value="Kannur">Kannur</option>
                      <option value="Kasaragod">Kasaragod</option>
                      <option value="Kollam">Kollam</option>
                      <option value="Kottayam">Kottayam</option>
                      <option value="Kozhikode">Kozhikode</option>
                      <option value="Malappuram">Malappuram</option>
                      <option value="Palakkad">Palakkad</option>
                      <option value="Pathanamthitta">Pathanamthitta</option>
                      <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                      <option value="Thrissur">Thrissur</option>
                      <option value="Wayanad">Wayanad</option>
                    </select>
                  )}
                </div>

                {/* Delivery */}
                <div>
                  <label className="text-[10px] tracking-wider text-slate-700 font-extrabold mb-1.5 block uppercase">
                    DELIVERY
                  </label>
                  {activeTab === "international" ? (
                    <input
                      type="text"
                      name="delivery"
                      placeholder="Destination Country"
                      className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      required
                    />
                  ) : (
                    <select
                      name="delivery"
                      className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm appearance-none focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer"
                    >
                      <option value="Ernakulam">Ernakulam</option>
                      <option value="Alappuzha">Alappuzha</option>
                      <option value="Idukki">Idukki</option>
                      <option value="Kannur">Kannur</option>
                      <option value="Kasaragod">Kasaragod</option>
                      <option value="Kollam">Kollam</option>
                      <option value="Kottayam">Kottayam</option>
                      <option value="Kozhikode">Kozhikode</option>
                      <option value="Malappuram">Malappuram</option>
                      <option value="Palakkad">Palakkad</option>
                      <option value="Pathanamthitta">Pathanamthitta</option>
                      <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                      <option value="Thrissur">Thrissur</option>
                      <option value="Wayanad">Wayanad</option>
                    </select>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="text-[10px] tracking-wider text-slate-700 font-extrabold mb-1.5 block uppercase">
                    SERVICE
                  </label>
                  <select
                    name="service"
                    className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm appearance-none focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer"
                  >
                    {activeTab === "international" && (
                      <>
                        <option value="intl-courier">International Courier</option>
                        <option value="air-freight">Air Freight</option>
                        <option value="ocean-freight">Ocean Freight</option>
                      </>
                    )}
                    {activeTab === "domestic" && (
                      <>
                        <option value="express-parcel">Express Parcel</option>
                        <option value="std-delivery">Standard Delivery</option>
                        <option value="same-day">Same Day Delivery</option>
                      </>
                    )}
                    {activeTab === "goods" && (
                      <>
                        <option value="ftl">Full Truckload (FTL)</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Shipment */}
                <div>
                  <label className="text-[10px] tracking-wider text-slate-700 font-extrabold mb-1.5 block uppercase">
                    SHIPMENT
                  </label>
                  <input
                    type="text"
                    name="shipment"
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
                    name="phone"
                    placeholder="Contact No"
                    className="w-full h-11 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 text-sm placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    required
                  />
                </div>

                {/* Button */}
                <div>
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className={`w-full h-11 font-extrabold text-sm rounded-xl transition-all duration-200 shadow-md flex items-center justify-center cursor-pointer ${
                      status === "sent"
                        ? "bg-emerald-500 text-white cursor-default"
                        : "bg-[#0A1D37] hover:bg-[#030E1C] text-white"
                    }`}
                  >
                    {status === "idle" && "Get Quote"}
                    {status === "sending" && (
                      <span className="flex items-center gap-1.5 justify-center">
                        <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </span>
                    )}
                    {status === "sent" && "Quote Requested!"}
                  </button>
                </div>

              </div>
            </form>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Hero;
