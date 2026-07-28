import type { Metadata } from 'next'
import Image from 'next/image'
import ContactInfo from '@/components/contact/ContactInfo'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import JsonLd from '@/components/ui/JsonLd'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { GROUP_ADDRESS, SITE_CONFIG, openingHoursSpec } from '@/lib/constants'

export const metadata: Metadata = {
  title: '联系我们',
  description: '欢迎联系能仁堂集团，获取专业的中医健康咨询和服务支持',
  alternates: { canonical: '/contact' },
}

const MAP_URL =
  'https://uri.amap.com/marker?position=118.085,24.485&name=能仁堂集团&src=nengrentang&coordinate=gaode&callnative=1'

const faqItems = [
  { q: '如何预约挂号？', a: '您可以通过电话预约（0592-5156156），或直接到门诊前台挂号。' },
  { q: '中医院和门诊部有什么区别？', a: '中医院为二级中医院，功能齐全，可提供更全面的中医诊疗服务；门诊部为专业门诊部，各有特色专科。' },
  { q: '中医院/门诊可以代煎中药吗？', a: '各网点均提供专业中药代煎服务，支持门店自提与快递邮寄，方便您灵活取药。' },
  { q: '如何联系药食同源门店（食养小屋）', a: '地址：厦门市湖里区岭南里47-102号 电话：13860424145' },
  { q: '研学课程如何报名？', a: '您可以通过电话或微信公众号联系我们，会为您安排合适的课程。' },
  { q: '每个门店都可以使用医保吗？', a: '是的，每个门店均可使用医保，具体政策可以查询医保网站或联系我们，门店会为您清晰解答。' },
]

const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: `${SITE_CONFIG.url}/contact`,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: GROUP_ADDRESS,
  geo: {
    '@type': 'GeoCoordinates',
    longitude: 118.085,
    latitude: 24.485,
  },
  openingHoursSpecification: openingHoursSpec('clinic'),
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />
      <PageHero
        title="联系我们"
        subtitle="期待您的咨询，我们将竭诚为您服务"
      />

      {/* CTA bar + ContactInfo */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom mx-auto max-w-3xl">
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button
              href={`tel:${SITE_CONFIG.phone}`}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Phone size={18} className="mr-2" />
              一键拨号 {SITE_CONFIG.phone}
            </Button>
            <Button
              href="#wechat"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageCircle size={18} className="mr-2" />
              微信咨询
            </Button>
            <Button
              href={MAP_URL}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MapPin size={18} className="mr-2" />
              打开地图
            </Button>
          </div>
          <div className="mx-auto max-w-2xl">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* WeChat QR */}
      <section id="wechat" className="section-padding bg-warm-100">
        <div className="container-custom mx-auto max-w-md text-center">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.35em] text-gold-600">微信关注</span>
            <span className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-wide text-ink-900">
            微信公众号：能仁堂集团
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-ink-500">
            扫码添加，获取最新门诊动态与健康资讯
          </p>
          <div className="inline-block rounded-lg border border-warm-200 bg-warm-50 p-4 shadow-soft">
            <Image
              src="/wechat-qr.jpg"
              alt="扫码关注能仁堂公众号"
              width={200}
              height={200}
              className="h-[200px] w-[200px] rounded-md object-contain"
            />
          </div>
          <p className="mt-4 text-xs tracking-wider text-ink-400">扫码关注能仁堂公众号</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-warm-100">
        <div className="container-custom mx-auto max-w-3xl">
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-500" />
              <span className="text-xs font-medium tracking-[0.35em] text-gold-600">常见问题</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-wide text-ink-900">
              您可能想了解
            </h2>
          </div>
          <JsonLd data={faqPageJsonLd} />
          <div>
            {faqItems.map((faq) => (
              <details key={faq.q} className="group border-t border-warm-300 last:border-b">
                <summary className="cursor-pointer py-5 font-serif font-bold tracking-wide text-ink-900 transition-colors marker:text-gold-500 hover:text-primary-700">
                  {faq.q}
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-ink-500">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
