// ── Map centre ────────────────────────────────────────────────────────────────
export const WEIMAR = [50.9797, 11.3294]

// ── Noise source data  (market / events removed) ─────────────────────────────
export const noiseData = {
  'traffic-noise': [
    { ll: [50.979,  11.329],  label: 'B7 / Erfurter Str (heavy traffic)', icon: '🔴', db: 72 },
    { ll: [50.983,  11.325],  label: 'Schillerstr traffic',               icon: '🔴', db: 68 },
    { ll: [50.976,  11.333],  label: 'Carl-August-Allee',                 icon: '🔴', db: 70 },
    { ll: [50.9745, 11.340],  label: 'Ring road E',                       icon: '🔴', db: 74 },
    { ll: [50.9830, 11.347],  label: 'Buchenwald Allee (bypass)',         icon: '🔴', db: 75 },
    { ll: [50.972,  11.322],  label: 'Erfurter Str S junction',           icon: '🔴', db: 71 },
  ],
  'rail-noise': [
    { ll: [50.9834, 11.3353], label: 'Weimar Hauptbahnhof trains',  icon: '🟠', db: 78 },
    { ll: [50.9840, 11.3380], label: 'Rail yard shunting',           icon: '🟠', db: 73 },
    { ll: [50.9820, 11.3320], label: 'Train approach corridor',      icon: '🟠', db: 65 },
  ],
  'construction': [
    { ll: [50.9765, 11.3310], label: 'Construction – Goetheplatz area', icon: '🟡', db: 80 },
    { ll: [50.9810, 11.3290], label: 'Road works – Frauentorstr',       icon: '🟡', db: 78 },
    { ll: [50.9780, 11.3380], label: 'New residential build',           icon: '🟡', db: 76 },
  ],
  'school': [
    { ll: [50.9750, 11.3275], label: 'Gymnasium Am Horn',   icon: '🔵', db: 62 },
    { ll: [50.9810, 11.3350], label: 'Grundschule West',    icon: '🔵', db: 60 },
    { ll: [50.9790, 11.3420], label: 'Schiller Gymnasium',  icon: '🔵', db: 62 },
    { ll: [50.9770, 11.3200], label: 'Kindertagesstätte',   icon: '🔵', db: 58 },
  ],
  'hospitality': [
    { ll: [50.9795, 11.3295], label: 'Marktplatz bars & cafes',       icon: '🟣', db: 65 },
    { ll: [50.9788, 11.3302], label: 'Nightclub Schillerstr',         icon: '🟣', db: 70 },
    { ll: [50.9801, 11.3285], label: 'Restaurant cluster Alt-Weimar', icon: '🟣', db: 60 },
  ],
  'park': [
    { ll: [50.9735, 11.3320], label: 'Park an der Ilm (quiet)',  icon: '🟢', db: 38 },
    { ll: [50.9720, 11.3360], label: 'Tiefurter Anlage',         icon: '🟢', db: 35 },
    { ll: [50.9850, 11.3280], label: 'Belvedereallee forest',    icon: '🟢', db: 32 },
    { ll: [50.9780, 11.3260], label: 'Goethe-Schiller park',     icon: '🟢', db: 40 },
    { ll: [50.9730, 11.3200], label: 'Südpark',                  icon: '🟢', db: 36 },
  ],
}

// ── Road segments fetched from OSRM ──────────────────────────────────────────
export const ROAD_SEGMENTS = [
  { from: [11.3070, 50.9740], to: [11.3294, 50.9797], color: '#dc2626', w: 5, label: 'B7 Erfurter Str',       profile: 'driving' },
  { from: [11.3294, 50.9797], to: [11.3353, 50.9834], color: '#dc2626', w: 4, label: 'Schillerstr → Bahnhof', profile: 'driving' },
  { from: [11.3294, 50.9797], to: [11.3450, 50.9783], color: '#dc2626', w: 4, label: 'Berkaer Str',           profile: 'driving' },
  { from: [11.3353, 50.9834], to: [11.3470, 50.9830], color: '#b91c1c', w: 5, label: 'Buchenwald Allee',      profile: 'driving' },
  { from: [11.3100, 50.9720], to: [11.3450, 50.9760], color: '#b91c1c', w: 5, label: 'Southern bypass',       profile: 'driving' },
  { from: [11.3294, 50.9797], to: [11.3100, 50.9810], color: '#dc2626', w: 3, label: 'Friedensstr',           profile: 'driving' },
]

// ── Bike lane segments fetched from OSRM ─────────────────────────────────────
export const BIKE_SEGMENTS = [
  { from: [11.3070, 50.9740], to: [11.3294, 50.9797], color: '#f59e0b', w: 2, dash: '6,4', label: 'Bike: Erfurter Str'    },
  { from: [11.3294, 50.9797], to: [11.3360, 50.9720], color: '#f59e0b', w: 2, dash: '6,4', label: 'Bike: Park an der Ilm' },
  { from: [11.3294, 50.9797], to: [11.3250, 50.9830], color: '#d97706', w: 2, dash: '6,4', label: 'Bike: Toward Bahnhof'  },
  { from: [11.3294, 50.9797], to: [11.3400, 50.9810], color: '#f59e0b', w: 2, dash: '6,4', label: 'Bike: Berkaer Str'     },
]

// ── Live car routes ───────────────────────────────────────────────────────────
export const CAR_COLORS = ['#60a5fa', '#fb923c', '#f87171']
export const CAR_ROUTE_SEGMENTS = [
  { from: [11.3070, 50.9740], to: [11.3353, 50.9834] },
  { from: [11.3294, 50.9797], to: [11.3470, 50.9830] },
  { from: [11.3100, 50.9720], to: [11.3294, 50.9797] },
]

// ── Layer defaults ─────────────────────────────────────────────────────────────
export const LAYER_DEFAULTS = {
  'traffic-noise': false,
  'rail-noise':    false,
  'construction':  false,
  'school':        false,
  'hospitality':   false,
  'park':          false,
  'main-roads':    true,
  'bike-lanes':    false,
  'pedestrian':    false,
  'heatmap':       false,
}

// ── Route configuration ───────────────────────────────────────────────────────
export const ROUTE_CONFIG = {
  fastest: { color: '#22c55e', label: 'Fastest route',               speedFactor: 1.0, noiseScore: 'High',     comfortScore: 'Low'       },
  safest:  { color: '#3b82f6', label: 'Safest route (low traffic)',   speedFactor: 1.3, noiseScore: 'Low',      comfortScore: 'High'      },
  nicest:  { color: '#84cc16', label: 'Nicest route (green & quiet)', speedFactor: 1.5, noiseScore: 'Very low', comfortScore: 'Very high' },
  bike:    { color: '#f59e0b', label: 'Best bike route',              speedFactor: 1.2, noiseScore: 'Medium',   comfortScore: 'High'      },
}

// ── OSRM routing — separate servers per transport mode ───────────────────────
// routing.openstreetmap.de hosts reliable OSRM instances for car, bike & foot
const OSRM_CAR  = 'https://routing.openstreetmap.de/routed-car/route/v1/driving'
const OSRM_BIKE = 'https://routing.openstreetmap.de/routed-bike/route/v1/driving'
const OSRM_FOOT = 'https://routing.openstreetmap.de/routed-foot/route/v1/driving'

function osrmBase(profile) {
  if (profile === 'bike' || profile === 'cycling') return OSRM_BIKE
  if (profile === 'foot' || profile === 'walking') return OSRM_FOOT
  return OSRM_CAR
}

async function osrmFetch(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`OSRM ${res.status}`)
  const data = await res.json()
  if (data.code !== 'Ok' || !data.routes?.length) return null
  return data
}

// Fetch a polyline path between two [lng, lat] points (for roads/bike lanes/cars)
export async function fetchOsrmPath(fromLngLat, toLngLat, profile = 'driving') {
  const [lng1, lat1] = fromLngLat, [lng2, lat2] = toLngLat
  const base = osrmBase(profile)
  const data = await osrmFetch(`${base}/${lng1},${lat1};${lng2},${lat2}?overview=full&geometries=geojson`)
  if (!data) return null
  return data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng])
}

// Waypoints added per route type to produce genuinely different routes
// (coordinates are lng,lat — OSRM order)
const ROUTE_WAYPOINTS = {
  nicest: '11.3330,50.9740',  // via Park an der Ilm
  safest: '11.3285,50.9808',  // via quieter residential streets near Schillerplatz
}

// Fetch an A→B route for the route planner
export async function fetchOsrmRoute(a, b, mode = 'foot', routeType = 'fastest') {
  const base = osrmBase(mode)
  const wp = (mode !== 'bike' && ROUTE_WAYPOINTS[routeType])
    ? `${a.lng},${a.lat};${ROUTE_WAYPOINTS[routeType]};${b.lng},${b.lat}`
    : `${a.lng},${a.lat};${b.lng},${b.lat}`

  let data = await osrmFetch(`${base}/${wp}?overview=full&geometries=geojson`).catch(() => null)

  // If waypoint route fails, fall back to direct route
  if (!data && ROUTE_WAYPOINTS[routeType]) {
    data = await osrmFetch(`${base}/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson`).catch(() => null)
  }
  if (!data) return null

  const route = data.routes[0]
  return {
    path: route.geometry.coordinates.map(([lng, lat]) => ({ lat, lng })),
    dist: route.distance / 1000,
    duration: route.duration / 60,
  }
}

// ── Nominatim geocoding ────────────────────────────────────────────────────────
export async function geocodeAddress(query) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`,
    { headers: { 'Accept-Language': 'en' } }
  )
  const data = await res.json()
  if (!data.length) return null
  return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon), label: data[0].display_name }
}

// ── OpenStreetMap Overpass API — real park & pedestrian polygons ───────────────
const OVERPASS = 'https://overpass-api.de/api/interpreter'
const BBOX = '50.955,11.300,51.000,11.375' // Weimar area bounding box

export async function fetchOsmParks() {
  const q = `[out:json][timeout:30];(
    way["leisure"="park"](${BBOX});
    way["leisure"="garden"](${BBOX});
    way["landuse"="forest"](${BBOX});
    way["natural"="wood"](${BBOX});
  );out geom;`
  try {
    const res = await fetch(`${OVERPASS}?data=${encodeURIComponent(q)}`)
    const data = await res.json()
    return data.elements
      .filter(el =>
        el.type === 'way' &&
        el.geometry?.length > 2 &&
        el.nodes?.[0] === el.nodes?.[el.nodes.length - 1] // must be a closed polygon
      )
      .map(el => ({
        positions: el.geometry.map(p => [p.lat, p.lon]),
        name: el.tags?.name || el.tags?.leisure || el.tags?.landuse || 'Green space',
        kind: (el.tags?.landuse === 'forest' || el.tags?.natural === 'wood') ? 'forest' : 'park',
      }))
  } catch {
    return []
  }
}

export async function fetchOsmPedestrian() {
  const q = `[out:json][timeout:30];(
    way["highway"="pedestrian"](${BBOX});
    way["place"="square"](${BBOX});
    way["highway"="footway"]["area"="yes"](${BBOX});
  );out geom;`
  try {
    const res = await fetch(`${OVERPASS}?data=${encodeURIComponent(q)}`)
    const data = await res.json()
    return data.elements
      .filter(el => el.type === 'way' && el.geometry?.length > 1)
      .map(el => ({
        positions: el.geometry.map(p => [p.lat, p.lon]),
        name: el.tags?.name || 'Pedestrian zone',
        isClosed: el.nodes?.[0] === el.nodes?.[el.nodes.length - 1],
      }))
  } catch {
    return []
  }
}
