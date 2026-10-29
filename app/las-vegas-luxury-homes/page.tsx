import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import InquiryForm from '@/components/luxury/inquiry-form'
import OfficePanel from '@/components/luxury/office-panel'
import StructuredData from '@/components/structured-data'
import { OFFICE, OFFICE_ONE_LINE } from '@/lib/office'
import { getArticleSchema, getPersonSchema } from '@/lib/schema'

export default function LasVegasLuxuryHomesPage() {
  const articleSchema = getArticleSchema({
    path: '/las-vegas-luxury-homes',
    headline: 'Las Vegas Luxury Homes for Sale: Expert Guidance for High-End Properties',
    description:
      'Guidance for buying and selling luxury homes in Summerlin, Henderson, and Las Vegas. Dr. Jan Duffy relists luxury homes that did not sell.',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
    author: getPersonSchema(),
  })

  return (
    <div className="bg-[#f7f3ec] text-[#1c1915]">
      <StructuredData data={articleSchema} id="article-schema" />
      <Breadcrumbs tone="ink" />

      <section className="bg-[#14110e] px-4 py-20 text-[#f7f3ec]">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.28em] text-[#c4a574] uppercase">Luxury homes that did not sell</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl">
              Las Vegas Luxury Homes for Sale: Expert Guidance for High-End Properties
            </h1>
            <p id="answer" className="mt-6 max-w-xl text-lg leading-relaxed text-[#e6dccb]">
              Guidance for buying and selling luxury homes in Summerlin and Henderson. The work is a second listing
              when the last one did not sell.
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#c4a574]">
              {OFFICE.agentName} is a Las Vegas REALTOR® licensed since 2008 · 35 years in Las Vegas,
              at {OFFICE_ONE_LINE}. Call or text{' '}
              <a href={`tel:${OFFICE.ctaPhoneTel}`} className="underline underline-offset-4">
                {OFFICE.ctaPhoneDisplay}
              </a>
              .
            </p>
          </div>
          <div id="listing-review">
            <InquiryForm idPrefix="luxury-homes" source="Las Vegas Luxury Homes — Private Review" />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">Understanding Las Vegas Luxury Real Estate Market</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Las Vegas luxury homes include master-planned communities like Summerlin, neighborhoods like The Summit
            Club and Ascaya, custom estates, and high-rise condominiums with Strip views. For luxury homeowners
            whose properties didn&apos;t sell, the last listing has to be read before a new one starts.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Las Vegas Luxury Communities</h3>
              <p className="mt-4 text-[#3f3832]">
                Las Vegas luxury homes include Summerlin&apos;s master-planned streets with golf courses and Red
                Rock views, Henderson places like MacDonald Highlands and Ascaya, high-rise condominiums with Strip
                panoramas, and custom estates on gated streets.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Each place is different: master-planned amenities, a gate, golf course access, mountain views, or
                Strip proximity. Luxury buyers and sellers need an agent who can tell those streets apart.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan works on Las Vegas luxury real estate: Summerlin master-planned streets, Henderson
                communities, and high-rise homes. She helps owners whose luxury homes did not sell by reading the
                last file first.
              </p>
            </article>
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Why Luxury Homes Don&apos;t Sell</h3>
              <p className="mt-4 text-[#3f3832]">
                Luxury homes in Las Vegas have a smaller buyer pool, a specific position in the comps, and marketing
                that has to reach buyers who can purchase at that price. A generic listing plan does not do that.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Common issues when a Las Vegas luxury home did not sell: the price sat above luxury comps, the
                marketing never reached those buyers, the home was positioned against the wrong competition, or the
                listing never said what made the property different.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan&apos;s approach is a luxury market read, a price set to those comps, luxury marketing channels, and a plan built for the community the home is actually in.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e4dcd0] bg-[#fffcf8] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">Las Vegas Luxury Real Estate Expertise</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Luxury home selling uses a luxury-buyer read, a price that matches the property, marketing channels
            that reach that buyer, and a number that reflects the home without sitting above the comps.
          </p>
          <div className="mt-10 grid gap-px bg-[#d9d0c3] md:grid-cols-3">
            <article className="bg-[#fffcf8] p-8">
              <h3 className="font-display text-3xl">Luxury Market Analysis</h3>
              <p className="mt-4 text-[#3f3832]">
                A read of the Las Vegas luxury market: recent luxury sales, active luxury competition, and a price
                set to those luxury properties rather than the general market.
              </p>
            </article>
            <article className="bg-[#fffcf8] p-8">
              <h3 className="font-display text-3xl">Premium Positioning</h3>
              <p className="mt-4 text-[#3f3832]">
                The listing states the location, the amenities, the custom features, the views, or the architecture.
                Luxury homes need that file, not a generic description.
              </p>
            </article>
            <article className="bg-[#fffcf8] p-8">
              <h3 className="font-display text-3xl">Luxury Marketing Channels</h3>
              <p className="mt-4 text-[#3f3832]">
                Luxury marketing: Wall Street Journal Real Estate, NYT Real Estate
                sections, luxury portals, international exposure, and channels that reach buyers shopping at this
                price.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">Las Vegas Luxury Communities Served</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Summerlin Luxury Properties</h3>
              <p className="mt-4 text-[#3f3832]">
                Summerlin offers luxury master-planned living with golf courses, Red Rock Canyon views, and the
                amenities in the villages. Luxury Summerlin homes command premium prices for master-planned
                benefits, older streets, and mature landscaping.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan works on Summerlin luxury real estate: master-planned streets, golf course homes, mountain
                views, and marketing that reaches Summerlin buyers at that price.
              </p>
              <p className="mt-6">
                <Link
                  href="/neighborhoods/summerlin"
                  className="text-sm tracking-[0.14em] text-[#9a7b4f] uppercase underline decoration-[#9a7b4f] underline-offset-4"
                >
                  Summerlin
                </Link>
              </p>
            </article>
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Henderson Luxury Enclaves</h3>
              <p className="mt-4 text-[#3f3832]">
                Henderson includes MacDonald Highlands, Ascaya, Seven Hills, and Lake Las Vegas waterfront homes.
                These are gated streets with custom luxury homes.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Henderson luxury homes are positioned by the gate, the custom architecture, and the amenities. Dr.
                Jan reads the Henderson file against those comps.
              </p>
              <p className="mt-6">
                <Link
                  href="/neighborhoods/henderson"
                  className="text-sm tracking-[0.14em] text-[#9a7b4f] uppercase underline decoration-[#9a7b4f] underline-offset-4"
                >
                  Henderson
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#14110e] px-4 py-16 text-[#f7f3ec]">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl">Luxury Home Selling Expertise</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#e6dccb]">
            Help for Las Vegas luxury homes that didn&apos;t sell. The plan covers price, presentation, and the
            marketing channels.
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
              Luxury home consultation
            </Link>
          </div>
        </div>
      </section>

      <OfficePanel />
    </div>
  )
}
