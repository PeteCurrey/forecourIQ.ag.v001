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
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Free Tools", href: "/tools" },
      { name: "API Docs", href: "/api-docs" },
      { name: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/demo" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-syne text-3xl font-bold tracking-tight">
                Forecour<span className="text-green-data">IQ</span>
              </span>
            </Link>
            <p className="text-slate-brand max-w-sm mb-8 leading-relaxed">
              The precision intelligence platform for independent UK car dealers. 
              Modern websites, smart DMS, and AI market insight.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-syne text-sm font-bold uppercase tracking-widest mb-6 text-white/50">
                {column.title}
              </h4>
              <ul className="space-y-4">
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-brand">
          <p>© 2026 ForecourIQ Ltd · Registered in England and Wales.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
