import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { LotusDecoration } from '@/components/ui/Decorations'

const values = [
  {
    number: '壹',
    title: '仁心仁术',
    description: '以仁爱之心为本，以专业之术为用，恪守"能仁大愿，仁心仁术"的初心宗旨。',
  },
  {
    number: '贰',
    title: '传承创新',
    description: '传承精华，守正创新，推动中医药健康文化的创造性转化与创新性发展。',
  },
  {
    number: '叁',
    title: '能仁大愿',
    description: '以精湛医术与贴心服务守护大众身心健康，践行"以健康为中心"的理念。',
  },
  {
    number: '肆',
    title: '医道传承',
    description: '搭建医道文化传播平台，培育中医新生力量，弘扬中华传统医道文化。',
  },
]

export default function ValuesSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50/20 via-warm-50 to-gold-50/30 relative overflow-hidden">
      {/* Task 5: 莲花装饰 — 代表清净和谐 */}
      <LotusDecoration />

      <div className="container-custom relative z-10">
        <SectionTitle eyebrow="精神内核" title="核心价值观" />

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="group border-2 border-warm-300 rounded-lg p-6 transition-all duration-300 hover:border-gold-500 hover:shadow-md">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-serif text-3xl text-gold-600">{v.number}</span>
                  <h3 className="font-serif text-xl font-bold tracking-wide text-ink-900">
                    {v.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-500">{v.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
