const variants = {
  primary: 'border-transparent bg-jovi-blue text-white hover:bg-jovi-blue-dark',
  ghost: 'border-current hover:bg-white/8',
}

export default function Button({ href, variant = 'primary', block = false, children, ...props }) {
  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      href={href}
      className={`inline-flex items-center justify-center rounded-full border-[1.5px] px-[1.6rem] py-[.9rem] text-[.95rem] font-semibold transition duration-150 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${block ? 'w-full' : ''}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
