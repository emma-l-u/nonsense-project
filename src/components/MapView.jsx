import { useLayoutEffect, useEffect } from 'react'
import {
  MapContainer, TileLayer, Marker, Circle, Polyline, Polygon,
  LayerGroup, Popup, ZoomControl, useMap, useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import { noiseData, WEIMAR, ROUTE_CONFIG, CAR_COLORS } from '../data/mapData'

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
          <rect width="8" height="8" fill="rgba(253,224,71,0.08)"/>
          <line x1="0" y1="0" x2="0" y2="8" stroke="#fde047" stroke-width="2.5" stroke-opacity="0.55"/>
        </pattern>
        <pattern id="park-hatch" width="9" height="9"
            patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
          <rect width="9" height="9" fill="rgba(74,222,128,0.1)"/>
          <line x1="0" y1="0" x2="0" y2="9" stroke="#4ade80" stroke-width="2.5" stroke-opacity="0.55"/>
        </pattern>
        <pattern id="forest-hatch" width="9" height="9"
            patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
          <rect width="9" height="9" fill="rgba(22,101,52,0.15)"/>
          <line x1="0" y1="0" x2="0" y2="9" stroke="#15803d" stroke-width="2.5" stroke-opacity="0.65"/>
        </pattern>
      `
      svg.insertBefore(defs, svg.firstChild)
    }
    tmp.remove()
  }, [map])
  return null
}

// ── Cursor & click handler ────────────────────────────────────────────────────
function MapInteraction({ onMapClick, isPlacing }) {
  const map = useMap()
  useMapEvents({ click: (e) => onMapClick(e.latlng) })
  useEffect(() => {
    const el = map.getContainer()
    el.classList.toggle('cursor-flag', isPlacing)
    return () => el.classList.remove('cursor-flag')
  }, [map, isPlacing])
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

// ── Car icon with bearing ─────────────────────────────────────────────────────
function getBearing([lat1, lng1], [lat2, lng2]) {
  const r = Math.PI / 180
  const φ1 = lat1 * r, φ2 = lat2 * r, Δλ = (lng2 - lng1) * r
  const y = Math.sin(Δλ) * Math.cos(φ2)
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ)
  return (Math.atan2(y, x) / r + 360) % 360
}

function makeCarIcon(bearing, color) {
  return L.divIcon({
    html: `<div style="transform:rotate(${bearing}deg);width:18px;height:26px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.6))">
      <svg viewBox="0 0 18 26" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="3" width="16" height="20" rx="3" fill="${color}" stroke="white" stroke-width="0.8"/>
        <rect x="3" y="5" width="12" height="6" rx="1" fill="rgba(186,230,253,0.9)"/>
        <rect x="3" y="17" width="12" height="4" rx="1" fill="rgba(186,230,253,0.6)"/>
        <rect x="2"  y="3" width="4" height="2" rx="1" fill="#fef08a"/>
        <rect x="12" y="3" width="4" height="2" rx="1" fill="#fef08a"/>
        <rect x="2"  y="21" width="4" height="2" rx="1" fill="#fca5a5"/>
        <rect x="12" y="21" width="4" height="2" rx="1" fill="#fca5a5"/>
        <rect x="0"  y="6" width="2" height="4" rx="1" fill="#1f2937"/>
        <rect x="16" y="6" width="2" height="4" rx="1" fill="#1f2937"/>
        <rect x="0"  y="16" width="2" height="4" rx="1" fill="#1f2937"/>
        <rect x="16" y="16" width="2" height="4" rx="1" fill="#1f2937"/>
      </svg>
    </div>`,
    className: '', iconSize: [18, 26], iconAnchor: [9, 13],
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
  layerVisibility, fetchedRoads, fetchedBikeLanes, fetchedCarPaths,
  osmParks, osmPedestrian,
  ptA, ptB, route, routeType, liveOn, livePositions, onMapClick, isPlacing,
}) {
  return (
    <MapContainer center={WEIMAR} zoom={14} zoomControl={false} className="h-full w-full">
      <TileLayer
        attribution="© OSM © CARTO"
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        maxZoom={19}
      />
      <ZoomControl position="bottomright" />
      <SvgPatterns />
      <MapInteraction onMapClick={onMapClick} isPlacing={isPlacing} />
      {route && <RouteFitter route={route} />}

      {/* City centre pin */}
      <Marker position={WEIMAR} icon={L.divIcon({
        html: '<div style="font-size:18px;filter:drop-shadow(0 1px 3px #000)">📍</div>',
        className: '', iconAnchor: [9, 18],
      })}><Popup><b>Weimar city centre</b><br />Marktplatz</Popup></Marker>

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
      {/* Park noise — markers only, no circles (parks shown as polygons) */}
      {layerVisibility['park'] && (
        <LayerGroup>
          {noiseData.park.map((p, i) => (
            <Marker key={i} position={p.ll} icon={L.divIcon({
              html: `<div style="font-size:16px;filter:drop-shadow(0 1px 3px #000)">${p.icon}</div>`,
              className: '', iconAnchor: [8, 8],
            })}>
              <Popup><b>{p.label}</b><br /><span style={{ color: '#22c55e' }}>{p.db} dB(A) — quiet zone</span></Popup>
            </Marker>
          ))}
        </LayerGroup>
      )}

      {/* OSM Park polygons — green hatch, no centre markers */}
      {layerVisibility['park'] && osmParks.map((park, i) => (
        <Polygon key={i} positions={park.positions}
          pathOptions={{
            fillColor: park.kind === 'forest' ? 'url(#forest-hatch)' : 'url(#park-hatch)',
            fillOpacity: 1,
            color: park.kind === 'forest' ? '#15803d' : '#22c55e',
            weight: 1.5, opacity: 0.55,
          }}>
          <Popup><b>🌳 {park.name}</b></Popup>
        </Polygon>
      ))}

      {/* OSM Pedestrian zones — yellow hatch for areas, lines for streets */}
      {layerVisibility['pedestrian'] && osmPedestrian.map((zone, i) =>
        zone.isClosed ? (
          <Polygon key={i} positions={zone.positions}
            pathOptions={{ fillColor: 'url(#ped-hatch)', fillOpacity: 1, color: '#fde047', weight: 1.5, opacity: 0.55 }}>
            <Popup><b>🚶 {zone.name}</b></Popup>
          </Polygon>
        ) : (
          <Polyline key={i} positions={zone.positions}
            pathOptions={{ color: '#fde047', weight: 4, opacity: 0.45, dashArray: '1 4', lineCap: 'round' }}>
            <Popup><b>🚶 {zone.name}</b></Popup>
          </Polyline>
        )
      )}

      {/* Main roads */}
      {layerVisibility['main-roads'] && (
        <LayerGroup>
          {(fetchedRoads ?? []).map((r, i) => (
            <Polyline key={i} positions={r.path}
              pathOptions={{ color: r.color, weight: r.w, opacity: 0.75 }}>
              <Popup><b>🚗 {r.label}</b></Popup>
            </Polyline>
          ))}
        </LayerGroup>
      )}

      {/* Bike lanes */}
      {layerVisibility['bike-lanes'] && (
        <LayerGroup>
          {(fetchedBikeLanes ?? []).map((r, i) => (
            <Polyline key={i} positions={r.path}
              pathOptions={{ color: r.color, weight: r.w, opacity: 0.9, dashArray: r.dash }}>
              <Popup><b>🚲 {r.label || 'Bike lane'}</b></Popup>
            </Polyline>
          ))}
        </LayerGroup>
      )}

      {/* Traffic heatmap */}
      {layerVisibility['heatmap'] && (
        <LayerGroup>
          {[[50.9797,11.3294,1.0],[50.9834,11.3353,0.9],[50.9720,11.3100,0.8],
            [50.9830,11.3470,0.7],[50.9760,11.3450,0.6],[50.9820,11.3320,0.8]]
            .map(([lat,lng,int],i) => (
            <Circle key={i} center={[lat,lng]} radius={300+int*200}
              pathOptions={{ color:'#ef4444', fillColor:'#ef4444', fillOpacity:0.12*int, weight:0 }} />
          ))}
        </LayerGroup>
      )}

      {/* Live car simulation */}
      {liveOn && fetchedCarPaths && (
        <LayerGroup>
          {fetchedCarPaths.map((path, i) => {
            if (!path) return null
            const pos = Math.min(livePositions[i] ?? 0, path.length - 1)
            const nextPos = Math.min(pos + 1, path.length - 1)
            const bearing = pos < path.length - 1 ? getBearing(path[pos], path[nextPos]) : 0
            return <Marker key={i} position={path[pos]} icon={makeCarIcon(bearing, CAR_COLORS[i])} />
          })}
        </LayerGroup>
      )}
    </MapContainer>
  )
}
