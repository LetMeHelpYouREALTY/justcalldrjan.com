import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-url'

export default function sitemapIndex(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/sitemap.xml`,
      lastModified: new Date(),
    },
  ]
}

