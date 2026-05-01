import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { createAdminClient } from "@/lib/supabase";

export const maxDuration = 60; // Allow longer execution time for AI streaming

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // In a real app, extract user from session token
    // const supabase = createAdminClient();
    // const { data: dealership } = await supabase...

    // Mock dealer context for system prompt injection
    const systemPrompt = `You are the ForecourIQ AI Analyst — a specialist in UK used car market intelligence, dealer operations, and automotive retail strategy. You have access to the following live data about this dealer:

DEALERSHIP: Peak Cars Ltd, East Midlands
CURRENT STOCK (42 vehicles):
- Overexposed to diesel Fords (35% of stock, avg days in stock: 45)
- Underrepresented in hybrid SUVs (0 units)
- Best performing: BMW 3 Series, Audi A3 (avg 18% margin, 14 days to sell)

RECENT SALES (last 90 days):
- 12x Premium Petrol Hatchbacks (Avg margin: £2,400)
- 4x Diesel SUVs (Avg margin: £1,200 - declining)

ACTIVE LEADS: 128 leads, 22.4% conversion rate this month

REGIONAL MARKET DATA (East Midlands Top Demand):
1. BMW 3 Series (Demand: 94, Avg £22,450)
2. VW Golf (Demand: 91, Avg £18,200)
3. Kia Sportage Hybrid (Demand: 89, Avg £24,000)

Respond as a knowledgeable, direct, commercially-minded analyst. Use the dealer's actual data in your responses. When recommending buying decisions, reference specific vehicles and prices. When discussing market trends, cite specific regional demand scores and days-to-sell data. Be concise — dealers are busy. Never be vague. Always be specific and actionable. Format with markdown for readability.`;

    // Make streaming call to Anthropic Claude 3.5 Sonnet
    const result = await streamText({
      model: anthropic('claude-3-5-sonnet-20240620'), // Use a valid model identifier for Anthropic provider
      system: systemPrompt,
      messages,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate AI response" }), { status: 500 });
  }
}
