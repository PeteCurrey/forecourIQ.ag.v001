import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';
import { createAdminClient } from "@/lib/supabase";
import { NextResponse } from 'next/server';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const supabase = createAdminClient();
    // Assuming auth logic here to get dealershipId
    const mockDealershipId = "00000000-0000-0000-0000-000000000000"; // Replace with actual in prod

    // In a real app, we'd query:
    // 1. Current stock for this dealer
    // 2. Recent sales for performance metrics
    // 3. Market data snapshots for their region

    const prompt = `You are a specialist UK automotive market analyst. A car dealer has asked you to generate a prioritised buying list based on their current situation and regional market data.

DEALER CURRENT STOCK:
[{"make": "Ford", "model": "Fiesta", "fuel": "Diesel", "count": 12, "avg_days": 45}, {"make": "BMW", "model": "3 Series", "fuel": "Diesel", "count": 2, "avg_days": 14}]

REGIONAL MARKET DATA (East Midlands, last 30 days):
[
  {"make": "BMW", "model": "3 Series", "demand_score": 94, "avg_days": 18, "avg_price": 22450},
  {"make": "Kia", "model": "Sportage", "demand_score": 89, "avg_days": 15, "avg_price": 24000},
  {"make": "Ford", "model": "Puma", "demand_score": 88, "avg_days": 16, "avg_price": 20100}
]

DEALER PERFORMANCE:
- Average days to sell: 28
- Average gross margin: £2100
- Fastest selling: Premium hatchbacks (14 days)
- Slowest selling: Older diesels (45 days)

Generate exactly 4 vehicle buying recommendations. For each recommendation provide:
1. Make
2. Model
3. Year range (e.g. 2019-2022)
4. Fuel type
5. Mileage range (e.g. 30k-40k)
6. Target buy price
7. Projected retail price
8. Estimated gross margin
9. Estimated days to sell
10. Demand score (1-100)
11. A 2-3 sentence reasoning referencing the specific market data.

Prioritise: filling stock gaps, high-demand low-competition segments.

Return EXACTLY a JSON array of objects with keys: make, model, year_range, fuel_type, mileage_range, target_buy_price, projected_retail, projected_margin, projected_days_to_sell, demand_score, reasoning. No preamble or markdown wrappers, just the raw JSON array.`;

    const result = await generateText({
      model: anthropic('claude-3-5-sonnet-20240620'),
      prompt: prompt,
    });

    let parsedRecs;
    try {
      const cleanedText = result.text.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedRecs = JSON.parse(cleanedText);
    } catch (e) {
      console.error("Failed to parse Claude output:", result.text);
      throw new Error("Invalid JSON from AI");
    }

    // Insert into DB
    const inserts = parsedRecs.map((rec: any) => ({
      dealership_id: mockDealershipId,
      status: 'active',
      vehicle_spec: rec
    }));

    // Commented out DB insertion for mock environment unless DB exists
    // await supabase.from('buying_recommendations').insert(inserts);

    return NextResponse.json({ success: true, recommendations: parsedRecs });
  } catch (error) {
    console.error("Buying List Gen Error:", error);
    return NextResponse.json({ error: "Failed to generate recommendations" }, { status: 500 });
  }
}
