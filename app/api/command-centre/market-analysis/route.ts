import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { make, model, region } = await req.json();

    if (!make || !model || !region) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const prompt = `You are a UK used car market specialist. Based on the following market data for ${make} ${model} in the ${region} region, provide a 150-word buying insight for an independent dealer. 

MARKET DATA SUMMARY:
- Average Demand Score: 88/100 (Strong)
- Average Asking Price: £22,450 (UK avg: £21,900)
- Average Days to Sell: 18 (UK avg: 24)

Cover: 
1. Ideal spec/trim to buy
2. Optimal mileage range
3. Price the dealer should target at auction (trade)
4. Expected retail price and margin
5. Any notable demand patterns

Be specific, data-driven, and concise. Address the dealer directly. Use formatting (bolding) to highlight key numbers and specs.`;

    const result = await streamText({
      model: anthropic('claude-3-5-sonnet-20240620'),
      prompt: prompt,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Market Analysis API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate market analysis" }), { status: 500 });
  }
}
