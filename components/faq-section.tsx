'use client'

import { useState } from 'react'
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  // Create FAQ schema
  const schemaData = getFAQSchema(faqs)

  return (
    <>
      <StructuredData data={schemaData} id="faq-schema" />
      <section className={`py-16 px-4 ${className}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={tone === 'luxury' ? 'mb-8 font-display text-4xl text-[#1c1915] md:text-5xl' : 'mb-8 text-4xl font-bold text-gray-900'}>
            {title}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={tone === 'luxury' ? 'border-b border-[#e4dcd0]' : 'overflow-hidden rounded-lg border border-gray-200'}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={
                    tone === 'luxury'
                      ? 'flex w-full items-center justify-between px-1 py-5 text-left text-[#1c1915]'
                      : 'flex w-full items-center justify-between bg-gray-50 px-6 py-4 text-left transition-colors hover:bg-gray-100'
                  }
                  aria-expanded={openIndex === index ? 'true' : 'false'}
                >
                  <span className={tone === 'luxury' ? 'font-display text-2xl' : 'font-semibold text-gray-900'}>
                    {faq.question}
                  </span>
                  <span className={tone === 'luxury' ? 'text-[#9a7b4f]' : 'text-xl text-gray-500'}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className={tone === 'luxury' ? 'px-1 pb-5' : 'bg-white px-6 py-4'}>
                    <p className={tone === 'luxury' ? 'leading-relaxed text-[#3f3832]' : 'leading-relaxed text-gray-700'}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

