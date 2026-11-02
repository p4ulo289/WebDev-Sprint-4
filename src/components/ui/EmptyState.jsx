export default function EmptyState({ title, children }) {
  return (
    <div className="rounded-card border border-dashed border-paper-line bg-white px-6 py-10 text-center">
      <p className="mb-1 font-semibold">{title}</p>
      <div className="mx-auto max-w-[46ch] text-[.92rem] text-ink-soft">{children}</div>
    </div>
  )
}
