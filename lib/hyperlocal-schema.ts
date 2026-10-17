// Advanced hyperlocal schema markup for 2024-2025 Google SEO strategy

import { AGENT_ID, BASE_URL, DR_JAN_INFO } from './schema'

/**
 * ServiceArea schema for specific neighborhoods and zip codes
 * Implements Google's latest hyperlocal targeting strategy
 */
export function getServiceAreaSchema(areas: Array<{ name: string; type: 'City' | 'Neighborhood' | 'ZipCode' }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Services',
    provider: { '@id': AGENT_ID },
    areaServed: areas.map(area => ({
      '@type': area.type === 'City' ? 'City' : 'Place',
      name: area.name,
      ...(area.type === 'City' && {
        containedIn: {
          '@type': 'State',
          name: 'Nevada'
        }
      })
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: BASE_URL,
      servicePhone: DR_JAN_INFO.telephone
    }
  }
}

/**
 * PostalCode schema for zip code pages
 * Implements Google's zip code targeting strategy
 */
export function getPostalCodeSchema(zipCode: string, cityName: string = 'Las Vegas') {
  return {
    '@context': 'https://schema.org',
    '@type': 'PostalCode',
    postalCode: zipCode,
    addressLocality: cityName,
    addressRegion: 'NV',
    addressCountry: 'US'
  }
}

/**
 * Place schema for neighborhood pages
 * Enhances local relevance signals
 */
export function getPlaceSchema(placeName: string, placeType: 'Neighborhood' | 'City' = 'Neighborhood') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: placeName,
    containedIn: {
      '@type': 'City',
      name: 'Las Vegas',
      containedIn: {
        '@type': 'State',
        name: 'Nevada'
      }
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'placeType',
      value: placeType
    }
  }
}

