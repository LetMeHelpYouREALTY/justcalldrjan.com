import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import FAQSection from '@/components/faq-section'
import InquiryForm from '@/components/luxury/inquiry-form'
import OfficePanel from '@/components/luxury/office-panel'
import StructuredData from '@/components/structured-data'
import { OFFICE, OFFICE_ONE_LINE } from '@/lib/office'
import { getArticleSchema, getPersonSchema } from '@/lib/schema'
import { getServiceSchemaForPage } from '@/lib/services'

const faqs = [
  {
    question: 'How long does Dr. Jan\'s process typically take?',
    answer:
      'Results vary by property and issues, but Dr. Jan\'s average is 32 days from relisting to sale for homes that didn\'t sell initially. Her systematic approach identifies problems quickly and implements targeted solutions efficiently.',
  },
  {
    question: 'What happens in the initial consultation?',
    answer:
      'Dr. Jan reviews your expired listing comprehensively: showing activity, buyer feedback, market conditions, and competition. She identifies specific issues preventing sale and outlines a strategic plan with timeline, costs, and expected results.',
  },
  {
    question: 'What if my home needs improvements?',
    answer:
      'Dr. Jan identifies which improvements add the most value for cost. Not every home needs major updates - strategic improvements, pricing adjustments, or marketing enhancements may be sufficient. Her plan outlines necessary improvements with expected impact.',
  },
  {
    question: 'How is this different from my previous listing agent?',
    answer:
      'Dr. Jan specializes in expired listings and uses a diagnostic approach to identify specific issues. She provides comprehensive marketing, proactive communication, and data-driven pricing strategy. Her systematic process addresses problems rather than hoping they resolve themselves.',
  },
  {
    question: 'What kind of communication can I expect?',
    answer: `Dr. Jan provides weekly updates via email and phone, instant access at ${OFFICE.ctaPhoneDisplay} for questions or concerns, proactive communication about showings and feedback, and strategic pivots when market conditions change. Your listing receives personal attention.`,
  },
  {
    question: 'What results can I realistically expect?',
    answer:
      'Typical results: 30-45 days on market for expired listings, competitive pricing attracting serious buyers, multiple offers when possible, and successful sales at fair market value. Dr. Jan\'s systematic approach creates consistent results for homes that didn\'t sell initially.',
  },
]

const reviewItems = [
  'Previous listing price vs. current market comparables',
  'Photo quality and presentation',
  'Marketing channels used and exposure received',
  'Agent communication and showing feedback',
  'Competitor analysis and market positioning',
]

export default function HowItWorksPage() {
  const articleSchema = getArticleSchema({
    path: '/how-it-works',
    headline: 'How Dr. Jan Helps Homes That Didn\'t Sell Get Sold',
    description:
      'A step-by-step look at Dr. Jan Duffy\'s proven process for turning expired listings into sold properties. From initial consultation to successful closing.',
    datePublished: '2024-02-01',
    dateModified: '2024-12-01',
    author: getPersonSchema(),
  })

  const serviceSchema = getServiceSchemaForPage('SELLER_REPRESENTATION')

  return (
    <div className="bg-[#f7f3ec] text-[#1c1915]">
      <StructuredData data={articleSchema} id="article-schema" />
      <StructuredData data={serviceSchema} id="service-schema" />
      <Breadcrumbs tone="ink" />

      <section className="bg-[#14110e] px-4 py-20 text-[#f7f3ec]">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.28em] text-[#c4a574] uppercase">The relist plan</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl">
              How Dr. Jan Helps Homes That Didn&apos;t Sell Get Sold
            </h1>
            <p id="answer" className="mt-6 max-w-xl text-lg leading-relaxed text-[#e6dccb]">
              A step-by-step look at Dr. Jan Duffy&apos;s proven process for turning expired listings into sold
              properties. From initial consultation to successful closing.
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#c4a574]">
              By{' '}
              <Link href="/about" className="underline underline-offset-4">
                {OFFICE.agentName}
              </Link>
              , a Las Vegas REALTOR® with {OFFICE.brokerage}, Nevada license {OFFICE.license}, at{' '}
              {OFFICE_ONE_LINE}. Call or text{' '}
              <a href={`tel:${OFFICE.ctaPhoneTel}`} className="underline underline-offset-4">
                {OFFICE.ctaPhoneDisplay}
              </a>
              .
            </p>
          </div>
          <div id="listing-review">
            <InquiryForm idPrefix="how-it-works" source="How It Works — Private Review" />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.22em] text-[#9a7b4f]">01</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Initial Consultation &amp; Listing Audit</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Your journey begins with a comprehensive consultation where Dr. Jan analyzes exactly what went wrong
            with your previous listing. This honest assessment identifies specific failures that can be corrected.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">What We Review</h3>
              <ul className="mt-4 space-y-3 text-[#3f3832]">
                {reviewItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">The Honest Conversation</h3>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan will tell you exactly what went wrong: Was pricing too high? Were photos poor? Was
                marketing insufficient? This isn&apos;t about blaming - it&apos;s about identifying specific
                failures so they can be fixed.
              </p>
              <p className="mt-4 text-[#3f3832]">
                You&apos;ll receive a clear assessment of: what failed, why it failed, and exactly how to fix it.
                No sugar-coating, no promises without plans - just honest diagnosis leading to actionable
                solutions.
              </p>
              <p className="mt-4 text-[#3f3832]">
                By the end of this consultation, you&apos;ll have a complete understanding of what needs to change
                and confidence in a plan that will work.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e4dcd0] bg-[#fffcf8] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.22em] text-[#9a7b4f]">02</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Strategic Repricing &amp; Market Analysis</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Dr. Jan conducts fresh market analysis using current data and proprietary Berkshire Hathaway
            HomeServices valuation tools to determine optimal pricing strategy that attracts buyers while
            protecting your equity.
          </p>
          <article className="mt-12 border border-[#d9d0c3] bg-[#f7f3ec] p-8">
            <h3 className="font-display text-3xl">Data-Driven Pricing Process</h3>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <h4 className="font-display text-2xl">Comparable Sales</h4>
                <p className="mt-3 text-[#3f3832]">
                  Recent sales of similar homes in your exact neighborhood and price range analyzed for accurate
                  comparison.
                </p>
              </div>
              <div>
                <h4 className="font-display text-2xl">Active Competition</h4>
                <p className="mt-3 text-[#3f3832]">
                  Current listings competing for same buyers, their pricing, days on market, and showing activity
                  patterns.
                </p>
              </div>
              <div>
                <h4 className="font-display text-2xl">Absorption Rates</h4>
                <p className="mt-3 text-[#3f3832]">
                  How quickly homes are selling at current price points in your area determines pricing strategy
                  effectiveness.
                </p>
              </div>
            </div>
          </article>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Pricing isn&apos;t guesswork - it&apos;s science. Dr. Jan combines her PhD-level analytical approach
            with 30 years of Vegas market experience and proprietary BHHS tools to determine pricing that works.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Result: Strategic pricing that positions your home competitively from day one, attracting buyers while
            maximizing your return. No more chasing the market down after initial overpricing.
          </p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.22em] text-[#9a7b4f]">03</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Professional Presentation &amp; Marketing</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Your home receives professional presentation that showcases its best features: professional
            photography, staging consultation, and marketing materials with Berkshire Hathaway HomeServices luxury
            branding.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Professional Photography</h3>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan invests in professional photography with proper lighting, wide-angle shots, and staging
                that makes your home look its absolute best. These photos appear in premium marketing channels,
                not just basic MLS.
              </p>
              <p className="mt-4 text-[#3f3832]">
                First impressions matter. Professional photos ensure buyers see your home at its best from the
                moment they view listings online.
              </p>
            </article>
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Staging Consultation</h3>
              <p className="mt-4 text-[#3f3832]">
                Staging consultation helps present your home at its best: decluttering, depersonalizing, strategic
                furniture placement. Simple improvements that dramatically improve buyer response.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan identifies which improvements provide best return on investment, ensuring staging
                investments pay off in faster sales and better offers.
              </p>
            </article>
          </div>
          <article className="mt-12 border border-[#14110e] bg-[#14110e] p-8 text-[#f7f3ec]">
            <h3 className="font-display text-3xl">BHHS Luxury Marketing</h3>
            <p className="mt-4 text-[#e6dccb]">
              Marketing materials carry Berkshire Hathaway HomeServices luxury branding that signals quality and
              institutional backing. Your home appears in premium channels: Wall Street Journal Real Estate, NYT
              Real Estate sections, and elite luxury portals.
            </p>
            <p className="mt-4 text-[#e6dccb]">
              This isn&apos;t just better MLS photos - it&apos;s your home reaching qualified buyers through
              channels that regional firms can&apos;t access. Institutional marketing power gets results that
              basic listing exposure can&apos;t match.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-[#e4dcd0] bg-[#fffcf8] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.22em] text-[#9a7b4f]">04</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Network Activation &amp; Buyer Outreach</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Your listing is actively promoted to Berkshire Hathaway HomeServices agent networks, luxury buyer
            databases, and international referral partners - reaching buyers that previous agents couldn&apos;t
            access.
          </p>
          <div className="mt-10 grid gap-px bg-[#d9d0c3] md:grid-cols-3">
            <article className="bg-[#fffcf8] p-8">
              <h3 className="font-display text-3xl">BHHS Agent Network</h3>
              <p className="mt-4 text-[#3f3832]">
                900+ Berkshire Hathaway agents in Nevada receive your listing through internal network with buyers
                actively searching.
              </p>
            </article>
            <article className="bg-[#fffcf8] p-8">
              <h3 className="font-display text-3xl">Luxury Buyer Database</h3>
              <p className="mt-4 text-[#3f3832]">
                Qualified buyers who have purchased high-end properties receive direct promotion of your listing.
              </p>
            </article>
            <article className="bg-[#fffcf8] p-8">
              <h3 className="font-display text-3xl">International Referrals</h3>
              <p className="mt-4 text-[#3f3832]">
                BHHS international offices and referral partners in all 50 states promote your listing to their
                clients.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.22em] text-[#9a7b4f]">05</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Ongoing Management &amp; Strategic Pivots</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Dr. Jan maintains weekly communication with detailed updates and strategic adjustments that keep your
            listing competitive until it&apos;s sold. This proactive management is what turns expired listings into
            sold properties.
          </p>
          <article className="mt-12 border-t border-[#d9d0c3] pt-8">
            <h3 className="font-display text-3xl">Weekly Reporting System</h3>
            <p className="mt-4 max-w-3xl text-[#3f3832]">
              Every week you&apos;ll receive detailed reports: showing frequency, buyer feedback themes, competitor
              activity, and strategic recommendations. No more radio silence - you know exactly what&apos;s
              happening.
            </p>
            <p className="mt-4 max-w-3xl text-[#3f3832]">
              These reports identify patterns and trigger strategic adjustments: price changes if needed, marketing
              enhancements if required, or positioning shifts if necessary - all within 14-21 days, not after weeks
              of stagnation.
            </p>
            <p className="mt-4 max-w-3xl text-[#3f3832]">
              You have 24/7 access at {OFFICE.ctaPhoneDisplay}. Questions? Call. Concerns? Call. Dr. Jan treats
              your listing like her own investment - because reputation matters more than any single commission.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#14110e] px-4 py-16 text-[#f7f3ec]">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl">Ready to Get Started?</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#e6dccb]">
            See how Dr. Jan&apos;s proven process turns expired listings into sold properties.
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
              Schedule consultation
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Questions about the relist plan"
        className="bg-[#f7f3ec]"
        tone="luxury"
      />
      <OfficePanel />
    </div>
  )
}
