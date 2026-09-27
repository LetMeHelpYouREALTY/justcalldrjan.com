import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-url'
import { buildPublicSitemap } from '@/lib/public-routes'

export default function sitemap(): MetadataRoute.Sitemap {
  return buildPublicSitemap(SITE_URL)
}
