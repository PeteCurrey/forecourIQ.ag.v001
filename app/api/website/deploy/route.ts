import { createAdminClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;
const TEMPLATE_REPO_ID = process.env.VERCEL_TEMPLATE_REPO_ID; // The ID of the dealer-website-template repo

export async function POST(req: Request) {
  try {
    const supabase = createAdminClient();
    
    // In a real app, verify user session
    // const { data: { user } } = await supabase.auth.getUser();
    // if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { dealership_id } = await req.json();

    // 1. Fetch dealership settings
    const { data: dealer, error: dealerError } = await supabase
      .from("dealerships")
      .select("*")
      .eq("id", dealership_id)
      .single();

    if (dealerError || !dealer) {
      return NextResponse.json({ error: "Dealership not found" }, { status: 404 });
    }

    const { website_settings, dealership_api_key, name, slug } = dealer;

    // Update status to building
    await supabase.from("dealerships").update({ website_status: "deploying" }).eq("id", dealership_id);

    // 2. Check if Vercel project exists, if not create it
    let vercelProjectId = dealer.vercel_project_id;

    if (!vercelProjectId) {
      const createRes = await fetch(`https://api.vercel.com/v9/projects?teamId=${VERCEL_TEAM_ID}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `forecouriq-dealer-${slug}`,
          framework: "nextjs",
          gitRepository: {
            type: "github",
            repo: "PeteCurrey/forecouriq-dealer-template", // Example repo
          },
        }),
      });

      const project = await createRes.json();
      if (project.error) throw new Error(`Vercel Project Creation Error: ${project.error.message}`);
      
      vercelProjectId = project.id;
      await supabase.from("dealerships").update({ vercel_project_id: vercelProjectId }).eq("id", dealership_id);
    }

    // 3. Set Environment Variables
    const envVars = [
      { key: "DEALERSHIP_API_KEY", value: dealership_api_key },
      { key: "FORECOURIQ_API_URL", value: "https://app.forecouriq.com/api/public" },
      { key: "DEALER_PRIMARY_COLOUR", value: website_settings.appearance.primary_color },
      { key: "DEALER_SECONDARY_COLOUR", value: website_settings.appearance.secondary_color },
      { key: "NEXT_PUBLIC_GA_ID", value: website_settings.integrations.google_analytics_id || "" },
      { key: "GOOGLE_MAPS_API_KEY", value: website_settings.integrations.google_maps_key || "" },
    ];

    for (const env of envVars) {
      await fetch(`https://api.vercel.com/v9/projects/${vercelProjectId}/env?teamId=${VERCEL_TEAM_ID}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: env.key,
          value: env.value,
          type: "plain",
          target: ["production", "preview", "development"],
        }),
      });
    }

    // 4. Trigger Deployment
    const deployRes = await fetch(`https://api.vercel.com/v13/deployments?teamId=${VERCEL_TEAM_ID}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${VERCEL_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `deployment-${Date.now()}`,
        project: vercelProjectId,
      }),
    });

    const deployment = await deployRes.json();
    if (deployment.error) throw new Error(`Vercel Deployment Error: ${deployment.error.message}`);

    // 5. Update domain if provided
    if (dealer.website_domain) {
      await fetch(`https://api.vercel.com/v9/projects/${vercelProjectId}/domains?teamId=${VERCEL_TEAM_ID}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dealer.website_domain,
        }),
      });
    }

    return NextResponse.json({ 
      success: true, 
      deployment_id: deployment.id,
      url: deployment.url 
    });

  } catch (error: any) {
    console.error("Deployment Pipeline Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
