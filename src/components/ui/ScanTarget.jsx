import Corner from './Corner'
import NotebookLines from './NotebookLines'

export default function ScanTarget({ small = false, scanLine = false }) {
  return (
    <div className={`relative rounded-sm bg-paper/6 ${small ? 'h-[48%] w-[68%]' : 'h-[55%] w-[72%]'}`}>
      <Corner at="tl" size="sm" tone="amber" />
      <Corner at="tr" size="sm" tone="amber" />
      <Corner at="bl" size="sm" tone="amber" />
      <Corner at="br" size="sm" tone="amber" />
      {scanLine && (
        <div className="absolute inset-x-[4%] h-0.5 animate-scan bg-linear-90 from-transparent via-jovi-blue-soft to-transparent" />
      )}
      <NotebookLines count={small ? 4 : 5} />
    </div>
  )
}
