import { integrations } from "@/lib/seo-data/integrations";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Puzzle, 
  ArrowRightLeft, 
  CheckCircle2, 
  Zap,
  LayoutDashboard
} from "lucide-react";

export async function generateStaticParams() {
  return integrations.map((int) => ({
    platform: int.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ platform: string }> }): Promise<Metadata> {
  const p = await params;
  const integration = integrations.find(i => i.slug === p.platform);
  
  if (!integration) return {};

  return {
    title: `ForecourIQ + ${integration.name} Integration for Car Dealers`,
    description: integration.hero_desc,
  };
}

export default async function IntegrationPage({ params }: { params: Promise<{ platform: string }> }) {
  const p = await params;
  const integration = integrations.find(i => i.slug === p.platform);
  
  if (!integration) return <div>Integration not found</div>;

  // Find 3 other related integrations
  const intIndex = integrations.findIndex(i => i.slug === integration.slug);
  const relatedIntegrations = [
    integrations[(intIndex + 1) % integrations.length],
    integrations[(intIndex + 2) % integrations.length],
    integrations[(intIndex + 3) % integrations.length]
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto border-b border-dms-border">
        <div className="max-w-4xl">
           <div className="flex items-center gap-2 text-green-data font-bold text-xs uppercase tracking-widest mb-6">
              <Puzzle className="w-4 h-4" />
              Software Integration
           </div>
           <h1 className="text-5xl lg:text-7xl font-syne font-bold mb-6 tracking-tight">
             ForecourIQ + {integration.name}
             <span className="block text-3xl lg:text-5xl mt-4 text-slate-brand">Seamless {integration.function}</span>
           </h1>
           <p className="text-xl text-slate-brand mb-10 leading-relaxed max-w-3xl">
             {integration.hero_desc}
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="btn-primary text-center">
                See How It Works
              </Link>
           </div>
        </div>
      </section>

      {/* How it Works Step-by-Step */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
         <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-syne font-bold mb-4">How the integration works</h2>
            <p className="text-slate-brand">We've handled the complex API connections so you don't have to. Set up takes minutes.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-dms-border z-0"></div>

            <div className="relative z-10 bg-dms-bg text-center">
               <div className="w-24 h-24 mx-auto bg-dms-surface border border-dms-border rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <span className="text-3xl font-syne font-bold text-green-data">1</span>
               </div>
               <h3 className="text-xl font-bold mb-3">{integration.step_1.title}</h3>
               <p className="text-slate-brand px-4">{integration.step_1.desc}</p>
            </div>

            <div className="relative z-10 bg-dms-bg text-center">
               <div className="w-24 h-24 mx-auto bg-dms-surface border border-green-data/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,212,170,0.1)]">
                  <ArrowRightLeft className="w-8 h-8 text-green-data" />
               </div>
               <h3 className="text-xl font-bold mb-3">{integration.step_2.title}</h3>
               <p className="text-slate-brand px-4">{integration.step_2.desc}</p>
            </div>

            <div className="relative z-10 bg-dms-bg text-center">
               <div className="w-24 h-24 mx-auto bg-dms-surface border border-dms-border rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <span className="text-3xl font-syne font-bold text-green-data">3</span>
               </div>
               <h3 className="text-xl font-bold mb-3">{integration.step_3.title}</h3>
               <p className="text-slate-brand px-4">{integration.step_3.desc}</p>
            </div>
         </div>
      </section>

      {/* Dealer Benefit */}
      <section className="py-24 px-6 lg:px-10 bg-dms-surface border-y border-dms-border">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-24 h-24 shrink-0 rounded-full bg-green-data/10 flex items-center justify-center">
               <Zap className="w-10 h-10 text-green-data" />
            </div>
            <div>
               <h2 className="text-2xl font-bold mb-4">Why Dealers Love This</h2>
               <p className="text-xl text-slate-brand leading-relaxed">
                  "{integration.benefit}"
               </p>
            </div>
         </div>
      </section>

      {/* Related Integrations */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
         <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-3xl font-syne font-bold mb-2">Related Integrations</h2>
               <p className="text-slate-brand">ForecourIQ connects with all the major tools you already use.</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedIntegrations.map(related => (
               <Link key={related.slug} href={`/integrations/${related.slug}`} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-green-data/50 transition-all group block">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center mb-6">
                     <Puzzle className="w-5 h-5 text-slate-brand group-hover:text-green-data transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{related.name}</h3>
                  <p className="text-sm text-slate-brand">{related.function}</p>
               </Link>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10 text-center bg-green-data/5 border-t border-green-data/20">
         <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-syne font-bold">Connect {integration.name} to ForecourIQ today</h2>
            <p className="text-xl text-slate-brand">Join the independent dealers saving hours every week with our automated platform.</p>
            <Link href="/demo" className="btn-primary inline-flex">
               START 14-DAY FREE TRIAL
            </Link>
         </div>
      </section>
    </>
  );
}
