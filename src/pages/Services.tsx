import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { 
  Zap, 
  Clock, 
  Check, 
  FileText, 
  ArrowUpRight, 
  ShoppingCart, 
  MapPin, 
  RotateCcw, 
  ShieldCheck, 
  Database,
  ArrowRight
} from "lucide-react";

import globalNetworkImg from "../assets/global_network.png";
import contractLogisticsImg from "../assets/contract_logistics.png";
import cargoFreightImg from "../assets/cargo_freight.png";
import warehouseImg from "../assets/automated_warehouse.png";

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      <Header />

      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative bg-[#0B1528] py-20 text-white overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <FadeIn direction="up" delay={0.2} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
            {/* Badge */}
            <span className="inline-block bg-amber-500/20 text-[#FFB800] border border-amber-500/30 text-[10px] font-extrabold tracking-widest px-3 py-1 rounded uppercase mb-6">
              OUR CAPABILITIES
            </span>
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 max-w-4xl">
              Comprehensive <br /> Logistics <span className="text-[#FFB800]">Redefined.</span>
            </h1>
            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8 font-medium">
              From urgent same-day parcels to complex global supply chain orchestration, iKart Express delivers reliability at the speed of business. Explore our suite of enterprise-grade solutions.
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#express-parcel"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition-colors duration-200 shadow-md shadow-blue-600/10"
              >
                Explore Services
              </a>
              <a
                href="#brochure"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-extrabold text-sm rounded-xl transition-all duration-200 bg-slate-950/20 backdrop-blur-sm"
              >
                <FileText className="h-4 w-4" /> Download Brochure
              </a>
            </div>
          </FadeIn>
        </section>

        {/* 2. Express Parcel Section */}
        <section id="express-parcel" className="bg-slate-50 py-20 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <FadeIn direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                    Express Parcel
                  </h2>
                  <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed">
                    Unmatched speed for your critical shipments. We bridge the gap between "now" and "delivered" with precision tracking.
                  </p>
                </div>
                <span className="self-start md:self-end bg-green-50 text-green-700 border border-green-200 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" /> 99.9% On-time Rate
                </span>
              </div>
            </FadeIn>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Same Day */}
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 h-full">
                  <div>
                    <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Same Day Delivery</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                      Hyperlocal delivery within 4-6 hours for urgent documents, medical supplies, and critical components.
                    </p>
                    <div className="space-y-2 border-t border-slate-100 pt-6">
                      <div className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-green-500 stroke-[3]" />
                        <span className="text-xs font-semibold text-slate-700">Real-time courier tracking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-green-500 stroke-[3]" />
                        <span className="text-xs font-semibold text-slate-700">Direct point-to-point transit</span>
                      </div>
                    </div>
                  </div>
                  <a href="/contact" className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors mt-8 self-start gap-1">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </FadeIn>

              {/* Card 2: Next Day */}
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 h-full">
                  <div>
                    <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Next Day Delivery</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                      Reliable overnight shipping across all major metropolitan areas with guaranteed delivery slots.
                    </p>
                    <div className="space-y-2 border-t border-slate-100 pt-6">
                      <div className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-green-500 stroke-[3]" />
                        <span className="text-xs font-semibold text-slate-700">Priority air transit options</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-green-500 stroke-[3]" />
                        <span className="text-xs font-semibold text-slate-700">End-to-end chain of custody</span>
                      </div>
                    </div>
                  </div>
                  <a href="/contact" className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors mt-8 self-start gap-1">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </FadeIn>

              {/* Card 3: Global Network */}
              <FadeIn direction="up" delay={0.3}>
                <div className="bg-[#0B1528] rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-between relative text-white transition-all duration-300 hover:shadow-xl group h-full">
                  {/* Background image overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay group-hover:scale-102 transition-transform duration-500"
                    style={{ backgroundImage: `url(${globalNetworkImg})` }}
                  />
                  <div className="absolute -inset-1 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[9px] font-bold tracking-widest px-2.5 py-1 rounded uppercase mb-6">
                      INTERNATIONAL
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">Global Network</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Connecting 220+ countries with seamless air and road connectivity.
                    </p>
                  </div>
                  <a href="/contact" className="relative z-10 inline-flex items-center text-xs font-black text-[#FFB800] hover:text-[#E5A500] transition-colors mt-12 self-start gap-1">
                    View Network Map <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </FadeIn>

            </div>

          </div>
        </section>

        {/* 3. Enterprise & E-commerce Section */}
        <section id="enterprise-ecommerce" className="bg-slate-100/50 py-20 text-left border-t border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                  Enterprise & E-commerce
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  Scalable infrastructure designed for modern business needs, from high-volume marketplaces to complex contract logistics.
                </p>
              </div>
            </FadeIn>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Card 1: Contract & Bulk (Span 2 columns) */}
              <FadeIn direction="up" delay={0.1} className="lg:col-span-2">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 hover:shadow-md transition-all duration-300 h-full">
                  <div className="p-8 md:p-10 md:col-span-7 flex flex-col justify-between text-left">
                    <div>
                      <span className="text-[10px] font-black text-blue-600 tracking-wider uppercase mb-2 block">
                        BUSINESS LOGISTICS
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Contract & Bulk Solutions
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                        Dedicated account management and custom workflows for high-volume enterprise partners. We integrate directly into your ERP for frictionless logistics management.
                      </p>
                    </div>
                    {/* Badges */}
                    <div className="flex gap-2">
                      <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 font-bold text-xs rounded-lg">
                        Custom SLAs
                      </span>
                      <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 font-bold text-xs rounded-lg">
                        Monthly BI Reports
                      </span>
                    </div>
                  </div>
                  <div className="h-48 md:h-full md:col-span-5 relative bg-slate-950">
                    <img
                      src={contractLogisticsImg}
                      alt="Bulk Storage Solutions"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Card 2: E-commerce Marketplace */}
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-[#0B1528] rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-600 rounded-full blur-[80px] opacity-20 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 text-[#FFB800] rounded-2xl w-fit mb-6">
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      E-commerce Marketplace
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Multi-channel fulfillment, inventory synchronization, and white-labeled packaging to elevate your brand experience.
                    </p>
                  </div>
                  <button className="relative z-10 mt-8 w-full bg-[#FFB800] hover:bg-[#E5A500] text-slate-900 font-extrabold py-3 px-6 rounded-xl transition-colors text-sm shadow-md">
                    Setup Marketplace
                  </button>
                </div>
              </FadeIn>

              {/* Card 3: Last Mile */}
              <FadeIn direction="up" delay={0.3}>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 h-full">
                  <div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Last Mile</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                      Our proprietary routing algorithms ensure the fastest path to the doorstep, with OTP-secured delivery and photo proofing.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 mt-6">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span>Live Tracking Enabled</span>
                  </div>
                </div>
              </FadeIn>

              {/* Card 4: Cargo & Freight (Span 2 columns) */}
              <FadeIn direction="up" delay={0.4} className="lg:col-span-2">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 hover:shadow-md transition-all duration-300 h-full">
                  <div className="p-8 md:p-10 md:col-span-7 flex flex-col justify-between text-left">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Cargo & Freight
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                        LTL and FTL solutions for heavy-duty requirements. Whether by road or surface, we move the world for you.
                      </p>
                    </div>
                    {/* Bullets */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="p-0.5 bg-green-50 text-green-600 rounded-full border border-green-200 flex-shrink-0">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">
                          Road Freight (Inter-state & inter-city heavy transport)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-0.5 bg-green-50 text-green-600 rounded-full border border-green-200 flex-shrink-0">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">
                          Surface Transport (Multi-modal solutions for bulk cargo)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="h-48 md:h-full md:col-span-5 relative bg-slate-950">
                    <img
                      src={cargoFreightImg}
                      alt="Cargo Freight Shipping Truck"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </FadeIn>

            </div>

          </div>
        </section>

        {/* 4. Advanced Warehousing & Inventory Section */}
        <section id="advanced-warehousing" className="bg-white py-20 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Bullet list */}
              <FadeIn direction="right" className="lg:col-span-7">
                <span className="text-xs font-extrabold text-blue-600 tracking-widest uppercase mb-2 block">
                  INFRASTRUCTURE
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                  Advanced Warehousing <br /> & Inventory
                </h2>

                {/* Items List */}
                <div className="space-y-6">
                  
                  {/* Item 1 */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl flex-shrink-0 mt-1">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        Smart Inventory Management
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                        Real-time visibility into stock levels across our national network of Grade-A warehouses. RFID/FIFO management.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl flex-shrink-0 mt-1">
                      <RotateCcw className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        Reverse Logistics
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                        Seamless return management, quality checks at the doorstep, and rapid restocking. Turning returns into a competitive advantage.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl flex-shrink-0 mt-1">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        Specialized Storage
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                        Temperature-controlled environments for pharmaceuticals and high-value electronics storage with 24/7 security.
                      </p>
                    </div>
                  </div>

                </div>
              </FadeIn>

              {/* Right Column: Automated Warehouse image in a card */}
              <FadeIn direction="left" delay={0.3} className="lg:col-span-5 flex justify-center relative">
                <div className="relative max-w-md w-full bg-slate-950 rounded-3xl border border-slate-900 shadow-xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/5] flex items-center justify-center p-0">
                  <img
                    src={warehouseImg}
                    alt="iKart Express Automated Warehouse corridor"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 border border-slate-100 px-4 py-3.5 rounded-2xl shadow-lg flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse flex-shrink-0" />
                    <div className="text-left leading-none">
                      <span className="block font-black text-slate-800 text-[11px] mb-0.5">Ready for immediate onboarding</span>
                      <span className="text-[9px] font-extrabold text-slate-400">CONTACT WAREHOUSE SORTING TEAM</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* 5. CTA Section */}
        <section className="bg-slate-50 py-12 md:py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-[#0B1528] rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[200%] bg-blue-600 rounded-full blur-[140px] opacity-20 pointer-events-none" />
              <div className="absolute bottom-[-50%] right-[-20%] w-[60%] h-[200%] bg-cyan-500 rounded-full blur-[140px] opacity-15 pointer-events-none" />

              <FadeIn direction="up" className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
                  Ready to Scale Your Logistics?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                  Join thousands of businesses that trust iKart Express for their daily operations. Get a custom quote tailored to your business volume.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/contact" className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#E5A500] text-slate-900 font-extrabold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-[#FFB800]/15 text-sm">
                    Contact Sales Team
                  </a>
                  <a href="/contact" className="inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-extrabold py-3.5 px-8 rounded-xl transition-all duration-200 bg-slate-950/30 backdrop-blur-sm text-sm">
                    Calculate Shipping
                  </a>
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

export default Services;
