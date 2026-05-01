"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const tabs = [
  {
    id: "website",
    label: "Dealer Website",
    eyebrow: "Public Facing",
    headline: "A cinematic website that ranks, converts, and impresses.",
    features: [
      { title: "Sub-1s load times", desc: "Next.js 15 App Router — perfect Core Web Vitals out of the box." },
      { title: "Live stock feed", desc: "Every vehicle auto-generates its own SEO-indexed page." },
      { title: "One-click syndication", desc: "Push to AutoTrader, eBay Motors, and CarGurus simultaneously." },
      { title: "Part-ex & finance widgets", desc: "Embedded at the point of interest — not buried in a contact page." },
      { title: "Local SEO architecture", desc: "Rank for 'used [make] for sale in [your city]' automatically." },
    ],
    mockup: "website",
  },
  {
    id: "dms",
    label: "DMS & CRM",
    eyebrow: "Operations Layer",
    headline: "A Bloomberg Terminal for your forecourt operations.",
    features: [
      { title: "DVLA reg lookup", desc: "Enter a plate — spec populates instantly. No typing." },
      { title: "CAP HPI integration", desc: "Live trade and retail valuations on every vehicle." },
      { title: "Unified lead inbox", desc: "AutoTrader, eBay, your website — one pipeline." },
      { title: "Automated follow-ups", desc: "SMS and email sequences triggered by lead activity." },
      { title: "FCA audit trail", desc: "Every finance interaction logged. Compliance by default." },
    ],
    mockup: "dms",
  },
  {
    id: "ai",
    label: "AI Command Centre",
    eyebrow: "Flagship Intelligence",
    headline: "Know what to buy before it hits auction.",
    features: [
      { title: "Real-time demand signals", desc: "What's selling, where, at what margin — live." },
      { title: "AI buying list", desc: "Eight specific vehicle recommendations, refreshed daily." },
      { title: "Price positioning", desc: "See exactly where your stock sits vs the live market." },
      { title: "Days-to-sell forecasting", desc: "Per vehicle type, per region. No more dead stock." },
      { title: "Portfolio health score", desc: "Are you stocked for what buyers actually want?" },
    ],
    mockup: "ai",
  },
];

function WebsiteMockup() {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-6">
      {/* Nav bar */}
      <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-2.5 border border-white/8">
        <div className="h-2.5 w-20 bg-white/20 rounded-full" />
        <div className="flex gap-3">
          {[...Array(4)].map((_, i) => <div key={i} className="h-2 w-10 bg-white/10 rounded-full" />)}
        </div>
        <div className="h-7 w-20 bg-green-data/80 rounded-lg" />
      </div>
      {/* Hero block */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-[#0A1628] border border-white/8 p-6 flex-1">
        <div className="h-2.5 w-16 bg-green-data/60 rounded-full mb-3" />
        <div className="h-5 w-4/5 bg-white/30 rounded-full mb-2" />
        <div className="h-5 w-3/5 bg-white/20 rounded-full mb-5" />
        <div className="flex gap-3">
          <div className="h-9 w-28 bg-green-data/70 rounded-xl" />
          <div className="h-9 w-24 bg-white/10 rounded-xl border border-white/15" />
        </div>
        {/* Car cards */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white/5 rounded-xl border border-white/8 overflow-hidden">
              <div className="h-14 bg-white/5" />
              <div className="p-2.5">
                <div className="h-2 w-full bg-white/15 rounded-full mb-1.5" />
                <div className="h-2 w-2/3 bg-white/8 rounded-full mb-2" />
                <div className="h-5 w-3/4 bg-green-data/50 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DmsMockup() {
  return (
    <div className="w-full h-full flex gap-3 p-4">
      {/* Sidebar */}
      <div className="w-12 flex flex-col gap-3 items-center py-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`w-8 h-8 rounded-lg ${i === 1 ? "bg-green-data/30 border border-green-data/40" : "bg-white/5 border border-white/8"}`} />
        ))}
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col gap-3">
        {/* KPI row */}
        <div className="grid grid-cols-4 gap-2">
          {["42 Vehicles", "128 Leads", "32d Avg", "£48.2k"].map((v, i) => (
            <div key={i} className={`p-2.5 rounded-xl border text-center ${i === 3 ? "bg-green-data/10 border-green-data/20" : "bg-white/5 border-white/8"}`}>
              <div className={`text-[10px] font-bold font-mono ${i === 3 ? "text-green-data" : "text-white/70"}`}>{v}</div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div className="flex-1 bg-white/3 rounded-xl border border-white/8 overflow-hidden">
          <div className="bg-white/5 px-3 py-2 border-b border-white/8 flex justify-between">
            <div className="h-2.5 w-24 bg-white/20 rounded-full" />
            <div className="h-6 w-16 bg-green-data/60 rounded-lg" />
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 border-b border-white/5">
              <div className="w-7 h-7 rounded-lg bg-white/8" />
              <div className="flex-1"><div className="h-2 w-3/4 bg-white/15 rounded-full mb-1.5" /><div className="h-1.5 w-1/2 bg-white/8 rounded-full" /></div>
              <div className="h-5 w-12 bg-green-data/20 rounded-full border border-green-data/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AiMockup() {
  const scores = [94, 88, 82, 79, 76];
  const labels = ["BMW 3 Series", "Ford Puma", "Tesla Model 3", "Nissan Qashqai", "Audi A3"];
  return (
    <div className="w-full h-full flex flex-col gap-3 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="h-2.5 w-32 bg-white/20 rounded-full mb-1.5" />
          <div className="h-1.5 w-20 bg-white/10 rounded-full" />
        </div>
        <div className="flex items-center gap-1.5 bg-green-data/10 border border-green-data/20 rounded-full px-3 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-data animate-pulse" />
          <span className="text-green-data text-[9px] font-bold">LIVE</span>
        </div>
      </div>
      {/* Health score */}
      <div className="bg-green-data/8 border border-green-data/20 rounded-2xl p-4 flex items-center gap-4">
        <div className="relative w-14 h-14 flex-shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
            <circle cx="28" cy="28" r="24" fill="none" stroke="#00D4AA" strokeWidth="6" strokeDasharray={2 * Math.PI * 24} strokeDashoffset={2 * Math.PI * 24 * 0.13} strokeLinecap="round" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-green-data font-bold text-sm font-mono">87</span>
        </div>
        <div>
          <p className="text-white font-bold text-sm">Portfolio Score</p>
          <p className="text-green-data text-[10px] font-bold uppercase tracking-wider">Optimal</p>
        </div>
      </div>
      {/* Demand bars */}
      <div className="flex-1 bg-white/3 rounded-xl border border-white/8 p-3 space-y-2">
        <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold mb-2">Regional Demand Index</p>
        {scores.map((score, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-white/50 text-[9px] w-20 truncate">{labels[i]}</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-green-data rounded-full" style={{ width: `${score}%`, opacity: 0.5 + (score / 200) }} />
            </div>
            <span className="text-green-data font-mono text-[9px] font-bold w-5 text-right">{score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCKUPS: Record<string, React.FC> = {
  website: WebsiteMockup,
  dms: DmsMockup,
  ai: AiMockup,
};

export default function ProductOverview() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    gsap.to(contentRef.current, {
      opacity: 0, y: 12, duration: 0.2, ease: "power2.in",
      onComplete: () => {
        setActiveTab(id);
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
        );
      }
    });
  };

  const activeData = tabs.find((t) => t.id === activeTab)!;
  const MockupComponent = MOCKUPS[activeTab];

  return (
    <section id="features" className="py-32 bg-[#080E1D] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-green-data" />
            <span className="text-green-data font-bold text-[11px] tracking-[0.25em] uppercase">The Platform</span>
            <div className="h-px w-8 bg-green-data" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Integrated Intelligence
          </h2>
          <p className="text-slate-brand text-lg max-w-xl mx-auto">
            Three modules. One platform. Complete command of your forecourt.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/3 border border-white/10 rounded-2xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-green-data text-navy shadow-[0_0_20px_rgba(0,212,170,0.3)]"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-green-data/60" />
              <span className="text-green-data/70 font-bold text-[10px] tracking-[0.2em] uppercase">{activeData.eyebrow}</span>
            </div>
            <h3 className="text-3xl md:text-4xl text-white mb-8 leading-[1.15] font-syne font-bold">
              {activeData.headline}
            </h3>
            <ul className="space-y-5">
              {activeData.features.map((feature, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-data/10 border border-green-data/25 flex items-center justify-center transition-all duration-300 group-hover:bg-green-data/20">
                    <svg className="w-3 h-3 text-green-data" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-[15px]">{feature.title}</span>
                    <span className="text-slate-brand text-[15px]"> — {feature.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A1225] shadow-[0_40px_120px_rgba(0,0,0,0.5)] aspect-[4/3]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <div className="ml-3 flex-1 h-5 bg-white/5 rounded-md flex items-center px-3">
                  <span className="text-white/20 text-[9px] font-mono">forecouriq.app/{activeTab}</span>
                </div>
              </div>
              <MockupComponent />
            </div>
            {/* Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-green-data/5 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
