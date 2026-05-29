'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { Heart, Lightbulb, Shield, BookOpen } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: '仁心仁术',
    description: '以仁爱之心为本，以专业之术为用，恪守"能仁大愿，仁心仁术"的初心宗旨。',
  },
  {
    icon: Lightbulb,
    title: '传承创新',
    description: '传承精华，守正创新，推动中医药健康文化的创造性转化与创新性发展。',
  },
  {
    icon: Shield,
    title: '能仁大愿',
    description: '以精湛医术与贴心服务守护大众身心健康，践行"以健康为中心"的理念。',
  },
  {
    icon: BookOpen,
    title: '医道传承',
    description: '搭建医道文化传播平台，培育中医新生力量，弘扬中华传统医道文化。',
  },
]

export default function ValuesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="核心价值观" subtitle="能仁堂的精神内核" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-md border border-warm-200 bg-warm-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                  <v.icon size={26} className="text-primary-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
