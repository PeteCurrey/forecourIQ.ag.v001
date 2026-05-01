"use client";

import { useState } from "react";
import { 
  Activity, 
  ThumbsUp, 
  AlertTriangle, 
  Target, 
  Ban,
  RefreshCcw,
  Sparkles
} from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const fuelData = [
  { name: 'Diesel', value: 45 },
  { name: 'Petrol', value: 35 },
  { name: 'Hybrid', value: 15 },
  { name: 'Electric', value: 5 },
];

const COLORS = ['#0D1B3E', '#8896AB', '#00D4AA', '#FF4D4D'];

const stockVsDemandData = [
  { name: 'BMW', stock: 25, demand: 85 },
  { name: 'Audi', stock: 15, demand: 70 },
  { name: 'VW', stock: 10, demand: 90 },
  { name: 'Ford', stock: 35, demand: 40 },
  { name: 'Mercedes', stock: 15, demand: 60 },
];

export default function PortfolioPage() {
  const [isAnalysing, setIsAnalysing] = useState(false);

  const handleAnalyse = () => {
    setIsAnalysing(true);
    setTimeout(() => setIsAnalysing(false), 2500);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-syne font-bold mb-1">Portfolio Health Analysis</h1>
          <p className="text-slate-brand">AI-driven audit of your current stock against regional market demand.</p>
        </div>
        <button 
          onClick={handleAnalyse}
          disabled={isAnalysing}
          className="bg-green-data text-navy px-6 py-3 font-bold rounded-lg flex items-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50"
        >
          {isAnalysing ? <RefreshCcw className="w-5 h-5 animate-spin" /> : <Activity className="w-5 h-5" />}
          RUN FULL ANALYSIS
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Score Card */}
         <div className="bg-dms-surface rounded-2xl border border-dms-border p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-green-data/5">
               <Sparkles className="w-32 h-32" />
            </div>
            <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest mb-6 relative z-10">Overall Portfolio Score</p>
            <div className="relative w-48 h-48 mb-6 z-10">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-white/5" />
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="16" fill="transparent" 
                  strokeDasharray={2 * Math.PI * 88} 
                  strokeDashoffset={2 * Math.PI * 88 * (1 - 0.74)} 
                  className="text-warning transition-all duration-1000" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="font-mono font-bold text-5xl text-white">74</span>
                 <span className="text-xs font-bold text-warning uppercase mt-1">Needs Attention</span>
              </div>
            </div>
            <p className="text-sm text-slate-brand max-w-xs relative z-10">
               Your stock is generally healthy, but overexposure to slow-moving diesel units is dragging down your capital efficiency.
            </p>
         </div>

         {/* Strengths & Weaknesses */}
         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
               <h3 className="text-lg font-bold flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-green-data" /> Strengths
               </h3>
               {[
                 "Strong margin retention on premium hatchbacks (avg 18.2%).",
                 "Excellent pricing alignment to regional market averages on 80% of stock.",
                 "Fast turnover on petrol models under £15k (avg 14 days)."
               ].map((text, i) => (
                 <div key={i} className="p-4 bg-green-data/5 border border-green-data/20 rounded-xl">
                    <p className="text-sm text-white leading-relaxed">{text}</p>
                 </div>
               ))}
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-bold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-danger" /> Risks & Weaknesses
               </h3>
               {[
                 "Heavy overexposure to Ford diesel variants (35% of stock) against falling regional demand.",
                 "£65,000 in capital locked in aging stock (>60 days).",
                 "Missing inventory in the high-demand hybrid SUV segment."
               ].map((text, i) => (
                 <div key={i} className="p-4 bg-danger/5 border border-danger/20 rounded-xl">
                    <p className="text-sm text-white leading-relaxed">{text}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Opportunities */}
         <div className="lg:col-span-2 bg-dms-surface rounded-2xl border border-dms-border p-8">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
               <Target className="w-5 h-5 text-green-data" /> Immediate Opportunities
            </h3>
            <div className="space-y-4">
               {[
                 { title: "Liquidate Aging Ford Stock", desc: "Reduce asking prices by 4% on the 5 oldest Ford Fiesta/Focus models. Data shows this price break will trigger alert notifications for 200+ regional buyers on AutoTrader." },
                 { title: "Acquire Hybrid SUVs", desc: "Regional demand for Kia Sportage and Hyundai Tucson hybrids is at a 90-day high. Target 2-3 units at upcoming BCA auctions." },
                 { title: "Promote Premium Petrol", desc: "Your Audi A3 and BMW 1 Series petrol stock is highly desirable. Increase marketing spend on these specific listings." }
               ].map((opp, i) => (
                 <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-green-data/30 transition-all">
                    <h4 className="font-bold text-white mb-1">{opp.title}</h4>
                    <p className="text-sm text-slate-brand leading-relaxed">{opp.desc}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* Do Not Buy */}
         <div className="bg-dms-surface rounded-2xl border border-dms-border p-8">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
               <Ban className="w-5 h-5 text-danger" /> Do Not Buy List
            </h3>
            <p className="text-sm text-slate-brand mb-6">AI recommends halting acquisition of these models until current stock clears or market conditions improve.</p>
            <div className="space-y-3">
               {["Ford Kuga (Diesel)", "Nissan Qashqai (Pre-2018)", "Vauxhall Astra", "Any EV > £35k"].map((item, i) => (
                 <div key={i} className="px-4 py-3 bg-danger/10 border border-danger/20 rounded-lg flex items-center gap-3">
                    <Ban className="w-4 h-4 text-danger" />
                    <span className="text-sm font-bold text-white">{item}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-dms-surface rounded-2xl border border-dms-border p-8">
            <h3 className="text-lg font-bold mb-6">Stock Composition (Fuel Type)</h3>
            <div className="h-[300px] flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie data={fuelData} cx="50%" cy="50%" innerRadius={80} outerRadius={110} paddingAngle={2} dataKey="value">
                        {fuelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                     </Pie>
                     <Tooltip contentStyle={{ backgroundColor: '#0F1729', border: '1px solid #1E2A40', borderRadius: '8px' }} />
                  </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
               {fuelData.map((f, i) => (
                 <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-xs text-slate-brand">{f.name} ({f.value}%)</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-dms-surface rounded-2xl border border-dms-border p-8">
            <h3 className="text-lg font-bold mb-6">Stock vs. Market Demand</h3>
            <div className="h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stockVsDemandData}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E2A40" />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#8896AB', fontSize: 12}} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{fill: '#8896AB', fontSize: 12}} />
                     <Tooltip contentStyle={{ backgroundColor: '#0F1729', border: '1px solid #1E2A40', borderRadius: '8px' }} />
                     <Bar dataKey="stock" name="% of Your Stock" fill="#8896AB" radius={[4, 4, 0, 0]} />
                     <Bar dataKey="demand" name="Regional Demand Score" fill="#00D4AA" radius={[4, 4, 0, 0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
}
