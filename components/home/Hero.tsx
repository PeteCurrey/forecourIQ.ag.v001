"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ParticleField from "./ParticleField";

export default function Hero() {
  const container = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Split text animation logic
    const titleLines = gsap.utils.toArray(".hero-title-line");
    
    tl.from(".hero-eyebrow", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(titleLines, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    }, "-=0.6")
    .from(".hero-subheading", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.8")
    .from(".hero-ctas", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .from(".hero-stats", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.6")
    .from(cardRef.current, {
      x: 100,
      rotation: 5,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    }, "-=1.2");
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen bg-navy flex items-center pt-20 overflow-hidden">
      <ParticleField />
      
      <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side */}
        <div className="lg:col-span-7">
          <span className="hero-eyebrow inline-block text-green-data font-bold text-xs tracking-[0.15em] uppercase mb-6">
            AI-POWERED DEALER PLATFORM
          </span>
          <h1 ref={titleRef} className="text-white text-5xl md:text-7xl lg:text-[80px] leading-[1.05] mb-8">
            <span className="hero-title-line block">The Unfair</span>
            <span className="hero-title-line block">Advantage for</span>
            <span className="hero-title-line block">Independent Dealers</span>
          </h1>
          <p className="hero-subheading text-slate-brand text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            ForecourIQ gives UK independent dealers a cinematic website, a smart DMS, 
            and an AI buying brain that tells you exactly what to buy next — and why.
          </p>
          
          <div className="hero-ctas flex flex-wrap gap-4 mb-12">
            <Link href="/demo" className="btn-primary">
              Start Free Trial
            </Link>
            <Link href="/features" className="btn-secondary">
              See It Live
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-8">
            {[
              "14-Day Free Trial",
              "No Lock-in Contracts",
              "Setup in 48 Hours"
            ].map((stat, i) => (
              <div key={i} className="hero-stats flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-data" />
                <span className="text-white/60 text-sm font-medium">{stat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-5 relative">
          <div ref={cardRef} className="glass-card p-6 rounded-xl shadow-[0_0_50px_rgba(0,212,170,0.15)] border-white/10 relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-syne text-lg">Market Intelligence</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-white/5">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-white/40 uppercase tracking-wider font-bold">
                    <tr>
                      <th className="p-3">Vehicle</th>
                      <th className="p-3">Market</th>
                      <th className="p-3">AI Suggest</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-t border-white/5 bg-green-data/5">
                      <td className="p-3 font-bold">BMW 320d M Sport</td>
                      <td className="p-3">£18,450</td>
                      <td className="p-3 text-green-data">£17,900</td>
                      <td className="p-3">
                        <span className="bg-green-data text-navy px-2 py-1 rounded-sm text-[10px] font-black animate-pulse-glow">BUY</span>
                      </td>
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="p-3 font-bold">Audi A3 S Line</td>
                      <td className="p-3">£21,200</td>
                      <td className="p-3">£20,800</td>
                      <td className="p-3"><span className="text-white/20">HOLD</span></td>
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="p-3 font-bold">VW Golf GTI</td>
                      <td className="p-3">£24,500</td>
                      <td className="p-3">£23,900</td>
                      <td className="p-3"><span className="text-white/20">HOLD</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 p-4 rounded-lg">
                  <span className="text-white/40 text-[10px] block mb-1">LOCAL DEMAND</span>
                  <span className="text-green-data text-xl font-bold">HIGH</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <span className="text-white/40 text-[10px] block mb-1">DAYS TO SELL</span>
                  <span className="text-white text-xl font-bold">14.2</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-data/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
