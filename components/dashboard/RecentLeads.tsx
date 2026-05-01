"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const recentLeads = [
  { id: 1, name: "David Wilson", vehicle: "2021 BMW 3 Series", source: "AutoTrader", status: "New", time: "12m ago" },
  { id: 2, name: "Sarah Miller", vehicle: "2019 Audi A4", source: "Website", status: "Contacted", time: "1h ago" },
  { id: 3, name: "Robert Taylor", vehicle: "2022 Ford Puma", source: "eBay", status: "New", time: "2h ago" },
  { id: 4, name: "Emma Brown", vehicle: "2020 VW Golf", source: "AutoTrader", status: "Test Drive", time: "4h ago" },
  { id: 5, name: "James Knight", vehicle: "2018 Mercedes A-Class", source: "Phone", status: "Offer", time: "5h ago" },
];

export default function RecentLeads() {
  return (
    <div className="bg-dms-surface rounded-2xl border border-dms-border overflow-hidden">
      <div className="p-6 border-b border-dms-border flex justify-between items-center">
        <h3 className="text-lg font-bold">Recent Leads</h3>
        <Link href="/leads" className="text-xs font-bold text-green-data hover:underline flex items-center gap-1">
          VIEW PIPELINE <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold text-slate-brand uppercase tracking-widest border-b border-dms-border">
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Vehicle</th>
              <th className="px-6 py-4">Source</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dms-border">
            {recentLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-white">{lead.name}</p>
                </td>
                <td className="px-6 py-4 text-sm text-slate-brand">
                  {lead.vehicle}
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded border ${
                    lead.source === 'AutoTrader' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' :
                    lead.source === 'Website' ? 'border-green-data/30 text-green-data bg-green-data/5' :
                    'border-white/10 text-slate-brand bg-white/5'
                  }`}>
                    {lead.source.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-1 rounded">
                    {lead.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-xs text-slate-brand font-mono">
                  {lead.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
