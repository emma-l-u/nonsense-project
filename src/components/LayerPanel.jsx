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
        style={{ color: checked ? '#1e1030' : '#a09ab8' }}
      >
        {label}
      </span>
    </label>
  )
}

export default function LayerPanel({ layerVisibility, toggleLayer }) {
  return (
    <div
      className="absolute top-3 right-3 w-44 rounded-xl z-[2000] overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.95)',
        border: '1px solid #ede9f8',
        boxShadow: '0 4px 24px rgba(124,58,237,0.10), 0 1px 4px rgba(0,0,0,0.04)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div style={{ height: 3, background: 'linear-gradient(90deg, #7c3aed, #db2777, #0891b2)' }}/>
      <div className="p-3">
        <h3
          className="text-[10px] font-bold uppercase tracking-widest mb-2"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #db2777)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
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
