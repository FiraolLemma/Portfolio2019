import React from 'react'

type Props = {
  title: string
  value: string
}

export default function InfoCard({ title, value }: Props) {
  return (
    <div className="bg-white/3 p-4 rounded-lg min-w-[140px] card-hover">
      <div className="text-sm text-slate-300">{title}</div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  )
}
