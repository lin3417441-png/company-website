import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import ClinicsSection from '@/components/services/ClinicsSection'
import PharmacySection from '@/components/services/PharmacySection'

export const metadata: Metadata = {
  title: '医疗服务',
  description: '能仁堂集团旗下四家门诊部、一家二级中医院、大药房及健康科技公司，提供专业中医诊疗和中药服务',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="医疗服务"
        subtitle="专业中医诊疗，道地药材保障，为您的健康保驾护航"
      />

      <ClinicsSection />
      <PharmacySection />
    </>
  )
}
