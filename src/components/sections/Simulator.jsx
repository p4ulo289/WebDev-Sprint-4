import { useEffect, useRef, useState } from 'react'
import { MAX_HISTORY, STORAGE_KEYS } from '../../data/simulator'
import useLocalStorage from '../../hooks/useLocalStorage'
import { calculateStats, generateScan } from '../../utils/scan'
import ScanHistory from '../simulator/ScanHistory'
import ScanPanel from '../simulator/ScanPanel'
import StatsGrid from '../simulator/StatsGrid'
import Section from '../ui/Section'
import SectionHead from '../ui/SectionHead'

const SCAN_DURATION_MS = 900

export default function Simulator() {
  const [scans, setScans] = useLocalStorage(STORAGE_KEYS.scans, [])
  const [scanning, setScanning] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  function handleScan() {
    setScanning(true)
    timerRef.current = setTimeout(() => {
      setScans((previous) => [generateScan(), ...previous].slice(0, MAX_HISTORY))
      setScanning(false)
    }, SCAN_DURATION_MS)
  }

  function handleClear() {
    setScans([])
  }

  const stats = calculateStats(scans)

  return (
    <Section id="simulador" tone="indigo" labelledBy="simulador-title">
      <SectionHead
        tone="dark"
        titleId="simulador-title"
        eyebrow="Teste você mesmo"
        title="Simulador de leitura"
        intro="Simule uma leitura da JOVI Lens: a matéria, o foco e a luz são sorteados a cada clique. O histórico e as estatísticas ficam salvos no seu navegador."
      />

      <div className="grid items-start gap-12 md:grid-cols-[.8fr_1fr]">
        <ScanPanel scan={scans[0]} scanning={scanning} onScan={handleScan} />

        <div className="grid min-w-0 gap-8">
          <StatsGrid stats={stats} />
          <ScanHistory scans={scans} onClear={handleClear} />
        </div>
      </div>
    </Section>
  )
}
