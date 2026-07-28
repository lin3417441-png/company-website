'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * 客户端路由切换后，为新挂载的 [data-reveal] 元素重新接上观察器。
 *
 * 首屏的入场由 layout.tsx 里的内联脚本处理（早于 hydration，避免拖慢 LCP），
 * 这里只负责后续导航——否则换页后新元素会一直停在隐藏态。
 */
export default function RevealController() {
  const pathname = usePathname()

  useEffect(() => {
    // 内联脚本没加这个 class，说明用户偏好减少动效或环境不支持，无需接管
    if (!document.documentElement.classList.contains('reveal-ready')) return

    const targets = document.querySelectorAll<HTMLElement>(
      '[data-reveal]:not(.is-revealed)'
    )
    if (targets.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '-80px' }
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
