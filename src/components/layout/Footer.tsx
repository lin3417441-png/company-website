import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-900 text-warm-300">
      <div className="absolute inset-0 bg-noise opacity-60" />

      <div className="container-custom relative z-10 pb-12 pt-16 sm:pt-20">
        {/* 品牌行 */}
        <div className="flex flex-col gap-6 border-b border-warm-100/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-calligraphy text-3xl text-gold-300">{SITE_CONFIG.motto}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-warm-400">
              {SITE_CONFIG.description}
            </p>
          </div>
          <Image
            src="/logo.png"
            alt="能仁堂"
            width={72}
            height={72}
            className="h-16 w-auto rounded-lg bg-warm-50 p-1.5"
          />
        </div>

        <div className="grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* 快速链接 */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.35em] text-gold-400">快速链接</h4>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-400 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.35em] text-gold-400">联系我们</h4>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3 text-sm text-warm-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
                {SITE_CONFIG.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-400">
                <Phone size={16} className="shrink-0 text-gold-500" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="transition-colors hover:text-gold-300">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-400">
                <Mail size={16} className="shrink-0 text-gold-500" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="transition-colors hover:text-gold-300">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* 公众号 */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.35em] text-gold-400">关注我们</h4>
            <div className="mt-5">
              <Image
                src="/wechat-qr.jpg"
                alt="微信公众号二维码"
                width={112}
                height={112}
                className="rounded-md"
              />
              <p className="mt-2 text-xs tracking-wider text-warm-500">微信公众号</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-warm-100/10">
        <div className="container-custom flex flex-col items-center justify-between gap-2 py-6 text-xs tracking-wider text-warm-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name} · 保留所有权利</p>
          <p>能者仁心 · 传承创新</p>
        </div>
      </div>
    </footer>
  )
}
