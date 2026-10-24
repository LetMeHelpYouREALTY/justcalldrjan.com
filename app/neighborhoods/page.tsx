import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import InquiryForm from '@/components/luxury/inquiry-form'
import OfficePanel from '@/components/luxury/office-panel'
import { OFFICE, OFFICE_ONE_LINE } from '@/lib/office'

const neighborhoods = [
  {
    name: 'Summerlin',
    slug: 'summerlin',
    path: '/neighborhoods/summerlin',
    description: 'Master-planned community with golf courses and parks',
    medianPrice: '$575,000',
    activeListings: 234,
    facts: ['Golf', 'Parks', 'Master-planned'],
  },
  {
    name: 'Henderson',
    slug: 'henderson',
    path: '/neighborhoods/henderson',
    description: 'Fast-growing city with great value and a wide range of housing options',
    medianPrice: '$450,000',
    activeListings: 189,
    facts: ['Value', 'Growing', 'Housing range'],
  },
  {
    name: 'Downtown Las Vegas',
    slug: 'downtown-las-vegas',
    path: '/downtown-las-vegas',
    description: 'Urban living with condos, lofts, and entertainment district access',
    medianPrice: '$325,000',
    activeListings: 156,
    facts: ['Urban', 'Entertainment', 'Condos'],
  },
  {
    name: 'Paradise',
    slug: 'paradise',
    path: '/paradise',
    description: 'Strip-adjacent with high-rises and luxury condominiums',
    medianPrice: '$380,000',
    activeListings: 201,
    facts: ['Luxury', 'Strip Views', 'High-Rise'],
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    path: '/enterprise',
    description: 'West side value with new construction and older villages',
    medianPrice: '$425,000',
    activeListings: 167,
    facts: ['New Builds', 'Value', 'Growing'],
  },
  {
    name: 'Spring Valley',
    slug: 'spring-valley',
    path: '/spring-valley',
    description: 'Central location with older neighborhoods',
    medianPrice: '$395,000',
    activeListings: 143,
    facts: ['Central', 'Older streets'],
  },
  {
    name: 'North Las Vegas',
    slug: 'north-las-vegas',
    path: '/neighborhoods/north-las-vegas',
    description: 'Affordable new construction with great parks',
    medianPrice: '$385,000',
    activeListings: 212,
    facts: ['New Builds', 'Parks', 'Value'],
  },
  {
    name: 'Boulder City',
    slug: 'boulder-city',
    path: '/boulder-city',
    description: 'Small-town charm near Lake Mead with outdoor recreation access',
    medianPrice: '$420,000',
    activeListings: 98,
    facts: ['Outdoor Recreation', 'Lake Access', 'Small-Town'],
  },
  {
    name: 'Winchester',
    slug: 'winchester',
    path: '/winchester',
    description: 'Convenience and access near McCarran International',
    medianPrice: '$360,000',
    activeListings: 134,
    facts: ['Convenience', 'Airport Access'],
  },
  {
    name: 'Whitney',
    slug: 'whitney',
    path: '/whitney',
    description: 'East Las Vegas residential streets with older neighborhoods',
    medianPrice: '$370,000',
    activeListings: 145,
    facts: ['Older streets', 'East side'],
  },
]

export default function NeighborhoodsPage() {
  return (
    <div className="bg-[#f7f3ec] text-[#1c1915]">
      <Breadcrumbs tone="ink" />

      <section className="bg-[#14110e] px-4 py-20 text-[#f7f3ec]">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.28em] text-[#c4a574] uppercase">Where the last listing sat</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl">
              Las Vegas Neighborhoods for a Second Listing.
            </h1>
            <p id="answer" className="mt-6 max-w-xl text-lg leading-relaxed text-[#e6dccb]">
              Discover the Las Vegas neighborhoods in Las Vegas. From master-planned communities to urban living,
              find the area that matches your commute, the parks, and the price.
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#c4a574]">
              {OFFICE.agentName} is a Las Vegas REALTOR® in real estate since 1983,
              at {OFFICE_ONE_LINE}. Call or text{' '}
              <a href={`tel:${OFFICE.ctaPhoneTel}`} className="underline underline-offset-4">
                {OFFICE.ctaPhoneDisplay}
              </a>
              .
            </p>
          </div>
          <div id="listing-review">
            <InquiryForm idPrefix="neighborhoods" source="Neighborhoods — Private Review" />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">Explore Las Vegas Communities</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Las Vegas offers neighborhoods each with their own streets, amenities, and housing. Master-planned
            villages with golf courses, residential areas at a lower price, and urban condos all sit in the same
            valley.
          </p>
          <ul className="mt-10 divide-y divide-[#e4dcd0] border-y border-[#e4dcd0]">
            {neighborhoods.map((neighborhood) => (
              <li key={neighborhood.slug}>
                <Link href={neighborhood.path} className="block py-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-xl">
                      <h3 className="font-display text-3xl">{neighborhood.name}</h3>
                      <p className="mt-3 text-[#3f3832]">{neighborhood.description}</p>
                      <p className="mt-3 text-sm tracking-[0.12em] text-[#9a7b4f] uppercase">
                        {neighborhood.facts.join(' · ')}
                      </p>
                    </div>
                    <dl className="grid grid-cols-2 gap-6 text-sm md:text-right">
                      <div>
                        <dt className="text-[#5c534c]">Median price on this page</dt>
                        <dd className="mt-1 font-display text-3xl">{neighborhood.medianPrice}</dd>
                      </div>
                      <div>
                        <dt className="text-[#5c534c]">Active listings on this page</dt>
                        <dd className="mt-1 font-display text-3xl">{neighborhood.activeListings}</dd>
                      </div>
                    </dl>
                  </div>
                  <p className="mt-4 text-sm tracking-[0.14em] text-[#9a7b4f] uppercase">
                    Explore {neighborhood.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[#e4dcd0] bg-[#fffcf8] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">Why Las Vegas Neighborhoods?</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Las Vegas real estate offers a range of prices, amenities, and communities. From master-planned
            developments to new construction at a lower price, here is what is on the ground.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Golf Course Communities</h3>
              <p className="mt-4 text-[#3f3832]">
                Las Vegas is home to over 50 championship golf courses, many integrated into master-planned
                communities. Neighborhoods like Summerlin, Henderson, and Green Valley offer golf course living
                with desert and mountain views.
              </p>
              <p className="mt-4 text-[#3f3832]">
                TPC Summerlin, Reflection Bay, and DragonRidge provide golf course access, amenities, and luxury
                homes. Golf course homes on this page are tied to the course, the view, and the price.
              </p>
            </article>
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Schools by name</h3>
              <p className="mt-4 text-[#3f3832]">
                Clark County School District covers Summerlin, Henderson, and Green Valley. A listing file can
                name the school and the drive, not a rating.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Palo Verde High School, Coronado High, and Advanced Technologies Academy are in the valley. Buyers
                can look up the zone for a specific address.
              </p>
            </article>
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Growing Economy</h3>
              <p className="mt-4 text-[#3f3832]">
                Las Vegas has job growth in tourism, technology, healthcare, and finance. Major employers include
                casinos, hospitals, tech companies, and aerospace firms.
              </p>
              <p className="mt-4 text-[#3f3832]">
                No state income tax, the cost of living, and a wide set of jobs draw new residents and
                businesses. The city&apos;s population has grown by over 10% in recent years, driving demand for
                housing.
              </p>
            </article>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Master-Planned Communities</h3>
              <p className="mt-4 text-[#3f3832]">
                Las Vegas has master-planned communities with parks, trails, and shopping inside the plan.
                Summerlin, developed by The Howard Hughes Corporation, spans 22,500 acres with parks, trails,
                schools, shopping, and entertainment within walking distance of many homes.
              </p>
              <p className="mt-4 text-[#3f3832]">
                These communities have homeowners associations that maintain common areas and organize events. The
                HOA amenities often include pools, fitness centers, playgrounds, and parks.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Buying in a master-planned community on this page is tied to resale, appreciation, and the parks,
                trails, and commute. The plan covers infrastructure, traffic flow, and building standards.
              </p>
            </article>
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">New Construction and Older Neighborhoods</h3>
              <p className="mt-4 text-[#3f3832]">
                Las Vegas has both new construction and older neighborhoods. New construction areas like Skye
                Canyon, Inspirada, and Cadence offer modern floor plans, energy-efficient features, and current
                home design.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Older neighborhoods like Spring Valley, Paradise, and parts of Henderson have mature landscaping,
                existing parks, and often larger lots. These areas typically have lower HOA fees and more tree
                cover.
              </p>
              <p className="mt-4 text-[#3f3832]">
                New builds offer the latest floor plans. Older neighborhoods offer larger lots and lower fees. Both
                sit in the same valley.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">Find Your Perfect Las Vegas Neighborhood</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            With so many neighborhoods to choose from, a local read of the last listing helps. Dr. Jan Duffy works
            with buyers and sellers on Las Vegas homes, including the commute, the parks, and the price.
          </p>
          <div className="mt-10 grid gap-px bg-[#d9d0c3] md:grid-cols-3">
            <article className="bg-[#f7f3ec] p-8">
              <h3 className="font-display text-3xl">Neighborhood Expertise</h3>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan knows Las Vegas neighborhoods, including sub-communities, school names, HOA details, and
                what is listed now. She can name areas that match a commute and a price.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Summerlin&apos;s master-planned villages, Henderson&apos;s price range, and Downtown&apos;s condos
                each need a different read of the last listing.
              </p>
            </article>
            <article className="bg-[#f7f3ec] p-8">
              <h3 className="font-display text-3xl">Market Intelligence</h3>
              <p className="mt-4 text-[#3f3832]">
                Each Las Vegas neighborhood has its own recent sales, price trends, and buyer competition. Those
                details change the pricing plan.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan reads recent sales, days on market, and inventory for the streets that compete with the
                home. The median prices and listing counts above are the figures this page already showed.
              </p>
            </article>
            <article className="bg-[#f7f3ec] p-8">
              <h3 className="font-display text-3xl">Personalized Service</h3>
              <p className="mt-4 text-[#3f3832]">
                The match is the price, the parks, the school name, and the commute. Dr. Jan asks about those
                before she names a neighborhood.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Commute times, school names, parks, and resale are the facts in the plan.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#14110e] px-4 py-16 text-[#f7f3ec]">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl">Need Help Finding Your Perfect Neighborhood?</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#e6dccb]">
            Tell us the commute, the price, and what the last listing did. We will name the Las Vegas
            neighborhoods that fit those facts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${OFFICE.ctaPhoneTel}`}
              className="inline-flex items-center justify-center bg-[#c4a574] px-6 py-4 text-sm tracking-[0.14em] text-[#14110e] uppercase"
            >
              Call {OFFICE.ctaPhoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#c4a574] px-6 py-4 text-sm tracking-[0.14em] text-[#f7f3ec] uppercase"
            >
              Get neighborhood match
            </Link>
          </div>
        </div>
      </section>

      <OfficePanel />
    </div>
  )
}
