import Link from 'next/link'
import FAQSection from '@/components/faq-section'
import InquiryForm from '@/components/luxury/inquiry-form'
import OfficePanel from '@/components/luxury/office-panel'
import { OFFICE, OFFICE_ONE_LINE } from '@/lib/office'

const reasons = [
  {
    title: 'The price sat above the comps',
    body: 'Buyers toured. Offers did not follow. The number was the problem.',
  },
  {
    title: 'The photos lost the scroll',
    body: 'Luxury buyers decide in the first frames. Weak images never earn a showing.',
  },
  {
    title: 'The right desks never saw it',
    body: 'An MLS entry is a start. It is not a buyer list.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Read the last listing',
    body: 'Days on market, showings, feedback, and the price history. No new photos until that file is clear.',
  },
  {
    number: '02',
    title: 'Price it to this month',
    body: 'Comps from the streets that actually compete. Not the number the last agent needed.',
  },
  {
    number: '03',
    title: 'Reshoot and restage',
    body: 'New photography, a tighter story, and broader marketing reach.',
  },
  {
    number: '04',
    title: 'Report every week',
    body: 'You hear what buyers said. The plan moves when the market moves.',
  },
]

const areas = [
  {
    href: '/neighborhoods/summerlin',
    label: 'Luxury homes in Summerlin',
    note: 'Red Rock views, golf, and the office on Lake Mead Blvd in 89134.',
  },
  {
    href: '/neighborhoods/summerlin/the-trails',
    label: 'Homes in The Trails',
    note: 'The office address sits in The Trails. Showings start from this desk.',
  },
  {
    href: '/neighborhoods/henderson',
    label: 'Homes in Henderson',
    note: 'Green Valley, MacDonald Ranch, and Lake Las Vegas. Reach them on I-215.',
  },
  {
    href: '/neighborhoods/henderson/lake-las-vegas',
    label: 'Lake Las Vegas homes',
    note: 'Water frontage and golf. A smaller buyer pool needs a tighter price.',
  },
  {
    href: '/neighborhoods/henderson/macdonald-ranch',
    label: 'MacDonald Ranch homes',
    note: 'Custom homes and mountain views above Henderson.',
  },
  {
    href: '/las-vegas-luxury-homes',
    label: 'Las Vegas luxury homes',
    note: 'High-rise views of the Strip, and estate lots west of town.',
  },
]

const faqs = [
  {
    question: 'Can you take a luxury listing that already expired?',
    answer:
      'Yes, once the last listing agreement has ended. Dr. Jan starts with that file: price, photos, showings, and feedback. She does not restart the same campaign.',
  },
  {
    question: 'What if my agreement with the last agent is still active?',
    answer:
      'We wait. A private review can be scheduled for the day that agreement ends. We do not ask you to break a contract that is still in force.',
  },
  {
    question: 'What does the private review include?',
    answer:
      'A read of the expired or withdrawn listing, a current comparable set, and a written relist plan. The plan covers price, presentation, and who should see the home next.',
  },
  {
    question: 'Which Las Vegas areas do you relist?',
    answer:
      'The desk is at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Most of the work is Summerlin, Henderson, Lake Las Vegas, MacDonald Ranch, and luxury condos with Strip views.',
  },
  {
    question: 'How do I reach Dr. Jan Duffy?',
    answer:
      'Call or text (702) 222-1964. The office line is (702) 500-1942. Hours are Monday through Friday 9:00 AM to 6:00 PM, Saturday 10:00 AM to 4:00 PM, and Sunday by appointment.',
  },
]

export default function HomePageContent() {
  return (
    <div className="bg-[#f7f3ec] text-[#1c1915]">
      <section className="bg-[#14110e] px-4 py-20 text-[#f7f3ec] md:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.28em] text-[#c4a574] uppercase">
              Las Vegas luxury · unsold listings
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">
              Your home did not sell with the last agent.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#e6dccb]">
              Dr. Jan Duffy reads the old listing first. Price, photos, and who actually saw it.
              Then she writes a private relist plan.
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#c4a574]">
              {OFFICE.agentName} is a Las Vegas REALTOR® in real estate since 1983, at {OFFICE_ONE_LINE}. She relists luxury homes that did not sell
              with the previous agent. Call or text{' '}
              <a href={`tel:${OFFICE.ctaPhoneTel}`} className="underline underline-offset-4">
                {OFFICE.ctaPhoneDisplay}
              </a>
              .
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${OFFICE.ctaPhoneTel}`}
                className="inline-flex items-center justify-center bg-[#c4a574] px-6 py-4 text-sm tracking-[0.14em] text-[#14110e] uppercase"
              >
                Call {OFFICE.ctaPhoneDisplay}
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center border border-[#c4a574] px-6 py-4 text-sm tracking-[0.14em] text-[#f7f3ec] uppercase"
              >
                See the relist plan
              </Link>
            </div>
          </div>
          <div id="listing-review">
            <InquiryForm idPrefix="home" source="Luxury Homepage — Unsold Listing" />
          </div>
        </div>
      </section>

      <section id="answer" className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl">If the last agent did not sell it</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#3f3832]">
            Call Dr. Jan Duffy at {OFFICE.ctaPhoneDisplay}. She is a REALTOR® in real estate since 1983, at {OFFICE.streetAddress}, {OFFICE.locality}, {OFFICE.region}{' '}
            {OFFICE.postalCode}. She reads the expired or withdrawn file, prices the home to current comps,
            orders new photos, and reports every week.
          </p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">Why the last listing stalled</h2>
          <div className="mt-10 grid gap-px bg-[#d9d0c3] md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="bg-[#f7f3ec] p-8">
                <h3 className="font-display text-3xl">{reason.title}</h3>
                <p className="mt-4 text-[#3f3832]">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e4dcd0] bg-[#fffcf8] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">A private review, then a relist</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2">
            {steps.map((step) => (
              <li key={step.number} className="border-t border-[#d9d0c3] pt-6">
                <p className="text-xs tracking-[0.22em] text-[#9a7b4f]">{step.number}</p>
                <h3 className="mt-3 font-display text-3xl">{step.title}</h3>
                <p className="mt-3 max-w-md text-[#3f3832]">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm text-[#5c534c]">
            The 30-day relist plan is a work plan. It is not a promise of a sale date.{' '}
            <Link href="/how-it-works" className="underline decoration-[#9a7b4f] underline-offset-4">
              Read the steps
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">2024 record on this site</h2>
          <p className="mt-4 max-w-2xl text-[#5c534c]">
            These figures were published here for 2024. A current plan uses this month&apos;s comps.
          </p>
          <dl className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <dt className="text-sm tracking-[0.16em] text-[#9a7b4f] uppercase">Expired listings sold</dt>
              <dd className="mt-2 font-display text-6xl">47</dd>
            </div>
            <div>
              <dt className="text-sm tracking-[0.16em] text-[#9a7b4f] uppercase">Average days to sale</dt>
              <dd className="mt-2 font-display text-6xl">32</dd>
            </div>
            <div>
              <dt className="text-sm tracking-[0.16em] text-[#9a7b4f] uppercase">Client satisfaction</dt>
              <dd className="mt-2 font-display text-6xl">96%</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-[#14110e] px-4 py-20 text-[#f7f3ec]">
        <figure className="mx-auto max-w-3xl">
          <blockquote className="font-display text-3xl leading-snug md:text-4xl">
            “My listing had been on the market for 6 months with zero offers. Dr. Jan adjusted the
            price, brought in staging, and the home sold in 21 days at asking price.”
          </blockquote>
          <figcaption className="mt-8 text-sm tracking-[0.16em] text-[#c4a574] uppercase">
            Mary Thompson · Summerlin
          </figcaption>
          <p className="mt-8">
            <Link href="/success-stories" className="text-sm tracking-[0.16em] uppercase underline decoration-[#c4a574] underline-offset-4">
              More sold relists
            </Link>
          </p>
        </figure>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">Where the last listing sat</h2>
          <ul className="mt-10 divide-y divide-[#e4dcd0] border-y border-[#e4dcd0]">
            {areas.map((area) => (
              <li key={area.href}>
                <Link href={area.href} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="font-display text-3xl">{area.label}</span>
                  <span className="max-w-md text-sm text-[#5c534c]">{area.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Questions from owners whose listing expired"
        className="bg-[#fffcf8]"
        tone="luxury"
      />

      <OfficePanel />
    </div>
  )
}
