"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarClock, Sparkles, TrendingUp, Search } from "lucide-react";

export default function DaysToSellEstimatorPage() {
  const [make, setMake] = useState("BMW");
  const [model, setModel] = useState("");
  const [region, setRegion] = useState("East Midlands");
  const [isEstimating, setIsEstimating] = useState(false);
  const [result, setResult] = useState<{ days: number, benchmark: number, text: string } | null>(null);

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!model) return;

    setIsEstimating(true);
    // Simulate network delay / calculation
    setTimeout(() => {
      // Mock logic for days to sell based on inputs
      const baseDays = make === "Ford" ? 22 : make === "BMW" ? 18 : 25;
      const resultDays = baseDays + Math.floor(Math.random() * 10) - 5;
      const benchmarkDays = 30; // National average
      
      setResult({
        days: resultDays,
        benchmark: benchmarkDays,
        text: `In the ${region}, a ${make} ${model} is currently in high demand. It sells approximately ${benchmarkDays - resultDays} days faster than the national average for used cars. Ensure it is priced competitively within £500 of the market average to achieve this turnover rate.`
      });
      setIsEstimating(false);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dms-bg text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-6">
               <CalendarClock className="w-8 h-8 text-green-data" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-4">Days to Sell Estimator</h1>
            <p className="text-lg text-slate-brand">
              Check regional demand to forecast how long a specific make and model will sit on your forecourt.
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Input Form */}
            <div className="bg-dms-surface border border-dms-border p-8 rounded-2xl">
               <form onSubmit={handleEstimate} className="space-y-6">
                  <div>
                     <label className="block text-sm font-bold text-slate-brand mb-2">Make</label>
                     <select 
                       value={make} 
                       onChange={(e) => setMake(e.target.value)}
                       className="w-full bg-dms-bg border border-dms-border rounded-xl p-4 text-white outline-none focus:border-green-data"
                     >
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Ford</option>
                        <option>Mercedes-Benz</option>
                        <option>Volkswagen</option>
                        <option>Vauxhall</option>
                        <option>Nissan</option>
                     </select>
                  </div>
                  
                  <div>
                     <label className="block text-sm font-bold text-slate-brand mb-2">Model</label>
                     <input 
                       type="text" 
                       value={model}
                       onChange={(e) => setModel(e.target.value)}
                       placeholder="e.g. 3 Series, Fiesta, Golf..."
                       className="w-full bg-dms-bg border border-dms-border rounded-xl p-4 text-white outline-none focus:border-green-data"
                       required
                     />
                  </div>

                  <div>
                     <label className="block text-sm font-bold text-slate-brand mb-2">UK Region</label>
                     <select 
                       value={region} 
                       onChange={(e) => setRegion(e.target.value)}
                       className="w-full bg-dms-bg border border-dms-border rounded-xl p-4 text-white outline-none focus:border-green-data"
                     >
                        <option>East Midlands</option>
                        <option>Greater London</option>
                        <option>North West</option>
                        <option>South East</option>
                        <option>West Midlands</option>
                        <option>Yorkshire</option>
                        <option>Scotland</option>
                     </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isEstimating || !model}
                    className="w-full bg-green-data text-navy font-bold p-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                     {isEstimating ? (
                        <>Calculating...</>
                     ) : (
                        <><Search className="w-5 h-5" /> Estimate Days to Sell</>
                     )}
                  </button>
               </form>
            </div>

            {/* Results Area */}
            <div className="bg-navy border border-green-data/30 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                  <TrendingUp className="w-48 h-48 text-white" />
               </div>

               {result ? (
                 <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <p className="text-sm font-bold text-green-data uppercase tracking-widest mb-6">Estimated Turnover</p>
                    
                    <div className="flex items-end gap-4 mb-8">
                       <span className="text-7xl font-mono font-bold text-white">{result.days}</span>
                       <span className="text-xl text-slate-brand mb-2">Days</span>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-green-data/20 text-green-data flex items-center justify-center shrink-0">
                          <TrendingUp className="w-6 h-6" />
                       </div>
                       <div>
                          <p className="text-sm text-slate-brand">Vs National Average ({result.benchmark} days)</p>
                          <p className="font-bold text-green-data">{result.benchmark - result.days} days faster</p>
                       </div>
                    </div>

                    <p className="text-sm text-slate-light leading-relaxed">
                       {result.text}
                    </p>
                 </div>
               ) : (
                 <div className="text-center relative z-10 opacity-50">
                    <CalendarClock className="w-16 h-16 mx-auto mb-4 text-slate-brand" />
                    <p className="text-slate-brand">Enter vehicle details to see local demand data.</p>
                 </div>
               )}
            </div>
         </div>

         {/* CTA */}
         <div className="max-w-5xl mx-auto mt-12 bg-dms-surface border border-dms-border p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-green-data/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-green-data" />
               </div>
               <div>
                  <h3 className="font-bold text-white">Unlock Live Market Data</h3>
                  <p className="text-sm text-slate-brand">Get real-time days-to-sell data for every vehicle in your stock with ForecourIQ.</p>
               </div>
            </div>
            <Link href="/pricing" className="btn-primary whitespace-nowrap">
               View Pricing
            </Link>
         </div>

      </div>
    </div>
  );
}
