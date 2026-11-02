import { team } from '../../data/team'
import Section from '../ui/Section'
import SectionHead from '../ui/SectionHead'
import TeamCard from '../ui/TeamCard'

export default function Team() {
  return (
    <Section id="equipe" tone="dark" labelledBy="equipe-title">
      <SectionHead
        tone="dark"
        titleId="equipe-title"
        eyebrow="Quem fez"
        title="Nossa equipe"
        intro="Conheça quem desenvolveu essa aplicação."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <TeamCard key={member.initials} {...member} />
        ))}
      </div>
    </Section>
  )
}
