import type { Metadata } from 'next'
import StorySection from '@/components/about/StorySection'
import ValuesSection from '@/components/about/ValuesSection'
import TimelineSection from '@/components/about/TimelineSection'
import TeamSection from '@/components/about/TeamSection'
import QualificationsSection from '@/components/about/QualificationsSection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: '关于我们',
  description: `了解${SITE_CONFIG.name}的历史传承、核心价值观和专业团队`,
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-20 sm:py-28">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            关于能仁堂
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gold-300">
            仁心仁术，治病救人 — 传承精华，守正创新
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 80L1440 80V60C1200 40 960 20 720 30C480 40 240 60 0 80Z" fill="var(--color-warm-50)" />
          </svg>
        </div>
      </section>

      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <QualificationsSection />
    </>
  )
}
