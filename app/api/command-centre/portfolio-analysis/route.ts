import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';
import { createAdminClient } from "@/lib/supabase";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const supabase = createAdminClient();
    const mockDealershipId = "00000000-0000-0000-0000-000000000000"; // Replace in prod

    const prompt = `Analyse this car dealer's current stock portfolio against regional market demand data and provide a comprehensive health analysis.

CURRENT STOCK SUMMARY:
- Total Units: 42
- Total Value: £850,000
- Overexposed: Diesel Fords (35% of stock), Older Nissan Qashqais
- Strengths: Premium Petrol Hatchbacks (high margin, fast turnover)
- Weaknesses: Lack of Hybrid SUVs, High Days in Stock for Diesels (>45 days)

REGIONAL DEMAND (East Midlands):
- High Demand: Hybrid SUVs (Kia Sportage, Hyundai Tucson), Automatic Hatchbacks
- Low Demand: Older Diesels, Large Luxury Saloons

Provide: 
1) An overall portfolio health score 0-100
2) Three key strengths
3) Three key weaknesses or risks
4) Three immediate opportunities (specific vehicles or segments to prioritise)
5) A list of overrepresented vehicle types that should not be bought again until current stock clears
6) A 200-word narrative commentary. 

Return EXACTLY a JSON object with keys: overall_score (number), strengths (array of strings), weaknesses (array of strings), opportunities (array of objects with 'title' and 'desc'), do_not_buy (array of strings), commentary (string). No preamble or markdown wrappers, just raw JSON.`;

    const result = await generateText({
      model: anthropic('claude-3-5-sonnet-20240620'),
      prompt: prompt,
    });

    let parsedAnalysis;
    try {
      const cleanedText = result.text.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedAnalysis = JSON.parse(cleanedText);
    } catch (e) {
      console.error("Failed to parse Claude output:", result.text);
      throw new Error("Invalid JSON from AI");
    }

    // Insert into DB
    const insertData = {
      dealership_id: mockDealershipId,
      overall_score: parsedAnalysis.overall_score,
      analysis_json: parsedAnalysis,
      ai_commentary: parsedAnalysis.commentary
    };

    // await supabase.from('portfolio_analysis').insert(insertData);

    return NextResponse.json({ success: true, analysis: parsedAnalysis });
  } catch (error) {
    console.error("Portfolio Analysis API Error:", error);
    return NextResponse.json({ error: "Failed to generate portfolio analysis" }, { status: 500 });
  }
}
