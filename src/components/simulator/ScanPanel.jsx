import { getPositionTip } from '../../utils/scan'
import Button from '../ui/Button'
import HudChip from '../ui/HudChip'
import Phone from '../ui/Phone'
import ScanTarget from '../ui/ScanTarget'
import MeterRow from './MeterRow'

function getChipText(scan, scanning) {
  if (scanning) return 'Analisando...'
  if (scan) return `${scan.subject} detectado`
  return 'Aguardando leitura'
}

export default function ScanPanel({ scan, scanning, onScan }) {
  const showResult = scan && !scanning

  return (
    <div className="flex min-w-0 flex-col items-center gap-6">
      <Phone>
        <ScanTarget scanLine={scanning} />
        <HudChip>{getChipText(scan, scanning)}</HudChip>

        {showResult && (
          <div className="absolute inset-x-0 bottom-[8%] flex flex-col gap-[.5rem] px-[10%]">
            <MeterRow label="Foco" value={scan.focus} barClassName="bg-jovi-blue-soft" />
            <MeterRow label="Luz" value={scan.light} barClassName="bg-amber" />
            <MeterRow label="Confiança" value={Math.round(scan.confidence)} barClassName="bg-live" />
          </div>
        )}
      </Phone>

      <Button type="button" onClick={onScan} disabled={scanning}>
        {scanning ? 'Escaneando...' : 'Escanear agora'}
      </Button>

      <p role="status" aria-live="polite" className="min-h-[2.4em] max-w-[28ch] text-center text-[.9rem] text-mist">
        {showResult ? getPositionTip(scan.light) : 'Clique em escanear para simular uma leitura.'}
      </p>
    </div>
  )
}
