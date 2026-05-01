"use client";

import { Bell, Search } from "lucide-react";

export default function TopBar({ profile }: { profile: any }) {
  return (
    <header className="h-16 border-b border-dms-border flex items-center justify-between px-6 lg:px-10 bg-dms-bg/50 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-brand" />
          <input 
            type="text" 
            placeholder="Search stock, leads, or activities..." 
            className="w-full bg-dms-surface border border-dms-border rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-green-data"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-slate-brand hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-data rounded-full border-2 border-dms-bg" />
        </button>
        
        <div className="h-8 w-[1px] bg-dms-border hidden md:block" />
        
        <div className="hidden md:flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-brand">SERVER STATUS</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-data animate-pulse" />
            <span className="text-[10px] font-mono text-green-data">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
