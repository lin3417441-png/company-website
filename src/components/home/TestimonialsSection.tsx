import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { testimonials } from '@/lib/services-data'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <SectionTitle
          eyebrow="患者心声"
          title="他们的信任，是我们最大的动力"
        />

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
