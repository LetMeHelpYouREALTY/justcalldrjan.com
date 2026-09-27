import type { Metadata } from 'next'
import HomePageContent from '@/components/home-page-content'
import { SITE_URL } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'Las Vegas Expired Listing Help | Dr. Jan Duffy',
  description:
    'Expired or withdrawn Las Vegas listing? Dr. Jan Duffy, REALTOR®, offers a structured relisting plan for homes that did not sell the first time. License S.0197614.LLC.',
  openGraph: {
    title: 'Las Vegas Expired Listing Help | Dr. Jan Duffy',
    description:
      'A relisting plan for expired and withdrawn Las Vegas homes. Free consultation with Dr. Jan Duffy, REALTOR®.',
    images: ['/og-image.png'],
    url: SITE_URL,
    siteName: 'Just Call Dr. Jan',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function Homepage() {
  return <HomePageContent />
}
