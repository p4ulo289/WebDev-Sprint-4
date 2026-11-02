import { useState } from 'react'
import { sampleCaptures, subjects } from '../../data/constants'
import { pickRandom } from '../../utils/math'
import Button from '../ui/Button'

const emptyForm = { title: '', subject: subjects[0], content: '' }

const fieldClass =
  'w-full rounded-lg border border-paper-line bg-white px-3.5 py-2.5 text-[.95rem] focus:border-jovi-blue focus:outline-none'

export default function CaptureForm({ albums, onAdd }) {
  const [form, setForm] = useState(emptyForm)
  const [albumId, setAlbumId] = useState('')
  const [error, setError] = useState('')

  function update(field, value) {
    setForm((previous) => ({ ...previous, [field]: value }))
  }

  function fillWithSample() {
    setForm(pickRandom(sampleCaptures))
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.title.trim() || !form.content.trim()) {
      setError('Preencha o título e o conteúdo da captura.')
      return
    }

    onAdd({ ...form, title: form.title.trim(), content: form.content.trim(), albumId: albumId || null })
    setForm(emptyForm)
    setError('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-5 rounded-card border border-paper-line bg-paper p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="titulo" className="text-[.85rem] font-semibold">
            Título
          </label>
          <input
            id="titulo"
            type="text"
            className={fieldClass}
            value={form.title}
            onChange={(event) => update('title', event.target.value)}
            placeholder="Ex.: Regra da cadeia"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="materia" className="text-[.85rem] font-semibold">
            Matéria
          </label>
          <select
            id="materia"
            className={fieldClass}
            value={form.subject}
            onChange={(event) => update('subject', event.target.value)}
          >
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="conteudo" className="text-[.85rem] font-semibold">
          Conteúdo capturado
        </label>
        <textarea
          id="conteudo"
          rows={4}
          className={`${fieldClass} resize-y`}
          value={form.content}
          onChange={(event) => update('content', event.target.value)}
          placeholder="Texto reconhecido do quadro ou do caderno"
        />
      </div>

      <div className="grid gap-1.5 md:max-w-xs">
        <label htmlFor="album" className="text-[.85rem] font-semibold">
          Álbum (opcional)
        </label>
        <select id="album" className={fieldClass} value={albumId} onChange={(event) => setAlbumId(event.target.value)}>
          <option value="">Sem álbum</option>
          {albums.map((album) => (
            <option key={album.id} value={album.id}>
              {album.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Salvar captura</Button>
        <Button variant="secondary" onClick={fillWithSample}>
          Gerar exemplo
        </Button>
        <p role="alert" className="text-[.85rem] font-semibold text-danger">
          {error}
        </p>
      </div>
    </form>
  )
}
