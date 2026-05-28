'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { Stethoscope, Leaf, Pill, BookOpen, Cpu } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: '医疗诊疗',
    description: '四家门诊部、一家二级中医院，由多位三甲医院退休主任级专家领衔坐诊，提供权威精准的中医诊疗。',
    href: '/services',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Leaf,
    title: '药食同源',
    description: '秉承"药食同源"理念，提供个性化食疗方案和养生指导，让中医智慧融入日常生活。',
    href: '/wellness',
    color: 'bg-gold-100 text-gold-600',
  },
  {
    icon: BookOpen,
    title: '文化研学',
    description: '两个中医药研学中心，搭建医道文化传播平台，培育中医新生力量，弘扬中华传统医道文化。',
    href: '/wellness',
    color: 'bg-warm-200 text-warm-700',
  },
  {
    icon: Cpu,
    title: '健康科技',
    description: '拥有多项自主专利的健康科技公司，致力于中医药健康产品的研发与创新。',
    href: '/services',
    color: 'bg-cinnabar-100 text-cinnabar-600',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="全产业链生态" subtitle="医疗诊疗 · 康复疗养 · 文化研学 · 健康科技" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Link
                href={service.href}
                className="group block h-full rounded-md border border-warm-200 bg-warm-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink-900 group-hover:text-primary-700">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary-600 group-hover:text-primary-700">
                  了解更多 &rarr;
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
