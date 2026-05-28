interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'gold' | 'cinnabar'
}

const variantStyles = {
  primary: 'bg-primary-100 text-primary-700',
  gold: 'bg-gold-100 text-gold-700',
  cinnabar: 'bg-cinnabar-100 text-cinnabar-700',
}

export default function Badge({ children, variant = 'primary' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}
