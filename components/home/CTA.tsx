import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-green-data relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-wide relative z-10 text-center">
        <h2 className="text-navy text-5xl md:text-7xl mb-8 max-w-4xl mx-auto">
          Stop Guessing. <br className="hidden md:block" />
          Start Winning.
        </h2>
        <p className="text-navy/60 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Join 100+ UK dealers who have already secured their unfair advantage. 
          Get live in 48 hours.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/demo"
            className="bg-navy text-white px-10 py-5 font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            Start Free Trial
          </Link>
          <Link
            href="/demo"
            className="border-2 border-navy text-navy px-10 py-5 font-bold text-lg hover:bg-navy hover:text-white transition-all"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
