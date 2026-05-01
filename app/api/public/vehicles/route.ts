import { createAdminClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const apiKey = req.headers.get("x-dealership-key");
  const { searchParams } = new URL(req.url);

  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 401 });
  }

  const supabase = createAdminClient();
  
  // Verify dealership
  const { data: dealership, error: dealerError } = await supabase
    .from("dealerships")
    .select("id")
    .eq("dealership_api_key", apiKey)
    .single();

  if (dealerError || !dealership) {
    return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
  }

  // Build query
  let query = supabase
    .from("vehicles")
    .select("*")
    .eq("dealership_id", dealership.id)
    .in("status", ["available", "reserved"]);

  // Apply filters
  const make = searchParams.get("make");
  if (make) query = query.eq("make", make);

  const model = searchParams.get("model");
  if (model) query = query.eq("model", model);

  const fuelType = searchParams.get("fuel_type");
  if (fuelType) query = query.eq("fuel_type", fuelType);

  const minPrice = searchParams.get("min_price");
  if (minPrice) query = query.gte("asking_price", parseInt(minPrice));

  const maxPrice = searchParams.get("max_price");
  if (maxPrice) query = query.lte("asking_price", parseInt(maxPrice));

  // Sorting
  const sort = searchParams.get("sort") || "newest";
  switch (sort) {
    case "price_asc":
      query = query.order("asking_price", { ascending: true });
      break;
    case "price_desc":
      query = query.order("asking_price", { ascending: false });
      break;
    case "mileage":
      query = query.order("mileage", { ascending: true });
      break;
    default:
      query = query.order("created_at", { ascending: false });
  }

  // Pagination
  const limit = parseInt(searchParams.get("limit") || "12");
  const offset = parseInt(searchParams.get("offset") || "0");
  query = query.range(offset, offset + limit - 1);

  const { data: vehicles, error, count } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    vehicles,
    total: count,
    limit,
    offset,
  });
}
