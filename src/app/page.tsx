import HeroSection from '@/components/home/HeroSection'
import IntroSection from '@/components/home/IntroSection'
import ServicesSection from '@/components/home/ServicesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import KnowledgeSection from '@/components/home/KnowledgeSection'
import CTASection from '@/components/home/CTASection'
import JsonLd from '@/components/ui/JsonLd'
import { SITE_CONFIG } from '@/lib/constants'

const medicalClinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: SITE_CONFIG.name,
  alternateName: '厦门能仁堂',
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  foundingDate: SITE_CONFIG.founded,
  founder: {
    '@type': 'Person',
    name: '能仁堂创始人',
  },
  medicalSpecialty: [
    'TraditionalChineseMedicine',
    'Acupuncture',
    'HerbalMedicine',
    'PreventiveMedicine',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '湖滨南路8-2-1',
    addressLocality: '厦门市',
    addressRegion: '福建省',
    addressCountry: 'CN',
  },
  areaServed: [
    {
      '@type': 'City',
      name: '厦门',
    },
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: '能仁堂集团',
  },
  sameAs: [
    'https://nengrentang.com.cn',
    'https://zhanfu.com.cn',
  ],
  knowsAbout: [
    '中医体质调理',
    '余氏骨伤',
    '中医肥胖四高调理',
    '女性康养',
    '结节调理',
    '睡眠调理',
    '小儿推拿',
    '疼痛管理',
    '药食同源养生',
  ],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '100+',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '21:00',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={medicalClinicJsonLd} />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <TestimonialsSection />
      <KnowledgeSection />
      <CTASection />
    </>
  )
}
