import Hero from "@/components/home/Hero";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProblemSection from "@/components/home/ProblemSection";
import ProductOverview from "@/components/home/ProductOverview";
import HowItWorks from "@/components/home/HowItWorks";
import Integrations from "@/components/home/Integrations";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <ProductOverview />
      <HowItWorks />
      <Integrations />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}
