import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA";

const faqs = [
  {
    q: "How long does setup take?",
    a: "We can have your website and DMS live in as little as 48 hours. Our team handles the data migration from your current provider (Click Dealer, SpidersNet, etc.) at no extra cost.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. All our monthly plans are rolling 30-day contracts. We believe in earning your business every month. Annual plans offer a discount but aren't mandatory.",
  },
  {
    q: "Can I keep my current domain name?",
    a: "Absolutely. We'll handle the DNS configuration to point your existing domain to our high-speed Next.js servers.",
  },
  {
    q: "Is ForecourIQ HMRC MTD compliant?",
    a: "Yes. Our DMS is fully Making Tax Digital compliant. You can generate VAT returns and export data directly to Xero or Sage in one click.",
  },
  {
    q: "Where does the AI market data come from?",
    a: "Our engine scrapes and analyzes over 500,000 live UK listings daily across all major portals, combined with historical auction data and local demand signals.",
  },
  {
    q: "Do I need a separate HPI account?",
    a: "No, we have a deep integration with CAP HPI. You can run checks directly within the ForecourIQ dashboard, billed per check or included in higher tiers.",
  },
];

export const metadata = {
  title: "Pricing | ForecourIQ",
  description: "Transparent pricing for UK independent dealers. Start your 14-day free trial today.",
};

export default function PricingPage() {
  return (
    <div className="pt-24">
      <Pricing />
      
      {/* Comparison Table */}
      <section className="py-24 bg-slate-light">
        <div className="container-wide">
          <h2 className="text-3xl font-syne font-bold text-center mb-16">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b-2 border-navy/10">
                  <th className="p-6 font-syne text-navy">Features</th>
                  <th className="p-6 font-syne text-navy">Starter</th>
                  <th className="p-6 font-syne text-navy text-green-data">Professional</th>
                  <th className="p-6 font-syne text-navy">Elite</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  "Next.js 15 Website",
                  "Stock Capacity",
                  "AutoTrader Integration",
                  "eBay & CarGurus Sync",
                  "DVLA Reg Lookup",
                  "Lead CRM",
                  "AI Market Insights",
                  "AI Buying Recommendations",
                  "HMRC MTD Reporting",
                  "FCA Audit Trail",
                  "API Access",
                ].map((feature, i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-white/50" : "bg-transparent"}>
                    <td className="p-6 font-bold">{feature}</td>
                    <td className="p-6">{i < 6 ? "✓" : "—"}</td>
                    <td className="p-6 text-green-data font-bold">{i < 10 ? "✓" : "—"}</td>
                    <td className="p-6">✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-syne font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold mb-4 text-navy">{faq.q}</h3>
                <p className="text-slate-brand leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
