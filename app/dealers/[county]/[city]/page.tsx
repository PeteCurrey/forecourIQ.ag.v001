import { cities } from "@/lib/seo-data/cities";
import { counties } from "@/lib/seo-data/counties";
import Link from "next/link";
import { Metadata } from "next";
import { 
  MapPin, 
  Laptop, 
  Database, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2
} from "lucide-react";

export async function generateStaticParams() {
  return cities.map((city) => ({
    county: counties.find(c => c.name === city.county)?.slug || "unknown",
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string, city: string }> }): Promise<Metadata> {
  const p = await params;
  const city = cities.find(c => c.slug === p.city);
  
  if (!city) return {};

  return {
    title: `Car Dealer Website, DMS & AI Buying Tool | ${city.name} | ForecourIQ`,
    description: `ForecourIQ provides independent car dealers in ${city.name} with modern websites, CRM/DMS tools, and AI-powered stock intelligence. Start your free trial today.`,
  };
}

export default async function CityPage({ params }: { params: Promise<{ county: string, city: string }> }) {
  const p = await params;
  const city = cities.find(c => c.slug === p.city);
  const county = counties.find(c => c.slug === p.county);
  
  if (!city || !county) return <div>City not found</div>;

  // Find 3 nearest cities (mock distance logic for now based on array index proximity)
  const cityIndex = cities.findIndex(c => c.slug === city.slug);
  const nearbyCities = [
    cities[(cityIndex + 1) % cities.length],
    cities[(cityIndex + 2) % cities.length],
    cities[(cityIndex + 3) % cities.length]
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ForecourIQ",
    "image": "https://forecouriq.com/logo.png",
    "description": `Automotive software provider serving car dealerships in ${city.name}, ${county.name}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": county.name,
      "addressCountry": "UK"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto border-b border-dms-border">
        <div className="max-w-4xl">
           <div className="flex items-center gap-2 text-green-data font-bold text-xs uppercase tracking-widest mb-6">
              <MapPin className="w-4 h-4" />
              {city.name}, {county.name}
           </div>
           <h1 className="text-5xl lg:text-7xl font-syne font-bold mb-6 tracking-tight">
             Car Dealer Website & Software in <span className="text-green-data">{city.name}</span>
           </h1>
           <p className="text-xl text-slate-brand mb-10 leading-relaxed">
             ForecourIQ is the premium software choice for independent motor traders in {city.name}. 
             We combine stunning website design, a powerful DMS, and AI market intelligence into one easy-to-use platform.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="btn-primary text-center">
                Get Your Free Trial
              </Link>
           </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-syne font-bold mb-4">Everything a {city.name} dealer needs</h2>
            <p className="text-slate-brand">Replace your patchwork of expensive tools with one unified system.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dms-surface p-8 rounded-2xl border border-dms-border hover:border-green-data/30 transition-all">
               <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
                  <Laptop className="w-6 h-6 text-green-data" />
               </div>
               <h3 className="text-xl font-bold mb-4">High-Converting Website</h3>
               <p className="text-slate-brand leading-relaxed">
                 Stop losing {city.name} buyers to franchise dealers. Get a stunning, mobile-first website that automatically pulls stock from your DMS and ranks on Google.
               </p>
            </div>
            <div className="bg-dms-surface p-8 rounded-2xl border border-dms-border hover:border-green-data/30 transition-all">
               <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-green-data" />
               </div>
               <h3 className="text-xl font-bold mb-4">Cloud-Based DMS</h3>
               <p className="text-slate-brand leading-relaxed">
                 Manage stock, track expenses, and respond to leads from anywhere in {county.name}. Feeds directly to AutoTrader, eBay Motors, and CarGurus.
               </p>
            </div>
            <div className="bg-dms-surface p-8 rounded-2xl border border-dms-border hover:border-green-data/30 transition-all relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 text-green-data/5">
                  <Sparkles className="w-24 h-24" />
               </div>
               <div className="w-12 h-12 rounded-xl bg-green-data/10 flex items-center justify-center mb-6 relative z-10">
                  <Sparkles className="w-6 h-6 text-green-data" />
               </div>
               <h3 className="text-xl font-bold mb-4 relative z-10">AI Buying Intelligence</h3>
               <p className="text-slate-brand leading-relaxed relative z-10">
                 Know exactly what cars are selling fastest in {city.name}. Our AI Command Centre analyses regional data to give you an unfair buying advantage.
               </p>
            </div>
         </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto border-t border-dms-border">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-syne font-bold mb-12">How to switch your dealership to ForecourIQ</h2>
               <div className="space-y-8">
                  {[
                     { step: "01", title: "Sign Up & Import", desc: "Start your trial. We'll automatically import your current stock via your VRMs or existing feeds." },
                     { step: "02", title: "Launch Your Website", desc: `Choose your branding. Your new, SEO-optimised website goes live to ${city.name} buyers the same day.` },
                     { step: "03", title: "Sell More Cars", desc: "Use the DMS and AI tools to source better stock and manage leads efficiently." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                       <div className="text-2xl font-mono font-bold text-green-data">{item.step}</div>
                       <div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-slate-brand">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-white/5 rounded-2xl border border-white/10 aspect-square flex items-center justify-center p-8">
               <div className="text-center">
                  <Building2 className="w-24 h-24 text-slate-brand/20 mx-auto mb-6" />
                  <p className="text-slate-brand font-mono text-sm uppercase tracking-widest">Proudly supporting dealers in</p>
                  <p className="text-3xl font-bold text-white mt-2">{city.name}</p>
               </div>
            </div>
         </div>
      </section>

      {/* Internal Linking / Neighbourhood */}
      <section className="py-16 px-6 lg:px-10 max-w-7xl mx-auto border-t border-dms-border">
         <h3 className="text-lg font-bold mb-6">Nearby Service Areas</h3>
         <div className="flex flex-wrap gap-4">
            <Link href={`/dealers/${county.slug}`} className="px-4 py-2 bg-navy border border-green-data/30 text-green-data rounded-lg text-sm font-bold hover:bg-green-data/10 transition-colors">
               View all {county.name} Dealers
            </Link>
            {nearbyCities.map(c => (
              <Link key={c.slug} href={`/dealers/${c.county.toLowerCase()}/${c.slug}`} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-bold text-slate-brand hover:text-white transition-colors">
                 {c.name}
              </Link>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10 text-center bg-green-data text-navy">
         <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-syne font-bold">Join {city.name} Dealers on ForecourIQ</h2>
            <p className="text-xl opacity-90">Start your free 14-day trial today. No credit card required.</p>
            <Link href="/demo" className="bg-navy text-white px-8 py-4 rounded-lg font-bold inline-flex hover:scale-105 transition-transform shadow-2xl">
               START FOR FREE
            </Link>
         </div>
      </section>
    </>
  );
}
