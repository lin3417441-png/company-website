'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { Pill, Leaf, Cpu, Clock, Shield, Award } from 'lucide-react'

const otherServices = [
  {
    icon: Pill,
    title: '能仁堂大药房',
    desc: '严选全国道地药材产区优质中药材，提供中药饮片、中成药及专业代煎服务。',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Leaf,
    title: '药食同源门店',
    desc: '秉承"药食同源"理念，将中医食养智慧与现代营养科学融合，提供个性化食疗方案。',
    color: 'bg-gold-100 text-gold-600',
  },
  {
    icon: Cpu,
    title: '健康科技公司',
    desc: '拥有多项自主专利，致力于中医药健康产品的研发与创新，推动中医药现代化。',
    color: 'bg-cinnabar-100 text-cinnabar-600',
  },
]

const pharmacyFeatures = [
  { icon: Shield, title: '道地药材', desc: '严选全国道地药材产区优质中药材' },
  { icon: Clock, title: '代煎服务', desc: '现代化煎煮设备，方便快捷' },
  { icon: Award, title: '专业药师', desc: '执业中药师团队驻店指导' },
]

export default function PharmacySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="药事与健康服务" subtitle="道地药材，品质保障" />

        <div className="grid gap-6 sm:grid-cols-3">
          {otherServices.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="h-full rounded-md border border-warm-200 bg-warm-50 p-6">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 药房特色 */}
        <AnimatedSection>
          <div className="mt-12 rounded-md bg-primary-50 p-8">
            <h3 className="mb-6 text-center font-serif text-xl font-bold text-ink-900">大药房特色服务</h3>
            <div className="grid gap-6 sm:grid-cols-3">
              {pharmacyFeatures.map((f, i) => (
                <div key={f.title} className="flex items-center gap-3">
                  <div className="shrink-0 rounded-full bg-primary-100 p-2">
                    <f.icon size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-ink-900">{f.title}</p>
                    <p className="text-sm text-ink-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary">
              咨询了解更多
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
