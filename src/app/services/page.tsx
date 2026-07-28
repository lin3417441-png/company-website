import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import ClinicsSection from '@/components/services/ClinicsSection'
import PharmacySection from '@/components/services/PharmacySection'
import JsonLd from '@/components/ui/JsonLd'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: '医疗服务',
  description: '能仁堂集团旗下八家医疗健康机构，提供专业中医诊疗和中药服务',
  alternates: { canonical: '/services' },
}

const servicesFaqItems = [
  {
    q: '能仁堂有哪些特色诊疗项目？',
    a: '能仁堂提供八大特色项目：体质调理、余氏骨伤、肥胖四高中医调理、女性康养、结节调理、睡眠调理、小儿推拿、疼痛管理。',
  },
  {
    q: '能仁堂擅长治疗哪些疾病？',
    a: '能仁堂在体质调理、骨伤疾患（余氏骨伤流派）、肥胖及四高（高血压/高血糖/高血脂/高尿酸）、女性经带孕产更年期问题、甲状腺/乳腺结节、失眠障碍、小儿常见病、各类疼痛管理等方面有丰富临床经验。',
  },
  {
    q: '能仁堂的门诊时间是什么时候？',
    a: '能仁堂门诊时间为周一至周日 8:30 - 21:00。',
  },
]

const servicesPageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: `${SITE_CONFIG.name} - 医疗服务`,
      description: '能仁堂集团旗下四家门诊部、一家二级中医院、大药房、健康科技公司及中医药研学中心，共八家机构，提供专业中医诊疗和中药服务',
      url: `${SITE_CONFIG.url}/services`,
      parentOrganization: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      medicalSpecialty: [
        'TraditionalChineseMedicine',
        'Acupuncture',
        'HerbalMedicine',
        'PreventiveMedicine',
      ],
      availableService: [
        { '@type': 'MedicalTherapy', name: '体质调理' },
        { '@type': 'MedicalTherapy', name: '余氏骨伤' },
        { '@type': 'MedicalTherapy', name: '肥胖四高中医调理' },
        { '@type': 'MedicalTherapy', name: '女性康养' },
        { '@type': 'MedicalTherapy', name: '结节调理' },
        { '@type': 'MedicalTherapy', name: '睡眠调理' },
        { '@type': 'MedicalTherapy', name: '小儿推拿' },
        { '@type': 'MedicalTherapy', name: '疼痛管理' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: servicesFaqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesPageJsonLd} />
      <PageHero
        title="医疗服务"
        subtitle="专业中医诊疗，道地药材保障，为您的健康保驾护航"
      />

      <ClinicsSection />
      <PharmacySection />

      <section className="section-padding bg-warm-50">
        <div className="container-custom mx-auto max-w-3xl">
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-500" />
              <span className="text-xs font-medium tracking-[0.35em] text-gold-600">常见问题</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-wide text-ink-900">
              医疗服务问答
            </h2>
          </div>
          <div>
            {servicesFaqItems.map((faq) => (
              <details key={faq.q} className="group border-t border-warm-300 last:border-b">
                <summary className="cursor-pointer py-5 font-serif font-bold tracking-wide text-ink-900 transition-colors marker:text-gold-500 hover:text-primary-700">
                  {faq.q}
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-ink-500">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
