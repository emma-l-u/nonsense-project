import { useState } from 'react'
import { CHARACTERS, CHARACTER_ORDER } from '../data/characters.jsx'

// ── Warm colour tokens ─────────────────────────────────────────────────────────
const P = {
  bg:      '#1c1410',
  bgDeep:  '#14100c',
  border:  '#3d2a12',
  input:   '#251808',
  text:    '#f0e0c0',
  muted:   '#8c7050',
  accent:  '#d97706',
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
      className="flex flex-col items-center p-2 rounded-xl cursor-pointer transition-all text-center w-full"
      style={{
        background: selected ? char.cardBg : '#1a110a',
        border: `2px solid ${selected ? char.color : P.border}`,
        boxShadow: selected ? `0 0 12px ${char.color}44` : 'none',
      }}
    >
      <div className="mb-1"><Avatar /></div>
      <p className="text-[10px] font-bold leading-tight" style={{ color: selected ? char.color : P.text }}>
        {char.name}
      </p>
      <p className="text-[9px] leading-tight mt-0.5" style={{ color: P.muted }}>
        {char.tagline}
      </p>
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
      className="absolute top-3 left-3 w-62 z-[2000] overflow-hidden rounded-xl shadow-2xl"
      style={{ background: `${P.bg}f8`, border: `1px solid ${P.border}`, width: 248 }}
    >
      {/* ── Route planning ── */}
      <div className="p-3" style={{ borderBottom: `1px solid ${P.border}` }}>
        <h3 className="text-[11px] font-bold uppercase tracking-widest mb-2.5" style={{ color: P.accent }}>
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
          <p className="text-[10px] mb-1.5" style={{ color: P.muted }}>Who's walking?</p>
          <div className="grid grid-cols-2 gap-1.5">
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
          className="w-full py-2 text-[12px] font-semibold rounded cursor-pointer transition-colors"
          style={{ background: char.color + '22', border: `1px solid ${char.color}`, color: char.color }}
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
        <div className="px-3 py-2.5" style={{ borderBottom: `1px solid ${P.border}`, background: char.cardBg + 'cc' }}>
          <p className="text-[12px] font-medium leading-snug" style={{ color: char.color }}>
            {char.voice(routeInfo.dist.toFixed(1), Math.round(routeInfo.time))}
          </p>
          <p className="text-[10px] mt-1" style={{ color: P.muted }}>
            Noise exposure: <span style={{ color: P.text }}>{routeInfo.noiseScore}</span>
            {'  ·  '}Comfort: <span style={{ color: P.text }}>{routeInfo.comfortScore}</span>
          </p>
        </div>
      )}

      {/* ── Quick toggles ── */}
      <div className="p-3" style={{ borderBottom: `1px solid ${P.border}` }}>
        <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: P.muted }}>
          Quick toggles
        </h3>
        <button
          className={quickBtn(noiseActive)}
          style={{
            background: noiseActive ? '#2a1a08' : P.bgDeep,
            border: `1px solid ${noiseActive ? '#d97706' : P.border}`,
            color: noiseActive ? '#d97706' : P.muted,
            display: 'block', width: '100%', padding: '6px 12px',
            marginBottom: 6, borderRadius: 6, cursor: 'pointer',
          }}
          onClick={toggleNoiseGroup}
        >
          🔊 Noise overlay
        </button>
        <button
          style={{
            background: liveOn ? '#1a2a10' : P.bgDeep,
            border: `1px solid ${liveOn ? '#4ade80' : P.border}`,
            color: liveOn ? '#4ade80' : P.muted,
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
        <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: P.muted }}>
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
                style={{ background: '#2a3d15', border: '1px solid #4ade80', color: '#4ade80' }}
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
                background: pinMode === 'favourite' ? '#2a1a25' : P.bgDeep,
                border: `1px solid ${pinMode === 'favourite' ? '#f472b6' : P.border}`,
                color: pinMode === 'favourite' ? '#f472b6' : P.muted,
              }}
            >
              ❤️ Share a favourite spot
            </button>
            <button
              onClick={() => setPinMode('problem')}
              className="w-full py-1.5 px-3 text-[11px] rounded cursor-pointer text-left"
              style={{
                background: pinMode === 'problem' ? '#2a1a08' : P.bgDeep,
                border: `1px solid ${pinMode === 'problem' ? '#fb923c' : P.border}`,
                color: pinMode === 'problem' ? '#fb923c' : P.muted,
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
