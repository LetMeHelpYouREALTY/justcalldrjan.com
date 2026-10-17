'use client'

import { useState, type FormEvent } from 'react'
import LeadHoneypotField from '@/components/lead-honeypot-field'
import { OFFICE } from '@/lib/office'

type InquiryFormProps = {
  idPrefix: string
  source: string
  heading?: string
  submitLabel?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const fieldClass =
  'w-full border border-[#d9d0c3] bg-[#fffcf8] px-4 py-3 text-[#1c1915] placeholder:text-[#8a8175] focus:border-[#9a7b4f] focus:outline-none focus:ring-1 focus:ring-[#9a7b4f]'

export default function InquiryForm({
  idPrefix,
  source,
  heading = 'Request a private listing review',
  submitLabel = 'Request the review',
}: InquiryFormProps) {
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          message,
          companyWebsite,
          source,
          inquiryType: 'Seller Inquiry',
        }),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        setErrorMessage(
          payload?.error ?? `Call ${OFFICE.ctaPhoneDisplay} and we will take it from there.`,
        )
        setStatus('error')
        return
      }

      setAddress('')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setStatus('success')
    } catch {
      setErrorMessage(`Call ${OFFICE.ctaPhoneDisplay} and we will take it from there.`)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="border border-[#9a7b4f] bg-[#fffcf8] p-8 text-[#1c1915]">
        <p className="font-display text-3xl">Received.</p>
        <p className="mt-3 text-[#3f3832]">
          Dr. Jan will call the number you gave. If you need her sooner, call {OFFICE.ctaPhoneDisplay}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="relative border border-[#d9d0c3] bg-[#fffcf8] p-6 sm:p-8">
      <LeadHoneypotField value={companyWebsite} onChange={setCompanyWebsite} />
      <h2 className="font-display text-3xl text-[#1c1915]">{heading}</h2>
      <p className="mt-2 text-sm text-[#5c534c]">
        Address, name, email, and phone. She reviews the last listing before the call.
      </p>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor={`${idPrefix}-address`} className="mb-1 block text-sm text-[#3f3832]">
            Property address
          </label>
          <input
            id={`${idPrefix}-address`}
            name="address"
            type="text"
            autoComplete="street-address"
            required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className={fieldClass}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${idPrefix}-name`} className="mb-1 block text-sm text-[#3f3832]">
              Name
            </label>
            <input
              id={`${idPrefix}-name`}
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-phone`} className="mb-1 block text-sm text-[#3f3832]">
              Phone
            </label>
            <input
              id={`${idPrefix}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className={fieldClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className="mb-1 block text-sm text-[#3f3832]">
            Email
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-message`} className="mb-1 block text-sm text-[#3f3832]">
            What happened with the last listing?
          </label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={3}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={fieldClass}
          />
        </div>
        {status === 'error' ? (
          <p role="alert" className="text-sm text-[#8a3b32]">
            {errorMessage}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[#1c1915] px-6 py-4 text-sm tracking-[0.14em] text-[#f7f3ec] uppercase transition-colors hover:bg-[#3a3128] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : submitLabel}
        </button>
        <p className="text-center text-xs text-[#6e655d]">
          By submitting, you agree to be contacted about this property.
        </p>
      </div>
    </form>
  )
}
