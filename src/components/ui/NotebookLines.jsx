export default function NotebookLines({ count }) {
  return (
    <div className="absolute inset-x-[12%] inset-y-[18%] grid gap-[16%]">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={`block h-0.5 bg-white/28 ${index === count - 1 ? 'w-3/5' : ''}`}
        />
      ))}
    </div>
  )
}
