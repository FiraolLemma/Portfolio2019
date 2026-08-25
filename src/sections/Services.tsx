import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  return (
    <Reveal id="services" className="mt-20 py-16 lg:mt-24 lg:py-20">
      <p className="section-kicker">How I can help</p>
      <h3 className="section-heading">{t('services', 'title')}</h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{t('services', 'intro')}</p>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.id} title={s.title} description={s.description} />
        ))}
      </div>
    </Reveal>
  )
}
