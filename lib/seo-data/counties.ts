export interface County {
  name: string;
  slug: string;
  region: string;
  approx_dealer_count: number;
  testimonial_author: string;
  testimonial_dealership: string;
  testimonial_text: string;
}

export const counties: County[] = [
  { name: "Bedfordshire", slug: "bedfordshire", region: "East of England", approx_dealer_count: 145, testimonial_author: "James T.", testimonial_dealership: "Bedford Auto Sales", testimonial_text: "Since moving to ForecourIQ, our online enquiries have doubled." },
  { name: "Berkshire", slug: "berkshire", region: "South East", approx_dealer_count: 180, testimonial_author: "Sarah M.", testimonial_dealership: "Reading Premium Cars", testimonial_text: "The best dealer management system we've used in 15 years of trading." },
  { name: "Bristol", slug: "bristol", region: "South West", approx_dealer_count: 120, testimonial_author: "David L.", testimonial_dealership: "Bristol Car Hub", testimonial_text: "ForecourIQ's AI insights completely changed how we buy stock." },
  { name: "Buckinghamshire", slug: "buckinghamshire", region: "South East", approx_dealer_count: 160, testimonial_author: "Mark W.", testimonial_dealership: "Bucks Motors", testimonial_text: "A genuine game changer for independent dealers." },
  { name: "Cambridgeshire", slug: "cambridgeshire", region: "East of England", approx_dealer_count: 150, testimonial_author: "Emma R.", testimonial_dealership: "Cambridge Autos", testimonial_text: "Seamless integration with AutoTrader saves us hours every week." },
  { name: "Cheshire", slug: "cheshire", region: "North West", approx_dealer_count: 210, testimonial_author: "Tom H.", testimonial_dealership: "Cheshire Prestige", testimonial_text: "Our website finally matches the quality of the cars we sell." },
  { name: "Cornwall", slug: "cornwall", region: "South West", approx_dealer_count: 95, testimonial_author: "Peter S.", testimonial_dealership: "Kernow Cars", testimonial_text: "Brilliant customer support and a system that actually works." },
  { name: "County Durham", slug: "county-durham", region: "North East", approx_dealer_count: 110, testimonial_author: "Alan J.", testimonial_dealership: "Durham Car Centre", testimonial_text: "The lead management pipeline is exactly what we needed." },
  { name: "Cumbria", slug: "cumbria", region: "North West", approx_dealer_count: 85, testimonial_author: "Steve B.", testimonial_dealership: "Lakeside Motors", testimonial_text: "Simple to use but incredibly powerful under the hood." },
  { name: "Derbyshire", slug: "derbyshire", region: "East Midlands", approx_dealer_count: 140, testimonial_author: "Richard C.", testimonial_dealership: "Peak District Autos", testimonial_text: "The margin calculator ensures we never overpay at auction." },
  { name: "Devon", slug: "devon", region: "South West", approx_dealer_count: 165, testimonial_author: "Paul E.", testimonial_dealership: "Devon Car Sales", testimonial_text: "Highly recommended for any serious independent dealer." },
  { name: "Dorset", slug: "dorset", region: "South West", approx_dealer_count: 130, testimonial_author: "Nick F.", testimonial_dealership: "Coastal Cars", testimonial_text: "Our stock turns over 20% faster thanks to the market data." },
  { name: "East Riding of Yorkshire", slug: "east-riding-of-yorkshire", region: "Yorkshire", approx_dealer_count: 105, testimonial_author: "Gary P.", testimonial_dealership: "Hull Auto Group", testimonial_text: "Everything in one place. No more logging into five different systems." },
  { name: "East Sussex", slug: "east-sussex", region: "South East", approx_dealer_count: 155, testimonial_author: "Simon K.", testimonial_dealership: "Sussex Motors", testimonial_text: "The website speed is phenomenal. Customers love it." },
  { name: "Essex", slug: "essex", region: "East of England", approx_dealer_count: 290, testimonial_author: "Lee M.", testimonial_dealership: "Essex Car Company", testimonial_text: "We switched from Click Dealer and haven't looked back." },
  { name: "Gloucestershire", slug: "gloucestershire", region: "South West", approx_dealer_count: 145, testimonial_author: "Chris N.", testimonial_dealership: "Glos Auto Centre", testimonial_text: "The best ROI of any software we use." },
  { name: "Greater London", slug: "greater-london", region: "London", approx_dealer_count: 550, testimonial_author: "Mohammed A.", testimonial_dealership: "London Motor Hub", testimonial_text: "Essential for staying competitive in the London market." },
  { name: "Greater Manchester", slug: "greater-manchester", region: "North West", approx_dealer_count: 380, testimonial_author: "John D.", testimonial_dealership: "Mancunian Motors", testimonial_text: "The AI buying recommendations are spot on." },
  { name: "Hampshire", slug: "hampshire", region: "South East", approx_dealer_count: 240, testimonial_author: "Robert V.", testimonial_dealership: "Hants Car Sales", testimonial_text: "Superb platform. Modern, fast, and reliable." },
  { name: "Herefordshire", slug: "herefordshire", region: "West Midlands", approx_dealer_count: 75, testimonial_author: "Adam L.", testimonial_dealership: "Hereford Autos", testimonial_text: "Great value for money compared to the outdated alternatives." },
  { name: "Hertfordshire", slug: "hertfordshire", region: "East of England", approx_dealer_count: 210, testimonial_author: "Colin B.", testimonial_dealership: "Herts Car Centre", testimonial_text: "Incredible design and functionality." },
  { name: "Isle of Wight", slug: "isle-of-wight", region: "South East", approx_dealer_count: 30, testimonial_author: "Ian W.", testimonial_dealership: "Island Motors", testimonial_text: "Perfect for managing our entire operation." },
  { name: "Kent", slug: "kent", region: "South East", approx_dealer_count: 280, testimonial_author: "Darren T.", testimonial_dealership: "Kent Auto Group", testimonial_text: "The feed to AutoTrader works flawlessly." },
  { name: "Lancashire", slug: "lancashire", region: "North West", approx_dealer_count: 220, testimonial_author: "Martin S.", testimonial_dealership: "Lancs Car Sales", testimonial_text: "We've seen a huge increase in quality leads." },
  { name: "Leicestershire", slug: "leicestershire", region: "East Midlands", approx_dealer_count: 160, testimonial_author: "Kevin R.", testimonial_dealership: "Leicester Motors", testimonial_text: "The dashboard gives me complete control of my business." },
  { name: "Lincolnshire", slug: "lincolnshire", region: "East Midlands", approx_dealer_count: 150, testimonial_author: "Barry H.", testimonial_dealership: "Lincs Auto", testimonial_text: "Very easy to use, even for non-technical staff." },
  { name: "Merseyside", slug: "merseyside", region: "North West", approx_dealer_count: 190, testimonial_author: "Tony G.", testimonial_dealership: "Liverpool Car Centre", testimonial_text: "A brilliant system built by people who understand the trade." },
  { name: "Norfolk", slug: "norfolk", region: "East of England", approx_dealer_count: 140, testimonial_author: "Philip M.", testimonial_dealership: "Norfolk Motors", testimonial_text: "The SEO built into the websites is unmatched." },
  { name: "North Yorkshire", slug: "north-yorkshire", region: "Yorkshire", approx_dealer_count: 170, testimonial_author: "Andy F.", testimonial_dealership: "Yorkshire Car Sales", testimonial_text: "ForecourIQ is the unfair advantage they promised." },
  { name: "Northamptonshire", slug: "northamptonshire", region: "East Midlands", approx_dealer_count: 135, testimonial_author: "Craig W.", testimonial_dealership: "Northants Autos", testimonial_text: "Setup was quick and the support team is excellent." },
  { name: "Northumberland", slug: "northumberland", region: "North East", approx_dealer_count: 80, testimonial_author: "Brian K.", testimonial_dealership: "Northumbrian Cars", testimonial_text: "Really helps us compete with the big franchise dealers." },
  { name: "Nottinghamshire", slug: "nottinghamshire", region: "East Midlands", approx_dealer_count: 175, testimonial_author: "Wayne P.", testimonial_dealership: "Notts Motor Group", testimonial_text: "The mobile experience is fantastic." },
  { name: "Oxfordshire", slug: "oxfordshire", region: "South East", approx_dealer_count: 125, testimonial_author: "Oliver S.", testimonial_dealership: "Oxford Premium Autos", testimonial_text: "Sleek, modern, and very effective." },
  { name: "Rutland", slug: "rutland", region: "East Midlands", approx_dealer_count: 15, testimonial_author: "Sam D.", testimonial_dealership: "Rutland Cars", testimonial_text: "Perfect for a smaller setup looking to grow." },
  { name: "Shropshire", slug: "shropshire", region: "West Midlands", approx_dealer_count: 110, testimonial_author: "Gordon B.", testimonial_dealership: "Salop Motor Centre", testimonial_text: "The pricing is transparent and fair." },
  { name: "Somerset", slug: "somerset", region: "South West", approx_dealer_count: 155, testimonial_author: "Terry H.", testimonial_dealership: "Somerset Autos", testimonial_text: "Our conversion rate from website visits to leads has tripled." },
  { name: "South Yorkshire", slug: "south-yorkshire", region: "Yorkshire", approx_dealer_count: 185, testimonial_author: "Mick J.", testimonial_dealership: "Sheffield Car Sales", testimonial_text: "The best decision we made this year." },
  { name: "Staffordshire", slug: "staffordshire", region: "West Midlands", approx_dealer_count: 195, testimonial_author: "Dean T.", testimonial_dealership: "Staffs Motor Hub", testimonial_text: "Incredibly fast website load times." },
  { name: "Suffolk", slug: "suffolk", region: "East of England", approx_dealer_count: 120, testimonial_author: "Neil W.", testimonial_dealership: "Suffolk Car Centre", testimonial_text: "Very reliable and always adding new features." },
  { name: "Surrey", slug: "surrey", region: "South East", approx_dealer_count: 260, testimonial_author: "Alex C.", testimonial_dealership: "Surrey Prestige", testimonial_text: "Finally, a DMS that doesn't look like it was built in 2005." },
  { name: "Tyne and Wear", slug: "tyne-and-wear", region: "North East", approx_dealer_count: 165, testimonial_author: "Geoff P.", testimonial_dealership: "Newcastle Auto Group", testimonial_text: "The market data helps us price stock perfectly." },
  { name: "Warwickshire", slug: "warwickshire", region: "West Midlands", approx_dealer_count: 140, testimonial_author: "Luke M.", testimonial_dealership: "Warwick Motors", testimonial_text: "Excellent integration with our accounting software." },
  { name: "West Midlands", slug: "west-midlands", region: "West Midlands", approx_dealer_count: 310, testimonial_author: "Raj S.", testimonial_dealership: "Midlands Car Centre", testimonial_text: "The CRM tools keep us on top of every lead." },
  { name: "West Sussex", slug: "west-sussex", region: "South East", approx_dealer_count: 175, testimonial_author: "Marcus D.", testimonial_dealership: "Sussex Auto Sales", testimonial_text: "Great reporting and analytics." },
  { name: "West Yorkshire", slug: "west-yorkshire", region: "Yorkshire", approx_dealer_count: 275, testimonial_author: "Ian C.", testimonial_dealership: "Leeds Motor Hub", testimonial_text: "A true all-in-one solution for car dealers." },
  { name: "Wiltshire", slug: "wiltshire", region: "South West", approx_dealer_count: 135, testimonial_author: "Phil R.", testimonial_dealership: "Wilts Car Sales", testimonial_text: "We love the AI vehicle descriptions." },
  { name: "Worcestershire", slug: "worcestershire", region: "West Midlands", approx_dealer_count: 125, testimonial_author: "Stuart E.", testimonial_dealership: "Worcs Autos", testimonial_text: "Highly capable system with great support." }
];
