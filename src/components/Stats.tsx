const Stats = () => {
  const stats = [
    { value: "50,000+", label: "DELIVERIES COMPLETED" },
    { value: "1,000+", label: "LOGISTICS CLIENTS" },
    { value: "99%", label: "ON-TIME DELIVERY" },
    { value: "24/7", label: "EXPERT SUPPORT" },
  ];

  return (
    <section className="bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-500 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
