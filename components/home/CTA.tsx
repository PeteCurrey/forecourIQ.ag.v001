import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#060C1A]">
      {/* Full-bleed green backdrop with depth */}
      <div className="absolute inset-8 md:inset-16 rounded-3xl bg-green-data overflow-hidden">
        {/* Decorative mesh */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #0D1B3E 0, #0D1B3E 1px, transparent 1px, transparent 50%)`,
            backgroundSize: "20px 20px",
          }}
        />
        {/* Radial glows */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 blur-[80px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-navy/20 blur-[80px] rounded-full" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8 py-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-navy/40" />
            <span className="text-navy/70 font-bold text-[11px] tracking-[0.25em] uppercase">
              Start Today
            </span>
            <div className="h-px w-8 bg-navy/40" />
          </div>

          <h2 className="font-syne font-bold text-navy text-4xl md:text-5xl lg:text-7xl leading-[1.0] tracking-tight mb-8 max-w-4xl">
            Stop Guessing.<br />Start Winning.
          </h2>

          <p className="text-navy/60 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            Join 100+ UK dealers who have already secured their unfair advantage.
            A bespoke website, smart DMS, and AI market brain — live in 48 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo"
              className="group inline-flex items-center gap-3 bg-navy text-white px-10 py-5 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.03] shadow-[0_20px_60px_rgba(13,27,62,0.4)]"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-3 border-2 border-navy/30 text-navy px-10 py-5 rounded-xl font-bold text-base hover:border-navy/60 transition-all duration-300"
            >
              Book a Demo
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-navy/40 text-sm font-medium">
            14-day free trial · No credit card · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
