import { competitors } from "@/lib/seo-data/competitors";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import { Metadata } from "next";
import { ChevronDown } from "lucide-react";

export async function generateStaticParams() {
  return competitors.map((c) => ({
    competitor: c.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const p = await params;
  const comp = competitors.find(c => c.slug === p.competitor);
  if (!comp) return {};

  return {
    title: comp.hero_title,
    description: comp.hero_desc,
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ competitor: string }> }) {
  const p = await params;
  const comp = competitors.find(c => c.slug === p.competitor);

  if (!comp) notFound();

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="container-wide mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-data font-bold text-xs tracking-widest uppercase mb-6 block">PLATFORM COMPARISON</span>
          <h1 className="text-5xl md:text-7xl text-navy mb-8 leading-tight font-syne font-bold">
            {comp.hero_title}
          </h1>
          <p className="text-xl text-slate-brand leading-relaxed">
            {comp.hero_desc}
          </p>
        </div>
      </section>

      {/* Head-to-Head Table */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-syne font-bold text-center mb-16">Feature Comparison</h2>
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-navy/5 shadow-xl">
            <table className="w-full">
               <thead className="bg-navy text-white">
                 <tr>
                    <th className="p-6 text-left font-bold text-lg w-1/3">Feature</th>
                    <th className="p-6 text-center font-syne text-xl text-green-data w-1/3">ForecourIQ</th>
                    <th className="p-6 text-center font-syne text-xl text-white/50 w-1/3">{comp.name}</th>
                 </tr>
               </thead>
               <tbody>
                 {comp.features.map((feature, i) => (
                   <tr key={feature.name} className={i % 2 === 0 ? "bg-slate-light/30" : "bg-white"}>
                     <td className="p-6 font-bold text-navy border-b border-navy/5">{feature.name}</td>
                     <td className="p-6 text-center border-b border-navy/5">
                        {typeof feature.us === 'boolean' 
                           ? (feature.us ? <span className="text-green-data font-black text-xl">✓</span> : <span className="text-navy/20 font-black text-xl">✕</span>)
                           : <span className="font-bold text-green-data">{feature.us}</span>
                        }
                     </td>
                     <td className="p-6 text-center border-b border-navy/5">
                        {typeof feature.them === 'boolean' 
                           ? (feature.them ? <span className="text-navy/50 font-black text-xl">✓</span> : <span className="text-red-500 font-black text-xl">✕</span>)
                           : <span className="font-bold text-navy/50">{feature.them}</span>
                        }
                     </td>
                   </tr>
                 ))}
               </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Shortcomings */}
      <section className="py-24 bg-slate-light">
         <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-3xl font-syne font-bold text-navy mb-12 text-center">Where {comp.name} Falls Short</h2>
            <div className="space-y-4">
               {comp.weaknesses.map((w, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm border border-navy/5">
                     <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <span className="text-red-500 font-bold text-sm">✕</span>
                     </div>
                     <p className="text-navy font-medium leading-relaxed mt-1">{w}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Switching Guide */}
      <section className="py-24 bg-white border-b border-navy/5">
         <div className="container-wide max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-syne font-bold text-navy mb-4">How to Move from {comp.name} to ForecourIQ</h2>
               <p className="text-slate-brand text-lg">We handle the heavy lifting. You can be live in 48 hours.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
               {comp.switching_steps.map((step, i) => (
                  <div key={i} className="bg-slate-light/50 p-6 rounded-xl border border-navy/5 relative">
                     <div className="text-4xl font-syne font-bold text-navy/10 absolute top-4 right-4">{i+1}</div>
                     <h3 className="font-bold text-navy mb-3 relative z-10">{step.title}</h3>
                     <p className="text-sm text-slate-brand relative z-10">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-light">
         <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-3xl font-syne font-bold text-navy mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {comp.faqs.map((faq, i) => (
                 <details key={i} className="group bg-white border border-navy/5 rounded-xl p-6 cursor-pointer shadow-sm">
                    <summary className="font-bold text-navy flex items-center justify-between outline-none">
                       {faq.q}
                       <ChevronDown className="w-5 h-5 text-slate-brand group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="text-slate-brand mt-4 leading-relaxed pr-8">
                       {faq.a}
                    </p>
                 </details>
               ))}
            </div>
         </div>
      </section>

      <CTA />
    </div>
  );
}
