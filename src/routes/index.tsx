import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const PAGE_URL = 'https://stvisualspr.com/'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'SouthTropic PR — Puerto Rican Travel & Tourism Brand' },
      {
        name: 'description',
        content:
          'Puerto Rican travel and tourism brand by digital creator Axel Javier. Showcasing world-class stays, unique Airbnbs, and breathtaking destinations across Puerto Rico and beyond.',
      },
      {
        property: 'og:title',
        content: 'SouthTropic PR — Puerto Rican Travel & Tourism Brand',
      },
      {
        property: 'og:description',
        content:
          'Puerto Rican travel and tourism brand by digital creator Axel Javier. Showcasing world-class stays, unique Airbnbs, and breathtaking destinations across Puerto Rico and beyond.',
      },
      { property: 'og:url', content: PAGE_URL },
      {
        name: 'twitter:title',
        content: 'SouthTropic PR — Puerto Rican Travel & Tourism Brand',
      },
      {
        name: 'twitter:description',
        content:
          'Puerto Rican travel and tourism brand by digital creator Axel Javier. Showcasing world-class stays, unique Airbnbs, and breathtaking destinations across Puerto Rico and beyond.',
      },
      { name: 'twitter:url', content: PAGE_URL },
    ],
    links: [{ rel: 'canonical', href: PAGE_URL }],
  }),
  component: HomePage,
})

const backgroundVideos = [
  '/videos/background-1.mp4',
  '/videos/background-2.mp4',
  '/videos/background-3.mp4',
  '/videos/background-4.mp4',
  '/videos/background-5.mp4',
  '/videos/background-6.mp4',
  '/videos/background-7.mp4',
]

function HomePage() {
  const { t } = useTranslation()
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length)
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video
          key={backgroundVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          {t('home.title')}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 leading-relaxed">
          {t('home.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/services"
            className="p-2 bg-white text-black uppercase tracking-wider text-sm font-medium hover:bg-white/90 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center"
          >
            {t('home.cta.services')}
          </a>
          <a
            href="/gallery"
            className="p-2 border-2 border-white text-white uppercase tracking-wider text-sm font-medium hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {t('home.cta.gallery')}
          </a>
        </div>
      </div>
    </div>
  )
}
