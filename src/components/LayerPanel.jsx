const NOISE_LAYERS = [
  { key: 'traffic-noise', label: 'Road traffic noise',   color: '#ef4444' },
  { key: 'rail-noise',    label: 'Train / rail noise',   color: '#f97316' },
  { key: 'construction',  label: 'Construction sites',   color: '#eab308' },
  { key: 'school',        label: 'Schools / playgrounds', color: '#06b6d4' },
  { key: 'hospitality',   label: 'Bars & nightlife',     color: '#ec4899' },
  { key: 'market',        label: 'Markets / events',     color: '#8b5cf6' },
  { key: 'park',          label: 'Quiet green zones',    color: '#22c55e' },
]

const TRAFFIC_LAYERS = [
  { key: 'main-roads',  label: 'Main traffic arteries', color: '#dc2626' },
  { key: 'bike-lanes',  label: 'Bike lanes',            color: '#f59e0b' },
  { key: 'pedestrian',  label: 'Pedestrian zones',      color: '#84cc16' },
  { key: 'heatmap',     label: 'Traffic heatmap',       color: '#ef444466' },
]

function LayerRow({ layerKey, label, color, checked, onToggle }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-0.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(layerKey)}
        className="cursor-pointer"
      />
      <span
        className="inline-block w-3 h-3 rounded-full flex-shrink-0"
        style={{ background: color }}
      />
      <span className="text-[11px] text-gray-300">{label}</span>
    </label>
  )
}

export default function LayerPanel({ layerVisibility, toggleLayer }) {
  return (
    <div className="absolute top-3 right-3 w-52 bg-[#12122a]/95 border border-[#333] rounded-lg p-3 z-[2000] text-xs max-h-[calc(100vh-120px)] overflow-y-auto">
      <h3 className="text-[13px] font-semibold text-[#a78bfa] mb-2">Noise sources</h3>
      {NOISE_LAYERS.map(l => (
        <LayerRow key={l.key} layerKey={l.key} label={l.label} color={l.color}
          checked={layerVisibility[l.key]} onToggle={toggleLayer} />
      ))}

      <h3 className="text-[13px] font-semibold text-[#a78bfa] mt-3 mb-2">Traffic layers</h3>
      {TRAFFIC_LAYERS.map(l => (
        <LayerRow key={l.key} layerKey={l.key} label={l.label} color={l.color}
          checked={layerVisibility[l.key]} onToggle={toggleLayer} />
      ))}
    </div>
  )
}
