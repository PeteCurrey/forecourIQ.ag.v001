import Link from "next/link";
import { Metadata } from "next";
import { TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Used Car Pricing Guide for Dealerships | ForecourIQ",
  description: "Learn how to price your used car stock to maximise margin without sacrificing your inventory turnover rate.",
};

export default function PricingGuidePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
         
         <div className="mb-12">
            <Link href="/tools" className="text-sm font-bold text-green-data hover:underline flex items-center gap-2 mb-6">
               ← Back to Tools
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mb-6">
               <TrendingUp className="w-8 h-8 text-green-data" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-syne font-bold text-navy mb-6 tracking-tight">Used Car Pricing Guide</h1>
            <p className="text-xl text-slate-brand leading-relaxed">
              How to find the sweet spot between maximum margin and optimal days-to-sell. Stop guessing and start using data to price your forecourt.
            </p>
         </div>

         <div className="prose prose-lg prose-slate max-w-none">
            <h2>The Pricing Dilemma: Margin vs. Velocity</h2>
            <p>Every independent dealer faces the same core dilemma: price a car high to maximise the gross margin, or price it sharply to turn the metal quickly. Get it wrong, and you either leave money on the table or tie up capital in depreciating stock for 90+ days.</p>

            <h2>Rule 1: Know Your Regional Market</h2>
            <p>National averages are dangerous. A diesel SUV might sit for 60 days in London due to ULEZ, but sell in 14 days in North Yorkshire. Pricing must be dictated by <strong>local demand</strong>, not national aggregates.</p>

            <h2>Rule 2: The "First 14 Days" Premium</h2>
            <p>Data shows that your best chance of achieving maximum margin is within the first 14 days of a vehicle going live. This is when the vehicle triggers new listing alerts on classified platforms. If you price too high initially, you waste this golden window. If the car sits for 30 days, the eventual sale price is almost always lower than if it had been priced realistically from day one.</p>

            <h2>Rule 3: Spec and Condition Justify the Premium</h2>
            <p>You can price above the market average, but you must justify it digitally. If your car is £500 more than an identical model 5 miles away, your listing must do the heavy lifting:</p>
            <ul>
               <li>Highlight factory options (Pan roof, upgraded audio).</li>
               <li>Ensure the imagery is significantly better than the competitor's.</li>
               <li>Offer a better warranty or prep standard.</li>
            </ul>

            <div className="bg-green-data/10 p-8 rounded-2xl border border-green-data/30 my-12">
               <h3 className="mt-0 text-navy font-syne font-bold text-2xl mb-4">How ForecourIQ Automates Pricing Strategy</h3>
               <p className="mb-0">Our AI Command Centre takes the emotion out of pricing. By analysing live AutoTrader data in your specific county, ForecourIQ tells you exactly what the market will bear for a specific make and model today.</p>
            </div>

            <h2>Using AI to Audit Your Pricing</h2>
            <p>The ForecourIQ Portfolio Health Analysis constantly scans your live stock against the local market. It flags:</p>
            
            <ul className="not-prose space-y-4 my-8">
               {[
                 "Vehicles priced too high against current local demand.",
                 "Stock that has passed its optimal 45-day sales window.",
                 "Margin opportunities where you are priced too far below market average.",
                 "Seasonal shifts (e.g., dropping prices on convertibles in October)."
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
            <h2 className="text-3xl font-syne font-bold mb-4">Price Your Stock with Confidence</h2>
            <p className="text-lg text-slate-brand mb-8 max-w-2xl mx-auto">
               Get live market demand data and AI pricing recommendations built directly into your DMS.
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
