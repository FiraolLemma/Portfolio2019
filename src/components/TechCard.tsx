import React from 'react'

type Props = {
  name: string
  color?: string
}

export default function TechCard({ name, color = '#1f2937' }: Props) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white/3 rounded-xl min-w-[100px] card-hover">
      <div style={{background: color}} className="w-12 h-12 rounded-md flex items-center justify-center text-white font-semibold">{name[0]}</div>
      <div className="text-sm text-slate-200">{name}</div>
    </div>
  )
}
