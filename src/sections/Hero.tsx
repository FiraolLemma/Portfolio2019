import React from 'react'
import Button from '../components/Button'
import { Instagram, Music2, Send } from 'lucide-react'
import ProfileSVG from '../assets/profile.svg'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <Reveal id="home" className="pt-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <p className="text-slate-300">{t('hero', 'greeting')}</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="mr-2">{t('hero', 'your')}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue to-brandPurple">{t('hero', 'name')}</span>
          </h2>
          <p className="mt-3 text-xl text-slate-300 font-medium">{t('hero', 'role')}</p>
          <p className="mt-6 text-slate-300 max-w-xl">{t('hero', 'intro')}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button className="w-full sm:w-auto">{t('hero', 'hire')}</Button>
            <Button variant="outline" className="w-full sm:w-auto">{t('hero', 'work')}</Button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href="https://t.me/nomoreboundary" target="_blank" rel="noreferrer" aria-label="Telegram" className="p-2 rounded-full bg-white/5"><Send /></a>
            <a href="https://www.instagram.com/fraollemma0506" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-white/5"><Instagram /></a>
            <a href="https://www.tiktok.com/@fraol_lemma" target="_blank" rel="noreferrer" aria-label="TikTok" className="p-2 rounded-full bg-white/5"><Music2 /></a>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end relative">
          <div className="w-72 h-72 rounded-2xl glow-blob blob-animate flex items-center justify-center shadow-soft-lg" aria-hidden>
            <img
              src="/images/profile/profile1.jpg"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = ProfileSVG }}
              alt="profile placeholder"
              className="w-64 h-64"
            />
          </div>
        </div>
      </div>
    </Reveal>
  )
}
