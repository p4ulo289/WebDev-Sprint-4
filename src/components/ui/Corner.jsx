const positions = {
  tl: '-top-0.5 -left-0.5 border-r-0 border-b-0',
  tr: '-top-0.5 -right-0.5 border-b-0 border-l-0',
  bl: '-bottom-0.5 -left-0.5 border-t-0 border-r-0',
  br: '-right-0.5 -bottom-0.5 border-t-0 border-l-0',
}

const sizes = {
  md: 'size-[18px]',
  sm: 'size-[14px]',
}

const tones = {
  blue: 'border-jovi-blue',
  amber: 'border-amber',
}

export default function Corner({ at, size = 'md', tone = 'blue', className = '' }) {
  return (
    <span
      className={`absolute border-[2.5px] ${positions[at]} ${sizes[size]} ${tones[tone]} ${className}`}
    />
  )
}
