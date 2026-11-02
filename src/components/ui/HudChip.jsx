const placements = {
  top: 'absolute top-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap',
  inline: 'mt-2 self-start',
}

const sizes = {
  md: 'text-[.55rem]',
  sm: 'text-[.5rem]',
}

export default function HudChip({ placement = 'top', size = 'md', children }) {
  return (
    <span
      className={`inline-flex items-center gap-[.4rem] rounded-full border border-white/15 bg-ink/85 px-[.55rem] py-[.35rem] font-mono tracking-[.02em] text-white ${placements[placement]} ${sizes[size]}`}
    >
      <span className="size-[5px] shrink-0 rounded-full bg-live" />
      {children}
    </span>
  )
}
