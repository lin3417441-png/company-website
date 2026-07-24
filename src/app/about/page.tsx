import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import StorySection from '@/components/about/StorySection'
import ValuesSection from '@/components/about/ValuesSection'
import TimelineSection from '@/components/about/TimelineSection'
import QualificationsSection from '@/components/about/QualificationsSection'
import JsonLd from '@/components/ui/JsonLd'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: '关于我们',
  description: `了解${SITE_CONFIG.name}的历史传承、核心价值观和专业团队`,
}

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalClinic',
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url: `${SITE_CONFIG.url}/about`,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      foundingDate: SITE_CONFIG.founded,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '湖滨南路 8-2-1',
        addressLocality: '厦门市',
        addressRegion: '福建省',
        addressCountry: 'CN',
      },
      medicalSpecialty: [
        'TraditionalChineseMedicine',
        'Acupuncture',
        'HerbalMedicine',
        'PreventiveMedicine',
      ],
    },
    {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logo.png`,
      foundingDate: SITE_CONFIG.founded,
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: '100+',
      },
      sameAs: [
        'https://nengrentang.com.cn',
        'https://zhanfu.com.cn',
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd} />
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
