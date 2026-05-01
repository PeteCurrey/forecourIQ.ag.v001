const testimonials = [
  {
    quote:
      "We went from 45 days average to sell down to 28 days in the first quarter. The AI buying list is the most useful tool I've used in 15 years of trading.",
    author: "James Mellor",
    title: "Director",
    company: "Peak Cars Ltd",
    location: "Derbyshire",
    metric: "−38%",
    metricLabel: "Days to Sell",
  },
  {
    quote:
      "The website alone was worth it. We're now ranking for half a dozen local search terms we never showed up for before. Enquiries doubled in 90 days.",
    author: "Sarah Chen",
    title: "Managing Director",
    company: "Apex Motor Group",
    location: "Sheffield",
    metric: "2×",
    metricLabel: "Enquiries",
  },
  {
    quote:
      "Setup was two days. The team migrated all our stock data and we were live on AutoTrader through the new system the same week. Absolutely seamless.",
    author: "Ravi Patel",
    title: "Owner",
    company: "First Choice Cars",
    location: "Leicester",
    metric: "48h",
    metricLabel: "Go Live",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080E1D] via-navy to-navy pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-green-data" />
              <span className="text-green-data font-bold text-[11px] tracking-[0.25em] uppercase">
                Dealer Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white max-w-xl leading-[1.1]">
              Built for Dealers,<br />Proven in the Field.
            </h2>
          </div>
          <div className="flex gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-green-data fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-white/4 border border-white/10 rounded-2xl p-8 hover:border-green-data/25 hover:bg-white/6 transition-all duration-500"
            >
              {/* Metric badge */}
              <div className="absolute top-6 right-6 text-right">
                <p className="font-syne font-bold text-2xl text-green-data leading-none">{t.metric}</p>
                <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold mt-0.5">
                  {t.metricLabel}
                </p>
              </div>

              {/* Quote mark */}
              <div className="mb-5">
                <svg className="w-8 h-8 text-green-data/20 fill-current" viewBox="0 0 32 32">
                  <path d="M10 8v8h6v8h-8v-8H4V8h6zm14 0v8h6v8h-8v-8h-4V8h6z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-white/80 text-[15px] leading-relaxed flex-1 mb-8 italic">
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div className="border-t border-white/8 pt-6 flex items-center gap-4">
                {/* Avatar initial */}
                <div className="w-10 h-10 rounded-full bg-green-data/10 border border-green-data/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-data font-bold text-sm font-syne">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-syne font-bold text-white text-sm">{t.author}</p>
                  <p className="text-slate-brand text-xs">
                    {t.title} · {t.company}, {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-16 pt-12 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "100+", label: "Active UK Dealerships" },
            { val: "48h", label: "Average Setup Time" },
            { val: "£3.8k", label: "Avg Monthly Margin Gain" },
            { val: "★★★★★", label: "Customer Rating" },
          ].map((stat) => (
            <div key={stat.val}>
              <p className="font-syne font-bold text-2xl md:text-3xl text-white mb-1">{stat.val}</p>
              <p className="text-slate-brand text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
