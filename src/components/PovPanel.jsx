import { useState, useEffect, useRef, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { CHARACTERS } from '../data/characters.jsx'
import { ROUTE_CONFIG } from '../data/mapData'

const PANEL_BG = 'linear-gradient(150deg, #FFE566 0%, #FFACE4 100%)'
const FONT     = "'Nunito', sans-serif"
const TEXT     = '#1a1209'
const MUTED    = 'rgba(26,18,9,0.52)'
const BORDER   = 'rgba(26,18,9,0.14)'

// How fast the camera moves along the route per character (ms per step)
const SPEED = { safest: 190, nicest: 270, fastest: 72, bike: 48 }

function CameraFollow({ pos }) {
  const map = useMap()
  useEffect(() => {
    if (pos) map.setView([pos.lat, pos.lng], 17, { animate: true, duration: 0.55 })
  }, [pos, map])
  return null
}

export default function PovPanel({ route, routeType, selectedCharacter, routeInfo, onClose }) {
  const [step, setStep] = useState(0)
  const char   = CHARACTERS[selectedCharacter]
  const color  = ROUTE_CONFIG[routeType]?.color ?? char.color
  const speed  = SPEED[routeType] ?? 120

  // Interpolate route into 60 evenly-spaced steps for smooth animation
  const steps = useMemo(() => {
    if (!route?.length) return []
    return Array.from({ length: 60 }, (_, i) => {
      const t  = (i / 59) * (route.length - 1)
      const lo = Math.floor(t)
      const hi = Math.min(lo + 1, route.length - 1)
      const f  = t - lo
      return {
        lat: route[lo].lat + (route[hi].lat - route[lo].lat) * f,
        lng: route[lo].lng + (route[hi].lng - route[lo].lng) * f,
      }
    })
  }, [route])

  // Reset and start animation whenever route/speed changes
  useEffect(() => {
    if (!steps.length) return
    setStep(0)
    const id = setInterval(() => setStep(s => (s + 1) % steps.length), speed)
    return () => clearInterval(id)
  }, [steps, speed])

  if (!route?.length) return null

  const pos      = steps[step] ?? route[0]
  const progress = Math.round((step / 59) * 100)

  const dot = L.divIcon({
    html: `<div style="
      width:18px;height:18px;
      background:${char.color};
      border:2.5px solid #1a1209;
      border-radius:50%;
      box-shadow:0 0 0 5px ${char.color}44;
    "></div>`,
    className: '', iconSize: [18, 18], iconAnchor: [9, 9],
  })

  return (
    <div
      className="absolute top-3 right-3 z-[2000] overflow-hidden"
      style={{
        background: PANEL_BG,
        border: `2px solid ${TEXT}`,
        borderRadius: 18,
        boxShadow: '6px 6px 0px rgba(26,18,9,0.18)',
        width: 272,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5"
        style={{ borderBottom: `1px solid ${BORDER}` }}>
        <p style={{ fontFamily: FONT, fontWeight: 900, fontSize: 13, color: TEXT }}>
          {char.name}'s POV
        </p>
        <button
          onClick={onClose}
          style={{ fontFamily: FONT, fontSize: 13, color: MUTED, cursor: 'pointer', background: 'none', border: 'none', fontWeight: 700, padding: 0 }}
        >✕</button>
      </div>

      {/* Mini map */}
      <div style={{ height: 200, position: 'relative' }}>
        <MapContainer
          key={route[0].lat + route[0].lng}
          center={[pos.lat, pos.lng]}
          zoom={17}
          zoomControl={false}
          dragging={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          keyboard={false}
          attributionControl={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />
          <CameraFollow pos={pos} />
          <Marker position={[pos.lat, pos.lng]} icon={dot} />
        </MapContainer>

        {/* Progress bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(0,0,0,0.12)', zIndex: 1000 }}>
          <div style={{ height: '100%', width: `${progress}%`, background: color, transition: 'width 0.08s linear' }} />
        </div>
      </div>

      {/* Character voice line */}
      <div className="px-3.5 py-2.5">
        <p style={{ fontFamily: FONT, fontSize: 11, color: TEXT, lineHeight: 1.5 }}>
          {char.voice(routeInfo?.dist?.toFixed(1) ?? '?', Math.round(routeInfo?.time ?? 0))}
        </p>
      </div>
    </div>
  )
}
