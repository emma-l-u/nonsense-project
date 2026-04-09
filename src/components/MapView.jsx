import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  MapContainer, TileLayer, Marker, Circle, Polyline, Polygon,
  LayerGroup, Popup, ZoomControl, useMap, useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import { noiseData, WEIMAR, ROUTE_CONFIG } from '../data/mapData'

// ── SVG hatch patterns ────────────────────────────────────────────────────────
function SvgPatterns() {
  const map = useMap()
  useLayoutEffect(() => {
    const tmp = L.circle(WEIMAR, { radius: 0, opacity: 0, fillOpacity: 0 }).addTo(map)
    const svg = map.getPane('overlayPane')?.querySelector('svg')
    if (svg && !svg.querySelector('#ped-hatch')) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
      defs.innerHTML = `
        <pattern id="ped-hatch" width="8" height="8"
            patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="8" height="8" fill="rgba(202,138,4,0.12)"/>
          <line x1="0" y1="0" x2="0" y2="8" stroke="#ca8a04" stroke-width="2.5" stroke-opacity="0.6"/>
        </pattern>
      `
      svg.insertBefore(defs, svg.firstChild)
    }
    tmp.remove()
  }, [map])
  return null
}

// ── Animated flag cursor ──────────────────────────────────────────────────────
function FlagCursor({ active }) {
  const [pos, setPos] = useState({ x: -999, y: -999 })
  const phaseRef = useRef(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!active) return
    const onMove = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [active])

  useEffect(() => {
    if (!active) return
    let frame
    const animate = () => {
      phaseRef.current += 0.09
      setPhase(phaseRef.current)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [active])

  if (!active) return null

  // Wave the flag fabric: top and bottom edges undulate via offset sine waves
  const w1 = Math.sin(phase) * 5          // mid-flag bulge
  const w2 = Math.sin(phase + 1.0) * 3.5  // free-edge offset
  const flagPath = `
    M 6 4
    Q 22 ${4  + w1} 38 ${4  + w2}
    L 38 ${28 + w2}
    Q 22 ${28 + w1} 6 28
    Z
  `

  return createPortal(
    <div style={{
      position: 'fixed',
      left: pos.x,
      top: pos.y,
      pointerEvents: 'none',
      zIndex: 99999,
      transform: 'translate(-5px, -70px)',
    }}>
      <svg viewBox="0 0 46 90" width="36" height="72" fill="none">
        <line x1="6" y1="2" x2="6" y2="88" stroke="#2a2420" strokeWidth="3" strokeLinecap="round"/>
        <path d={flagPath} fill="#2a2420"/>
      </svg>
    </div>,
    document.body
  )
}

// ── Cursor & click handler ────────────────────────────────────────────────────
function MapInteraction({ onMapClick, isPlacing, pinMode }) {
  const map = useMap()
  useMapEvents({ click: (e) => onMapClick(e.latlng) })
  useEffect(() => {
    const el = map.getContainer()
    const useCustom = isPlacing && !pinMode
    el.style.cursor = useCustom ? 'none' : (pinMode ? 'crosshair' : '')
    return () => { el.style.cursor = '' }
  }, [map, isPlacing, pinMode])
  return null
}

// ── Fit map to route ──────────────────────────────────────────────────────────
function RouteFitter({ route }) {
  const map = useMap()
  useEffect(() => {
    if (route?.length)
      map.fitBounds(L.latLngBounds(route.map(p => [p.lat, p.lng])), { padding: [40, 40] })
  }, [route, map])
  return null
}

// ── Map pin icons — stamp card style ─────────────────────────────────────────
function makePinIcon(letter, bgColor) {
  return L.divIcon({
    html: `<div style="
      width:34px;height:34px;
      background:${bgColor};
      border:2.5px solid #1a1209;
      border-radius:9px;
      box-shadow:3px 3px 0 #1a1209;
      display:flex;align-items:center;justify-content:center;
      font-family:'Nunito',sans-serif;
      font-weight:900;font-size:18px;
      color:#1a1209;
      line-height:1;
    ">${letter}</div>`,
    className: '', iconSize: [34, 34], iconAnchor: [17, 34], popupAnchor: [0, -38],
  })
}
const iconA = makePinIcon('A', '#4ade80')
const iconB = makePinIcon('B', '#f87171')

// ── Animated route — wiggle personality per character ─────────────────────────
const ROUTE_ANIM = {
  // Karl — slow, bouncy, careful kid energy
  safest:  { amp: 0.00010, freq: 0.030, interval: 65,  weight: 4,   dash: '7 5'  },
  // Erna — lazy, meandering, big slow curves with the dog
  nicest:  { amp: 0.00020, freq: 0.012, interval: 95,  weight: 4.5, dash: null   },
  // Beatrice — fast, precise, barely wiggles
  fastest: { amp: 0.000022,freq: 0.065, interval: 16,  weight: 5,   dash: null   },
  // Benedikt — energetic, dashed, flying on the bike
  bike:    { amp: 0.00013, freq: 0.045, interval: 20,  weight: 4,   dash: '14 4' },
}

function AnimatedRoute({ route, routeType }) {
  const [phase, setPhase] = useState(0)
  const cfg = ROUTE_ANIM[routeType] ?? ROUTE_ANIM.fastest
  const color = ROUTE_CONFIG[routeType]?.color ?? '#888'
  const label = ROUTE_CONFIG[routeType]?.label ?? ''

  useEffect(() => {
    const id = setInterval(() => setPhase(p => p + 1), cfg.interval)
    return () => clearInterval(id)
  }, [cfg.interval])

  if (!route?.length) return null

  const path = route.map((p, i) => [
    p.lat + Math.sin(phase * 0.06 + i * cfg.freq) * cfg.amp,
    p.lng + Math.cos(phase * 0.05 + i * cfg.freq * 0.85) * cfg.amp * 0.75,
  ])

  return (
    <LayerGroup>
      <Polyline positions={path} pathOptions={{
        color, weight: cfg.weight * 3, opacity: 0.22,
        lineCap: 'round', lineJoin: 'round',
      }} />
      <Polyline positions={path} pathOptions={{
        color, weight: cfg.weight, opacity: 0.92,
        dashArray: cfg.dash ?? undefined,
        dashOffset: cfg.dash ? String(phase * 2) : undefined,
        lineCap: 'round', lineJoin: 'round',
      }}>
        <Popup><b>{label}</b></Popup>
      </Polyline>
    </LayerGroup>
  )
}

// ── Noise colour scale ────────────────────────────────────────────────────────
function noiseColor(db) {
  if (db >= 75) return '#7f1d1d'
  if (db >= 65) return '#dc2626'
  if (db >= 55) return '#f97316'
  if (db >= 45) return '#eab308'
  return '#22c55e'
}

// ── Animated traffic flow lines ───────────────────────────────────────────────
function TrafficFlow({ roads, simHour }) {
  const [phase, setPhase] = useState(0)
  const simHourRef = useRef(simHour)
  useEffect(() => { simHourRef.current = simHour }, [simHour])

  useEffect(() => {
    const id = setInterval(() => {
      const h = simHourRef.current % 24
      const isRush  = (h >= 7 && h < 9) || (h >= 16 && h < 19)
      const isNight = h >= 22 || h < 6
      const speed = isRush ? 3 : isNight ? 0.6 : 1.4
      setPhase(p => p + speed)
    }, 55)
    return () => clearInterval(id)
  }, [])

  if (!roads?.length) return null

  const h = (simHour ?? 12) % 24
  const isRush  = (h >= 7 && h < 9) || (h >= 16 && h < 19)
  const isNight = h >= 22 || h < 6
  const intensity = isNight ? 0.4 : isRush ? 1.0 : 0.7
  const lineCount = isNight ? 1 : isRush ? 4 : 2

  return roads.map((road, ri) => {
    const path = road.path.map(([lat, lng], pi) => [
      lat + Math.sin(phase * 0.04 + pi * 0.8 + ri * 1.1) * 0.00016 * intensity,
      lng + Math.cos(phase * 0.035 + pi * 0.6 + ri * 0.9) * 0.00012 * intensity,
    ])
    return (
      <LayerGroup key={ri}>
        {/* Outer glow halo */}
        <Polyline positions={path} pathOptions={{
          color: '#ef4444', weight: 10 + lineCount * intensity * 2,
          opacity: 0.18 * intensity,
          lineCap: 'round', lineJoin: 'round',
        }} />
        {/* Inner glow */}
        <Polyline positions={path} pathOptions={{
          color: '#f87171', weight: 4 + intensity * 2,
          opacity: 0.35 * intensity,
          lineCap: 'round', lineJoin: 'round',
        }} />
        {/* Flowing dash lines */}
        {Array.from({ length: lineCount }, (_, li) => (
          <Polyline key={li} positions={path} pathOptions={{
            color: li % 2 === 0 ? '#ef4444' : '#f87171',
            weight: 1 + intensity * 0.8,
            opacity: 0.7 + intensity * 0.25,
            dashArray: `${10 + li * 4} ${6 + li * 2}`,
            dashOffset: String(phase + li * 18),
            lineCap: 'round',
          }} />
        ))}
      </LayerGroup>
    )
  })
}

// ── Noise markers (no area circles for park noise — parks shown as polygons) ──
function NoiseLayer({ data }) {
  return (
    <LayerGroup>
      {data.map((p, i) => {
        const col = noiseColor(p.db)
        return (
          <LayerGroup key={i}>
            <Marker position={p.ll} icon={L.divIcon({
              html: `<div style="font-size:18px;line-height:1;filter:drop-shadow(0 1px 3px #000)">${p.icon}</div>`,
              className: '', iconAnchor: [9, 9],
            })}>
              <Popup><b>{p.icon} {p.label}</b><br /><span style={{ color: col }}>{p.db} dB(A) estimated</span></Popup>
            </Marker>
            <Circle center={p.ll} radius={p.db * 3}
              pathOptions={{ color: col, fillColor: col, fillOpacity: 0.04, weight: 2, opacity: 0.4, dashArray: '4 4' }} />
            <Circle center={p.ll} radius={p.db * 1.2}
              pathOptions={{ color: col, fillColor: col, fillOpacity: 0.06, weight: 1.5, opacity: 0.5 }} />
          </LayerGroup>
        )
      })}
    </LayerGroup>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function MapView({
  layerVisibility, fetchedRoads, fetchedBikeLanes,
  osmParks, osmPedestrian,
  ptA, ptB, route, routeType, liveOn, simHour, onMapClick, isPlacing,
  communityPins, pinMode, onRemovePin,
}) {
  return (
    <MapContainer center={WEIMAR} zoom={14} zoomControl={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <ZoomControl position="bottomright" />
      <SvgPatterns />
      <MapInteraction onMapClick={onMapClick} isPlacing={isPlacing} pinMode={pinMode} />
      <FlagCursor active={isPlacing && !pinMode} />
      {route && <RouteFitter route={route} />}

      {/* Route A/B pins */}
      {ptA && <Marker position={[ptA.lat, ptA.lng]} icon={iconA}><Popup>Start A</Popup></Marker>}
      {ptB && <Marker position={[ptB.lat, ptB.lng]} icon={iconB}><Popup>Destination B</Popup></Marker>}

      {/* Calculated route — animated per character vibe */}
      {route && <AnimatedRoute route={route} routeType={routeType} />}

      {/* Noise layers */}
      {['traffic-noise','rail-noise','construction','school','hospitality'].map(key =>
        layerVisibility[key] && <NoiseLayer key={key} data={noiseData[key]} />
      )}
      {/* Green zones — always on, soft ambient fill */}
      {osmParks.map((park, i) => (
        <Polygon key={i} positions={park.positions}
          pathOptions={{
            fillColor: park.kind === 'forest' ? '#166534' : '#4ade80',
            fillOpacity: park.kind === 'forest' ? 0.22 : 0.25,
            weight: 0,
          }}>
          <Popup><b>🌳 {park.name}</b></Popup>
        </Polygon>
      ))}

      {/* Pedestrian zones — always on, subtle yellow wash */}
      {osmPedestrian.map((zone, i) =>
        zone.isClosed ? (
          <Polygon key={i} positions={zone.positions}
            pathOptions={{ fillColor: 'url(#ped-hatch)', fillOpacity: 1, color: '#ca8a04', weight: 1, opacity: 0.5 }}>
            <Popup><b>🚶 {zone.name}</b></Popup>
          </Polygon>
        ) : (
          <Polyline key={i} positions={zone.positions}
            pathOptions={{ color: '#ca8a04', weight: 2.5, opacity: 0.5, dashArray: '1 5', lineCap: 'round' }}>
            <Popup><b>🚶 {zone.name}</b></Popup>
          </Polyline>
        )
      )}

      {/* Main roads — always on, muted red tint */}
      <LayerGroup>
        {(fetchedRoads ?? []).map((r, i) => (
          <Polyline key={i} positions={r.path}
            pathOptions={{ color: '#b91c1c', weight: Math.max(r.w - 2, 2), opacity: 0.18 }}>
            <Popup><b>🚗 {r.label}</b></Popup>
          </Polyline>
        ))}
      </LayerGroup>

      {/* Bike lanes — always on, subtle amber dash */}
      <LayerGroup>
        {(fetchedBikeLanes ?? []).map((r, i) => (
          <Polyline key={i} positions={r.path}
            pathOptions={{ color: '#d97706', weight: 2, opacity: 0.25, dashArray: r.dash }}>
            <Popup><b>🚲 {r.label || 'Bike lane'}</b></Popup>
          </Polyline>
        ))}
      </LayerGroup>

      {/* Community pins */}
      {(communityPins ?? []).map(pin => (
        <Marker key={pin.id} position={[pin.lat, pin.lng]} icon={L.divIcon({
          html: `<div style="font-size:22px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.6))">${pin.type === 'favourite' ? '❤️' : '⚠️'}</div>`,
          className: '', iconAnchor: [11, 11],
        })}>
          <Popup>
            <b>{pin.type === 'favourite' ? '❤️ Favourite spot' : '⚠️ Problem reported'}</b>
            <br />{pin.description}
            {onRemovePin && (
              <><br /><button onClick={() => onRemovePin(pin.id)} style={{ marginTop: 4, fontSize: 10, cursor: 'pointer', color: '#999' }}>Remove</button></>
            )}
          </Popup>
        </Marker>
      ))}

      {/* Animated traffic flow — glowing lines scaled to time of day */}
      <TrafficFlow roads={fetchedRoads} simHour={liveOn ? simHour : null} />
    </MapContainer>
  )
}
