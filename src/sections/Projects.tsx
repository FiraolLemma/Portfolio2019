import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <Reveal id="projects" className="mt-12 py-12">
      <h3 className="text-2xl font-semibold">{t('projects', 'title')}</h3>
      <p className="mt-2 text-slate-300 max-w-2xl">{t('projects', 'intro')}</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} title={p.title} description={p.description} techs={p.techs} img={p.img} demo={p.demo} repo={p.repo} />
        ))}
      </div>
    </Reveal>
  )
}
