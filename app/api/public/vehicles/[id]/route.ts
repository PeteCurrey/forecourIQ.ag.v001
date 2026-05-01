import { createAdminClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const apiKey = req.headers.get("x-dealership-key");
  const { id } = await params;

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

  const { data: vehicle, error } = await supabase
    .from("vehicles")
    .select("*")
    .or(`id.eq.${id},registration.eq.${id.toUpperCase()}`)
    .eq("dealership_id", dealership.id)
    .single();

  if (error || !vehicle) {
    return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
  }

  return NextResponse.json(vehicle);
}
