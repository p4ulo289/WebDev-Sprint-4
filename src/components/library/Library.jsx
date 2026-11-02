import { useState } from 'react'
import { subjects } from '../../data/constants'
import { exportCsv, exportJson } from '../../utils/exportData'
import { plural } from '../../utils/format'
import Button from '../ui/Button'
import EmptyState from '../ui/EmptyState'
import AlbumBar from './AlbumBar'
import ItemCard from './ItemCard'

const RECENT_COUNT = 3

const selectClass =
  'rounded-lg border border-paper-line bg-white px-3 py-2 text-[.9rem] focus:border-jovi-blue focus:outline-none'

const sorters = {
  recent: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  title: (a, b) => a.title.localeCompare(b.title, 'pt-BR'),
}

export default function Library({ items, albums, handlers, onLoadSamples }) {
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState('all')
  const [albumFilter, setAlbumFilter] = useState('all')
  const [onlyFavorites, setOnlyFavorites] = useState(false)
  const [sort, setSort] = useState('recent')

  // Os 3 itens mais recentes do acervo inteiro recebem o selo "Recente".
  const recentIds = new Set(
    [...items]
      .sort(sorters.recent)
      .slice(0, RECENT_COUNT)
      .map((item) => item.id),
  )

  const counts = { all: items.length, none: items.filter((item) => !item.albumId).length }
  albums.forEach((album) => {
    counts[album.id] = items.filter((item) => item.albumId === album.id).length
  })

  const normalizedQuery = query.trim().toLowerCase()
  const visible = items
    .filter((item) => {
      const matchesQuery =
        !normalizedQuery || `${item.title} ${item.content} ${item.subject}`.toLowerCase().includes(normalizedQuery)
      const matchesSubject = subject === 'all' || item.subject === subject
      const matchesAlbum =
        albumFilter === 'all' || (albumFilter === 'none' ? !item.albumId : item.albumId === albumFilter)
      return matchesQuery && matchesSubject && matchesAlbum && (!onlyFavorites || item.favorite)
    })
    .sort(sorters[sort])

  function removeAlbum(albumId) {
    handlers.removeAlbum(albumId)
    if (albumFilter === albumId) setAlbumFilter('all')
  }

  if (items.length === 0 && albums.length === 0) {
    return (
      <EmptyState title="Seu acervo está vazio">
        <p className="mb-4">Salve sua primeira captura acima ou comece com alguns exemplos.</p>
        <Button onClick={onLoadSamples}>Carregar 3 exemplos</Button>
      </EmptyState>
    )
  }

  return (
    <div>
      <AlbumBar
        albums={albums}
        counts={counts}
        selected={albumFilter}
        onSelect={setAlbumFilter}
        onCreate={handlers.addAlbum}
        onRemove={removeAlbum}
      />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          type="search"
          aria-label="Buscar capturas"
          className={`${selectClass} min-w-56 flex-1`}
          placeholder="Buscar por título, conteúdo ou matéria"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          aria-label="Filtrar por matéria"
          className={selectClass}
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="all">Todas as matérias</option>
          {subjects.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        <select aria-label="Ordenar" className={selectClass} value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="recent">Mais recentes</option>
          <option value="oldest">Mais antigas</option>
          <option value="title">Título (A–Z)</option>
        </select>
        <label className="flex items-center gap-2 text-[.9rem]">
          <input type="checkbox" checked={onlyFavorites} onChange={(event) => setOnlyFavorites(event.target.checked)} />
          Só favoritas
        </label>
      </div>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[.9rem] text-ink-soft" aria-live="polite">
          {plural(visible.length, 'captura', 'capturas')}
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            disabled={items.length === 0}
            onClick={() => exportCsv(visible, albums)}
          >
            Exportar CSV
          </Button>
          <Button
            size="sm"
            variant="secondary"
            disabled={items.length === 0}
            onClick={() => exportJson(visible, albums)}
          >
            Exportar JSON
          </Button>
        </div>
      </div>

      {visible.length === 0 ? (
        <EmptyState title="Nenhuma captura encontrada">Tente mudar a busca ou os filtros.</EmptyState>
      ) : (
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              albums={albums}
              isRecent={recentIds.has(item.id)}
              onToggleFavorite={handlers.toggleFavorite}
              onMove={handlers.moveItem}
              onSave={handlers.saveItem}
              onTrash={handlers.trashItem}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
