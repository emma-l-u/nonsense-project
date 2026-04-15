import { useState } from 'react'

const FONT = "'Nunito', sans-serif"

export default function SoundControl({ volume, setVolume, muted, toggleMute }) {
  const [open, setOpen] = useState(false)

  const icon = muted || volume === 0 ? '🔇' : volume < 40 ? '🔉' : '🔊'

  return (
    <div
      className="absolute z-[2000]"
      style={{ bottom: '3.5rem', right: '0.75rem' }}
    >
      {/* Expanded slider panel */}
      {open && (
        <div style={{
          background: '#FFE566',
          borderRadius: 14,
          padding: '10px 14px',
          marginBottom: 6,
          boxShadow: '0 2px 12px rgba(0,0,0,0.22)',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          minWidth: 148,
          fontFamily: FONT,
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1a1209', letterSpacing: '0.04em' }}>
            MUSIC VOLUME
          </span>
          <input
            type="range"
            min={0} max={100} step={1}
            value={muted ? 0 : volume}
            onChange={e => {
              const v = Number(e.target.value)
              if (muted && v > 0) toggleMute()   // unmute on drag
              setVolume(v)
            }}
            style={{ width: '100%', accentColor: '#1a1209', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#1a120988' }}>
            <span>0</span><span>{muted ? 0 : volume}%</span><span>100</span>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        title={open ? 'Close sound controls' : 'Sound controls'}
        style={{
          background: '#FFE566',
          border: 'none',
          borderRadius: 999,
          width: 36,
          height: 36,
          fontSize: 17,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
        }}
      >
        {icon}
      </button>

      {/* Mute toggle inside expanded panel */}
      {open && (
        <button
          onClick={toggleMute}
          style={{
            marginTop: 4,
            width: '100%',
            background: muted ? '#1a1209' : 'rgba(26,18,9,0.08)',
            color: muted ? '#FFE566' : '#1a1209',
            border: 'none',
            borderRadius: 8,
            padding: '5px 0',
            fontSize: 11,
            fontWeight: 700,
            fontFamily: FONT,
            cursor: 'pointer',
            letterSpacing: '0.04em',
          }}
        >
          {muted ? '▶ UNMUTE' : '⏹ MUTE'}
        </button>
      )}
    </div>
  )
}
