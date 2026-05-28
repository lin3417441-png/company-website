import type { Metadata } from 'next'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: '联系我们',
  description: '欢迎联系能仁堂集团，获取专业的中医健康咨询和服务支持',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-20 sm:py-28">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            联系我们
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gold-300">
            期待您的咨询，我们将竭诚为您服务
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 80L1440 80V60C1200 40 960 20 720 30C480 40 240 60 0 80Z" fill="var(--color-warm-50)" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-custom mx-auto max-w-2xl">
          <ContactInfo />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-ink-900">
            常见问题
          </h2>
          <div className="space-y-4">
            {[
              { q: '如何预约挂号？', a: '您可以通过电话预约（0592-5156156），或直接到门诊前台挂号。' },
              { q: '中医院和门诊部有什么区别？', a: '中医院为二级中医院，功能齐全，可提供更全面的中医诊疗服务；门诊部为专业门诊部，各有特色专科。' },
              { q: '药房可以代煎中药吗？', a: '可以。能仁堂大药房提供专业代煎服务，方便快捷。' },
              { q: '药食同源门店需要预约吗？', a: '建议提前预约，以便为您安排专属的食养顾问。到店体验无需预约。' },
              { q: '研学课程如何报名？', a: '您可以通过电话或在线留言报名，我们会为您安排合适的课程。' },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-md border border-warm-200 bg-warm-50 p-4">
                <summary className="cursor-pointer font-serif font-bold text-ink-900 marker:text-primary-500">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
