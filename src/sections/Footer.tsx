import React from 'react'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'

export default function Footer() {
  return (
    <Reveal className="mt-12 py-8 border-t border-white/6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo />
          <p className="text-slate-400">Building modern web experiences with care.</p>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex gap-4 text-slate-300">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>

      <div className="mt-6 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Fraol Lemma. All rights reserved.</div>
    </Reveal>
  )
}
