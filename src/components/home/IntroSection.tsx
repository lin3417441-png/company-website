'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { Building2, GraduationCap, Users, Award } from 'lucide-react'

const stats = [
  { icon: Building2, number: '8', label: '下属机构', suffix: '家' },
  { icon: Users, number: '100', label: '资深医师', suffix: '+' },
  { icon: GraduationCap, number: '8', label: '特色项目', suffix: '大' },
  { icon: Award, number: '2016', label: '创立于厦门', suffix: '' },
]

export default function IntroSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <stat.icon size={28} className="text-primary-600" />
                  </div>
                  <div className="font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
                    {stat.number}
                    <span className="text-lg text-gold-600">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-500">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
