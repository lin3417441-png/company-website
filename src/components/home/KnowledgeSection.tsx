import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { FEATURE_PROJECTS } from '@/lib/constants'

export default function KnowledgeSection() {
  return (
    <section className="section-padding bg-warm-100">
      <div className="container-custom">
        <SectionTitle
          eyebrow="特色诊疗"
          title="八大特色项目"
          subtitle="理疗治其外，中药调其内，内外兼治。"
        />

        <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_PROJECTS.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.06}>
              <div className="group border-t border-warm-300 py-6 transition-colors">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm text-gold-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg font-bold tracking-wide text-ink-900 transition-colors group-hover:text-primary-700">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
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
