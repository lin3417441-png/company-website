'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { Award, BadgeCheck, Lightbulb, Star } from 'lucide-react'

const quals = [
  { icon: Award, title: '二级中医院', desc: '功能齐全的二级中医院，提供全面中医诊疗服务' },
  { icon: BadgeCheck, title: '三甲专家领衔', desc: '多位三甲医院退休主任级专家领衔坐诊' },
  { icon: Lightbulb, title: '自主专利技术', desc: '健康科技公司拥有多项自主专利' },
  { icon: Star, title: '百位资深医师', desc: '汇聚超百位资深医师，专业团队值得信赖' },
]

export default function QualificationsSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <SectionTitle title="集团实力" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quals.map((q, i) => (
            <AnimatedSection key={q.title} delay={i * 0.1}>
              <div className="flex items-start gap-4 rounded-lg border border-warm-200 p-5">
                <div className="shrink-0 rounded-lg bg-gold-100 p-2.5">
                  <q.icon size={22} className="text-gold-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-ink-900">{q.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{q.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
