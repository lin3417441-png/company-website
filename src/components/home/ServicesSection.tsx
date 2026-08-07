import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

const services = [
  {
    number: '壹',
    title: '医疗诊疗',
    description: '四家门诊部、一家二级中医院，由多位三甲医院退休主任级专家领衔坐诊，提供权威精准的中医诊疗。',
    href: '/services',
  },
  {
    number: '贰',
    title: '药食同源',
    description: '秉承"药食同源"理念，提供个性化食疗方案和养生指导，让中医智慧融入日常生活。',
    href: '/wellness',
  },
  {
    number: '叁',
    title: '文化研学',
    description: '两个中医药研学中心，搭建医道文化传播平台，培育中医新生力量，弘扬中华传统医道文化。',
    href: '/wellness',
  },
  {
    number: '肆',
    title: '健康科技',
    description: '拥有多项自主专利的健康科技公司，致力于中医药健康产品的研发与创新。',
    href: '/services',
  },
]

export default function ServicesSection() {
  return (
    // 渐变底改纯 warm-50：多向渐变在大面积上会显脏，纯暖白更接近纸
    <section className="section-padding relative overflow-hidden bg-warm-50">
      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="全产业链生态"
          title="医疗诊疗 · 康复疗养 · 文化研学 · 健康科技"
          subtitle="以中医诊疗为核心，构建覆盖预防、治疗、康复、养生的完整健康服务体系。"
        />

        {/* 栏间距从 gap-x-8 拉到 gap-x-14，四栏在 lg 断点改三栏 —— 宁可换行也不挤 */}
        <div className="grid gap-x-14 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              {/* 白卡片 + 圆角 + 投影 + hover 抬起是 SaaS 的语言，贴在暖纸底上
                  像另贴一张打印纸。改用站内 KnowledgeSection 已有的细线分栏，
                  悬浮时金线自左向右延展、墨色加深，而不是整块浮起来。 */}
              <Link href={service.href} className="group flex h-full flex-col">
                <div className="relative pb-5">
                  <span className="font-serif text-3xl text-warm-500 transition-colors duration-300 group-hover:text-gold-600">
                    {service.number}
                  </span>
                  <span className="absolute bottom-0 left-0 h-px w-full bg-warm-300" />
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 ease-out group-hover:w-full" />
                </div>

                <h3 className="mt-6 font-serif text-xl tracking-wide text-ink-900 transition-colors group-hover:text-primary-700">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-loose text-ink-600">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary-600 transition-colors group-hover:text-primary-800">
                  了解更多
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
