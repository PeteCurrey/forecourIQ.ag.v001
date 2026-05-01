"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const steps = [
  {
    num: "01",
    title: "We build your dealer website",
    description:
      "Our team deploys a bespoke, SEO-optimised Next.js 15 website that loads in under 1 second. Every car is indexed, every lead is tracked. Live in 48 hours.",
  },
  {
    num: "02",
    title: "Your stock syncs everywhere",
    description:
      "Connect your feed once. We push your inventory to AutoTrader, eBay Motors, and CarGurus automatically. Update here, sync everywhere — instantly.",
  },
  {
    num: "03",
    title: "AI tells you what to buy next",
    description:
      "Our Buying Command Centre monitors the UK market 24/7. We flag profitable stock before it hits auction and tell you exactly what your local buyers want.",
  },
];

export default function HowItWorks() {
  const container = useRef(null);

  useGSAP(() => {
    // Animate the progress line filling left to right
    gsap.fromTo(
      ".progress-line",
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
          end: "bottom 35%",
          scrub: 2,
        },
      }
    );

    // Stagger in the step cards
    gsap.from(".step-card", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        end: "top 40%",
        scrub: 1,
      },
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-navy overflow-hidden relative">
      {/* Radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-data/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-green-data font-bold text-xs tracking-[0.2em] uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl text-white">
            The Path to Dominance
          </h2>
          <p className="text-slate-brand mt-4 text-lg">
            Three steps to a more profitable forecourt.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line — Desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-[2px] bg-white/5 z-0">
            <div className="progress-line absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-data/80 to-green-data" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="step-card flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative mb-8">
                  <div className="w-[104px] h-[104px] rounded-full bg-navy border-2 border-green-data/30 flex items-center justify-center font-syne font-bold shadow-[0_0_30px_rgba(0,212,170,0.15)]">
                    <span className="text-green-data text-3xl">{i + 1}</span>
                  </div>
                  {/* Outer pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-green-data/10 scale-[1.2] animate-pulse" />
                </div>

                {/* Step label */}
                <span className="text-green-data font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
                  Step {step.num}
                </span>
                <h3 className="text-xl md:text-2xl text-white font-bold mb-4 leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-brand leading-relaxed text-[15px] max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
