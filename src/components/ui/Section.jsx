const tones = {
  paper: 'bg-paper',
  dark: 'bg-ink text-white',
  indigo: 'bg-indigo text-white',
}

export default function Section({ id, tone = 'paper', labelledBy, children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`overflow-hidden px-(--gutter) py-(--section-pad) ${tones[tone]}`}
    >
      {children}
    </section>
  )
}
