import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { 
  Rocket, 
  Eye, 
  Check, 
  Users, 
  Cpu, 
  Leaf, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Building, 
  Globe 
} from "lucide-react";

import smartFleetImg from "../assets/smart_fleet.png";
import warehouseImg from "../assets/automated_warehouse.png";
import networkImg from "../assets/distribution_network.png";
import indiaMapImg from "../assets/india_logistics_map.png";

const About = () => {
  const infraCards = [
    {
      image: smartFleetImg,
      title: "Smart Fleet",
      desc: "Over 5,000 GPS-enabled vehicles ranging from last-mile electric scooters to heavy-duty long-haul trailers.",
      bullets: ["100% EV City Fleet", "Real-time AI Route Optimization"],
    },
    {
      image: warehouseImg,
      title: "Automated Warehousing",
      desc: "2.5 million sq. ft. of Grade-A storage space across 15 strategic hubs, equipped with advanced WMS technology.",
      bullets: ["Temperature Controlled Zones", "Fully Robotic Sorting Lines"],
    },
    {
      image: networkImg,
      title: "Distribution Network",
      desc: "An omnichannel distribution system connecting Tier-1 cities to the remotest corners of the nation.",
      bullets: ["19,000+ Pin Codes Covered", "Hyperlocal Delivery Nodes"],
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Customer Obsession",
      desc: "Every shipment matters. We align our routing and operations to ensure maximum reliability and speed for our clients.",
      color: "bg-primary-50 text-primary-600",
    },
    {
      icon: Cpu,
      title: "Technological Leadership",
      desc: "From AI-driven route optimization to automated sorting, we leverage cutting-edge tech to streamline deliveries.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Leaf,
      title: "Sustainability First",
      desc: "We are committed to reducing our carbon footprint with a growing EV fleet and energy-efficient warehouses.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: ShieldCheck,
      title: "Absolute Reliability",
      desc: "No matter the weather or distance, we deliver on our promises with secure handling and real-time tracking.",
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      <Header />
      
      <main className="flex-grow">
        
        {/* 1. Hero Header Section */}
        <section className="relative bg-[#0B1528] py-20 text-white overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <FadeIn direction="up" delay={0.2} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
            {/* Established Badge */}
            <span className="inline-block bg-amber-500/20 text-primary-300 border border-amber-500/30 text-[10px] font-extrabold tracking-widest px-3 py-1 rounded uppercase mb-6">
              ESTABLISHED 2018
            </span>
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 max-w-4xl">
              Pioneering Global <br className="sm:hidden" /> Logistics in India.
            </h1>
            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-medium">
              More than just delivery, we are the vascular system of Indian commerce, connecting millions through precision and technology.
            </p>
          </FadeIn>
        </section>

        {/* 2. Mission & Vision Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Mission Card (White Card) */}
              <FadeIn direction="right">
                <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:shadow-md h-full">
                  <div>
                    <div className="inline-flex items-center justify-center p-3.5 bg-primary-50 text-primary-600 rounded-2xl mb-6">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      Our Mission
                    </h2>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                      To empower growth by providing seamless, secure, and sustainable logistical solutions that transcend geographical barriers, enabling Indian enterprises to compete on a global scale.
                    </p>
                  </div>
                  {/* Mission metrics */}
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100 text-left">
                    <div>
                      <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block mb-1">
                        RELIABILITY
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        99.8% Fulfillment Rate
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block mb-1">
                        INTEGRITY
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        Trusted by 500+ Corporations
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Vision Card (Dark Navy Card) */}
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-[#0B1528] rounded-3xl p-8 sm:p-12 text-white flex flex-col justify-center text-left relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                  {/* Ambient glow inside vision */}
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary-600 rounded-full blur-[80px] opacity-25 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center p-3.5 bg-cyan-500/10 text-primary-300 rounded-2xl mb-6 border border-cyan-500/20">
                      <Eye className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Our Vision
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      To be India's most trusted partner in logistics, recognized for technological innovation and excellence in customer service.
                    </p>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* 3. World-Class Infrastructure Section */}
        <section className="bg-slate-50 pb-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Headers */}
            <FadeIn direction="up">
              <div className="max-w-2xl mx-auto mb-16 text-center">
                <span className="text-xs font-extrabold text-primary-600 tracking-widest uppercase mb-2 block">
                  THE ENGINE ROOM
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  World-Class Infrastructure
                </h2>
              </div>
            </FadeIn>

            {/* Infrastructure Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
              {infraCards.map((card, idx) => (
                <FadeIn key={idx} direction="up" delay={0.2 + idx * 0.1}>
                  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 group h-full">
                    {/* Photo header */}
                    <div className="h-56 overflow-hidden relative bg-slate-950">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Body Content */}
                    <div className="p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                          {card.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                          {card.desc}
                        </p>
                      </div>

                      {/* Bullet details */}
                      <div className="border-t border-slate-100 pt-6 space-y-3">
                        {card.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2">
                            <div className="p-0.5 bg-green-50 text-green-600 rounded-full border border-green-200 flex-shrink-0">
                              <Check className="h-3 w-3 stroke-[3]" />
                            </div>
                            <span className="text-xs font-semibold text-slate-700">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Unrivaled Network Coverage Section */}
        <section className="bg-white py-20 md:py-24 text-left border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Stylized India Network Map */}
              <FadeIn direction="right" className="lg:col-span-6 flex justify-center relative">
                <div className="relative max-w-md w-full bg-slate-950 rounded-3xl border border-slate-900 shadow-xl overflow-hidden aspect-square flex items-center justify-center p-4">
                  <img
                    src={indiaMapImg}
                    alt="iKart Express India Logistics Network Map"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  {/* Frosted floaters from design */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-slate-100 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                    <Building className="h-4 w-4 text-primary-600" />
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 block leading-none">HUB COVERAGE</span>
                      <span className="text-xs font-black text-slate-800">28 States</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-[#0B1528]/95 border border-slate-800 text-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary-300" />
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 block leading-none">REACH</span>
                      <span className="text-xs font-black text-white">Tier 4 Cities</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Right Column: Statistics grid */}
              <FadeIn direction="left" delay={0.2} className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                  Unrivaled Network Coverage
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                  iKart Express operates the most sophisticated logistics network in the subcontinent. From the heights of Ladakh to the coasts of Kerala, we ensure your cargo reaches its destination with the same level of care and precision.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                  <div>
                    <span className="text-3xl font-black text-slate-900 block mb-1">
                      500+
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      PROCESSING CENTERS
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl font-black text-slate-900 block mb-1">
                      2M+
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      DAILY SHIPMENTS
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl font-black text-slate-900 block mb-1">
                      100+
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      AIR CONNECTIONS
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl font-black text-slate-900 block mb-1">
                      24/7
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      CONTROL TOWER OPS
                    </span>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* 5. Our Core Values Section (Replaces The Visionaries) */}
        <section className="bg-slate-50 py-20 md:py-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Value Header */}
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Core Values
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                The principles that guide our operations, our technology, and our dedication to serving customers across India.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <FadeIn key={idx} direction="up" delay={0.1 * idx}>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 h-full">
                      <div>
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center p-3.5 rounded-2xl mb-6 ${v.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">
                          {v.title}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </section>

        {/* 6. Accreditation Certifications Row */}
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center">
              
              <div className="flex items-center gap-3.5 w-full max-w-[240px]">
                <div className="p-2.5 bg-primary-50/70 border border-primary-100/50 text-primary-600 rounded-xl flex-shrink-0">
                  <Award className="h-6 w-6 stroke-[2]" />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold text-slate-950 text-sm tracking-tight leading-tight">ISO 9001:2015</span>
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase mt-1 block">QUALITY MANAGEMENT</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 w-full max-w-[240px]">
                <div className="p-2.5 bg-primary-50/70 border border-primary-100/50 text-primary-600 rounded-xl flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 stroke-[2]" />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold text-slate-950 text-sm tracking-tight leading-tight">TAPA Certified</span>
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase mt-1 block">SECURITY STANDARD</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 w-full max-w-[240px]">
                <div className="p-2.5 bg-primary-50/70 border border-primary-100/50 text-primary-600 rounded-xl flex-shrink-0">
                  <Leaf className="h-6 w-6 stroke-[2]" />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold text-slate-950 text-sm tracking-tight leading-tight">LEED Gold</span>
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase mt-1 block">GREEN INFRASTRUCTURE</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 w-full max-w-[240px]">
                <div className="p-2.5 bg-primary-50/70 border border-primary-100/50 text-primary-600 rounded-xl flex-shrink-0">
                  <Globe className="h-6 w-6 stroke-[2]" />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold text-slate-950 text-sm tracking-tight leading-tight">AEO Certified</span>
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase mt-1 block">CUSTOMS COMPLIANCE</span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;
