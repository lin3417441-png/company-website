import AnimatedSection from '@/components/ui/AnimatedSection'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const info = [
  { icon: MapPin, label: '集团地址', value: SITE_CONFIG.address },
  { icon: Phone, label: '咨询电话', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: Mail, label: '电子邮箱', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: Clock, label: '工作时间', value: '周一至周日 9:00 - 18:00' },
]

export default function ContactInfo() {
  return (
    <AnimatedSection direction="left">
      <div className="mx-auto max-w-2xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {info.map((item) => (
            <div
              key={item.label}
              className="group flex items-start gap-4 rounded-lg border border-warm-200 bg-warm-50/60 p-5 transition-all duration-300 hover:border-gold-300 hover:bg-warm-50 hover:shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold-100 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-primary-900">
                <item.icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-[0.25em] text-ink-400">
                  {item.label}
                </p>
                {'href' in item && item.href ? (
                  <a
                    href={item.href}
                    className="mt-1.5 block break-words font-serif text-base font-medium text-ink-800 transition-colors hover:text-primary-600"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1.5 break-words font-serif text-base font-medium text-ink-800">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}