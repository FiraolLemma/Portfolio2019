import React from 'react'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-brandBlue to-brandPurple flex items-center justify-center font-bold text-white">FL</div>
      <span className="hidden sm:inline text-sm font-medium">Fraol Lemma</span>
    </div>
  )
}
