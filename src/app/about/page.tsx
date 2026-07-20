import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import StorySection from '@/components/about/StorySection'
import ValuesSection from '@/components/about/ValuesSection'
import TimelineSection from '@/components/about/TimelineSection'
import QualificationsSection from '@/components/about/QualificationsSection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: '关于我们',
  description: `了解${SITE_CONFIG.name}的历史传承、核心价值观和专业团队`,
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="关于能仁堂"
        subtitle="能仁大愿，仁心仁术 — 传承精华，守正创新"
      />

      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <QualificationsSection />
    </>
  )
}
