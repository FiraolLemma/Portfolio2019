import React from 'react'
import ContactForm from '../components/ContactForm'
import { Mail, Phone, MapPin, Instagram, Music2, Send } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <Reveal id="contact" className="mt-20 py-16 lg:mt-24 lg:py-20">
      <p className="section-kicker">Start a conversation</p>
      <h3 className="section-heading">{t('contact', 'title')}</h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{t('contact', 'intro')}</p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="glass-panel rounded-3xl p-6">
            <h4 className="font-semibold">{t('contact', 'info')}</h4>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3"><Mail /> <a href="mailto:Fraollemma0506@gmail.com" className="text-slate-200">Fraollemma0506@gmail.com</a></div>
              <div className="flex items-center gap-3"><Phone /> <span className="text-slate-200">0925259294 / 0975060586</span></div>
              <div className="flex items-center gap-3"><MapPin /> <span className="text-slate-200">Addis Ababa, Ethiopia</span></div>
            </div>
          </div>

          <div className="flex gap-3">
            <a href="https://t.me/nomoreboundary" target="_blank" rel="noreferrer" aria-label="Telegram" className="p-3 rounded-md bg-white/5"><Send /></a>
            <a href="https://www.instagram.com/fraollemma0506" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-3 rounded-md bg-white/5"><Instagram /></a>
            <a href="https://www.tiktok.com/@fraol_lemma" target="_blank" rel="noreferrer" aria-label="TikTok" className="p-3 rounded-md bg-white/5"><Music2 /></a>
          </div>
        </div>

        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Reveal>
  )
}
