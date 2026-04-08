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

// ── Route calculation helpers ────────────────────────────────────────────────
export function generateRoute(a, b, type) {
  const pts = [a]
  const dx = b.lat - a.lat
  const dy = b.lng - a.lng
  const steps = 8
  for (let i = 1; i < steps; i++) {
    const t = i / steps
    let lat = a.lat + dx * t
    let lng = a.lng + dy * t
    if (type === 'fastest') {
      lat += (Math.random() - 0.5) * 0.002
      lng += (Math.random() - 0.5) * 0.002
    } else if (type === 'safest') {
      lat += (Math.random() - 0.5) * 0.004
      lng += (Math.random() - 0.5) * 0.004 - 0.002
    } else if (type === 'nicest') {
      lat += Math.sin(t * Math.PI) * 0.003 + (Math.random() - 0.5) * 0.002
      lng -= Math.abs(Math.sin(t * Math.PI)) * 0.004
    } else if (type === 'bike') {
      lat += (Math.random() - 0.5) * 0.003
      lng += Math.cos(t * Math.PI) * 0.003
    }
    pts.push({ lat, lng })
  }
  pts.push(b)
  return pts
}

export function calcDist(pts) {
  let d = 0
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i]
    const dlat = (b.lat - a.lat) * 111
    const dlng = (b.lng - a.lng) * 71
    d += Math.sqrt(dlat * dlat + dlng * dlng)
  }
  return d
}
