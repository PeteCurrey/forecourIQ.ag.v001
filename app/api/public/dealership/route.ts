import { createAdminClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const apiKey = req.headers.get("x-dealership-key");

  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 401 });
  }

  const supabase = createAdminClient();
  const { data: dealership, error } = await supabase
    .from("dealerships")
    .select("name, website_settings, logo_url")
    .eq("dealership_api_key", apiKey)
    .single();

  if (error || !dealership) {
    return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
  }

  return NextResponse.json({
    name: dealership.name,
    settings: dealership.website_settings,
    logo_url: dealership.logo_url,
  });
}
