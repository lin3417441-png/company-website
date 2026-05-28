import type { Metadata } from 'next'
import TherapySection from '@/components/wellness/TherapySection'
import EducationSection from '@/components/wellness/EducationSection'

export const metadata: Metadata = {
  title: '食养研学',
  description: '能仁堂药食同源门店（食养小屋）和中医药研学中心，搭建医道文化传播平台，让中医智慧融入生活',
}

export default function WellnessPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-20 sm:py-28">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            食养研学
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gold-300">
            药食同源，传承国粹 — 让中医智慧融入您的日常生活
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 80L1440 80V60C1200 40 960 20 720 30C480 40 240 60 0 80Z" fill="var(--color-warm-50)" />
          </svg>
        </div>
      </section>

      <TherapySection />
      <EducationSection />
    </>
  )
}
