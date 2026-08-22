import React from 'react'
import InfoCard from '../components/InfoCard'
import ProfileSVG from '../assets/profile.svg'
import Reveal from '../components/Reveal'

export default function About() {
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
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-4 text-slate-300 max-w-xl">I am a passionate Full Stack Web Developer with experience in building web applications using modern technologies. I enjoy turning ideas into real, functional and user-friendly digital products. I love learning new technologies and working on challenging projects that make a positive impact.</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <InfoCard title="Experience" value="3+ Years" />
            <InfoCard title="Education" value="BSc in CS" />
            <InfoCard title="Location" value="Addis Ababa, Ethiopia" />
            <InfoCard title="Interests" value="Web Dev, AI, FinTech" />
          </div>
        </div>
      </div>
    </Reveal>
  )
}
