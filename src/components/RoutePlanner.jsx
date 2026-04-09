import { useState } from 'react'
import { CHARACTERS, CHARACTER_ORDER } from '../data/characters.jsx'

// ── Panel gradient — vivid pink → purple → blue (Oversaturation poster palette) ─
const PANEL_BG = 'linear-gradient(160deg, #e8007e 0%, #7c3aed 48%, #0ea5e9 100%)'
const W  = 'rgba(255,255,255,1)'
const WM = 'rgba(255,255,255,0.62)'  // muted white
const WB = 'rgba(255,255,255,0.16)'  // subtle white bg
const WD = 'rgba(255,255,255,0.22)'  // border white
const SYNE = "'Syne', sans-serif"

function AddressRow({ label, color, value, onChange, onSearch, loading }) {
  return (
    <div className="mb-2">
      <p className="text-[11px] font-bold mb-0.5" style={{ color, fontFamily: SYNE }}>{label}</p>
      <div className="flex gap-1">
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSearch(value)}
          placeholder="Type an address…"
          className="panel-input flex-1 min-w-0 text-[11px] px-2 py-1.5 rounded-lg focus:outline-none"
          style={{ background: WB, border: `1px solid ${WD}`, color: W }}
        />
        <button
          onClick={() => onSearch(value)}
          disabled={loading || !value.trim()}
          className="px-2 py-1.5 text-[11px] rounded-lg cursor-pointer shrink-0 disabled:opacity-30 font-bold"
          style={{ background: WB, border: `1px solid ${WD}`, color: W }}
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
        boxShadow: selected ? `4px 4px 0px ${char.color}` : '3px 3px 0px rgba(0,0,0,0.35)',
        transform: selected ? 'translate(-1px,-1px)' : 'none',
      }}
    >
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
      <div style={{
        background: selected ? char.color : '#1a1209',
        width: '100%',
        padding: '4px 6px',
        fontFamily: SYNE,
      }}>
        <p className="text-[10px] font-black leading-tight uppercase tracking-wide"
          style={{ color: selected ? '#1a1209' : '#f5edd8' }}>
          {char.name}
        </p>
        <p className="text-[8px] leading-tight mt-0.5"
          style={{ color: selected ? '#1a120980' : '#f5edd868' }}>
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

  return (
    <div
      className="absolute top-3 left-3 z-[2000] overflow-hidden"
      style={{
        background: PANEL_BG,
        border: 'none',
        borderRadius: 18,
        boxShadow: '0 8px 48px rgba(124,58,237,0.4), 0 2px 12px rgba(0,0,0,0.2)',
        width: 256,
      }}
    >
      {/* ── Route planning ── */}
      <div className="p-3.5" style={{ borderBottom: `1px solid ${WD}` }}>
        <h3 className="text-[15px] font-black uppercase tracking-widest mb-3"
          style={{ color: W, fontFamily: SYNE, letterSpacing: '0.1em' }}>
          Plan your walk
        </h3>

        <AddressRow
          label="▲ Start A" color="#86efac"
          value={searchA} onChange={setSearchA}
          onSearch={onSearchA} loading={searchingA}
        />
        <AddressRow
          label="▼ Destination B" color="#fca5a5"
          value={searchB} onChange={setSearchB}
          onSearch={onSearchB} loading={searchingB}
        />

        {(ptA || ptB) && (
          <div className="text-[10px] mb-2 space-y-0.5" style={{ color: WM }}>
            {ptA && <div><span style={{ color: '#86efac' }}>A</span> {ptA.lat.toFixed(4)}, {ptA.lng.toFixed(4)}</div>}
            {ptB && <div><span style={{ color: '#fca5a5' }}>B</span> {ptB.lat.toFixed(4)}, {ptB.lng.toFixed(4)}</div>}
          </div>
        )}

        {/* Character selection — 2×2 grid */}
        <div className="mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2"
            style={{ color: WM, fontFamily: SYNE }}>Who's walking?</p>
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
          className="w-full py-2.5 text-[13px] rounded-xl cursor-pointer transition-all"
          style={{
            background: 'rgba(255,255,255,0.95)',
            border: 'none',
            color: char.color,
            fontFamily: SYNE,
            fontWeight: 800,
            letterSpacing: '0.04em',
            boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
          }}
        >
          Go with {char.name.split(' ')[0]} ↗
        </button>

        {(ptA || ptB) && (
          <button
            onClick={onClear}
            className="w-full mt-2 py-1.5 text-[11px] rounded-lg cursor-pointer"
            style={{ border: `1px solid ${WD}`, color: WM, background: 'transparent' }}
          >
            ✕ Clear route
          </button>
        )}
      </div>

      {/* ── Character voice route result ── */}
      {routeInfo && (
        <div className="px-3.5 py-2.5" style={{
          borderBottom: `1px solid ${WD}`,
          background: 'rgba(255,255,255,0.12)',
        }}>
          <p className="text-[12px] font-medium leading-snug" style={{ color: W }}>
            {char.voice(routeInfo.dist.toFixed(1), Math.round(routeInfo.time))}
          </p>
          <p className="text-[10px] mt-1" style={{ color: WM }}>
            Noise: <span style={{ color: W }}>{routeInfo.noiseScore}</span>
            {'  ·  '}Comfort: <span style={{ color: W }}>{routeInfo.comfortScore}</span>
          </p>
        </div>
      )}

      {/* ── Quick toggles ── */}
      <div className="px-3.5 py-3" style={{ borderBottom: `1px solid ${WD}` }}>
        <h3 className="text-[10px] font-black uppercase tracking-widest mb-2"
          style={{ color: WM, fontFamily: SYNE }}>Quick toggles</h3>
        <button
          style={{
            background: noiseActive ? 'rgba(255,255,255,0.92)' : WB,
            border: `1px solid ${WD}`,
            color: noiseActive ? '#d97706' : WM,
            display: 'block', width: '100%', padding: '7px 12px',
            marginBottom: 6, borderRadius: 8, cursor: 'pointer',
            textAlign: 'left', fontSize: 11, fontFamily: SYNE, fontWeight: 600,
          }}
          onClick={toggleNoiseGroup}
        >
          🔊 Noise overlay
        </button>
        <button
          style={{
            background: liveOn ? 'rgba(255,255,255,0.92)' : WB,
            border: `1px solid ${WD}`,
            color: liveOn ? '#16a34a' : WM,
            display: 'block', width: '100%', padding: '7px 12px',
            borderRadius: 8, cursor: 'pointer', textAlign: 'left',
            fontSize: 11, fontFamily: SYNE, fontWeight: 600,
          }}
          onClick={toggleLive}
        >
          {liveOn ? '⏹ Stop simulation' : '▶ Traffic simulation'}
        </button>
      </div>

      {/* ── Community pins ── */}
      <div className="px-3.5 py-3">
        <h3 className="text-[10px] font-black uppercase tracking-widest mb-2"
          style={{ color: WM, fontFamily: SYNE }}>Community</h3>

        {pendingPin ? (
          <div>
            <p className="text-[10px] mb-1.5 font-semibold" style={{ color: W }}>
              {pendingPin.type === 'favourite' ? '❤️ Describe this spot' : '⚠️ Describe the problem'}
            </p>
            <textarea
              value={pinDesc}
              onChange={e => setPinDesc(e.target.value)}
              placeholder="What's here? (e.g. 'Beautiful view of the Ilm')"
              rows={3}
              className="panel-input w-full text-[11px] px-2 py-1.5 rounded-lg resize-none focus:outline-none"
              style={{ background: WB, border: `1px solid ${WD}`, color: W }}
            />
            <div className="flex gap-1.5 mt-2">
              <button
                onClick={() => { onAddPin(pinDesc); setPinDesc('') }}
                disabled={!pinDesc.trim()}
                className="flex-1 py-1.5 text-[11px] rounded-lg cursor-pointer font-bold disabled:opacity-40"
                style={{ background: 'rgba(255,255,255,0.92)', border: 'none', color: '#16a34a', fontFamily: SYNE }}
              >
                Save memory
              </button>
              <button
                onClick={() => { onCancelPin(); setPinDesc('') }}
                className="px-3 py-1.5 text-[11px] rounded-lg cursor-pointer"
                style={{ border: `1px solid ${WD}`, color: WM, background: 'transparent' }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <button
              onClick={() => setPinMode('favourite')}
              className="w-full py-2 px-3 text-[11px] rounded-lg cursor-pointer text-left font-semibold"
              style={{
                background: pinMode === 'favourite' ? 'rgba(255,255,255,0.92)' : WB,
                border: `1px solid ${WD}`,
                color: pinMode === 'favourite' ? '#be185d' : WM,
                fontFamily: SYNE,
              }}
            >
              ❤️ Share a favourite spot
            </button>
            <button
              onClick={() => setPinMode('problem')}
              className="w-full py-2 px-3 text-[11px] rounded-lg cursor-pointer text-left font-semibold"
              style={{
                background: pinMode === 'problem' ? 'rgba(255,255,255,0.92)' : WB,
                border: `1px solid ${WD}`,
                color: pinMode === 'problem' ? '#c2410c' : WM,
                fontFamily: SYNE,
              }}
            >
              ⚠️ Report a problem
            </button>
            {pinMode && (
              <p className="text-[10px] animate-pulse font-semibold" style={{ color: W }}>
                Click anywhere on the map…
              </p>
            )}
            {communityPins.length > 0 && (
              <p className="text-[9px]" style={{ color: WM }}>
                {communityPins.length} memor{communityPins.length === 1 ? 'y' : 'ies'} saved in Weimar
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
