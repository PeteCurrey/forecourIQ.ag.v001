import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProblemSection from "@/components/home/ProblemSection";
import ProductOverview from "@/components/home/ProductOverview";
import HowItWorks from "@/components/home/HowItWorks";
import Integrations from "@/components/home/Integrations";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "ForecourIQ | The Unfair Advantage for Independent Dealers",
  description:
    "UK SaaS platform for independent car dealers combining a cinematic dealer website, a cloud DMS/CRM, and an AI-powered Buying Command Centre. Start your 14-day free trial.",
  openGraph: {
    title: "ForecourIQ | The Unfair Advantage for Independent Dealers",
    description:
      "AI-powered dealer platform. Cinematic website, smart DMS, and real-time market intelligence for UK independent car dealers.",
    url: "https://forecouriq.com",
    siteName: "ForecourIQ",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="bg-navy min-h-screen">
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <ProductOverview />
      <HowItWorks />
      <Integrations />
      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  );
}
