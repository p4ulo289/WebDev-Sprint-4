const tones = {
  dark: 'text-mist',
  paper: 'text-jovi-blue',
}

export default function Eyebrow({ tone = 'dark', children }) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-2 font-mono text-[.75rem] tracking-[.12em] uppercase ${tones[tone]}`}
    >
      <span className="size-[7px] rounded-full bg-amber ring-3 ring-amber/25" />
      {children}
    </p>
  )
}
