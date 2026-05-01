"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Check } from "lucide-react";

const products = [
  {
    id: "websites",
    name: "Cinematic Websites",
    heading: "The highest conversion rates in the industry.",
    description: "Next-gen websites built on Next.js 15 for lightning-fast speeds and cinematic UX that builds instant authority.",
    features: ["Fully Responsive Design", "Instant Lead Notifications", "SEO Optimized Pages", "Vehicle Search Filters"],
    image: "/mockups/website.png",
  },
  {
    id: "dms",
    name: "Cloud DMS",
    heading: "Run your dealership from anywhere.",
    description: "Manage inventory, leads, and finances in one unified dashboard designed for modern independent dealers.",
    features: ["AutoTrader Portal Sync", "Digital Invoicing", "FCA Compliance Logs", "Customer CRM"],
    image: "/mockups/dms.png",
  },
  {
    id: "intelligence",
    name: "Market Intelligence",
    heading: "Buy with 100% certainty.",
    description: "AI-powered data that tells you exactly what to buy, what to pay, and when to sell for maximum ROI.",
    features: ["Live Market Value Data", "Auction Buy Signals", "Days-to-sell Predictor", "Margin Calculator"],
    image: "/mockups/intelligence.png",
  },
];

export default function ProductOverview() {
  const [activeTab, setActiveTab] = useState(products[0]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".tab-content-animate", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, contentRef);
    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section className="bg-[#0D1B3E] py-32 overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-[#00D4AA] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            The Product
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-white mb-10">
            A Unified Intelligence Layer.
          </h2>

          {/* Tab Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab.id === product.id
                    ? "bg-[#00D4AA] text-[#0D1B3E]"
                    : "bg-[#0F1729] text-[#8896AB] hover:text-white"
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="tab-content-animate opacity-0">
            <h3 className="font-syne text-3xl font-bold text-white mb-6 leading-tight">
              {activeTab.heading}
            </h3>
            <p className="text-[#8896AB] text-lg leading-relaxed mb-8">
              {activeTab.description}
            </p>
            <ul className="space-y-4">
              {activeTab.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#00D4AA]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#00D4AA]" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Mockup */}
          <div className="tab-content-animate opacity-0 relative">
            <div className="bg-[#0F1729] border border-[#1E2A40] rounded-2xl overflow-hidden shadow-2xl">
              {/* Browser Chrome */}
              <div className="bg-[#0A1228] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="mx-auto bg-white/5 rounded px-3 py-0.5 text-[9px] text-[#8896AB] font-mono">
                  forecouriq.app/{activeTab.id}
                </div>
              </div>
              <div className="aspect-[16/10] bg-[#0F1729] relative p-8">
                {/* Visual placeholder for mockup content */}
                <div className="w-full h-full border border-white/5 rounded-xl bg-white/[0.01] flex items-center justify-center">
                   <div className="text-center">
                      <p className="font-syne font-bold text-white/20 text-4xl mb-2">{activeTab.name}</p>
                      <p className="text-[#8896AB]/20 font-mono text-xs uppercase tracking-widest">Interface Preview</p>
                   </div>
                </div>
              </div>
            </div>
            {/* Ambient Glow */}
            <div className="absolute -inset-10 bg-[#00D4AA]/5 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
