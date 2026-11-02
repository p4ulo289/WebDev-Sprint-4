// Número de protocolo de 6 dígitos (100000 a 999999) para as mensagens de contato.
export function generateProtocol() {
  return Math.floor(100000 + Math.random() * 900000)
}
