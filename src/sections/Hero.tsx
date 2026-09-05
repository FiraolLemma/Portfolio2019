import React from 'react'
import Button from '../components/Button'
import { ArrowRight, Instagram, Mail, Music2, Send } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <Reveal id="home" className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden pt-0 pb-14 lg:py-20">
      <div className="hero-grid" aria-hidden="true" />
      <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="relative z-10 lg:col-span-7">
          <p className="eyebrow"><span className="eyebrow-dot" /> {t('hero', 'greeting')}</p>
          <h2 className="mt-5 max-w-3xl text-5xl font-black tracking-[-0.04em] leading-[0.98] sm:text-7xl lg:text-8xl">
            <span className="mr-3 block">{t('hero', 'your')}</span>
            <span className="gradient-text">{t('hero', 'name')}</span>
          </h2>
          <p className="mt-7 text-xl font-semibold text-slate-200 sm:text-2xl">{t('hero', 'role')}</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">{t('hero', 'intro')}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">{t('hero', 'supporting')}</p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button href="#contact" className="w-full sm:w-auto">{t('hero', 'hire')} <ArrowRight size={17} /></Button>
            <Button href="#projects" variant="outline" className="w-full sm:w-auto">{t('hero', 'work')} <ArrowRight size={17} /></Button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href="https://t.me/nomoreboundary" target="_blank" rel="noreferrer" aria-label="Telegram" className="social-link"><Send size={18} /></a>
            <a href="https://www.instagram.com/fraollemma0506" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link"><Instagram size={18} /></a>
            <a href="https://www.tiktok.com/@fraol_lemma" target="_blank" rel="noreferrer" aria-label="TikTok" className="social-link"><Music2 size={18} /></a>
            <a href="mailto:Fraollemma0506@gmail.com" aria-label="Email" className="social-link"><Mail size={18} /></a>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center lg:col-span-5 lg:min-h-[540px] lg:justify-end">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-portrait-wrap blob-animate">
            <div className="hero-portrait-glow" aria-hidden="true" />
            <img
              src="/images/profile/Profile_Picture2.png"
              alt="Fraol Lemma"
              className="hero-portrait"
            />
          </div>
        </div>
      </div>
    </Reveal>
  )
}
