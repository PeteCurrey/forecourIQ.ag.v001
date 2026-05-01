import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "/#integrations" },
      { name: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Compare",
    links: [
      { name: "vs Click Dealer", href: "/vs/click-dealer" },
      { name: "vs SpidersNet", href: "/vs/spidersnet" },
      { name: "vs Vehiso", href: "/vs/vehiso" },
    ],
  },
  {
    title: "Free Tools",
    links: [
      { name: "Margin Calculator", href: "/tools/margin-calculator" },
      { name: "Days to Sell Tool", href: "/tools/days-to-sell-estimator" },
      { name: "AutoTrader vs eBay", href: "/tools/autotrader-vs-ebay" },
      { name: "Pricing Guide", href: "/tools/pricing-guide" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "API Docs", href: "/api-docs" },
      { name: "Status", href: "/status" },
      { name: "Contact", href: "/demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#070C18] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-syne text-3xl font-bold tracking-tight text-white">
                Forecour<span className="text-green-data">IQ</span>
              </span>
            </Link>
            <p className="text-slate-brand max-w-xs mb-8 leading-relaxed text-sm">
              The precision intelligence platform for independent UK car dealers.
              Modern websites, smart DMS, and AI market insight in one platform.
            </p>
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 bg-green-data/10 border border-green-data/20 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-data animate-pulse" />
              <span className="text-green-data text-xs font-bold">All Systems Operational</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-syne text-xs font-bold uppercase tracking-[0.15em] mb-6 text-white/40">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-brand hover:text-green-data transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <p>© 2026 ForecourIQ Ltd · Registered in England and Wales.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
