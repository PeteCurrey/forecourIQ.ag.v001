import { vehicleTypes } from "@/lib/seo-data/vehicle-types";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Car, 
  CheckCircle2, 
  Settings2, 
  BarChart3, 
  ArrowRight,
  ChevronDown
} from "lucide-react";

export async function generateStaticParams() {
  return vehicleTypes.map((type) => ({
    type: type.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const p = await params;
  const typeData = vehicleTypes.find(t => t.slug === p.type);
  
  if (!typeData) return {};

  return {
    title: `Dealer Website & DMS for ${typeData.name} Dealers | ForecourIQ`,
    description: typeData.hero_desc,
  };
}

export default async function VehicleTypePage({ params }: { params: Promise<{ type: string }> }) {
  const p = await params;
  const typeData = vehicleTypes.find(t => t.slug === p.type);
  
  if (!typeData) return <div>Category not found</div>;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto border-b border-dms-border">
        <div className="max-w-4xl">
           <div className="flex items-center gap-2 text-green-data font-bold text-xs uppercase tracking-widest mb-6">
              <Car className="w-4 h-4" />
              Specialist Dealership Software
           </div>
           <h1 className="text-5xl lg:text-7xl font-syne font-bold mb-6 tracking-tight">
             {typeData.hero_title}
           </h1>
           <p className="text-xl text-slate-brand mb-10 leading-relaxed">
             {typeData.hero_desc}
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="btn-primary text-center">
                Start Your 14-Day Free Trial
              </Link>
           </div>
        </div>
      </section>

      {/* Specialist Features */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
         <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-syne font-bold mb-4">Built specifically for your inventory</h2>
            <p className="text-slate-brand">Generic software doesn't cut it. ForecourIQ adapts to the specific data and sales process of {typeData.name.toLowerCase()} dealerships.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dms-surface p-8 rounded-2xl border border-dms-border">
               <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
                  <Settings2 className="w-6 h-6 text-green-data" />
               </div>
               <h3 className="text-xl font-bold mb-4">{typeData.feature_1_title}</h3>
               <p className="text-slate-brand leading-relaxed">
                 {typeData.feature_1_desc}
               </p>
            </div>
            <div className="bg-dms-surface p-8 rounded-2xl border border-dms-border">
               <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-green-data" />
               </div>
               <h3 className="text-xl font-bold mb-4">{typeData.feature_2_title}</h3>
               <p className="text-slate-brand leading-relaxed">
                 {typeData.feature_2_desc}
               </p>
            </div>
            <div className="bg-dms-surface p-8 rounded-2xl border border-dms-border">
               <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-green-data" />
               </div>
               <h3 className="text-xl font-bold mb-4">{typeData.feature_3_title}</h3>
               <p className="text-slate-brand leading-relaxed">
                 {typeData.feature_3_desc}
               </p>
            </div>
         </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 lg:px-10 bg-dms-surface border-y border-dms-border">
         <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-green-data/20 font-syne mb-4">"</div>
            <p className="text-2xl italic leading-relaxed mb-8">
              "{typeData.testimonial_text}"
            </p>
            <div>
               <p className="font-bold">{typeData.testimonial_author}</p>
               <p className="text-sm text-green-data mt-1">ForecourIQ Customer</p>
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 lg:px-10 max-w-3xl mx-auto">
         <h2 className="text-3xl font-syne font-bold mb-12 text-center">Frequently Asked Questions</h2>
         <div className="space-y-4">
            {typeData.faqs.map((faq, i) => (
              <details key={i} className="group bg-dms-surface border border-dms-border rounded-xl p-6 cursor-pointer">
                 <summary className="font-bold flex items-center justify-between outline-none">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-slate-brand group-open:rotate-180 transition-transform" />
                 </summary>
                 <p className="text-slate-brand mt-4 leading-relaxed pr-8">
                    {faq.a}
                 </p>
              </details>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10 text-center bg-green-data/5 border-t border-green-data/20">
         <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-syne font-bold">Upgrade your {typeData.name.toLowerCase()} dealership today</h2>
            <Link href="/demo" className="btn-primary inline-flex">
               START FREE 14-DAY TRIAL
            </Link>
         </div>
      </section>
    </>
  );
}
