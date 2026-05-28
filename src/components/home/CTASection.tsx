'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary-800 py-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-gold-400 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            开启您的健康之旅
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-warm-300">
            无论是日常调理还是专业诊疗，能仁堂都将竭诚为您服务
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              联系我们
            </Button>
            <Button
              href="/services"
              variant="ghost"
              size="lg"
              className="text-warm-200 hover:bg-warm-200/10"
            >
              查看服务
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
