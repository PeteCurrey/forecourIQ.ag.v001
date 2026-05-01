"use client";

const integrations = [
  "AutoTrader",
  "eBay Motors",
  "CarGurus",
  "Motors.co.uk",
  "Stripe",
  "Xero",
  "FCA Compliance",
  "Evolution Funding",
  "Close Brothers",
];

export default function Integrations() {
  return (
    <section id="integrations" className="bg-[#0A1228] py-32 overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-[#00D4AA] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
              Ecosystem
            </span>
            <h2 className="font-syne text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Integrated with the <br />
              Platforms you use.
            </h2>
            <p className="text-[#8896AB] text-lg leading-relaxed">
              No more double entry. ForecourIQ connects directly to the UK's leading 
              advertising portals and finance providers.
            </p>
          </div>

          <div className="lg:w-1/2">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {integrations.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0F1729] border border-[#1E2A40] rounded-xl px-5 py-3 text-white/70 text-sm font-medium hover:border-[#00D4AA]/30 hover:text-white transition-all whitespace-nowrap cursor-default hover:scale-[1.05] duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
