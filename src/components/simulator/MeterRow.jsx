export default function MeterRow({ label, value, barClassName }) {
  return (
    <div className="flex flex-col gap-[.3rem] font-mono text-[.55rem] text-mist">
      <span>
        {label} · {value}%
      </span>
      <div className="h-1 overflow-hidden rounded-full bg-white/15">
        <div className={`h-full rounded-full ${barClassName}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
