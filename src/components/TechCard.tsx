import React, { useState } from 'react'

type Props = {
  name: string
  color?: string
  image?: string
}

export default function TechCard({ name, color = '#1f2937', image }: Props) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white/3 rounded-xl min-w-[100px] card-hover">
      <div
        style={{ background: color }}
        className="w-14 h-14 rounded-md overflow-hidden flex items-center justify-center text-white font-semibold"
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
      <div className="text-sm text-slate-200">{name}</div>
    </div>
  )
}
