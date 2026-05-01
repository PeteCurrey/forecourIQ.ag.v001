"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParticleCanvas } from "../ui/ParticleCanvas";
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Content animation
      gsap.to(".hero-animate", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Mockup animation
      gsap.to(mockupRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-[#0D1B3E] flex items-center relative overflow-hidden pt-20"
    >
      {/* Particle Canvas */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Content */}
        <div ref={contentRef}>
          <span className="hero-animate opacity-0 inline-block text-[#00D4AA] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            The Industry Standard for Independents
          </span>
          <h1 className="hero-animate opacity-0 font-syne text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
            The Intelligence <br />
            Behind the Best <br />
            Forecourts.
          </h1>
          <p className="hero-animate opacity-0 text-[#8896AB] text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Everything you need to buy, manage, and sell vehicles with precision. 
            Custom dealer websites, cloud DMS, and AI-powered market insights.
          </p>

          <div className="hero-animate opacity-0 flex flex-wrap gap-5">
            <Link
              href="/demo"
              className="bg-[#00D4AA] text-[#0D1B3E] font-bold px-8 py-4 rounded-xl text-base hover:bg-[#00BF9A] hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              className="border border-white/20 text-white px-8 py-4 rounded-xl text-base hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Book a Demo
            </Link>
          </div>

          {/* Stat Pills */}
          <div className="hero-animate opacity-0 flex flex-wrap gap-4 mt-12">
            {[
              { icon: TrendingUp, text: "+38% Profit Margin" },
              { icon: ShieldCheck, text: "FCA Compliant" },
              { icon: Zap, text: "AutoTrader Certified" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 text-white/70 text-sm px-4 py-2 rounded-full flex items-center gap-2"
              >
                <stat.icon className="w-3.5 h-3.5 text-[#00D4AA]" />
                {stat.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Dashboard Mockup */}
        <div ref={mockupRef} className="opacity-0">
          <div className="bg-[#0F1729] border border-[#1E2A40] rounded-2xl p-6 shadow-2xl shadow-[#00D4AA]/10 relative overflow-hidden group">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
            
            {/* Mockup Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[#8896AB] text-[10px] font-mono uppercase tracking-wider mb-1">Market Insight</p>
                <h3 className="text-white font-syne font-bold">Buying Command Centre</h3>
              </div>
              <div className="bg-[#00D4AA]/10 text-[#00D4AA] text-[10px] font-bold px-3 py-1 rounded-full font-mono animate-pulse">
                LIVE MARKET FEED
              </div>
            </div>

            {/* Mockup Table */}
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-4 text-[#8896AB] text-[9px] font-mono uppercase tracking-widest pb-2 border-b border-white/5">
                <span>Vehicle</span>
                <span>Margin</span>
                <span>Demand</span>
                <span>Action</span>
              </div>
              {[
                { name: "BMW 3 Series", margin: "£2,450", demand: "High", action: "BUY", color: "green" },
                { name: "Audi A3 Sport", margin: "£1,820", demand: "Med", action: "BUY", color: "green" },
                { name: "VW Golf GTi", margin: "£2,100", demand: "High", action: "HOLD", color: "slate" },
                { name: "Ford Focus", margin: "£1,200", demand: "Low", action: "HOLD", color: "slate" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 items-center py-1 text-xs border-b border-white/[0.03]">
                  <span className="text-white font-medium">{row.name}</span>
                  <span className="text-[#00D4AA] font-mono">{row.margin}</span>
                  <span className="text-white/60">{row.demand}</span>
                  <span>
                    <span className={cn(
                      "text-[9px] font-bold px-2 py-0.5 rounded font-mono",
                      row.action === "BUY" ? "bg-[#00D4AA]/10 text-[#00D4AA] animate-pulse" : "bg-white/5 text-[#8896AB]"
                    )}>
                      {row.action}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Avg Days to Sell", value: "22 Days" },
                { label: "Stock Turn", value: "14.2x" },
                { label: "ROI Est.", value: "24.5%" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl">
                  <p className="text-[#8896AB] text-[8px] uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-[#00D4AA] font-syne font-bold text-sm">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
