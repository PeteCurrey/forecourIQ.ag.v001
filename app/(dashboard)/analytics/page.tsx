"use client";

import { useState } from "react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Calendar, Download, TrendingUp, TrendingDown, Info } from "lucide-react";

const revenueData = [
  { month: 'Jan', revenue: 145000 },
  { month: 'Feb', revenue: 168000 },
  { month: 'Mar', revenue: 152000 },
  { month: 'Apr', revenue: 198000 },
  { month: 'May', revenue: 215000 },
];

const sourceData = [
  { name: 'AutoTrader', value: 45 },
  { name: 'Website', value: 25 },
  { name: 'eBay', value: 15 },
  { name: 'CarGurus', value: 10 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#00D4AA', '#00D4AA88', '#00D4AA44', '#00D4AA22', '#FFFFFF11'];

export default function AnalyticsPage() {
  const [range, setRange] = useState("30d");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Performance Intelligence</h1>
          <p className="text-slate-brand">Aggregated data across all sales channels.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-dms-surface rounded-lg p-1 border border-dms-border">
            {["7d", "30d", "90d", "YTD"].map((r) => (
              <button 
                key={r}
                onClick={() => setRange(r)}
                className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${range === r ? "bg-white/10 text-white" : "text-slate-brand hover:text-white"}`}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="p-3 bg-white/5 border border-white/10 rounded-lg text-slate-brand hover:text-white transition-all">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-dms-surface p-8 rounded-2xl border border-dms-border">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-[10px] font-bold text-slate-brand uppercase tracking-widest mb-1">Revenue Performance</p>
              <h3 className="text-2xl font-bold font-mono">£215,480.00</h3>
            </div>
            <div className="flex items-center gap-2 text-green-data bg-green-data/10 px-3 py-1 rounded-full text-xs font-bold">
              <TrendingUp className="w-3 h-3" />
              +12.4%
            </div>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D4AA" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00D4AA" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E2A40" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#8896AB', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#8896AB', fontSize: 12}} tickFormatter={(v) => `£${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0F1729', border: '1px solid #1E2A40', borderRadius: '12px' }}
                  itemStyle={{ color: '#00D4AA' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#00D4AA" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Sources */}
        <div className="bg-dms-surface p-8 rounded-2xl border border-dms-border">
          <h3 className="text-lg font-bold mb-8">Inquiry Sources</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4 mt-4">
             {sourceData.map((s, i) => (
               <div key={s.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                     <span className="text-xs text-slate-brand">{s.name}</span>
                  </div>
                  <span className="text-xs font-bold font-mono">{s.value}%</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Stock Turn Rate", value: "8.4x", trend: "+0.2", color: "text-green-data" },
          { label: "Conversion Rate", value: "22.4%", trend: "+2.1%", color: "text-green-data" },
          { label: "Avg. Days to Sell", value: "28.5", trend: "-2.4", color: "text-green-data" },
          { label: "Avg. Margin/Unit", value: "£2,450", trend: "-£120", color: "text-danger" },
        ].map((stat, i) => (
          <div key={i} className="bg-dms-surface p-6 rounded-2xl border border-dms-border">
            <p className="text-[10px] font-bold text-slate-brand uppercase tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
               <p className="text-2xl font-bold font-mono">{stat.value}</p>
               <span className={`text-[10px] font-bold ${stat.trend.startsWith('+') && stat.color === 'text-green-data' ? 'text-green-data' : 'text-danger'}`}>
                 {stat.trend}
               </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
