import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import TherapySection from '@/components/wellness/TherapySection'
import EducationSection from '@/components/wellness/EducationSection'

export const metadata: Metadata = {
  title: '食养研学',
  description: '能仁堂药食同源门店（食养小屋）和中医药研学中心，搭建医道文化传播平台，让中医智慧融入生活',
}

export default function WellnessPage() {
  return (
    <>
      <PageHero
        title="食养研学"
        subtitle="药食同源，传承国粹 — 让中医智慧融入您的日常生活"
      />

      <TherapySection />
      <EducationSection />
    </>
  )
}
