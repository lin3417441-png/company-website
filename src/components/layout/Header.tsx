'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-warm-200 bg-warm-50/85 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-2 rounded bg-warm-50/95 p-1.5 shadow-soft">
           <div className="relative h-7 w-20 sm:h-9 sm:w-24">
             <Image src="/logo.png" alt="能仁堂" fill className="object-contain" />
           </div>
         </Link>

        <nav className="hidden items-center gap-2 md:flex" onMouseLeave={() => setHoveredPath(null)}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            const highlighted = isActive || hoveredPath === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                className={`relative rounded-md px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? highlighted
                      ? 'text-primary-700'
                      : 'text-ink-700'
                    : highlighted
                      ? 'text-gold-300'
                      : 'text-warm-200'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {hoveredPath === link.href && (
                  <motion.div
                    layoutId="header-hover-bg"
                    className={`absolute inset-0 z-0 rounded-md ${
                      scrolled ? 'bg-primary-50' : 'bg-warm-100/10'
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="header-active-line"
                    className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="hidden items-center gap-2 rounded-md bg-gold-500 px-4 py-2 text-sm font-medium tracking-wide text-primary-900 shadow-soft transition-all duration-300 hover:bg-gold-400 hover:shadow-gold-glow md:flex"
          >
            <Phone size={15} />
            {SITE_CONFIG.phone}
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            className={`rounded-lg p-2 transition-colors md:hidden ${
              scrolled ? 'text-ink-700 hover:bg-warm-200' : 'text-warm-100 hover:bg-warm-100/10'
            }`}
            aria-label="打开菜单"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
