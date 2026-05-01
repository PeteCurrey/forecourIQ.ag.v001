import ProductOverview from "@/components/home/ProductOverview";
import Integrations from "@/components/home/Integrations";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Features | ForecourIQ",
  description: "Explore the AI-powered tools that give independent UK car dealers an unfair advantage.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-navy text-white text-center">
        <div className="container-wide">
          <h1 className="text-5xl md:text-7xl mb-8">The Platform for Performance</h1>
          <p className="text-xl text-slate-brand max-w-2xl mx-auto">
            Everything you need to run a modern, data-driven dealership. 
            No fluff, just features that move metal.
          </p>
        </div>
      </section>
      <ProductOverview />
      <Integrations />
      <CTA />
    </div>
  );
}
