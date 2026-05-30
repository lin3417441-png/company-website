'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { teamMembers } from '@/lib/services-data'

export default function TeamSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <SectionTitle title="专家团队" subtitle="名医荟萃，值得信赖" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.id} delay={i * 0.1}>
              <div className="h-full rounded-lg bg-warm-50 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 font-serif text-xl font-bold text-primary-700">
                  {member.name.slice(0, 1)}
                </div>
                <h3 className="font-serif text-lg font-bold text-ink-900">{member.name}</h3>
                <p className="text-sm font-medium text-gold-600">{member.role}</p>
                <p className="mt-1 text-xs text-primary-600">{member.specialties}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
