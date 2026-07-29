'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* 背景遮罩 */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      {/* 抽屉 */}
      {/*
        常驻 DOM 换来纯 CSS 过渡，代价是关闭态里的链接仍在 tab 序列里。
        inert 让整棵子树退出焦点与辅助技术，同时不影响 transform 过渡。
      */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="导航菜单"
        inert={!isOpen}
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-warm-50 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-ink-700 hover:bg-warm-200"
            aria-label="关闭菜单"
          >
            <X size={24} />
          </button>
        </div>
        <nav aria-label="移动端导航" className="px-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block rounded-lg px-4 py-3 text-lg font-medium text-ink-800 transition-colors hover:bg-primary-50 hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
