import { useState, useEffect, useRef, useCallback } from 'react'
import {
  LAYER_DEFAULTS, ROUTE_CONFIG,
  ROAD_SEGMENTS, BIKE_SEGMENTS,
  fetchOsrmPath, fetchOsrmRoute, geocodeAddress,
  fetchOsmParks, fetchOsmPedestrian,
} from '../data/mapData'
import { CHARACTERS } from '../data/characters.jsx'

const NOISE_GROUP = ['traffic-noise', 'rail-noise', 'construction', 'hospitality']

export function useMapState() {
  // Character selection drives both mode + routeType
  const [selectedCharacter, setSelectedCharacterState] = useState('beate')
  const [mode, setMode] = useState('walk')
  const [routeType, setRouteType] = useState('fastest')
  const [layerVisibility, setLayerVisibility] = useState(LAYER_DEFAULTS)

  const setSelectedCharacter = useCallback((id) => {
    const c = CHARACTERS[id]
    setSelectedCharacterState(id)
    setMode(c.mode)
    modeRef.current = c.mode
    setRouteType(c.routeType)
    routeTypeRef.current = c.routeType
  }, [])

  // Community pins (localStorage-persisted)
  const [communityPins, setCommunityPins] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ww_pins') ?? '[]') } catch { return [] }
  })
  const [pinMode, _setPinMode] = useState(null)  // null | 'favourite' | 'problem'
  const pinModeRef = useRef(null)
  const setPinMode = useCallback((m) => { pinModeRef.current = m; _setPinMode(m) }, [])
  const [pendingPin, setPendingPin] = useState(null) // { lat, lng, type }

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
    // OSRM roads — fall back to straight line if OSRM fails
    Promise.all(ROAD_SEGMENTS.map(seg =>
      fetchOsrmPath(seg.from, seg.to, seg.profile)
        .then(path => ({ ...seg, path: path ?? [[seg.from[1], seg.from[0]], [seg.to[1], seg.to[0]]] }))
        .catch(() => ({ ...seg, path: [[seg.from[1], seg.from[0]], [seg.to[1], seg.to[0]]] }))
    )).then(r => setFetchedRoads(r))

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

  // ── Community pin handlers ─────────────────────────────────────────────────
  const handleAddPin = useCallback((description) => {
    if (!pendingPin) return
    const pin = { ...pendingPin, description, id: Date.now() }
    setCommunityPins(prev => {
      const next = [...prev, pin]
      localStorage.setItem('ww_pins', JSON.stringify(next))
      return next
    })
    setPendingPin(null)
    setPinMode(null)
    setStatus('Memory saved! ❤️')
  }, [pendingPin, setPinMode])

  const handleCancelPin = useCallback(() => {
    setPendingPin(null)
    setPinMode(null)
  }, [setPinMode])

  const handleRemovePin = useCallback((id) => {
    setCommunityPins(prev => {
      const next = prev.filter(p => p.id !== id)
      localStorage.setItem('ww_pins', JSON.stringify(next))
      return next
    })
  }, [])

  // ── Map click ─────────────────────────────────────────────────────────────
  const handleMapClick = useCallback((latlng) => {
    // Pin placement mode takes priority
    if (pinModeRef.current) {
      setPendingPin({ lat: latlng.lat, lng: latlng.lng, type: pinModeRef.current })
      pinModeRef.current = null
      _setPinMode(null)
      setStatus('Describe this spot in the panel →')
      return
    }
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

  // Wandelkarten places layer
  const [showWandel, setShowWandel] = useState(true)
  const [wandelCats, setWandelCats] = useState({ food: true, community: true, repair: true, culture: true, supermarket: true, museum: true })
  const toggleWandel = useCallback(() => setShowWandel(prev => !prev), [])
  const toggleWandelCat = useCallback((cat) =>
    setWandelCats(prev => ({ ...prev, [cat]: !prev[cat] })), [])

  const noiseActive = NOISE_GROUP.some(k => layerVisibility[k])
  const isPlacing = !ptA || !ptB

  return {
    selectedCharacter, setSelectedCharacter,
    mode, routeType,
    layerVisibility, toggleLayer, toggleNoiseGroup,
    noiseActive,
    fetchedRoads, fetchedBikeLanes,
    osmParks, osmPedestrian,
    ptA, ptB,
    route, routeInfo,
    liveOn, toggleLive,
    simHour, setSimHour,
    communityPins, pinMode, setPinMode, pendingPin,
    handleAddPin, handleCancelPin, handleRemovePin,
    searchA, setSearchA, searchingA, handleSearchA,
    searchB, setSearchB, searchingB, handleSearchB,
    status, timeDisplay,
    isPlacing,
    handleMapClick, handleCalcRoute, handleClear,
    showWandel, toggleWandel, wandelCats, toggleWandelCat,
  }
}
