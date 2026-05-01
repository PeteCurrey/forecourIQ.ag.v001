"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Connect Data",
    body: "We integrate with your AutoTrader feed and banking to map your existing dealership performance.",
  },
  {
    number: "02",
    title: "Deploy Platform",
    body: "Your cinematic website and cloud DMS are live within 48 hours, fully pre-populated with your stock.",
  },
  {
    number: "03",
    title: "Apply Intelligence",
    body: "Start using the Buying Command Centre to secure high-margin stock before your competitors even see it.",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".step-animate", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="how-it-works" className="bg-[#060D1F] py-32">
      <div className="container-wide">
        <div className="text-center mb-24">
          <span className="text-[#00D4AA] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            The Process
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-white">
            Operational Excellence. <br />
            Streamlined.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full border-t border-dashed border-[#1E2A40] -z-0" />

          {steps.map((step, i) => (
            <div key={i} className="step-animate opacity-0 relative z-10 flex flex-col items-center text-center">
              <span className="font-syne text-6xl font-black text-[#00D4AA]/20 mb-6 bg-[#060D1F] px-4">
                {step.number}
              </span>
              <h3 className="font-syne text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-[#8896AB] text-sm leading-relaxed max-w-xs mx-auto">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
