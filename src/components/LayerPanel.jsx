const NOISE_LAYERS = [
  { key: 'traffic-noise', label: 'car traffic',             color: '#dc2626' },
  { key: 'rail-noise',    label: 'train traffic',            color: '#ea580c' },
  { key: 'construction',  label: 'construction',             color: '#ca8a04' },
  { key: 'school',        label: 'playgrounds & childcare',  color: '#0284c7' },
  { key: 'hospitality',   label: 'bars & nightlife',         color: '#db2777' },
]

const PANEL_BG = 'linear-gradient(150deg, #FFE566 0%, #FFACE4 100%)'
const FONT     = "'Nunito', sans-serif"
const TEXT     = '#1a1209'
const MUTED    = 'rgba(26,18,9,0.52)'
const BORDER   = 'rgba(26,18,9,0.14)'

function LayerRow({ layerKey, label, color, checked, onToggle }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-1">
      <input type="checkbox" checked={checked} onChange={() => onToggle(layerKey)}
        className="cursor-pointer" style={{ accentColor: color }}/>
      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }}/>
      <span className="text-[11px] font-semibold transition-colors"
        style={{ color: checked ? TEXT : MUTED, fontFamily: FONT }}>
        {label}
      </span>
    </label>
  )
}

export default function LayerPanel({ layerVisibility, toggleLayer }) {
  return (
    <div className="absolute top-3 right-3 w-48 rounded-2xl z-[2000] overflow-hidden"
      style={{ background: PANEL_BG, border: `2px solid ${TEXT}`, boxShadow: '6px 6px 0px rgba(26,18,9,0.18)' }}>
      <div className="p-3.5">
        <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 13, color: TEXT, marginBottom: 10 }}>
          Noise sources
        </h3>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 8 }}>
          {NOISE_LAYERS.map(l => (
            <LayerRow key={l.key} layerKey={l.key} label={l.label} color={l.color}
              checked={layerVisibility[l.key]} onToggle={toggleLayer}/>
          ))}
        </div>
      </div>
    </div>
  )
}
