import React from 'react'

type Props = {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="bg-white/4 p-6 rounded-2xl shadow-soft-lg card-hover">
      <div className="w-12 h-12 rounded-md bg-gradient-to-br from-brandBlue to-brandPurple flex items-center justify-center text-white font-semibold">{title[0]}</div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-slate-300 text-sm">{description}</p>
    </div>
  )
}
