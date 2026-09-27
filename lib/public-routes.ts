import type { MetadataRoute } from 'next'

/** Indexable marketing routes (real app pages only; excludes admin and projects). */
export const PUBLIC_ROUTE_PATHS: readonly string[] = [
  '/',
  '/3d-house-tours-las-vegas',
  '/about',
  '/berkshire-hathaway/communication',
  '/berkshire-hathaway/comparison',
  '/berkshire-hathaway/marketing-power',
  '/berkshire-hathaway/pricing-mastery',
  '/berkshire-hathaway/turnaround-plan',
  '/best-neighborhoods-las-vegas',
  '/boulder-city',
  '/contact',
  '/didnt-sell',
  '/downtown-las-vegas',
  '/enterprise',
  '/expired-listing-help',
  '/home-valuation',
  '/houses-for-sale-las-vegas',
  '/how-it-works',
  '/las-vegas-condos-for-sale',
  '/las-vegas-homes',
  '/las-vegas-luxury-homes',
  '/las-vegas-mansions',
  '/las-vegas-mls',
  '/las-vegas-property-tax',
  '/las-vegas-real-estate-website',
  '/neighborhoods',
  '/neighborhoods/downtown-las-vegas/fremont',
  '/neighborhoods/henderson',
  '/neighborhoods/henderson/green-valley',
  '/neighborhoods/henderson/lake-las-vegas',
  '/neighborhoods/henderson/macdonald-ranch',
  '/neighborhoods/north-las-vegas',
  '/neighborhoods/north-las-vegas/skye-canyon',
  '/neighborhoods/summerlin',
  '/neighborhoods/summerlin/sun-city',
  '/neighborhoods/summerlin/the-foothills',
  '/neighborhoods/summerlin/the-trails',
  '/paradise',
  '/real-estate-agent-scripts-las-vegas',
  '/real-estate-las-vegas',
  '/real-estate-marketing-tools-las-vegas',
  '/realtor-las-vegas',
  '/seller-consultation',
  '/spring-valley',
  '/success-stories',
  '/whitney',
  '/why-berkshire-hathaway',
  '/winchester',
  '/zipcodes/89052',
  '/zipcodes/89074',
  '/zipcodes/89102',
  '/zipcodes/89103',
  '/zipcodes/89113',
  '/zipcodes/89117',
  '/zipcodes/89128',
  '/zipcodes/89129',
  '/zipcodes/89131',
  '/zipcodes/89134',
  '/zipcodes/89139',
]

const PUBLIC_ROUTE_SET = new Set(PUBLIC_ROUTE_PATHS)

export function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname || '/'
}

export function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTE_SET.has(normalizePathname(pathname))
}

type SitemapMeta = {
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
}

const DEFAULT_SITEMAP_META: SitemapMeta = {
  changeFrequency: 'monthly',
  priority: 0.8,
}

const SITEMAP_META: Partial<Record<string, SitemapMeta>> = {
  '/': { changeFrequency: 'weekly', priority: 1 },
  '/didnt-sell': { changeFrequency: 'weekly', priority: 1 },
  '/expired-listing-help': { changeFrequency: 'weekly', priority: 1 },
  '/seller-consultation': { changeFrequency: 'weekly', priority: 0.9 },
  '/home-valuation': { changeFrequency: 'monthly', priority: 0.9 },
  '/success-stories': { changeFrequency: 'weekly', priority: 0.9 },
  '/neighborhoods': { changeFrequency: 'weekly', priority: 0.9 },
  '/how-it-works': { changeFrequency: 'monthly', priority: 0.9 },
  '/contact': { changeFrequency: 'monthly', priority: 0.8 },
  '/about': { changeFrequency: 'monthly', priority: 0.8 },
}

export function buildPublicSitemap(baseUrl: string): MetadataRoute.Sitemap {
  const now = new Date()

  return PUBLIC_ROUTE_PATHS.map((path) => {
    const meta = SITEMAP_META[path] ?? DEFAULT_SITEMAP_META
    return {
      url: path === '/' ? baseUrl : baseUrl + path,
      lastModified: now,
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
    }
  })
}
