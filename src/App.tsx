import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import TechStack from './sections/TechStack'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#06071a] to-[#0b1230] text-slate-100 font-sans">
        <Nav />
        <main className="container mx-auto px-6 pt-24">
          <Hero />
          <TechStack />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  )
}
