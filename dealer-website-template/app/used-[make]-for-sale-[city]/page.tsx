import { dealerAPI } from "@/lib/api";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export async function generateStaticParams() {
  // In a real implementation, this would fetch all makes in stock
  // and cities within 20 miles. For now we use a small sample.
  return [
    { make: "bmw", city: "leicester" },
    { make: "audi", city: "leicester" },
    { make: "ford", city: "leicester" },
  ];
}

export default async function ProgrammaticCityMakePage({ 
  params 
}: { 
  params: Promise<{ make: string, city: string }> 
}) {
  const p = await params;
  const make = p.make.toUpperCase();
  const city = p.city.charAt(0).toUpperCase() + p.city.slice(1);

  const [dealership, vehiclesData] = await Promise.all([
    dealerAPI.getDealership(),
    dealerAPI.getVehicles(`?make=${make}`)
  ]);

  const vehicles = vehiclesData.vehicles || [];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16 space-y-6">
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            Used {make} in {city}
          </div>
          <h1 className="text-5xl lg:text-7xl font-syne font-bold tracking-tight">
            Used {make} for Sale in <span className="text-primary">{city}</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
            Discover quality used {make} vehicles at {dealership.name}. Serving buyers in {city} and surrounding areas with premium service and competitive pricing.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle: any) => (
            <Link 
              key={vehicle.id} 
              href={`/stock/${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.registration}`.toLowerCase()}
              className="card group"
            >
              <div className="aspect-[16/10] bg-white/5 relative overflow-hidden">
                <img src={vehicle.images?.[0]} alt={vehicle.model} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                <p className="text-2xl font-bold text-primary mt-4">£{vehicle.asking_price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO Content */}
        <div className="mt-24 bg-surface p-12 rounded-3xl border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="space-y-6">
              <h2 className="text-3xl font-syne font-bold">Why buy a used {make} in {city}?</h2>
              <p className="text-white/60 leading-relaxed">
                {make} vehicles are renowned for their reliability and performance. Buying from {dealership.name} ensures you get a fully inspected, HPI-clear vehicle with our standard warranty package. Our location in {city} makes it easy for local buyers to visit for a test drive.
              </p>
           </div>
           <div className="space-y-6">
              <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
              <div className="space-y-4">
                 <div className="p-4 bg-secondary/50 rounded-xl">
                    <p className="font-bold text-sm mb-1">Do you offer finance on used {make}s?</p>
                    <p className="text-xs text-white/40">Yes, we have flexible finance options available for all our {make} stock in {city}.</p>
                 </div>
                 <div className="p-4 bg-secondary/50 rounded-xl">
                    <p className="font-bold text-sm mb-1">Can I part-exchange my car in {city}?</p>
                    <p className="text-xs text-white/40">Absolutely. We offer competitive part-exchange valuations for buyers in {city} and throughout the region.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
