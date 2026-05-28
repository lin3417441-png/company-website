'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-50/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-lg font-bold text-primary-700 sm:text-xl">
            能仁堂
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-primary-700'
                  : 'text-ink-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold-500" />
              )}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-md p-2 text-ink-700 hover:bg-warm-200 md:hidden"
          aria-label="打开菜单"
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
