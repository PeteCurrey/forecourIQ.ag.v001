"use client";

import { useState } from "react";
import { 
  Building2, 
  Users, 
  Share2, 
  CreditCard,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Dealership Profile", icon: Building2 },
    { id: "team", label: "Team Management", icon: Users },
    { id: "integrations", label: "Integrations", icon: Share2 },
    { id: "billing", label: "Billing & Plans", icon: CreditCard },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-1">System Settings</h1>
        <p className="text-slate-brand">Manage your dealership profile, team, and ecosystem connections.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? "bg-green-data text-navy" 
                    : "text-slate-brand hover:bg-white/5 hover:text-white"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-dms-surface rounded-2xl border border-dms-border p-8 min-h-[600px]">
           {activeTab === "profile" && <ProfileSettings />}
           {activeTab === "team" && <TeamSettings />}
           {activeTab === "integrations" && <IntegrationSettings />}
           {activeTab === "billing" && <BillingSettings />}
        </div>
      </div>
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
           <h3 className="text-lg font-bold">Dealership Details</h3>
           <div className="space-y-4">
              {[
                { label: "Dealership Name", value: "Peak Cars Ltd" },
                { label: "Public Email", value: "sales@peakcars.co.uk" },
                { label: "Phone Number", value: "0161 123 4567" },
                { label: "Website URL", value: "https://peakcars.co.uk" },
              ].map(f => (
                <div key={f.label} className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-slate-brand">{f.label}</label>
                   <input defaultValue={f.value} className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-green-data" />
                </div>
              ))}
           </div>
        </div>
        <div className="space-y-6">
           <h3 className="text-lg font-bold">Compliance Info</h3>
           <div className="space-y-4">
              {[
                { label: "VAT Number", value: "GB 123 4567 89" },
                { label: "FCA Firm Reference Number (FRN)", value: "123456" },
                { label: "Registered Company Address", value: "Innovation House, Manchester, M1 1AB", type: "textarea" },
              ].map(f => (
                <div key={f.label} className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-slate-brand">{f.label}</label>
                   {f.type === "textarea" ? (
                      <textarea defaultValue={f.value} rows={3} className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-green-data" />
                   ) : (
                      <input defaultValue={f.value} className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-green-data" />
                   )}
                </div>
              ))}
           </div>
        </div>
      </div>
      <div className="flex justify-end border-t border-dms-border pt-8">
         <button className="btn-primary px-8">SAVE PROFILE CHANGES</button>
      </div>
    </div>
  );
}

function TeamSettings() {
  const members = [
    { name: "Sarah Owner", email: "sarah@peakcars.co.uk", role: "Owner", status: "Active" },
    { name: "James Mellor", email: "james@peakcars.co.uk", role: "Sales Manager", status: "Active" },
    { name: "David Wilson", email: "david@peakcars.co.uk", role: "Sales Executive", status: "Invited" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
         <h3 className="text-lg font-bold">Team Members</h3>
         <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-bold hover:bg-white/10 transition-all">
           INVITE MEMBER
         </button>
      </div>
      
      <div className="border border-dms-border rounded-xl overflow-hidden">
         <table className="w-full text-left">
            <thead className="bg-white/5 border-b border-dms-border">
               <tr className="text-[10px] font-bold text-slate-brand uppercase tracking-widest">
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-dms-border">
               {members.map(m => (
                 <tr key={m.email} className="hover:bg-white/5">
                   <td className="px-6 py-4">
                      <p className="text-sm font-bold">{m.name}</p>
                      <p className="text-xs text-slate-brand">{m.email}</p>
                   </td>
                   <td className="px-6 py-4 text-xs">{m.role}</td>
                   <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${m.status === 'Active' ? 'bg-green-data/10 text-green-data' : 'bg-warning/10 text-warning'}`}>
                        {m.status.toUpperCase()}
                      </span>
                   </td>
                   <td className="px-6 py-4 text-right">
                      <button className="text-slate-brand hover:text-white font-bold text-[10px]">EDIT</button>
                   </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
}

function IntegrationSettings() {
  const integrations = [
    { name: "AutoTrader", desc: "Sync stock and receive leads directly.", status: "Connected", icon: "AT" },
    { name: "eBay Motors", desc: "Reach millions of buyers across the UK.", status: "Connected", icon: "EB" },
    { name: "Codeweavers", desc: "Full finance integration & calculators.", status: "Disconnected", icon: "CW" },
    { name: "CAP HPI", desc: "Live vehicle valuations and checks.", status: "Connected", icon: "HPI" },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-bold">Marketplace & Data Connections</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {integrations.map(i => (
           <div key={i.name} className="p-6 rounded-2xl border border-dms-border bg-white/5 flex items-start gap-6 group hover:border-green-data/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center font-black text-xs shrink-0 group-hover:scale-110 transition-transform">
                {i.icon}
              </div>
              <div className="flex-1">
                 <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">{i.name}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${i.status === 'Connected' ? 'bg-green-data/10 text-green-data' : 'bg-white/5 text-slate-brand'}`}>
                      {i.status.toUpperCase()}
                    </span>
                 </div>
                 <p className="text-xs text-slate-brand mb-6 leading-relaxed">{i.desc}</p>
                 <button className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
                   i.status === 'Connected' ? 'border border-white/10 hover:bg-white/5' : 'bg-green-data text-navy hover:scale-[1.02]'
                 }`}>
                   {i.status === 'Connected' ? 'MANAGE SETTINGS' : 'CONNECT ACCOUNT'}
                 </button>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}

function BillingSettings() {
  return (
    <div className="space-y-12">
      <div className="bg-green-data/5 border border-green-data/20 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
         <div>
            <p className="text-[10px] text-green-data font-bold uppercase tracking-widest mb-2">CURRENT PLAN</p>
            <h3 className="text-3xl font-bold text-white mb-2">Professional Tier</h3>
            <p className="text-sm text-slate-brand">Next billing date: June 1, 2026 · £299/month</p>
         </div>
         <button className="bg-green-data text-navy px-8 py-3 font-bold rounded-lg hover:scale-105 transition-transform">
            UPGRADE PLAN
         </button>
      </div>

      <div className="space-y-6">
         <h3 className="text-lg font-bold">Payment Methods</h3>
         <div className="p-6 rounded-xl border border-dms-border flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="w-12 h-8 bg-navy rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
               <div>
                  <p className="text-sm font-bold">•••• •••• •••• 4242</p>
                  <p className="text-xs text-slate-brand">Expires 12/28</p>
               </div>
            </div>
            <button className="text-xs font-bold text-slate-brand hover:text-white transition-colors underline">UPDATE</button>
         </div>
      </div>
      
      <div className="space-y-6">
         <h3 className="text-lg font-bold">Recent Invoices</h3>
         <div className="space-y-2">
            {[1, 2, 3].map(i => (
               <div key={i} className="p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/5 transition-all">
                  <div className="flex items-center gap-6">
                     <span className="text-xs font-mono text-slate-brand">INV-2026-{i}</span>
                     <span className="text-xs font-bold">May {i}, 2026</span>
                  </div>
                  <div className="flex items-center gap-6">
                     <span className="text-xs font-mono font-bold">£299.00</span>
                     <button className="text-green-data font-bold text-[10px] hover:underline">DOWNLOAD PDF</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
