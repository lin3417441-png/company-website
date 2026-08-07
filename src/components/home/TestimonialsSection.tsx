import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { testimonials } from '@/lib/services-data'

export default function TestimonialsSection() {
  return (
    /* 渐变收在 warm-100 而不是 warm-200：下一块 KnowledgeSection 已改为
       warm-100 浅底，收到 200 再跳回 100 会出现一道往回变亮的接缝 */
    <section className="section-padding bg-gradient-to-b from-warm-50 to-warm-100">
      <div className="container-custom">
        <SectionTitle
          eyebrow="患者心声"
          title="他们的信任，是我们最大的动力"
          align="center"
        />

        <div className="grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.08}>
              <figure className="flex h-full flex-col border-t-2 border-gold-500/60 pt-6">
                <span aria-hidden className="font-serif text-4xl leading-none text-gold-400">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-sm leading-loose text-ink-600">
                  {t.content}
                </blockquote>
                <figcaption className="mt-6 flex items-baseline gap-3">
                  <span className="font-serif font-bold text-ink-900">{t.name}</span>
                  <span className="text-xs tracking-wider text-ink-400">{t.role}</span>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
