import Corner from './Corner'

export default function TeamCard({ initials, name, role, bio, placeholder = false }) {
  return (
    <article
      className={`min-w-0 rounded-card border bg-indigo p-7 ${placeholder ? 'border-dashed border-white/20' : 'border-white/8'}`}
    >
      <div
        aria-hidden="true"
        className="relative mb-5 flex size-12 items-center justify-center rounded-full bg-white/6 font-mono text-[.85rem] text-jovi-blue-soft"
      >
        <Corner at="tl" />
        <Corner at="br" />
        {initials}
      </div>
      <h3 className="mb-1 text-[1.05rem] font-bold">{name}</h3>
      <p className="mb-3 font-mono text-[.7rem] tracking-wider text-amber uppercase">{role}</p>
      {bio && <p className="text-[.9rem] leading-[1.55] text-mist">{bio}</p>}
    </article>
  )
}
