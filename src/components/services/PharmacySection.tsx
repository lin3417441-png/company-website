import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { HerbalDecoration } from '@/components/ui/Decorations'

const otherServices = [
  {
    number: '壹',
    title: '能仁堂大药房',
    desc: '严选全国道地药材产区优质中药材，提供中药饮片、中成药及专业代煎服务。',
  },
  {
    number: '贰',
    title: '药食同源门店（食养小屋）',
    desc: '秉承"药食同源"理念，将中医食养智慧与现代营养科学融合，提供个性化食疗方案。',
  },
  {
    number: '叁',
    title: '健康科技公司',
    desc: '拥有多项自主专利，致力于中医药健康产品的研发与创新，推动中医药现代化。',
  },
]

const pharmacyFeatures = [
  { title: '道地药材', desc: '严选全国道地药材产区优质中药材' },
  { title: '代煎服务', desc: '现代化煎煮设备，方便快捷' },
  { title: '专业药师', desc: '执业中药师团队驻店指导' },
]

export default function PharmacySection() {
  return (
    <section className="section-padding bg-gradient-to-br from-warm-100 via-warm-50 to-primary-50/20 relative overflow-hidden">
      {/* Task 5: 草药装饰 — 代表药材与药食同源 */}
      <HerbalDecoration className="opacity-[0.06] top-auto bottom-0" />

      {/* Task 5: 大号书法字 — "药"字代表药事服务 */}
      <span
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 font-calligraphy text-[20rem] text-gold-500/[0.02] select-none pointer-events-none"
      >
        药
      </span>

      <div className="container-custom relative z-10">
        <SectionTitle eyebrow="药事服务" title="药事与健康服务" subtitle="道地药材，品质保障。" />

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-3">
          {otherServices.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="group">
                <div className="relative pb-6">
                  <span className="font-serif text-2xl text-warm-400 transition-colors duration-300 group-hover:text-gold-500">
                    {service.number}
                  </span>
                  <span className="absolute bottom-0 left-0 h-px w-full bg-warm-300" />
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 ease-out group-hover:w-full" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-bold tracking-wide text-ink-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 药房特色 */}
        <AnimatedSection>
          <div className="mt-20 rounded-md border-l-4 border-gold-500 bg-warm-50 p-8 shadow-soft sm:p-10">
            <h3 className="font-serif text-xl font-bold tracking-wide text-ink-900">药房特色服务</h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {pharmacyFeatures.map((f, i) => (
                <div key={f.title} className="flex items-baseline gap-3">
                  <span className="font-serif text-sm text-gold-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-serif font-bold text-ink-900">{f.title}</p>
                    <p className="mt-1 text-sm text-ink-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-16">
            <Button href="/contact" variant="primary">
              咨询了解更多
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
