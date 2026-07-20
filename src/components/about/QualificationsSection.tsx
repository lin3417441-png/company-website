import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

const quals = [
  { title: '二级中医院', desc: '功能齐全的二级中医院，提供全面中医诊疗服务' },
  { title: '三甲专家领衔', desc: '多位三甲医院退休主任级专家领衔坐诊' },
  { title: '自主专利技术', desc: '健康科技公司拥有多项自主专利' },
  { title: '百位资深医师', desc: '汇聚超百位资深医师，专业团队值得信赖' },
]

export default function QualificationsSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <SectionTitle eyebrow="值得信赖" title="集团实力" />

        <div className="grid gap-x-12 sm:grid-cols-2">
          {quals.map((q, i) => (
            <AnimatedSection key={q.title} delay={i * 0.08}>
              <div className="flex items-baseline gap-4 border-t border-warm-300 py-6">
                <span className="font-serif text-sm text-gold-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold tracking-wide text-ink-900">{q.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{q.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
