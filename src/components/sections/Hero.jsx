import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'
import HudChip from '../ui/HudChip'
import Phone from '../ui/Phone'
import ScanTarget from '../ui/ScanTarget'

function HudButton({ filled = false, children }) {
  return (
    <button
      type="button"
      className={`rounded-full border px-[.6rem] py-2 text-[.6rem] text-white ${filled ? 'border-jovi-blue bg-jovi-blue' : 'border-white/35 bg-white/6'}`}
    >
      {children}
    </button>
  )
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-[radial-gradient(120%_100%_at_15%_0%,var(--color-indigo-2)_0%,var(--color-ink)_55%)] px-(--gutter) pt-12 pb-16 text-white lg:pt-16"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_.9fr] lg:grid-cols-[1fr_.7fr] lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>FIAP Challenge · JOVI Camera AI</Eyebrow>
          <h1
            id="hero-title"
            className="mb-5 font-display text-[2.15rem] leading-[1.08] tracking-[.01em] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] 2xl:text-[4.25rem]"
          >
            A câmera que entende<br />o que você está <em className="text-amber not-italic">estudando</em>.
          </h1>
          <p className="mb-8 max-w-[46ch] text-[1.05rem] leading-[1.6] text-mist">
            Aponte para um quadro ou caderno. A JOVI Lens reconhece a matéria na hora, ajusta luz e foco sozinha e te diz o melhor jeito de posicionar o celular, pensada pra rotina corrida de quem estuda, socializa e ainda tenta dar conta de tudo.
          </p>
          <div className="flex flex-wrap gap-4 text-white">
            <Button href="#solucao">Ver como funciona</Button>
            <Button href="#galeria" variant="ghost">
              Ver a interface
            </Button>
          </div>
        </div>

        <div aria-hidden="true" className="flex min-w-0 justify-center">
          <Phone>
            <ScanTarget scanLine />
            <HudChip>Cálculo II detectado</HudChip>
            <div className="absolute inset-x-0 bottom-[8%] flex flex-col gap-[.4rem] px-[10%]">
              <HudButton filled>Gerar resumo</HudButton>
              <HudButton>Criar exercícios</HudButton>
            </div>
          </Phone>
        </div>
      </div>
    </section>
  )
}
