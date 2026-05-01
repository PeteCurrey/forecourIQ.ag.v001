import { createAdminClient } from "./supabase";

const regions = [
  "North West", "Yorkshire", "East Midlands", "West Midlands", 
  "South East", "London", "Scotland", "Wales", "North East", "South West"
];

const popularModels = [
  { make: "BMW", model: "3 Series", basePrice: 22000 },
  { make: "BMW", model: "1 Series", basePrice: 18000 },
  { make: "Audi", model: "A3", basePrice: 19500 },
  { make: "Audi", model: "A4", basePrice: 21000 },
  { make: "VW", model: "Golf", basePrice: 17500 },
  { make: "VW", model: "Polo", basePrice: 13000 },
  { make: "Ford", model: "Fiesta", basePrice: 11000 },
  { make: "Ford", model: "Puma", basePrice: 19000 },
  { make: "Mercedes", model: "A-Class", basePrice: 21000 },
  { make: "Mercedes", model: "C-Class", basePrice: 26000 },
  { make: "Vauxhall", model: "Corsa", basePrice: 10500 },
  { make: "Vauxhall", model: "Astra", basePrice: 14000 },
  { make: "Nissan", model: "Qashqai", basePrice: 16500 },
  { make: "Kia", model: "Sportage", basePrice: 20000 },
  { make: "Hyundai", model: "Tucson", basePrice: 22000 },
  { make: "Toyota", model: "Yaris", basePrice: 14500 },
  { make: "Toyota", model: "Corolla", basePrice: 19000 },
  { make: "Land Rover", model: "Range Rover Evoque", basePrice: 28000 },
  { make: "Land Rover", model: "Discovery Sport", basePrice: 26000 },
  { make: "Jaguar", model: "F-PACE", basePrice: 29000 },
  { make: "Mini", model: "Hatch", basePrice: 15500 },
  { make: "Volvo", model: "XC40", basePrice: 25000 },
  { make: "Tesla", model: "Model 3", basePrice: 32000 },
  { make: "Skoda", model: "Octavia", basePrice: 16000 },
  { make: "Seat", model: "Leon", basePrice: 15500 },
  { make: "Honda", model: "Civic", basePrice: 18500 },
  { make: "Peugeot", model: "208", basePrice: 12500 },
  { make: "Peugeot", model: "3008", basePrice: 19000 },
  { make: "Mazda", model: "CX-5", basePrice: 18000 },
  { make: "Fiat", model: "500", basePrice: 9500 },
];

export async function seedMarketData(dealershipId: string) {
  const supabase = createAdminClient();
  const snapshots = [];

  for (const region of regions) {
    for (const item of popularModels) {
      // Add some randomness based on region
      const regionMultiplier = 0.95 + Math.random() * 0.1;
      const demandScore = Math.floor(40 + Math.random() * 55);
      const avgDays = Math.floor(15 + Math.random() * 40);
      const listings = Math.floor(50 + Math.random() * 500);

      snapshots.push({
        dealership_id: dealershipId,
        make: item.make,
        model: item.model,
        region: region,
        year_range_start: 2018,
        year_range_end: 2023,
        fuel_type: Math.random() > 0.3 ? "Petrol" : "Diesel",
        avg_asking_price: Math.floor(item.basePrice * regionMultiplier),
        avg_days_to_sell: avgDays,
        total_listings: listings,
        demand_score: demandScore,
        snapshot_date: new Date().toISOString().split('T')[0],
      });
    }
  }

  const { error } = await supabase
    .from("market_data_snapshots")
    .insert(snapshots);

  if (error) {
    console.error("Seeding Error:", error);
    throw error;
  }

  return snapshots.length;
}
