import GalleryItem from '../ui/GalleryItem'
import HudChip from '../ui/HudChip'
import Phone from '../ui/Phone'
import ScanTarget from '../ui/ScanTarget'
import Section from '../ui/Section'
import SectionHead from '../ui/SectionHead'

function AdjustRow({ label, fillClassName }) {
  return (
    <div className="flex flex-col gap-[.3rem] font-mono text-[.55rem] text-mist">
      <span>{label}</span>
      <div className="h-1 overflow-hidden rounded-full bg-white/15">
        <div className={`h-full rounded-full ${fillClassName}`} />
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <Section id="galeria" tone="paper" labelledBy="galeria-title">
      <SectionHead
        tone="paper"
        titleId="galeria-title"
        eyebrow="Galeria"
        title="A interface, dos três jeitos"
        intro="Três momentos da JOVI Lens em uso — do reconhecimento do conteúdo ao ajuste automático e ao guia de posicionamento."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <GalleryItem
          caption={
            <>
              <strong>Reconhecimento</strong> — identifica a matéria e sugere resumo ou exercícios.
            </>
          }
        >
          <Phone size="gallery">
            <ScanTarget small />
            <HudChip size="sm">Física I</HudChip>
          </Phone>
        </GalleryItem>

        <GalleryItem
          caption={
            <>
              <strong>Ajuste automático</strong> — luz e foco calibrados sozinhos, sem toques manuais.
            </>
          }
        >
          <Phone size="gallery" screen="adjust">
            <div className="flex w-full flex-col gap-[.7rem] px-[10%] pt-[10%] pb-[14%]">
              <AdjustRow label="Foco" fillClassName="w-[78%] bg-jovi-blue-soft" />
              <AdjustRow label="Luz" fillClassName="w-[64%] bg-amber" />
              <HudChip placement="inline">Ajuste automático</HudChip>
            </div>
          </Phone>
        </GalleryItem>

        <GalleryItem
          caption={
            <>
              <strong>Guia de posição</strong> — indica a melhor posição com base na luz natural.
            </>
          }
        >
          <Phone size="gallery" screen="guide">
            <div className="size-[46px] animate-nudge border-t-[3px] border-r-[3px] border-amber" />
            <HudChip size="sm">Aproveite a luz da janela</HudChip>
          </Phone>
        </GalleryItem>
      </div>
    </Section>
  )
}
