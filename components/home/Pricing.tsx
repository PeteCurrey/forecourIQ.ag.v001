"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedCounter from "../ui/AnimatedCounter";

const plans = [
  {
    name: "Starter",
    price: 149,
    tagline: "Perfect for boutique dealers",
    features: [
      { text: "Next.js 15 Website", included: true },
      { text: "Up to 25 Vehicles", included: true },
      { text: "Lead Management CRM", included: true },
      { text: "AutoTrader Sync", included: true },
      { text: "AI Market Insights", included: false },
      { text: "FCA Compliance Tools", included: false },
    ],
  },
  {
    name: "Professional",
    price: 299,
    tagline: "The dealer standard",
    popular: true,
    features: [
      { text: "Next.js 15 Website", included: true },
      { text: "Up to 100 Vehicles", included: true },
      { text: "Lead Management CRM", included: true },
      { text: "All Portal Sync", included: true },
      { text: "AI Market Insights", included: true },
      { text: "FCA Compliance Tools", included: true },
    ],
  },
  {
    name: "Elite",
    price: 499,
    tagline: "Maximum intelligence",
    features: [
      { text: "Next.js 15 Website", included: true },
      { text: "Unlimited Vehicles", included: true },
      { text: "Lead Management CRM", included: true },
      { text: "All Portal Sync", included: true },
      { text: "AI Buying Command Centre", included: true },
      { text: "Full API Access", included: true },
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-navy mb-8">Simple, Transparent Pricing</h2>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isAnnual ? "text-navy" : "text-slate-brand"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-navy/10 rounded-full relative p-1 transition-colors hover:bg-navy/20"
            >
              <div className={`w-6 h-6 bg-navy rounded-full transition-transform ${isAnnual ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? "text-navy" : "text-slate-brand"}`}>
              Annually <span className="text-green-data ml-1">(Save 2 Months)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.popular 
                  ? "border-navy bg-navy text-white shadow-2xl scale-105 z-10" 
                  : "border-navy/5 bg-slate-light text-navy"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-data text-navy text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`${plan.popular ? "text-slate-brand" : "text-slate-brand"} text-sm`}>{plan.tagline}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">£</span>
                  <span className="text-6xl font-bold tracking-tight">
                    <AnimatedCounter value={isAnnual ? Math.floor(plan.price * 10 / 12) : plan.price} />
                  </span>
                  <span className="text-slate-brand font-medium">/mo</span>
                </div>
                {isAnnual && (
                   <p className="text-green-data text-xs font-bold mt-2">Billed annually at £{(plan.price * 10).toLocaleString()}/yr</p>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <svg className={`w-5 h-5 ${plan.popular ? "text-green-data" : "text-green-data"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div className="w-5 h-[2px] bg-slate-brand/30" />
                    )}
                    <span className={feature.included ? "opacity-100" : "opacity-40"}>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/demo"
                className={`w-full py-4 text-center font-bold transition-all ${
                  plan.popular 
                    ? "bg-green-data text-navy hover:scale-[1.02]" 
                    : "bg-navy text-white hover:bg-navy/90"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-slate-brand text-sm">
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
