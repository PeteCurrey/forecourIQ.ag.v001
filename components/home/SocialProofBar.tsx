export default function SocialProofBar() {
  const dealers = [
    "Midlands Motor Group",
    "Peak Cars",
    "Apex Motor Group",
    "First Choice Cars",
    "Heritage Motors",
    "Elite Automotive",
    "Prestige Auto Group",
    "Northern Motor Co.",
  ];

  return (
    <section className="bg-white/5 border-y border-white/10 py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 px-6 shrink-0">
            <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
              Used by 100+ UK Dealers
            </span>
            <span className="text-green-data text-xs">★★★★★</span>
            <div className="w-1 h-1 rounded-full bg-green-data" />
            {dealers.map((dealer) => (
              <div key={dealer} className="flex items-center gap-10">
                <span className="text-white/30 font-syne font-bold text-sm hover:text-white/60 transition-colors cursor-default">
                  {dealer}
                </span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
