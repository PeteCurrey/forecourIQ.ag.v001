import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const supabase = createAdminClient();

    // Example payload mapping from AutoTrader or other marketplace
    const leadData = {
      dealership_id: body.dealership_id, // Usually mapped from an API key or dedicated webhook URL
      vehicle_id: body.vehicle_id,
      first_name: body.customer?.first_name,
      last_name: body.customer?.last_name,
      email: body.customer?.email,
      phone: body.customer?.phone,
      message: body.message,
      source: body.source || "autotrader",
      status: "new",
    };

    const { data, error } = await supabase
      .from("leads")
      .insert([leadData])
      .select()
      .single();

    if (error) throw error;

    // Trigger a real-time notification via Supabase or a custom event
    // In this implementation, Supabase Realtime handles the frontend update

    return NextResponse.json({ success: true, lead_id: data.id });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ success: false, error: "Webhook processing failed" }, { status: 500 });
  }
}
