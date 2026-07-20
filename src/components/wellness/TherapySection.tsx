import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

const therapies = [
  {
    number: '壹',
    title: '节气食养',
    description: '根据二十四节气变化，为您定制应季食疗方案，顺应自然，调养身心。',
  },
  {
    number: '贰',
    title: '养生茶饮',
    description: '精选药食同源食材，调配专属养生茶方，在日常饮品中呵护健康。',
  },
  {
    number: '叁',
    title: '体质调理',
    description: '通过中医体质辨识，提供个性化的饮食建议和食养方案。',
  },
]

export default function TherapySection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <SectionTitle
          eyebrow="药食同源"
          title="食养小屋"
          subtitle="秉承「药食同源」的传统理念，将中医食养智慧与现代营养科学相融合，为您提供个性化的食疗方案和养生指导。"
        />

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-3">
          {therapies.map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.1}>
              <div className="group">
                <div className="relative pb-6">
                  <span className="font-serif text-2xl text-warm-400 transition-colors duration-300 group-hover:text-gold-500">
                    {t.number}
                  </span>
                  <span className="absolute bottom-0 left-0 h-px w-full bg-warm-300" />
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 ease-out group-hover:w-full" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold tracking-wide text-ink-900">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{t.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-16">
            <Button href="/contact" variant="primary">
              了解食养方案
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
