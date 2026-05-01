"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  TrendingUp, 
  Target, 
  Eye, 
  ChevronRight,
  ArrowUpRight,
  AlertCircle
} from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";

export default function CommandCentrePage() {
  const [healthScore] = useState(82);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-syne font-bold mb-1 flex items-center gap-2">
            Command Centre <Sparkles className="w-6 h-6 text-green-data" />
          </h1>
          <p className="text-slate-brand">AI-powered market intelligence for smarter buying decisions.</p>
        </div>
        <Link 
          href="/command-centre/chat"
          className="bg-navy border border-green-data/30 text-green-data px-6 py-3 font-bold rounded-lg flex items-center gap-2 hover:bg-green-data/10 transition-all"
        >
          <MessageSquare className="w-5 h-5" />
          Ask AI Analyst
        </Link>
      </div>

      {/* Top Row KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-dms-surface p-6 rounded-2xl border border-dms-border relative overflow-hidden group">
           <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 rounded-xl bg-green-data/10">
                 <TrendingUp className="w-5 h-5 text-green-data" />
              </div>
              <span className="text-[10px] font-bold text-slate-brand uppercase tracking-widest">Health Score</span>
           </div>
           <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                  <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" 
                    strokeDasharray={2 * Math.PI * 36} 
                    strokeDashoffset={2 * Math.PI * 36 * (1 - healthScore/100)} 
                    className="text-green-data transition-all duration-1000" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-xl">{healthScore}</span>
              </div>
              <div>
                <p className="text-green-data font-bold text-sm">OPTIMAL</p>
                <p className="text-[10px] text-slate-brand">Updated 2h ago</p>
              </div>
           </div>
        </div>

        <KPICard title="Buying Opportunities" value="8" delta="New" icon={Target} status="success" />
        <KPICard title="Watchlist Activity" value="14" delta="+3" icon={Eye} />
        <KPICard title="Stock Efficiency" value="92%" delta="+4%" icon={ArrowUpRight} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Buying Recommendations Preview */}
        <div className="bg-dms-surface rounded-2xl border border-dms-border overflow-hidden">
          <div className="p-6 border-b border-dms-border flex justify-between items-center">
            <h3 className="text-lg font-bold">Top Buying Opportunities</h3>
            <Link href="/command-centre/buying-list" className="text-xs font-bold text-green-data hover:underline flex items-center gap-1">
              VIEW FULL LIST <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="p-6 space-y-4">
             {[
               { make: "BMW", model: "3 Series", year: "2019-2022", demand: 94, buy: "19,500", sell: "24,500", margin: "4,200", reason: "High regional demand for M Sport trims with <40k miles." },
               { make: "Ford", model: "Puma", year: "2020-2023", demand: 88, buy: "16,800", sell: "20,500", margin: "3,100", reason: "Shortage of ST-Line inventory in East Midlands." },
               { make: "Tesla", model: "Model 3", year: "2020-2022", demand: 82, buy: "24,000", sell: "28,500", margin: "3,800", reason: "Price bottomed out; secondary market demand spiking." }
             ].map((rec, i) => (
               <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-green-data/30 transition-all group">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-white group-hover:text-green-data transition-colors">{rec.make} {rec.model}</h4>
                      <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest">{rec.year}</p>
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="text-xs font-mono font-bold text-green-data">{rec.demand}</span>
                       <span className="text-[8px] text-slate-brand uppercase font-bold">Demand</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-[8px] text-slate-brand uppercase font-bold mb-1">Target Buy</p>
                      <p className="text-xs font-mono font-bold">£{rec.buy}</p>
                    </div>
                    <div>
                      <p className="text-[8px] text-slate-brand uppercase font-bold mb-1">Target Sell</p>
                      <p className="text-xs font-mono font-bold">£{rec.sell}</p>
                    </div>
                    <div>
                      <p className="text-[8px] text-green-data uppercase font-bold mb-1">Est. Margin</p>
                      <p className="text-xs font-mono font-bold text-green-data">£{rec.margin}</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-brand leading-relaxed italic border-t border-white/5 pt-3">
                    "{rec.reason}"
                  </p>
               </div>
             ))}
          </div>
        </div>

        {/* Market Pulse Preview */}
        <div className="bg-dms-surface rounded-2xl border border-dms-border overflow-hidden">
           <div className="p-6 border-b border-dms-border flex justify-between items-center">
            <h3 className="text-lg font-bold">Market Pulse — East Midlands</h3>
            <span className="text-[10px] font-bold text-slate-brand uppercase tracking-widest">LIVE DATA</span>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-bold text-slate-brand uppercase tracking-widest border-b border-dms-border">
                    <th className="px-6 py-4">Make / Model</th>
                    <th className="px-6 py-4">Demand</th>
                    <th className="px-6 py-4">Avg Price</th>
                    <th className="px-6 py-4 text-right">Days to Sell</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dms-border">
                   {[
                     { make: "BMW", model: "3 Series", demand: 94, price: "£22,450", days: 18 },
                     { make: "VW", model: "Golf", demand: 91, price: "£18,200", days: 14 },
                     { make: "Audi", model: "A3", demand: 89, price: "£19,800", days: 16 },
                     { make: "Ford", model: "Puma", demand: 88, price: "£20,100", days: 15 },
                     { make: "Tesla", model: "Model 3", demand: 82, price: "£27,500", days: 22 },
                     { make: "Nissan", model: "Qashqai", demand: 79, price: "£17,400", days: 25 },
                     { make: "Mercedes", model: "A-Class", demand: 78, price: "£21,200", days: 24 },
                     { make: "Toyota", model: "Yaris", demand: 76, price: "£14,500", days: 19 },
                   ].map((item, i) => (
                     <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-3">
                          <p className="text-sm font-bold">{item.make} {item.model}</p>
                        </td>
                        <td className="px-6 py-3">
                           <div className="flex items-center gap-2">
                              <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden max-w-[40px]">
                                 <div className="h-full bg-green-data" style={{ width: `${item.demand}%` }} />
                              </div>
                              <span className="text-[10px] font-mono font-bold text-green-data">{item.demand}</span>
                           </div>
                        </td>
                        <td className="px-6 py-3 text-xs font-mono">{item.price}</td>
                        <td className="px-6 py-3 text-right text-xs font-mono text-slate-brand">{item.days}d</td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </div>

      {/* Stock Gap Alerts */}
      <div className="bg-dms-surface p-6 rounded-2xl border border-dms-border">
         <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-5 h-5 text-warning" />
            <h3 className="text-lg font-bold">AI Stock Gap Alerts</h3>
         </div>
         <div className="flex flex-wrap gap-4">
            {[
              { label: "Hybrid SUVs", demand: 92, status: "critical" },
              { label: "Automatic Hatchbacks", demand: 85, status: "high" },
              { label: "Electric Executive Saloons", demand: 78, status: "medium" },
              { label: "Small Automatics (<£15k)", demand: 96, status: "critical" }
            ].map((gap, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 pl-4 pr-2 py-2 rounded-full">
                 <span className="text-sm font-bold text-white">{gap.label}</span>
                 <span className={`px-2 py-1 rounded-full text-[10px] font-black ${
                   gap.status === 'critical' ? 'bg-danger/20 text-danger' : 
                   gap.status === 'high' ? 'bg-warning/20 text-warning' : 'bg-green-data/20 text-green-data'
                 }`}>
                   {gap.demand} DEMAND
                 </span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}

function MessageSquare({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
