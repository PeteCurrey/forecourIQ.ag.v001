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
      { text: "Bespoke Next.js 15 Website", included: true },
      { text: "Up to 25 Vehicles", included: true },
      { text: "Lead Management CRM", included: true },
      { text: "AutoTrader Feed Sync", included: true },
      { text: "AI Market Insights", included: false },
      { text: "FCA Compliance Audit Trail", included: false },
      { text: "AI Buying Command Centre", included: false },
    ],
  },
  {
    name: "Professional",
    price: 299,
    tagline: "The dealer standard",
    popular: true,
    features: [
      { text: "Bespoke Next.js 15 Website", included: true },
      { text: "Up to 100 Vehicles", included: true },
      { text: "Lead Management CRM", included: true },
      { text: "All Portal Sync (AT, eBay, CG)", included: true },
      { text: "AI Market Insights", included: true },
      { text: "FCA Compliance Audit Trail", included: true },
      { text: "AI Buying Command Centre", included: false },
    ],
  },
  {
    name: "Elite",
    price: 499,
    tagline: "Maximum intelligence",
    features: [
      { text: "Bespoke Next.js 15 Website", included: true },
      { text: "Unlimited Vehicles", included: true },
      { text: "Lead Management CRM", included: true },
      { text: "All Portal Sync", included: true },
      { text: "AI Market Insights", included: true },
      { text: "FCA Compliance Audit Trail", included: true },
      { text: "AI Buying Command Centre", included: true },
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-[#080E1D] relative overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-data/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-data font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl text-white mb-8">
            Simple, Transparent Pricing
          </h2>

          {/* Annual toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold transition-colors ${!isAnnual ? "text-white" : "text-slate-brand"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-white/10 border border-white/10 transition-colors hover:border-green-data/30"
              aria-label="Toggle annual billing"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-green-data rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(0,212,170,0.5)] ${
                  isAnnual ? "left-8" : "left-1"
                }`}
              />
            </button>
            <span className={`text-sm font-bold transition-colors ${isAnnual ? "text-white" : "text-slate-brand"}`}>
              Annually{" "}
              <span className="text-green-data">(Save 2 Months)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-green-data/50 bg-white/5 shadow-[0_0_60px_rgba(0,212,170,0.1)] scale-105"
                  : "border-white/10 bg-white/3 hover:border-white/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-data text-navy text-[10px] font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Plan name + tagline */}
              <div className="mb-8">
                <h3 className="text-xl font-syne font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-slate-brand text-sm">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">£</span>
                  <span className="text-6xl font-bold tracking-tight text-white font-mono">
                    <AnimatedCounter value={isAnnual ? Math.floor((plan.price * 10) / 12) : plan.price} />
                  </span>
                  <span className="text-slate-brand font-medium">/mo</span>
                </div>
                {isAnnual && (
                  <p className="text-green-data text-xs font-bold mt-2">
                    Billed annually — £{(plan.price * 10).toLocaleString()}/yr
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <svg
                        className="w-5 h-5 text-green-data flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-4 h-[2px] bg-white/15 rounded" />
                      </div>
                    )}
                    <span className={feature.included ? "text-white/80" : "text-white/25"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/demo"
                className={`w-full py-4 text-center font-bold rounded-xl transition-all text-sm ${
                  plan.popular
                    ? "bg-green-data text-navy hover:scale-[1.02] shadow-[0_0_20px_rgba(0,212,170,0.3)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Get Started Free
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
