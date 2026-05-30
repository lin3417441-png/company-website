'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { testimonials } from '@/lib/services-data'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-warm-100">
      <div className="container-custom">
        <SectionTitle title="患者心声" subtitle="他们的信任是我们最大的动力" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <div className="relative h-full rounded-lg bg-warm-50 p-6 shadow-sm transition-all duration-200 ease-out">
                <Quote size={32} className="mb-3 text-gold-300" />
                <p className="text-sm leading-relaxed text-ink-600">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="mt-4 border-t border-warm-200 pt-4">
                  <p className="font-serif font-bold text-ink-800">{t.name}</p>
                  <p className="text-xs text-ink-400">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
