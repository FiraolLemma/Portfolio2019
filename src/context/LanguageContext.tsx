import React, { createContext, useContext, useState } from 'react'
import { defaultLanguage, type Language, translations } from '../data/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (section: keyof typeof translations, key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  const t = (section: keyof typeof translations, key: string) => {
    const sectionData = translations[section] as Record<string, any>
    const segments = key.split('.')
    let value: any = sectionData

    for (const segment of segments) {
      if (value && typeof value === 'object') {
        value = value[segment]
      } else {
        value = undefined
        break
      }
    }

    if (!value || typeof value !== 'object' || !('am' in value)) {
      return key
    }

    return value[language] ?? value[defaultLanguage]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider')
  }

  return context
}
