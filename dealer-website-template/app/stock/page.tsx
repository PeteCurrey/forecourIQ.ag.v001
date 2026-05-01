"use client";

import { useState, useEffect } from "react";
import { dealerAPI } from "@/lib/api";
import Link from "next/link";
import { Search, SlidersHorizontal, ChevronDown, LayoutGrid, List } from "lucide-react";

export default function StockListingPage() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    fuel_type: "",
    min_price: "",
    max_price: "",
    sort: "newest"
  });

  useEffect(() => {
    async function loadVehicles() {
      setLoading(true);
      try {
        const query = new URLSearchParams();
        if (filters.make) query.append("make", filters.make);
        if (filters.fuel_type) query.append("fuel_type", filters.fuel_type);
        if (filters.min_price) query.append("min_price", filters.min_price);
        if (filters.max_price) query.append("max_price", filters.max_price);
        query.append("sort", filters.sort);

        const data = await dealerAPI.getVehicles(`?${query.toString()}`);
        setVehicles(data.vehicles || []);
      } catch (e) {
        console.error("Failed to load vehicles", e);
      } finally {
        setLoading(false);
      }
    }
    loadVehicles();
  }, [filters]);

  return (
    <div className="container mx-auto px-6 pt-32 pb-24">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="lg:w-80 space-y-8">
          <div className="bg-surface p-6 rounded-2xl border border-white/5 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-syne font-bold text-xl">Filters</h3>
              <SlidersHorizontal className="w-4 h-4 text-primary" />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Make</label>
              <select 
                value={filters.make}
                onChange={(e) => setFilters({...filters, make: e.target.value})}
                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">All Makes</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Ford">Ford</option>
                <option value="Volkswagen">Volkswagen</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Fuel Type</label>
              <select 
                value={filters.fuel_type}
                onChange={(e) => setFilters({...filters, fuel_type: e.target.value})}
                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">All Fuels</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Price Range</label>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="number" 
                  placeholder="Min" 
                  value={filters.min_price}
                  onChange={(e) => setFilters({...filters, min_price: e.target.value})}
                  className="w-full bg-secondary border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-primary"
                />
                <input 
                  type="number" 
                  placeholder="Max" 
                  value={filters.max_price}
                  onChange={(e) => setFilters({...filters, max_price: e.target.value})}
                  className="w-full bg-secondary border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <button 
              onClick={() => setFilters({make: "", model: "", fuel_type: "", min_price: "", max_price: "", sort: "newest"})}
              className="w-full text-xs font-bold text-white/40 hover:text-white transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h1 className="text-4xl font-syne font-bold">Available Stock <span className="text-white/20 ml-2">{vehicles.length}</span></h1>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <select 
                  value={filters.sort}
                  onChange={(e) => setFilters({...filters, sort: e.target.value})}
                  className="bg-surface border border-white/10 rounded-lg px-4 py-2 pr-10 appearance-none outline-none focus:ring-1 focus:ring-primary text-sm font-bold"
                >
                  <option value="newest">Newest First</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="mileage">Lowest Mileage</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="card h-96 animate-pulse bg-white/5" />
              ))}
            </div>
          ) : vehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {vehicles.map((vehicle) => (
                <Link 
                  key={vehicle.id} 
                  href={`/stock/${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.registration}`.toLowerCase()}
                  className="card group"
                >
                  <div className="aspect-[16/10] bg-white/5 relative overflow-hidden">
                    {vehicle.images?.[0] ? (
                      <img src={vehicle.images[0]} alt={vehicle.model} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/10 font-black text-2xl uppercase italic">No Image</div>
                    )}
                    <div className="absolute top-4 right-4 bg-secondary/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {vehicle.fuel_type}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                      <p className="text-sm text-white/40">{vehicle.variant}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <p className="text-2xl font-bold text-primary">£{vehicle.asking_price.toLocaleString()}</p>
                      <p className="text-sm text-white/60 font-mono">{vehicle.mileage.toLocaleString()} mi</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center space-y-6">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/20">
                <Search className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold">No vehicles found</h2>
              <p className="text-white/40">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
