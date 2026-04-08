// Unified left panel: route planning + layer quick-toggles

const ROUTE_TYPES = [
  { value: 'fastest', label: '⚡ Fastest'             },
  { value: 'safest',  label: '🛡 Safest (low traffic)' },
  { value: 'nicest',  label: '🌿 Nicest (quiet & green)'},
  { value: 'bike',    label: '🚲 Best for biking'       },
]

function AddressRow({ label, color, value, onChange, onSearch, loading }) {
  return (
    <div className="mb-2">
      <p className="text-[11px] font-medium mb-0.5" style={{ color }}>{label}</p>
      <div className="flex gap-1">
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSearch(value)}
          placeholder="Type an address…"
          className="flex-1 min-w-0 bg-[#1a1a30] border border-[#3a3a5a] text-gray-200 text-[11px] px-2 py-1.5 rounded focus:outline-none focus:border-[#a78bfa] transition-colors"
        />
        <button
          onClick={() => onSearch(value)}
          disabled={loading || !value.trim()}
          className="px-2 py-1.5 text-[11px] rounded bg-[#2d2d6b] border border-[#555] text-gray-300 hover:bg-[#4040a0] disabled:opacity-30 cursor-pointer transition-colors shrink-0"
        >
          {loading ? '…' : '↵'}
        </button>
      </div>
    </div>
  )
}

export default function RoutePlanner({
  ptA, ptB, routeInfo,
  mode, setMode, routeType, setRouteType,
  onCalcRoute,
  searchA, setSearchA, searchingA, onSearchA,
  searchB, setSearchB, searchingB, onSearchB,
  noiseActive, toggleNoiseGroup,
  liveOn, toggleLive,
}) {
  const modeBtn = (active) =>
    `flex-1 py-1.5 text-[11px] rounded border cursor-pointer transition-colors text-center ` +
    (active ? 'bg-[#6d28d9] text-white border-[#a78bfa]' : 'bg-[#1a1a30] text-gray-400 border-[#3a3a5a] hover:border-[#6d28d9]')

  const quickBtn = (active) =>
    `w-full py-1.5 px-3 text-[11px] rounded border cursor-pointer transition-colors text-left ` +
    (active ? 'bg-[#6d28d9] text-white border-[#a78bfa]' : 'bg-[#1a1a30] text-gray-400 border-[#3a3a5a] hover:border-[#6d28d9]')

  return (
    <div className="absolute top-3 left-3 w-60 bg-[#12122a]/97 border border-[#2a2a4a] rounded-xl shadow-xl z-[2000] overflow-hidden">

      {/* ── Route planning ── */}
      <div className="p-3 border-b border-[#2a2a4a]">
        <h3 className="text-[12px] font-semibold text-[#a78bfa] mb-2 uppercase tracking-wider">Plan Route</h3>

        <AddressRow
          label="▲ Start point A"
          color="#4ade80"
          value={searchA} onChange={setSearchA}
          onSearch={onSearchA} loading={searchingA}
        />
        <AddressRow
          label="▼ Destination B"
          color="#f87171"
          value={searchB} onChange={setSearchB}
          onSearch={onSearchB} loading={searchingB}
        />

        {/* Coordinate hints */}
        {(ptA || ptB) && (
          <div className="text-[10px] text-gray-600 mb-2 space-y-0.5">
            {ptA && <div><span className="text-green-500">A</span> {ptA.lat.toFixed(4)}, {ptA.lng.toFixed(4)}</div>}
            {ptB && <div><span className="text-red-400">B</span> {ptB.lat.toFixed(4)}, {ptB.lng.toFixed(4)}</div>}
          </div>
        )}

        {/* Transport mode */}
        <div className="mb-2">
          <p className="text-[10px] text-gray-500 mb-1">Mode of transport</p>
          <div className="flex gap-1">
            <button className={modeBtn(mode === 'walk')} onClick={() => setMode('walk')}>🚶 Walk</button>
            <button className={modeBtn(mode === 'bike')} onClick={() => setMode('bike')}>🚲 Bike</button>
          </div>
        </div>

        {/* Route type */}
        <div className="mb-3">
          <p className="text-[10px] text-gray-500 mb-1">Route preference</p>
          <select
            value={routeType}
            onChange={e => setRouteType(e.target.value)}
            className="w-full bg-[#1a1a30] border border-[#3a3a5a] text-gray-200 text-[11px] px-2 py-1.5 rounded focus:outline-none focus:border-[#a78bfa] cursor-pointer"
          >
            {ROUTE_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>

        <button
          onClick={onCalcRoute}
          className="w-full py-2 text-[12px] font-medium rounded bg-[#6d28d9] text-white hover:bg-[#7c3aed] cursor-pointer transition-colors"
        >
          Calculate route ↗
        </button>
      </div>

      {/* ── Route result ── */}
      {routeInfo && (
        <div className="px-3 py-2 border-b border-[#2a2a4a] bg-[#1a1a35]">
          <p className="text-[11px] font-medium text-[#a78bfa]">{routeInfo.label}</p>
          <p className="text-[12px] text-gray-200 mt-0.5 font-medium">
            {routeInfo.dist.toFixed(1)} km · {Math.round(routeInfo.time)} min
          </p>
          <p className="text-[10px] text-gray-500 mt-0.5">
            Noise exposure: <span className="text-gray-300">{routeInfo.noiseScore}</span>
            {'  ·  '}Comfort: <span className="text-gray-300">{routeInfo.comfortScore}</span>
          </p>
        </div>
      )}

      {/* ── Quick layer toggles ── */}
      <div className="p-3 space-y-1.5">
        <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Quick toggles</h3>
        <button className={quickBtn(noiseActive)} onClick={toggleNoiseGroup}>
          🔊 Noise layer
        </button>
        <button className={quickBtn(liveOn)} onClick={toggleLive}>
          {liveOn ? '⏹ Stop simulation' : '▶ Traffic simulation'}
        </button>
      </div>
    </div>
  )
}
