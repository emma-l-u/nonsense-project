import { useLayoutEffect, useEffect, useRef, useState } from 'react'
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

// ── Cursor & click handler ────────────────────────────────────────────────────
function MapInteraction({ onMapClick, isPlacing, pinMode }) {
  const map = useMap()
  useMapEvents({ click: (e) => onMapClick(e.latlng) })
  useEffect(() => {
    const el = map.getContainer()
    el.classList.toggle('cursor-flag', isPlacing && !pinMode)
    el.style.cursor = pinMode ? 'crosshair' : ''
    return () => { el.classList.remove('cursor-flag'); el.style.cursor = '' }
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

// ── Map pin icons ─────────────────────────────────────────────────────────────
function makePinIcon(letter, color) {
  return L.divIcon({
    html: `<svg viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg" width="28" height="40"
        style="filter:drop-shadow(0 3px 6px rgba(0,0,0,0.6))">
      <path d="M14 0C6.3 0 0 6.3 0 14c0 10 14 26 14 26S28 24 28 14C28 6.3 21.7 0 14 0z"
            fill="${color}" stroke="white" stroke-width="1.5"/>
      <circle cx="14" cy="13" r="7" fill="white"/>
      <text x="14" y="17.5" text-anchor="middle" font-size="9" font-weight="800"
            font-family="sans-serif" fill="${color}">${letter}</text>
    </svg>`,
    className: '', iconSize: [28, 40], iconAnchor: [14, 40], popupAnchor: [0, -40],
  })
}
const iconA = makePinIcon('A', '#16a34a')
const iconB = makePinIcon('B', '#dc2626')

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
      lat + Math.sin(phase * 0.04 + pi * 0.8 + ri * 1.1) * 0.00006 * intensity,
      lng + Math.cos(phase * 0.035 + pi * 0.6 + ri * 0.9) * 0.00004 * intensity,
    ])
    return (
      <LayerGroup key={ri}>
        {/* Wide soft glow halo */}
        <Polyline positions={path} pathOptions={{
          color: '#ef4444', weight: 18 + lineCount * 2,
          opacity: 0.12 * intensity,
          lineCap: 'round', lineJoin: 'round',
        }} />
        {/* Inner glow */}
        <Polyline positions={path} pathOptions={{
          color: '#f87171', weight: 8,
          opacity: 0.25 * intensity, lineCap: 'round', lineJoin: 'round',
        }} />
        {/* Flowing dash lines */}
        {Array.from({ length: lineCount }, (_, li) => (
          <Polyline key={li} positions={path} pathOptions={{
            color: li % 2 === 0 ? '#ef4444' : '#fca5a5',
            weight: 3,
            opacity: 0.75 * intensity,
            dashArray: `${12 + li * 6} ${6 + li * 3}`,
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
    <MapContainer center={WEIMAR} zoom={14} zoomControl={false} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        maxZoom={19}
      />
      <ZoomControl position="bottomright" />
      <SvgPatterns />
      <MapInteraction onMapClick={onMapClick} isPlacing={isPlacing} pinMode={pinMode} />
      {route && <RouteFitter route={route} />}

      {/* Route A/B pins */}
      {ptA && <Marker position={[ptA.lat, ptA.lng]} icon={iconA}><Popup>Start A</Popup></Marker>}
      {ptB && <Marker position={[ptB.lat, ptB.lng]} icon={iconB}><Popup>Destination B</Popup></Marker>}

      {/* Calculated route */}
      {route && (
        <Polyline positions={route.map(p => [p.lat, p.lng])}
          pathOptions={{ color: ROUTE_CONFIG[routeType].color, weight: 5, opacity: 0.9 }}>
          <Popup><b>{ROUTE_CONFIG[routeType].label}</b></Popup>
        </Polyline>
      )}

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
            color: park.kind === 'forest' ? '#15803d' : '#22c55e',
            weight: 1, opacity: 0.5,
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
      {liveOn && <TrafficFlow roads={fetchedRoads} simHour={simHour} />}
    </MapContainer>
  )
}
