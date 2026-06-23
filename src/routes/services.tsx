import { createFileRoute, Link } from '@tanstack/react-router'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const PAGE_URL = 'https://stvisualspr.com/services'
const PAGE_IMAGE = 'https://stvisualspr.com/images/services/overview.jpg'

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SouthTropic Content Creation Services',
  description:
    'Professional photography, video, and drone content packages for luxury hotels, resorts, and travel brands in the Caribbean.',
  url: PAGE_URL,
  provider: {
    '@type': 'Person',
    name: 'Axel',
    url: 'https://stvisualspr.com/about',
  },
  areaServed: 'Caribbean',
  serviceType: 'Content Creation',
  offers: [
    {
      '@type': 'Offer',
      name: 'Drone Visuals Package',
      price: '650',
      priceCurrency: 'USD',
      description: 'Drone photography and aerial video visuals package',
    },
    {
      '@type': 'Offer',
      name: 'Basic Package',
      price: '850',
      priceCurrency: 'USD',
      description: 'Essential photography and video content package',
    },
    {
      '@type': 'Offer',
      name: 'Full Package',
      price: '1200',
      priceCurrency: 'USD',
      description: 'Full photography, video, and drone content package',
    },
    {
      '@type': 'Offer',
      name: 'Gold Package',
      price: '1550',
      priceCurrency: 'USD',
      description: 'Premium content creation package with unlimited promotion',
    },
    {
      '@type': 'Offer',
      name: 'Annual Agreement',
      price: '2000',
      priceCurrency: 'USD',
      description:
        'Annual content creation retainer — 3 property visits, photos, reels, and unlimited promotion',
    },
    {
      '@type': 'Offer',
      name: 'Local Exclusivity Add-On',
      price: '3000',
      priceCurrency: 'USD',
      description:
        '6-month exclusivity for Airbnb, vacation rental, and hospitality brands within the same local market area, preventing collaborations with direct local competitors.',
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of properties do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I specialize in collaborations with hotels, Airbnbs, vacation rentals, and luxury resorts across Puerto Rico and the Caribbean.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does content delivery take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Content is typically delivered within 8–15 days after the shoot. Delivery time may vary based on content complexity and current workload.',
      },
    },
    {
      '@type': 'Question',
      name: 'What platforms will my content be posted on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depending on your package, content is distributed across Instagram, TikTok, Facebook, and YouTube Shorts — including reels, stories, and carousel posts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a deposit required to book?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a 30% non-refundable deposit is required to secure your date. Full payment is due before content is delivered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer an annual package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Annual Agreement ($2,000) includes 3 property visits per year, 15 professional photos, 2 reels, and 1 carousel per visit, plus unlimited promotion and VIP access to Airbnb recap reels.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Local Exclusivity Add-On?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Local Exclusivity Add-On ($3,000) is a 6-month exclusivity option that prevents collaborations with direct local competitors in the same market area, giving your property priority positioning across all SouthTropic content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work outside of Puerto Rico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While based in Puerto Rico, collaborations are available with properties across the Caribbean and beyond.',
      },
    },
  ],
}

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'] as const

const FEATURE_KEYS = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'] as const

const PACKAGES = [
  { key: 'droneVisuals', price: '$650', featureKeys: FEATURE_KEYS.slice(0, 3) },
  { key: 'basic', price: '$850', featureKeys: FEATURE_KEYS.slice(0, 6) },
  { key: 'full', price: '$1,200', featureKeys: FEATURE_KEYS.slice(0, 4) },
  { key: 'gold', price: '$1,550', featureKeys: FEATURE_KEYS },
  { key: 'annual', price: '$2,000', featureKeys: FEATURE_KEYS },
] as const

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Services & Packages — SouthTropic' },
      {
        name: 'description',
        content:
          'Photography, video, and drone content packages for luxury hotels and resorts. Starting at $650. Serving the Caribbean.',
      },
      { property: 'og:title', content: 'Services & Packages — SouthTropic' },
      {
        property: 'og:description',
        content:
          'Photography, video, and drone content packages for luxury hotels and resorts. Starting at $650. Serving the Caribbean.',
      },
      { property: 'og:url', content: PAGE_URL },
      { property: 'og:image', content: PAGE_IMAGE },
      { name: 'twitter:title', content: 'Services & Packages — SouthTropic' },
      {
        name: 'twitter:description',
        content:
          'Photography, video, and drone content packages for luxury hotels and resorts. Starting at $650. Serving the Caribbean.',
      },
      { name: 'twitter:url', content: PAGE_URL },
      { name: 'twitter:image', content: PAGE_IMAGE },
    ],
    links: [{ rel: 'canonical', href: PAGE_URL }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(serviceJsonLd),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    const mailtoLink = `mailto:southtropicprvisuals@gmail.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink

    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <link
        rel="preload"
        as="image"
        href="/images/services/overview.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <link rel="preload" as="image" href="/images/services/overview.jpg" fetchPriority="high" />

      <div className="relative h-[30vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black" />
        <picture>
          <source srcSet="/images/services/overview.webp" type="image/webp" />
          <img
            src="/images/services/overview.jpg"
            alt="Services"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-[50%_35%] opacity-30"
          />
        </picture>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-6xl font-bold">Services and Packages</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">{t('services.whatIOffer')}</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-3">
              {(['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'] as const).map(
                (itemKey) => (
                  <li key={itemKey} className="flex items-start gap-3 text-white/80">
                    <span className="text-white/60 mt-1">✓</span>
                    <span>{t(`services.servicesList.${itemKey}`)}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('services.contentPackages')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map(({ key: pkgKey, price, featureKeys }) => (
              <div
                key={pkgKey}
                className={`border border-white/10 p-8 hover:border-white/30 transition-colors relative ${
                  pkgKey === 'annual' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {pkgKey === 'annual' && (
                  <div className="absolute top-4 right-4 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1 rounded">
                    {t(`services.packages.${pkgKey}.badge`)}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">
                  {t(`services.packages.${pkgKey}.title`)}
                </h3>
                <p className="text-3xl font-bold text-white/90 mb-6">{price}</p>
                <ul className="space-y-3">
                  {featureKeys.map((featureKey) => (
                    <li
                      key={`${pkgKey}.features.${featureKey}`}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 shrink-0" />
                      <span>{t(`services.packages.${pkgKey}.features.${featureKey}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('services.addons.title')}</h2>
          <div className="border border-white/20 p-8 md:p-12 bg-white/[0.03]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  {t('services.addons.localExclusivity.title')}
                </h3>
                <p className="text-white/50 text-sm uppercase tracking-widest">
                  {t('services.addons.localExclusivity.feeLabel')}
                </p>
              </div>
              <p className="text-4xl font-bold text-white/90 shrink-0">$3,000</p>
            </div>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>{t('services.addons.localExclusivity.description')}</p>
              <p>{t('services.addons.localExclusivity.detail')}</p>
            </div>
          </div>
        </div>

        <div className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('services.faq.title')}</h2>
          <div className="divide-y divide-white/10">
            {FAQ_KEYS.map((key, i) => (
              <div key={key}>
                <button
                  type="button"
                  className="w-full flex justify-between items-center py-5 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-medium text-white">
                    {t(`services.faq.items.${key}.question`)}
                  </span>
                  <span className="text-white/40 text-xl leading-none shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-white/60 text-sm leading-relaxed">
                    {t(`services.faq.items.${key}.answer`)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div id="contact-form" className="max-w-3xl mx-auto  pt-12 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('services.getInTouch')}</h2>
            <p className="text-white/70 text-lg">{t('services.getInTouchSubtitle')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                {t('services.form.name')}
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                placeholder={t('services.form.namePlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                {t('services.form.email')}
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                placeholder={t('services.form.emailPlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                {t('services.form.message')}
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder={t('services.form.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-transparent border-white border-2 text-white font-semibold hover:bg-white/90 hover:text-black transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('services.form.sending') : t('services.form.submit')}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-white/60">
            {t('services.termsNote')}{' '}
            <Link
              to="/terms"
              className="text-white/80 hover:text-white transition-colors underline"
            >
              {t('services.termsLink')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
