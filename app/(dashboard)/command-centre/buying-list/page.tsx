"use client";

import { useState } from "react";
import { 
  Sparkles, 
  RefreshCcw, 
  Filter, 
  ChevronDown, 
  CheckCircle2, 
  Eye,
  AlertCircle,
  TrendingUp
} from "lucide-react";

export default function BuyingListPage() {
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerate = () => {
    setIsRegenerating(true);
    // Simulate API call
    setTimeout(() => setIsRegenerating(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-syne font-bold mb-1">AI Buying Recommendations</h1>
          <p className="text-slate-brand">Strategically prioritised vehicle sourcing for your region.</p>
        </div>
        <button 
          onClick={handleRegenerate}
          disabled={isRegenerating}
          className="bg-green-data text-navy px-6 py-3 font-bold rounded-lg flex items-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50"
        >
          <RefreshCcw className={`w-5 h-5 ${isRegenerating ? "animate-spin" : ""}`} />
          REGENERATE AI LIST
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-dms-surface p-4 rounded-xl border border-dms-border flex flex-wrap gap-4 items-center">
         <div className="flex items-center gap-2 px-3 py-2 bg-dms-bg border border-dms-border rounded-lg text-xs font-bold text-slate-brand">
            <Filter className="w-4 h-4" />
            FILTERS
         </div>
         <select className="bg-dms-bg border border-dms-border rounded-lg px-4 py-2 text-sm outline-none">
            <option>All Fuel Types</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
         </select>
         <select className="bg-dms-bg border border-dms-border rounded-lg px-4 py-2 text-sm outline-none">
            <option>Budget: Any</option>
            <option>Under £15,000</option>
            <option>£15k - £25k</option>
            <option>Over £25k</option>
         </select>
         <select className="bg-dms-bg border border-dms-border rounded-lg px-4 py-2 text-sm outline-none">
            <option>Min. Demand: 70+</option>
            <option>Min. Demand: 85+</option>
            <option>Min. Demand: 95+</option>
         </select>
      </div>

      {/* Recommendations List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
           <RecommendationCard key={i} index={i} />
         ))}
      </div>
    </div>
  );
}

function RecommendationCard({ index }: { index: number }) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-dms-surface rounded-2xl border border-dms-border overflow-hidden group hover:border-green-data/30 transition-all flex flex-col">
       <div className="p-8 border-b border-dms-border flex justify-between items-start">
          <div>
             <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-syne font-bold">BMW 3 Series</h3>
                <span className="bg-green-data/10 text-green-data text-[10px] font-black px-2 py-1 rounded uppercase">High Demand</span>
             </div>
             <p className="text-sm text-slate-brand">2019-2022 · Diesel · 30k-45k Miles</p>
          </div>
          <div className="text-right">
             <p className="text-3xl font-mono font-bold text-green-data">94</p>
             <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest">Demand Score</p>
          </div>
       </div>
       
       <div className="p-8 grid grid-cols-2 gap-12 border-b border-dms-border bg-white/2">
          <div className="space-y-4">
             <div className="flex justify-between items-center">
                <span className="text-xs text-slate-brand">Target Buy Price</span>
                <span className="text-sm font-mono font-bold text-white">£19,500</span>
             </div>
             <div className="flex justify-between items-center">
                <span className="text-xs text-slate-brand">Typical Prep</span>
                <span className="text-sm font-mono text-slate-brand">£450</span>
             </div>
             <div className="flex justify-between items-center pt-2 border-t border-white/5">
                <span className="text-xs font-bold text-green-data">Total Cost</span>
                <span className="text-sm font-mono font-bold text-green-data">£19,950</span>
             </div>
          </div>
          <div className="space-y-4">
             <div className="flex justify-between items-center">
                <span className="text-xs text-slate-brand">Projected Retail</span>
                <span className="text-sm font-mono font-bold text-white">£24,250</span>
             </div>
             <div className="flex justify-between items-center">
                <span className="text-xs text-slate-brand">Projected Margin</span>
                <span className="text-sm font-mono font-bold text-green-data">£4,300</span>
             </div>
             <div className="flex justify-between items-center pt-2 border-t border-white/5">
                <span className="text-xs font-bold text-green-data">Margin %</span>
                <span className="text-sm font-mono font-bold text-green-data">17.7%</span>
             </div>
          </div>
       </div>

       <div className="p-8 flex-1">
          <div className="flex items-center gap-2 mb-4">
             <AlertCircle className="w-4 h-4 text-green-data" />
             <h4 className="text-xs font-bold uppercase tracking-widest text-slate-brand">AI Reasoning</h4>
          </div>
          <p className="text-sm text-slate-brand leading-relaxed">
            Market supply for the 320d M Sport variant in East Midlands is currently 12% below the 90-day average, while enquiry volume has spiked by 8%. Based on your historical sales data, you average 14 days to sell for this model, which is 6 days faster than the regional benchmark. Target mileage under 40k to maximise margin retention.
          </p>
          
          <div className="mt-6 flex items-center gap-3 text-[10px] font-bold text-green-data">
             <TrendingUp className="w-3 h-3" />
             EST. DAYS TO SELL: 15 DAYS (FASTEST IN CATEGORY)
          </div>
       </div>

       <div className="p-4 bg-white/5 flex gap-4">
          <button className="flex-1 bg-green-data text-navy py-3 font-bold text-xs rounded-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
             <CheckCircle2 className="w-4 h-4" />
             MARK AS PURCHASED
          </button>
          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-slate-brand hover:text-white transition-all text-xs font-bold">
             ADD TO WATCHLIST
          </button>
          <button 
            onClick={() => setIsDismissed(true)}
            className="p-3 text-danger hover:bg-danger/10 rounded-lg transition-all"
          >
             <RefreshCcw className="w-4 h-4" />
          </button>
       </div>
    </div>
  );
}
