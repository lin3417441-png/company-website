interface SectionTitleProps {
  title: string
  subtitle?: string
  /** 眉题（标题上方的小标签，如 "SERVICES"） */
  eyebrow?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  light = false,
}: SectionTitleProps) {
  const centered = align === 'center'
  return (
    <div className={`mb-14 sm:mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gold-500" />
          <span className="text-xs font-medium tracking-[0.35em] text-gold-600">
            {eyebrow}
          </span>
          {centered && <span className="h-px w-8 bg-gold-500" />}
        </div>
      )}
      <h2
        className={`mt-4 font-serif text-3xl font-bold leading-tight tracking-wide text-balance sm:text-4xl lg:text-[2.75rem] ${
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
