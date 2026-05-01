"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const tabs = [
  {
    id: "website",
    label: "Website",
    features: [
      "Next.js 15 — sub-1s load times, perfect Core Web Vitals",
      "Live stock feed — every vehicle gets its own SEO page, auto-updated",
      "AutoTrader, eBay Motors, CarGurus — publish stock everywhere in one click",
      "Part-ex valuation widget + finance calculator embedded",
      "Local SEO architecture built in — rank for [make] for sale in [your city]",
      "Cinematic design — no templates, no compromises",
    ],
    mockup: "Website Mockup Content",
  },
  {
    id: "dms",
    label: "DMS & CRM",
    features: [
      "DVLA reg lookup — instant vehicle spec population",
      "HPI check integration via CAP HPI",
      "Lead inbox — all AutoTrader, eBay, website enquiries in one pipeline",
      "Automated SMS + email follow-ups",
      "Digital deal packs — invoices, sales agreements, warranty docs",
      "HMRC MTD compliant VAT record keeping",
      "FCA audit trail for finance interactions",
    ],
    mockup: "DMS Mockup Content",
  },
  {
    id: "ai",
    label: "AI Command Centre",
    features: [
      "Real-time demand intelligence — what's selling, where, at what margin",
      "AI buying list — tells you exactly what to source next and why",
      "Price positioning — see where your stock sits against live market",
      "Days-to-sell forecasting per vehicle type",
      "Private seller monitoring — surfaces relevant cars before auction",
      "Portfolio health score — are you stocked for what buyers want?",
    ],
    mockup: "AI Mockup Content",
  },
];

export default function ProductOverview() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(contentRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  return (
    <section id="features" className="py-32 bg-navy text-white overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-8">Integrated Intelligence</h2>
          
          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-green-data text-navy"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div ref={contentRef}>
          {tabs.map((tab) => tab.id === activeTab && (
            <div key={tab.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <ul className="space-y-6">
                  {tab.features.map((feature, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-data/10 flex items-center justify-center border border-green-data/20">
                        <svg className="w-4 h-4 text-green-data" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg text-slate-brand leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="glass-card rounded-2xl p-4 shadow-2xl border-white/5 aspect-[4/3] flex flex-col">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 mb-4 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                    <div className="ml-4 flex-1 h-6 bg-white/5 rounded flex items-center px-3 text-[10px] text-white/20">
                      forecouriq.app/{tab.id}
                    </div>
                  </div>
                  
                  {/* Mockup Content */}
                  <div className="flex-1 bg-white/2 rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
                    {tab.id === 'website' && (
                      <div className="w-full h-full p-8 flex flex-col gap-6">
                        <div className="h-4 w-1/3 bg-green-data/20 rounded" />
                        <div className="h-12 w-2/3 bg-white/10 rounded" />
                        <div className="grid grid-cols-2 gap-4 flex-1">
                          <div className="bg-white/5 rounded-xl border border-white/5" />
                          <div className="bg-white/5 rounded-xl border border-white/5" />
                        </div>
                      </div>
                    )}
                    {tab.id === 'dms' && (
                      <div className="w-full h-full p-8 flex flex-col gap-4">
                        <div className="flex justify-between">
                          <div className="h-8 w-1/4 bg-white/10 rounded" />
                          <div className="h-8 w-8 bg-green-data rounded" />
                        </div>
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-12 w-full bg-white/5 border border-white/5 rounded flex items-center px-4">
                            <div className="h-2 w-1/4 bg-white/10 rounded" />
                          </div>
                        ))}
                      </div>
                    )}
                    {tab.id === 'ai' && (
                      <div className="w-full h-full p-8 flex flex-col gap-6">
                        <div className="flex gap-4">
                          <div className="h-24 flex-1 bg-green-data/10 border border-green-data/20 rounded-2xl" />
                          <div className="h-24 flex-1 bg-white/5 border border-white/5 rounded-2xl" />
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-6">
                           <div className="h-2 w-1/3 bg-white/10 rounded mb-4" />
                           <div className="space-y-3">
                              <div className="h-1 w-full bg-white/5 rounded" />
                              <div className="h-1 w-full bg-white/5 rounded" />
                              <div className="h-1 w-2/3 bg-white/5 rounded" />
                           </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Glow */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-data/5 blur-[120px] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
