"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const steps = [
  {
    title: "We build your dealer website",
    description: "Our team deploys a bespoke, SEO-optimised Next.js 15 website that loads in under 1 second. Every car is indexed, every lead is tracked.",
  },
  {
    title: "Your stock syncs everywhere",
    description: "Connect your feed once. We push your inventory to AutoTrader, eBay Motors, and CarGurus automatically. Update here, sync everywhere.",
  },
  {
    title: "AI tells you what to buy next",
    description: "Our Buying Command Centre monitors the UK market 24/7. We flag profitable stock before it hits auction and tell you exactly what your local buyers want.",
  },
];

export default function HowItWorks() {
  const container = useRef(null);
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 1,
      }
    });

    tl.to(dotRef.current, {
      motionPath: {
        path: ".how-it-works-line",
        align: ".how-it-works-line",
        alignOrigin: [0.5, 0.5]
      },
      duration: 1,
      ease: "none"
    });
    
    // Simpler linear progress for desktop line
    gsap.fromTo(".progress-line", 
      { scaleX: 0 },
      { 
        scaleX: 1, 
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 2,
        }
      }
    );

    gsap.from(".step-card", {
      y: 40,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl text-navy">The Path to Dominance</h2>
          <p className="text-slate-brand mt-4 text-lg">Three steps to a more profitable forecourt.</p>
        </div>

        <div className="relative">
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-slate-light z-0">
             <div className="progress-line absolute top-0 left-0 w-full h-full bg-green-data" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="step-card flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-navy text-green-data flex items-center justify-center font-syne text-3xl font-bold mb-8 border-4 border-white shadow-xl relative">
                  {i + 1}
                  {/* Travelling Dot (Mobile hidden/conceptual) */}
                  {i === 0 && (
                    <div ref={dotRef} className="absolute w-4 h-4 bg-green-data rounded-full blur-[2px] opacity-0 lg:opacity-100" />
                  )}
                </div>
                <h3 className="text-2xl mb-4 text-navy font-bold">{step.title}</h3>
                <p className="text-slate-brand leading-relaxed max-w-sm">
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
