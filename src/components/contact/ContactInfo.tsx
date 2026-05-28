'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { MapPin, Phone, Mail, Clock, Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const info = [
  { icon: MapPin, label: '集团地址', value: SITE_CONFIG.address },
  { icon: Phone, label: '咨询电话', value: SITE_CONFIG.phone },
  { icon: Mail, label: '电子邮箱', value: SITE_CONFIG.email },
  { icon: Clock, label: '工作时间', value: '周一至周日 9:00 - 18:00' },
  { icon: Search, label: '美团搜索', value: '美团搜索"能仁堂"也可找到我们' },
]

export default function ContactInfo() {
  return (
    <AnimatedSection direction="left">
      <div>
        <h2 className="mb-6 font-serif text-2xl font-bold text-ink-900">联系方式</h2>
        <div className="space-y-4">
          {info.map((item) => (
            <div key={item.label} className="flex items-start gap-4 rounded-md bg-white p-4 shadow-sm">
              <div className="shrink-0 rounded-lg bg-primary-100 p-2.5">
                <item.icon size={20} className="text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-400">{item.label}</p>
                <p className="font-medium text-ink-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
