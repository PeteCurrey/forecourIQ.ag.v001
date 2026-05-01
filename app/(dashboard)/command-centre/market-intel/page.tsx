"use client";

import { useState } from "react";
import { 
  Search, 
  Map, 
  TrendingUp, 
  Info,
  ChevronDown,
  Activity,
  Globe,
  Sparkles
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const priceDistData = [
  { range: "£14k-16k", count: 12 },
  { range: "£16k-18k", count: 28 },
  { range: "£18k-20k", count: 45 },
  { range: "£20k-22k", count: 32 },
  { range: "£22k-24k", count: 18 },
  { range: "£24k+", count: 10 },
];

const regions = [
  { name: "North West", score: 92 },
  { name: "East Midlands", score: 88 },
  { name: "London", score: 85 },
  { name: "South East", score: 82 },
  { name: "West Midlands", score: 79 },
  { name: "Yorkshire", score: 76 },
  { name: "Scotland", score: 68 },
  { name: "South West", score: 65 },
];

export default function MarketIntelPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVehicle, setActiveVehicle] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveVehicle("BMW 3 Series");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-syne font-bold mb-1">Market Intelligence</h1>
          <p className="text-slate-brand">Live demand signals across the UK automotive ecosystem.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSearch} className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-brand group-focus-within:text-green-data transition-colors" />
          <input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text" 
            placeholder="Search a make and model (e.g. BMW 3 Series)..." 
            className="w-full bg-dms-surface border border-dms-border rounded-2xl pl-16 pr-6 py-6 text-xl text-white outline-none focus:ring-2 focus:ring-green-data/30 shadow-2xl transition-all"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
             <span className="text-[10px] font-bold text-slate-brand uppercase tracking-widest hidden md:block">Press Enter to Scan</span>
             <kbd className="hidden md:block bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-slate-brand font-mono">↵</kbd>
          </div>
        </form>
      </div>

      {activeVehicle ? (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8">
           {/* Top Stats Row */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-dms-surface p-6 rounded-2xl border border-dms-border text-center">
                 <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest mb-4">Demand Score</p>
                 <div className="relative w-24 h-12 mx-auto mb-2">
                    <svg className="w-full h-full transform translate-y-2">
                       <path d="M 0 40 A 40 40 0 0 1 80 40" fill="none" stroke="currentColor" strokeWidth="12" className="text-white/5" />
                       <path d="M 0 40 A 40 40 0 0 1 80 40" fill="none" stroke="currentColor" strokeWidth="12" 
                         strokeDasharray={Math.PI * 40} 
                         strokeDashoffset={Math.PI * 40 * (1 - 0.88)} 
                         className="text-green-data" />
                    </svg>
                    <span className="absolute inset-0 flex items-end justify-center font-mono font-bold text-2xl">88</span>
                 </div>
                 <p className="text-xs font-bold text-green-data">STRONG DEMAND</p>
              </div>

              {[
                { label: "Avg. Asking Price", value: "£22,450", sub: "UK Avg: £21,900" },
                { label: "Avg. Days to Sell", value: "18 days", sub: "UK Avg: 24 days" },
                { label: "Total Listings", value: "1,245", sub: "East Midlands: 142" },
              ].map((stat, i) => (
                <div key={i} className="bg-dms-surface p-6 rounded-2xl border border-dms-border flex flex-col justify-center text-center">
                   <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                   <p className="text-2xl font-mono font-bold text-white mb-1">{stat.value}</p>
                   <p className="text-[10px] text-slate-brand">{stat.sub}</p>
                </div>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Price Distribution */}
              <div className="bg-dms-surface p-8 rounded-2xl border border-dms-border">
                 <h3 className="text-lg font-bold mb-8">Price Distribution</h3>
                 <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={priceDistData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E2A40" />
                          <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{fill: '#8896AB', fontSize: 10}} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#8896AB', fontSize: 10}} />
                          <Tooltip contentStyle={{ backgroundColor: '#0F1729', border: '1px solid #1E2A40', borderRadius: '12px' }} />
                          <Bar dataKey="count" fill="#00D4AA" radius={[4, 4, 0, 0]} />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              {/* Regional Heatmap */}
              <div className="bg-dms-surface rounded-2xl border border-dms-border overflow-hidden">
                 <div className="p-8 border-b border-dms-border">
                    <h3 className="text-lg font-bold">Regional Demand Heatmap</h3>
                 </div>
                 <div className="overflow-hidden">
                    <table className="w-full text-left">
                       <tbody className="divide-y divide-dms-border">
                          {regions.map((r, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                               <td className="px-8 py-4 text-sm font-medium">{r.name}</td>
                               <td className="px-8 py-4">
                                  <div className="flex items-center gap-4">
                                     <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden max-w-[120px]">
                                        <div className="h-full bg-green-data" style={{ width: `${r.score}%`, opacity: r.score/100 }} />
                                     </div>
                                     <span className="text-xs font-mono font-bold text-slate-brand">{r.score}</span>
                                  </div>
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>

           {/* AI Insight Box */}
           <div className="bg-green-data/5 border border-green-data/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-green-data/10">
                 <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                 <h3 className="text-xl font-syne font-bold text-green-data mb-6 flex items-center gap-2">
                    AI Sourcing Insight <Sparkles className="w-5 h-5" />
                 </h3>
                 <p className="text-lg text-slate-brand leading-relaxed max-w-4xl">
                   Based on current signals, the optimal {activeVehicle} configuration to source for the East Midlands is the **2021 M Sport (G20)** in Dravit Grey or Portimao Blue. Focus on 2.0L Diesel units with under 40,000 miles and a full service history. Local supply is currently constricted for these specific specs, allowing for a **premium pricing strategy** (+£450 over UK average). Targeted acquisition under £19,800 should yield an 18%+ gross margin with a turnover window of 14-16 days.
                 </p>
              </div>
           </div>
        </div>
      ) : (
        <div className="py-24 text-center space-y-12">
           <div className="inline-flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-brand">
                 <Globe className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                 <h2 className="text-2xl font-bold">Ready to scan the market?</h2>
                 <p className="text-slate-brand max-w-md">Search any make and model to see live regional demand, price distribution, and AI buying insights.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
              {[
                { title: "Regional Heatmaps", desc: "Compare demand across all UK regions to find buying arbitrage opportunities.", icon: Map },
                { title: "Price Histograms", desc: "See where the market is clustered and identify price gaps for your stock.", icon: Activity },
                { title: "Demand Velocity", desc: "Track how fast specific models are moving vs your historical performance.", icon: TrendingUp },
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-dms-surface rounded-2xl border border-dms-border">
                   <div className="w-10 h-10 rounded-lg bg-green-data/10 flex items-center justify-center text-green-data mb-4">
                      <feature.icon className="w-5 h-5" />
                   </div>
                   <h4 className="font-bold mb-2">{feature.title}</h4>
                   <p className="text-xs text-slate-brand leading-relaxed">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      )}
    </div>
  );
}
