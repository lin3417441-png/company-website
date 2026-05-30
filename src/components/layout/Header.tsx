'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-50/80 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="能仁堂" width={40} height={40} className="h-8 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-2 md:flex" onMouseLeave={() => setHoveredPath(null)}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive || hoveredPath === link.href
                    ? 'text-primary-700'
                    : 'text-ink-700'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {hoveredPath === link.href && (
                  <motion.div
                    layoutId="header-hover-bg"
                    className="absolute inset-0 z-0 rounded-lg bg-primary-50"
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

        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-lg p-2 text-ink-700 hover:bg-warm-200 md:hidden"
          aria-label="打开菜单"
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
