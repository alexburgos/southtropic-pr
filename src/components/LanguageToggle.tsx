import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-3 left-3 z-50 px-4 py-2 cursor-pointer text-white font-medium text-sm uppercase tracking-wider transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 md:bg-transparent md:border-none md:backdrop-blur-none"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? 'Español' : 'English'}
    </button>
  )
}

