"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const problems = [
  {
    num: "01",
    title: "Your website was built in 2018 and looks like it.",
    text: "Buyers judge your dealership in 3 seconds. If your site loads slowly, looks dated, or doesn't surface your stock clearly on Google, they're gone to the dealer two miles away.",
  },
  {
    num: "02",
    title: "Your DMS is three spreadsheets and a WhatsApp group.",
    text: "Managing stock, leads, and compliance across disconnected tools costs you hours every week and deals every month.",
  },
  {
    num: "03",
    title: "You're buying on instinct. Your competitors are buying on data.",
    text: "Without live market intelligence, you're guessing what to stock. ForecourIQ tells you exactly what the local market wants and what it will pay.",
  },
];

export default function ProblemSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".problem-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 30%",
        scrub: 1,
      },
      y: 80,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-navy/50 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 80px)`,
        }}
      />

      <div className="container-wide relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-green-data font-bold text-xs tracking-[0.2em] uppercase mb-4">
            The Reality for Most Dealers
          </span>
          <h2 className="text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-[1.1]">
            Three problems killing your margin right now.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="problem-card relative group">
              {/* Large background number */}
              <div className="font-syne text-[120px] leading-none font-black text-green-data/8 absolute -top-8 -left-4 select-none z-0 pointer-events-none">
                {p.num}
              </div>
              {/* Card */}
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:border-green-data/30 hover:bg-white/8 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(0,212,170,0.05)]">
                <div className="w-8 h-0.5 bg-green-data mb-6" />
                <h3 className="text-xl md:text-2xl mb-5 text-white font-syne font-bold leading-snug">
                  {p.title}
                </h3>
                <p className="text-slate-brand leading-relaxed text-[15px]">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
