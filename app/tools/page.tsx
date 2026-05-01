import Link from "next/link";
import { Metadata } from "next";
import { Calculator, CalendarClock, Scale, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Tools for Car Dealers | ForecourIQ",
  description: "Free calculators, estimators, and guides to help independent UK car dealers optimise their buying, pricing, and advertising.",
};

const tools = [
  {
    title: "Margin & Profit Calculator",
    desc: "Calculate gross margin, net profit, and break-even asking prices for your vehicle stock.",
    icon: Calculator,
    href: "/tools/margin-calculator"
  },
  {
    title: "Days-to-Sell Estimator",
    desc: "Check regional demand to see how long a specific make and model typically takes to sell.",
    icon: CalendarClock,
    href: "/tools/days-to-sell-estimator"
  },
  {
    title: "AutoTrader vs eBay Motors Guide",
    desc: "An in-depth comparison of listing costs, audience reach, and lead quality for independent dealers.",
    icon: Scale,
    href: "/tools/autotrader-vs-ebay"
  },
  {
    title: "Used Car Pricing Guide",
    desc: "Strategies for pricing your stock to maximise margin without killing your turnover rate.",
    icon: TrendingUp,
    href: "/tools/pricing-guide"
  }
];

export default function ToolsIndexPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dms-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl lg:text-6xl font-syne font-bold text-white mb-6">Free Dealer Tools</h1>
            <p className="text-xl text-slate-brand leading-relaxed">
              We built these free tools to help independent UK car dealers make data-driven decisions on the forecourt.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tools.map((tool, i) => (
              <Link key={i} href={tool.href} className="bg-dms-surface border border-dms-border p-8 rounded-2xl hover:border-green-data/50 transition-all group">
                 <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
                    <tool.icon className="w-7 h-7 text-green-data group-hover:scale-110 transition-transform" />
                 </div>
                 <h2 className="text-2xl font-bold text-white mb-3">{tool.title}</h2>
                 <p className="text-slate-brand leading-relaxed mb-6">{tool.desc}</p>
                 <span className="text-green-data font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Launch Tool <span className="text-lg">→</span>
                 </span>
              </Link>
            ))}
         </div>
      </div>
    </div>
  );
}
