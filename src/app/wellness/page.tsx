import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import TherapySection from '@/components/wellness/TherapySection'
import EducationSection from '@/components/wellness/EducationSection'
import JsonLd from '@/components/ui/JsonLd'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: '食养研学',
  description: '能仁堂药食同源门店（食养小屋）和中医药研学中心，搭建医道文化传播平台，让中医智慧融入生活',
}

const wellnessPageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HealthClub',
      name: '能仁堂食养小屋',
      description: '秉承「药食同源」的传统理念，将中医食养智慧与现代营养科学相融合，为您提供个性化的食疗方案和养生指导',
      url: `${SITE_CONFIG.url}/wellness`,
      parentOrganization: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      availableService: [
        { '@type': 'Service', name: '节气食养', description: '根据二十四节气变化，为您定制应季食疗方案' },
        { '@type': 'Service', name: '养生茶饮', description: '精选药食同源食材，调配专属养生茶方' },
        { '@type': 'Service', name: '体质调理', description: '通过中医体质辨识，提供个性化的饮食建议和食养方案' },
      ],
    },
    {
      '@type': 'EducationalOrganization',
      name: '能仁堂中医药研学中心',
      description: '搭建医道文化传播平台，让中医智慧融入生活',
      url: `${SITE_CONFIG.url}/wellness`,
      parentOrganization: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    },
  ],
}

export default function WellnessPage() {
  return (
    <>
      <JsonLd data={wellnessPageJsonLd} />
      <PageHero
        title="食养研学"
        subtitle="药食同源，传承国粹 — 让中医智慧融入您的日常生活"
      />

      <TherapySection />
      <EducationSection />
    </>
  )
}
