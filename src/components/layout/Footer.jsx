import { navLinks } from '../../data/navigation'
import BrandMark from '../ui/BrandMark'

export default function Footer() {
  return (
    <footer className="bg-ink px-(--gutter) py-10 text-mist">
      <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
        <div className="flex items-center gap-[.6rem] font-display text-[1rem] text-white">
          <BrandMark small />
          <span>JOVI Lens</span>
        </div>
        <p className="max-w-[60ch] text-[.82rem] leading-normal">
          Projeto acadêmico — FIAP Challenge JOVI 2026.
        </p>
        <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-5 text-[.85rem]">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="hover:text-white">
              {link.footerLabel ?? link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
