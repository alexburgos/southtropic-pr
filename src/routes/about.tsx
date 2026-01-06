import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <link rel="preload" as="image" href="/images/about/me.webp" type="image/webp" fetchPriority="high" />
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
        <div className="relative z-10 text-center px-6">
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          <div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              {t('about.paragraph2')}
            </p>
             <p className="text-lg text-white/80 leading-relaxed">
              {t('about.paragraph3')}{' '}
              <a href="/services#contact-form" className="text-white/80 hover:text-white transition-colors underline">
                {t('about.contactForm')}
              </a>{' '}
              {t('about.orReachOut')}{' '}
              <a href="https://www.instagram.com/southtropic_pr/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors underline">
                {t('about.instagram')}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

