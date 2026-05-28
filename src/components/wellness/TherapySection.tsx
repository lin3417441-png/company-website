'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { Leaf, Coffee, Heart } from 'lucide-react'

const therapies = [
  {
    icon: Leaf,
    title: '节气食养',
    description: '根据二十四节气变化，为您定制应季食疗方案，顺应自然，调养身心。',
  },
  {
    icon: Coffee,
    title: '养生茶饮',
    description: '精选药食同源食材，调配专属养生茶方，在日常饮品中呵护健康。',
  },
  {
    icon: Heart,
    title: '体质调理',
    description: '通过中医体质辨识，提供个性化的饮食建议和食养方案。',
  },
]

export default function TherapySection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <SectionTitle title="药食同源门店" subtitle="药食同源，以食为养" />

        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-ink-600 leading-relaxed">
              能仁堂药食同源门店秉承"药食同源"的传统理念，将中医食养智慧与现代营养科学相融合，
              为您提供个性化的食疗方案和养生指导，让忙碌的现代人也能轻松享受科学的大健康生活方式。
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {therapies.map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.1}>
              <div className="h-full rounded-md bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <t.icon size={22} className="text-primary-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink-900">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{t.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="secondary">
              了解食养方案
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
