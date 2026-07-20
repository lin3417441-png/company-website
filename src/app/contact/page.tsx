import type { Metadata } from 'next'
import ContactInfo from '@/components/contact/ContactInfo'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: '联系我们',
  description: '欢迎联系能仁堂集团，获取专业的中医健康咨询和服务支持',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="联系我们"
        subtitle="期待您的咨询，我们将竭诚为您服务"
      />

      <section className="section-padding bg-warm-50">
        <div className="container-custom mx-auto max-w-2xl">
          <ContactInfo />
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
          <div>
            {[
              { q: '如何预约挂号？', a: '您可以通过电话预约（0592-5156156），或直接到门诊前台挂号。' },
              { q: '中医院和门诊部有什么区别？', a: '中医院为二级中医院，功能齐全，可提供更全面的中医诊疗服务；门诊部为专业门诊部，各有特色专科。' },
              { q: '中医院/门诊可以代煎中药吗？', a: '各网点均提供专业中药代煎服务，支持门店自提与快递邮寄，方便您灵活取药。' },
              { q: '如何联系药食同源门店（食养小屋）', a: '地址：厦门市湖里区岭南里47-102号 电话：13860424145' },
              { q: '研学课程如何报名？', a: '您可以通过电话或微信公众号联系我们，会为您安排合适的课程。' },
              { q: '每个门店都可以使用医保吗？', a: '是的，每个门店均可使用医保，具体政策可以查询医保网站或联系我们，门店会为您清晰解答。' },
            ].map((faq) => (
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
