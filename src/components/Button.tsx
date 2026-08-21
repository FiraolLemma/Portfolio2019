import React from 'react'

type Props = {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  className?: string
}

export default function Button({ children, variant = 'primary', onClick, className = '' }: Props) {
  if (variant === 'primary') {
    return (
      <button onClick={onClick} className={`px-5 py-2 rounded-full bg-gradient-to-r from-brandBlue to-brandPurple shadow-md btn-micro text-white ${className}`}>
        {children}
      </button>
    )
  }
  return (
    <button onClick={onClick} className={`px-5 py-2 rounded-full border border-slate-500 text-slate-100 hover:bg-white/5 transition ${className}`}>
      {children}
    </button>
  )
}
