'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { FEATURE_PROJECTS } from '@/lib/constants'
import { Sparkles, Bone, Scale, Heart, CircleDot, Moon, Baby, Activity } from 'lucide-react'

const icons = [Sparkles, Bone, Scale, Heart, CircleDot, Moon, Baby, Activity]

export default function KnowledgeSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <SectionTitle title="八大特色项目" subtitle="理疗治其外，中药调其内，内外兼治" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_PROJECTS.map((project, i) => {
            const Icon = icons[i]
            return (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <div className="h-full rounded-lg bg-warm-50 p-5 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                    <Icon size={18} className="text-primary-600" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-ink-900">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {project.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
