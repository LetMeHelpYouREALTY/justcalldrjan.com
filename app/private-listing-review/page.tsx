import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import FAQSection from '@/components/faq-section'
import InquiryForm from '@/components/luxury/inquiry-form'
import OfficePanel from '@/components/luxury/office-panel'
import { OFFICE } from '@/lib/office'

const faqs = [
  {
    question: 'Is the private review a listing appointment?',
    answer:
      'It is a diagnosis of the listing that already failed. If the plan fits, the listing conversation comes after. You can stop after the review.',
  },
  {
    question: 'What should I send before we talk?',
    answer:
      'The last list price, the date it expired or was withdrawn, and any buyer feedback you still have. Dr. Jan can pull the public history from the address.',
  },
  {
    question: 'Do you relist condos and estates?',
    answer:
      'Yes. High-rise homes with Strip views and larger lots in Summerlin and Henderson both need a buyer list that matches the price. The review is built for that file, not a starter-home script.',
  },
]

export default function PrivateListingReviewPage() {
  return (
    <div className="bg-[#f7f3ec] text-[#1c1915]">
      <Breadcrumbs tone="ink" />
      <section className="bg-[#14110e] px-4 py-20 text-[#f7f3ec]">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.28em] text-[#c4a574] uppercase">Private listing review</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl">
              A quiet read of the home that did not sell.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#e6dccb]">
              Bring the address. Dr. Jan Duffy will tell you whether price, presentation, or reach
              stopped the last sale.
            </p>
            <ul className="mt-10 space-y-4 text-[#e6dccb]">
              <li>1. The expired or withdrawn file.</li>
              <li>2. Comps from the homes that did sell.</li>
              <li>3. A written relist plan you can keep.</li>
            </ul>
            <p className="mt-10 text-sm text-[#c4a574]">
              {OFFICE.agentName} · {OFFICE.brokerage}
              <br />
              {OFFICE.streetAddress}, {OFFICE.locality}, {OFFICE.region} {OFFICE.postalCode}
              <br />
              <a className="underline underline-offset-4" href={`tel:${OFFICE.ctaPhoneTel}`}>
                {OFFICE.ctaPhoneDisplay}
              </a>
            </p>
            <p className="mt-6">
              <Link href="/didnt-sell" className="text-sm tracking-[0.14em] uppercase underline decoration-[#c4a574] underline-offset-4">
                Why listings stall
              </Link>
            </p>
          </div>
          <InquiryForm
            idPrefix="review"
            source="Private Listing Review"
            heading="Book the review"
            submitLabel="Book the review"
          />
        </div>
      </section>
      <FAQSection faqs={faqs} title="Before the review" className="bg-[#f7f3ec]" tone="luxury" />
      <OfficePanel />
    </div>
  )
}
