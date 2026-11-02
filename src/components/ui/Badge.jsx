const tones = {
  blue: 'bg-jovi-blue/10 text-jovi-blue-dark',
  amber: 'bg-amber/25 text-ink',
  gray: 'bg-paper text-ink-soft',
}

export default function Badge({ tone = 'gray', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[.68rem] tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
