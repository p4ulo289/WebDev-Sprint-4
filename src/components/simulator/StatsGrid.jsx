function StatCard({ label, value }) {
  return (
    <div className="min-w-0 rounded-card border border-white/8 bg-ink p-5">
      <dt className="mb-2 font-mono text-[.65rem] tracking-widest text-jovi-blue-soft uppercase">{label}</dt>
      <dd className="font-display text-[1.6rem] leading-none text-white">{value}</dd>
    </div>
  )
}

export default function StatsGrid({ stats }) {
  return (
    <dl className="grid grid-cols-2 gap-4">
      <StatCard label="Leituras" value={stats.total} />
      <StatCard label="Confiança média" value={`${stats.averageConfidence}%`} />
      <StatCard label="Melhor / pior nota" value={`${stats.best} / ${stats.worst}`} />
      <StatCard label="Min. economizados" value={stats.minutesSaved} />
      <div className="col-span-full min-w-0 rounded-card border border-white/8 bg-ink p-5">
        <dt className="mb-2 font-mono text-[.65rem] tracking-widest text-jovi-blue-soft uppercase">
          Matéria mais lida
        </dt>
        <dd className="font-display text-[1.3rem] leading-none text-amber">{stats.topSubject}</dd>
      </div>
    </dl>
  )
}
