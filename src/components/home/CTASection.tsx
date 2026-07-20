import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-24 sm:py-28">
      {/* 背景层次 */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-noise opacity-60" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 bottom-[-4rem] hidden select-none font-calligraphy text-[16rem] leading-none text-warm-100/[0.05] lg:block"
      >
        仁
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.4em] text-gold-400">
              预约咨询
            </span>
          </div>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-snug tracking-wide text-warm-50 sm:text-4xl lg:text-5xl">
            开启您的健康之旅
          </h2>
          <p className="mt-5 max-w-xl leading-loose text-warm-300">
            无论是日常调理还是专业诊疗，能仁堂都将竭诚为您服务。拨打
            <a href={`tel:${SITE_CONFIG.phone}`} className="mx-1 text-gold-300 transition-colors hover:text-gold-200">
              {SITE_CONFIG.phone}
            </a>
            ，或留下您的需求。
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button href="/contact" variant="secondary" size="lg">
              联系我们
            </Button>
            <Button
              href="/services"
              variant="ghost"
              size="lg"
              className="text-warm-200 hover:text-gold-300"
            >
              查看服务 &rarr;
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
