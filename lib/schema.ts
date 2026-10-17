// Schema.org structured data. One site graph in the root layout; page schemas stay with the visible content.

import { SITE_URL } from './site-url'
import { OFFICE } from './office'

export const BASE_URL = SITE_URL
export const AGENT_ID = `${BASE_URL}/#realestateagent`
export const BROKERAGE_ID = `${BASE_URL}/#brokerage`
export const WEBSITE_ID = `${BASE_URL}/#website`
export const PERSON_ID = `${BASE_URL}/#person`

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

export const OFFICE_POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: OFFICE.streetAddress,
  addressLocality: OFFICE.locality,
  addressRegion: OFFICE.region,
  postalCode: OFFICE.postalCode,
  addressCountry: OFFICE.country,
} as const

const NEVADA = { '@type': 'State', name: 'Nevada' } as const

export const AREA_SERVED = [
  { '@type': 'City', name: 'Las Vegas', containedInPlace: NEVADA },
  { '@type': 'City', name: 'Henderson', containedInPlace: NEVADA },
  { '@type': 'City', name: 'North Las Vegas', containedInPlace: NEVADA },
  {
    '@type': 'Place',
    name: 'Summerlin',
    containedInPlace: { '@type': 'City', name: 'Las Vegas', containedInPlace: NEVADA },
  },
] as const

const OPENING_HOURS = [
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
] as const

export function getBrokerageNode() {
  return {
    '@type': 'Organization',
    '@id': BROKERAGE_ID,
    name: OFFICE.brokerage,
    address: OFFICE_POSTAL_ADDRESS,
  }
}

export function getRealEstateAgentNode() {
  return {
    '@type': 'RealEstateAgent',
    '@id': AGENT_ID,
    name: OFFICE.agentName,
    description: 'Luxury relisting for Las Vegas homes that did not sell with the previous agent.',
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    telephone: OFFICE.ctaPhoneTel,
    email: OFFICE.email,
    address: OFFICE_POSTAL_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: OFFICE.latitude,
      longitude: OFFICE.longitude,
    },
    openingHoursSpecification: OPENING_HOURS,
    areaServed: AREA_SERVED,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Nevada Real Estate License',
      identifier: OFFICE.license,
    },
    parentOrganization: { '@id': BROKERAGE_ID },
  }
}

export function getWebSiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Just Call Dr. Jan',
    url: BASE_URL,
    inLanguage: 'en-US',
    publisher: { '@id': AGENT_ID },
  }
}

export function getSiteGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [getBrokerageNode(), getRealEstateAgentNode(), getWebSiteNode()],
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: DR_JAN_INFO.name,
    jobTitle: 'Licensed Real Estate Professional',
    description: `${DR_JAN_INFO.fullTitle}\n${DR_JAN_INFO.brokerage} | ${DR_JAN_INFO.location}\nLicense #${DR_JAN_INFO.licenseNumber}`,
    telephone: DR_JAN_INFO.telephone,
    email: DR_JAN_INFO.email,
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    worksFor: {
      '@type': 'Organization',
      '@id': BROKERAGE_ID,
      name: OFFICE.brokerage,
    },
    knowsAbout: [
      'Las Vegas Real Estate',
      'Expired Listings',
      'Home Selling',
      'Property Valuation',
    ],
  }
}

export function getArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  image,
  author = getPersonSchema(),
}: {
  headline: string
  description: string
  datePublished: string
  dateModified: string
  image?: string
  author?: ReturnType<typeof getPersonSchema>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author,
    publisher: {
      '@type': 'RealEstateAgent',
      '@id': AGENT_ID,
      name: OFFICE.agentName,
    },
    datePublished,
    dateModified,
    image: image || `${BASE_URL}/og-image.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': BASE_URL,
    },
  }
}

export function getServiceSchema({
  name,
  description,
  serviceType,
}: {
  name: string
  description: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@id': AGENT_ID },
    areaServed: AREA_SERVED,
    serviceType,
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
      item: item.url,
    })),
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
