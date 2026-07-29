/**
 * 视觉装饰组件
 * 用于在关键 section 添加轻量级 SVG 装饰，增强品牌记忆度
 */

interface DecorationProps {
  className?: string
}

/**
 * 阴阳图案装饰
 * 代表中医的阴阳平衡理念
 */
export const YinYangDecoration = ({ className = '' }: DecorationProps) => (
  <svg
    className={`absolute top-0 right-0 w-64 h-64 opacity-5 text-gold-500 ${className}`}
    viewBox="0 0 100 100"
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="45" fill="currentColor" />
    <path
      d="M50 5 A45 45 0 0 1 50 95 A22.5 22.5 0 0 1 50 50 A22.5 22.5 0 0 0 50 5"
      fill="white"
    />
    <circle cx="50" cy="27.5" r="7" fill="white" />
    <circle cx="50" cy="72.5" r="7" fill="currentColor" />
  </svg>
)

/**
 * 草药枝叶装饰
 * 代表药食同源、自然养生理念
 */
export const HerbalDecoration = ({ className = '' }: DecorationProps) => (
  <svg
    className={`absolute bottom-0 left-0 w-48 h-48 opacity-5 text-primary-500 ${className}`}
    viewBox="0 0 100 100"
    aria-hidden="true"
  >
    {/* 主茎 */}
    <path
      d="M50 10 Q48 50 50 90"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* 左侧叶片 */}
    <path
      d="M50 30 Q30 25 25 35 Q30 40 50 35"
      fill="currentColor"
    />
    <path
      d="M50 50 Q25 45 20 55 Q25 65 50 55"
      fill="currentColor"
    />
    <path
      d="M50 70 Q30 68 28 78 Q33 83 50 75"
      fill="currentColor"
    />
    {/* 右侧叶片 */}
    <path
      d="M50 30 Q70 25 75 35 Q70 40 50 35"
      fill="currentColor"
    />
    <path
      d="M50 50 Q75 45 80 55 Q75 65 50 55"
      fill="currentColor"
    />
    <path
      d="M50 70 Q70 68 72 78 Q67 83 50 75"
      fill="currentColor"
    />
  </svg>
)

/**
 * 莲花装饰
 * 代表清净、和谐的医疗环境
 */
export const LotusDecoration = ({ className = '' }: DecorationProps) => (
  <svg
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] text-gold-500 ${className}`}
    viewBox="0 0 100 100"
    aria-hidden="true"
  >
    {/* 中心花蕊 */}
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    {/* 内层花瓣 */}
    <ellipse cx="50" cy="35" rx="8" ry="18" fill="currentColor" />
    <ellipse cx="50" cy="65" rx="8" ry="18" fill="currentColor" />
    <ellipse cx="35" cy="50" rx="18" ry="8" fill="currentColor" />
    <ellipse cx="65" cy="50" rx="18" ry="8" fill="currentColor" />
    {/* 外层花瓣（对角） */}
    <ellipse cx="38" cy="38" rx="10" ry="20" fill="currentColor" transform="rotate(-45 38 38)" />
    <ellipse cx="62" cy="62" rx="10" ry="20" fill="currentColor" transform="rotate(-45 62 62)" />
    <ellipse cx="62" cy="38" rx="10" ry="20" fill="currentColor" transform="rotate(45 62 38)" />
    <ellipse cx="38" cy="62" rx="10" ry="20" fill="currentColor" transform="rotate(45 38 62)" />
  </svg>
)
