import { formatDateTime } from '../../utils/format'
import EmptyState from '../ui/EmptyState'

function Card({ title, children }) {
  return (
    <div className="min-w-0 rounded-card border border-paper-line bg-white p-6">
      <h3 className="mb-5 text-[1rem] font-bold">{title}</h3>
      {children}
    </div>
  )
}

function SubjectBars({ stats }) {
  if (stats.bySubject.length === 0) return <p className="text-[.9rem] text-ink-soft">Sem dados ainda.</p>

  return (
    <ul className="grid gap-3">
      {stats.bySubject.map((row) => (
        <li key={row.subject}>
          <div className="mb-1 flex justify-between text-[.85rem]">
            <span>{row.subject}</span>
            <span className="font-mono text-ink-soft">
              {row.count} · {row.pct}%
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-paper">
            <div
              className="h-full rounded-full bg-jovi-blue"
              style={{ width: `${Math.round((row.count / stats.maxSubject) * 100)}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

function WeekChart({ stats }) {
  return (
    <ul className="flex h-36 items-end gap-2" aria-label="Capturas nos últimos 7 dias">
      {stats.last7.map((day) => (
        <li key={day.key} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
          <span className="font-mono text-[.7rem] text-ink-soft">{day.count}</span>
          <div
            className={`w-full rounded-t-md ${day.key === 0 ? 'bg-amber' : 'bg-jovi-blue/70'}`}
            style={{ height: `${Math.max(4, Math.round((day.count / stats.maxDay) * 100))}%` }}
          />
          <span className="text-[.7rem] text-ink-soft capitalize">{day.label}</span>
        </li>
      ))}
    </ul>
  )
}

const actionLabels = {
  added: 'Adicionada',
  edited: 'Editada',
  trashed: 'Movida para a lixeira',
  restored: 'Restaurada',
  purged: 'Excluída definitivamente',
}

export default function StatsPanel({ stats, log, onClearLog }) {
  if (stats.total === 0 && log.length === 0) {
    return <EmptyState title="Sem estatísticas por enquanto">Salve capturas para ver números por matéria e por dia.</EmptyState>
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card title="Capturas por matéria">
        <SubjectBars stats={stats} />
      </Card>

      <Card title="Últimos 7 dias">
        <WeekChart stats={stats} />
      </Card>

      <Card title="Histórico de atividade">
        {log.length === 0 ? (
          <p className="text-[.9rem] text-ink-soft">Nenhuma atividade registrada.</p>
        ) : (
          <>
            <ul className="mb-4 grid max-h-48 gap-2.5 overflow-y-auto pr-1">
              {log.slice(0, 10).map((entry) => (
                <li key={entry.id} className="text-[.85rem] leading-snug">
                  <span className="font-semibold">{actionLabels[entry.action]}:</span> {entry.title}
                  <span className="block font-mono text-[.68rem] text-ink-soft">{formatDateTime(entry.at)}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onClearLog}
              className="text-[.8rem] font-semibold text-ink-soft underline hover:text-danger"
            >
              Limpar histórico
            </button>
          </>
        )}
      </Card>
    </div>
  )
}
