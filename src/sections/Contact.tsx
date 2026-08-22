import React from 'react'
import ContactForm from '../components/ContactForm'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <Reveal id="contact" className="mt-12 py-12">
      <h3 className="text-2xl font-semibold">{t('contact', 'title')}</h3>
      <p className="mt-2 text-slate-300 max-w-2xl">{t('contact', 'intro')}</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="bg-white/4 p-6 rounded-2xl">
            <h4 className="font-semibold">{t('contact', 'info')}</h4>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3"><Mail /> <a href="mailto:Fraollemma0506@gmail.com" className="text-slate-200">Fraollemma0506@gmail.com</a></div>
              <div className="flex items-center gap-3"><Phone /> <span className="text-slate-200">0925259294</span></div>
              <div className="flex items-center gap-3"><MapPin /> <span className="text-slate-200">Addis Ababa, Ethiopia</span></div>
            </div>
          </div>

          <div className="flex gap-3">
            <a aria-label="linkedin" className="p-3 rounded-md bg-white/5"><Linkedin /></a>
            <a aria-label="github" className="p-3 rounded-md bg-white/5"><Github /></a>
            <a aria-label="twitter" className="p-3 rounded-md bg-white/5"><Twitter /></a>
          </div>
        </div>

        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Reveal>
  )
}
