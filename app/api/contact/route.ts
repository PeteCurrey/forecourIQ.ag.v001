import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the submission to the console as requested
    console.log("New Demo Request Received:", body);

    // In a real production app, you would integrate with Resend, SendGrid, or a CRM here.
    // Example: await sendEmail(body);

    return NextResponse.json({ success: true, message: "Request received" }, { status: 200 });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
