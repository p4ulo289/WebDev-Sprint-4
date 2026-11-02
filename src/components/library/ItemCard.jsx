import { useState } from 'react'
import { subjects } from '../../data/constants'
import { formatDate } from '../../utils/format'
import { readingMinutes } from '../../utils/math'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const fieldClass =
  'w-full rounded-lg border border-paper-line bg-white px-3 py-2 text-[.9rem] focus:border-jovi-blue focus:outline-none'

export default function ItemCard({ item, albums, isRecent, onToggleFavorite, onMove, onSave, onTrash }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState({ title: item.title, subject: item.subject, content: item.content })

  function startEdit() {
    setDraft({ title: item.title, subject: item.subject, content: item.content })
    setEditing(true)
  }

  function save() {
    if (!draft.title.trim() || !draft.content.trim()) return
    onSave(item.id, { ...draft, title: draft.title.trim(), content: draft.content.trim() })
    setEditing(false)
  }

  if (editing) {
    return (
      <li className="grid gap-3 rounded-card border border-jovi-blue bg-white p-5">
        <input
          aria-label="Título"
          className={fieldClass}
          value={draft.title}
          onChange={(event) => setDraft({ ...draft, title: event.target.value })}
        />
        <select
          aria-label="Matéria"
          className={fieldClass}
          value={draft.subject}
          onChange={(event) => setDraft({ ...draft, subject: event.target.value })}
        >
          {subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
        <textarea
          aria-label="Conteúdo"
          rows={4}
          className={`${fieldClass} resize-y`}
          value={draft.content}
          onChange={(event) => setDraft({ ...draft, content: event.target.value })}
        />
        <div className="flex gap-2">
          <Button size="sm" onClick={save}>
            Salvar
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setEditing(false)}>
            Cancelar
          </Button>
        </div>
      </li>
    )
  }

  return (
    <li className="flex min-w-0 flex-col rounded-card border border-paper-line bg-white p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge tone="blue">{item.subject}</Badge>
        {isRecent && <Badge tone="amber">Recente</Badge>}
        <button
          type="button"
          onClick={() => onToggleFavorite(item.id)}
          aria-pressed={item.favorite}
          aria-label={item.favorite ? 'Remover dos favoritos' : 'Marcar como favorito'}
          className={`ml-auto text-xl leading-none ${item.favorite ? 'text-amber' : 'text-paper-line hover:text-amber'}`}
        >
          ★
        </button>
      </div>

      <h3 className="mb-2 text-[1.1rem] font-bold">{item.title}</h3>
      <p className="mb-4 line-clamp-4 text-[.92rem] leading-relaxed text-ink-soft">{item.content}</p>

      <p className="mb-4 font-mono text-[.68rem] text-ink-soft">
        {formatDate(item.createdAt)} · {readingMinutes(item.content)} min de leitura · confiança {item.confidence}%
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-paper-line pt-4">
        <select
          aria-label={`Álbum de ${item.title}`}
          className="max-w-[9.5rem] rounded-full border border-paper-line bg-paper px-3 py-1.5 text-[.8rem]"
          value={item.albumId ?? ''}
          onChange={(event) => onMove(item.id, event.target.value || null)}
        >
          <option value="">Sem álbum</option>
          {albums.map((album) => (
            <option key={album.id} value={album.id}>
              {album.name}
            </option>
          ))}
        </select>
        <Button size="sm" variant="ghost" className="ml-auto" onClick={startEdit}>
          Editar
        </Button>
        <Button size="sm" variant="danger" onClick={() => onTrash(item.id)}>
          Excluir
        </Button>
      </div>
    </li>
  )
}
