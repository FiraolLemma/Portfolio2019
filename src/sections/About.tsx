import React from 'react'
import InfoCard from '../components/InfoCard'
import ProfileSVG from '../assets/profile.svg'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <Reveal id="about" className="mt-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <div className="rounded-2xl overflow-hidden shadow-soft-lg">
            <img
              src="/src/assets/Profile_Picture.jpg"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = ProfileSVG }}
              alt="profile placeholder"
              className="w-full h-auto block"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <h3 className="text-2xl font-semibold">{t('about', 'title')}</h3>
          <p className="mt-4 text-slate-300 max-w-xl">{t('about', 'text')}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <InfoCard title={t('about', 'cards.experience')} value="3+ Years" />
            <InfoCard title={t('about', 'cards.education')} value="BSc in CS" />
            <InfoCard title={t('about', 'cards.location')} value="Addis Ababa, Ethiopia" />
            <InfoCard title={t('about', 'cards.interests')} value="Website Development, AI, Image Enhancement" />
          </div>
        </div>
      </div>
    </Reveal>
  )
}
