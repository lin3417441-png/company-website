import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'cinnabar'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white shadow-soft hover:bg-primary-700 hover:shadow-primary-glow hover:-translate-y-0.5',
  secondary:
    'bg-gold-500 text-primary-900 shadow-soft hover:bg-gold-400 hover:shadow-gold-glow hover:-translate-y-0.5',
  cinnabar:
    'bg-cinnabar-500 text-white shadow-soft hover:bg-cinnabar-600 hover:shadow-md hover:-translate-y-0.5',
  outline:
    'border border-primary-300 text-primary-700 hover:border-primary-500 hover:bg-primary-50',
  ghost:
    'text-primary-600 underline-offset-4 hover:text-primary-800 hover:underline',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:scale-[0.98] active:translate-y-0'
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
