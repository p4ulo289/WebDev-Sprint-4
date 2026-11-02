const variants = {
  primary: 'bg-jovi-blue text-white hover:bg-jovi-blue-dark',
  secondary: 'border border-paper-line bg-white text-ink hover:border-jovi-blue hover:text-jovi-blue',
  ghost: 'text-ink-soft hover:bg-paper hover:text-ink',
  danger: 'text-danger hover:bg-danger/10',
}

const sizes = {
  md: 'px-5 py-2.5 text-[.92rem]',
  sm: 'px-3 py-1.5 text-[.82rem]',
}

export default function Button({ variant = 'primary', size = 'md', className = '', ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition disabled:pointer-events-none disabled:opacity-50 ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
