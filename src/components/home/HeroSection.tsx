import { MapPin, Phone, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import { SITE_CONFIG, BUSINESS_HOURS } from '@/lib/constants'

const heroInfo = [
  { icon: Phone, label: '预约咨询', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: MapPin, label: '旗舰门诊', value: SITE_CONFIG.address },
  { icon: Clock, label: '门诊时间', value: BUSINESS_HOURS.clinic.display },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary-900">
      {/* 背景层次：径向金光 + 噪点 */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold-500/15 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-5%] h-[28rem] w-[28rem] rounded-full bg-primary-600/40 blur-3xl" />
        <div className="absolute inset-0 bg-noise opacity-60" />
      </div>

      {/* 右侧装饰：书法水印 + 竖排文字（仅大屏） */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none font-calligraphy text-[22rem] leading-none text-warm-100/[0.045] lg:block"
      >
        仁
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-24 top-1/2 hidden -translate-y-1/2 select-none vertical-text font-serif text-lg text-warm-300/40 lg:block"
      >
        承岐黄薪火 · 守古法初心
      </div>

      <div className="container-custom relative z-10 pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.4em] text-gold-400">
              始于 {SITE_CONFIG.founded} · 厦门
            </span>
          </div>

          <h1 className="mt-8 font-serif text-5xl font-bold leading-[1.15] tracking-wide text-warm-50 sm:text-6xl lg:text-7xl">
            能仁堂集团
          </h1>

          <p className="mt-6 font-calligraphy text-3xl leading-snug text-gold-300 sm:text-4xl">
            能仁大愿 · 仁心仁术
          </p>

          <p className="mt-8 max-w-xl text-base leading-loose tracking-wide text-warm-300 sm:text-lg">
            传承精华，守正创新。集中医诊疗、康复疗养、文化研学、健康科技于一体的综合医疗集团，由多位三甲医院退休主任级专家领衔坐诊。
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Button href="/contact" variant="secondary" size="lg">
              预约咨询
            </Button>
            <Button
              href="/about"
              variant="ghost"
              size="lg"
              className="text-warm-200 hover:text-gold-300"
            >
              了解集团 &rarr;
            </Button>
          </div>
        </div>

        {/* 底部信息条 */}
        <div className="mt-20 grid gap-6 border-t border-warm-100/10 pt-8 animate-fade-up-delay sm:mt-24 sm:grid-cols-3 lg:mt-28">
          {heroInfo.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <item.icon size={18} className="shrink-0 text-gold-500" />
              <div>
                <p className="text-xs tracking-[0.25em] text-warm-400">{item.label}</p>
                {'href' in item && item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block font-medium tracking-wide text-warm-100 transition-colors hover:text-gold-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium tracking-wide text-warm-100">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
