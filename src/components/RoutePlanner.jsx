import { useState } from 'react'
import { CHARACTERS, CHARACTER_ORDER } from '../data/characters.jsx'

// ── Colour tokens ──────────────────────────────────────────────────────────────
const P = {
  bg:      '#ffffff',
  bgDeep:  '#f8f6ff',
  border:  '#ede9f8',
  input:   '#f8f6ff',
  text:    '#1e1030',
  muted:   '#8b7ea8',
  accent:  '#7c3aed',
}
const GRAD = 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)'
const GRAD_TEXT = {
  background: GRAD,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

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
          className="flex-1 min-w-0 text-[11px] px-2 py-1.5 rounded focus:outline-none transition-colors"
          style={{ background: P.input, border: `1px solid ${P.border}`, color: P.text }}
        />
        <button
          onClick={() => onSearch(value)}
          disabled={loading || !value.trim()}
          className="px-2 py-1.5 text-[11px] rounded cursor-pointer transition-colors shrink-0 disabled:opacity-30"
          style={{ background: '#2d1a08', border: `1px solid ${P.border}`, color: P.text }}
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
        background: selected ? char.cardBg : '#f5edd8',
        border: `3px solid ${selected ? char.color : '#1a1209'}`,
        borderRadius: 10,
        boxShadow: selected ? `4px 4px 0px ${char.color}` : '3px 3px 0px #1a1209',
        transform: selected ? 'translate(-1px,-1px)' : 'none',
      }}
    >
      {/* Character illustration — fills top of card */}
      <div style={{
        background: selected ? char.cardBg : '#f5edd8',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingTop: 6,
        minHeight: 72,
        overflow: 'hidden',
      }}>
        <Avatar />
      </div>
      {/* Name label — bold stripe at bottom */}
      <div style={{
        background: selected ? char.color : '#1a1209',
        width: '100%',
        padding: '4px 6px',
      }}>
        <p className="text-[10px] font-black leading-tight uppercase tracking-wide"
          style={{ color: selected ? '#1a1209' : '#f5edd8' }}>
          {char.name}
        </p>
        <p className="text-[8px] leading-tight mt-0.5"
          style={{ color: selected ? '#1a120988' : '#f5edd870' }}>
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
  liveOn, toggleLive,
  communityPins, pinMode, setPinMode, pendingPin, onAddPin, onCancelPin,
}) {
  const [pinDesc, setPinDesc] = useState('')
  const char = CHARACTERS[selectedCharacter]

  const quickBtn = (active) =>
    `w-full py-1.5 px-3 text-[11px] rounded border cursor-pointer transition-colors text-left ` +
    (active
      ? `text-white`
      : `text-[${P.muted}] hover:text-[${P.text}]`)

  return (
    <div
      className="absolute top-3 left-3 z-[2000] overflow-hidden"
      style={{
        background: '#ffffff',
        border: '1px solid #ede9f8',
        borderRadius: 16,
        boxShadow: '0 4px 32px rgba(124,58,237,0.10), 0 1px 6px rgba(0,0,0,0.05)',
        width: 252,
      }}
    >
      {/* ── Gradient accent strip at top ── */}
      <div style={{ height: 4, background: GRAD }}/>
      {/* ── Route planning ── */}
      <div className="p-3" style={{ borderBottom: `1px solid ${P.border}` }}>
        <h3 className="text-[13px] font-black uppercase tracking-widest mb-2.5" style={GRAD_TEXT}>
          Plan your walk
        </h3>

        <AddressRow
          label="▲ Start A" color="#4ade80"
          value={searchA} onChange={setSearchA}
          onSearch={onSearchA} loading={searchingA}
        />
        <AddressRow
          label="▼ Destination B" color="#f87171"
          value={searchB} onChange={setSearchB}
          onSearch={onSearchB} loading={searchingB}
        />

        {(ptA || ptB) && (
          <div className="text-[10px] mb-2 space-y-0.5" style={{ color: P.muted }}>
            {ptA && <div><span style={{ color: '#4ade80' }}>A</span> {ptA.lat.toFixed(4)}, {ptA.lng.toFixed(4)}</div>}
            {ptB && <div><span style={{ color: '#f87171' }}>B</span> {ptB.lat.toFixed(4)}, {ptB.lng.toFixed(4)}</div>}
          </div>
        )}

        {/* Character selection — 2×2 grid */}
        <div className="mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: P.muted }}>Who's walking?</p>
          <div className="grid grid-cols-2 gap-2">
            {CHARACTER_ORDER.map(id => (
              <CharacterCard
                key={id}
                char={CHARACTERS[id]}
                selected={selectedCharacter === id}
                onSelect={setSelectedCharacter}
              />
            ))}
          </div>
        </div>

        <button
          onClick={onCalcRoute}
          className="w-full py-2 text-[12px] font-bold rounded-lg cursor-pointer transition-all"
          style={{
            background: GRAD,
            border: 'none',
            color: 'white',
            boxShadow: '0 2px 12px rgba(124,58,237,0.35)',
            letterSpacing: '0.03em',
          }}
        >
          Go with {char.name.split(' ')[0]} ↗
        </button>

        {(ptA || ptB) && (
          <button
            onClick={onClear}
            className="w-full mt-1.5 py-1.5 text-[11px] rounded cursor-pointer transition-colors"
            style={{ border: `1px solid ${P.border}`, color: P.muted }}
          >
            ✕ Clear route
          </button>
        )}
      </div>

      {/* ── Character voice route result ── */}
      {routeInfo && (
        <div className="px-3 py-2.5" style={{
          borderBottom: `1px solid ${P.border}`,
          background: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(219,39,119,0.06) 100%)',
          borderLeft: `3px solid transparent`,
          borderImage: `${GRAD} 1`,
        }}>
          <p className="text-[12px] font-medium leading-snug" style={{ color: P.text }}>
            {char.voice(routeInfo.dist.toFixed(1), Math.round(routeInfo.time))}
          </p>
          <p className="text-[10px] mt-1" style={{ color: P.muted }}>
            Noise: <span style={{ color: P.text }}>{routeInfo.noiseScore}</span>
            {'  ·  '}Comfort: <span style={{ color: P.text }}>{routeInfo.comfortScore}</span>
          </p>
        </div>
      )}

      {/* ── Quick toggles ── */}
      <div className="p-3" style={{ borderBottom: `1px solid ${P.border}` }}>
        <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: P.accent }}>
          Quick toggles
        </h3>
        <button
          className={quickBtn(noiseActive)}
          style={{
            background: noiseActive ? '#fff8ec' : P.bgDeep,
            border: `1px solid ${noiseActive ? '#c07000' : P.border}`,
            color: noiseActive ? '#c07000' : P.muted,
            display: 'block', width: '100%', padding: '6px 12px',
            marginBottom: 6, borderRadius: 6, cursor: 'pointer',
          }}
          onClick={toggleNoiseGroup}
        >
          🔊 Noise overlay
        </button>
        <button
          style={{
            background: liveOn ? '#f0fdf4' : P.bgDeep,
            border: `1px solid ${liveOn ? '#22c55e' : P.border}`,
            color: liveOn ? '#16a34a' : P.muted,
            display: 'block', width: '100%', padding: '6px 12px',
            borderRadius: 6, cursor: 'pointer', textAlign: 'left', fontSize: 11,
          }}
          onClick={toggleLive}
        >
          {liveOn ? '⏹ Stop simulation' : '▶ Traffic simulation'}
        </button>
      </div>

      {/* ── Community pins ── */}
      <div className="p-3">
        <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: P.accent }}>
          Community
        </h3>

        {/* Pending pin — show description form */}
        {pendingPin ? (
          <div>
            <p className="text-[10px] mb-1.5" style={{ color: '#f87171' }}>
              {pendingPin.type === 'favourite' ? '❤️ Describe this spot' : '⚠️ Describe the problem'}
            </p>
            <textarea
              value={pinDesc}
              onChange={e => setPinDesc(e.target.value)}
              placeholder="What's here? (e.g. 'Beautiful view of the Ilm')"
              rows={3}
              className="w-full text-[11px] px-2 py-1.5 rounded resize-none focus:outline-none"
              style={{ background: P.input, border: `1px solid ${P.border}`, color: P.text }}
            />
            <div className="flex gap-1.5 mt-1.5">
              <button
                onClick={() => { onAddPin(pinDesc); setPinDesc('') }}
                disabled={!pinDesc.trim()}
                className="flex-1 py-1.5 text-[11px] rounded cursor-pointer font-medium disabled:opacity-40"
                style={{ background: '#f0fdf4', border: '1px solid #22c55e', color: '#16a34a' }}
              >
                Save memory
              </button>
              <button
                onClick={() => { onCancelPin(); setPinDesc('') }}
                className="px-3 py-1.5 text-[11px] rounded cursor-pointer"
                style={{ border: `1px solid ${P.border}`, color: P.muted }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-1.5">
            <button
              onClick={() => setPinMode('favourite')}
              className="w-full py-1.5 px-3 text-[11px] rounded cursor-pointer text-left"
              style={{
                background: pinMode === 'favourite' ? '#fdf2f8' : P.bgDeep,
                border: `1px solid ${pinMode === 'favourite' ? '#ec4899' : P.border}`,
                color: pinMode === 'favourite' ? '#be185d' : P.muted,
              }}
            >
              ❤️ Share a favourite spot
            </button>
            <button
              onClick={() => setPinMode('problem')}
              className="w-full py-1.5 px-3 text-[11px] rounded cursor-pointer text-left"
              style={{
                background: pinMode === 'problem' ? '#fff7ed' : P.bgDeep,
                border: `1px solid ${pinMode === 'problem' ? '#f97316' : P.border}`,
                color: pinMode === 'problem' ? '#c2410c' : P.muted,
              }}
            >
              ⚠️ Report a problem
            </button>
            {pinMode && (
              <p className="text-[10px] animate-pulse" style={{ color: P.accent }}>
                Click anywhere on the map…
              </p>
            )}
            {communityPins.length > 0 && (
              <p className="text-[9px] mt-1" style={{ color: P.muted }}>
                {communityPins.length} memor{communityPins.length === 1 ? 'y' : 'ies'} saved in Weimar
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
