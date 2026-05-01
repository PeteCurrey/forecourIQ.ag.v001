"use client";

import { Star } from "lucide-react";

const partners = [
  "Peak Performance Cars",
  "Derbyshire Motors",
  "Apex Car Group",
  "Elite Automotive",
  "Prestige Selection",
  "Independent Specialist",
];

export default function SocialProofBar() {
  return (
    <div className="bg-[#0A1228] border-y border-[#1E2A40] py-6 relative overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#00D4AA] text-[#00D4AA]" />
              ))}
            </div>
            <span className="text-white text-sm font-semibold">4.9/5 Trustpilot</span>
          </div>

          <div className="hidden md:flex items-center gap-12 overflow-hidden">
            <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((name, i) => (
                <div key={i} className="flex items-center gap-8">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] select-none">
                    Verified Dealer
                  </span>
                  <span className="text-white/50 text-sm font-medium">{name}</span>
                  <span className="text-[#00D4AA]/40 font-bold">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
