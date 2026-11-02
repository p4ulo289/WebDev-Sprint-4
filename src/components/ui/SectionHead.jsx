import Eyebrow from './Eyebrow'

export default function SectionHead({ tone = 'paper', titleId, eyebrow, title, intro }) {
  return (
    <div className="mb-11">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={titleId}
        className="mb-4 max-w-[20ch] font-display text-[1.75rem] leading-[1.15] md:text-[2.1rem] lg:text-[2.4rem] xl:text-[2.6rem]"
      >
        {title}
      </h2>
      <p
        className={`max-w-[62ch] text-[1.02rem] leading-[1.6] ${tone === 'dark' ? 'text-mist' : 'text-ink-soft'}`}
      >
        {intro}
      </p>
    </div>
  )
}
