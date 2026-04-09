const NOISE_LAYERS = [
  { key: 'traffic-noise', label: 'car traffic',             color: '#fca5a5' },
  { key: 'rail-noise',    label: 'train traffic',            color: '#fdba74' },
  { key: 'construction',  label: 'construction',             color: '#fde047' },
  { key: 'school',        label: 'playgrounds & childcare',  color: '#7dd3fc' },
  { key: 'hospitality',   label: 'bars & nightlife',         color: '#f9a8d4' },
]

const PANEL_BG = 'linear-gradient(160deg, #e8007e 0%, #7c3aed 48%, #0ea5e9 100%)'
const SYNE = "'Syne', sans-serif"
const WD   = 'rgba(255,255,255,0.22)'
const WM   = 'rgba(255,255,255,0.62)'
const WB   = 'rgba(255,255,255,0.14)'

function LayerRow({ layerKey, label, color, checked, onToggle }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-1 group">
      <input
        type="checkbox" checked={checked}
        onChange={() => onToggle(layerKey)}
        className="cursor-pointer"
        style={{ accentColor: color }}
      />
      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
      <span
        className="text-[11px] font-medium transition-colors"
        style={{ color: checked ? 'rgba(255,255,255,0.95)' : WM, fontFamily: SYNE }}
      >
        {label}
      </span>
    </label>
  )
}

export default function LayerPanel({ layerVisibility, toggleLayer }) {
  return (
    <div
      className="absolute top-3 right-3 w-48 rounded-2xl z-[2000] overflow-hidden"
      style={{
        background: PANEL_BG,
        border: 'none',
        boxShadow: '0 8px 40px rgba(124,58,237,0.4), 0 2px 10px rgba(0,0,0,0.18)',
      }}
    >
      <div className="p-3.5">
        <h3
          className="text-[11px] font-black uppercase tracking-widest mb-3"
          style={{ color: 'white', fontFamily: SYNE, letterSpacing: '0.1em' }}
        >
          Noise sources
        </h3>
        <div style={{ borderTop: `1px solid ${WD}`, paddingTop: 8 }}>
          {NOISE_LAYERS.map(l => (
            <LayerRow key={l.key} layerKey={l.key} label={l.label} color={l.color}
              checked={layerVisibility[l.key]} onToggle={toggleLayer} />
          ))}
        </div>
      </div>
    </div>
  )
}
