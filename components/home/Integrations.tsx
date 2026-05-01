const row1 = ["AutoTrader", "eBay Motors", "CarGurus", "Motors.co.uk", "Facebook Marketplace", "CAP HPI", "DVLA", "BCA Auctions"];
const row2 = ["Manheim", "Codeweavers", "iVendi", "Evolution Funding", "Stripe", "Xero", "Twilio", "AutoConvert"];

export default function Integrations() {
  return (
    <section id="integrations" className="py-32 bg-[#080E1D] overflow-hidden relative">
      {/* Top fade line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-green-data/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-wide mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-green-data" />
          <span className="text-green-data font-bold text-[11px] tracking-[0.25em] uppercase">Integrations</span>
          <div className="h-px w-8 bg-green-data" />
        </div>
        <h2 className="text-4xl md:text-5xl text-white mb-4">
          Connected to the UK<br />Automotive Ecosystem
        </h2>
        <p className="text-slate-brand text-lg max-w-md mx-auto">
          Zero friction. We sync with the tools you already use every day.
        </p>
      </div>

      <div className="flex flex-col gap-5 relative z-10">
        {/* Row 1 — left */}
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-5 px-2.5 shrink-0">
              {row1.map((item) => (
                <div
                  key={item}
                  className="bg-white/4 border border-white/8 px-7 py-4 rounded-2xl text-white/70 font-bold text-sm tracking-wide hover:bg-white/8 hover:border-green-data/25 hover:text-white transition-all duration-300 cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 — right */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-5 px-2.5 shrink-0">
              {row2.map((item) => (
                <div
                  key={item}
                  className="bg-white/4 border border-white/8 px-7 py-4 rounded-2xl text-white/70 font-bold text-sm tracking-wide hover:bg-white/8 hover:border-green-data/25 hover:text-white transition-all duration-300 cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
