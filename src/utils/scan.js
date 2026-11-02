import { positionTips, subjects } from '../data/simulator'

// Nível de luz considerado ideal (0 a 100) pelo simulador.
export const IDEAL_LIGHT = 70

// Inteiro aleatório entre min e max, inclusive nos dois extremos.
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

// Arredonda para 1 casa decimal.
export function round1(value) {
  return Math.round(value * 10) / 10
}

// Quanto mais longe da luz ideal, menor a nota de luz.
export function lightScore(light) {
  return 100 - Math.abs(light - IDEAL_LIGHT)
}

export function getPositionTip(light) {
  if (Math.abs(light - IDEAL_LIGHT) <= 8) return positionTips.good
  return light < IDEAL_LIGHT ? positionTips.low : positionTips.high
}

// Simula uma leitura da câmera: matéria, confiança, foco e luz aleatórios.
export function generateScan() {
  const confidence = round1(80 + Math.random() * 19.5)
  const focus = randomInt(60, 98)
  const light = randomInt(35, 95)
  const score = Math.round((confidence + focus + lightScore(light)) / 3)

  return {
    id: `${Date.now()}-${randomInt(100, 999)}`,
    subject: pickRandom(subjects),
    confidence,
    focus,
    light,
    score,
    createdAt: new Date().toISOString(),
  }
}

// Estatísticas do histórico: total, média, melhor/pior nota e matéria mais frequente.
export function calculateStats(scans) {
  if (scans.length === 0) {
    return { total: 0, averageConfidence: 0, best: 0, worst: 0, topSubject: '—', minutesSaved: 0 }
  }

  const total = scans.length
  const scores = scans.map((scan) => scan.score)
  const confidenceSum = scans.reduce((sum, scan) => sum + scan.confidence, 0)

  const counts = {}
  scans.forEach((scan) => {
    counts[scan.subject] = (counts[scan.subject] ?? 0) + 1
  })
  const topSubject = Object.keys(counts).reduce((a, b) => (counts[b] > counts[a] ? b : a))

  return {
    total,
    averageConfidence: round1(confidenceSum / total),
    best: Math.max(...scores),
    worst: Math.min(...scores),
    topSubject,
    // Estimativa: cada leitura poupa ~2,5 min de reorganizar anotações.
    minutesSaved: Math.ceil(total * 2.5),
  }
}

export function formatDateTime(isoString) {
  return new Date(isoString).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}
