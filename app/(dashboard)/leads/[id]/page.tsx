"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar, 
  User, 
  MapPin, 
  Clock,
  Send,
  MoreVertical,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const mockLead = {
  id: "1",
  name: "David Wilson",
  email: "david.wilson@example.com",
  phone: "07123 456 789",
  vehicle: {
    id: "v1",
    name: "2021 BMW 3 Series",
    reg: "LJ71 XYZ",
    price: "£24,950",
    image: "/bmw-thumb.jpg"
  },
  source: "AutoTrader",
  status: "contacted",
  created_at: "2026-05-01T10:12:00Z",
  finance_interest: true,
  part_ex: "AV15 KLR (Audi A3)",
};

const activities = [
  { id: 1, type: "call", content: "Outbound call: No answer, left voicemail.", user: "Sarah Owner", time: "2h ago" },
  { id: 2, type: "email", content: "Email sent: Standard follow-up with finance examples.", user: "System", time: "3h ago" },
  { id: 3, type: "status_change", content: "Status changed from New to Contacted", user: "Sarah Owner", time: "3h ago" },
  { id: 4, type: "note", content: "Customer mentioned they need to sell their Audi A3 first. Part-ex valuation requested.", user: "Sarah Owner", time: "4h ago" },
];

export default function LeadDetailPage() {
  const [status, setStatus] = useState(mockLead.status);

  const pipeline = [
    { id: "new", label: "New" },
    { id: "contacted", label: "Contacted" },
    { id: "test_drive", label: "Test Drive" },
    { id: "offer", label: "Offer" },
    { id: "won", label: "Won" },
  ];

  return (
    <div className="space-y-8">
      {/* Top Header & Pipeline */}
      <div className="bg-dms-surface rounded-2xl border border-dms-border p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 rounded-full bg-green-data/10 flex items-center justify-center text-green-data text-2xl font-bold">
               DW
             </div>
             <div>
                <h1 className="text-3xl font-bold">{mockLead.name}</h1>
                <p className="text-slate-brand flex items-center gap-2">
                  <span className="font-bold text-white/60">{mockLead.source}</span> · Received 5h ago
                </p>
             </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="bg-white/5 border border-white/10 p-3 rounded-lg text-slate-brand hover:text-white transition-all">
              <Phone className="w-5 h-5" />
            </button>
            <button className="bg-white/5 border border-white/10 p-3 rounded-lg text-slate-brand hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </button>
            <button className="bg-green-data text-navy px-6 py-3 font-bold rounded-lg flex items-center gap-2 hover:scale-[1.02] transition-transform">
              <CheckCircle2 className="w-5 h-5" />
              Mark as Won
            </button>
          </div>
        </div>

        <div className="flex items-center w-full">
           {pipeline.map((step, i) => {
             const isPast = pipeline.findIndex(s => s.id === status) >= i;
             const isCurrent = status === step.id;
             return (
               <div key={step.id} className="flex-1 flex items-center">
                 <div className="relative flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                      isPast ? "bg-green-data text-navy" : "bg-white/5 text-slate-brand border border-white/10"
                    }`}>
                      {isPast ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                    </div>
                    <span className={`absolute top-10 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${
                      isCurrent ? "text-green-data" : "text-slate-brand"
                    }`}>
                      {step.label}
                    </span>
                 </div>
                 {i < pipeline.length - 1 && (
                   <div className={`flex-1 h-[2px] mx-4 transition-all duration-500 ${
                     pipeline.findIndex(s => s.id === status) > i ? "bg-green-data" : "bg-white/5"
                   }`} />
                 )}
               </div>
             );
           })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Info */}
        <div className="space-y-8">
           <div className="bg-dms-surface rounded-2xl border border-dms-border overflow-hidden">
              <div className="p-6 border-b border-dms-border">
                <h3 className="text-lg font-bold">Enquiry Information</h3>
              </div>
              <div className="p-6 space-y-6">
                 <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-brand uppercase tracking-widest">Interested Vehicle</p>
                    <Link href={`/stock/${mockLead.vehicle.id}`} className="group flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-green-data/30 transition-all">
                       <div className="w-12 h-10 bg-white/10 rounded flex items-center justify-center text-[8px] font-black">IMAGE</div>
                       <div>
                          <p className="text-sm font-bold group-hover:text-green-data transition-colors">{mockLead.vehicle.name}</p>
                          <p className="text-[10px] font-mono text-slate-brand">{mockLead.vehicle.reg} · {mockLead.vehicle.price}</p>
                       </div>
                       <ArrowRight className="w-4 h-4 ml-auto text-slate-brand group-hover:text-green-data transition-colors" />
                    </Link>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold text-slate-brand uppercase tracking-widest">Email</p>
                       <p className="text-sm">{mockLead.email}</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold text-slate-brand uppercase tracking-widest">Phone</p>
                       <p className="text-sm">{mockLead.phone}</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold text-slate-brand uppercase tracking-widest">Finance Interest</p>
                       <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-data/10 text-green-data">YES</span>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold text-slate-brand uppercase tracking-widest">Part Exchange</p>
                       <p className="text-sm">{mockLead.part_ex}</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-dms-surface rounded-2xl border border-dms-border p-6">
              <h3 className="text-lg font-bold mb-4">Follow-up Reminder</h3>
              <div className="space-y-4">
                 <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-brand" />
                    <input type="date" className="w-full bg-dms-bg border border-dms-border rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none" />
                 </div>
                 <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bold hover:bg-white/10 transition-all">
                    SCHEDULE FOLLOW-UP
                 </button>
              </div>
           </div>
        </div>

        {/* Right Column - Timeline */}
        <div className="lg:col-span-2 flex flex-col h-full">
           <div className="bg-dms-surface rounded-2xl border border-dms-border flex-1 flex flex-col">
              <div className="p-6 border-b border-dms-border">
                <h3 className="text-lg font-bold">Activity Timeline</h3>
              </div>
              
              <div className="p-6 border-b border-dms-border bg-white/2">
                 <div className="flex gap-4">
                    <div className="flex-1 relative">
                       <textarea 
                         rows={2} 
                         placeholder="Add a note or log an activity..." 
                         className="w-full bg-dms-bg border border-dms-border rounded-xl p-4 text-sm outline-none focus:ring-1 focus:ring-green-data resize-none"
                       />
                       <div className="absolute right-3 bottom-3 flex items-center gap-2">
                          <select className="bg-white/5 border border-white/10 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-widest outline-none">
                             <option>Note</option>
                             <option>Call</option>
                             <option>Email</option>
                             <option>SMS</option>
                          </select>
                          <button className="p-2 bg-green-data text-navy rounded-lg hover:scale-105 transition-transform">
                             <Send className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                 {activities.map((activity) => (
                   <div key={activity.id} className="relative pl-10">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                         {activity.type === 'call' && <Phone className="w-4 h-4 text-blue-400" />}
                         {activity.type === 'email' && <Mail className="w-4 h-4 text-warning" />}
                         {activity.type === 'note' && <MessageSquare className="w-4 h-4 text-slate-brand" />}
                         {activity.type === 'status_change' && <CheckCircle2 className="w-4 h-4 text-green-data" />}
                      </div>
                      <div className="space-y-1">
                         <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-white">{activity.user}</p>
                            <p className="text-[10px] font-mono text-slate-brand">{activity.time}</p>
                         </div>
                         <p className="text-sm text-slate-brand leading-relaxed">{activity.content}</p>
                      </div>
                      <div className="absolute left-4 top-10 bottom-[-32px] w-[1px] bg-white/5 last:hidden" />
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
