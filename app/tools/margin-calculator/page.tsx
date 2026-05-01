"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calculator, AlertTriangle, Sparkles } from "lucide-react";

export default function MarginCalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState<number>(10000);
  const [prepCost, setPrepCost] = useState<number>(350);
  const [transportCost, setTransportCost] = useState<number>(150);
  const [hasVAT, setHasVAT] = useState<boolean>(false);
  const [askingPrice, setAskingPrice] = useState<number>(12500);

  // Derived state
  const [grossProfit, setGrossProfit] = useState<number>(0);
  const [netProfit, setNetProfit] = useState<number>(0);
  const [grossMarginPct, setGrossMarginPct] = useState<number>(0);
  const [netMarginPct, setNetMarginPct] = useState<number>(0);
  const [breakEven, setBreakEven] = useState<number>(0);

  useEffect(() => {
    // Basic calculation logic
    const totalCost = purchasePrice + prepCost + transportCost;
    
    // Simplistic VAT margin scheme logic (assuming qualifying car)
    const margin = askingPrice - totalCost;
    const vatOwed = hasVAT && margin > 0 ? margin * (1/6) : 0; // 1/6th of margin is VAT roughly
    
    const gross = askingPrice - purchasePrice;
    const net = margin - vatOwed;
    
    setGrossProfit(gross);
    setNetProfit(net);
    setGrossMarginPct((gross / askingPrice) * 100 || 0);
    setNetMarginPct((net / askingPrice) * 100 || 0);
    setBreakEven(totalCost + (hasVAT ? (totalCost * 0.2) : 0));

  }, [purchasePrice, prepCost, transportCost, hasVAT, askingPrice]);

  const carsFor10k = netProfit > 0 ? Math.ceil(10000 / netProfit) : 0;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dms-bg text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-6">
               <Calculator className="w-8 h-8 text-green-data" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-4">Car Dealer Margin Calculator</h1>
            <p className="text-lg text-slate-brand">
              Calculate your exact gross and net margins, accounting for prep, transport, and the VAT margin scheme.
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            
            {/* Inputs */}
            <div className="lg:col-span-7 bg-dms-surface border border-dms-border p-8 rounded-2xl">
               <h2 className="text-xl font-bold mb-6 border-b border-dms-border pb-4">Vehicle Costs</h2>
               
               <div className="space-y-6">
                  <div>
                     <label className="block text-sm font-bold text-slate-brand mb-2">Purchase Price (£)</label>
                     <input 
                       type="number" 
                       value={purchasePrice}
                       onChange={(e) => setPurchasePrice(Number(e.target.value))}
                       className="w-full bg-dms-bg border border-dms-border rounded-xl p-4 text-xl font-mono text-white outline-none focus:border-green-data"
                     />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-bold text-slate-brand mb-2">Prep Costs (£)</label>
                        <input 
                          type="number" 
                          value={prepCost}
                          onChange={(e) => setPrepCost(Number(e.target.value))}
                          className="w-full bg-dms-bg border border-dms-border rounded-xl p-4 text-lg font-mono text-white outline-none focus:border-green-data"
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-slate-brand mb-2">Transport (£)</label>
                        <input 
                          type="number" 
                          value={transportCost}
                          onChange={(e) => setTransportCost(Number(e.target.value))}
                          className="w-full bg-dms-bg border border-dms-border rounded-xl p-4 text-lg font-mono text-white outline-none focus:border-green-data"
                        />
                     </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                     <input 
                        type="checkbox" 
                        id="vat" 
                        checked={hasVAT}
                        onChange={(e) => setHasVAT(e.target.checked)}
                        className="w-5 h-5 accent-green-data"
                     />
                     <label htmlFor="vat" className="text-sm font-bold select-none cursor-pointer">Calculate VAT Margin Scheme (16.67% of profit)</label>
                  </div>

                  <div className="pt-6 border-t border-dms-border mt-6">
                     <label className="block text-sm font-bold text-green-data mb-2">Retail Asking Price (£)</label>
                     <input 
                       type="number" 
                       value={askingPrice}
                       onChange={(e) => setAskingPrice(Number(e.target.value))}
                       className="w-full bg-navy border-2 border-green-data/50 rounded-xl p-5 text-2xl font-mono font-bold text-white outline-none focus:border-green-data shadow-[0_0_20px_rgba(0,212,170,0.1)]"
                     />
                  </div>
               </div>
            </div>

            {/* Outputs */}
            <div className="lg:col-span-5 space-y-6">
               <div className="bg-navy border border-green-data/30 p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                     <Calculator className="w-32 h-32 text-white" />
                  </div>
                  
                  <h3 className="text-sm font-bold text-green-data uppercase tracking-widest mb-6">Profitability</h3>
                  
                  <div className="space-y-6 relative z-10">
                     <div>
                        <p className="text-slate-brand text-sm mb-1">Gross Profit</p>
                        <p className="text-4xl font-mono font-bold text-white">£{grossProfit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                        <p className="text-xs text-slate-brand mt-1">Margin: {grossMarginPct.toFixed(1)}%</p>
                     </div>
                     
                     <div className="pt-4 border-t border-white/10">
                        <p className="text-slate-brand text-sm mb-1">Net Profit (After Prep & VAT)</p>
                        <p className={`text-4xl font-mono font-bold ${netProfit > 0 ? 'text-green-data' : 'text-red-500'}`}>
                           £{netProfit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                        </p>
                        <p className="text-xs text-slate-brand mt-1">Net Margin: {netMarginPct.toFixed(1)}%</p>
                     </div>
                  </div>
               </div>

               <div className="bg-dms-surface border border-dms-border p-6 rounded-2xl">
                  <h3 className="text-sm font-bold text-slate-brand uppercase tracking-widest mb-4">Break-even Point</h3>
                  <p className="text-xl font-mono font-bold text-white">£{breakEven.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
               </div>

               {carsFor10k > 0 && (
                 <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl flex gap-4 items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-orange-200 leading-relaxed">
                       You would need to sell <strong className="text-white text-lg font-mono">{carsFor10k}</strong> cars per month at this exact margin to generate £10,000 in net profit.
                    </p>
                 </div>
               )}
            </div>
         </div>

         {/* CTA */}
         <div className="max-w-5xl mx-auto mt-12 bg-green-data/10 border border-green-data/30 p-8 rounded-2xl text-center">
            <Sparkles className="w-8 h-8 text-green-data mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Want AI to optimise your buying decisions?</h3>
            <p className="text-slate-brand mb-6">ForecourIQ's Command Centre tells you exactly what stock is selling fastest and at what margin in your local area.</p>
            <Link href="/demo" className="bg-green-data text-navy font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform inline-block">
               Try ForecourIQ Free
            </Link>
         </div>

      </div>
    </div>
  );
}
