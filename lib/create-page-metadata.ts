import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-url'

export type PageSeoInput = {
  title: string
  description: string
  /** When true, use the title as-is (no layout template suffix). */
  absoluteTitle?: boolean
  noIndex?: boolean
}

export function canonicalUrlForPath(pathname: string): string {
  if (pathname === '/') {
    return SITE_URL
  }
  const normalized = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname
  return `${SITE_URL}${normalized}`
}

export function createPageMetadata(
  pathname: string,
  seo: PageSeoInput,
): Metadata {
  const canonical = canonicalUrlForPath(pathname)

  const displayTitle = seo.absoluteTitle
    ? seo.title
    : `${seo.title} | Dr. Jan Duffy`

  const title = { absolute: displayTitle }
  const ogTitle = displayTitle

  return {
    title,
    description: seo.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description: seo.description,
      url: canonical,
      images: ['/og-image.png'],
      siteName: 'Just Call Dr. Jan',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: seo.description,
      images: ['/og-image.png'],
    },
    ...(seo.noIndex
      ? { robots: { index: false, follow: false } }
      : { robots: { index: true, follow: true } }),
  }
}
