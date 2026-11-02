import { useEffect, useState } from 'react'

/**
 * Funciona como o useState, mas persiste o valor no localStorage.
 * Se o navegador bloquear o storage ou o JSON estiver corrompido,
 * o hook cai de volta para o valor inicial sem quebrar a aplicação.
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = window.localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage cheio ou bloqueado: o app continua funcionando só em memória.
    }
  }, [key, value])

  return [value, setValue]
}
