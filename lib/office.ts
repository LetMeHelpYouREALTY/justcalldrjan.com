/**
 * Published office NAP.
 * Source checked 2026-10-12: heyberkshire.com and searchforhomesvegas.com
 * list this desk as the Google Business Profile match.
 * Client CTA remains (702) 222-1964. Office line is (702) 500-1942.
 * Coordinates from OpenStreetMap Nominatim for this street address.
 */

export const OFFICE = {
  agentName: 'Dr. Jan Duffy',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  streetAddress: '9406 W Lake Mead Blvd, Suite 100',
  locality: 'Las Vegas',
  region: 'NV',
  postalCode: '89134',
  country: 'US',
  license: 'S.0197614.LLC',
  email: 'HomeSales@CallDrDuffy.com',
  ctaPhoneDisplay: '(702) 222-1964',
  ctaPhoneTel: '+17022221964',
  officePhoneDisplay: '(702) 500-1942',
  officePhoneTel: '+17025001942',
  latitude: 36.2061963,
  longitude: -115.3001163,
  hours: [
    { days: 'Monday–Friday', hours: '9:00 AM – 6:00 PM' },
    { days: 'Saturday', hours: '10:00 AM – 4:00 PM' },
    { days: 'Sunday', hours: 'By appointment' },
  ],
} as const

export const OFFICE_ONE_LINE = `${OFFICE.streetAddress}, ${OFFICE.locality}, ${OFFICE.region} ${OFFICE.postalCode}`

export const OFFICE_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_ONE_LINE)}`

export const OFFICE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${OFFICE.agentName} ${OFFICE.brokerage} ${OFFICE_ONE_LINE}`,
)}`

export const OFFICE_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE_ONE_LINE)}&z=15&output=embed`

/** Public agent profiles confirmed 2026-10-17. Do not add social URLs that are not verified. */
export const AGENT_PROFILE_URLS = [
  'https://www.bhhsnv.com/real-estate-agent/4986/dr-jan-duffy',
  'https://www.bhhs.com/arizona-properties-california-properties-and-nevada-properties-nv301/las-vegas/dr-jan-duffy/cid-3042332',
] as const
