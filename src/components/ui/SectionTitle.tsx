import Eyebrow from '@/components/ui/Eyebrow'

interface SectionTitleProps {
  title: string
  subtitle?: string
  /** 眉题（标题上方的小标签，如 "SERVICES"） */
  eyebrow?: string
  /** 眉题装饰风格 */
  eyebrowVariant?: 'line' | 'simple' | 'centered'
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  eyebrowVariant,
  align = 'left',
  light = false,
}: SectionTitleProps) {
  const centered = align === 'center'
  // 自动推断 eyebrowVariant：centered 对齐用 'centered'，否则用 'line'
  const variant = eyebrowVariant || (centered ? 'centered' : 'line')

  return (
    <div className={`mb-14 sm:mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <Eyebrow variant={variant} light={light}>
          {eyebrow}
        </Eyebrow>
      )}
      {/* Task 6: 使用 text-h2 section 标题 */}
      <h2
        className={`mt-4 font-serif text-h2 leading-tight text-balance ${
          light ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-warm-300' : 'text-ink-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
