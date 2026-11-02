import Corner from './Corner'

export default function BrandMark({ small = false }) {
  const size = small ? 'sm' : 'md'

  return (
    <span aria-hidden="true" className={`relative shrink-0 ${small ? 'size-[18px]' : 'size-[22px]'}`}>
      <Corner at="tl" size={size} />
      <Corner at="br" size={size} />
    </span>
  )
}
