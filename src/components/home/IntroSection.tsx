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
    <section className="border-b border-warm-200 bg-warm-50 py-14 sm:py-16 relative">
      {/* Task 5: 添加点阵背景增强视觉层次 */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 text-center sm:px-8 ${
                  i > 0 ? 'lg:border-l lg:border-warm-300' : ''
                } ${i % 2 === 1 ? 'border-l border-warm-300 lg:border-l' : ''}`}
              >
                {/* Task 6: 戏剧化字号对比 — 超大数字 + 微小标签 */}
                <dd className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-primary-800">
                  {stat.number}
                  <span className="text-2xl sm:text-3xl text-gold-600">{stat.suffix}</span>
                </dd>
                <dt className="mt-3 text-caption text-ink-500">
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
