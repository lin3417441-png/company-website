interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  /** 入场延迟（秒），用于同组元素的错落效果 */
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

/**
 * 滚动入场容器。
 *
 * 纯服务端组件：只输出 data-reveal 标记，隐藏态与过渡全部交给 CSS，
 * 触发逻辑由 layout.tsx 的内联脚本 + RevealController 承担。
 *
 * 这样 SSR 产出的 HTML 不含 opacity:0，内容对爬虫可见、不拖慢 LCP，
 * 且整棵子树无需 client bundle。
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  return (
    <div
      data-reveal={direction}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={className}
    >
      {children}
    </div>
  )
}
