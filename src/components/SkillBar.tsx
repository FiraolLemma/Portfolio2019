import React from 'react'

type Props = {
  name: string
  value: number
}

export default function SkillBar({ name, value }: Props) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 transition hover:border-cyan-300/30 hover:bg-white/[0.05]">
      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" />
      <span className="text-sm text-slate-200">{name}</span>
    </div>
  )
}
