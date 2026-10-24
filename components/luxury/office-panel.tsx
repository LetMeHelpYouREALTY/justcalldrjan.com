import {
  OFFICE,
  OFFICE_DIRECTIONS_URL,
  OFFICE_MAP_EMBED_URL,
  OFFICE_ONE_LINE,
  OFFICE_REVIEWS_URL,
} from '@/lib/office'

const actionClass =
  'inline-flex items-center justify-center border border-[#9a7b4f] px-4 py-3 text-xs tracking-[0.16em] text-[#1c1915] uppercase transition-colors hover:bg-[#1c1915] hover:text-[#f7f3ec]'

export default function OfficePanel() {
  return (
    <section className="bg-[#f7f3ec] px-4 py-20 text-[#1c1915]" aria-labelledby="office-heading">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs tracking-[0.22em] text-[#9a7b4f] uppercase">The desk</p>
          <h2 id="office-heading" className="mt-3 font-display text-4xl md:text-5xl">
            {OFFICE.agentName}
          </h2>
          <p className="mt-4 text-[#3f3832]">Top 1% Las Vegas REALTOR®</p>
          <address className="mt-6 not-italic leading-relaxed">
            {OFFICE.streetAddress}
            <br />
            {OFFICE.locality}, {OFFICE.region} {OFFICE.postalCode}
          </address>
          <p className="mt-4">
            <a className="underline decoration-[#9a7b4f] underline-offset-4" href={`tel:${OFFICE.ctaPhoneTel}`}>
              Call or text {OFFICE.ctaPhoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-sm text-[#5c534c]">Office {OFFICE.officePhoneDisplay}</p>
          <p className="mt-2 text-sm text-[#5c534c]">
            <a className="underline decoration-[#9a7b4f] underline-offset-4" href={`mailto:${OFFICE.email}`}>
              {OFFICE.email}
            </a>
          </p>
          <dl className="mt-6 space-y-2 text-sm">
            {OFFICE.hours.map((row) => (
              <div key={row.days} className="flex justify-between gap-6 border-b border-[#e4dcd0] py-2">
                <dt>{row.days}</dt>
                <dd>{row.hours}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className={actionClass} href={`tel:${OFFICE.ctaPhoneTel}`}>
              Call
            </a>
            <a className={actionClass} href={OFFICE_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              Directions
            </a>
            <a className={actionClass} href={OFFICE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              View Google Reviews
            </a>
          </div>
        </div>
        <iframe
          title={`Map to ${OFFICE.agentName}, ${OFFICE_ONE_LINE}`}
          src={OFFICE_MAP_EMBED_URL}
          className="h-80 w-full border border-[#d9d0c3] bg-[#efe8dc] lg:h-full lg:min-h-[420px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
