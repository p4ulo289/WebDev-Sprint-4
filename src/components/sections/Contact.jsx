import { useState } from 'react'
import { STORAGE_KEYS } from '../../data/simulator'
import useLocalStorage from '../../hooks/useLocalStorage'
import { generateProtocol } from '../../utils/protocol'
import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'
import Section from '../ui/Section'

const contacts = [
  { label: 'E-mail', text: 'contato@jovilens.exemplo.com', href: 'mailto:contato@jovilens.exemplo.com' },
  { label: 'Instagram', text: '@jovi.lens', href: '#' },
  { label: 'LinkedIn', text: 'JOVI Lens Challenge', href: '#' },
]

const statusTones = {
  idle: 'text-jovi-blue',
  success: 'text-ok',
  error: 'text-danger',
}

function Field({ id, label, as: Tag = 'input', ...props }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[.82rem] font-semibold text-ink">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        required
        className="resize-y rounded-md border-[1.5px] border-paper-line bg-paper px-[.9rem] py-3 text-[.95rem] focus:border-jovi-blue focus:outline-none"
        {...props}
      />
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState({ kind: 'idle', message: '' })
  const [messages, setMessages] = useLocalStorage(STORAGE_KEYS.messages, [])

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      setStatus({ kind: 'error', message: 'Digite algo antes de enviar.' })
      return
    }

    const data = new FormData(form)
    const protocol = generateProtocol()

    // Não há back-end: a mensagem fica salva no localStorage deste navegador.
    setMessages((previous) => [
      {
        protocol,
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
        createdAt: new Date().toISOString(),
      },
      ...previous,
    ])

    setStatus({ kind: 'success', message: `Mensagem enviada! Protocolo #${protocol}.` })
    form.reset()
  }

  return (
    <Section id="contato" tone="paper" labelledBy="contato-title">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div className="min-w-0">
          <Eyebrow tone="paper">Contato</Eyebrow>
          <h2
            id="contato-title"
            className="mb-4 font-display text-[1.85rem] md:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.5rem]"
          >
            Fala com a gente
          </h2>
          <p className="max-w-[62ch] text-[1.02rem] leading-[1.6] text-ink-soft">
            Dúvidas, feedback ou quer testar a JOVI Lens em primeira mão? Manda uma mensagem ou chama nas redes.
          </p>

          <ul className="mt-8 grid gap-4">
            {contacts.map(({ label, text, href }) => (
              <li
                key={label}
                className="flex justify-between gap-4 border-b border-paper-line pb-[.85rem] text-[.95rem]"
              >
                <span className="font-mono text-[.72rem] tracking-[.08em] text-ink-soft uppercase">
                  {label}
                </span>
                <a href={href} className="hover:text-jovi-blue">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          id="contactForm"
          noValidate
          onSubmit={handleSubmit}
          className="grid min-w-0 gap-5 rounded-card border border-paper-line bg-white p-8"
        >
          <Field id="name" label="Nome" type="text" autoComplete="name" />
          <Field id="email" label="E-mail" type="email" autoComplete="email" />
          <Field id="message" label="Mensagem" as="textarea" rows={4} />
          <Button type="submit" block>
            Enviar mensagem
          </Button>
          <p
            id="formStatus"
            role="status"
            aria-live="polite"
            className={`min-h-[1.2em] text-[.85rem] font-semibold ${statusTones[status.kind]}`}
          >
            {status.message}
          </p>
          {messages.length > 0 && (
            <p className="text-[.78rem] text-ink-soft">
              Mensagens enviadas neste navegador: {messages.length}
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}
