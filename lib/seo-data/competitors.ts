export interface Competitor {
  name: string;
  slug: string;
  hero_title: string;
  hero_desc: string;
  weaknesses: string[];
  features: { name: string; us: string | boolean; them: string | boolean }[];
  switching_steps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const competitors: Competitor[] = [
  {
    name: "Click Dealer",
    slug: "click-dealer",
    hero_title: "ForecourIQ vs Click Dealer — Which is Better for UK Independent Dealers?",
    hero_desc: "Click Dealer is an established name, but modern independent dealers are switching to ForecourIQ for built-in AI tools, transparent pricing, and lightning-fast websites.",
    weaknesses: [
      "No native AI buying intelligence or market data tools.",
      "Dated website templates that look similar across hundreds of dealers.",
      "Opaque pricing with an add-on cost model for essential features.",
      "Long-term contracts that lock you in."
    ],
    features: [
      { name: "Website Speed (Mobile)", us: "95+ (Lighthouse)", them: "Average" },
      { name: "AI Buying Command Centre", us: true, them: false },
      { name: "AutoTrader Two-Way Sync", us: true, them: true },
      { name: "Transparent Monthly Pricing", us: true, them: false },
      { name: "Rolling 30-Day Contracts", us: true, them: false },
      { name: "Built-in Margin Calculator", us: true, them: false },
      { name: "Automated SEO Generation", us: true, them: "Add-on cost" }
    ],
    switching_steps: [
      { title: "Export Data", desc: "Request a CSV export of your current stock and leads from Click Dealer." },
      { title: "Setup Account", desc: "Create your ForecourIQ account and upload your CSV. We map the data automatically." },
      { title: "Website Design", desc: "Select your brand tokens. Our system generates a stunning, modern website instantly." },
      { title: "Connect Feeds", desc: "Add your AutoTrader and eBay Motors API keys to route stock and leads." },
      { title: "Go Live", desc: "Point your domain name to ForecourIQ. Fully live in under 48 hours." }
    ],
    faqs: [
      { q: "Is ForecourIQ better than Click Dealer?", a: "If you value modern design, fast performance, and AI-driven market data to help you buy better stock, ForecourIQ is the clear winner." },
      { q: "Does ForecourIQ integrate with the same platforms as Click Dealer?", a: "Yes, we integrate with AutoTrader, eBay Motors, CAP HPI, Evolution Funding, and all the major platforms you rely on." },
      { q: "How much does ForecourIQ cost compared to Click Dealer?", a: "ForecourIQ offers transparent, fixed monthly tiers with no hidden add-on costs for modules like SEO or premium support." },
      { q: "Will ForecourIQ import my Click Dealer data?", a: "Yes, we handle the full data migration of your active stock and customer leads during onboarding." }
    ]
  },
  {
    name: "Spidersnet",
    slug: "spidersnet",
    hero_title: "ForecourIQ vs Spidersnet — The Modern Alternative",
    hero_desc: "While Spidersnet has been around for decades, independent dealers are upgrading to ForecourIQ to get a true all-in-one DMS powered by cutting-edge AI.",
    weaknesses: [
      "Fragmented software experience between website and dealer management.",
      "Lacks modern AI insights for vehicle sourcing.",
      "Websites often suffer from poor Core Web Vitals on mobile."
    ],
    features: [
      { name: "Next.js 15 Architecture", us: true, them: false },
      { name: "AI Market Pulse Data", us: true, them: false },
      { name: "Integrated CRM", us: true, them: "Basic" },
      { name: "Cinematic Image Galleries", us: true, them: false },
      { name: "No Long Term Contracts", us: true, them: false }
    ],
    switching_steps: [
      { title: "VRM Import", desc: "Provide your VRMs and we'll pull your stock directly via DVLA/HPI." },
      { title: "Choose Theme", desc: "Select a modern, high-converting design layout." },
      { title: "Connect Integrations", desc: "Link your finance and advertising platforms." },
      { title: "Domain Transfer", desc: "We guide you through pointing your domain away from Spidersnet." },
      { title: "Launch", desc: "Start managing your dealership from a single, fast dashboard." }
    ],
    faqs: [
      { q: "Why move from Spidersnet?", a: "To get a significantly faster website, a more intuitive DMS, and AI tools that actually help you source better stock." },
      { q: "Can I keep my domain name?", a: "Yes, 100%. You own your domain name, you just point it to our servers." }
    ]
  },
  {
    name: "Vehiso",
    slug: "vehiso",
    hero_title: "ForecourIQ vs Vehiso — Which DMS Should You Choose?",
    hero_desc: "Vehiso is a strong newer entrant, but ForecourIQ goes beyond basic stock management by providing an institutional-grade AI Buying Command Centre.",
    weaknesses: [
      "Missing advanced AI market intelligence features.",
      "Less focus on premium, cinematic website aesthetics.",
      "Limited programmatic SEO capabilities for local domination."
    ],
    features: [
      { name: "AI Buying Command Centre", us: true, them: false },
      { name: "Programmatic Local SEO", us: true, them: false },
      { name: "Premium Dark UI Option", us: true, them: false },
      { name: "CAP HPI Integration", us: true, them: true },
      { name: "AutoTrader Sync", us: true, them: true }
    ],
    switching_steps: [
      { title: "Data Export", desc: "Export your stock list from Vehiso." },
      { title: "Import to ForecourIQ", desc: "Upload to our system for automatic mapping." },
      { title: "Branding", desc: "Upload your logos and select your brand colours." },
      { title: "Go Live", desc: "Switch your DNS records. Zero downtime." }
    ],
    faqs: [
      { q: "Is ForecourIQ more expensive than Vehiso?", a: "ForecourIQ is a premium product offering AI tools that actively help you make money. We price competitively based on the value we deliver." },
      { q: "Do you offer a free trial?", a: "Yes, a fully featured 14-day free trial." }
    ]
  }
];
