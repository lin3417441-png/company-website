import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Clock, Pill, ShieldCheck, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: '能仁堂药业',
  description: '以常用药品和康复医疗器械为双核心，专注为周边社区居民提供一站式健康用品服务',
}

export default function PharmacyDetailPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-20 sm:py-28">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            能仁堂药业
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gold-300">
            买得放心、用得安心 — 您身边的健康补给站
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 80L1440 80V60C1200 40 960 20 720 30C480 40 240 60 0 80Z" fill="var(--color-warm-50)" />
          </svg>
        </div>
      </section>

      {/* 门店图片 + 公司介绍 */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/pharmacy.jpg"
                alt="能仁堂药业门店"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-ink-900">关于能仁堂药业</h2>
              <p className="mt-6 text-lg leading-loose tracking-wide text-ink-600">
                能仁堂药业公司以"常用药品 + 康复医疗器械"为双核心，专注为周边社区居民提供一站式健康用品服务。
              </p>
              <p className="mt-4 text-lg leading-loose tracking-wide text-ink-600">
                公司经营品类涵盖家庭常备药、常用中西药品、外用制剂等，品类齐全、质量可靠，满足日常用药需求。同时，公司精选引入轮椅、拐杖、助行器、医用护理床、血压计、血糖仪及各类理疗器械等合规医疗器械，为术后康复、慢病管理及老年人居家照护提供专业设备支持。
              </p>
              <p className="mt-4 text-lg leading-loose tracking-wide text-ink-600">
                依托严格的质量管理体系与执业药师驻店指导，能仁堂药业从源头把关、规范经营，确保每一件药品与器械来源可溯、安全合规，致力成为居民身边"买得放心、用得安心"的健康补给站。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 双核心业务 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-ink-900">双核心业务</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-md border border-warm-200 bg-warm-50 p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                <Pill size={28} className="text-primary-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900">常用药品</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                涵盖家庭常备药、常用中西药品、外用制剂等，品类齐全、质量可靠，满足日常用药需求。
              </p>
            </div>
            <div className="rounded-md border border-warm-200 bg-warm-50 p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                <ShieldCheck size={28} className="text-primary-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900">康复医疗器械</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                精选轮椅、拐杖、助行器、医用护理床、血压计、血糖仪及各类理疗器械，为术后康复、慢病管理及老年人居家照护提供专业设备支持。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 品质保障 */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-ink-900">品质保障</h2>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <Heart size={32} className="text-primary-600" />
              </div>
            </div>
            <p className="text-lg leading-loose tracking-wide text-ink-600">
              依托严格的质量管理体系与执业药师驻店指导，从源头把关、规范经营，确保每一件药品与器械来源可溯、安全合规。
            </p>
          </div>
        </div>
      </section>

      {/* 门店信息 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-ink-900">门店信息</h2>
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="flex items-start gap-4 rounded-md bg-warm-50 p-4 shadow-sm">
              <div className="shrink-0 rounded-lg bg-primary-100 p-2.5">
                <MapPin size={20} className="text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-400">门店地址</p>
                <p className="font-medium text-ink-800">福建省厦门市湖里区祥店路岭南里48-101-1号(建发中央天成东门南侧商铺)</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-md bg-warm-50 p-4 shadow-sm">
              <div className="shrink-0 rounded-lg bg-primary-100 p-2.5">
                <Clock size={20} className="text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-400">营业时间</p>
                <p className="font-medium text-ink-800">周一至周日 8:00-21:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
