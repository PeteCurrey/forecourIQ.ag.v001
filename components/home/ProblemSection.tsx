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
        end: "bottom 20%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {problems.map((p, i) => (
            <div key={i} className="problem-card relative group">
              <div className="font-syne text-[140px] leading-none font-black text-green-data/10 absolute -top-12 -left-4 select-none z-0">
                {p.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl mb-6 text-navy">
                  {p.title}
                </h3>
                <p className="text-slate-brand leading-relaxed">
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
