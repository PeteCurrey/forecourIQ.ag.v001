"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const problems = [
  {
    number: "01",
    title: "The Spreadsheet Trap",
    body: "Still managing your inventory on Excel? You're losing hours every week in manual data entry and portal syncing that should be automated.",
  },
  {
    number: "02",
    title: "Blind Buying",
    body: "Buying from auctions without real-time margin intelligence is gambling. We give you the exact ROI and days-to-sell estimate before you bid.",
  },
  {
    number: "03",
    title: "Portal Dependence",
    body: "Paying thousands for leads while your own website looks like it's from 2010. Convert your own traffic with a cinematic, high-conversion web presence.",
  },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".problem-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#060D1F] py-32 overflow-hidden">
      <div className="container-wide">
        <div className="max-w-3xl mb-20">
          <span className="text-[#00D4AA] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            The Status Quo
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-white leading-tight">
            Independent Dealers are being <br />
            suffocated by outdated tools.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="problem-card opacity-0 bg-[#0F1729] border border-[#1E2A40] rounded-2xl p-8 relative overflow-hidden group hover:border-[#00D4AA]/20 transition-colors"
            >
              <span className="font-syne text-[120px] font-black text-white/[0.04] absolute -top-8 -right-4 leading-none select-none group-hover:text-[#00D4AA]/[0.06] transition-colors">
                {problem.number}
              </span>
              <div className="relative z-10">
                <h3 className="font-syne text-xl font-bold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-[#8896AB] text-sm leading-relaxed">
                  {problem.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
