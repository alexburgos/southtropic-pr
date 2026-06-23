import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'

const SITE_URL = 'https://stvisualspr.com'
const SITE_NAME = 'SouthTropic PR'
const DEFAULT_DESCRIPTION =
  'Puerto Rican travel and tourism brand by digital creator Axel Javier Burgos. Showcasing world-class stays, unique Airbnbs, and breathtaking destinations across Puerto Rico and beyond.'
const OG_IMAGE = `${SITE_URL}/images/about/me.jpg`

const SOCIAL_PROFILES = [
  'https://www.instagram.com/southtropic_pr/',
  'https://www.tiktok.com/@southtropic_pr',
  'https://www.facebook.com/southtropicpr',
]

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: ['en', 'es'],
  author: {
    '@type': 'Person',
    name: 'Axel Javier Burgos',
    alternateName: 'Axel Javier',
    sameAs: SOCIAL_PROFILES,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Brand',
  name: SITE_NAME,
  url: SITE_URL,
  logo: OG_IMAGE,
  description: DEFAULT_DESCRIPTION,
  founder: {
    '@type': 'Person',
    name: 'Axel Javier Burgos',
    alternateName: 'Axel Javier',
  },
  sameAs: SOCIAL_PROFILES,
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'southtropicprvisuals@gmail.com',
    contactType: 'customer service',
  },
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: `${SITE_NAME} — Puerto Rican Travel & Tourism Brand` },
      { name: 'description', content: DEFAULT_DESCRIPTION },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(websiteJsonLd),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(organizationJsonLd),
      },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <HeadContent />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}
