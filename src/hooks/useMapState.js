import { useState, useEffect, useRef, useCallback } from 'react'
import {
  LAYER_DEFAULTS, ROUTE_CONFIG, CAR_ROUTE_SEGMENTS, CAR_COLORS,
  ROAD_SEGMENTS, BIKE_SEGMENTS,
  fetchOsrmPath, fetchOsrmRoute, geocodeAddress,
} from '../data/mapData'

const NOISE_GROUP = ['traffic-noise', 'rail-noise', 'construction', 'hospitality']

export function useMapState() {
  const [mode, setMode] = useState('walk')
  const [routeType, setRouteType] = useState('fastest')
  const [layerVisibility, setLayerVisibility] = useState(LAYER_DEFAULTS)

  // Real road / bike-lane / car-path geometries fetched from OSRM
  const [fetchedRoads, setFetchedRoads] = useState(null)
  const [fetchedBikeLanes, setFetchedBikeLanes] = useState(null)
  const [fetchedCarPaths, setFetchedCarPaths] = useState(null)

  // Route A / B points
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

  // Live simulation
  const [liveOn, setLiveOn] = useState(false)
  const [livePositions, setLivePositions] = useState(CAR_ROUTE_SEGMENTS.map(() => 0))
  const liveDirectionsRef = useRef(CAR_ROUTE_SEGMENTS.map(() => 1))

  // Address search inputs
  const [searchA, setSearchA] = useState('')
  const [searchB, setSearchB] = useState('')
  const [searchingA, setSearchingA] = useState(false)
  const [searchingB, setSearchingB] = useState(false)

  const [status, setStatus] = useState('Click the map or search to set start (A) and destination (B)')
  const [timeDisplay, setTimeDisplay] = useState('')

  // ── Fetch all OSRM geometries at startup ───────────────────────────────────
  useEffect(() => {
    // Main roads (driving)
    Promise.all(
      ROAD_SEGMENTS.map(seg =>
        fetchOsrmPath(seg.from, seg.to, seg.profile)
          .then(path => path ? { ...seg, path } : null)
          .catch(() => null)
      )
    ).then(r => setFetchedRoads(r.filter(Boolean)))

    // Bike lanes (bike profile)
    Promise.all(
      BIKE_SEGMENTS.map(seg =>
        fetchOsrmPath(seg.from, seg.to, 'bike')
          .then(path => path ? { ...seg, path } : null)
          .catch(() => null)
      )
    ).then(r => setFetchedBikeLanes(r.filter(Boolean)))

    // Live car routes (driving, then mirror for bounce)
    Promise.all(
      CAR_ROUTE_SEGMENTS.map((seg, i) =>
        fetchOsrmPath(seg.from, seg.to, 'driving')
          .then(path => path ? path : null)
          .catch(() => null)
      )
    ).then(paths => {
      const valid = paths.map((p, i) => p || null)
      setFetchedCarPaths(valid)
      setLivePositions(valid.map(() => 0))
    })
  }, [])

  // ── Clock ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const hr = now.getHours(), mn = now.getMinutes()
      const rush = (hr >= 7 && hr < 9) || (hr >= 16 && hr < 19)
      setTimeDisplay(
        `${String(hr).padStart(2, '0')}:${String(mn).padStart(2, '0')} · ` +
        (rush ? '⚠ Rush hour' : 'Normal traffic')
      )
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  // ── Live simulation with bounce (cars reverse direction at path ends) ──────
  useEffect(() => {
    if (!liveOn || !fetchedCarPaths) return
    const id = setInterval(() => {
      setLivePositions(prev =>
        prev.map((pos, i) => {
          const path = fetchedCarPaths[i]
          if (!path) return pos
          const next = pos + liveDirectionsRef.current[i]
          if (next >= path.length) {
            liveDirectionsRef.current[i] = -1
            return path.length - 2
          }
          if (next < 0) {
            liveDirectionsRef.current[i] = 1
            return 1
          }
          return next
        })
      )
    }, 120) // fast tick = smooth movement
    return () => clearInterval(id)
  }, [liveOn, fetchedCarPaths])

  // ── Route calculation ─────────────────────────────────────────────────────
  const doCalcRoute = useCallback(async (a, b) => {
    const type = routeTypeRef.current
    const currentMode = modeRef.current
    const cfg = ROUTE_CONFIG[type]
    setStatus('Fetching route…')
    try {
      const profile = currentMode === 'bike' ? 'bike' : 'foot'
      const result = await fetchOsrmRoute(a, b, profile)
      if (!result) { setStatus('No route found — try different points'); return }
      setRoute(result.path)
      setRouteInfo({
        dist: result.dist,
        time: result.duration * cfg.speedFactor,
        noiseScore: cfg.noiseScore,
        comfortScore: cfg.comfortScore,
        label: cfg.label,
      })
      setStatus(`${cfg.label} calculated (${currentMode})`)
    } catch {
      setStatus('Network error — could not fetch route')
    }
  }, [])

  // ── Map click handler ─────────────────────────────────────────────────────
  const handleMapClick = useCallback((latlng) => {
    const count = clickCountRef.current++
    if (count % 2 === 0) {
      ptARef.current = latlng
      setPtA(latlng)
      setStatus('Now click to set destination B')
    } else {
      ptBRef.current = latlng
      setPtB(latlng)
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
        ptARef.current = latlng
        setPtA(latlng)
        clickCountRef.current = 1 // next click sets B
        setStatus('Start point A set. Now set destination B.')
      } else {
        setStatus('Location not found — try a more specific search')
      }
    } catch {
      setStatus('Search error')
    }
    setSearchingA(false)
  }, [])

  const handleSearchB = useCallback(async (query) => {
    if (!query.trim()) return
    setSearchingB(true)
    try {
      const result = await geocodeAddress(query)
      if (result) {
        const latlng = { lat: result.lat, lng: result.lng }
        ptBRef.current = latlng
        setPtB(latlng)
        clickCountRef.current = 0 // next click sets A again
        if (ptARef.current) doCalcRoute(ptARef.current, latlng)
        else setStatus('Destination B set. Now set start point A.')
      } else {
        setStatus('Location not found — try a more specific search')
      }
    } catch {
      setStatus('Search error')
    }
    setSearchingB(false)
  }, [doCalcRoute])

  // ── Manual recalculate ────────────────────────────────────────────────────
  const handleCalcRoute = useCallback(() => {
    const a = ptARef.current, b = ptBRef.current
    if (!a || !b) { setStatus('Set A and B first'); return }
    doCalcRoute(a, b)
  }, [doCalcRoute])

  // ── Clear ─────────────────────────────────────────────────────────────────
  const handleClear = useCallback(() => {
    setRoute(null); setRouteInfo(null)
    setPtA(null); setPtB(null)
    setSearchA(''); setSearchB('')
    ptARef.current = null; ptBRef.current = null; clickCountRef.current = 0
    setStatus('Click the map or search to set start (A) and destination (B)')
  }, [])

  // ── Layer toggles ─────────────────────────────────────────────────────────
  const toggleLayer = useCallback((key) => {
    setLayerVisibility(prev => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const toggleNoiseGroup = useCallback(() => {
    setLayerVisibility(prev => {
      const anyOn = NOISE_GROUP.some(k => prev[k])
      return { ...prev, ...Object.fromEntries(NOISE_GROUP.map(k => [k, !anyOn])) }
    })
  }, [])

  const toggleLive = useCallback(() => {
    setLiveOn(prev => {
      if (prev) {
        setLivePositions(CAR_ROUTE_SEGMENTS.map(() => 0))
        liveDirectionsRef.current = CAR_ROUTE_SEGMENTS.map(() => 1)
      }
      return !prev
    })
  }, [])

  const trafficActive = layerVisibility['main-roads']
  const noiseActive = NOISE_GROUP.some(k => layerVisibility[k])

  // Cursor: show flag whenever the user is expected to click (ptA or ptB missing)
  const isPlacing = !ptA || !ptB

  return {
    mode, setMode,
    routeType, setRouteType,
    layerVisibility, toggleLayer, toggleNoiseGroup,
    trafficActive, noiseActive,
    fetchedRoads, fetchedBikeLanes, fetchedCarPaths,
    ptA, ptB,
    route, routeInfo,
    liveOn, toggleLive, livePositions,
    searchA, setSearchA, searchingA, handleSearchA,
    searchB, setSearchB, searchingB, handleSearchB,
    status, timeDisplay,
    isPlacing,
    handleMapClick, handleCalcRoute, handleClear,
  }
}
