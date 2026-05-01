"use client";

import { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  LayoutGrid, 
  List,
  MoreVertical,
  Calendar,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const initialLeads = [
  { id: "1", name: "David Wilson", vehicle: "BMW 3 Series", source: "AutoTrader", status: "new", time: "12m ago", price: "£24,950" },
  { id: "2", name: "Sarah Miller", vehicle: "Audi A4", source: "Website", status: "contacted", time: "1h ago", price: "£18,450" },
  { id: "3", name: "Robert Taylor", vehicle: "Ford Puma", source: "eBay", status: "test_drive", time: "2h ago", price: "£21,200" },
  { id: "4", name: "Emma Brown", vehicle: "VW Golf", source: "offer", status: "offer", time: "4h ago", price: "£26,500" },
  { id: "5", name: "James Knight", vehicle: "Mercedes A-Class", source: "AutoTrader", status: "won", time: "1d ago", price: "£22,400" },
  { id: "6", name: "Alice Cooper", vehicle: "Jaguar F-PACE", source: "Walk-in", status: "new", time: "15m ago", price: "£32,950" },
];

const columns = [
  { id: "new", title: "New Enquiry" },
  { id: "contacted", title: "Contacted" },
  { id: "test_drive", title: "Test Drive" },
  { id: "offer", title: "Offer Made" },
  { id: "won", title: "Won" },
  { id: "lost", title: "Lost" },
];

export default function LeadsPage() {
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Lead Pipeline</h1>
          <p className="text-slate-brand">128 leads this month · 22.4% conversion rate</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-dms-surface rounded-lg p-1 border border-dms-border mr-2">
            <button 
              onClick={() => setViewMode("kanban")}
              className={`p-2 rounded-md transition-all ${viewMode === "kanban" ? "bg-white/10 text-white" : "text-slate-brand hover:text-white"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-white/10 text-white" : "text-slate-brand hover:text-white"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <button className="bg-green-data text-navy px-6 py-3 font-bold rounded-lg flex items-center gap-2 hover:scale-[1.02] transition-transform">
            <Plus className="w-5 h-5" />
            Manual Lead
          </button>
        </div>
      </div>

      {viewMode === "kanban" ? (
        <div className="flex-1 overflow-x-auto pb-4">
          <div className="flex gap-6 min-h-full">
            {columns.map((column) => (
              <div key={column.id} className="flex-shrink-0 w-80 flex flex-col gap-4">
                <div className="flex items-center justify-between px-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-brand flex items-center gap-2">
                    {column.title}
                    <span className="bg-white/5 px-2 py-0.5 rounded-full text-[10px]">
                      {initialLeads.filter(l => l.status === column.id).length}
                    </span>
                  </h3>
                  <button className="text-slate-brand hover:text-white transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex-1 space-y-4">
                  {initialLeads
                    .filter((l) => l.status === column.id)
                    .map((lead) => (
                      <LeadCard key={lead.id} lead={lead} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <LeadListTable leads={initialLeads} />
      )}
    </div>
  );
}

function LeadCard({ lead }: { lead: any }) {
  return (
    <Link 
      href={`/leads/${lead.id}`}
      className={`block p-5 bg-dms-surface border border-dms-border rounded-xl hover:border-green-data/50 transition-all group ${
        lead.status === 'won' ? 'shadow-[0_0_20px_rgba(0,212,170,0.1)] border-green-data/20' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-bold text-white group-hover:text-green-data transition-colors">{lead.name}</h4>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
          lead.source === 'AutoTrader' ? 'bg-blue-500/10 text-blue-400' :
          lead.source === 'Website' ? 'bg-green-data/10 text-green-data' :
          'bg-white/5 text-slate-brand'
        }`}>
          {lead.source}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-brand">
          <Car className="w-3 h-3" />
          <span className="text-white/80 font-medium">{lead.vehicle}</span>
          <span className="text-[10px] font-mono opacity-50 ml-auto">{lead.price}</span>
        </div>
        
        <div className="flex items-center gap-4 pt-3 border-t border-white/5">
           <div className="flex items-center gap-1.5 text-[10px] text-slate-brand">
              <Calendar className="w-3 h-3" />
              {lead.time}
           </div>
           <div className="flex items-center gap-1.5 text-[10px] text-slate-brand">
              <MessageSquare className="w-3 h-3" />
              2 notes
           </div>
        </div>
      </div>
    </Link>
  );
}

function LeadListTable({ leads }: { leads: any[] }) {
  return (
    <div className="bg-dms-surface rounded-xl border border-dms-border overflow-hidden">
       <table className="w-full text-left">
          <thead className="border-b border-dms-border">
             <tr className="text-[10px] font-bold text-slate-brand uppercase tracking-widest">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Vehicle</th>
                <th className="px-6 py-4">Source</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Contact</th>
                <th className="px-6 py-4 text-right">Actions</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-dms-border">
             {leads.map(lead => (
               <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                 <td className="px-6 py-4 font-bold">{lead.name}</td>
                 <td className="px-6 py-4 text-sm">{lead.vehicle}</td>
                 <td className="px-6 py-4">
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/5">{lead.source}</span>
                 </td>
                 <td className="px-6 py-4">
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/10">{lead.status.toUpperCase()}</span>
                 </td>
                 <td className="px-6 py-4 text-xs font-mono text-slate-brand">{lead.time}</td>
                 <td className="px-6 py-4 text-right">
                    <Link href={`/leads/${lead.id}`} className="text-green-data hover:underline font-bold text-xs">VIEW</Link>
                 </td>
               </tr>
             ))}
          </tbody>
       </table>
    </div>
  );
}

function Car({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  );
}
