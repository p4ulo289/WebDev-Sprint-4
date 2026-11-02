import FeatureCard from '../ui/FeatureCard'
import Section from '../ui/Section'
import SectionHead from '../ui/SectionHead'

export default function Solution() {
  return (
    <Section id="solucao" tone="paper" labelledBy="solucao-title">
      <SectionHead
        tone="paper"
        titleId="solucao-title"
        eyebrow="O desafio"
        title={
          <>
            Hoje a câmera só sabe apertar o botão.<br />A JOVI Lens sabe o que você está fazendo.
          </>
        }
        intro="Muita gente usa a câmera do smartphone só no automático, sem explorar todo o potencial do aparelho, seja por falta de clareza dos modos ou por não existir uma função pensada pra sua real rotina. Pra quem é estudante full-time, criamos três frentes que resolvem isso na prática."
      />

      <div className="grid gap-6 md:grid-cols-2 md:[&>:last-child]:col-span-full lg:grid-cols-3 lg:[&>:last-child]:col-auto">
        <FeatureCard index="01" title="Reconhecimento de conteúdo">
          A IA identifica quadros, slides e páginas de caderno em tempo real, reconhece a matéria e pergunta na hora se você quer um <strong>resumo</strong> ou uma lista de <strong>exercícios</strong> gerada a partir da foto.
        </FeatureCard>

        <FeatureCard index="02" title="Luz e foco automáticos">
          Sem ajustar nada manualmente: a câmera calibra exposição e foco sozinha assim que reconhece que o quadro é texto ou anotação, garantindo que nada fique ilegível na hora de estudar depois.
        </FeatureCard>

        <FeatureCard index="03" title="Guia de posicionamento">
          Um assistente indica o melhor ângulo e a melhor posição em relação à luz natural disponível, guiando o usuário até o enquadramento ideal antes mesmo de tirar a foto.
        </FeatureCard>
      </div>
    </Section>
  )
}
