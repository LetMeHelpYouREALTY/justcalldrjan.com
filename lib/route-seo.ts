import type { PageSeoInput } from '@/lib/create-page-metadata'
import { isPublicRoute, normalizePathname } from '@/lib/public-routes'

const DEFAULT_DESCRIPTION =
  'Las Vegas REALTOR® Dr. Jan Duffy helps homeowners relist expired and withdrawn properties. Nevada License S.0197614.LLC.'

function entry(
  title: string,
  description: string = DEFAULT_DESCRIPTION,
  absoluteTitle = false,
): PageSeoInput {
  return { title, description, absoluteTitle }
}

/** Per-path SEO. Paths must match request pathname (no trailing slash). */
export const ROUTE_SEO: Record<string, PageSeoInput> = {
  '/': entry(
    'Las Vegas Expired Listing Help | Dr. Jan Duffy',
    'Expired or withdrawn Las Vegas listing? Dr. Jan Duffy, REALTOR®, offers a structured relisting plan for homes that did not sell the first time. License S.0197614.LLC.',
    true,
  ),
  '/about': entry(
    'About Dr. Jan Duffy',
    'Meet Dr. Jan Duffy, Las Vegas REALTOR® focused on expired and withdrawn listings and homes that did not sell the first time.',
  ),
  '/contact': entry(
    'Contact Dr. Jan Duffy',
    'Call or message Dr. Jan Duffy for expired listing help, relisting plans, and free home analysis in Las Vegas.',
  ),
  '/didnt-sell': entry(
    'Why Didn\'t Your Home Sell?',
    'Pricing, presentation, and marketing — the three reasons Las Vegas homes stall. Learn what to fix before you relist.',
  ),
  '/expired-listing-help': entry(
    'Expired Listing Help Las Vegas',
    'Free guidance for expired and withdrawn Las Vegas listings. Diagnostic review and a relisting plan with Dr. Jan Duffy, REALTOR®.',
  ),
  '/success-stories': entry(
    'Success Stories',
    'Las Vegas homeowners whose listings expired — then sold after a strategic relisting plan with Dr. Jan Duffy.',
  ),
  '/how-it-works': entry(
    'How Relisting Works',
    'Step-by-step relisting process for expired Las Vegas homes: analysis, pricing, presentation, and targeted outreach.',
  ),
  '/home-valuation': entry(
    'Free Home Valuation Las Vegas',
    'Request a free Las Vegas home value analysis to price your relist competitively. Dr. Jan Duffy, REALTOR®.',
  ),
  '/seller-consultation': entry(
    'Free Seller Consultation',
    'Book a free seller consultation for homes that did not sell. Relisting strategy for Las Vegas expired listings.',
  ),
  '/neighborhoods': entry(
    'Las Vegas Neighborhoods',
    'Explore Las Vegas, Henderson, Summerlin, and North Las Vegas areas. Local relisting insight from Dr. Jan Duffy.',
  ),
  '/neighborhoods/summerlin': entry(
    'Summerlin Real Estate',
    'Summerlin expired listings and relisting plans. Local market guidance from Dr. Jan Duffy, REALTOR®.',
  ),
  '/neighborhoods/summerlin/the-trails': entry(
    'The Trails Summerlin Homes',
    'Relisting help for The Trails, Summerlin. Dr. Jan Duffy, Las Vegas REALTOR®.',
  ),
  '/neighborhoods/summerlin/the-foothills': entry(
    'The Foothills Summerlin Homes',
    'The Foothills Summerlin homes that did not sell — relisting strategies with Dr. Jan Duffy.',
  ),
  '/neighborhoods/summerlin/sun-city': entry(
    'Sun City Summerlin Homes',
    'Sun City Summerlin relisting and expired listing help from Dr. Jan Duffy, REALTOR®.',
  ),
  '/neighborhoods/henderson': entry(
    'Henderson Real Estate',
    'Henderson expired listings and relisting plans. Dr. Jan Duffy, Las Vegas REALTOR®.',
  ),
  '/neighborhoods/henderson/green-valley': entry(
    'Green Valley Henderson Homes',
    'Green Valley Henderson relisting help for homes that did not sell.',
  ),
  '/neighborhoods/henderson/lake-las-vegas': entry(
    'Lake Las Vegas Homes',
    'Lake Las Vegas expired listing and relisting guidance from Dr. Jan Duffy.',
  ),
  '/neighborhoods/henderson/macdonald-ranch': entry(
    'MacDonald Ranch Henderson Homes',
    'MacDonald Ranch Henderson relisting strategies for stalled listings.',
  ),
  '/neighborhoods/north-las-vegas': entry(
    'North Las Vegas Real Estate',
    'North Las Vegas expired listings — relisting plans with Dr. Jan Duffy, REALTOR®.',
  ),
  '/neighborhoods/north-las-vegas/skye-canyon': entry(
    'Skye Canyon Homes',
    'Skye Canyon North Las Vegas relisting help from Dr. Jan Duffy.',
  ),
  '/neighborhoods/downtown-las-vegas/fremont': entry(
    'Fremont Street Las Vegas Homes',
    'Fremont and downtown Las Vegas relisting guidance for expired listings.',
  ),
  '/downtown-las-vegas': entry(
    'Downtown Las Vegas Real Estate',
    'Downtown Las Vegas homes that did not sell — relisting plans with Dr. Jan Duffy.',
  ),
  '/paradise': entry(
    'Paradise NV Real Estate',
    'Paradise, Nevada expired listing help and relisting strategies.',
  ),
  '/boulder-city': entry(
    'Boulder City Real Estate',
    'Boulder City homes that did not sell — local relisting expertise from Dr. Jan Duffy.',
  ),
  '/enterprise': entry(
    'Enterprise NV Real Estate',
    'Enterprise, Las Vegas relisting help for expired and withdrawn listings.',
  ),
  '/spring-valley': entry(
    'Spring Valley Real Estate',
    'Spring Valley Las Vegas expired listing and relisting guidance.',
  ),
  '/winchester': entry(
    'Winchester NV Real Estate',
    'Winchester, Las Vegas relisting help for homes that did not sell.',
  ),
  '/whitney': entry(
    'Whitney NV Real Estate',
    'Whitney, Nevada expired listing strategies and relisting support.',
  ),
  '/realtor-las-vegas': entry(
    'Las Vegas REALTOR®',
    'Las Vegas REALTOR® Dr. Jan Duffy specializes in expired listings and homes that did not sell.',
  ),
  '/real-estate-las-vegas': entry(
    'Las Vegas Real Estate',
    'Las Vegas real estate for sellers with expired or withdrawn listings. Relisting-focused guidance.',
  ),
  '/houses-for-sale-las-vegas': entry(
    'Houses for Sale Las Vegas',
    'Las Vegas houses for sale — seller resources and relisting help from Dr. Jan Duffy.',
  ),
  '/las-vegas-homes': entry(
    'Las Vegas Homes',
    'Las Vegas homes market insight and relisting help when your listing did not sell.',
  ),
  '/las-vegas-luxury-homes': entry(
    'Las Vegas Luxury Homes',
    'Luxury Las Vegas homes — marketing and relisting strategies for high-end expired listings.',
  ),
  '/las-vegas-mansions': entry(
    'Las Vegas Mansions',
    'Las Vegas mansion listings — relisting guidance for luxury properties that did not sell.',
  ),
  '/las-vegas-condos-for-sale': entry(
    'Las Vegas Condos for Sale',
    'Las Vegas condo sellers — relisting help for expired and withdrawn condo listings.',
  ),
  '/las-vegas-mls': entry(
    'Las Vegas MLS Listings',
    'Las Vegas MLS exposure is not enough alone — relisting strategy when your home did not sell.',
  ),
  '/las-vegas-property-tax': entry(
    'Las Vegas Property Tax',
    'Las Vegas property tax basics for homeowners planning to relist after an expired listing.',
  ),
  '/las-vegas-real-estate-website': entry(
    'Las Vegas Real Estate Website',
    'How a focused Las Vegas real estate site supports expired listing sellers.',
  ),
  '/best-neighborhoods-las-vegas': entry(
    'Best Neighborhoods Las Vegas',
    'Compare Las Vegas neighborhoods when you are relisting a home that did not sell.',
  ),
  '/3d-house-tours-las-vegas': entry(
    '3D House Tours Las Vegas',
    '3D tours and presentation upgrades for Las Vegas relists after an expired listing.',
  ),
  '/real-estate-marketing-tools-las-vegas': entry(
    'Real Estate Marketing Tools Las Vegas',
    'Marketing tools and presentation upgrades for Las Vegas homes that did not sell.',
  ),
  '/real-estate-agent-scripts-las-vegas': entry(
    'Real Estate Agent Scripts Las Vegas',
    'Conversation frameworks for Las Vegas expired listing outreach — from Dr. Jan Duffy.',
  ),
  '/why-berkshire-hathaway': entry(
    'Why Choose Dr. Jan Duffy',
    'Institutional marketing reach and relisting expertise when your Las Vegas home did not sell.',
  ),
  '/berkshire-hathaway/turnaround-plan': entry(
    'Expired Listing Turnaround Plan',
    'A 30-day relisting plan framework for Las Vegas expired listings.',
  ),
  '/berkshire-hathaway/marketing-power': entry(
    'Marketing Power for Relists',
    'Broader buyer reach for Las Vegas homes that did not sell the first time.',
  ),
  '/berkshire-hathaway/pricing-mastery': entry(
    'Pricing for Expired Listings',
    'Data-driven pricing when relisting a Las Vegas home after an expired listing.',
  ),
  '/berkshire-hathaway/communication': entry(
    'Seller Communication',
    'Proactive updates and clear strategy when relisting a Las Vegas home.',
  ),
  '/berkshire-hathaway/comparison': entry(
    'Brokerage Comparison Las Vegas',
    'Compare Las Vegas brokerages for expired listing sellers — and why Dr. Jan Duffy fits.',
  ),
  '/zipcodes/89117': entry('Las Vegas 89117 Homes', 'Zip 89117 Summerlin area relisting and expired listing help.'),
  '/zipcodes/89074': entry('Henderson 89074 Homes', 'Zip 89074 Green Valley relisting guidance.'),
  '/zipcodes/89131': entry('Las Vegas 89131 Homes', 'Zip 89131 relisting help for expired listings.'),
  '/zipcodes/89113': entry('Las Vegas 89113 Homes', 'Zip 89113 expired listing and relisting support.'),
  '/zipcodes/89102': entry('Las Vegas 89102 Homes', 'Zip 89102 relisting strategies near the Strip corridor.'),
  '/zipcodes/89052': entry('Henderson 89052 Homes', 'Zip 89052 relisting help for Henderson sellers.'),
  '/zipcodes/89103': entry('Las Vegas 89103 Homes', 'Zip 89103 Summerlin West relisting guidance.'),
  '/zipcodes/89128': entry('Las Vegas 89128 Homes', 'Zip 89128 relisting plans for Summerlin South.'),
  '/zipcodes/89129': entry('Las Vegas 89129 Homes', 'Zip 89129 Centennial Hills relisting help.'),
  '/zipcodes/89134': entry('Las Vegas 89134 Homes', 'Zip 89134 Southwest Las Vegas relisting support.'),
  '/zipcodes/89139': entry('Las Vegas 89139 Homes', 'Zip 89139 Enterprise South relisting guidance.'),
}

export function resolveRouteSeo(pathname: string): PageSeoInput {
  const normalized = normalizePathname(pathname)

  if (
    normalized.startsWith('/admin') ||
    normalized.startsWith('/projects/') ||
    normalized === '/projects'
  ) {
    return {
      title: 'Admin',
      description: 'Internal admin',
      noIndex: true,
      absoluteTitle: true,
    }
  }

  if (!isPublicRoute(normalized)) {
    return {
      title: 'Page Not Found',
      description: DEFAULT_DESCRIPTION,
      noIndex: true,
      absoluteTitle: true,
    }
  }

  const exact = ROUTE_SEO[normalized]
  if (exact) {
    return exact
  }

  return entry('Las Vegas Real Estate', DEFAULT_DESCRIPTION)
}
