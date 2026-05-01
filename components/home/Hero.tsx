"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";

const TABLE_DATA = [
  {
    vehicle: "BMW 320d M Sport",
    year: "2021",
    days: 14,
    market: "£18,450",
    ai: "£17,900",
    action: "BUY",
    hot: true,
  },
  {
    vehicle: "Audi A3 S Line 2.0",
    year: "2020",
    days: 22,
    market: "£21,200",
    ai: "£20,800",
    action: "HOLD",
    hot: false,
  },
  {
    vehicle: "Ford Puma ST-Line",
    year: "2022",
    days: 11,
    market: "£19,100",
    ai: "£18,500",
    action: "BUY",
    hot: false,
  },
  {
    vehicle: "VW Golf GTI DSG",
    year: "2021",
    days: 18,
    market: "£24,500",
    ai: "£23,900",
    action: "HOLD",
    hot: false,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.from(".hero-label", { y: 16, opacity: 0, duration: 0.7, ease: "power3.out" })
        .from(".hero-line-1", { y: 48, opacity: 0, duration: 0.9, ease: "power4.out" }, "-=0.4")
        .from(".hero-line-2", { y: 48, opacity: 0, duration: 0.9, ease: "power4.out" }, "-=0.7")
        .from(".hero-line-3", { y: 48, opacity: 0, duration: 0.9, ease: "power4.out" }, "-=0.7")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
        .from(".hero-pills", { y: 16, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from(
          cardRef.current,
          { x: 80, rotation: 3, opacity: 0, duration: 1.2, ease: "power4.out" },
          "-=1.0"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-[#060C1A] via-navy to-[#0A1628] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Particle canvas */}
      <ParticleField />

      {/* Top radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-green-data/8 blur-[180px] rounded-full pointer-events-none" />
      {/* Bottom left glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* ── LEFT ── */}
        <div className="lg:col-span-6 xl:col-span-7">
          {/* Eyebrow */}
          <div className="hero-label inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-green-data" />
            <span className="text-green-data font-bold text-[11px] tracking-[0.25em] uppercase">
              AI-Powered Dealer Platform
            </span>
          </div>

          {/* Headline — split into separate spans for GSAP */}
          <h1 className="font-syne font-bold leading-[1.0] tracking-tight mb-8 overflow-hidden">
            <span className="hero-line-1 block text-white text-[52px] md:text-[68px] lg:text-[72px] xl:text-[80px]">
              The Unfair
            </span>
            <span className="hero-line-2 block text-white text-[52px] md:text-[68px] lg:text-[72px] xl:text-[80px]">
              Advantage for
            </span>
            <span className="hero-line-3 block text-[52px] md:text-[68px] lg:text-[72px] xl:text-[80px]">
              <span className="text-green-data">Independent</span> Dealers
            </span>
          </h1>

          {/* Subheading */}
          <p className="hero-sub text-[17px] md:text-[18px] text-slate-brand leading-relaxed max-w-lg mb-10">
            ForecourIQ gives UK independent dealers a cinematic website, a smart
            DMS, and an AI buying brain that tells you exactly what to stock next
            — and why.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-4 mb-10">
            <Link
              href="/demo"
              className="group inline-flex items-center gap-3 bg-green-data text-navy px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.03] shadow-[0_0_30px_rgba(0,212,170,0.35)]"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-3 bg-white/5 border border-white/15 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:bg-white/10"
            >
              See It Live
            </Link>
          </div>

          {/* Trust pills */}
          <div className="hero-pills flex flex-wrap gap-6">
            {["14-Day Free Trial", "No Lock-in Contracts", "Live in 48 Hours"].map((pill) => (
              <div key={pill} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-data shadow-[0_0_6px_rgba(0,212,170,0.8)]" />
                <span className="text-white/50 text-sm font-medium">{pill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Dashboard Card ── */}
        <div className="lg:col-span-6 xl:col-span-5 relative">
          <div
            ref={cardRef}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A1225]/90 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_60px_rgba(0,212,170,0.08)]"
          >
            {/* Card header bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 bg-white/3">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-data animate-pulse" />
                <span className="text-green-data text-[10px] font-bold uppercase tracking-widest">
                  AI Command Centre — Live
                </span>
              </div>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-3 divide-x divide-white/8 border-b border-white/8">
              {[
                { label: "Portfolio Score", value: "87/100", color: "text-green-data" },
                { label: "Avg Days to Sell", value: "16.2d", color: "text-white" },
                { label: "Opportunities", value: "8 New", color: "text-green-data" },
              ].map((stat) => (
                <div key={stat.label} className="px-4 py-3 text-center">
                  <p className="text-white/30 text-[9px] uppercase tracking-widest mb-1 font-bold">{stat.label}</p>
                  <p className={`font-mono font-bold text-sm ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="p-4">
              <div className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-3 px-1">
                AI Buying Intelligence — East Midlands
              </div>
              <div className="rounded-xl overflow-hidden border border-white/8">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/3 border-b border-white/8">
                      <th className="px-3 py-2.5 text-[9px] font-bold text-white/30 uppercase tracking-widest">Vehicle</th>
                      <th className="px-3 py-2.5 text-[9px] font-bold text-white/30 uppercase tracking-widest text-right">Market</th>
                      <th className="px-3 py-2.5 text-[9px] font-bold text-white/30 uppercase tracking-widest text-right">AI Price</th>
                      <th className="px-3 py-2.5 text-[9px] font-bold text-white/30 uppercase tracking-widest text-right">Signal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {TABLE_DATA.map((row, i) => (
                      <tr
                        key={i}
                        className={`transition-colors ${row.hot ? "bg-green-data/5" : "hover:bg-white/3"}`}
                      >
                        <td className="px-3 py-2.5">
                          <p className="text-white font-bold text-xs">{row.vehicle}</p>
                          <p className="text-white/30 text-[9px]">{row.year} · {row.days}d avg</p>
                        </td>
                        <td className="px-3 py-2.5 text-right font-mono text-xs text-white/60">{row.market}</td>
                        <td className="px-3 py-2.5 text-right font-mono text-xs text-green-data font-bold">{row.ai}</td>
                        <td className="px-3 py-2.5 text-right">
                          {row.action === "BUY" ? (
                            <span className="inline-block bg-green-data text-navy text-[9px] font-black px-2 py-1 rounded-md animate-pulse-glow">
                              BUY
                            </span>
                          ) : (
                            <span className="inline-block text-white/20 text-[9px] font-bold">HOLD</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bottom metrics */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-green-data/8 border border-green-data/15 rounded-xl px-4 py-3">
                  <p className="text-green-data/60 text-[9px] uppercase tracking-widest font-bold mb-1">Local Demand</p>
                  <p className="text-green-data font-bold text-lg font-mono">HIGH</p>
                </div>
                <div className="bg-white/3 border border-white/8 rounded-xl px-4 py-3">
                  <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold mb-1">Avg Margin</p>
                  <p className="text-white font-bold text-lg font-mono">£3,840</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating glow behind card */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-data/6 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <div className="w-px h-10 bg-white/40" />
        <span className="text-white text-[10px] uppercase tracking-widest font-bold">Scroll</span>
      </div>
    </section>
  );
}
