"use client";

import { useState } from "react";
import { 
  Eye, 
  Settings2, 
  ExternalLink, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Plus
} from "lucide-react";
import Link from "next/link";

const watchedVehicles = [
  {
    id: 1,
    source: "autotrader_private",
    reg: "AV19 KLR",
    make: "Audi",
    model: "A4",
    year: 2019,
    mileage: 42100,
    price: "£16,500",
    location: "12 miles from dealership",
    risk: "low",
    retail: "£19,800",
    maxBuy: "£17,000",
    notes: "Clean MOT history. Private seller seems motivated based on price drops over last 7 days."
  },
  {
    id: 2,
    source: "facebook_marketplace",
    reg: "LJ71 XYZ",
    make: "BMW",
    model: "3 Series",
    year: 2021,
    mileage: 24500,
    price: "£21,000",
    location: "8 miles from dealership",
    risk: "medium",
    retail: "£24,950",
    maxBuy: "£20,500",
    notes: "Missing details on service history. Factor £300 additional prep risk if history is incomplete."
  },
  {
    id: 3,
    source: "gumtree",
    reg: "GP22 FMX",
    make: "Ford",
    model: "Puma",
    year: 2022,
    mileage: 12800,
    price: "£17,500",
    location: "25 miles from dealership",
    risk: "low",
    retail: "£21,200",
    maxBuy: "£18,000",
    notes: "Below market average. High demand locally. Contact immediately."
  }
];

export default function WatchlistPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-syne font-bold mb-1">Private & Trade Watchlist</h1>
          <p className="text-slate-brand">ForecourIQ AI monitors listings matching your criteria.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-green-data text-navy px-6 py-3 font-bold rounded-lg flex items-center gap-2 hover:scale-[1.02] transition-transform"
        >
          <Plus className="w-5 h-5" />
          MANUAL VEHICLE ADD
        </button>
      </div>

      {/* Buying Criteria Bar */}
      <div className="bg-dms-surface p-6 rounded-xl border border-dms-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
         <div>
            <h3 className="font-bold flex items-center gap-2 mb-2">
               <Settings2 className="w-4 h-4 text-green-data" /> 
               Active Monitoring Criteria
            </h3>
            <p className="text-sm text-slate-brand">Monitoring AutoTrader Private, Facebook Marketplace, and Gumtree daily.</p>
         </div>
         <div className="flex flex-wrap gap-3">
            {[
              "BMW / Audi / VW", 
              "Max Age: 6 Years", 
              "Max Mileage: 60k", 
              "Max Price: £30k",
              "Exclude Cat S/N"
            ].map((c, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white">
                {c}
              </span>
            ))}
            <button className="px-4 py-1.5 text-xs font-bold text-green-data hover:underline">
               EDIT CRITERIA
            </button>
         </div>
      </div>

      {/* Watchlist Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
         {watchedVehicles.map((v) => (
           <div key={v.id} className="bg-dms-surface rounded-2xl border border-dms-border overflow-hidden flex flex-col hover:border-green-data/30 transition-all group">
              <div className="p-6 border-b border-dms-border flex justify-between items-start">
                 <div>
                    <div className="flex items-center gap-3 mb-1">
                       <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-[10px] font-black font-mono tracking-tighter">
                          {v.reg}
                       </span>
                       <h3 className="text-lg font-bold">{v.year} {v.make} {v.model}</h3>
                    </div>
                    <p className="text-sm text-slate-brand">{v.mileage.toLocaleString()} miles · {v.location}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-2xl font-mono font-bold text-white mb-1">{v.price}</p>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
                      v.source === 'autotrader_private' ? 'bg-blue-500/10 text-blue-400' :
                      v.source === 'facebook_marketplace' ? 'bg-indigo-500/10 text-indigo-400' :
                      'bg-orange-500/10 text-orange-400'
                    }`}>
                      {v.source.replace('_', ' ')}
                    </span>
                 </div>
              </div>

              <div className="p-6 bg-white/2 border-b border-dms-border">
                 <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className={`w-4 h-4 ${v.risk === 'low' ? 'text-green-data' : 'text-warning'}`} />
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-brand">AI Assessment</h4>
                 </div>
                 <div className="grid grid-cols-2 gap-6 mb-4">
                    <div>
                       <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest mb-1">Est. Retail</p>
                       <p className="text-sm font-mono font-bold text-white">{v.retail}</p>
                    </div>
                    <div>
                       <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest mb-1">Rec. Max Buy</p>
                       <p className="text-sm font-mono font-bold text-green-data">{v.maxBuy}</p>
                    </div>
                 </div>
                 <p className="text-sm text-slate-brand italic">"{v.notes}"</p>
              </div>

              <div className="p-4 bg-white/5 flex gap-3">
                 <button className="flex-1 bg-white/5 border border-white/10 py-2.5 text-xs font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    VIEW LISTING
                 </button>
                 <button className="flex-1 bg-green-data/10 text-green-data py-2.5 text-xs font-bold rounded-lg hover:bg-green-data/20 transition-all flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    MARK CONTACTED
                 </button>
                 <button className="px-4 text-danger hover:bg-danger/10 rounded-lg transition-all">
                    <XCircle className="w-5 h-5" />
                 </button>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
