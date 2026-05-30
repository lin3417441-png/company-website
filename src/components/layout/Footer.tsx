import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-warm-300">
      <div className="container-custom py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 集团介绍 */}
          <div>
            <Image src="/logo.png" alt="能仁堂" width={80} height={80} className="mb-4 h-20 w-auto rounded-lg bg-warm-50 p-1.5" />
            <p className="text-sm leading-relaxed text-warm-400">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-warm-100">
              快速链接
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-400 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-warm-100">
              联系我们
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-warm-400">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" />
                {SITE_CONFIG.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-400">
                <Phone size={18} className="shrink-0 text-gold-500" />
                {SITE_CONFIG.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-400">
                <Mail size={18} className="shrink-0 text-gold-500" />
                {SITE_CONFIG.email}
              </li>
            </ul>
          </div>

          {/* 公众号 */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-warm-100">
              关注我们
            </h4>
            <div className="mt-4">
              <Image
                src="/wechat-qr.jpg"
                alt="微信公众号二维码"
                width={128}
                height={128}
                className="rounded-lg"
              />
              <p className="mt-2 text-sm text-warm-500">微信公众号</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-warm-800">
        <div className="container-custom flex flex-col items-center justify-between gap-2 py-6 text-xs text-warm-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. 保留所有权利.</p>
          <p>能者仁心 · 传承创新</p>
        </div>
      </div>
    </footer>
  )
}
