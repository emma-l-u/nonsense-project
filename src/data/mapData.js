// ── Map centre ──────────────────────────────────────────────────────────────
export const WEIMAR = [50.9797, 11.3294]

// ── Noise source data ────────────────────────────────────────────────────────
export const noiseData = {
  'traffic-noise': [
    { ll: [50.979, 11.329],  label: 'B7 / Erfurter Str (heavy traffic)', icon: '🔴', db: 72 },
    { ll: [50.983, 11.325],  label: 'Schillerstr traffic',               icon: '🔴', db: 68 },
    { ll: [50.976, 11.333],  label: 'Carl-August-Allee',                 icon: '🔴', db: 70 },
    { ll: [50.9745, 11.340], label: 'Ring road E',                       icon: '🔴', db: 74 },
    { ll: [50.9830, 11.347], label: 'Buchenwald Allee (bypass)',         icon: '🔴', db: 75 },
    { ll: [50.972, 11.322],  label: 'Erfurter Str S junction',           icon: '🔴', db: 71 },
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
  'market': [
    { ll: [50.9797, 11.3294], label: 'Wochenmarkt (Wed/Sat)',     icon: '🔮', db: 63 },
    { ll: [50.9760, 11.3310], label: 'Christkindlmarkt (seasonal)', icon: '🔮', db: 65 },
  ],
  'park': [
    { ll: [50.9755, 11.3340], label: 'Park an der Ilm (quiet)',  icon: '🟢', db: 38 },
    { ll: [50.9720, 11.3360], label: 'Tiefurter Anlage',         icon: '🟢', db: 35 },
    { ll: [50.9850, 11.3280], label: 'Belvedereallee forest',    icon: '🟢', db: 32 },
    { ll: [50.9780, 11.3260], label: 'Goethe-Schiller park',     icon: '🟢', db: 40 },
    { ll: [50.9730, 11.3200], label: 'Südpark',                  icon: '🟢', db: 36 },
  ],
}

// ── Road / path data ─────────────────────────────────────────────────────────
export const mainRoads = [
  { path: [[50.9720,11.3100],[50.9760,11.3200],[50.9780,11.3280],[50.9797,11.3294]], color: '#dc2626', w: 5, label: 'B7 Erfurter Str' },
  { path: [[50.9797,11.3294],[50.9820,11.3320],[50.9834,11.3353]],                   color: '#dc2626', w: 4, label: 'Schillerstr-Bahnhof' },
  { path: [[50.9797,11.3294],[50.9790,11.3380],[50.9783,11.3450]],                   color: '#dc2626', w: 4, label: 'Berkaer Str' },
  { path: [[50.9830,11.3470],[50.9830,11.3380],[50.9834,11.3353]],                   color: '#b91c1c', w: 5, label: 'Buchenwald Allee (ring)' },
  { path: [[50.9720,11.3100],[50.9720,11.3220],[50.9740,11.3400],[50.9760,11.3450]], color: '#b91c1c', w: 5, label: 'Southern bypass' },
  { path: [[50.9797,11.3294],[50.9800,11.3220],[50.9810,11.3100]],                   color: '#dc2626', w: 3, label: 'Friedensstr' },
]

export const bikeLanes = [
  { path: [[50.9797,11.3294],[50.9780,11.3310],[50.9760,11.3340],[50.9740,11.3360]], color: '#f59e0b', w: 2, dash: '6,4' },
  { path: [[50.9797,11.3294],[50.9810,11.3270],[50.9830,11.3250]],                   color: '#f59e0b', w: 2, dash: '6,4' },
  { path: [[50.9797,11.3294],[50.9800,11.3350],[50.9810,11.3400]],                   color: '#f59e0b', w: 2, dash: '6,4' },
  { path: [[50.9797,11.3294],[50.9770,11.3280],[50.9750,11.3270]],                   color: '#d97706', w: 2, dash: '6,4' },
]

export const pedestrianZones = [
  { path: [[50.9797,11.3294],[50.9793,11.3282],[50.9789,11.3272]], color: '#84cc16', w: 3 },
  { path: [[50.9797,11.3294],[50.9803,11.3298],[50.9808,11.3300]], color: '#84cc16', w: 3 },
  { path: [[50.9797,11.3294],[50.9795,11.3305],[50.9792,11.3315]], color: '#84cc16', w: 3 },
]

// ── Live simulation car paths ────────────────────────────────────────────────
export const carPaths = [
  [[50.9720,11.3100],[50.9760,11.3200],[50.9780,11.3280],[50.9797,11.3294],[50.9820,11.3320]],
  [[50.9830,11.3470],[50.9830,11.3380],[50.9834,11.3353],[50.9820,11.3320],[50.9797,11.3294]],
  [[50.9797,11.3294],[50.9790,11.3380],[50.9783,11.3450],[50.9760,11.3450]],
]

// ── Route configuration ──────────────────────────────────────────────────────
export const ROUTE_CONFIG = {
  fastest: { color: '#22c55e', label: 'Fastest route',               speedFactor: 1.0, noiseScore: 'High',     comfortScore: 'Low' },
  safest:  { color: '#3b82f6', label: 'Safest route (low traffic)',   speedFactor: 1.3, noiseScore: 'Low',      comfortScore: 'High' },
  nicest:  { color: '#84cc16', label: 'Nicest route (green & quiet)', speedFactor: 1.5, noiseScore: 'Very low', comfortScore: 'Very high' },
  bike:    { color: '#f59e0b', label: 'Best bike route (flat, lanes)',speedFactor: 1.2, noiseScore: 'Medium',   comfortScore: 'High' },
}

// ── Layer visibility defaults ────────────────────────────────────────────────
export const LAYER_DEFAULTS = {
  'traffic-noise': true,
  'rail-noise':    true,
  'construction':  true,
  'school':        true,
  'hospitality':   true,
  'market':        true,
  'park':          true,
  'main-roads':    true,
  'bike-lanes':    true,
  'pedestrian':    true,
  'heatmap':       false,
}

// ── Road segments to fetch from OSRM at startup ──────────────────────────────
// Coordinates are [lng, lat] — OSRM order (opposite of Leaflet)
export const ROAD_SEGMENTS = [
  { from: [11.3070, 50.9740], to: [11.3294, 50.9797], color: '#dc2626', w: 5, label: 'B7 Erfurter Str',        profile: 'driving' },
  { from: [11.3294, 50.9797], to: [11.3353, 50.9834], color: '#dc2626', w: 4, label: 'Schillerstr → Bahnhof',  profile: 'driving' },
  { from: [11.3294, 50.9797], to: [11.3450, 50.9783], color: '#dc2626', w: 4, label: 'Berkaer Str',            profile: 'driving' },
  { from: [11.3353, 50.9834], to: [11.3470, 50.9830], color: '#b91c1c', w: 5, label: 'Buchenwald Allee',       profile: 'driving' },
  { from: [11.3100, 50.9720], to: [11.3450, 50.9760], color: '#b91c1c', w: 5, label: 'Southern bypass',        profile: 'driving' },
  { from: [11.3294, 50.9797], to: [11.3100, 50.9810], color: '#dc2626', w: 3, label: 'Friedensstr',            profile: 'driving' },
]

// ── OSRM route fetching ───────────────────────────────────────────────────────
const OSRM = 'https://router.project-osrm.org/route/v1'

// Fetch a single road-following path between two [lng, lat] points
export async function fetchOsrmPath(fromLngLat, toLngLat, profile = 'driving') {
  const [lng1, lat1] = fromLngLat
  const [lng2, lat2] = toLngLat
  const url = `${OSRM}/${profile}/${lng1},${lat1};${lng2},${lat2}?overview=full&geometries=geojson`
  const res = await fetch(url)
  const data = await res.json()
  if (data.code !== 'Ok' || !data.routes?.length) return null
  // Convert OSRM's [lng, lat] pairs → Leaflet's [lat, lng]
  return data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng])
}

// Fetch an A→B route and return distance (km), duration (min), and path
export async function fetchOsrmRoute(a, b, profile = 'foot') {
  const url = `${OSRM}/${profile}/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson`
  const res = await fetch(url)
  const data = await res.json()
  if (data.code !== 'Ok' || !data.routes?.length) return null
  const route = data.routes[0]
  return {
    path: route.geometry.coordinates.map(([lng, lat]) => ({ lat, lng })),
    dist: route.distance / 1000,       // metres → km
    duration: route.duration / 60,     // seconds → minutes
  }
}
