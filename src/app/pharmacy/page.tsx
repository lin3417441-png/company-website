import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Clock } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: '能仁堂药业',
  description: '以常用药品和康复医疗器械为双核心，专注为周边社区居民提供一站式健康用品服务',
}

export default function PharmacyDetailPage() {
  return (
    <>
      <PageHero
        title="能仁堂药业"
        subtitle="买得放心、用得安心 — 您身边的健康补给站"
      />

      {/* 门店图片 + 公司介绍 */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection direction="left">
              <div className="relative">
                <div aria-hidden className="absolute -left-4 -top-4 h-full w-full rounded-md border border-gold-400/60" />
                <div className="relative overflow-hidden rounded-md shadow-lift">
                  <Image
                    src="/pharmacy.jpg"
                    alt="能仁堂药业门店"
                    width={800}
                    height={600}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold-500" />
                  <span className="text-xs font-medium tracking-[0.35em] text-gold-600">关于我们</span>
                </div>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-wide text-ink-900">关于能仁堂药业</h2>
                <p className="mt-6 leading-loose tracking-wide text-ink-600">
                  能仁堂药业公司以"常用药品 + 康复医疗器械"为双核心，专注为周边社区居民提供一站式健康用品服务。
                </p>
                <p className="mt-4 leading-loose tracking-wide text-ink-600">
                  公司经营品类涵盖家庭常备药、常用中西药品、外用制剂等，品类齐全、质量可靠，满足日常用药需求。同时，公司精选引入轮椅、拐杖、助行器、医用护理床、血压计、血糖仪及各类理疗器械等合规医疗器械，为术后康复、慢病管理及老年人居家照护提供专业设备支持。
                </p>
                <p className="mt-4 leading-loose tracking-wide text-ink-600">
                  依托严格的质量管理体系与执业药师驻店指导，能仁堂药业从源头把关、规范经营，确保每一件药品与器械来源可溯、安全合规，致力成为居民身边"买得放心、用得安心"的健康补给站。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 双核心业务 */}
      <section className="section-padding bg-warm-100">
        <div className="container-custom">
          <div className="mb-14 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.35em] text-gold-600">双核心业务</span>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            <AnimatedSection>
              <div className="border-t border-warm-300 pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-gold-600">01</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold tracking-wide text-ink-900">常用药品</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      涵盖家庭常备药、常用中西药品、外用制剂等，品类齐全、质量可靠，满足日常用药需求。
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="border-t border-warm-300 pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-gold-600">02</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold tracking-wide text-ink-900">康复医疗器械</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      精选轮椅、拐杖、助行器、医用护理床、血压计、血糖仪及各类理疗器械，为术后康复、慢病管理及老年人居家照护提供专业设备支持。
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 品质保障 */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-calligraphy text-4xl leading-snug text-primary-700 sm:text-5xl">
                买得放心 · 用得安心
              </p>
              <p className="mt-6 leading-loose tracking-wide text-ink-600">
                依托严格的质量管理体系与执业药师驻店指导，从源头把关、规范经营，确保每一件药品与器械来源可溯、安全合规。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 门店信息 */}
      <section className="section-padding bg-warm-100">
        <div className="container-custom">
          <div className="mb-14 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.35em] text-gold-600">门店信息</span>
          </div>
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            <div className="flex items-start gap-4 border-t border-warm-300 pt-6">
              <MapPin size={18} className="mt-1 shrink-0 text-gold-600" />
              <div>
                <p className="text-xs font-medium tracking-[0.3em] text-ink-400">门店地址</p>
                <p className="mt-2 font-medium leading-relaxed text-ink-800">福建省厦门市湖里区祥店路岭南里48-101-1号（建发中央天成东门南侧商铺）</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-t border-warm-300 pt-6">
              <Clock size={18} className="mt-1 shrink-0 text-gold-600" />
              <div>
                <p className="text-xs font-medium tracking-[0.3em] text-ink-400">营业时间</p>
                <p className="mt-2 font-medium text-ink-800">周一至周日 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
