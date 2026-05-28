interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2
        className={`font-serif text-3xl sm:text-4xl font-bold tracking-wide ${
          light ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-0.5 w-16 ${
          light ? 'bg-gold-400' : 'bg-gold-500'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? 'text-warm-300' : 'text-ink-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
