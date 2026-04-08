const LEGEND = [
  { color: '#22c55e', label: 'Fastest' },
  { color: '#3b82f6', label: 'Safest' },
  { color: '#84cc16', label: 'Nicest' },
  { color: '#f59e0b', label: 'Best bike' },
]

function SearchInput({ label, color, value, onChange, onSearch, loading, placeholder }) {
  return (
    <div className="mb-2">
      <p className="text-[11px] mb-0.5" style={{ color }}>{label}</p>
      <div className="flex gap-1">
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSearch(value)}
          placeholder={placeholder}
          className="flex-1 bg-[#1e1e3a] border border-[#444] text-gray-200 text-[11px] px-2 py-1 rounded focus:outline-none focus:border-[#a78bfa]"
        />
        <button
          onClick={() => onSearch(value)}
          disabled={loading || !value.trim()}
          className="px-2 py-1 text-[11px] rounded bg-[#2d2d6b] border border-[#555] text-gray-300 hover:bg-[#4040a0] disabled:opacity-40 cursor-pointer transition-colors"
        >
          {loading ? '…' : '↵'}
        </button>
      </div>
    </div>
  )
}

export default function RoutePlanner({
  ptA, ptB, routeInfo, onCalcRoute, onClear,
  searchA, setSearchA, searchingA, onSearchA,
  searchB, setSearchB, searchingB, onSearchB,
}) {
  return (
    <div className="absolute top-3 left-3 w-56 bg-[#12122a]/95 border border-[#333] rounded-lg p-3 z-[2000] text-xs">
      <h3 className="text-[13px] font-semibold text-[#a78bfa] mb-2">Route planner</h3>

      {/* Address search */}
      <SearchInput
        label="▲ Start point A"
        color="#4ade80"
        value={searchA}
        onChange={setSearchA}
        onSearch={onSearchA}
        loading={searchingA}
        placeholder="Search address…"
      />
      <SearchInput
        label="▼ Destination B"
        color="#f87171"
        value={searchB}
        onChange={setSearchB}
        onSearch={onSearchB}
        loading={searchingB}
        placeholder="Search address…"
      />

      {/* Coordinate display */}
      <div className="text-[10px] text-gray-500 mb-2 leading-4">
        <span className="text-[#4ade80]">A: </span>
        {ptA ? `${ptA.lat.toFixed(4)}, ${ptA.lng.toFixed(4)}` : 'or click map'}
        <br />
        <span className="text-[#f87171]">B: </span>
        {ptB ? `${ptB.lat.toFixed(4)}, ${ptB.lng.toFixed(4)}` : 'or click map'}
      </div>

      {/* Actions */}
      <button onClick={onCalcRoute}
        className="w-full text-left px-2 py-1.5 mb-1 text-[11px] rounded border border-[#555] bg-[#2d2d6b] text-gray-300 hover:bg-[#4040a0] cursor-pointer transition-colors">
        Calculate route ↗
      </button>
      <button onClick={onClear}
        className="w-full text-left px-2 py-1.5 text-[11px] rounded border border-[#555] bg-[#2d2d6b] text-gray-300 hover:bg-[#4040a0] cursor-pointer transition-colors">
        ✕ Clear
      </button>

      {/* Route result */}
      {routeInfo && (
        <div className="mt-3 pt-2 border-t border-[#333]">
          <p className="text-[#a78bfa] font-medium">{routeInfo.label}</p>
          <p className="text-gray-200 mt-0.5">~{routeInfo.dist.toFixed(1)} km · ~{Math.round(routeInfo.time)} min</p>
          <p className="text-[11px] mt-1 text-gray-400">
            Noise: <span className="text-[#a78bfa]">{routeInfo.noiseScore}</span>
            {'  '}Comfort: <span className="text-[#84cc16]">{routeInfo.comfortScore}</span>
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-3 pt-2 border-t border-[#333]">
        <p className="text-gray-500 text-[11px] mb-1">Route types</p>
        {LEGEND.map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5 mb-0.5">
            <div style={{ background: color, width: 20, height: 3, borderRadius: 2, flexShrink: 0 }} />
            <span className="text-[11px] text-gray-300">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
