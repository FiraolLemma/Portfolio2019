import React, { useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm site-header border-b border-white/6">
      <div className="container mx-auto px-6 h-18 flex items-center justify-between" style={{height:72}}>
        <div className="flex items-center gap-6">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link px-2 py-3 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="/cv.pdf" className="hidden sm:inline">
            <Button variant="outline">Download CV</Button>
          </a>
        </div>

        <div className="md:hidden">
          <button aria-label="menu" onClick={() => setOpen((s) => !s)} className="p-2 rounded-md bg-white/5">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden">
            <div className="px-6 py-6 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <Logo />
                <button aria-label="close menu" onClick={() => setOpen(false)} className="p-2 rounded-md bg-white/5">
                  <X size={20} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-100 text-lg py-3">
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto">
                <a href="/cv.pdf">
                  <Button variant="primary" className="w-full">Download CV</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
