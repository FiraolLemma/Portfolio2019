import React from 'react'
import TechCard from '../components/TechCard'
import { techs } from '../data/techs'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <Reveal id="tech" className="mt-12">
      <div className="bg-white/4 rounded-2xl p-6 backdrop-blur-sm border border-white/6">
        <h3 className="text-center text-xl font-semibold">{t('tech', 'title')}</h3>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          {techs.map((t) => (
            <TechCard key={t.name} name={t.name} color={t.color} image={t.image} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
