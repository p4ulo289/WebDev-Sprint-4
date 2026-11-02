// Funções auxiliares com o objeto Math (aleatoriedade, arredondamento, porcentagem).

// Inteiro aleatório entre min e max, inclusive nos dois extremos.
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

// Sorteia `count` itens diferentes da lista (embaralhamento de Fisher-Yates).
export function pickManyRandom(list, count) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, Math.min(count, copy.length))
}

// Arredonda para 1 casa decimal.
export function round1(value) {
  return Math.round(value * 10) / 10
}

// Porcentagem inteira de `part` em relação a `total`.
export function percent(part, total) {
  return total === 0 ? 0 : Math.round((part / total) * 100)
}

// Confiança simulada da leitura da câmera: entre 85,0 e 99,9.
export function randomConfidence() {
  return round1(85 + Math.random() * 14.9)
}

// Identificador único: carimbo de tempo + sufixo aleatório, ambos em base 36.
export function makeId() {
  return `${Date.now().toString(36)}${randomInt(0, 1295).toString(36)}`
}

export function countWords(text) {
  const trimmed = text.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}

// Tempo de leitura em minutos, considerando 200 palavras por minuto (mínimo de 1).
export function readingMinutes(text) {
  return Math.max(1, Math.ceil(countWords(text) / 200))
}
