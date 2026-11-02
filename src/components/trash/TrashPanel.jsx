import { formatDateTime } from '../../utils/format'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import EmptyState from '../ui/EmptyState'

export default function TrashPanel({ items, onRestore, onPurge, onEmpty }) {
  if (items.length === 0) {
    return <EmptyState title="A lixeira está vazia">Capturas excluídas aparecem aqui e podem ser recuperadas.</EmptyState>
  }

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Button size="sm" variant="danger" onClick={onEmpty}>
          Esvaziar lixeira
        </Button>
      </div>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-wrap items-center gap-3 rounded-card border border-paper-line bg-white px-5 py-4"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{item.title}</p>
              <p className="font-mono text-[.7rem] text-ink-soft">Excluída em {formatDateTime(item.deletedAt)}</p>
            </div>
            <Badge tone="blue">{item.subject}</Badge>
            <Button size="sm" variant="secondary" onClick={() => onRestore(item.id)}>
              Restaurar
            </Button>
            <Button size="sm" variant="danger" onClick={() => onPurge(item.id)}>
              Excluir de vez
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
