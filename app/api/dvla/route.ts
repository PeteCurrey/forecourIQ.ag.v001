import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const registration = searchParams.get("registration");

  if (!registration) {
    return NextResponse.json({ error: "Registration is required" }, { status: 400 });
  }

  const apiKey = process.env.DVLA_API_KEY;

  if (!apiKey) {
    console.error("DVLA_API_KEY is not set. Using mock data.");
    // Return mock data if API key is missing
    return NextResponse.json({
      registrationNumber: registration,
      make: "BMW",
      model: "3 SERIES",
      colour: "BLUE",
      yearOfManufacture: 2021,
      fuelType: "DIESEL",
      motExpiryDate: "2025-10-14"
    });
  }

  try {
    const response = await fetch("https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiries/v1/vehicles", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ registrationNumber: registration })
    });

    if (!response.ok) {
      throw new Error("DVLA API request failed");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("DVLA Proxy Error:", error);
    return NextResponse.json({ error: "Failed to fetch vehicle data" }, { status: 500 });
  }
}
