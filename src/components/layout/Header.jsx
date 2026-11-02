import { useState } from 'react'
import BrandMark from '../ui/BrandMark'

const links = [
  { href: '#capturar', label: 'Capturar' },
  { href: '#biblioteca', label: 'Biblioteca' },
  { href: '#estatisticas', label: 'Estatísticas' },
  { href: '#lixeira', label: 'Lixeira' },
]

export default function Header({ trashCount }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-paper-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-10">
        <a href="#topo" className="flex items-center gap-2.5 font-bold tracking-tight">
          <BrandMark />
          JOVI Lens
        </a>

        <button
          type="button"
          className="rounded-md border border-paper-line bg-white px-3 py-1.5 text-[.85rem] font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-b border-paper-line bg-paper px-5 py-3 md:static md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-[.92rem] text-ink-soft hover:text-jovi-blue md:py-0"
            >
              {link.label}
              {link.href === '#lixeira' && trashCount > 0 && (
                <span className="ml-1.5 rounded-full bg-amber/30 px-1.5 py-0.5 font-mono text-[.65rem] text-ink">
                  {trashCount}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
