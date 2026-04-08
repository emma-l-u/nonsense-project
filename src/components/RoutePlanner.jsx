const LEGEND = [
  { color: '#22c55e', label: 'Fastest' },
  { color: '#3b82f6', label: 'Safest' },
  { color: '#84cc16', label: 'Nicest' },
  { color: '#f59e0b', label: 'Best bike' },
]

export default function RoutePlanner({ ptA, ptB, routeInfo, onCalcRoute, onClear }) {
  const fmtCoord = (ll) =>
    ll ? `${ll.lat.toFixed(4)}, ${ll.lng.toFixed(4)}` : 'not set'

  return (
    <div className="absolute top-3 left-3 w-52 bg-[#12122a]/95 border border-[#333] rounded-lg p-3 z-[2000] text-xs">
      <h3 className="text-[13px] font-semibold text-[#a78bfa] mb-2">Route planner</h3>

      {/* A / B coordinates */}
      <p className="text-gray-500 text-[11px] mb-1">Click map to set A → B</p>
      <p className="text-[#4ade80] text-[11px]">A: {fmtCoord(ptA)}</p>
      <p className="text-[#f87171] text-[11px] mb-2">B: {fmtCoord(ptB)}</p>

      {/* Buttons */}
      <button
        onClick={onCalcRoute}
        className="w-full text-left px-2 py-1.5 mb-1 text-[11px] rounded border border-[#555] bg-[#2d2d6b] text-gray-300 hover:bg-[#4040a0] cursor-pointer transition-colors"
      >
        Calculate route ↗
      </button>
      <button
        onClick={onClear}
        className="w-full text-left px-2 py-1.5 text-[11px] rounded border border-[#555] bg-[#2d2d6b] text-gray-300 hover:bg-[#4040a0] cursor-pointer transition-colors"
      >
        ✕ Clear route
      </button>

      {/* Route result */}
      {routeInfo && (
        <div className="mt-3 pt-2 border-t border-[#333]">
          <p className="text-[#a78bfa]">Distance: ~{routeInfo.dist.toFixed(1)} km</p>
          <p className="text-gray-300 text-[11px] mt-0.5">
            Est. time: ~{Math.round(routeInfo.time)} min
          </p>
          <p className="text-[11px] mt-1">
            Noise: <span className="text-[#a78bfa]">{routeInfo.noiseScore}</span>
            {' '}· Comfort: <span className="text-[#84cc16]">{routeInfo.comfortScore}</span>
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-3 pt-2 border-t border-[#333]">
        <p className="text-gray-500 text-[11px] mb-1">Legend</p>
        {LEGEND.map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5 mb-1">
            <div className="w-5 h-0.5 rounded" style={{ background: color, height: '3px' }} />
            <span className="text-[11px] text-gray-300">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
