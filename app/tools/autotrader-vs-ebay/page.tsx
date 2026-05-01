import Link from "next/link";
import { Metadata } from "next";
import { Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AutoTrader vs eBay Motors for Independent Car Dealers | ForecourIQ",
  description: "An in-depth guide comparing AutoTrader and eBay Motors. Learn which platform offers the best ROI for UK independent car dealerships.",
};

export default function AutoTraderVsEbayPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
         
         <div className="mb-12">
            <Link href="/tools" className="text-sm font-bold text-green-data hover:underline flex items-center gap-2 mb-6">
               ← Back to Tools
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mb-6">
               <Scale className="w-8 h-8 text-green-data" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-syne font-bold text-navy mb-6 tracking-tight">AutoTrader vs eBay Motors</h1>
            <p className="text-xl text-slate-brand leading-relaxed">
              The ultimate 2026 guide for UK independent car dealers. We break down the costs, the audience, and the lead quality to help you decide where to spend your marketing budget.
            </p>
         </div>

         <div className="prose prose-lg prose-slate max-w-none">
            <h2>The Changing Landscape of Automotive Classifieds</h2>
            <p>For decades, AutoTrader has been the undisputed king of UK automotive classifieds. However, as subscription costs continue to rise, independent dealers are increasingly looking at eBay Motors (and Motors.co.uk) as viable alternatives to diversify their lead generation.</p>

            <h2>1. Audience Reach & Intent</h2>
            <p><strong>AutoTrader</strong> boasts the largest dedicated automotive audience in the UK. The intent here is exceptionally high. Buyers on AutoTrader are typically further down the purchasing funnel—they know what they want and are comparing specific vehicles and dealer reputations.</p>
            <p><strong>eBay Motors</strong> benefits from the massive overall traffic of the eBay platform. While the automotive-specific intent might be slightly lower, the sheer volume of eyeballs is undeniable. It also attracts a slightly different demographic, often buyers looking for a specific deal or a rarer vehicle.</p>

            <h2>2. Listing Costs & Pricing Structures</h2>
            <p>This is where the platforms diverge significantly.</p>
            <ul>
               <li><strong>AutoTrader:</strong> Operates on a tiered subscription model based on your stock volume. It is generally the most expensive platform, but it arguably offers the highest ROI in terms of raw sales conversion.</li>
               <li><strong>eBay Motors:</strong> Often more flexible. You can opt for classified ad formats or auction formats. For dealers, the "Motors Pro" packages offer a more competitive cost-per-listing compared to AutoTrader's upper tiers.</li>
            </ul>

            <h2>3. Lead Quality vs. Lead Volume</h2>
            <p>Dealers consistently report that AutoTrader produces higher quality leads. An AutoTrader enquiry is more likely to convert to an appointment and a sale. eBay Motors often generates higher <em>volume</em>, but you may spend more time filtering out low-ball offers and time-wasters.</p>

            <div className="bg-slate-light p-8 rounded-2xl border border-navy/5 my-12">
               <h3 className="mt-0 text-navy font-syne font-bold text-2xl mb-4">The Verdict: Which Should You Use?</h3>
               <p className="mb-0">You shouldn't be asking "Which one?"—you should be asking "How do I manage both efficiently?" Relying entirely on one platform is a risk. A blended approach allows you to capture the high-intent AutoTrader buyers while scooping up volume from eBay Motors.</p>
            </div>

            <h2>How ForecourIQ Solves the Multi-Platform Headache</h2>
            <p>Managing stock across both platforms used to mean double-keying data, risking double-selling a car, and logging into multiple portals. ForecourIQ acts as your central hub:</p>
            
            <ul className="not-prose space-y-4 my-8">
               {[
                 "Enter a vehicle once into the ForecourIQ DMS.",
                 "Automatically syndicate to both AutoTrader and eBay Motors with one click.",
                 "Price changes update instantly across all platforms.",
                 "All leads (from your website, AutoTrader, and eBay) drop into a single CRM."
               ].map((item, i) => (
                 <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-data shrink-0" />
                    <span className="font-medium text-navy">{item}</span>
                 </li>
               ))}
            </ul>

         </div>

         {/* CTA */}
         <div className="mt-16 bg-navy text-white p-10 rounded-2xl text-center shadow-xl">
            <h2 className="text-3xl font-syne font-bold mb-4">Stop Double Keying Data</h2>
            <p className="text-lg text-slate-brand mb-8 max-w-2xl mx-auto">
               Manage AutoTrader, eBay Motors, and your own high-ranking website from a single dashboard.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/demo" className="btn-primary">Start Free Trial</Link>
               <Link href="/pricing" className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg font-bold transition-all">View Pricing</Link>
            </div>
         </div>

      </div>
    </div>
  );
}
