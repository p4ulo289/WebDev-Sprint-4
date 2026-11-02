import BrandMark from '../ui/BrandMark'

export default function Footer() {
  return (
    <footer className="bg-indigo px-5 py-10 text-mist md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 font-bold text-white">
          <BrandMark />
          JOVI Lens
        </div>
        <p className="text-[.85rem]">Projeto acadêmico — FIAP Challenge JOVI 2026. Os dados ficam salvos só neste navegador.</p>
      </div>
    </footer>
  )
}
