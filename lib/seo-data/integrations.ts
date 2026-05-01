export interface Integration {
  name: string;
  slug: string;
  function: string;
  hero_desc: string;
  step_1: { title: string, desc: string };
  step_2: { title: string, desc: string };
  step_3: { title: string, desc: string };
  benefit: string;
}

export const integrations: Integration[] = [
  {
    name: "AutoTrader",
    slug: "autotrader",
    function: "Stock Syndication & Market Intelligence",
    hero_desc: "Connect ForecourIQ to AutoTrader to automatically syndicate your stock, manage your pricing, and pull live regional market demand data directly into your Command Centre.",
    step_1: { title: "Connect via API", desc: "Enter your AutoTrader Dealer ID in ForecourIQ settings to establish a secure two-way API connection." },
    step_2: { title: "Automated Syndication", desc: "When you add a vehicle to ForecourIQ, it's instantly pushed to your AutoTrader portal with full spec data and images." },
    step_3: { title: "Price Syncing", desc: "Update a price in your DMS, and the change reflects on your website and AutoTrader within seconds." },
    benefit: "Eliminate double-keying entirely. Manage your entire digital showroom from one dashboard while leveraging AutoTrader's massive audience."
  },
  {
    name: "eBay Motors",
    slug: "ebay-motors",
    function: "Automated Classifieds & Auctions",
    hero_desc: "Push your vehicles directly to eBay Motors with a single click. ForecourIQ handles the complex API requirements to ensure your listings look professional and rank well.",
    step_1: { title: "Link eBay Account", desc: "Authorise ForecourIQ to manage your eBay Motors listings via OAuth secure login." },
    step_2: { title: "Select Inventory", desc: "Choose which vehicles to push to eBay. Toggle between classified ad format or auction format directly from the DMS." },
    step_3: { title: "Centralised Messages", desc: "eBay buyer messages and offers are pulled directly into the ForecourIQ lead management CRM." },
    benefit: "Reach millions of active buyers on eBay Motors without the headache of managing a separate, clunky inventory system."
  },
  {
    name: "CAP HPI",
    slug: "cap-hpi",
    function: "Live Valuations & Provenance Checks",
    hero_desc: "The industry standard for vehicle provenance and valuations, integrated directly into your ForecourIQ appraisal and stock management workflows.",
    step_1: { title: "Enter VRM", desc: "Type a registration number into ForecourIQ when appraising a part-exchange or buying stock." },
    step_2: { title: "Instant HPI Check", desc: "ForecourIQ pulls the full HPI provenance check, flagging finance markers, write-off history, and mileage discrepancies." },
    step_3: { title: "Live Valuations", desc: "View live CAP clean, average, and below market valuations to ensure you price stock accurately." },
    benefit: "Protect your dealership from buying compromised stock and ensure your part-exchange valuations are always accurate to the current market."
  },
  {
    name: "Evolution Funding",
    slug: "evolution-funding",
    function: "Integrated Point-of-Sale Finance",
    hero_desc: "Embed Evolution Funding's powerful finance calculators directly onto your ForecourIQ website and manage applications from your DMS.",
    step_1: { title: "Website Calculators", desc: "Add PCP and HP finance calculators to your vehicle detail pages automatically." },
    step_2: { title: "Soft Search", desc: "Allow buyers to run soft credit checks on your website without impacting their credit score." },
    step_3: { title: "DMS Lead Sync", desc: "When a customer applies for finance, the full application and decision drops straight into your CRM." },
    benefit: "Increase finance penetration by making it incredibly easy for website visitors to self-serve their finance quotes."
  },
  // Adding the remaining integrations programmatically for the mock
];

const mockIntegrations = [
  { name: "CarGurus", slug: "cargurus", function: "Stock Syndication" },
  { name: "Motors.co.uk", slug: "motors-co-uk", function: "Stock Syndication" },
  { name: "Facebook Marketplace", slug: "facebook-marketplace", function: "Social Selling" },
  { name: "DVLA", slug: "dvla", function: "VRM Lookup & Specs" },
  { name: "BCA Auctions", slug: "bca-auctions", function: "Stock Sourcing" },
  { name: "Manheim", slug: "manheim", function: "Stock Sourcing" },
  { name: "Codeweavers", slug: "codeweavers", function: "Finance Integration" },
  { name: "iVendi", slug: "ivendi", function: "Finance & E-commerce" },
  { name: "Stripe", slug: "stripe", function: "Reservation Payments" },
  { name: "Xero", slug: "xero", function: "Accounting Sync" },
  { name: "Twilio", slug: "twilio", function: "SMS & WhatsApp Leads" }
];

mockIntegrations.forEach(integration => {
  integrations.push({
    name: integration.name,
    slug: integration.slug,
    function: integration.function,
    hero_desc: `Connect ForecourIQ to ${integration.name} to streamline your operations and improve your dealership's efficiency.`,
    step_1: { title: "Quick Setup", desc: `Connect your ${integration.name} credentials in the ForecourIQ dashboard.` },
    step_2: { title: "Automated Data Flow", desc: `Data syncs seamlessly between ForecourIQ and ${integration.name} in real-time.` },
    step_3: { title: "Centralised Control", desc: `Manage your ${integration.name} workflows directly from the ForecourIQ DMS.` },
    benefit: `Save hours of manual admin time and reduce errors by integrating ${integration.name} directly into your core dealership system.`
  });
});
