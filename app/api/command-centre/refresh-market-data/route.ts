import { NextResponse } from 'next/server';
import { seedMarketData } from '@/lib/seed-market-data';

export async function POST(req: Request) {
  try {
    // In a real application, you would secure this endpoint using a secret key
    // or ensure it's only callable by an authenticated admin or a cron job.
    
    const { dealershipId } = await req.json();

    if (!dealershipId) {
       return NextResponse.json({ error: "dealershipId is required" }, { status: 400 });
    }

    // Call the seeding function to generate realistic synthetic data
    // In production, this would call the actual AutoTrader Market Intel API
    const recordsCreated = await seedMarketData(dealershipId);

    return NextResponse.json({ 
      success: true, 
      message: `Successfully generated ${recordsCreated} market data snapshots.` 
    });
  } catch (error) {
    console.error("Refresh Market Data API Error:", error);
    return NextResponse.json({ error: "Failed to refresh market data" }, { status: 500 });
  }
}
