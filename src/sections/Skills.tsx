import React from 'react'
import SkillBar from '../components/SkillBar'
import { skills } from '../data/skills'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <Reveal id="skills" className="mt-12 py-12">
      <h3 className="text-2xl font-semibold">{t('skills', 'title')}</h3>
      <p className="mt-2 text-slate-300 max-w-2xl">{t('skills', 'intro')}</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-medium mb-3">{t('skills', 'frontend')}</h4>
          <div className="flex flex-col gap-3">
            {skills.frontend.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">{t('skills', 'backend')}</h4>
          <div className="flex flex-col gap-3">
            {skills.backend.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">{t('skills', 'database')}</h4>
          <div className="flex flex-col gap-3">
            {skills.database.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">{t('skills', 'tools')}</h4>
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
