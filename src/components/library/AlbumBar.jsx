import { useState } from 'react'
import Button from '../ui/Button'

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-[.85rem] font-semibold transition ${
        active
          ? 'border-jovi-blue bg-jovi-blue text-white'
          : 'border-paper-line bg-white text-ink-soft hover:border-jovi-blue hover:text-jovi-blue'
      }`}
    >
      {children}
    </button>
  )
}

export default function AlbumBar({ albums, counts, selected, onSelect, onCreate, onRemove }) {
  const [name, setName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!name.trim()) return
    onCreate(name.trim())
    setName('')
  }

  const selectedAlbum = albums.find((album) => album.id === selected)

  return (
    <div className="mb-6 grid gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Chip active={selected === 'all'} onClick={() => onSelect('all')}>
          Todos ({counts.all})
        </Chip>
        <Chip active={selected === 'none'} onClick={() => onSelect('none')}>
          Sem álbum ({counts.none})
        </Chip>
        {albums.map((album) => (
          <Chip key={album.id} active={selected === album.id} onClick={() => onSelect(album.id)}>
            {album.name} ({counts[album.id] ?? 0})
          </Chip>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            aria-label="Nome do novo álbum"
            className="w-44 rounded-full border border-paper-line bg-white px-4 py-1.5 text-[.85rem] focus:border-jovi-blue focus:outline-none"
            placeholder="Novo álbum"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit" size="sm" variant="secondary">
            Criar álbum
          </Button>
        </form>
        {selectedAlbum && (
          <Button size="sm" variant="danger" onClick={() => onRemove(selectedAlbum.id)}>
            Excluir álbum “{selectedAlbum.name}”
          </Button>
        )}
      </div>
    </div>
  )
}
