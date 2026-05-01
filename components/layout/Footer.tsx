"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Inventory", href: "#" },
      { name: "Buying Tool", href: "#" },
      { name: "Websites", href: "#" },
      { name: "DMS", href: "#" },
    ],
  },
  {
    title: "Intelligence",
    links: [
      { name: "Market Insights", href: "#" },
      { name: "ROI Calculator", href: "#" },
      { name: "Dealer Audit", href: "#" },
      { name: "Lead Tracking", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Journal", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#060D1F] border-t border-[#1E2A40] pt-24 pb-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="font-syne font-bold text-white text-lg">
              Forecour<span className="text-green-data">IQ</span>
            </Link>
            <p className="text-[#8896AB] text-sm mt-4 max-w-xs leading-relaxed">
              The precision intelligence platform for modern independent car dealers. 
              Built in the UK for those who demand operational excellence.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-widest">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#8896AB] text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1E2A40] pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#8896AB] text-xs">
            © {new Date().getFullYear()} ForecourIQ Ltd. All rights reserved. 
            Registered in England and Wales.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[#8896AB] text-xs hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#8896AB] text-xs hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
