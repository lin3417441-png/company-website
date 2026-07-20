import AnimatedSection from '@/components/ui/AnimatedSection'
import { MapPin, Phone, Mail, Clock, Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const info = [
  { icon: MapPin, label: '集团地址', value: SITE_CONFIG.address },
  { icon: Phone, label: '咨询电话', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: Mail, label: '电子邮箱', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: Clock, label: '工作时间', value: '周一至周日 9:00 - 18:00' },
  { icon: Search, label: '美团搜索', value: '美团搜索"能仁堂"也可找到我们' },
]

export default function ContactInfo() {
  return (
    <AnimatedSection direction="left">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-0">
          {info.map((item) => (
            <div key={item.label} className="flex items-center gap-5 border-t border-warm-300 py-5 last:border-b">
              <item.icon size={18} className="shrink-0 text-gold-600" />
              <p className="w-24 shrink-0 text-xs font-medium tracking-[0.25em] text-ink-400 sm:w-28">
                {item.label}
              </p>
              {'href' in item && item.href ? (
                <a href={item.href} className="font-medium text-ink-800 transition-colors hover:text-primary-600">
                  {item.value}
                </a>
              ) : (
                <p className="font-medium text-ink-800">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
