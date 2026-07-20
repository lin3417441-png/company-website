import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

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
    <section className="section-padding bg-warm-100">
      <div className="container-custom">
        <SectionTitle eyebrow="精神内核" title="核心价值观" />

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="group">
                <div className="relative pb-6">
                  <span className="font-serif text-2xl text-warm-400 transition-colors duration-300 group-hover:text-gold-500">
                    {v.number}
                  </span>
                  <span className="absolute bottom-0 left-0 h-px w-full bg-warm-300" />
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 ease-out group-hover:w-full" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold tracking-wide text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
