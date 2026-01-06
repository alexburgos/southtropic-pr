import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { FormEvent } from 'react'

export const Route = createFileRoute('/services')({
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:southtropicprvisuals@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
    
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <link rel="preload" as="image" href="/images/services/overview.webp" type="image/webp" fetchPriority="high" />
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
              {Array.from({ length: 7 }, (_, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="text-white/60 mt-1">✓</span>
                  <span>{t(`services.servicesList.item${i + 1}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('services.contentPackages')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['droneVisuals', 'basic', 'full', 'gold', 'annual'].map((pkgKey, index) => {
              const prices = ['$500', '$650', '$850', '$1,000', '$1,550']
              const featureCounts = [5, 6, 6, 6, 6]
              
              return (
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
                  <h3 className="text-2xl font-bold mb-2">{t(`services.packages.${pkgKey}.title`)}</h3>
                  <p className="text-3xl font-bold text-white/90 mb-6">{prices[index]}</p>
                  <ul className="space-y-3">
                    {Array.from({ length: featureCounts[index] }, (_, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 shrink-0" />
                        <span>{t(`services.packages.${pkgKey}.features.item${i + 1}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto  pt-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('services.getInTouch')}</h2>
            <p className="text-white/70 text-lg">
              {t('services.getInTouchSubtitle')}
            </p>
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
        </div>
      </div>
    </div>
  )
}

