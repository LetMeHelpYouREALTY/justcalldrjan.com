// Service definitions for real estate services

import { getServiceSchema } from './schema'

export const SERVICES = {
  EXPIRED_LISTING_ASSISTANCE: {
    name: 'Expired Listing Assistance',
    description: 'Help for homes that did not sell the first time: pricing, presentation, and a relist plan.',
    serviceType: 'Real Estate Brokerage Service',
  },
  HOME_VALUATION: {
    name: 'Home Valuation Service',
    description: 'A home value assessment used to price a Las Vegas relist.',
    serviceType: 'Property Valuation Service',
  },
  REAL_ESTATE_MARKETING: {
    name: 'Real Estate Marketing Service',
    description: 'Photography, virtual tours, and digital advertising through Berkshire Hathaway HomeServices.',
    serviceType: 'Real Estate Marketing Service',
  },
  BUYER_REPRESENTATION: {
    name: 'Buyer Representation',
    description: 'Buyer representation for Las Vegas home searches, including MLS access and offer negotiation.',
    serviceType: 'Real Estate Buyer Agent Service',
  },
  SELLER_REPRESENTATION: {
    name: 'Seller Representation',
    description: 'Seller representation for pricing, staging recommendations, marketing, and negotiation.',
    serviceType: 'Real Estate Listing Service',
  },
  PROPERTY_SEARCH_ASSISTANCE: {
    name: 'Property Search Assistance',
    description: 'Property search help for Las Vegas buyers, using MLS listings and local market guidance.',
    serviceType: 'Real Estate Search Service',
  }
}

export function getServiceSchemaForPage(serviceKey: keyof typeof SERVICES) {
  const service = SERVICES[serviceKey]
  return getServiceSchema({
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
  })
}

