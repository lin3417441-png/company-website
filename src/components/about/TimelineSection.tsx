'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { timeline } from '@/lib/services-data'

export default function TimelineSection() {
  return (
    <section className="section-padding bg-warm-100">
      <div className="container-custom">
        <SectionTitle title="发展历程" subtitle="一步一个脚印，稳健前行" />

        <div className="relative mx-auto max-w-3xl">
          {/* 竖线 */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-8">
            {timeline.map((event, i) => (
              <AnimatedSection
                key={event.year}
                delay={i * 0.1}
                direction={i % 2 === 0 ? 'left' : 'right'}
              >
                <div className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}>
                  {/* 圆点 */}
                  <div className="absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-white sm:left-1/2" />

                  <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'} pl-10 sm:pl-0`}>
                    <span className="font-serif text-2xl font-bold text-gold-600">{event.year}</span>
                    <h3 className="mt-1 font-serif text-lg font-bold text-ink-900">{event.title}</h3>
                    <p className="mt-2 text-sm text-ink-500">{event.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
