import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { courses } from '@/lib/services-data'

export default function EducationSection() {
  return (
    <section className="section-padding bg-warm-100">
      <div className="container-custom">
        <SectionTitle
          eyebrow="文化研学"
          title="中医研学中心"
          subtitle="将此深心奉医道，是则名为报师恩。两个研学基地面向大众开展丰富多彩的中医文化体验活动，让更多人了解中医、热爱中医、受益于中医。"
        />

        <div className="grid gap-x-12 sm:grid-cols-2">
          {courses.map((course, i) => (
            <AnimatedSection key={course.id} delay={i * 0.08}>
              <div className="group border-t border-warm-300 py-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-gold-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold tracking-wide text-ink-900 transition-colors group-hover:text-primary-700">
                      {course.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-16">
            <Button href="/contact" variant="primary">
              报名咨询
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
