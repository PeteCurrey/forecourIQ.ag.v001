export interface BlogPostMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "SEO" | "Compliance" | "Stock Management" | "Market Intelligence" | "Platforms";
  author: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    title: "What Is a Dealer Management System and Does My Dealership Need One?",
    slug: "what-is-a-dealer-management-system",
    excerpt: "A comprehensive guide to understanding DMS platforms and whether your independent dealership has outgrown spreadsheets and whiteboards.",
    date: "2026-05-01",
    readTime: "6 min read",
    category: "Stock Management",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "How to Reduce Days to Sell Your Used Car Stock",
    slug: "how-to-reduce-days-to-sell",
    excerpt: "Tying up capital in slow-moving stock kills dealership growth. Here are five data-driven strategies to increase your inventory turnover rate.",
    date: "2026-04-28",
    readTime: "5 min read",
    category: "Stock Management",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "AutoTrader for Independent Dealers: Complete 2026 Guide",
    slug: "autotrader-guide-for-independent-dealers",
    excerpt: "How to maximise your ROI on AutoTrader, understand the algorithm, and avoid overpaying for your monthly package.",
    date: "2026-04-25",
    readTime: "7 min read",
    category: "Platforms",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "How to Price Used Cars for Maximum Margin",
    slug: "how-to-price-used-cars",
    excerpt: "Stop guessing. Learn how to use live market demand data and the '14-day rule' to price your forecourt effectively.",
    date: "2026-04-20",
    readTime: "5 min read",
    category: "Market Intelligence",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "Best UK Car Auctions for Independent Dealers in 2026",
    slug: "best-uk-car-auctions",
    excerpt: "From BCA and Manheim to digital-first disruptors, we break down where you should be sourcing your stock this year.",
    date: "2026-04-15",
    readTime: "6 min read",
    category: "Stock Management",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "HMRC Making Tax Digital: What Car Dealers Need to Know",
    slug: "hmrc-making-tax-digital-car-dealers",
    excerpt: "Don't get caught out. A plain-English guide to HMRC's MTD rules and how your dealership software needs to adapt.",
    date: "2026-04-10",
    readTime: "4 min read",
    category: "Compliance",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "How to Rank Your Car Dealer Website on Google",
    slug: "how-to-rank-car-dealer-website",
    excerpt: "A step-by-step guide to local SEO for motor traders. Learn how to beat franchise dealers in Google search results without paying for ads.",
    date: "2026-04-05",
    readTime: "7 min read",
    category: "SEO",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "The Independent Dealer's Guide to Facebook Marketplace",
    slug: "facebook-marketplace-guide-for-dealers",
    excerpt: "Facebook Marketplace is a goldmine for lower-bracket stock, but it requires a specific strategy. Here's how to manage it efficiently.",
    date: "2026-03-28",
    readTime: "5 min read",
    category: "Platforms",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "FCA Compliance for Used Car Finance: A Dealer's Checklist",
    slug: "fca-compliance-used-car-finance",
    excerpt: "Selling cars on finance? Ensure your dealership stays on the right side of the FCA with this essential compliance checklist.",
    date: "2026-03-22",
    readTime: "6 min read",
    category: "Compliance",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "How AI Is Changing Used Car Buying and Stock Management",
    slug: "ai-used-car-buying",
    excerpt: "From predictive pricing to automated vehicle descriptions, discover how artificial intelligence is giving independent dealers an unfair advantage.",
    date: "2026-03-15",
    readTime: "6 min read",
    category: "Market Intelligence",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "HPI Checks Explained: A Guide for UK Car Dealers",
    slug: "hpi-checks-explained",
    excerpt: "Everything you need to know about vehicle provenance checks, what markers actually matter, and how to automate the process.",
    date: "2026-03-10",
    readTime: "4 min read",
    category: "Stock Management",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "CAP HPI vs Glass's Guide: Which Valuation Tool is Right?",
    slug: "cap-hpi-vs-glasss-guide",
    excerpt: "We compare the UK's two leading vehicle valuation platforms to help you decide which one should drive your pricing strategy.",
    date: "2026-03-05",
    readTime: "5 min read",
    category: "Platforms",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "How to Write Car Descriptions That Sell",
    slug: "how-to-write-car-descriptions",
    excerpt: "Stop writing 'Great condition, runs well'. Learn the copywriting formulas that actually convince buyers to pick up the phone.",
    date: "2026-02-28",
    readTime: "4 min read",
    category: "SEO",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "eBay Motors for Dealers: Is It Worth It in 2026?",
    slug: "ebay-motors-for-dealers",
    excerpt: "An honest breakdown of eBay Motors Pro, analyzing costs, lead quality, and how it compares to AutoTrader for independent dealers.",
    date: "2026-02-20",
    readTime: "5 min read",
    category: "Platforms",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "What Does a Car Dealer Website Actually Need to Convert?",
    slug: "car-dealer-website-conversion",
    excerpt: "Remove the clutter. We look at the data behind the UK's highest-converting independent dealer websites to see what actually works.",
    date: "2026-02-14",
    readTime: "6 min read",
    category: "SEO",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "Used Car Dealer SEO: How to Get Found on Google",
    slug: "used-car-dealer-seo",
    excerpt: "A deep dive into programmatic SEO, structured data, and local search strategies designed specifically for automotive retail.",
    date: "2026-02-07",
    readTime: "8 min read",
    category: "SEO",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "Part-Exchange Valuations: How to Stop Leaving Money on the Table",
    slug: "part-exchange-valuations",
    excerpt: "The part-ex is where margins are made or lost. Learn how to use live market data to protect yourself on trade-ins.",
    date: "2026-01-30",
    readTime: "5 min read",
    category: "Stock Management",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "How to Build a Repeat Customer Base as an Independent Dealer",
    slug: "building-repeat-customer-base",
    excerpt: "Customer acquisition is expensive. Learn how to use CRM tools to bring buyers back for their next car and generate referrals.",
    date: "2026-01-22",
    readTime: "4 min read",
    category: "Stock Management",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "The Rise of EV Resale: What Independent Dealers Need to Know",
    slug: "ev-resale-guide-for-dealers",
    excerpt: "Battery health certificates, charging cables, and plunging residuals. How to navigate the secondary EV market safely.",
    date: "2026-01-15",
    readTime: "6 min read",
    category: "Market Intelligence",
    author: "ForecourIQ Editorial Team"
  },
  {
    title: "Click Dealer, SpidersNet, or ForecourIQ: Which Platform?",
    slug: "click-dealer-vs-spidersnet-vs-forecouriq",
    excerpt: "An objective comparison of the UK's leading dealer software providers to help you make the right choice for your business.",
    date: "2026-01-08",
    readTime: "7 min read",
    category: "Platforms",
    author: "ForecourIQ Editorial Team"
  }
];
