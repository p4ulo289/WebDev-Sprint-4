const sizes = {
  hero: 'w-60',
  gallery: 'mx-auto w-full max-w-[220px]',
}

const screens = {
  scan: 'items-center justify-center',
  adjust: 'items-end justify-center',
  guide: 'flex-col items-center justify-center gap-4',
}

export default function Phone({ size = 'hero', screen = 'scan', children }) {
  return (
    <div
      className={`relative aspect-[9/18.5] rounded-4xl border-[3px] border-white/15 bg-indigo p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ${sizes[size]}`}
    >
      <div className="absolute top-2.5 left-1/2 z-3 h-4 w-15 -translate-x-1/2 rounded-full bg-ink" />
      <div
        className={`relative flex h-full w-full overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#1B2450_0%,#0E1330_100%)] ${screens[screen]}`}
      >
        {children}
      </div>
    </div>
  )
}
