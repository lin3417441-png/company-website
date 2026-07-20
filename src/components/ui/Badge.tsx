interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'gold' | 'cinnabar'
}

const variantStyles = {
  primary: 'border-primary-200 bg-primary-50 text-primary-700',
  gold: 'border-gold-300 bg-gold-50 text-gold-700',
  cinnabar: 'border-cinnabar-200 bg-cinnabar-50 text-cinnabar-700',
}

export default function Badge({ children, variant = 'primary' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-medium tracking-wide ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}
