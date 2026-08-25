import React from 'react'
import SkillBar from '../components/SkillBar'
import { skills } from '../data/skills'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <Reveal id="skills" className="mt-20 py-16 lg:mt-24 lg:py-20">
      <p className="section-kicker">What I use</p>
      <h3 className="section-heading">{t('skills', 'title')}</h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{t('skills', 'intro')}</p>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl bg-white/[0.025] p-5">
          <h4 className="mb-4 font-semibold text-cyan-100">{t('skills', 'frontend')}</h4>
          <div className="flex flex-col gap-3">
            {skills.frontend.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white/[0.025] p-5">
          <h4 className="mb-4 font-semibold text-cyan-100">{t('skills', 'backend')}</h4>
          <div className="flex flex-col gap-3">
            {skills.backend.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white/[0.025] p-5">
          <h4 className="mb-4 font-semibold text-cyan-100">{t('skills', 'database')}</h4>
          <div className="flex flex-col gap-3">
            {skills.database.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white/[0.025] p-5">
          <h4 className="mb-4 font-semibold text-cyan-100">{t('skills', 'tools')}</h4>
          <div className="flex flex-col gap-3">
            {skills.tools.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
