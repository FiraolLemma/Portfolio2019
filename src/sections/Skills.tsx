import React from 'react'
import SkillBar from '../components/SkillBar'
import { skills } from '../data/skills'
import Reveal from '../components/Reveal'

export default function Skills() {
  return (
    <Reveal id="skills" className="mt-12 py-12">
      <h3 className="text-2xl font-semibold">Skills</h3>
      <p className="mt-2 text-slate-300 max-w-2xl">A selection of my core technical skills grouped by area. Percentages show confidence level.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-medium mb-3">Frontend</h4>
          <div className="flex flex-col gap-3">
            {skills.frontend.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Backend</h4>
          <div className="flex flex-col gap-3">
            {skills.backend.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Database</h4>
          <div className="flex flex-col gap-3">
            {skills.database.map((s) => (
              <SkillBar key={s.name} name={s.name} value={s.value} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Tools</h4>
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
