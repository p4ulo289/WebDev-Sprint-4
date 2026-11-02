import { subjects } from '../data/constants'
import { percent, readingMinutes, round1 } from './math'

const DAY_MS = 24 * 60 * 60 * 1000

// Início do dia (00:00) de uma data.
function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

// Quantos dias inteiros se passaram entre a data da captura e hoje (0 = hoje).
export function daysAgo(isoString, now = new Date()) {
  return Math.floor((startOfDay(now) - startOfDay(new Date(isoString))) / DAY_MS)
}

// Estatísticas das capturas ativas (fora da lixeira).
export function computeStats(items) {
  const total = items.length

  const confidenceSum = items.reduce((sum, item) => sum + item.confidence, 0)
  const averageConfidence = total === 0 ? 0 : round1(confidenceSum / total)

  const bySubject = subjects
    .map((subject) => {
      const count = items.filter((item) => item.subject === subject).length
      return { subject, count, pct: percent(count, total) }
    })
    .filter((row) => row.count > 0)
    .sort((a, b) => b.count - a.count)

  const maxSubject = bySubject.length ? Math.max(...bySubject.map((row) => row.count)) : 0

  // Últimos 7 dias, do mais antigo para hoje.
  const now = new Date()
  const last7 = Array.from({ length: 7 }, (_, index) => {
    const offset = 6 - index
    const day = new Date(now.getTime() - offset * DAY_MS)
    const count = items.filter((item) => daysAgo(item.createdAt, now) === offset).length
    return {
      key: offset,
      label: day.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
      count,
    }
  })
  const maxDay = Math.max(1, ...last7.map((day) => day.count))

  return {
    total,
    favorites: items.filter((item) => item.favorite).length,
    averageConfidence,
    readingTotal: items.reduce((sum, item) => sum + readingMinutes(item.content), 0),
    topSubject: bySubject[0]?.subject ?? '—',
    bySubject,
    maxSubject,
    last7,
    maxDay,
  }
}
