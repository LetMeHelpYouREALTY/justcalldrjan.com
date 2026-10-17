import { OFFICE } from '@/lib/office'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2a241e] bg-[#14110e] px-4 py-8 text-[#f7f3ec]">
      <div className="mx-auto max-w-6xl space-y-2 text-center text-sm">
        <p>© {year} {OFFICE.agentName}</p>
        <p>{OFFICE.brokerage}</p>
        <address className="not-italic">
          {OFFICE.streetAddress}, {OFFICE.locality}, {OFFICE.region} {OFFICE.postalCode}
        </address>
        <p>
          <a href={`tel:${OFFICE.ctaPhoneTel}`}>{OFFICE.ctaPhoneDisplay}</a>
        </p>
        <p>Nevada license {OFFICE.license}</p>
      </div>
    </footer>
  )
}
