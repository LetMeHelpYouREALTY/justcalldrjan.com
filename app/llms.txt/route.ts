import { canonicalUrlForPath } from '@/lib/create-page-metadata'
import { OFFICE, OFFICE_ONE_LINE } from '@/lib/office'
import { ROUTE_SEO } from '@/lib/route-seo'

export const revalidate = 86400

const PATHS = [
  '/',
  '/private-listing-review',
  '/didnt-sell',
  '/expired-listing-help',
  '/contact',
  '/about',
  '/neighborhoods',
] as const

export function GET() {
  const generated = new Date().toISOString().slice(0, 10)
  const body = [
    `# ${OFFICE.agentName} — ${OFFICE.brokerage}`,
    '',
    `> ${ROUTE_SEO['/'].description}`,
    '',
    `Generated ${generated} from the site's published contact constants. This file lists contact, license, and page details only. It is not a market report.`,
    '',
    '## Contact',
    `- Office: ${OFFICE_ONE_LINE}`,
    `- Call or text: ${OFFICE.ctaPhoneDisplay}`,
    `- Office line: ${OFFICE.officePhoneDisplay}`,
    `- Email: ${OFFICE.email}`,
    `- Nevada real estate license: ${OFFICE.license}`,
    ...OFFICE.hours.map((row) => `- Hours, ${row.days}: ${row.hours}`),
    '',
    '## Pages',
    ...PATHS.map(
      (path) => `- [${ROUTE_SEO[path].title}](${canonicalUrlForPath(path)}): ${ROUTE_SEO[path].description}`,
    ),
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
