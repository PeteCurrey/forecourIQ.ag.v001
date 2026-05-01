"use client";

import { useState } from "react";
import { Plus, LayoutGrid, List, Search, Filter } from "lucide-react";
import Link from "next/link";
import VehicleTable from "@/components/stock/VehicleTable";
import VehicleCardGrid from "@/components/stock/VehicleCardGrid";

export default function StockPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [filterStatus, setFilterStatus] = useState("all");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Stock Inventory</h1>
          <p className="text-slate-brand">42 total vehicles · 38 available · 4 in prep</p>
        </div>
        <Link 
          href="/stock/add" 
          className="bg-green-data text-navy px-6 py-3 font-bold rounded-lg flex items-center gap-2 hover:scale-[1.02] transition-transform w-fit"
        >
          <Plus className="w-5 h-5" />
          Add Vehicle
        </Link>
      </div>

      {/* Filters & View Toggles */}
      <div className="bg-dms-surface p-4 rounded-xl border border-dms-border flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-brand" />
            <input 
              type="text" 
              placeholder="Search reg, make, model..." 
              className="bg-dms-bg border border-dms-border rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-green-data outline-none w-64"
            />
          </div>
          
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-dms-bg border border-dms-border rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-green-data outline-none"
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="prep">In Prep</option>
            <option value="reserved">Reserved</option>
            <option value="sold">Sold</option>
          </select>
          
          <button className="flex items-center gap-2 text-sm text-slate-brand hover:text-white px-4 py-2 border border-dms-border rounded-lg hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>

        <div className="flex items-center bg-dms-bg rounded-lg p-1 border border-dms-border">
          <button 
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-white/10 text-white" : "text-slate-brand hover:text-white"}`}
          >
            <List className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-white/10 text-white" : "text-slate-brand hover:text-white"}`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === "list" ? <VehicleTable /> : <VehicleCardGrid />}
    </div>
  );
}
