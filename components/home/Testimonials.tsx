"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    metric: "-38%",
    label: "Days to Sell",
    quote: "Since deploying ForecourIQ, our stock turn has accelerated beyond belief. We're buying smarter and selling faster than ever before.",
    author: "James Mellor",
    role: "Director",
    initials: "JM",
  },
  {
    metric: "2.4x",
    label: "Lead ROI",
    quote: "The cinematic website built our brand authority overnight. We're now converting leads that used to just bounce to the bigger portals.",
    author: "Sarah Chen",
    role: "Operations Manager",
    initials: "SC",
  },
  {
    metric: "+£420",
    label: "Avg Margin / Unit",
    quote: "The Buying Command Centre is our secret weapon. We're identifying undervalued auction stock that the other dealers are simply missing.",
    author: "Robert Hughes",
    role: "Owner",
    initials: "RH",
  },
];

const stats = [
  { value: "100+", label: "Active Dealers" },
  { value: "£1.2M", label: "Margin Generated" },
  { value: "48h", label: "Setup Time" },
  { value: "99.9%", label: "Uptime" },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".testimonial-card", {
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
        <div className="text-center mb-20">
          <span className="text-[#00D4AA] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Dealer Stories
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-white">
            Proven on the Forecourt.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card opacity-0 bg-[#0F1729] border border-[#1E2A40] rounded-2xl p-8 transition-all hover:border-[#00D4AA]/20"
            >
              <div className="bg-[#00D4AA]/10 text-[#00D4AA] font-syne font-black text-2xl px-4 py-2 rounded-xl mb-4 inline-block">
                {t.metric}
                <span className="block text-[10px] font-bold uppercase tracking-wider -mt-1 opacity-60">
                  {t.label}
                </span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4AA]/20 flex items-center justify-center text-[#00D4AA] font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-[#8896AB] text-[10px] uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-[#0A1228] border-y border-[#1E2A40] py-12 -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="font-syne text-4xl font-black text-[#00D4AA]">
                {stat.value}
              </p>
              <p className="text-[#8896AB] text-sm mt-1 uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
