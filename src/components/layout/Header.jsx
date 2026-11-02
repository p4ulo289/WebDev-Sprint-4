import { useEffect, useState } from 'react'
import { navLinks } from '../../data/navigation'
import BrandMark from '../ui/BrandMark'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    if (!('IntersectionObserver' in window) || !sections.length) return

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => spy.observe(section))
    return () => spy.disconnect()
  }, [])

  const barClass = 'block h-0.5 w-full bg-white transition duration-200'

  return (
    <header className="sticky top-0 z-100 border-b border-white/8 bg-ink/90 backdrop-blur-[10px]">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-(--gutter) py-[.9rem]">
        <a href="#topo" className="flex items-center gap-[.6rem]">
          <BrandMark />
          <span className="flex flex-col font-display text-[1.15rem] leading-none tracking-[.02em] text-white">
            JOVI
            <span className="mt-0.5 font-mono text-[.5rem] tracking-[.25em] text-jovi-blue-soft uppercase">
              smartphone
            </span>
          </span>
        </a>

        <button
          type="button"
          className="col-start-3 flex size-10 flex-col justify-center gap-[5px] justify-self-end px-1.5 py-px md:hidden"
          aria-expanded={menuOpen}
          aria-controls="primaryNav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`${barClass} ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`${barClass} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`${barClass} ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          <span className="sr-only">Abrir menu</span>
        </button>

        <nav
          id="primaryNav"
          aria-label="Navegação principal"
          className={`col-span-full ${menuOpen ? 'block' : 'hidden'} md:col-[2] md:block md:justify-self-end`}
        >
          <ul className="grid gap-1 pt-4 md:grid-flow-col md:gap-8 md:pt-0">
            {navLinks.map((link) => {
              const color =
                activeId === link.id ? 'text-white' : link.cta ? 'text-jovi-blue-soft' : 'text-mist'

              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block border-b border-white/8 px-1 py-[.65rem] text-[.95rem] hover:text-white md:border-b-0 md:px-[.1rem] md:py-[.4rem] ${link.cta ? 'font-semibold' : ''} ${color}`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
