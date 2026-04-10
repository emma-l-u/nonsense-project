import { useState, useEffect, useMemo } from 'react'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { CHARACTERS, KarlAvatar, ErnaAvatar, BeatriceAvatar, BenediktAvatar } from '../data/characters.jsx'
import { ROUTE_CONFIG } from '../data/mapData'

// Pre-render each avatar SVG to an HTML string once at module load
const AVATAR_SVG = {
  karl:     renderToStaticMarkup(createElement(KarlAvatar)),
  erna:     renderToStaticMarkup(createElement(ErnaAvatar)),
  beatrice: renderToStaticMarkup(createElement(BeatriceAvatar)),
  benedikt: renderToStaticMarkup(createElement(BenediktAvatar)),
}

// Natural SVG heights — used to scale to a consistent display size
const CHAR_NATURAL_H = { karl: 94, erna: 84, beatrice: 90, benedikt: 84 }
const TARGET_H = 60 // px display height

function makeIcon(charId, flipX) {
  const scale     = (TARGET_H / (CHAR_NATURAL_H[charId] ?? 90)).toFixed(3)
  const animClass = charId === 'benedikt' ? 'char-biker' : 'char-walker'
  return L.divIcon({
    html: `
      <div style="transform:scaleX(${flipX ? -1 : 1});display:inline-block">
        <div class="${animClass}" style="filter:drop-shadow(2px 3px 5px rgba(0,0,0,0.35))">
          <div style="transform:scale(${scale});transform-origin:bottom center;line-height:0">
            ${AVATAR_SVG[charId]}
          </div>
        </div>
      </div>`,
    className: '',
    iconSize:   [64, TARGET_H],
    iconAnchor: [32, TARGET_H],
  })
}

// Animation speed per route type (ms per step along 60-step path)
const STEP_MS = { safest: 200, nicest: 280, fastest: 75, bike: 48 }

function CameraFollow({ pos }) {
  const map = useMap()
  useEffect(() => {
    if (pos) map.setView([pos.lat, pos.lng], 17, { animate: true, duration: 0.5 })
  }, [pos, map])
  return null
}

export default function PovPanel({ route, routeType, selectedCharacter, routeInfo, onClose }) {
  const [step, setStep] = useState(0)
  const char  = CHARACTERS[selectedCharacter]
  const color = ROUTE_CONFIG[routeType]?.color ?? char.color
  const speed = STEP_MS[routeType] ?? 130

  // Interpolate the full route into 60 evenly-spaced positions
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

  // Loop animation
  useEffect(() => {
    if (!steps.length) return
    setStep(0)
    const id = setInterval(() => setStep(s => (s + 1) % steps.length), speed)
    return () => clearInterval(id)
  }, [steps, speed])

  if (!route?.length) return null

  const pos     = steps[step] ?? route[0]
  const prevPos = steps[Math.max(0, step - 1)]
  const flipX   = prevPos && pos.lng < prevPos.lng   // face direction of travel

  // Only recreate Leaflet icon when flip direction changes
  const icon = useMemo(() => makeIcon(selectedCharacter, flipX), [selectedCharacter, flipX])

  const progress = Math.round((step / 59) * 100)

  return (
    <div
      className="absolute top-3 right-3 z-[2000] overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #FFE566 0%, #FFACE4 100%)',
        border: '2px solid #1a1209',
        borderRadius: 18,
        boxShadow: '6px 6px 0px rgba(26,18,9,0.18)',
        width: 272,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5"
        style={{ borderBottom: '1px solid rgba(26,18,9,0.14)' }}>
        <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 13, color: '#1a1209' }}>
          {char.name}'s walk
        </p>
        <button onClick={onClose}
          style={{ fontSize: 13, color: 'rgba(26,18,9,0.52)', cursor: 'pointer', background: 'none', border: 'none', fontWeight: 700, padding: 0 }}>
          ✕
        </button>
      </div>

      {/* Mini map with character moving along route */}
      <div style={{ height: 210, position: 'relative' }}>
        <MapContainer
          key={route[0].lat + '' + route[0].lng}
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
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} />
          <CameraFollow pos={pos} />
          <Marker position={[pos.lat, pos.lng]} icon={icon} />
        </MapContainer>

        {/* Progress bar at bottom of map */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(0,0,0,0.12)', zIndex: 1000 }}>
          <div style={{ height: '100%', width: `${progress}%`, background: color, transition: 'width 0.08s linear' }} />
        </div>
      </div>

      {/* Character voice line */}
      <div className="px-3.5 py-2.5">
        <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: '#1a1209', lineHeight: 1.5 }}>
          {char.voice(routeInfo?.dist?.toFixed(1) ?? '?', Math.round(routeInfo?.time ?? 0))}
        </p>
      </div>
    </div>
  )
}
