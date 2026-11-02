// Marca da JOVI Lens: dois cantos de enquadramento de câmera.
export default function BrandMark({ className = '' }) {
  return (
    <span aria-hidden="true" className={`relative inline-block size-5 ${className}`}>
      <span className="absolute top-0 left-0 size-3 border-t-[2.5px] border-l-[2.5px] border-jovi-blue" />
      <span className="absolute right-0 bottom-0 size-3 border-r-[2.5px] border-b-[2.5px] border-amber" />
    </span>
  )
}
