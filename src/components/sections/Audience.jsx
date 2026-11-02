import audienceImage from '../../assets/A-realidade-de-um-seleto-grupo-de-alunos.webp'
import { audienceStats } from '../../data/audience'
import Corner from '../ui/Corner'
import Eyebrow from '../ui/Eyebrow'
import Section from '../ui/Section'

export default function Audience() {
  return (
    <Section id="publico" tone="dark" labelledBy="publico-title">
      <div className="grid items-center gap-12 md:grid-cols-[.8fr_1fr]">
        <div aria-hidden="true" className="flex min-w-0 justify-center">
          <div className="relative grid aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-frame bg-[linear-gradient(155deg,var(--color-indigo-2),var(--color-jovi-blue)_140%)]">
            <Corner at="tl" tone="amber" className="z-1" />
            <Corner at="tr" tone="amber" className="z-1" />
            <Corner at="bl" tone="amber" className="z-1" />
            <Corner at="br" tone="amber" className="z-1" />
            <img
              src={audienceImage}
              alt="Colegiais"
              className="col-start-1 row-start-1 block h-full min-h-0 w-full min-w-0 object-cover"
            />
          </div>
        </div>

        <div className="min-w-0">
          <Eyebrow>Público-alvo</Eyebrow>
          <h2
            id="publico-title"
            className="mb-4 font-display text-[1.9rem] md:text-[2.25rem] lg:text-[2.6rem] xl:text-[2.8rem]"
          >
            Estudantes full-time
          </h2>
          <p className="mb-8 max-w-[50ch] text-[1.05rem] leading-[1.6] text-mist">
            Conciliam estudos, interações sociais e ambição. Estão sempre em movimento — entre a aula, o trabalho e a vida social — buscando progresso e estabilidade.
          </p>

          <ul className="grid gap-5">
            {audienceStats.map(({ label, value }) => (
              <li key={label} className="grid gap-[.3rem] border-t border-white/15 pt-[1.1rem]">
                <span className="font-mono text-[.7rem] tracking-widest text-jovi-blue-soft uppercase">
                  {label}
                </span>
                <span className="max-w-[55ch] leading-[1.55] text-mist">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
