import { formatDateTime } from '../../utils/scan'
import Button from '../ui/Button'

const VISIBLE_ITEMS = 6

export default function ScanHistory({ scans, onClear }) {
  const visible = scans.slice(0, VISIBLE_ITEMS)

  return (
    <div className="min-w-0">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-[1.05rem] font-bold">Últimas leituras</h3>
        {scans.length > 0 && (
          <Button type="button" variant="ghost" onClick={onClear}>
            Limpar histórico
          </Button>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="rounded-card border border-dashed border-white/20 p-5 text-[.9rem] text-mist">
          Nenhuma leitura ainda. O histórico fica salvo neste navegador.
        </p>
      ) : (
        <ul className="grid gap-2">
          {visible.map((scan) => (
            <li
              key={scan.id}
              className="flex items-center justify-between gap-4 rounded-card border border-white/8 bg-ink px-4 py-3 text-[.9rem]"
            >
              <span className="min-w-0 truncate font-semibold">{scan.subject}</span>
              <span className="shrink-0 font-mono text-[.7rem] text-mist">
                nota {scan.score} · {formatDateTime(scan.createdAt)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
