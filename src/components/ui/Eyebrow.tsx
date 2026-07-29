interface EyebrowProps {
  children: React.ReactNode
  variant?: 'line' | 'simple' | 'centered'
  /** 浅色模式（用于深色背景） */
  light?: boolean
}

/**
 * 眉题组件 - 提供三种装饰风格，减少代码重复
 *
 * @param variant - 'line': 左侧金线（默认）| 'simple': 纯文本 | 'centered': 居中对称双线
 * @param light - 浅色模式，用于深色背景（text-gold-400 而非 text-gold-600）
 */
export default function Eyebrow({ children, variant = 'line', light = false }: EyebrowProps) {
  const textColor = light ? 'text-gold-400' : 'text-gold-600'

  // 简约风格 - 纯文本，无装饰
  if (variant === 'simple') {
    return (
      <span className={`text-xs font-medium tracking-[0.3em] uppercase ${textColor}`}>
        {children}
      </span>
    )
  }

  // 居中对称风格 - 左右金线
  if (variant === 'centered') {
    return (
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gold-500" />
        <span className={`text-xs font-medium tracking-[0.35em] uppercase ${textColor}`}>
          {children}
        </span>
        <span className="h-px w-8 bg-gold-500" />
      </div>
    )
  }

  // 默认风格 - 左侧金线
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-gold-500" />
      <span className={`text-xs font-medium tracking-[0.35em] uppercase ${textColor}`}>
        {children}
      </span>
    </div>
  )
}
