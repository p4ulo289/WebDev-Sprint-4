function download(filename, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }))
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

function stamp() {
  return new Date().toISOString().slice(0, 10)
}

export function exportJson(items, albums) {
  const rows = items.map((item) => ({
    ...item,
    album: albums.find((album) => album.id === item.albumId)?.name ?? null,
  }))
  download(`jovi-lens-${stamp()}.json`, JSON.stringify(rows, null, 2), 'application/json')
}

function csvCell(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`
}

export function exportCsv(items, albums) {
  const header = ['titulo', 'materia', 'album', 'favorito', 'confianca', 'criado_em', 'conteudo']
  const lines = items.map((item) =>
    [
      item.title,
      item.subject,
      albums.find((album) => album.id === item.albumId)?.name ?? '',
      item.favorite ? 'sim' : 'nao',
      item.confidence,
      item.createdAt,
      item.content,
    ]
      .map(csvCell)
      .join(','),
  )
  // ﻿ (BOM) para o Excel abrir os acentos corretamente.
  download(`jovi-lens-${stamp()}.csv`, `﻿${[header.join(','), ...lines].join('\n')}`, 'text/csv')
}
