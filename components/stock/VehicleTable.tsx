"use client";

import Link from "next/link";
import { ExternalLink, MoreVertical } from "lucide-react";

const vehicles = [
  { id: "1", reg: "LJ71 XYZ", year: 2021, make: "BMW", model: "3 Series", variant: "320d M Sport", mileage: "24,500", price: "£24,950", cost: "£21,200", margin: "£3,750", marginPct: "15%", days: 48, status: "Available", platforms: ["AT", "EB"] },
  { id: "2", reg: "AV19 KLR", year: 2019, make: "Audi", model: "A4", variant: "35 TFSI S Line", mileage: "42,100", price: "£18,450", cost: "£16,800", margin: "£1,650", marginPct: "9%", days: 12, status: "Available", platforms: ["AT"] },
  { id: "3", reg: "GP22 FMX", year: 2022, make: "Ford", model: "Puma", variant: "1.0 ST-Line", mileage: "12,800", price: "£21,200", cost: "£18,900", margin: "£2,300", marginPct: "11%", days: 5, status: "Prep", platforms: [] },
  { id: "4", reg: "WN20 HUV", year: 2020, make: "VW", model: "Golf", variant: "2.0 TSI GTI", mileage: "31,500", price: "£26,500", cost: "£23,500", margin: "£3,000", marginPct: "11%", days: 22, status: "Reserved", platforms: ["AT", "EB", "CG"] },
];

export default function VehicleTable() {
  return (
    <div className="bg-dms-surface rounded-xl border border-dms-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold text-slate-brand uppercase tracking-widest border-b border-dms-border">
              <th className="px-6 py-4">Vehicle Details</th>
              <th className="px-6 py-4">Pricing</th>
              <th className="px-6 py-4">Margin</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Market Presence</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dms-border">
            {vehicles.map((v) => (
              <tr key={v.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-[10px] text-slate-brand">PHOTO</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-[10px] font-black font-mono tracking-tighter">
                          {v.reg}
                        </span>
                        <span className="text-sm font-bold text-white">{v.year} {v.make} {v.model}</span>
                      </div>
                      <p className="text-[10px] text-slate-brand font-medium truncate max-w-[200px]">
                        {v.variant} · {v.mileage} miles
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-mono font-bold text-white">{v.price}</p>
                  <p className="text-[10px] text-slate-brand font-mono">Cost: {v.cost}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className={`text-sm font-bold ${v.days > 40 ? 'text-warning' : 'text-green-data'}`}>
                      {v.margin}
                    </span>
                    <span className="text-[10px] text-slate-brand">{v.marginPct} ROI</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded w-fit ${
                      v.status === 'Available' ? 'bg-green-data/10 text-green-data' :
                      v.status === 'Prep' ? 'bg-warning/10 text-warning' :
                      'bg-blue-500/10 text-blue-400'
                    }`}>
                      {v.status.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono text-slate-brand">{v.days} days in stock</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {['AT', 'EB', 'CG'].map(p => (
                      <div key={p} className={`w-6 h-6 rounded flex items-center justify-center text-[8px] font-black border ${
                        v.platforms.includes(p) ? 'border-green-data/30 bg-green-data/10 text-green-data' : 'border-white/5 bg-white/5 text-white/10'
                      }`}>
                        {p}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/stock/${v.id}`} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-brand hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-brand">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
