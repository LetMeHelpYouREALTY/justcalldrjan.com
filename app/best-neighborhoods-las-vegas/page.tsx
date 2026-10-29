'use client'

import Link from 'next/link'
import AuthorBadge from '@/components/author-badge'
import StructuredDataScript from '@/components/structured-data-script'
import Breadcrumbs from '@/components/breadcrumbs'
import { getArticleSchema, getPersonSchema, BASE_URL } from '@/lib/schema'

export default function BestNeighborhoodsLasVegasPage() {
  const articleSchema = getArticleSchema({
    path: '/best-neighborhoods-las-vegas',
    headline: 'Best Neighborhoods in Las Vegas: Comprehensive Guide to Top Communities',
    description: 'Discover the Las Vegas neighborhoods in Las Vegas for luxury homes, day-to-day living, and value. Expert insights on Summerlin, Henderson, North Las Vegas, and Las Vegas\'s named communities.',
    datePublished: '2024-07-05',
    dateModified: '2024-12-01',
    author: getPersonSchema()
  })

  return (
    <>
      <StructuredDataScript data={articleSchema} id="article-schema" />
      <Breadcrumbs />
      <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Best Neighborhoods in Las Vegas: Comprehensive Guide to Top Communities
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 max-w-3xl">
            A map of Las Vegas neighborhoods: Summerlin, Henderson, and North Las Vegas, with golf, parks, and list-price ranges.
          </p>
        </div>
      </section>

      {/* Author Badge */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AuthorBadge />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Top Las Vegas Neighborhoods for Different Lifestyles
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas offers diverse neighborhoods catering to different lifestyles: master-planned villages, golf courses, lower list prices, and downtown streets. Here are Las Vegas neighborhoods by what is actually on the ground: golf, trails, new construction, or a short drive to the Strip.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Summerlin</h3>
              <p className="text-gray-700 mb-3">
                <strong>Best for:</strong> Master-planned living, golf, buyers comparing golf and lot size
              </p>
              <p className="text-gray-700 mb-3">
                Summerlin represents Las Vegas's premier master-planned community: golf courses, Red Rock Canyon access, and a planned street grid.
              </p>
              <Link href="/neighborhoods/summerlin" className="text-purple-600 hover:text-purple-800 font-semibold">Explore Summerlin →</Link>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Henderson</h3>
              <p className="text-gray-700 mb-3">
                <strong>On the ground:</strong> Lower list prices than Summerlin, parks, and new construction
              </p>
              <p className="text-gray-700 mb-3">
                Henderson list prices are often lower than Summerlin, with parks and Clark County schools. Fast-growing city with great amenities and affordable pricing compared to premium areas.
              </p>
              <Link href="/neighborhoods/henderson" className="text-green-600 hover:text-green-800 font-semibold">Explore Henderson →</Link>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">North Las Vegas</h3>
              <p className="text-gray-700 mb-3">
                <strong>Best for:</strong> New construction, affordability, growth potential
              </p>
              <p className="text-gray-700 mb-3">
                North Las Vegas features new construction, master-planned communities, and affordable housing options. Newer floor plans and parks, often at a lower list price than Summerlin.
              </p>
              <Link href="/neighborhoods/north-las-vegas" className="text-pink-600 hover:text-pink-800 font-semibold">Explore North Las Vegas →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Best Neighborhoods for Luxury Homes
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas luxury neighborhoods offer exclusive amenities, premium positioning, and upscale living: master-planned benefits, golf courses, mountain views, gated communities, and luxury lifestyle features.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Summerlin Luxury Communities</h3>
              <p className="text-gray-700 mb-3">
                Summerlin offers luxury master-planned living: The Trails with trail access, The Foothills with mountain views, Sun City for active adults, and premium communities with golf courses and Red Rock Canyon proximity.
              </p>
              <p className="text-gray-700 mb-3">
                Luxury Summerlin homes command premium prices for master-planned benefits, houses that have already been lived in, mountain views, and upscale amenities. Summerlin positioning emphasizes luxury lifestyle and community excellence.
              </p>
              <Link href="/las-vegas-luxury-homes" className="text-rose-600 hover:text-rose-800 font-semibold">Luxury Homes Guide →</Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Henderson Luxury Enclaves</h3>
              <p className="text-gray-700 mb-3">
                Henderson features exclusive luxury communities: MacDonald Highlands, Ascaya, Seven Hills, Lake Las Vegas waterfront properties, and Green Valley premium neighborhoods. Gated communities with custom luxury homes.
              </p>
              <p className="text-gray-700 mb-3">
                Henderson luxury positioning emphasizes exclusivity, privacy, custom architecture, and premium amenities. These communities offer luxury lifestyle with Henderson value advantages and growing amenities.
              </p>
              <Link href="/neighborhoods/henderson/lake-las-vegas" className="text-rose-600 hover:text-rose-800 font-semibold">Lake Las Vegas →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Best Neighborhoods for Value and Affordability
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Las Vegas has older houses and new construction at a range of list prices. These areas provide quality living at affordable prices compared to premium Las Vegas neighborhoods.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Value-Focused Neighborhoods</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">•</span>
                  <span><strong>North Las Vegas:</strong> New construction, lower list prices, parks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">•</span>
                  <span><strong>Henderson:</strong> Established quality with value pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">•</span>
                  <span><strong>Spring Valley:</strong> Central location, older houses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">•</span>
                  <span><strong>Enterprise:</strong> West side value with new construction</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Why These Neighborhoods Offer Value</h3>
              <p className="text-gray-700 mb-3">
                Value-focused Las Vegas neighborhoods provide quality living at affordable prices: new construction with modern features, older houses, parks, and new construction.
              </p>
              <p className="text-gray-700 mb-3">
                These areas offer Las Vegas lifestyle without premium pricing: nearby schools, parks, and a central commute. First-time buyers often start here because list prices are lower.
              </p>
              <Link href="/neighborhoods" className="text-rose-600 hover:text-rose-800 font-semibold">Explore All Neighborhoods →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Find Your Best Las Vegas Neighborhood</h2>
          <p className="text-xl mb-8 text-rose-100">Expert guidance on Las Vegas neighborhoods and home buying.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+17025001955" className="bg-white text-rose-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">Call: (702) 500-1955</a>
            <Link href="/contact" className="bg-rose-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-rose-900 transition-colors">Neighborhood Consultation</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

