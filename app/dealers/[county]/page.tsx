import { counties } from "@/lib/seo-data/counties";
import { cities } from "@/lib/seo-data/cities";
import Link from "next/link";
import { Metadata } from "next";
import { 
  MapPin, 
  Car, 
  LineChart, 
  Building2, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export async function generateStaticParams() {
  return counties.map((county) => ({
    county: county.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string }> }): Promise<Metadata> {
  const p = await params;
  const county = counties.find(c => c.slug === p.county);
  
  if (!county) return {};

  return {
    title: `Car Dealer Website & DMS for ${county.name} | ForecourIQ`,
    description: `ForecourIQ provides ${county.name} car dealers with a high-ranking dealer website, smart DMS, and AI-powered stock buying intelligence. Free 14-day trial.`,
  };
}

export default async function CountyPage({ params }: { params: Promise<{ county: string }> }) {
  const p = await params;
  const county = counties.find(c => c.slug === p.county);
  
  if (!county) return <div>County not found</div>;

  const countyCities = cities.filter(city => city.county.toLowerCase() === county.name.toLowerCase());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Car Dealer Software in ${county.name}`,
    "provider": {
      "@type": "Organization",
      "name": "ForecourIQ"
    },
    "areaServed": {
      "@type": "State",
      "name": county.name
    }
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
              Serving {county.region}
           </div>
           <h1 className="text-5xl lg:text-7xl font-syne font-bold mb-6 tracking-tight">
             Car Dealer Software for <span className="text-green-data">{county.name}</span> Dealerships
           </h1>
           <p className="text-xl text-slate-brand mb-10 leading-relaxed">
             Join the {county.approx_dealer_count}+ independent dealers in {county.name} upgrading to ForecourIQ. 
             Get a modern dealer website, a lightning-fast DMS, and AI-powered buying intelligence in one platform.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="btn-primary text-center">
                Start Your Free Trial
              </Link>
              <Link href="/pricing" className="bg-white/5 border border-white/10 px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-center">
                View Pricing
              </Link>
           </div>
        </div>
      </section>

      {/* Why Local Dealers Choose Us */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-syne font-bold mb-8">Why dealers in {county.name} choose ForecourIQ</h2>
               <div className="space-y-6">
                  {[
                    { title: "Local SEO Dominance", desc: `Our websites are technically optimised to rank your stock above competitors across ${county.name} and the ${county.region}.` },
                    { title: "Regional Sourcing Data", desc: "Our AI Command Centre tells you exactly which makes and models are selling fastest in your specific area right now." },
                    { title: "All-in-One Operations", desc: "Replace your outdated website provider and clunky DMS with a single, lightning-fast platform." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="mt-1">
                          <CheckCircle2 className="w-6 h-6 text-green-data" />
                       </div>
                       <div>
                          <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                          <p className="text-slate-brand leading-relaxed">{feature.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-dms-surface p-10 rounded-2xl border border-dms-border relative">
               <div className="text-6xl text-green-data/20 absolute top-6 left-6 font-syne">"</div>
               <p className="text-xl italic leading-relaxed mb-8 relative z-10">
                 "{county.testimonial_text}"
               </p>
               <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center font-bold text-green-data">
                     {county.testimonial_author.charAt(0)}
                  </div>
                  <div>
                     <p className="font-bold">{county.testimonial_author}</p>
                     <p className="text-sm text-slate-brand">{county.testimonial_dealership}, {county.name}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* City Directory */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto border-t border-dms-border">
         <div className="mb-12">
            <h2 className="text-3xl font-syne font-bold mb-4">Find Dealers in {county.name}</h2>
            <p className="text-slate-brand">Explore our software solutions for dealerships in major towns and cities across the county.</p>
         </div>
         
         {countyCities.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {countyCities.map(city => (
                 <Link key={city.slug} href={`/dealers/${county.slug}/${city.slug}`} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-green-data/50 hover:bg-white/10 transition-all group flex items-center justify-between">
                    <span className="font-bold group-hover:text-green-data transition-colors">{city.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-brand group-hover:text-green-data transition-colors" />
                 </Link>
              ))}
           </div>
         ) : (
           <p className="text-slate-brand italic">City data currently being updated for {county.name}.</p>
         )}
      </section>
      
      {/* CTA */}
      <section className="py-32 px-6 lg:px-10 text-center bg-green-data/5 border-t border-green-data/20">
         <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-syne font-bold">Ready to upgrade your forecourt?</h2>
            <p className="text-xl text-slate-brand">Join the fastest growing network of independent dealers in {county.name}.</p>
            <Link href="/demo" className="btn-primary inline-flex">
               START YOUR FREE TRIAL
            </Link>
         </div>
      </section>
    </>
  );
}
