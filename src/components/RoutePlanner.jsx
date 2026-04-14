import { CHARACTERS, CHARACTER_ORDER } from '../data/characters.jsx'

const NOISE_LAYERS = [
  { key: 'traffic-noise', label: 'car traffic',            color: '#dc2626' },
  { key: 'rail-noise',    label: 'train traffic',           color: '#ea580c' },
  { key: 'construction',  label: 'construction',            color: '#ca8a04' },
  { key: 'school',        label: 'playgrounds & childcare', color: '#0284c7' },
  { key: 'hospitality',   label: 'bars & nightlife',        color: '#db2777' },
]

const PANEL_BG = 'linear-gradient(150deg, #FFE566 0%, #FFACE4 100%)'
const FONT     = "'Nunito', sans-serif"
const TEXT     = '#1a1209'
const MUTED    = 'rgba(26,18,9,0.52)'
const BORDER   = 'rgba(26,18,9,0.14)'
const INPUT_BG = 'rgba(255,255,255,0.6)'

function AddressRow({ label, color, value, onChange, onSearch, loading }) {
  return (
    <div className="mb-2">
      <p className="text-[11px] font-bold mb-0.5" style={{ color, fontFamily: FONT }}>{label}</p>
      <div className="flex gap-1">
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSearch(value)}
          placeholder="Type an address…"
          className="flex-1 min-w-0 text-[11px] px-2 py-1.5 rounded-lg focus:outline-none"
          style={{ background: INPUT_BG, border: `1px solid ${BORDER}`, color: TEXT, fontFamily: FONT }}
        />
        <button
          onClick={() => onSearch(value)}
          disabled={loading || !value.trim()}
          className="px-2 py-1.5 text-[11px] rounded-lg cursor-pointer shrink-0 disabled:opacity-30 font-bold"
          style={{ background: INPUT_BG, border: `1px solid ${BORDER}`, color: TEXT, fontFamily: FONT }}
        >
          {loading ? '…' : '↵'}
        </button>
      </div>
    </div>
  )
}

function CharacterCard({ char, selected, onSelect }) {
  const { Avatar } = char
  return (
    <button
      onClick={() => onSelect(char.id)}
      className="flex flex-col items-center cursor-pointer transition-all text-center w-full overflow-hidden"
      style={{
        background: selected ? char.cardBg : TEXT,
        border: `3px solid ${selected ? char.color : TEXT}`,
        borderRadius: 10,
        boxShadow: selected ? `4px 4px 0px ${char.color}` : `3px 3px 0px ${TEXT}`,
        transform: selected ? 'translate(-1px,-1px)' : 'none',
      }}
    >
      <div style={{
        background: selected ? char.cardBg : '#fffdf5',
        width: '100%', aspectRatio: '1 / 1',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', overflow: 'hidden',
      }}>
        <Avatar />
      </div>
      <div style={{ background: selected ? char.color : TEXT, width: '100%', padding: '4px 6px', fontFamily: FONT }}>
        <p className="text-[9px] font-black leading-tight uppercase tracking-wide"
          style={{ color: selected ? TEXT : '#f5edd8' }}>
          {char.name}
        </p>
        <p className="text-[8px] leading-tight mt-0.5"
          style={{ color: selected ? 'rgba(26,18,9,0.6)' : 'rgba(245,237,216,0.65)' }}>
          {char.tagline}
        </p>
      </div>
    </button>
  )
}

export default function RoutePlanner({
  ptA, ptB, routeInfo,
  selectedCharacter, setSelectedCharacter,
  onCalcRoute, onClear,
  searchA, setSearchA, searchingA, onSearchA,
  searchB, setSearchB, searchingB, onSearchB,
  noiseActive, toggleNoiseGroup,
  layerVisibility, toggleLayer,
  liveOn, toggleLive,
}) {
  const char = CHARACTERS[selectedCharacter]

  return (
    <div
      className="absolute top-3 left-3 z-[2000] overflow-hidden"
      style={{
        background: PANEL_BG,
        border: `2px solid ${TEXT}`,
        borderRadius: 18,
        boxShadow: '6px 6px 0px rgba(26,18,9,0.18)',
        width: 296,
      }}
    >
      {/* ── Route planning ── */}
      <div className="p-3.5" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 16, color: TEXT, marginBottom: 12, letterSpacing: '-0.01em' }}>
          Plan your walk
        </h3>

        <AddressRow label="▲ Start A"       color="#16a34a" value={searchA} onChange={setSearchA} onSearch={onSearchA} loading={searchingA}/>
        <AddressRow label="▼ Destination B"  color="#dc2626" value={searchB} onChange={setSearchB} onSearch={onSearchB} loading={searchingB}/>

        {(ptA || ptB) && (
          <div className="text-[10px] mb-2 space-y-0.5" style={{ color: MUTED, fontFamily: FONT }}>
            {ptA && <div><span style={{ color: '#16a34a' }}>A</span> {ptA.lat.toFixed(4)}, {ptA.lng.toFixed(4)}</div>}
            {ptB && <div><span style={{ color: '#dc2626' }}>B</span> {ptB.lat.toFixed(4)}, {ptB.lng.toFixed(4)}</div>}
          </div>
        )}

        <div className="mb-3">
          <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            Who's walking?
          </p>
          <div className="grid grid-cols-2 gap-2">
            {CHARACTER_ORDER.map(id => (
              <CharacterCard key={id} char={CHARACTERS[id]} selected={selectedCharacter === id} onSelect={setSelectedCharacter}/>
            ))}
          </div>
        </div>

        <button
          onClick={onCalcRoute}
          className="w-full py-2.5 rounded-xl cursor-pointer transition-all"
          style={{
            background: char.color,
            border: `2px solid ${TEXT}`,
            color: TEXT,
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: 13,
            boxShadow: `3px 3px 0px ${TEXT}`,
          }}
        >
          Go with {char.name} ↗
        </button>

        {(ptA || ptB) && (
          <button onClick={onClear} className="w-full mt-2 py-1.5 text-[11px] rounded-lg cursor-pointer"
            style={{ border: `1px solid ${BORDER}`, color: MUTED, background: 'transparent', fontFamily: FONT }}>
            ✕ Clear route
          </button>
        )}
      </div>

      {/* ── Route result ── */}
      {routeInfo && (
        <div className="px-3.5 py-2.5" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, fontFamily: FONT, lineHeight: 1.4 }}>
            {char.voice(routeInfo.dist.toFixed(1), Math.round(routeInfo.time))}
          </p>
          <p style={{ fontSize: 10, color: MUTED, marginTop: 4, fontFamily: FONT }}>
            Noise: <span style={{ color: TEXT }}>{routeInfo.noiseScore}</span>
            {'  ·  '}Comfort: <span style={{ color: TEXT }}>{routeInfo.comfortScore}</span>
          </p>
        </div>
      )}

      {/* ── Quick toggles ── */}
      <div className="px-3.5 py-3">
        <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          Quick toggles
        </p>
        <button
          onClick={toggleNoiseGroup}
          style={{
            background: noiseActive ? 'rgba(255,255,255,0.75)' : INPUT_BG,
            border: `1.5px solid ${noiseActive ? TEXT : BORDER}`,
            color: TEXT, display: 'block', width: '100%', padding: '7px 12px',
            marginBottom: noiseActive ? 0 : 6, borderRadius: noiseActive ? '8px 8px 0 0' : 8,
            cursor: 'pointer', textAlign: 'left',
            fontSize: 11, fontFamily: FONT, fontWeight: noiseActive ? 700 : 500,
          }}
        >
          🔊 Noise overlay {noiseActive ? '▴' : '▾'}
        </button>

        {/* Noise layer list — expands below button when active */}
        {noiseActive && (
          <div style={{
            background: 'rgba(255,255,255,0.75)',
            border: `1.5px solid ${TEXT}`,
            borderTop: 'none',
            borderRadius: '0 0 8px 8px',
            padding: '6px 12px 8px',
            marginBottom: 6,
          }}>
            {NOISE_LAYERS.map(l => (
              <label key={l.key} className="flex items-center gap-2 cursor-pointer py-0.5">
                <input type="checkbox" checked={layerVisibility[l.key]}
                  onChange={() => toggleLayer(l.key)}
                  className="cursor-pointer" style={{ accentColor: l.color }}/>
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color }}/>
                <span style={{ fontSize: 10, fontFamily: FONT, fontWeight: 600, color: layerVisibility[l.key] ? TEXT : MUTED }}>
                  {l.label}
                </span>
              </label>
            ))}
          </div>
        )}
        <button
          onClick={toggleLive}
          style={{
            background: liveOn ? 'rgba(255,255,255,0.75)' : INPUT_BG,
            border: `1.5px solid ${liveOn ? TEXT : BORDER}`,
            color: TEXT, display: 'block', width: '100%', padding: '7px 12px',
            marginBottom: 6, borderRadius: 8, cursor: 'pointer', textAlign: 'left',
            fontSize: 11, fontFamily: FONT, fontWeight: liveOn ? 700 : 500,
          }}
        >
          {liveOn ? '⏹ Stop simulation' : '▶ Traffic simulation'}
        </button>

      </div>
    </div>
  )
}
