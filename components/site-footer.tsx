import Link from 'next/link'
import { SITE_URL } from '@/lib/site-url'
import { OFFICE, OFFICE_DIRECTIONS_URL, OFFICE_REVIEWS_URL } from '@/lib/office'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer itemScope itemType="https://schema.org/RealEstateAgent" className="bg-[#14110e] px-4 py-14 text-[#f7f3ec]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-display text-3xl" itemProp="name">
            {OFFICE.agentName}
          </h2>
          <p className="mt-3 text-sm text-[#e6dccb]" itemProp="brand">
            {OFFICE.brokerage}
          </p>
          <address
            className="mt-4 not-italic text-sm leading-relaxed text-[#e6dccb]"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="streetAddress">{OFFICE.streetAddress}</span>
            <br />
            <span itemProp="addressLocality">{OFFICE.locality}</span>,{' '}
            <span itemProp="addressRegion">{OFFICE.region}</span>{' '}
            <span itemProp="postalCode">{OFFICE.postalCode}</span>
          </address>
          <p className="mt-4 text-sm">
            <a itemProp="telephone" href={`tel:${OFFICE.ctaPhoneTel}`} className="underline decoration-[#c4a574] underline-offset-4">
              {OFFICE.ctaPhoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-sm text-[#c4a574]">Office {OFFICE.officePhoneDisplay}</p>
          <p className="mt-2 text-sm">
            <a itemProp="email" href={`mailto:${OFFICE.email}`} className="underline decoration-[#c4a574] underline-offset-4">
              {OFFICE.email}
            </a>
          </p>
          <p className="mt-4 text-sm text-[#a3988c]">
            Nevada license <span itemProp="licenseNumber">{OFFICE.license}</span>
          </p>
          <meta itemProp="priceRange" content="$$$" />
          <meta itemProp="image" content={`${SITE_URL}/og-image.png`} />
          <meta itemProp="url" content={SITE_URL} />
        </div>

        <div>
          <h2 className="text-xs tracking-[0.2em] text-[#c4a574] uppercase">Hours</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#e6dccb]">
            {OFFICE.hours.map((row) => (
              <li key={row.days}>
                {row.days}: {row.hours}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-start gap-3 text-sm">
            <a href={`tel:${OFFICE.ctaPhoneTel}`} className="underline decoration-[#c4a574] underline-offset-4">
              Call
            </a>
            <a href={OFFICE_DIRECTIONS_URL} className="underline decoration-[#c4a574] underline-offset-4" target="_blank" rel="noopener noreferrer">
              Directions
            </a>
            <a href={OFFICE_REVIEWS_URL} className="underline decoration-[#c4a574] underline-offset-4" target="_blank" rel="noopener noreferrer">
              View Google Reviews
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xs tracking-[0.2em] text-[#c4a574] uppercase">The work</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#e6dccb]">
            <li>
              <Link href="/private-listing-review" className="hover:text-[#c4a574]">
                Private listing review
              </Link>
            </li>
            <li>
              <Link href="/didnt-sell" className="hover:text-[#c4a574]">
                Why the home did not sell
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:text-[#c4a574]">
                The relist plan
              </Link>
            </li>
            <li>
              <Link href="/success-stories" className="hover:text-[#c4a574]">
                Sold after the last agent
              </Link>
            </li>
            <li>
              <Link href="/las-vegas-luxury-homes" className="hover:text-[#c4a574]">
                Las Vegas luxury homes
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#c4a574]">
                About Dr. Jan Duffy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-[#2a241e] pt-6 text-sm text-[#a3988c]">
        <p>
          © {currentYear} {OFFICE.agentName}. Luxury relisting for homes that did not sell with the previous agent.
        </p>
        <p className="mt-2">
          <a href="https://calldrduffy.com" className="underline decoration-[#6e6254] underline-offset-4" rel="noopener noreferrer">
            Selling a Las Vegas rental with tenants
          </a>
        </p>
      </div>
    </footer>
  )
}
