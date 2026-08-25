import React from 'react'

type Props = {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <article className="group rounded-3xl bg-white/[0.035] p-6 shadow-soft-lg card-hover">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brandBlue to-brandPurple text-lg font-bold text-white shadow-lg shadow-indigo-950/50">{title[0]}</div>
      <h4 className="mt-5 font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  )
}
