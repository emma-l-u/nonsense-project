import { useState, useEffect, useRef, useCallback } from 'react'
import {
  LAYER_DEFAULTS, ROUTE_CONFIG,
  ROAD_SEGMENTS, BIKE_SEGMENTS,
  fetchOsrmPath, fetchOsrmRoute, geocodeAddress,
  fetchOsmParks, fetchOsmPedestrian,
} from '../data/mapData'

const NOISE_GROUP = ['traffic-noise', 'rail-noise', 'construction', 'hospitality']

export function useMapState() {
  const [mode, setMode] = useState('walk')
  const [routeType, setRouteType] = useState('fastest')
  const [layerVisibility, setLayerVisibility] = useState(LAYER_DEFAULTS)

  // OSRM geometry
  const [fetchedRoads, setFetchedRoads] = useState(null)
  const [fetchedBikeLanes, setFetchedBikeLanes] = useState(null)

  // OSM polygon data
  const [osmParks, setOsmParks] = useState([])
  const [osmPedestrian, setOsmPedestrian] = useState([])

  // Route A/B
  const [ptA, setPtA] = useState(null)
  const [ptB, setPtB] = useState(null)
  const ptARef = useRef(null)
  const ptBRef = useRef(null)
  const clickCountRef = useRef(0)

  const routeTypeRef = useRef(routeType)
  const modeRef = useRef(mode)
  useEffect(() => { routeTypeRef.current = routeType }, [routeType])
  useEffect(() => { modeRef.current = mode }, [mode])

  const [route, setRoute] = useState(null)
  const [routeInfo, setRouteInfo] = useState(null)

  // Live simulation toggle
  const [liveOn, setLiveOn] = useState(false)

  // Simulation time (0–24 float hours), starts at current real time
  const [simHour, _setSimHour] = useState(() => {
    const n = new Date(); return n.getHours() + n.getMinutes() / 60
  })
  const simHourRef = useRef(simHour)
  const setSimHour = useCallback((h) => { simHourRef.current = h; _setSimHour(h) }, [])

  // Address search
  const [searchA, setSearchA] = useState('')
  const [searchB, setSearchB] = useState('')
  const [searchingA, setSearchingA] = useState(false)
  const [searchingB, setSearchingB] = useState(false)

  const [status, setStatus] = useState('Search an address or click the map to set A → B')
  const [timeDisplay, setTimeDisplay] = useState('')

  // ── Fetch all geometry at startup ─────────────────────────────────────────
  useEffect(() => {
    // OSRM roads
    Promise.all(ROAD_SEGMENTS.map(seg =>
      fetchOsrmPath(seg.from, seg.to, seg.profile).then(p => p ? { ...seg, path: p } : null).catch(() => null)
    )).then(r => setFetchedRoads(r.filter(Boolean)))

    // OSRM bike lanes
    Promise.all(BIKE_SEGMENTS.map(seg =>
      fetchOsrmPath(seg.from, seg.to, 'bike').then(p => p ? { ...seg, path: p } : null).catch(() => null)
    )).then(r => setFetchedBikeLanes(r.filter(Boolean)))

    // OSM park polygons
    fetchOsmParks().then(setOsmParks)

    // OSM pedestrian zones
    fetchOsmPedestrian().then(setOsmPedestrian)
  }, [])

  // ── Clock ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const hr = now.getHours(), mn = now.getMinutes()
      const rush = (hr >= 7 && hr < 9) || (hr >= 16 && hr < 19)
      setTimeDisplay(`${String(hr).padStart(2, '0')}:${String(mn).padStart(2, '0')} · ${rush ? '⚠ Rush hour' : 'Normal traffic'}`)
    }
    tick(); const id = setInterval(tick, 30000); return () => clearInterval(id)
  }, [])

  // ── Sim-time auto-advance: 10 sim-min per real second (full day ≈ 2.5 min) ──
  useEffect(() => {
    if (!liveOn) return
    const id = setInterval(() => {
      const next = (simHourRef.current + 10 / 60) % 24
      simHourRef.current = next
      _setSimHour(next)
    }, 1000)
    return () => clearInterval(id)
  }, [liveOn])


  // ── Route calculation ─────────────────────────────────────────────────────
  const doCalcRoute = useCallback(async (a, b) => {
    const type = routeTypeRef.current
    const currentMode = modeRef.current
    const cfg = ROUTE_CONFIG[type]
    setStatus('Fetching route…')
    try {
      const profile = currentMode === 'bike' ? 'bike' : 'foot'
      const result = await fetchOsrmRoute(a, b, profile, type)
      if (!result) { setStatus('No route found — try different points'); return }
      setRoute(result.path)
      setRouteInfo({ dist: result.dist, time: result.duration * cfg.speedFactor, noiseScore: cfg.noiseScore, comfortScore: cfg.comfortScore, label: cfg.label })
      setStatus(`${cfg.label} — ${result.dist.toFixed(1)} km · ${Math.round(result.duration * cfg.speedFactor)} min`)
    } catch (err) { console.error('Route error:', err); setStatus('Network error — could not fetch route') }
  }, [])

  // ── Map click ─────────────────────────────────────────────────────────────
  const handleMapClick = useCallback((latlng) => {
    const count = clickCountRef.current++
    if (count % 2 === 0) {
      ptARef.current = latlng; setPtA(latlng)
      setStatus('Now click the map to set your destination B')
    } else {
      ptBRef.current = latlng; setPtB(latlng)
      setStatus('Points set — fetching route…')
      doCalcRoute(ptARef.current, latlng)
    }
  }, [doCalcRoute])

  // ── Address search ────────────────────────────────────────────────────────
  const handleSearchA = useCallback(async (query) => {
    if (!query.trim()) return
    setSearchingA(true)
    try {
      const result = await geocodeAddress(query)
      if (result) {
        const latlng = { lat: result.lat, lng: result.lng }
        ptARef.current = latlng; setPtA(latlng)
        clickCountRef.current = 1
        setStatus('Start A set. Now set destination B.')
        if (ptBRef.current) doCalcRoute(latlng, ptBRef.current)
      } else setStatus('Location not found — try a more specific address')
    } catch { setStatus('Search error') }
    setSearchingA(false)
  }, [doCalcRoute])

  const handleSearchB = useCallback(async (query) => {
    if (!query.trim()) return
    setSearchingB(true)
    try {
      const result = await geocodeAddress(query)
      if (result) {
        const latlng = { lat: result.lat, lng: result.lng }
        ptBRef.current = latlng; setPtB(latlng)
        clickCountRef.current = 0
        setStatus('Destination B set.')
        if (ptARef.current) doCalcRoute(ptARef.current, latlng)
        else setStatus('Destination B set. Now set start A.')
      } else setStatus('Location not found — try a more specific address')
    } catch { setStatus('Search error') }
    setSearchingB(false)
  }, [doCalcRoute])

  const handleCalcRoute = useCallback(() => {
    const a = ptARef.current, b = ptBRef.current
    if (!a || !b) { setStatus('Set both A and B first'); return }
    doCalcRoute(a, b)
  }, [doCalcRoute])

  const handleClear = useCallback(() => {
    setRoute(null); setRouteInfo(null); setPtA(null); setPtB(null)
    setSearchA(''); setSearchB('')
    ptARef.current = null; ptBRef.current = null; clickCountRef.current = 0
    setStatus('Search an address or click the map to set A → B')
  }, [])

  // ── Layer toggles ─────────────────────────────────────────────────────────
  const toggleLayer = useCallback((key) =>
    setLayerVisibility(prev => ({ ...prev, [key]: !prev[key] })), [])

  const toggleNoiseGroup = useCallback(() =>
    setLayerVisibility(prev => {
      const anyOn = NOISE_GROUP.some(k => prev[k])
      return { ...prev, ...Object.fromEntries(NOISE_GROUP.map(k => [k, !anyOn])) }
    }), [])

  const toggleLive = useCallback(() => setLiveOn(prev => !prev), [])

  const noiseActive = NOISE_GROUP.some(k => layerVisibility[k])
  const isPlacing = !ptA || !ptB

  return {
    mode, setMode,
    routeType, setRouteType,
    layerVisibility, toggleLayer, toggleNoiseGroup,
    noiseActive,
    fetchedRoads, fetchedBikeLanes,
    osmParks, osmPedestrian,
    ptA, ptB,
    route, routeInfo,
    liveOn, toggleLive,
    simHour, setSimHour,
    searchA, setSearchA, searchingA, handleSearchA,
    searchB, setSearchB, searchingB, handleSearchB,
    status, timeDisplay,
    isPlacing,
    handleMapClick, handleCalcRoute, handleClear,
  }
}
