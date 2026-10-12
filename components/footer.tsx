import { OFFICE } from '@/lib/office'
import { SITE_URL } from '@/lib/site-url'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer itemScope itemType="https://schema.org/RealEstateAgent" className="border-t border-[#2a241e] bg-[#14110e] px-4 py-8 text-[#f7f3ec]">
      <div className="mx-auto max-w-6xl space-y-2 text-center text-sm">
        <p>
          © {year} <span itemProp="name">{OFFICE.agentName}</span>
        </p>
        <p itemProp="brand">{OFFICE.brokerage}</p>
        <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">{OFFICE.streetAddress}</span>,{' '}
          <span itemProp="addressLocality">{OFFICE.locality}</span>,{' '}
          <span itemProp="addressRegion">{OFFICE.region}</span>{' '}
          <span itemProp="postalCode">{OFFICE.postalCode}</span>
        </address>
        <p>
          <a itemProp="telephone" href={`tel:${OFFICE.ctaPhoneTel}`}>
            {OFFICE.ctaPhoneDisplay}
          </a>
        </p>
        <p>
          Nevada license <span itemProp="licenseNumber">{OFFICE.license}</span>
        </p>
        <meta itemProp="priceRange" content="$$$" />
        <meta itemProp="image" content={`${SITE_URL}/og-image.png`} />
      </div>
    </footer>
  )
}
