export default function ControlHeader({
  mode, setMode,
  routeType, setRouteType,
  trafficActive, noiseActive, liveOn,
  layerVisibility, toggleLayer,
  toggleNoiseGroup, toggleLive,
  onClear,
}) {
  const btn = (active) =>
    `px-2.5 py-1 rounded text-xs border cursor-pointer transition-colors ` +
    (active
      ? 'bg-[#6d28d9] text-white border-[#a78bfa]'
      : 'bg-[#2d2d6b] text-gray-300 border-[#555] hover:bg-[#4040a0]')

  return (
    <header className="flex items-center gap-3 flex-wrap px-3 py-2 bg-[#12122a] border-b border-[#333] z-50 relative">
      <h1 className="text-sm font-semibold text-[#a78bfa] whitespace-nowrap">
        🗺 Weimar Movement &amp; Noise Map
      </h1>

      {/* Transport mode */}
      <div className="flex items-center gap-1.5">
        <span className="text-[11px] text-gray-500">Mode:</span>
        <button className={btn(mode === 'walk')} onClick={() => setMode('walk')}>
          🚶 Walk
        </button>
        <button className={btn(mode === 'bike')} onClick={() => setMode('bike')}>
          🚲 Bike
        </button>
      </div>

      {/* Route type */}
      <div className="flex items-center gap-1.5">
        <span className="text-[11px] text-gray-500">Route:</span>
        <select
          value={routeType}
          onChange={e => setRouteType(e.target.value)}
          className="bg-[#222] border border-[#444] text-gray-200 text-xs px-2 py-1 rounded"
        >
          <option value="fastest">⚡ Fastest</option>
          <option value="safest">🛡 Safest (low traffic)</option>
          <option value="nicest">🌿 Nicest (quiet &amp; green)</option>
          <option value="bike">🚲 Best for biking</option>
        </select>
      </div>

      {/* Quick-toggle buttons */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <button
          className={btn(trafficActive)}
          onClick={() => toggleLayer('main-roads')}
        >
          🚗 Traffic
        </button>
        <button
          className={btn(noiseActive)}
          onClick={toggleNoiseGroup}
        >
          🔊 Noise
        </button>
        <button
          className={btn(liveOn)}
          onClick={toggleLive}
        >
          {liveOn ? '⏹ Stop' : '▶ Live sim'}
        </button>
        <button
          className="px-2.5 py-1 rounded text-xs border cursor-pointer bg-[#2d2d6b] text-gray-300 border-[#555] hover:bg-[#4040a0] transition-colors"
          onClick={onClear}
        >
          ✕ Clear
        </button>
      </div>
    </header>
  )
}
