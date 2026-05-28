'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { courses } from '@/lib/services-data'

export default function EducationSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="中医研学中心" subtitle="将此深心奉医道，是则名为报师恩" />

        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-ink-600 leading-relaxed">
              能仁堂搭建医道文化传播平台，以赤诚之心培育中医新生力量，弘扬中华传统医道文化。
              两个研学基地面向大众开展丰富多彩的中医文化体验活动，
              让更多人了解中医、热爱中医、受益于中医。
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {courses.map((course, i) => (
            <AnimatedSection key={course.id} delay={i * 0.1}>
              <div className="h-full rounded-md border border-warm-200 bg-warm-50 p-6">
                <h3 className="font-serif text-lg font-bold text-ink-900">
                  {course.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {course.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary">
              报名咨询
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
