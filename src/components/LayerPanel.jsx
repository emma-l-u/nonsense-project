const NOISE_LAYERS = [
  { key: 'traffic-noise', label: 'car traffic',                    color: '#ef4444' },
  { key: 'rail-noise',    label: 'train traffic',                  color: '#f97316' },
  { key: 'construction',  label: 'construction',                   color: '#eab308' },
  { key: 'school',        label: 'playgrounds & childcare',        color: '#06b6d4' },
  { key: 'hospitality',   label: 'bars & nightlife',               color: '#ec4899' },
]

const MAP_LAYERS = [
  { key: 'main-roads',  label: 'traffic arteries', color: '#dc2626' },
  { key: 'bike-lanes',  label: 'bike lanes',       color: '#f59e0b' },
  { key: 'pedestrian',  label: 'pedestrian zones', color: '#fde047' },
  { key: 'park',        label: 'green zones',      color: '#4ade80' },
]

function LayerRow({ layerKey, label, color, checked, onToggle }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-0.5 group">
      <input type="checkbox" checked={checked} onChange={() => onToggle(layerKey)} className="cursor-pointer accent-violet-500" />
      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
      <span className="text-[11px] text-gray-400 group-hover:text-gray-200 transition-colors">{label}</span>
    </label>
  )
}

export default function LayerPanel({ layerVisibility, toggleLayer }) {
  return (
    <div className="absolute top-3 right-3 w-48 bg-[#12122a]/97 border border-[#2a2a4a] rounded-xl shadow-xl z-[2000] overflow-hidden">

      <div className="p-3 border-b border-[#2a2a4a]">
        <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Noise sources</h3>
        {NOISE_LAYERS.map(l => (
          <LayerRow key={l.key} layerKey={l.key} label={l.label} color={l.color}
            checked={layerVisibility[l.key]} onToggle={toggleLayer} />
        ))}
      </div>

      <div className="p-3">
        <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Map layers</h3>
        {MAP_LAYERS.map(l => (
          <LayerRow key={l.key} layerKey={l.key} label={l.label} color={l.color}
            checked={layerVisibility[l.key]} onToggle={toggleLayer} />
        ))}
      </div>

    </div>
  )
}
