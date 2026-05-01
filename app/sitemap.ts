import { MetadataRoute } from 'next';
import { counties } from '@/lib/seo-data/counties';
import { cities } from '@/lib/seo-data/cities';
import { vehicleTypes } from '@/lib/seo-data/vehicle-types';
import { integrations } from '@/lib/seo-data/integrations';
import { competitors } from '@/lib/seo-data/competitors';
import { blogPosts } from '@/lib/seo-data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://forecouriq.com';
  
  const staticRoutes = [
    '',
    '/pricing',
    '/features',
    '/demo',
    '/blog',
    '/tools',
    '/tools/margin-calculator',
    '/tools/days-to-sell-estimator',
    '/tools/autotrader-vs-ebay',
    '/tools/pricing-guide',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const countyRoutes = counties.map(county => ({
    url: `${baseUrl}/dealers/${county.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cityRoutes = cities.map(city => {
    const countySlug = counties.find(c => c.name === city.county)?.slug || "unknown";
    return {
      url: `${baseUrl}/dealers/${countySlug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  const vehicleTypeRoutes = vehicleTypes.map(type => ({
    url: `${baseUrl}/vehicle-type/${type.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const integrationRoutes = integrations.map(integration => ({
    url: `${baseUrl}/integrations/${integration.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const competitorRoutes = competitors.map(comp => ({
    url: `${baseUrl}/vs/${comp.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...countyRoutes,
    ...cityRoutes,
    ...vehicleTypeRoutes,
    ...integrationRoutes,
    ...competitorRoutes,
    ...blogRoutes
  ];
}
