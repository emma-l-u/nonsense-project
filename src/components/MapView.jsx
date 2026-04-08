import { useEffect } from 'react'
import {
  MapContainer, TileLayer, Marker, Circle, Polyline,
  LayerGroup, Popup, ZoomControl, useMap, useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import {
  noiseData, mainRoads, bikeLanes, pedestrianZones, carPaths,
  WEIMAR, ROUTE_CONFIG,
} from '../data/mapData'

// ── Icon helpers ─────────────────────────────────────────────────────────────
function makeEmojiIcon(emoji, size = 22) {
  return L.divIcon({
    html: `<div style="font-size:${size}px;line-height:1;filter:drop-shadow(0 1px 2px #000)">${emoji}</div>`,
    className: '',
    iconAnchor: [size / 2, size / 2],
  })
}

const iconA = L.divIcon({
  html: '<div style="background:#22c55e;color:#fff;font-weight:bold;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;border:2px solid #fff">A</div>',
  className: '',
  iconAnchor: [11, 11],
})

const iconB = L.divIcon({
  html: '<div style="background:#ef4444;color:#fff;font-weight:bold;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;border:2px solid #fff">B</div>',
  className: '',
  iconAnchor: [11, 11],
})

// ── Internal components (must live inside MapContainer) ───────────────────────
function MapClickHandler({ onMapClick }) {
  useMapEvents({ click: (e) => onMapClick(e.latlng) })
  return null
}

function RouteFitter({ route }) {
  const map = useMap()
  useEffect(() => {
    if (route?.length) {
      map.fitBounds(
        L.latLngBounds(route.map(p => [p.lat, p.lng])),
        { padding: [40, 40] }
      )
    }
  }, [route, map])
  return null
}

// Renders a single noise category (markers + dB circles)
function NoiseLayer({ data }) {
  return (
    <LayerGroup>
      {data.map((p, i) => {
        const col = p.db > 70 ? '#ef4444'
                  : p.db > 60 ? '#f97316'
                  : p.db > 50 ? '#eab308'
                  : '#22c55e'
        return (
          <LayerGroup key={i}>
            <Marker position={p.ll} icon={makeEmojiIcon(p.icon, 20)}>
              <Popup>
                <b>{p.icon} {p.label}</b><br />
                <span style={{ color: col }}>{p.db} dB(A) est.</span>
              </Popup>
            </Marker>
            <Circle
              center={p.ll}
              radius={p.db * 2.5}
              pathOptions={{ color: col, fillColor: col, fillOpacity: 0.08, weight: 1 }}
            />
          </LayerGroup>
        )
      })}
    </LayerGroup>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function MapView({
  layerVisibility, ptA, ptB, route, routeType,
  liveOn, livePositions, onMapClick,
}) {
  return (
    <MapContainer
      center={WEIMAR}
      zoom={14}
      zoomControl={false}
      className="h-full w-full"
    >
      {/* Base map */}
      <TileLayer
        attribution="© OSM © CARTO"
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        maxZoom={19}
      />
      <ZoomControl position="bottomright" />

      {/* Event handlers */}
      <MapClickHandler onMapClick={onMapClick} />
      {route && <RouteFitter route={route} />}

      {/* City centre pin */}
      <Marker position={WEIMAR} icon={makeEmojiIcon('📍', 18)}>
        <Popup><b>Weimar city centre</b><br />Marktplatz</Popup>
      </Marker>

      {/* Route A / B markers */}
      {ptA && <Marker position={[ptA.lat, ptA.lng]} icon={iconA} />}
      {ptB && <Marker position={[ptB.lat, ptB.lng]} icon={iconB} />}

      {/* Calculated route polyline */}
      {route && (
        <Polyline
          positions={route.map(p => [p.lat, p.lng])}
          pathOptions={{ color: ROUTE_CONFIG[routeType].color, weight: 4, opacity: 0.9 }}
        >
          <Popup><b>{ROUTE_CONFIG[routeType].label}</b></Popup>
        </Polyline>
      )}

      {/* Noise source layers — conditionally rendered by state */}
      {['traffic-noise','rail-noise','construction','school','hospitality','market','park'].map(key =>
        layerVisibility[key] && <NoiseLayer key={key} data={noiseData[key]} />
      )}

      {/* Main road arteries */}
      {layerVisibility['main-roads'] && (
        <LayerGroup>
          {mainRoads.map((r, i) => (
            <Polyline key={i} positions={r.path}
              pathOptions={{ color: r.color, weight: r.w, opacity: 0.7 }}>
              <Popup><b>🚗 {r.label}</b><br />High traffic artery</Popup>
            </Polyline>
          ))}
        </LayerGroup>
      )}

      {/* Bike lanes */}
      {layerVisibility['bike-lanes'] && (
        <LayerGroup>
          {bikeLanes.map((r, i) => (
            <Polyline key={i} positions={r.path}
              pathOptions={{ color: r.color, weight: r.w, opacity: 0.9, dashArray: r.dash }}>
              <Popup><b>🚲 Bike lane</b></Popup>
            </Polyline>
          ))}
        </LayerGroup>
      )}

      {/* Pedestrian zones */}
      {layerVisibility['pedestrian'] && (
        <LayerGroup>
          {pedestrianZones.map((r, i) => (
            <Polyline key={i} positions={r.path}
              pathOptions={{ color: r.color, weight: r.w, opacity: 0.9 }}>
              <Popup><b>🚶 Pedestrian zone</b></Popup>
            </Polyline>
          ))}
        </LayerGroup>
      )}

      {/* Traffic heatmap (approximate intensity circles) */}
      {layerVisibility['heatmap'] && (
        <LayerGroup>
          {[
            [50.9797,11.3294,1.0],[50.9834,11.3353,0.9],[50.9720,11.3100,0.8],
            [50.9830,11.3470,0.7],[50.9760,11.3450,0.6],[50.9820,11.3320,0.8],
          ].map(([lat, lng, intensity], i) => (
            <Circle key={i} center={[lat, lng]} radius={300 + intensity * 200}
              pathOptions={{
                color: '#ef4444', fillColor: '#ef4444',
                fillOpacity: 0.15 * intensity, weight: 0,
              }}
            />
          ))}
        </LayerGroup>
      )}

      {/* Live simulation cars */}
      {liveOn && (
        <LayerGroup>
          {carPaths.map((path, i) => (
            <Marker key={i} position={path[livePositions[i]]}
              icon={makeEmojiIcon('🚗', 14)} />
          ))}
        </LayerGroup>
      )}
    </MapContainer>
  )
}
