import type { Metadata } from 'next'
import ClinicsSection from '@/components/services/ClinicsSection'
import PharmacySection from '@/components/services/PharmacySection'

export const metadata: Metadata = {
  title: '医疗服务',
  description: '能仁堂集团旗下四家门诊部、一家二级中医院、大药房及健康科技公司，提供专业中医诊疗和中药服务',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-20 sm:py-28">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            医疗服务
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gold-300">
            专业中医诊疗，道地药材保障，为您的健康保驾护航
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 80L1440 80V60C1200 40 960 20 720 30C480 40 240 60 0 80Z" fill="var(--color-warm-50)" />
          </svg>
        </div>
      </section>

      <ClinicsSection />
      <PharmacySection />
    </>
  )
}
