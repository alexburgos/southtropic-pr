import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { InstagramIcon } from './InstagramIcon'

export function Navigation() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/services', label: t('nav.services') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-10">
          <div className="flex justify-start items-center gap-2 flex-1">
            {location.pathname !== '/' && (
                <Link to="/" className="text-white text-2xl font-bold tracking-wide hover:opacity-80 transition-opacity leading-none">
                  SouthTropic
                </Link>
            )}
            <InstagramIcon />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                activeProps={{
                  className: 'opacity-70',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                  activeProps={{
                    className: 'opacity-70',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

