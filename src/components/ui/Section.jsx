const tones = {
  paper: 'bg-paper',
  white: 'bg-white',
}

export default function Section({ id, eyebrow, title, description, tone = 'paper', children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`px-5 py-16 md:px-10 md:py-20 ${tones[tone]}`}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl">
          <p className="mb-3 font-mono text-[.72rem] tracking-[.12em] text-jovi-blue uppercase">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mb-3 text-[1.75rem] leading-tight font-bold md:text-[2.1rem]">
            {title}
          </h2>
          <p className="leading-relaxed text-ink-soft">{description}</p>
        </header>
        {children}
      </div>
    </section>
  )
}
