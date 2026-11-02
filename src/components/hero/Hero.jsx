import { plural } from '../../utils/format'

function Figure({ label, value }) {
  return (
    <div>
      <dt className="mb-1 font-mono text-[.68rem] tracking-widest text-mist uppercase">{label}</dt>
      <dd className="text-[1.6rem] leading-none font-bold text-white">{value}</dd>
    </div>
  )
}

export default function Hero({ stats }) {
  return (
    <section aria-labelledby="hero-title" className="bg-indigo px-5 pt-16 pb-20 text-white md:px-10 md:pt-24 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-4 font-mono text-[.72rem] tracking-[.12em] text-amber uppercase">
            FIAP Challenge · JOVI Camera AI
          </p>
          <h1 id="hero-title" className="mb-5 text-[2.3rem] leading-[1.1] font-bold md:text-[3.2rem]">
            Tudo o que você capturou para estudar, em um só lugar.
          </h1>
          <p className="mb-8 max-w-[52ch] leading-relaxed text-mist">
            A JOVI Lens reconhece a matéria no quadro ou no caderno. Aqui você guarda cada captura, busca em segundos,
            organiza em álbuns e acompanha o quanto está estudando.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#capturar"
              className="rounded-full bg-jovi-blue px-6 py-3 text-[.95rem] font-semibold transition hover:bg-jovi-blue-dark"
            >
              Nova captura
            </a>
            <a
              href="#biblioteca"
              className="rounded-full border border-white/30 px-6 py-3 text-[.95rem] font-semibold transition hover:bg-white/10"
            >
              Ver biblioteca
            </a>
          </div>
        </div>

        <div className="rounded-card border border-white/10 bg-white/5 p-7">
          <p className="mb-5 text-[.9rem] text-mist">Seu acervo agora</p>
          <dl className="grid grid-cols-2 gap-6">
            <Figure label="Capturas" value={stats.total} />
            <Figure label="Favoritas" value={stats.favorites} />
            <Figure label="Confiança média" value={`${stats.averageConfidence}%`} />
            <Figure label="Leitura total" value={`${stats.readingTotal} min`} />
          </dl>
          <p className="mt-6 border-t border-white/10 pt-4 text-[.85rem] text-mist">
            Matéria mais frequente: <strong className="text-white">{stats.topSubject}</strong>
            {stats.total > 0 && <span> · {plural(stats.bySubject.length, 'matéria', 'matérias')}</span>}
          </p>
        </div>
      </div>
    </section>
  )
}
