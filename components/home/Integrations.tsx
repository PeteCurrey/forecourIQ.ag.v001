const row1 = ["AutoTrader", "eBay Motors", "CarGurus", "Motors.co.uk", "Facebook Marketplace", "CAP HPI", "DVLA", "BCA Auctions"];
const row2 = ["Manheim", "Codeweavers", "iVendi", "Evolution Funding", "Stripe", "Xero", "Twilio", "AutoConvert"];

export default function Integrations() {
  return (
    <section id="integrations" className="py-32 bg-navy overflow-hidden">
      <div className="container-wide mb-16 text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-4">
          Connected to the UK Automotive Ecosystem
        </h2>
        <p className="text-slate-brand text-lg">
          Zero friction. We sync with the tools you already use every day.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {row1.map((item) => (
                <div
                  key={item}
                  className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-white/80 font-bold text-sm tracking-wide hover:bg-white/10 hover:border-green-data/30 transition-all cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {row2.map((item) => (
                <div
                  key={item}
                  className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-white/80 font-bold text-sm tracking-wide hover:bg-white/10 hover:border-green-data/30 transition-all cursor-default"
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
