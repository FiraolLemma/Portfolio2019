import React, { useState } from 'react'

type Props = {
  name: string
  color?: string
  image?: string
}

export default function TechCard({ name, color = '#1f2937', image }: Props) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className="group flex min-w-0 flex-col items-center gap-3 rounded-2xl p-3 text-center card-hover bg-white/[0.025]">
      <div
        style={{ background: color }}
        className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl text-white font-semibold shadow-lg transition-transform group-hover:scale-110"
      >
        {!image || imageFailed ? (
          <span className="text-lg">{name[0]}</span>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <div className="truncate text-xs font-medium text-slate-300">{name}</div>
    </div>
  )
}
