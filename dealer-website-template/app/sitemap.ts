import { MetadataRoute } from "next";
import { dealerAPI } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dealer.forecouriq.com";

  // Static routes
  const routes = [
    "",
    "/stock",
    "/contact",
    "/finance",
    "/part-exchange",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Dynamic vehicle routes
  try {
    const vehiclesData = await dealerAPI.getVehicles("?limit=100");
    const vehicleRoutes = (vehiclesData.vehicles || []).map((vehicle: any) => ({
      url: `${baseUrl}/stock/${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.registration}`.toLowerCase(),
      lastModified: new Date(vehicle.updated_at || vehicle.created_at),
    }));
    
    return [...routes, ...vehicleRoutes];
  } catch (e) {
    return routes;
  }
}
