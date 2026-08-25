import React from 'react'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { Instagram, Music2, Send } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <Reveal className="mt-20 border-t border-white/10 py-10">
      <div className="container mx-auto flex flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-6 text-slate-500">{t('footer', 'text')}</p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            <a href="#home">{t('nav', 'home')}</a>
            <a href="#about">{t('nav', 'about')}</a>
            <a href="#skills">{t('nav', 'skills')}</a>
            <a href="#projects">{t('nav', 'projects')}</a>
            <a href="#contact">{t('nav', 'contact')}</a>
          </nav>
          <div className="flex gap-2">
            <a href="https://t.me/nomoreboundary" target="_blank" rel="noreferrer" aria-label="Telegram" className="social-link"><Send size={16} /></a>
            <a href="https://www.instagram.com/fraollemma0506" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link"><Instagram size={16} /></a>
            <a href="https://www.tiktok.com/@fraol_lemma" target="_blank" rel="noreferrer" aria-label="TikTok" className="social-link"><Music2 size={16} /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-white/6 px-5 pt-5 text-xs text-slate-600 sm:px-8 lg:px-10">© {new Date().getFullYear()} Fraol Lemma. {t('footer', 'rights')}</div>
    </Reveal>
  )
}
