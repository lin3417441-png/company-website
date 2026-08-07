import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { FEATURE_PROJECTS } from '@/lib/constants'

export default function KnowledgeSection() {
  return (
    /* 深棕底改浅纸底：原先首页下半是 Knowledge(800) → CTA(900) → Footer(900)
       连着三块深色，纸感在后半段彻底消失。改浅之后深色只剩 Hero 与 CTA+Footer，
       成了「首尾墨、中间纸」的册页结构。 */
    <section className="section-padding relative overflow-hidden bg-warm-100">
      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="特色诊疗"
          title="八大特色项目"
          subtitle="理疗治其外，中药调其内，内外兼治。"
          eyebrowVariant="simple"
        />

        <div className="grid gap-x-12 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_PROJECTS.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.06}>
              <div className="group border-t border-warm-300 py-6 transition-colors duration-300 hover:border-gold-500">
                <div className="flex items-center gap-3">
                  {/* 实心金圆点 + 白字改细金圈 + 金字：与 TeamSection 的首字圈同一套 */}
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/50 font-serif text-xs text-gold-700">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg tracking-wide text-ink-900 transition-colors group-hover:text-primary-700">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-3 pl-11 text-sm leading-loose text-ink-600">
                  {project.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
