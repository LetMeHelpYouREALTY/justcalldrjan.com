import type { Metadata } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import { Cormorant_Garamond, Geist, Geist_Mono, Outfit } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import SiteNavigation from '../components/site-nav'
import SiteFooter from '../components/site-footer'
import Analytics from './analytics'
import StructuredData from '../components/structured-data'
import { getSiteGraphSchema } from '../lib/schema'
import { SITE_URL } from '@/lib/site-url'
import { createPageMetadata } from '@/lib/create-page-metadata'
import { resolveRouteSeo } from '@/lib/route-seo'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') ?? '/'
  const seo = resolveRouteSeo(pathname)

  return {
    metadataBase: new URL(SITE_URL),
    authors: [{ name: 'Dr. Jan Duffy' }],
    keywords: [
      'Las Vegas luxury real estate',
      'expired luxury listing',
      'home did not sell',
      'Dr. Jan Duffy',
      'Las Vegas REALTOR',
      'luxury relisting',
    ],
    ...createPageMetadata(pathname, seo),
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
        <StructuredData data={getSiteGraphSchema()} id="site-graph" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
            Skip to main content
          </a>
          <DeployBanner />
          <SiteNavigation />
          <main id="main-content">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
        {/* Widget Tracker */}
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create", "WT-XQHVYQWW");
          window.widgetTracker("send", "pageview");
        `}</Script>
      </body>
    </html>
  )
}
