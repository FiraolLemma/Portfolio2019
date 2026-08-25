import React from 'react'
import InfoCard from '../components/InfoCard'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <Reveal id="about" className="mt-20 py-16 lg:mt-24 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 shadow-soft-lg">
            <img
              src="/images/profile/profile1.jpg"
              alt="Fraol Lemma working as a web developer"
              loading="lazy"
              className="block h-[360px] w-full rounded-2xl object-cover object-top sm:h-[460px]"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="section-kicker">A little context</p>
          <h3 className="section-heading">{t('about', 'title')}</h3>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">{t('about', 'text')}</p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <InfoCard title={t('about', 'cards.experience')} value="3+ Years" />
            <InfoCard title={t('about', 'cards.education')} value="BSc in CS" />
            <InfoCard title={t('about', 'cards.location')} value="Addis Ababa, Ethiopia" />
            <InfoCard title={t('about', 'cards.interests')} value="Website Dev, AI, Photo Editing" />
          </div>
        </div>
      </div>
    </Reveal>
  )
}
