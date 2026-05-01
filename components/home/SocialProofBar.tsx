export default function SocialProofBar() {
  const dealers = [
    "Midlands Motor Group",
    "Peak Cars",
    "Apex Motor Group",
    "First Choice Cars",
    "Heritage Motors",
    "Elite Automotive",
  ];

  return (
    <section className="bg-slate-light py-10 overflow-hidden border-y border-navy/5">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="text-navy font-bold text-sm uppercase tracking-widest">Used by 100+ UK Dealers</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-data" />
            <span className="text-navy font-bold text-sm uppercase tracking-widest">★★★★★ Rated</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-data" />
            {dealers.map((dealer) => (
              <div key={dealer} className="flex items-center gap-12">
                <span className="text-navy/40 font-syne font-bold text-lg grayscale hover:grayscale-0 transition-all cursor-default">
                  {dealer}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-data" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
