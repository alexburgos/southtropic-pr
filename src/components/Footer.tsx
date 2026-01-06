import { useLocation } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <footer className={`text-white py-6 px-4 text-sm ${location.pathname === '/' ? 'fixed bottom-0 z-10 w-full' : ''}`}>
      <div className="flex flex-row justify-between items-center gap-2 px-2">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 cursor-pointer text-white font-medium text-sm uppercase tracking-wider transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 md:bg-transparent md:border-none md:backdrop-blur-none self-start"
          aria-label="Toggle language"
        >
          {i18n.language === 'en' ? 'Español' : 'English'}
        </button>

        <div className="space-y-1 text-right md:text-right">
          <p>
            {t('footer.designedBy')}{' '}
            <a
              href="https://alexburgos.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity underline"
            >
              Alex Burgos
            </a>{' '}
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com/icon/21920/quadcopter"
              className="hover:opacity-70 transition-opacity underline"
            >
              Quadcopter
            </a>{' '}
            {t('footer.iconBy')}{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com"
              className="hover:opacity-70 transition-opacity underline"
            >
              Icons8
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

