'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      // 隐藏态常驻 DOM（CSS 过渡需要），inert 让它同时退出 tab 序与无障碍树
      inert={!show}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-white shadow-lg transition-all duration-300 hover:bg-primary-800 ${
        show ? 'scale-100 opacity-100' : 'pointer-events-none scale-75 opacity-0'
      }`}
      aria-label="回到顶部"
    >
      <ChevronUp size={24} />
    </button>
  )
}
