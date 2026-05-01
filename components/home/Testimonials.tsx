const testimonials = [
  {
    quote: "We went from 45 days average to sell down to 28 days in the first quarter. The AI buying list is the most useful tool I've used in 15 years of trading.",
    author: "James Mellor",
    company: "Peak Cars Ltd, Derbyshire",
  },
  {
    quote: "The website alone was worth it. We're now ranking for half a dozen local search terms we never showed up for before. Enquiries doubled in 90 days.",
    author: "Sarah Chen",
    company: "Apex Motor Group, Sheffield",
  },
  {
    quote: "Setup was two days. The team migrated all our stock data and we were live on AutoTrader through the new system the same week.",
    author: "Ravi Patel",
    company: "First Choice Cars, Leicester",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-navy text-white">
      <div className="container-wide">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">Built for Dealers, by Dealers</h2>
          <div className="flex justify-center gap-1">
             {[...Array(5)].map((_, i) => (
               <svg key={i} className="w-6 h-6 text-green-data fill-current" viewBox="0 0 24 24">
                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
               </svg>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-10 rounded-2xl flex flex-col justify-between border-white/5 hover:border-green-data/20 transition-all group">
              <div>
                <div className="text-green-data mb-6 opacity-40">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v8h6v8h-8v-8H4V8h6zm14 0v8h6v8h-8v-8h-4V8h6z" />
                  </svg>
                </div>
                <p className="text-xl leading-relaxed mb-8 font-medium italic text-white/90">
                  "{t.quote}"
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-syne font-bold text-white">{t.author}</p>
                <p className="text-slate-brand text-sm">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
