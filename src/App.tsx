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
      <div className="min-h-screen bg-[#050816] text-slate-100 font-sans selection:bg-cyan-300/20 selection:text-cyan-100">
        <Nav />
        <main className="container mx-auto px-5 pt-20 sm:px-8 lg:px-10">
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
