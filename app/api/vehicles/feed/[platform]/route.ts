import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ platform: string }> }
) {
  const { platform } = await params;
  const { searchParams } = new URL(request.url);
  const dealershipId = searchParams.get("dealership_id");

  if (!dealershipId) {
    return new NextResponse("Dealership ID is required", { status: 400 });
  }

  const supabase = createAdminClient();

  // Query vehicles published to this platform
  const { data: vehicles, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("dealership_id", dealershipId)
    .eq(`published_${platform}`, true)
    .eq("status", "available");

  if (error) {
    return new NextResponse("Error fetching vehicles", { status: 500 });
  }

  // Generate XML or JSON based on platform requirements
  // Here we'll return JSON as a baseline, but typically AutoTrader requires XML
  const feed = {
    dealership_id: dealershipId,
    platform: platform,
    generated_at: new Date().toISOString(),
    count: vehicles.length,
    vehicles: vehicles.map(v => ({
      stock_id: v.id,
      registration: v.registration,
      vin: v.vin,
      make: v.make,
      model: v.model,
      variant: v.variant,
      year: v.year,
      mileage: v.mileage,
      price: v.asking_price,
      description: v.description,
      images: v.photos,
      fuel: v.fuel_type,
      transmission: v.transmission,
    }))
  };

  return NextResponse.json(feed);
}
