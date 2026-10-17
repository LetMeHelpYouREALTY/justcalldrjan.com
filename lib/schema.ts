// Schema.org structured data utilities

import { SITE_URL } from './site-url'
import { AGENT_PROFILE_URLS, OFFICE } from './office'

export const BASE_URL = SITE_URL

export const DR_JAN_INFO = {
  name: OFFICE.agentName,
  fullTitle: 'Dr. Jan Duffy | Las Vegas REALTOR®',
  telephone: OFFICE.ctaPhoneTel,
  email: OFFICE.email,
  licenseNumber: OFFICE.license,
  brokerage: OFFICE.brokerage,
  location: 'Las Vegas, NV',
  address: {
    '@type': 'PostalAddress',
    streetAddress: OFFICE.streetAddress,
    addressLocality: OFFICE.locality,
    addressRegion: OFFICE.region,
    postalCode: OFFICE.postalCode,
    addressCountry: OFFICE.country,
  },
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${BASE_URL}#realestateagent`,
    name: DR_JAN_INFO.name,
    description:
      'Luxury relisting for Las Vegas homes that did not sell with the previous agent.',
    url: BASE_URL,
    telephone: DR_JAN_INFO.telephone,
    email: DR_JAN_INFO.email,
    address: DR_JAN_INFO.address,
    priceRange: '$$$',
    image: `${BASE_URL}/og-image.png`,
    logo: `${BASE_URL}/og-image.png`,
    licenseNumber: DR_JAN_INFO.licenseNumber,
    sameAs: [...AGENT_PROFILE_URLS],
    worksFor: {
      '@id': `${BASE_URL}#brokerage`,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        containedIn: {
          '@type': 'State',
          name: 'Nevada'
        }
      },
      {
        '@type': 'City',
        name: 'Henderson'
      },
      {
        '@type': 'City',
        name: 'Summerlin'
      },
      {
        '@type': 'City',
        name: 'North Las Vegas'
      }
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: OFFICE.latitude,
      longitude: OFFICE.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    paymentAccepted: 'Cash, Credit Card, Financing',
    currenciesAccepted: 'USD'
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}#brokerage`,
    name: OFFICE.brokerage,
    legalName: OFFICE.brokerage,
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: DR_JAN_INFO.telephone,
      contactType: 'Sales',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    address: DR_JAN_INFO.address,
  }
}

/** Same entity as getLocalBusinessSchema. Kept so older imports cannot emit a second agent. */
export function getRealEstateAgentSchema() {
  return getLocalBusinessSchema()
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}#website`,
    name: 'Dr. Jan Duffy',
    url: BASE_URL,
    publisher: {
      '@id': `${BASE_URL}#realestateagent`,
    },
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DR_JAN_INFO.name,
    jobTitle: 'Licensed Real Estate Professional',
    description: `${DR_JAN_INFO.fullTitle}\n${DR_JAN_INFO.brokerage} | ${DR_JAN_INFO.location}\nLicense #${DR_JAN_INFO.licenseNumber}`,
    telephone: DR_JAN_INFO.telephone,
    email: DR_JAN_INFO.email,
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    sameAs: [...AGENT_PROFILE_URLS],
    worksFor: {
      '@id': `${BASE_URL}#brokerage`,
    },
    knowsAbout: [
      'Las Vegas Real Estate',
      'Expired Listings',
      'Home Selling',
      'Property Valuation'
    ]
  }
}

export function getArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  image,
  author = getPersonSchema(),
  path,
}: {
  headline: string
  description: string
  datePublished: string
  dateModified: string
  image?: string
  author?: object
  /** Site path for this article, such as `/didnt-sell`. */
  path: string
}) {
  const pageUrl = path === '/' ? BASE_URL : `${BASE_URL}${path}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author,
    publisher: {
      '@id': `${BASE_URL}#brokerage`,
    },
    datePublished,
    dateModified,
    image: image || `${BASE_URL}/og-image.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  }
}

export function getServiceSchema({
  name,
  description,
  provider = getLocalBusinessSchema(),
  areaServed = 'Las Vegas, NV',
  serviceType
}: {
  name: string
  description: string
  provider?: any
  areaServed?: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider,
    areaServed: {
      '@type': 'City',
      name: areaServed
    },
    serviceType,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function getReviewSchema({
  author,
  rating,
  reviewBody,
  datePublished
}: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody,
    datePublished
  }
}

export function getImageObjectSchema({
  contentUrl,
  description,
  width,
  height
}: {
  contentUrl: string
  description: string
  width?: number
  height?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl,
    description,
    ...(width && height && { width, height }),
    license: `${BASE_URL}/license`
  }
}

