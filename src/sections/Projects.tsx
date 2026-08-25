import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <Reveal id="projects" className="mt-20 py-16 lg:mt-24 lg:py-20">
      <p className="section-kicker">Selected work</p>
      <h3 className="section-heading">{t('projects', 'title')}</h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{t('projects', 'intro')}</p>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} title={p.title} description={p.description} techs={p.techs} img={p.img} demo={p.demo} repo={p.repo} />
        ))}
      </div>
    </Reveal>
  )
}
