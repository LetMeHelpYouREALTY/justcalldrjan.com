import { OFFICE } from '@/lib/office'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2a241e] bg-[#14110e] px-4 py-8 text-[#f7f3ec]">
      <div className="mx-auto max-w-6xl space-y-2 text-center text-sm">
        <p>© {year} {OFFICE.agentName}</p>
        <address className="not-italic">
          {OFFICE.streetAddress}, {OFFICE.locality}, {OFFICE.region} {OFFICE.postalCode}
        </address>
        <p>
          <a href={`tel:${OFFICE.ctaPhoneTel}`}>{OFFICE.ctaPhoneDisplay}</a>
        </p>
        <p>Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC</p>
      </div>
    </footer>
  )
}
