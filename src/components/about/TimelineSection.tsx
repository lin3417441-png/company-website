import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { timeline } from '@/lib/services-data'

export default function TimelineSection() {
  return (
    <section className="section-padding bg-warm-100">
      <div className="container-custom">
        <SectionTitle eyebrow="发展历程" title="一步一个脚印，稳健前行" />

        {/* 去掉 rounded-2xl bg-white + shadow-lift 的白色大卡片：
            白纸贴在暖纸底上像另贴一张打印纸。时间轴本身的竖线已经足够
            界定这块内容，不需要再套一个容器。 */}
        <div>
          <div className="relative mx-auto max-w-3xl">
            {/* 竖线 */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-warm-300 sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((event, i) => (
              <AnimatedSection
                key={event.year}
                delay={i * 0.1}
                direction={i % 2 === 0 ? 'left' : 'right'}
              >
                <div className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}>
                  {/* 菱形节点 */}
                  <div className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-2 border-gold-500 bg-warm-100 sm:left-1/2" />

                  <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'} pl-10 sm:pl-0`}>
                    <span className="font-serif text-3xl tracking-wide text-gold-600">{event.year}</span>
                    <h3 className="mt-1 font-serif text-lg font-bold tracking-wide text-ink-900">{event.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{event.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
