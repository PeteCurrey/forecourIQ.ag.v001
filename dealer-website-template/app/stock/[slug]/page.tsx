import { dealerAPI } from "@/lib/api";
import { Metadata } from "next";
import { 
  ChevronLeft, 
  Calendar, 
  Gauge, 
  Fuel, 
  Zap, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 300;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const reg = slug.split("-").pop()?.toUpperCase();
  if (!reg) return { title: "Vehicle Not Found" };

  try {
    const [vehicle, dealership] = await Promise.all([
      dealerAPI.getVehicle(reg),
      dealerAPI.getDealership()
    ]);

    const title = `${vehicle.year} ${vehicle.make} ${vehicle.model} for Sale | ${dealership.name}`;
    const description = `${vehicle.year} ${vehicle.make} ${vehicle.model} with ${vehicle.mileage.toLocaleString()} miles. Priced at £${vehicle.asking_price.toLocaleString()}. ${dealership.name} in ${dealership.settings.seo.city}. HPI clear. Enquire today.`;

    return { title, description };
  } catch (e) {
    return { title: "Vehicle Detail" };
  }
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reg = slug.split("-").pop()?.toUpperCase();
  if (!reg) notFound();

  let vehicle, dealership;
  try {
    [vehicle, dealership] = await Promise.all([
      dealerAPI.getVehicle(reg),
      dealerAPI.getDealership()
    ]);
  } catch (e) {
    notFound();
  }

  const images = vehicle.images || [];

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <Link href="/stock" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back to Stock
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[16/10] bg-surface rounded-3xl overflow-hidden border border-white/5 relative">
              {images[0] ? (
                <img src={images[0]} alt={vehicle.model} className="object-cover w-full h-full" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/10 font-black text-4xl uppercase italic">No Image</div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {images.slice(1, 5).map((img: string, i: number) => (
                <div key={i} className="aspect-square bg-surface rounded-2xl overflow-hidden border border-white/5 cursor-pointer hover:border-primary/50 transition-all">
                   <img src={img} alt={`${vehicle.model} - ${i + 2}`} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>

            <div className="bg-surface p-8 rounded-3xl border border-white/5 space-y-6">
               <h2 className="text-2xl font-syne font-bold">Vehicle Description</h2>
               <p className="text-white/60 leading-relaxed whitespace-pre-wrap">
                 {vehicle.description || "No description provided."}
               </p>
            </div>
          </div>

          {/* Right Column - Info & Actions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">{vehicle.status}</span>
                 <span className="text-white/40 text-[10px] font-mono">{vehicle.registration}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-syne font-bold leading-tight">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <p className="text-xl text-white/60">{vehicle.variant}</p>
            </div>

            <div className="text-5xl font-syne font-bold text-primary">
              £{vehicle.asking_price.toLocaleString()}
            </div>

            <div className="grid grid-cols-2 gap-4">
               {[
                 { icon: Calendar, label: "Year", value: vehicle.year },
                 { icon: Gauge, label: "Mileage", value: `${vehicle.mileage.toLocaleString()} mi` },
                 { icon: Fuel, label: "Fuel Type", value: vehicle.fuel_type },
                 { icon: Zap, label: "Transmission", value: vehicle.transmission },
                 { icon: ShieldCheck, label: "Colour", value: vehicle.colour || "N/A" },
                 { icon: FileText, label: "Body Type", value: vehicle.body_type || "N/A" },
               ].map((item, i) => (
                 <div key={i} className="bg-surface p-4 rounded-2xl border border-white/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                       <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.label}</p>
                       <p className="font-bold text-sm">{item.value}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl space-y-4">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold">
                     <Calculator className="w-5 h-5 text-primary" />
                     Estimated Finance
                  </div>
                  <p className="text-2xl font-syne font-bold text-primary">£{Math.round(vehicle.asking_price / 48).toLocaleString()}<span className="text-sm font-normal text-white/60">/mo</span></p>
               </div>
               <p className="text-[10px] text-white/40">Representative example: 9.9% APR over 48 months with 10% deposit. Subject to status.</p>
            </div>

            <div className="space-y-3">
               <button className="btn-primary w-full py-5 text-lg">
                  <MessageCircle className="w-5 h-5" />
                  Enquire About This Vehicle
               </button>
               <div className="grid grid-cols-2 gap-3">
                  <button className="btn-outline w-full py-4 text-sm">
                     Book Test Drive
                  </button>
                  <button className="btn-outline w-full py-4 text-sm">
                     Value My Part-Ex
                  </button>
               </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/5">
               <h3 className="font-bold text-sm uppercase tracking-widest text-white/40">Key Highlights</h3>
               <div className="grid grid-cols-1 gap-3">
                  {vehicle.features?.slice(0, 5).map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                       <CheckCircle2 className="w-4 h-4 text-primary" />
                       {feature}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
