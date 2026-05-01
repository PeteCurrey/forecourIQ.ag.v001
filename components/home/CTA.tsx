"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#00D4AA] py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[#0D1B3E]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-[#0D1B3E]/10 rounded-full blur-[100px]" />

      <div className="container-wide relative z-10 text-center">
        <h2 className="font-syne text-5xl md:text-7xl font-black text-[#0D1B3E] mb-8 leading-[1.1]">
          Stop Guessing.<br />
          Start Winning.
        </h2>
        <p className="text-[#0D1B3E]/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
          Join 100+ independent dealers who have secured their unfair advantage. 
          Your cinematic website and AI command centre are 48 hours away.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/demo"
            className="bg-[#0D1B3E] text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-[#162347] transition-all flex items-center gap-3 shadow-xl shadow-[#0D1B3E]/20"
          >
            Claim Your Territory
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/demo"
            className="border-2 border-[#0D1B3E]/20 text-[#0D1B3E] font-bold px-10 py-5 rounded-xl text-lg hover:border-[#0D1B3E]/40 transition-all"
          >
            Book a Demo
          </Link>
        </div>
        
        <p className="mt-8 text-[#0D1B3E]/50 text-sm font-bold uppercase tracking-widest">
          14-Day Free Trial • No Credit Card Required
        </p>
      </div>
    </section>
  );
}
