import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  return (
    <Reveal id="services" className="mt-12 py-12">
      <h3 className="text-2xl font-semibold">{t('services', 'title')}</h3>
      <p className="mt-2 text-slate-300 max-w-2xl">{t('services', 'intro')}</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.id} title={s.title} description={s.description} />
        ))}
      </div>
    </Reveal>
  )
}
