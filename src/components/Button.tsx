import React from 'react'

type Props = {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  href?: string
  className?: string
}

export default function Button({ children, variant = 'primary', onClick, href, className = '' }: Props) {
  const classes = variant === 'primary'
    ? `inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brandBlue to-brandPurple shadow-[0_12px_30px_rgba(99,102,241,0.24)] btn-micro text-white ${className}`
    : `inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] text-slate-100 hover:border-cyan-300/40 hover:bg-white/[0.08] transition ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  if (variant === 'primary') {
    return <button onClick={onClick} className={classes}>{children}</button>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}
