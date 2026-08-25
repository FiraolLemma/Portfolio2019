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
    <article className="group overflow-hidden rounded-3xl bg-white/[0.035] shadow-soft-lg card-hover">
      <div className="relative overflow-hidden">
        <img src={img} alt={`${title} screenshot`} loading="lazy" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d24]/80 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-2 min-h-10 text-sm leading-6 text-slate-400">{description === '...' ? 'A focused digital product exploring thoughtful interfaces and reliable full stack foundations.' : description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {techs.map((t) => (
            <span key={t} className="text-xs bg-white/6 px-2 py-1 rounded-md">{t}</span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          {demo && demo !== '#' && (
            <a href={demo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-gradient-to-r from-brandBlue to-brandPurple rounded-full text-white flex items-center gap-2 btn-micro">
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {repo && repo !== '#' && (
            <a href={repo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-white/5 rounded-full text-slate-100 flex items-center gap-2 btn-micro">
              <Github size={14} /> View Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
