import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import { ArrowUpRight } from 'lucide-react'
import { languageOptions, type Language } from '../data/translations'
import { useLanguage } from '../context/LanguageContext'

const links = [
  { href: '#home', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#services', key: 'services' },
  { href: '#contact', key: 'contact' }
] as const

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    function closeOnOutsideClick(event: MouseEvent) {
      if (open && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('mousedown', closeOnOutsideClick)
    }
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm site-header border-b border-white/6">
      <div ref={mobileMenuRef} className="container mx-auto px-6 h-18 flex items-center justify-between mobile-nav-inner" style={{height:72}}>
        <div className="flex items-center gap-6">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-8 rounded-full border border-white/10 bg-[#0b1230]/80 px-3 shadow-[0_8px_24px_rgba(5,8,22,0.25)]">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setActive(l.href)} className={`nav-link px-2 py-3 transition-colors ${active === l.href ? 'nav-link-active' : ''}`}>
              {t('nav', l.key)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 text-sm text-slate-200">
            <span className="sr-only">{t('nav', 'language')}</span>
            <select
              aria-label={t('nav', 'language')}
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-slate-100 outline-none"
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code} className="text-slate-900">
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#080d24] transition hover:bg-cyan-200">
            {t('nav', 'contact')} <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="md:hidden mobile-menu-control">
          <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((s) => !s)} className="mobile-menu-button">
            <span className={`hamburger-line ${open ? 'hamburger-line-top-open' : ''}`} />
            <span className={`hamburger-line ${open ? 'hamburger-line-middle-open' : ''}`} />
            <span className={`hamburger-line ${open ? 'hamburger-line-bottom-open' : ''}`} />
          </button>
          </div>
        </div>

        <div id="mobile-navigation" className={`mobile-navigation ${open ? 'mobile-navigation-open' : ''}`} aria-hidden={!open}>
              <nav className="mobile-navigation-links">
                {links.map((l) => (
                    <a key={l.href} href={l.href} tabIndex={open ? 0 : -1} onClick={() => { setActive(l.href); setOpen(false) }} className="mobile-navigation-link">
                    {t('nav', l.key)}
                  </a>
                ))}
              </nav>

              <div className="mobile-navigation-footer">
                <label className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  <span>{t('nav', 'language')}</span>
                  <select
                    aria-label={t('nav', 'language')}
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as Language)}
                    tabIndex={open ? 0 : -1}
                    className="bg-transparent text-slate-100 outline-none"
                  >
                    {languageOptions.map((option) => (
                      <option key={option.code} value={option.code} className="text-slate-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
        </div>
    </header>
  )
}
