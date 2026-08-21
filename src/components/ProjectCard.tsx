import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

type Props = {
  title: string
  description: string
  techs: string[]
  img: string
  demo?: string
  repo?: string
}

export default function ProjectCard({ title, description, techs, img, demo, repo }: Props) {
  return (
    <div className="bg-white/4 rounded-2xl overflow-hidden shadow-soft-lg card-hover">
      <img src={img} alt={`${title} screenshot`} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-2 text-slate-300 text-sm">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {techs.map((t) => (
            <span key={t} className="text-xs bg-white/6 px-2 py-1 rounded-md">{t}</span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-gradient-to-r from-brandBlue to-brandPurple rounded-full text-white flex items-center gap-2 btn-micro">
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-white/5 rounded-full text-slate-100 flex items-center gap-2 btn-micro">
              <Github size={14} /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
