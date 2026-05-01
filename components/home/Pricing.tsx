"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    tagline: "Essential digital presence",
    monthlyPrice: 149,
    annualPrice: 124,
    description: "Perfect for dealers with up to 15 vehicles.",
    features: [
      { name: "Next.js 15 Website", included: true },
      { name: "Up to 15 Vehicles", included: true },
      { name: "Basic DMS", included: true },
      { name: "AutoTrader Feed", included: true },
      { name: "AI Buy Signals", included: false },
      { name: "FCA Compliance", included: false },
    ],
  },
  {
    name: "Professional",
    tagline: "The industry standard",
    monthlyPrice: 299,
    annualPrice: 249,
    popular: true,
    description: "Complete intelligence for growing dealerships.",
    features: [
      { name: "Next.js 15 Website", included: true },
      { name: "Up to 100 Vehicles", included: true },
      { name: "Advanced DMS", included: true },
      { name: "All Portal Sync", included: true },
      { name: "AI Buy Signals", included: true },
      { name: "FCA Compliance", included: true },
    ],
  },
  {
    name: "Elite",
    tagline: "Maximum intelligence",
    monthlyPrice: 499,
    annualPrice: 415,
    description: "Unlimited scale for multi-site groups.",
    features: [
      { name: "Next.js 15 Website", included: true },
      { name: "Unlimited Vehicles", included: true },
      { name: "Enterprise DMS", included: true },
      { name: "All Portal Sync", included: true },
      { name: "Full AI Command Centre", included: true },
      { name: "Multi-site Support", included: true },
    ],
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="bg-[#0D1B3E] py-32">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-[#00D4AA] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Investment
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-white mb-10">
            Transparent Pricing.
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium transition-colors", billingCycle === "monthly" ? "text-white" : "text-[#8896AB]")}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative w-14 h-7 bg-[#0F1729] border border-[#1E2A40] rounded-full transition-colors focus:outline-none"
            >
              <div
                className={cn(
                  "absolute top-1 left-1 w-5 h-5 bg-[#00D4AA] rounded-full transition-transform duration-300",
                  billingCycle === "annual" ? "translate-x-7" : "translate-x-0"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium transition-colors", billingCycle === "annual" ? "text-white" : "text-[#8896AB]")}>
              Annually <span className="text-[#00D4AA] ml-1.5 font-bold">(-15%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col bg-[#0F1729] border rounded-2xl p-8 transition-all duration-500",
                plan.popular
                  ? "border-[#00D4AA] shadow-[0_0_40_rgba(0,212,170,0.15)] scale-[1.02] z-10"
                  : "border-[#1E2A40]"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00D4AA] text-[#0D1B3E] font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-syne text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-[#8896AB] text-sm">{plan.tagline}</p>
              </div>

              <div className="mb-10 flex items-start">
                <span className="text-2xl align-top mt-3 text-white font-syne">£</span>
                <span className="font-syne text-6xl font-black text-white">
                  {billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <div className="ml-2 mt-auto pb-2">
                  <p className="text-[#8896AB] text-sm leading-tight">/mo</p>
                  {billingCycle === "annual" && (
                     <p className="text-[#00D4AA] text-[10px] font-bold uppercase tracking-wider">Billed Annually</p>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-[#00D4AA] mr-3 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 mr-3 flex items-center justify-center">
                         <div className="w-4 h-[1px] bg-[#1E2A40]" />
                      </div>
                    )}
                    <span className={feature.included ? "text-white/80" : "text-white/20"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/demo"
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-center transition-all duration-300",
                  plan.popular
                    ? "bg-[#00D4AA] text-[#0D1B3E] hover:bg-[#00BF9A]"
                    : "bg-white/5 border border-[#1E2A40] text-white hover:bg-white/10"
                )}
              >
                Select {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
