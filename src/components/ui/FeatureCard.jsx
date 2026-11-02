import Corner from './Corner'

export default function FeatureCard({ index, title, children }) {
  return (
    <article className="min-w-0 rounded-card border border-paper-line bg-white px-7 py-8">
      <div className="relative mb-7 size-7">
        <Corner at="tl" />
        <Corner at="br" />
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[.7rem] text-jovi-blue">
          {index}
        </span>
      </div>
      <h3 className="mb-3 text-[1.2rem] font-bold">{title}</h3>
      <p className="leading-[1.6] text-ink-soft [&_strong]:text-ink">{children}</p>
    </article>
  )
}
