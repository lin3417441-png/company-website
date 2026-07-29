import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { FEATURE_PROJECTS } from '@/lib/constants'
import { HerbalDecoration } from '@/components/ui/Decorations'

export default function KnowledgeSection() {
  return (
    <section className="section-padding bg-primary-800 text-warm-50 relative overflow-hidden">
      {/* Task 5: 草药装饰 — 代表特色诊疗项目 */}
      <HerbalDecoration className="opacity-[0.08]" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="特色诊疗"
          title="八大特色项目"
          subtitle="理疗治其外，中药调其内，内外兼治。"
          eyebrowVariant="simple"
          light
        />

        <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_PROJECTS.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.06}>
              <div className="group border-t border-warm-300/30 py-6 transition-colors hover:border-gold-400">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 text-white text-xs font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg font-bold tracking-wide text-warm-50 transition-colors group-hover:text-gold-300">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-warm-300 pl-11">
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
