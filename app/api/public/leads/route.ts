import { createAdminClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = req.headers.get("x-dealership-key");

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

  const body = await req.json();
  const { 
    source, 
    first_name, 
    last_name, 
    email, 
    phone, 
    message, 
    vehicle_id, 
    finance_interest, 
    part_ex_reg 
  } = body;

  const { data: lead, error } = await supabase
    .from("leads")
    .insert({
      dealership_id: dealership.id,
      source: source || "Website",
      first_name,
      last_name,
      email,
      phone,
      message,
      vehicle_id,
      status: "new",
      finance_interest: finance_interest || false,
      part_ex_reg
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, lead_id: lead.id });
}
