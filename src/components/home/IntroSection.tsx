import AnimatedSection from '@/components/ui/AnimatedSection'
import { clinics } from '@/lib/clinics-data'
import { FEATURE_PROJECTS, SITE_CONFIG } from '@/lib/constants'

const stats = [
  { number: String(clinics.length), suffix: '家', label: '下属机构' },
  { number: '100', suffix: '+', label: '资深医师' },
  { number: String(FEATURE_PROJECTS.length), suffix: '大', label: '特色项目' },
  { number: SITE_CONFIG.founded, suffix: '', label: '创立于厦门' },
]

export default function IntroSection() {
  return (
    <section className="border-b border-warm-200 bg-warm-50 py-14 sm:py-16">
      <div className="container-custom">
        <AnimatedSection>
          <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 text-center sm:px-8 ${
                  i > 0 ? 'lg:border-l lg:border-warm-300' : ''
                } ${i % 2 === 1 ? 'border-l border-warm-300 lg:border-l' : ''}`}
              >
                <dd className="font-serif text-4xl font-bold tracking-wide text-primary-800 sm:text-5xl">
                  {stat.number}
                  <span className="ml-1 text-xl text-gold-600">{stat.suffix}</span>
                </dd>
                <dt className="mt-2 text-xs font-medium tracking-[0.3em] text-ink-500 sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </AnimatedSection>
      </div>
    </section>
  )
}
