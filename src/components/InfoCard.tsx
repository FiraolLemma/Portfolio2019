import React from 'react'

type Props = {
  title: string
  value: string
}

export default function InfoCard({ title, value }: Props) {
  return (
    <div className="min-h-[106px] rounded-2xl bg-white/[0.035] p-4 card-hover">
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200/70">{title}</div>
      <div className="mt-3 font-semibold text-slate-100">{value}</div>
    </div>
  )
}
