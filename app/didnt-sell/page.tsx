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
    question: 'What are the most common reasons a home doesn\'t sell?',
    answer:
      'The three main reasons homes don\'t sell are: 1) Pricing problems - homes priced above market value, 2) Presentation issues - poor photography, staging, or maintenance, and 3) Marketing gaps - insufficient reach to potential buyers through digital channels and agent networks.',
  },
  {
    question: 'How can I tell if my home was overpriced?',
    answer:
      'Signs of overpricing include having many showings but no offers, receiving feedback that the home was overpriced, other homes in your neighborhood selling while yours sat, or your home being one of the oldest listings in the area. If agents brought interested buyers who didn\'t make offers, pricing was likely the issue.',
  },
  {
    question: 'Can poor presentation really prevent a sale?',
    answer:
      'Yes, presentation is critical. Poor photography makes buyers scroll past your listing online. Professional staging helps buyers envision living in the space. Decluttering, depersonalizing, and strategic updates often pay for themselves through faster sales and higher prices.',
  },
  {
    question: 'What kind of marketing is needed to sell a home?',
    answer:
      'Modern marketing requires professional photography and videography, virtual tours, social media promotion, targeted digital advertising, neighborhood marketing, email campaigns, and agent network activation. Simply listing on MLS isn\'t enough in competitive markets.',
  },
  {
    question: 'How long does it take Dr. Jan Duffy to sell homes that didn\'t sell before?',
    answer:
      'Results vary based on specific issues, but Dr. Jan\'s average is 32 days from relisting to sale. Her systematic approach of diagnosing specific problems and creating targeted solutions typically results in homes that sat for months selling in weeks.',
  },
  {
    question: 'What if multiple problems affected my home?',
    answer:
      'Dr. Jan\'s approach systematically addresses all identified issues. If pricing and presentation were both problems, both get fixed comprehensively. She analyzes specifically what happened with your listing to ensure the right problems get addressed efficiently.',
  },
]

export default function WhyDidntItSellPage() {
  const articleSchema = getArticleSchema({
    path: '/didnt-sell',
    headline: 'Why Didn\'t Your Home Sell? The Most Common Reasons',
    description:
      'Understanding why your home didn\'t sell is the first step to selling it successfully. Here are the most common reasons and how to fix them.',
    datePublished: '2024-01-15',
    dateModified: '2024-12-01',
    author: getPersonSchema(),
  })

  const serviceSchema = getServiceSchemaForPage('EXPIRED_LISTING_ASSISTANCE')

  return (
    <div className="bg-[#f7f3ec] text-[#1c1915]">
      <StructuredData data={articleSchema} id="article-schema" />
      <StructuredData data={serviceSchema} id="service-schema" />
      <Breadcrumbs tone="ink" />

      <section className="bg-[#14110e] px-4 py-20 text-[#f7f3ec]">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.28em] text-[#c4a574] uppercase">Why the listing stalled</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl">
              Why Didn&apos;t Your Home Sell? The Most Common Reasons
            </h1>
            <p id="answer" className="mt-6 max-w-xl text-lg leading-relaxed text-[#e6dccb]">
              Understanding why your home didn&apos;t sell is the first step to selling it successfully. Here are
              the most common reasons and how to fix them.
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
            <InquiryForm idPrefix="didnt-sell" source="Didn't Sell — Private Review" />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">The Three Main Reasons Homes Don&apos;t Sell</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            In her experience working with over 100 homes that didn&apos;t sell initially, Dr. Jan Duffy has
            identified three primary causes: pricing, presentation, and promotion. Understanding which affected
            your home is the first step toward successfully selling it.
          </p>
          <div className="mt-10 grid gap-px bg-[#d9d0c3] md:grid-cols-3">
            <article className="bg-[#f7f3ec] p-8">
              <h3 className="font-display text-3xl">Pricing Problems</h3>
              <p className="mt-4 text-[#3f3832]">
                Wrong pricing is the number one reason homes don&apos;t sell. When your home is priced above
                market value, buyers won&apos;t make offers no matter how many showings you get. Overpricing
                makes buyers think there&apos;s room to negotiate or assume something&apos;s wrong with the
                property.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Common pricing mistakes include pricing based on what you need rather than what the market will
                pay, using outdated comparable sales, comparing to dissimilar properties, or pricing emotionally
                based on investment or memories rather than market reality.
              </p>
              <p className="mt-4 text-[#3f3832]">
                The fix requires honest market analysis: understanding current market conditions, recent sales in
                your exact neighborhood, days on market for comparable properties, and buyer feedback from
                showings. Pricing correctly from the start dramatically increases your chances of selling.
              </p>
            </article>
            <article className="bg-[#f7f3ec] p-8">
              <h3 className="font-display text-3xl">Presentation Issues</h3>
              <p className="mt-4 text-[#3f3832]">
                Poor presentation makes buyers undervalue your home or lose interest before even viewing it in
                person. Presentation includes photography quality, staging, cleanliness, maintenance, and curb
                appeal. Every aspect matters in today&apos;s competitive market.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Photography is especially critical since most buyers first encounter your home online. Poor photos
                make buyers scroll past your listing. Professional photography showcasing your home&apos;s best
                features is essential for attracting serious buyers.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Staging helps buyers envision themselves living in the space. Decluttering, depersonalizing, and
                strategic furniture placement makes rooms appear larger and more appealing. Professional staging
                often pays for itself through faster sales and higher prices.
              </p>
            </article>
            <article className="bg-[#f7f3ec] p-8">
              <h3 className="font-display text-3xl">Marketing Gaps</h3>
              <p className="mt-4 text-[#3f3832]">
                Insufficient marketing reach means your home never found the right buyers. While MLS listing is
                essential, today&apos;s buyers discover homes through multiple channels: social media, search
                engines, email alerts, agent networks, and digital advertising.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Modern marketing requires professional videography, virtual tours, social media promotion,
                targeted digital advertising, neighborhood marketing, email campaigns, and agent outreach. Passive
                listing on MLS alone isn&apos;t enough in competitive markets.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Effective marketing reaches buyers wherever they&apos;re searching for homes, showcases your
                home&apos;s unique features, and creates urgency through strategic promotion and timing.
                Comprehensive marketing strategy attracts more serious buyers and increases chances of competitive
                offers.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e4dcd0] bg-[#fffcf8] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">How to Diagnose Your Specific Problem</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Your home likely didn&apos;t sell due to one or more of these three issues. Here&apos;s how to
            identify which areas affected your specific situation and what signs indicate each problem.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Pricing Problem Signs</h3>
              <p className="mt-4 text-[#3f3832]">
                Signs that pricing was the issue include having many showings but no offers, receiving feedback
                that the home was overpriced, other homes in your neighborhood selling while yours sat, or your
                home being one of oldest listings in the area.
              </p>
              <p className="mt-4 text-[#3f3832]">
                If agents brought buyers who seemed interested but didn&apos;t make offers, that&apos;s typically
                a pricing issue. Buyers liked the home but felt the asking price was too high compared to market
                value or competing properties.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Low showing activity combined with no offers suggests pricing is significantly off-market. When
                homes are dramatically overpriced, buyers and agents often skip viewing entirely because the price
                immediately signals it&apos;s not worth seeing.
              </p>
            </article>
            <article className="border-t border-[#d9d0c3] pt-6">
              <h3 className="font-display text-3xl">Presentation Problem Signs</h3>
              <p className="mt-4 text-[#3f3832]">
                Presentation issues are indicated by buyers saying the home looked different in photos than in
                person, feedback about dated décor or needed updates, complaints about cleanliness or maintenance
                issues, or very short showing times.
              </p>
              <p className="mt-4 text-[#3f3832]">
                If buyers toured but didn&apos;t return for second visits despite no pricing objections,
                presentation was likely the issue. Online buyers seeing poor photos before even touring is also a
                sign that presentation starts with photography.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Presentation problems are often easiest to fix: professional photography and staging, cleaning and
                minor repairs, or cosmetic updates like fresh paint and updated fixtures. These improvements have
                high return on investment for selling success.
              </p>
            </article>
          </div>
          <article className="mt-12 border border-[#14110e] bg-[#14110e] p-8 text-[#f7f3ec]">
            <h3 className="font-display text-3xl">Marketing Problem Signs</h3>
            <p className="mt-4 text-[#e6dccb]">
              Marketing issues are harder for homeowners to identify but show up in low showing activity despite
              reasonable pricing and good presentation. If comparable homes are getting showings while yours sits,
              marketing reach was likely insufficient.
            </p>
            <p className="mt-4 text-[#e6dccb]">
              Lack of online presence, minimal agent promotion, no open houses or virtual tours, and absence from
              buyer search results are all marketing gaps. Modern buyers use multiple search methods, and homes
              not appearing in those searches don&apos;t get seen.
            </p>
            <p className="mt-4 text-[#e6dccb]">
              Effective marketing creates buyer interest before they even see the home in person. Professional
              marketing strategy includes SEO for property search, social media presence, digital advertising,
              virtual tours, and comprehensive promotion across platforms buyers use.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">How We Fix Homes That Didn&apos;t Sell</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Dr. Jan Duffy&apos;s systematic approach addresses each problem area with proven strategies that
            consistently work. Her success rate with expired listings comes from diagnosing specific issues and
            creating targeted solutions.
          </p>
          <div className="mt-10 grid gap-px bg-[#d9d0c3] md:grid-cols-3">
            <article className="bg-[#f7f3ec] p-8">
              <h3 className="font-display text-3xl">Fixing Pricing Issues</h3>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan provides comprehensive market analysis showing recent sales in your exact neighborhood,
                current competition, and recommended pricing strategy. This objective data replaces guesswork with
                informed decisions.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Her pricing strategy considers market conditions, comparable property details, buyer psychology,
                and positioning relative to competition. The goal is setting price that attracts serious buyers
                while maximizing your return.
              </p>
            </article>
            <article className="bg-[#f7f3ec] p-8">
              <h3 className="font-display text-3xl">Fixing Presentation</h3>
              <p className="mt-4 text-[#3f3832]">
                She either works with you to improve staging using your existing furniture or invests in
                professional staging service depending on what makes most sense. Professional photography and
                videography are included.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Simple improvements like decluttering, depersonalizing, painting, and basic repairs often make
                dramatic differences. She identifies which improvements add most value versus cost, ensuring
                smart investment decisions.
              </p>
            </article>
            <article className="bg-[#f7f3ec] p-8">
              <h3 className="font-display text-3xl">Fixing Marketing</h3>
              <p className="mt-4 text-[#3f3832]">
                Her marketing strategy is comprehensive and multi-channel: professional photography and
                videography, virtual tours, social media promotion, targeted digital advertising, neighborhood
                marketing, email campaigns, and agent network activation.
              </p>
              <p className="mt-4 text-[#3f3832]">
                This aggressive marketing approach ensures your home reaches buyers wherever they search for
                properties. The goal is maximum exposure to serious buyers who are actively looking for homes like
                yours in your price range and area.
              </p>
            </article>
          </div>
          <article className="mt-12 border-t border-[#d9d0c3] pt-8">
            <h3 className="font-display text-3xl">The Systematic Approach</h3>
            <p className="mt-4 max-w-3xl text-[#3f3832]">
              Rather than trying everything and hoping something works, Dr. Jan&apos;s approach systematically
              addresses identified issues. If pricing was the only problem, that gets fixed. If it was combination
              of pricing and presentation, both get addressed comprehensively.
            </p>
            <p className="mt-4 max-w-3xl text-[#3f3832]">
              She doesn&apos;t assume what needs fixing but analyzes specifically what happened with your listing:
              showing activity, buyer feedback, competition, market conditions, and presentation. This diagnostic
              approach ensures the right problems get fixed efficiently.
            </p>
            <p className="mt-4 max-w-3xl text-[#3f3832]">
              The result is usually success where there was previous failure: homes that sat for months selling in
              weeks, properties with no offers attracting multiple offers, frustrated homeowners becoming
              successful sellers. This systematic approach is why she maintains such strong results with what many
              agents consider difficult listings.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-[#e4dcd0] bg-[#fffcf8] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">Real Results: From &quot;Didn&apos;t Sell&quot; to Sold</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f3832]">
            Here are actual examples of homes that didn&apos;t sell initially, what the problems were, and how Dr.
            Jan Duffy successfully sold them.
          </p>
          <div className="mt-10 grid gap-px bg-[#d9d0c3] md:grid-cols-2">
            <article className="bg-[#fffcf8] p-8">
              <h3 className="font-display text-3xl">Summerlin Home - Pricing Issue</h3>
              <p className="mt-4 text-[#3f3832]">
                A 4-bedroom Summerlin home sat on market for 6 months with 47 showings but zero offers. The
                homeowner was convinced the price was fair based on their renovation investment. Dr. Jan&apos;s
                market analysis showed the home was priced 12% above recent comparable sales.
              </p>
              <p className="mt-4 text-[#3f3832]">
                She recommended strategic price adjustment along with professional staging to highlight renovation
                quality. The home sold in 21 days at 98% of the adjusted listing price - which was still
                significantly more than the original pricing strategy would have achieved.
              </p>
              <p className="mt-4 text-[#3f3832]">
                The homeowner learned that overpricing doesn&apos;t protect value, it prevents sales. Proper
                pricing attracted serious buyers and competitive offers, while professional presentation
                showcased the renovation investment value.
              </p>
            </article>
            <article className="bg-[#fffcf8] p-8">
              <h3 className="font-display text-3xl">Henderson Home - Presentation and Marketing</h3>
              <p className="mt-4 text-[#3f3832]">
                A Henderson home with 3 months on market had limited showing activity. The photos were dimly lit
                and didn&apos;t showcase the home&apos;s features. No virtual tour, minimal online presence, and
                only basic MLS marketing meant most buyers never discovered the listing.
              </p>
              <p className="mt-4 text-[#3f3832]">
                Dr. Jan invested in professional photography and virtual tour, implemented social media marketing
                and digital advertising, and created neighborhood marketing campaign. Within 2 weeks, showing
                activity tripled and the home received multiple offers.
              </p>
              <p className="mt-4 text-[#3f3832]">
                The home sold for asking price in 32 days. The investment in professional marketing paid for
                itself through faster sale and avoided continued carrying costs. The homeowner realized their
                great home wasn&apos;t the problem - lack of buyer awareness was.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#14110e] px-4 py-16 text-[#f7f3ec]">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl">Ready to Sell Your Home Successfully?</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#e6dccb]">
            Dr. Jan Duffy specializes in helping homes that didn&apos;t sell get sold. Schedule a free consultation
            to discuss your specific situation and create a winning sales strategy.
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
              Get free consultation
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Questions about a home that did not sell"
        className="bg-[#f7f3ec]"
        tone="luxury"
      />
      <OfficePanel />
    </div>
  )
}
