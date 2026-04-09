const NOISE_LAYERS = [
  { key: 'traffic-noise', label: 'car traffic',             color: '#ef4444' },
  { key: 'rail-noise',    label: 'train traffic',            color: '#f97316' },
  { key: 'construction',  label: 'construction',             color: '#eab308' },
  { key: 'school',        label: 'playgrounds & childcare',  color: '#06b6d4' },
  { key: 'hospitality',   label: 'bars & nightlife',         color: '#ec4899' },
]

function LayerRow({ layerKey, label, color, checked, onToggle }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-0.5 group">
      <input
        type="checkbox" checked={checked}
        onChange={() => onToggle(layerKey)}
        className="cursor-pointer"
        style={{ accentColor: color }}
      />
      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
      <span
        className="text-[11px] transition-colors"
        style={{ color: checked ? '#f0e0c0' : '#8c7050' }}
      >
        {label}
      </span>
    </label>
  )
}

export default function LayerPanel({ layerVisibility, toggleLayer }) {
  return (
    <div
      className="absolute top-3 right-3 w-44 rounded-xl shadow-xl z-[2000] overflow-hidden"
      style={{ background: '#1c1410f8', border: '1px solid #3d2a12' }}
    >
      <div className="p-3">
        <h3
          className="text-[10px] font-bold uppercase tracking-widest mb-2"
          style={{ color: '#8c7050' }}
        >
          Noise sources
        </h3>
        {NOISE_LAYERS.map(l => (
          <LayerRow key={l.key} layerKey={l.key} label={l.label} color={l.color}
            checked={layerVisibility[l.key]} onToggle={toggleLayer} />
        ))}
      </div>
    </div>
  )
}
