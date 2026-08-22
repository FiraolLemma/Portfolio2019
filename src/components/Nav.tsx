import React, { useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import { Menu, X } from 'lucide-react'
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
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm site-header border-b border-white/6">
      <div className="container mx-auto px-6 h-18 flex items-center justify-between" style={{height:72}}>
        <div className="flex items-center gap-6">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link px-2 py-3 transition-colors">
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

          <a href="/cv.pdf" className="hidden sm:inline">
            <Button variant="outline">{t('nav', 'cv')}</Button>
          </a>
        </div>

        <div className="md:hidden">
          <button aria-label="menu" onClick={() => setOpen((s) => !s)} className="p-2 rounded-md bg-white/5">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden">
            <div className="px-6 py-6 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <Logo />
                <button aria-label="close menu" onClick={() => setOpen(false)} className="p-2 rounded-md bg-white/5">
                  <X size={20} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-100 text-lg py-3">
                    {t('nav', l.key)}
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <label className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  <span>{t('nav', 'language')}</span>
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

                <a href="/cv.pdf">
                  <Button variant="primary" className="w-full">{t('nav', 'cv')}</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
