import React from 'react'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <Reveal className="mt-12 py-8 border-t border-white/6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo />
          <p className="text-slate-400">{t('footer', 'text')}</p>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex gap-4 text-slate-300">
            <a href="#home">{t('nav', 'home')}</a>
            <a href="#about">{t('nav', 'about')}</a>
            <a href="#projects">{t('nav', 'projects')}</a>
            <a href="#contact">{t('nav', 'contact')}</a>
          </nav>
        </div>
      </div>

      <div className="mt-6 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Fraol Lemma. {t('footer', 'rights')}</div>
    </Reveal>
  )
}
