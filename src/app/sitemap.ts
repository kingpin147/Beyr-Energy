import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beyrenergy.com';

  // Core pages
  const routes = [
    '',
    '/about',
    '/solutions',
    '/solutions/bess',
    '/solutions/solar-hybrid',
    '/solutions/temporary-power',
    '/solutions/peak-shaving',
    '/solutions/emergency-backup',
    '/industries',
    '/projects',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
