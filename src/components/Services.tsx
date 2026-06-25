import {
  Zap,
  ShoppingCart,
  Truck,
  Warehouse,
  RefreshCw,
  MapPin,
  ArrowRight,
} from "lucide-react";
import FadeIn from "./FadeIn";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-commerce Logistics",
      desc: "Complete fulfillment, COD handling and returns management.",
    },
    {
      icon: Truck,
      title: "Cargo Services",
      desc: "Reliable transportation solutions across Kerala and India.",
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      desc: "Secure inventory storage with real-time stock visibility.",
    },
    {
      icon: RefreshCw,
      title: "Reverse Logistics",
      desc: "Streamlined returns and product recovery operations.",
    },
    {
      icon: MapPin,
      title: "Last Mile Delivery",
      desc: "Fast and efficient doorstep delivery solutions.",
    },
  ];

  return (<section
    id="services"
    className="py-24 bg-gradient-to-b from-white to-slate-50"
  > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <FadeIn direction="up">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
            Logistics Solutions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            One Logistics Partner
            <span className="block text-primary-600">
              For Every Business Need
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            From warehousing and fulfillment to nationwide transportation,
            we provide integrated logistics solutions that help businesses
            move faster and grow smarter.
          </p>
        </div>
      </FadeIn>

      {/* Featured Card */}
      <FadeIn direction="up" delay={0.2}>
        <div className="relative overflow-hidden rounded-[32px] bg-[#0B1528] text-white p-10 md:p-14 mb-10">
          <div className="absolute right-0 top-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Zap size={32} />
            </div>

            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Express Delivery Services
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Time-critical deliveries powered by a strong distribution
              network, advanced tracking technology and dedicated support
              teams across Kerala and India.
            </p>

            <a
              href="/services#express-parcel"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:gap-4 transition-all"
            >
              Explore Service
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <FadeIn key={index} direction="up" delay={0.3 + index * 0.1}>
              <div className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-primary-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center text-primary-600 font-semibold text-sm">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  </section>

  );
};

export default Services;
