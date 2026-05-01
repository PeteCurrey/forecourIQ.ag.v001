import { dealerAPI } from "@/lib/api";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone, Mail } from "lucide-react";

export default async function HomePage() {
  const [dealership, vehiclesData] = await Promise.all([
    dealerAPI.getDealership(),
    dealerAPI.getVehicles("?limit=6&sort=newest")
  ]);

  const { content, seo } = dealership.settings;
  const recentVehicles = vehiclesData.vehicles || [];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {content.hero_image && (
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-pulse"
            style={{ backgroundImage: `url(${content.hero_image})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
        )}
        <div className="container mx-auto px-6 relative z-10 text-center space-y-8 max-w-4xl">
          <h1 className="text-5xl lg:text-8xl font-syne font-bold tracking-tight leading-none">
            {content.hero_headline}
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto">
            {content.hero_subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/stock" className="btn-primary w-full sm:w-auto text-lg px-10 py-5">
              Browse Our Stock
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline w-full sm:w-auto text-lg px-10 py-5">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stock */}
      <section className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-syne font-bold mb-4">Latest Arrivals</h2>
            <p className="text-white/60">Quality hand-picked vehicles ready for immediate delivery.</p>
          </div>
          <Link href="/stock" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Stock <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentVehicles.map((vehicle: any) => (
            <Link 
              key={vehicle.id} 
              href={`/stock/${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.registration}`.toLowerCase()}
              className="card group"
            >
              <div className="aspect-[16/10] bg-white/5 relative overflow-hidden">
                {vehicle.images?.[0] ? (
                  <img src={vehicle.images[0]} alt={vehicle.model} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/10 font-black text-2xl uppercase italic">No Image</div>
                )}
                <div className="absolute top-4 right-4 bg-secondary/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {vehicle.fuel_type}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                  <p className="text-sm text-white/40">{vehicle.variant}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <p className="text-2xl font-bold text-primary">£{vehicle.asking_price.toLocaleString()}</p>
                  <p className="text-sm text-white/60 font-mono">{vehicle.mileage.toLocaleString()} mi</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="bg-white/5 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-5xl font-syne font-bold mb-4">Why Choose {dealership.name}?</h2>
            <p className="text-white/60">We pride ourselves on offering a transparent and stress-free car buying experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.usps.map((usp: any, i: number) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">{usp.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="container mx-auto px-6">
        <div className="bg-surface border border-white/5 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12 justify-between">
          <div className="space-y-6">
            <h3 className="text-3xl font-syne font-bold">Visit Us Today</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <p className="text-white/60">{seo.address || "Address details coming soon"}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <p className="text-xl font-bold">{seo.phone || "Call us today"}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 space-y-6">
             <h4 className="text-sm font-black uppercase tracking-widest text-primary">Opening Hours</h4>
             <div className="space-y-2 text-sm">
                {Object.entries(seo.opening_hours).map(([day, hours]: [string, any]) => (
                  <div key={day} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="capitalize">{day}</span>
                    <span className={hours.open ? "text-white" : "text-white/20"}>
                      {hours.open ? `${hours.start} - ${hours.end}` : "Closed"}
                    </span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
