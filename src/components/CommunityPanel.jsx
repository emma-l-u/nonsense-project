import { useState } from 'react'
import { WANDEL_CATS } from '../data/wandelkarten'

const PANEL_BG = 'linear-gradient(150deg, #FFE566 0%, #FFACE4 100%)'
const FONT     = "'Nunito', sans-serif"
const TEXT     = '#1a1209'
const MUTED    = 'rgba(26,18,9,0.52)'
const BORDER   = 'rgba(26,18,9,0.14)'
const INPUT_BG = 'rgba(255,255,255,0.6)'

export default function CommunityPanel({
  communityPins, pinMode, setPinMode, pendingPin, onAddPin, onCancelPin,
  showWandel, toggleWandel, wandelCats, toggleWandelCat,
}) {
  const [pinDesc, setPinDesc] = useState('')

  return (
    <div
      className="absolute bottom-3 right-3 z-[2000]"
      style={{
        background: PANEL_BG,
        border: `2px solid ${TEXT}`,
        borderRadius: 18,
        boxShadow: '6px 6px 0px rgba(26,18,9,0.18)',
        width: 288,
      }}
    >
      <div className="p-4">
        <h3 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 16, color: TEXT, marginBottom: 4, letterSpacing: '-0.01em' }}>
          MYmar
        </h3>
        <p style={{ fontFamily: FONT, fontSize: 11, color: MUTED, marginBottom: 14 }}>
          Share what you love — or what needs fixing.
        </p>

        {/* ── Everyday places ── */}
        <button
          onClick={toggleWandel}
          style={{
            background: showWandel ? 'rgba(255,255,255,0.75)' : INPUT_BG,
            border: `1.5px solid ${showWandel ? TEXT : BORDER}`,
            color: TEXT, display: 'block', width: '100%', padding: '7px 12px',
            marginBottom: showWandel ? 0 : 14, borderRadius: showWandel ? '8px 8px 0 0' : 8,
            cursor: 'pointer', textAlign: 'left',
            fontSize: 11, fontFamily: FONT, fontWeight: showWandel ? 700 : 500,
          }}
        >
          📍 Everyday places {showWandel ? '▴' : '▾'}
        </button>
        {showWandel && (
          <div style={{
            background: 'rgba(255,255,255,0.75)',
            border: `1.5px solid ${TEXT}`,
            borderTop: 'none',
            borderRadius: '0 0 8px 8px',
            padding: '6px 12px 8px',
            marginBottom: 14,
          }}>
            {Object.entries(WANDEL_CATS).map(([key, cat]) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer py-0.5">
                <input type="checkbox" checked={wandelCats[key]}
                  onChange={() => toggleWandelCat(key)}
                  className="cursor-pointer" style={{ accentColor: cat.color }}/>
                <span style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: cat.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, flexShrink: 0,
                }}>{cat.emoji}</span>
                <span style={{ fontSize: 10, fontFamily: FONT, fontWeight: 600, color: wandelCats[key] ? TEXT : MUTED }}>
                  {cat.label}
                </span>
              </label>
            ))}
          </div>
        )}

        {pendingPin ? (
          /* ── Description form ── */
          <div>
            <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: 12, color: TEXT, marginBottom: 8 }}>
              {pendingPin.type === 'favourite' ? '❤️ Describe this spot' : '⚠️ Describe the problem'}
            </p>
            <textarea
              value={pinDesc}
              onChange={e => setPinDesc(e.target.value)}
              placeholder={pendingPin.type === 'favourite'
                ? "What makes this place special?"
                : "What's the issue here?"}
              rows={3}
              className="w-full text-[12px] px-3 py-2 rounded-xl resize-none focus:outline-none"
              style={{ background: INPUT_BG, border: `1.5px solid ${TEXT}`, color: TEXT, fontFamily: FONT }}
            />
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => { onAddPin(pinDesc); setPinDesc('') }}
                disabled={!pinDesc.trim()}
                className="flex-1 py-2 text-[12px] rounded-xl cursor-pointer font-black disabled:opacity-40"
                style={{ background: '#16a34a', border: `2px solid ${TEXT}`, color: 'white', fontFamily: FONT, boxShadow: `2px 2px 0px ${TEXT}` }}
              >
                Save memory ❤️
              </button>
              <button
                onClick={() => { onCancelPin(); setPinDesc('') }}
                className="px-4 py-2 text-[11px] rounded-xl cursor-pointer font-bold"
                style={{ border: `1.5px solid ${BORDER}`, color: MUTED, background: INPUT_BG, fontFamily: FONT }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          /* ── Pin type buttons ── */
          <div className="space-y-2.5">
            <button
              onClick={() => setPinMode('favourite')}
              className="w-full py-3 px-4 text-[13px] rounded-2xl cursor-pointer text-left font-black"
              style={{
                background: pinMode === 'favourite' ? 'rgba(255,255,255,0.85)' : INPUT_BG,
                border: `2px solid ${pinMode === 'favourite' ? TEXT : BORDER}`,
                color: TEXT,
                fontFamily: FONT,
                boxShadow: pinMode === 'favourite' ? `3px 3px 0px ${TEXT}` : 'none',
              }}
            >
              ❤️ Share a favourite spot
              <p className="text-[10px] font-normal mt-0.5" style={{ color: MUTED }}>
                Mark a place you love in Weimar
              </p>
            </button>
            <button
              onClick={() => setPinMode('problem')}
              className="w-full py-3 px-4 text-[13px] rounded-2xl cursor-pointer text-left font-black"
              style={{
                background: pinMode === 'problem' ? 'rgba(255,255,255,0.85)' : INPUT_BG,
                border: `2px solid ${pinMode === 'problem' ? TEXT : BORDER}`,
                color: TEXT,
                fontFamily: FONT,
                boxShadow: pinMode === 'problem' ? `3px 3px 0px ${TEXT}` : 'none',
              }}
            >
              ⚠️ Report a problem
              <p className="text-[10px] font-normal mt-0.5" style={{ color: MUTED }}>
                Flag an issue for walkability
              </p>
            </button>

            {pinMode && (
              <div className="text-center py-2 rounded-xl animate-pulse"
                style={{ background: 'rgba(255,255,255,0.5)', border: `1px dashed ${TEXT}` }}>
                <p style={{ fontFamily: FONT, fontWeight: 800, fontSize: 12, color: TEXT }}>
                  👆 Click anywhere on the map
                </p>
              </div>
            )}

            {communityPins.length > 0 && (
              <p style={{ fontFamily: FONT, fontSize: 10, color: MUTED, textAlign: 'center', paddingTop: 2 }}>
                {communityPins.length} memor{communityPins.length === 1 ? 'y' : 'ies'} saved in Weimar
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
