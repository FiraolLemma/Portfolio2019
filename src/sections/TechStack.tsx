import React from 'react'
import TechCard from '../components/TechCard'
import { techs } from '../data/techs'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <Reveal id="tech" className="relative z-10 -mt-3 sm:-mt-8">
      <div className="glass-panel rounded-3xl p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div><p className="section-kicker">Toolkit</p><h3 className="mt-1 text-xl font-bold">{t('tech', 'title')}</h3></div>
          <span className="hidden text-xs text-slate-500 sm:block">Tools I build with</span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {techs.map((t) => (
            <TechCard key={t.name} name={t.name} color={t.color} image={t.image} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
