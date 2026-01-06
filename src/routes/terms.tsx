import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
})

function TermsPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('terms.title')}</h1>
        
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p className="text-lg font-semibold text-white">{t('terms.subtitle')}</p>
          
          <ul className="space-y-4 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-white/60 mt-1">•</span>
              <span>{t('terms.term1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/60 mt-1">•</span>
              <span>{t('terms.term2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/60 mt-1">•</span>
              <span>{t('terms.term3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/60 mt-1">•</span>
              <span>{t('terms.term4')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/60 mt-1">•</span>
              <span>{t('terms.term5')}</span>
            </li>
          </ul>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-4">{t('terms.contactTitle')}</h2>
            <p className="mb-4">{t('terms.contactText')}</p>
            
            <div className="space-y-3">
              <div>
                <span className="text-white/60">{t('terms.email')}: </span>
                <a 
                  href="mailto:southtropicprvisuals@gmail.com" 
                  className="text-white hover:text-white/80 transition-colors underline"
                >
                  southtropicprvisuals@gmail.com
                </a>
              </div>
              
              <div>
                <a 
                  href="/services#contact-form"
                  className="inline-block px-6 py-3 border-2 border-white text-white hover:bg-white/10 transition-colors mt-4"
                >
                  {t('terms.contactFormButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

