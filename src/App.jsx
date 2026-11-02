import CaptureForm from './components/capture/CaptureForm'
import Hero from './components/hero/Hero'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Library from './components/library/Library'
import StatsPanel from './components/stats/StatsPanel'
import TrashPanel from './components/trash/TrashPanel'
import Section from './components/ui/Section'
import { MAX_LOG, STORAGE_KEYS, sampleCaptures } from './data/constants'
import useLocalStorage from './hooks/useLocalStorage'
import { makeId, pickManyRandom, randomConfidence } from './utils/math'
import { computeStats } from './utils/stats'

// Cria uma captura nova com id, data e confiança simulada da leitura da câmera.
function buildItem(data) {
  const now = new Date().toISOString()
  return {
    id: makeId(),
    title: data.title,
    subject: data.subject,
    content: data.content,
    albumId: data.albumId ?? null,
    favorite: false,
    confidence: randomConfidence(),
    createdAt: now,
    updatedAt: now,
    deletedAt: null,
  }
}

export default function App() {
  // Todo o estado vive no componente pai e é passado aos filhos por props.
  const [items, setItems] = useLocalStorage(STORAGE_KEYS.items, [])
  const [albums, setAlbums] = useLocalStorage(STORAGE_KEYS.albums, [])
  const [log, setLog] = useLocalStorage(STORAGE_KEYS.log, [])

  const activeItems = items.filter((item) => !item.deletedAt)
  const trashItems = items.filter((item) => item.deletedAt)
  const stats = computeStats(activeItems)

  function addLog(action, title) {
    setLog((previous) =>
      [{ id: makeId(), action, title, at: new Date().toISOString() }, ...previous].slice(0, MAX_LOG),
    )
  }

  function patchItem(id, changes) {
    setItems((previous) => previous.map((item) => (item.id === id ? { ...item, ...changes } : item)))
  }

  const titleOf = (id) => items.find((item) => item.id === id)?.title ?? ''

  const handlers = {
    toggleFavorite(id) {
      const item = items.find((entry) => entry.id === id)
      patchItem(id, { favorite: !item.favorite })
    },
    moveItem(id, albumId) {
      patchItem(id, { albumId })
    },
    saveItem(id, changes) {
      patchItem(id, { ...changes, updatedAt: new Date().toISOString() })
      addLog('edited', changes.title)
    },
    trashItem(id) {
      patchItem(id, { deletedAt: new Date().toISOString() })
      addLog('trashed', titleOf(id))
    },
    addAlbum(name) {
      setAlbums((previous) => [...previous, { id: makeId(), name }])
    },
    removeAlbum(albumId) {
      setAlbums((previous) => previous.filter((album) => album.id !== albumId))
      setItems((previous) =>
        previous.map((item) => (item.albumId === albumId ? { ...item, albumId: null } : item)),
      )
    },
  }

  function addItem(data) {
    const item = buildItem(data)
    setItems((previous) => [item, ...previous])
    addLog('added', item.title)
  }

  function loadSamples() {
    const samples = pickManyRandom(sampleCaptures, 3).map(buildItem)
    setItems((previous) => [...samples, ...previous])
    samples.forEach((item) => addLog('added', item.title))
  }

  function restoreItem(id) {
    patchItem(id, { deletedAt: null })
    addLog('restored', titleOf(id))
  }

  function purgeItem(id) {
    addLog('purged', titleOf(id))
    setItems((previous) => previous.filter((item) => item.id !== id))
  }

  function emptyTrash() {
    if (!window.confirm('Excluir definitivamente todos os itens da lixeira?')) return
    trashItems.forEach((item) => addLog('purged', item.title))
    setItems((previous) => previous.filter((item) => !item.deletedAt))
  }

  return (
    <div id="topo">
      <Header trashCount={trashItems.length} />

      <main>
        <Hero stats={stats} />

        <Section
          id="capturar"
          eyebrow="Nova captura"
          title="Guarde o que a câmera reconheceu"
          description="Cole o texto capturado do quadro ou do caderno, escolha a matéria e salve. Se quiser só testar, gere um exemplo."
          tone="white"
        >
          <CaptureForm albums={albums} onAdd={addItem} />
        </Section>

        <Section
          id="biblioteca"
          eyebrow="Biblioteca"
          title="Todas as suas capturas"
          description="Busque, filtre por matéria, organize em álbuns e exporte o que precisar. As mais recentes ganham destaque."
        >
          <Library items={activeItems} albums={albums} handlers={handlers} onLoadSamples={loadSamples} />
        </Section>

        <Section
          id="estatisticas"
          eyebrow="Histórico e estatísticas"
          title="Como você está estudando"
          description="Números por matéria, atividade dos últimos 7 dias e o registro do que foi adicionado, editado ou removido."
          tone="white"
        >
          <StatsPanel stats={stats} log={log} onClearLog={() => setLog([])} />
        </Section>

        <Section
          id="lixeira"
          eyebrow="Lixeira"
          title="Recupere o que excluiu"
          description="Itens excluídos ficam aqui até você restaurá-los ou apagá-los de vez."
        >
          <TrashPanel items={trashItems} onRestore={restoreItem} onPurge={purgeItem} onEmpty={emptyTrash} />
        </Section>
      </main>

      <Footer />
    </div>
  )
}
