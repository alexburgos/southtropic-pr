import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

const PAGE_URL = 'https://stvisualspr.com/about'
const PAGE_IMAGE = 'https://stvisualspr.com/images/about/me.jpg'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Axel Javier Burgos',
  alternateName: 'Axel Javier',
  jobTitle: 'Digital Content Creator & Travel Brand Founder',
  description:
    'Puerto Rico-born digital creator and founder of SouthTropic PR. Specializes in showcasing world-class stays, unique Airbnbs, and breathtaking travel destinations through photography, video, and drone visuals.',
  url: 'https://stvisualspr.com/about',
  image: PAGE_IMAGE,
  sameAs: [
    'https://www.instagram.com/southtropic_pr/',
    'https://www.tiktok.com/@southtropic_pr',
    'https://www.facebook.com/southtropicpr',
  ],
  email: 'southtropicprvisuals@gmail.com',
  knowsAbout: [
    'Travel Photography',
    'Drone Videography',
    'Airbnb Photography',
    'Hotel Content Creation',
    'Travel & Tourism',
    'Puerto Rico Travel',
  ],
}

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Axel Javier — SouthTropic PR' },
      {
        name: 'description',
        content:
          'Meet Axel Javier Burgos, the Puerto Rico-born digital creator behind SouthTropic PR. Showcasing world-class stays, unique Airbnbs, and breathtaking travel destinations through photography, drone, and video.',
      },
      { property: 'og:title', content: 'About Axel Javier — SouthTropic PR' },
      {
        property: 'og:description',
        content:
          'Meet Axel Javier Burgos, the Puerto Rico-born digital creator behind SouthTropic PR. Showcasing world-class stays, unique Airbnbs, and breathtaking travel destinations through photography, drone, and video.',
      },
      { property: 'og:url', content: PAGE_URL },
      { property: 'og:image', content: PAGE_IMAGE },
      { name: 'twitter:title', content: 'About Axel Javier — SouthTropic PR' },
      {
        name: 'twitter:description',
        content:
          'Meet Axel Javier Burgos, the Puerto Rico-born digital creator behind SouthTropic PR. Showcasing world-class stays, unique Airbnbs, and breathtaking travel destinations through photography, drone, and video.',
      },
      { name: 'twitter:url', content: PAGE_URL },
      { name: 'twitter:image', content: PAGE_IMAGE },
    ],
    links: [{ rel: 'canonical', href: PAGE_URL }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <link
        rel="preload"
        as="image"
        href="/images/about/me.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <link rel="preload" as="image" href="/images/about/me.jpg" fetchPriority="high" />

      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black" />
        <picture>
          <source srcSet="/images/about/me.webp" type="image/webp" />
          <img
            src="/images/about/me.jpg"
            alt="Axel - Content Creator"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-[50%_35%] opacity-40"
          />
        </picture>
        <div className="relative z-10 text-center px-6"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          <div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">{t('about.paragraph1')}</p>
            <p className="text-lg text-white/80 leading-relaxed">{t('about.paragraph2')}</p>
            <p className="text-lg text-white/80 leading-relaxed">
              {t('about.paragraph3')}{' '}
              <a
                href="/services#contact-form"
                className="text-white/80 hover:text-white transition-colors underline"
              >
                {t('about.contactForm')}
              </a>{' '}
              {t('about.orReachOut')}{' '}
              <a
                href="https://www.instagram.com/southtropic_pr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors underline"
              >
                {t('about.instagram')}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
