const RUSH_ZONES = [
  { start: 6,  end: 9,  color: '#f97316', label: 'morning rush' },
  { start: 12, end: 13, color: '#eab308', label: 'lunch hour'   },
  { start: 16, end: 19, color: '#ef4444', label: 'evening rush' },
]

function fmt(hours) {
  const h = Math.floor(hours) % 24
  const m = Math.floor((hours % 1) * 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

function trafficStatus(hour) {
  const h = hour % 24
  if (h >= 7  && h < 9)  return { label: 'morning rush hour', color: '#f97316' }
  if (h >= 16 && h < 19) return { label: 'evening rush hour', color: '#ef4444' }
  if (h >= 12 && h < 13) return { label: 'lunch hour',        color: '#eab308' }
  if (h >= 22 || h < 6)  return { label: 'night — quiet',     color: '#60a5fa' }
  return { label: 'normal traffic', color: '#4ade80' }
}

export default function TimeSlider({ simHour, setSimHour, liveOn }) {
  const hour24 = simHour % 24
  const minutes = Math.round(hour24 * 60)
  const pct = (hour24 / 24) * 100
  const status = trafficStatus(hour24)

  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2000] select-none overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.97)',
        border: '1px solid #ede9f8',
        borderRadius: 16,
        padding: '0 0 12px 0',
        boxShadow: '0 4px 32px rgba(124,58,237,0.12), 0 1px 6px rgba(0,0,0,0.05)',
        backdropFilter: 'blur(10px)',
        width: 340,
      }}
    >
      {/* Gradient accent strip */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, #7c3aed, #db2777, #0891b2)', marginBottom: 12 }}/>
      {/* Top row */}
      <div className="flex items-center justify-between mb-2.5 px-4">
        <span className="text-[22px] font-bold text-gray-800 font-mono tracking-tight leading-none">
          {fmt(simHour)}
        </span>
        <span className="text-[11px] font-medium" style={{ color: status.color }}>
          {status.label}
        </span>
        <span className="text-[10px] text-gray-400 w-16 text-right">
          {liveOn ? '⟳ running' : '⏸ paused'}
        </span>
      </div>

      {/* Slider */}
      <div className="relative h-5 flex items-center mb-1 px-4">
        {/* Base track */}
        <div className="absolute w-full h-2 rounded-full bg-gray-200" />

        {/* Rush hour colored zones */}
        {RUSH_ZONES.map((z, i) => (
          <div key={i} className="absolute h-2 rounded-full opacity-70"
            style={{
              left:  `${(z.start / 24) * 100}%`,
              width: `${((z.end - z.start) / 24) * 100}%`,
              background: z.color,
            }}
          />
        ))}

        {/* Progress fill */}
        <div className="absolute h-2 rounded-full"
          style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #7c3aed, #db2777)', opacity: 0.8 }} />

        {/* Transparent range input — handles all interaction */}
        <input
          type="range" min="0" max="1439" step="1"
          value={minutes}
          onChange={e => setSimHour(parseInt(e.target.value) / 60)}
          className="absolute w-full h-5 opacity-0 cursor-pointer z-10"
        />

        {/* Custom thumb */}
        <div
          className="absolute w-4 h-4 rounded-full bg-white pointer-events-none z-20"
          style={{ left: `calc(${pct}% - 8px)`, border: '2px solid #7c3aed', boxShadow: '0 0 0 3px rgba(124,58,237,0.15), 0 2px 6px rgba(0,0,0,0.1)' }}
        />
      </div>

      {/* Hour labels */}
      <div className="flex justify-between text-[9px] text-gray-400 mt-0.5 px-4">
        {['00:00', '06:00', '12:00', '18:00', '24:00'].map(h => (
          <span key={h}>{h}</span>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-2 pt-2 border-t border-gray-100 px-4">
        {RUSH_ZONES.map((z, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: z.color }} />
            <span className="text-[9px] text-gray-400">{z.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
