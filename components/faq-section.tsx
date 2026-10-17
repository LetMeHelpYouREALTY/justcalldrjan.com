'use client'

import StructuredData from './structured-data'
import { getFAQSchema } from '@/lib/schema'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
  className?: string
  tone?: 'default' | 'luxury'
}

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
  tone = 'default',
}: FAQSectionProps) {
  const schemaData = getFAQSchema(faqs)
  const luxury = tone === 'luxury'

  return (
    <>
      <StructuredData data={schemaData} id="faq-schema" />
      <section className={`px-4 py-16 ${className}`}>
        <div className="mx-auto max-w-4xl">
          <h2 className={luxury ? 'mb-8 font-display text-4xl text-[#1c1915] md:text-5xl' : 'mb-8 text-4xl font-bold text-gray-900'}>
            {title}
          </h2>
          <div className={luxury ? '' : 'space-y-4'}>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className={luxury ? 'group border-b border-[#e4dcd0]' : 'group overflow-hidden rounded-lg border border-gray-200'}
              >
                <summary
                  className={
                    luxury
                      ? 'flex cursor-pointer list-none items-center justify-between px-1 py-5 text-[#1c1915] [&::-webkit-details-marker]:hidden'
                      : 'flex cursor-pointer list-none items-center justify-between bg-gray-50 px-6 py-4 text-left [&::-webkit-details-marker]:hidden'
                  }
                >
                  <span className={luxury ? 'font-display text-2xl' : 'font-semibold text-gray-900'}>
                    {faq.question}
                  </span>
                  <span className={luxury ? 'text-[#9a7b4f] group-open:hidden' : 'text-xl text-gray-500 group-open:hidden'} aria-hidden="true">
                    +
                  </span>
                  <span className={luxury ? 'hidden text-[#9a7b4f] group-open:inline' : 'hidden text-xl text-gray-500 group-open:inline'} aria-hidden="true">
                    −
                  </span>
                </summary>
                <p className={luxury ? 'px-1 pb-5 leading-relaxed text-[#3f3832]' : 'bg-white px-6 py-4 leading-relaxed text-gray-700'}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
