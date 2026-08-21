import React from 'react'

type Props = {
  name: string
  value: number
}

export default function SkillBar({ name, value }: Props) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-slate-200">{name}</span>
        <span className="text-sm text-slate-400">{value}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-white/6">
        <div className="h-3 rounded-full bg-gradient-to-r from-brandBlue to-brandPurple transition-all" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
