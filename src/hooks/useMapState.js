import { useState, useEffect, useRef, useCallback } from 'react'
import {
  carPaths, ROUTE_CONFIG, LAYER_DEFAULTS,
  generateRoute, calcDist,
} from '../data/mapData'

const NOISE_GROUP = ['traffic-noise', 'rail-noise', 'construction', 'hospitality']

export function useMapState() {
  // Transport mode and route type
  const [mode, setMode] = useState('walk')
  const [routeType, setRouteType] = useState('fastest')

  // Layer visibility — true = visible on map
  const [layerVisibility, setLayerVisibility] = useState(LAYER_DEFAULTS)

  // Click points (state drives rendering, refs avoid stale closures in callbacks)
  const [ptA, setPtA] = useState(null)
  const [ptB, setPtB] = useState(null)
  const ptARef = useRef(null)
  const ptBRef = useRef(null)
  const clickCountRef = useRef(0)

  // Refs so callbacks always see the latest mode/routeType without re-creating handlers
  const routeTypeRef = useRef(routeType)
  const modeRef = useRef(mode)
  useEffect(() => { routeTypeRef.current = routeType }, [routeType])
  useEffect(() => { modeRef.current = mode }, [mode])

  // Calculated route
  const [route, setRoute] = useState(null)
  const [routeInfo, setRouteInfo] = useState(null)

  // Live simulation
  const [liveOn, setLiveOn] = useState(false)
  const [livePositions, setLivePositions] = useState(carPaths.map(() => 0))

  // Status bar text
  const [status, setStatus] = useState(
    'Click the map to set start (A) and destination (B) points'
  )
  const [timeDisplay, setTimeDisplay] = useState('')

  // ── Clock ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hr = now.getHours()
      const mn = now.getMinutes()
      const rush = (hr >= 7 && hr < 9) || (hr >= 16 && hr < 19)
      setTimeDisplay(
        `${String(hr).padStart(2, '0')}:${String(mn).padStart(2, '0')} · ` +
        (rush ? '⚠ Rush hour — high traffic' : 'Normal traffic')
      )
    }
    updateTime()
    const id = setInterval(updateTime, 30000)
    return () => clearInterval(id)
  }, [])

  // ── Live simulation ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!liveOn) return
    const id = setInterval(() => {
      setLivePositions(prev =>
        prev.map((pos, i) => (pos + 1) % carPaths[i].length)
      )
    }, 800)
    return () => clearInterval(id)
  }, [liveOn])

  // ── Route calculation ──────────────────────────────────────────────────────
  const doCalcRoute = useCallback((a, b) => {
    const type = routeTypeRef.current
    const currentMode = modeRef.current
    const pts = generateRoute(a, b, type)
    const dist = calcDist(pts)
    const spd = currentMode === 'walk' ? 5 : 15
    const cfg = ROUTE_CONFIG[type]
    const time = (dist / spd) * 60 * cfg.speedFactor
    setRoute(pts)
    setRouteInfo({
      dist,
      time,
      noiseScore: cfg.noiseScore,
      comfortScore: cfg.comfortScore,
      label: cfg.label,
    })
    setStatus(`${cfg.label} calculated (${currentMode})`)
  }, [])

  // ── Map click: alternate A → B → A → B … ──────────────────────────────────
  const handleMapClick = useCallback((latlng) => {
    const count = clickCountRef.current++
    if (count % 2 === 0) {
      ptARef.current = latlng
      setPtA(latlng)
      setStatus('Now click to set destination B')
    } else {
      ptBRef.current = latlng
      setPtB(latlng)
      setStatus('Points set — calculating route...')
      doCalcRoute(ptARef.current, latlng)
    }
  }, [doCalcRoute])

  // ── Manual recalculate button ──────────────────────────────────────────────
  const handleCalcRoute = useCallback(() => {
    const a = ptARef.current
    const b = ptBRef.current
    if (!a || !b) {
      setStatus('Set A and B first by clicking the map')
      return
    }
    doCalcRoute(a, b)
  }, [doCalcRoute])

  // ── Clear everything ───────────────────────────────────────────────────────
  const handleClear = useCallback(() => {
    setRoute(null)
    setRouteInfo(null)
    setPtA(null)
    setPtB(null)
    ptARef.current = null
    ptBRef.current = null
    clickCountRef.current = 0
    setStatus('Click the map to set start (A) and destination (B) points')
  }, [])

  // ── Layer toggles ──────────────────────────────────────────────────────────
  const toggleLayer = useCallback((key) => {
    setLayerVisibility(prev => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const toggleNoiseGroup = useCallback(() => {
    setLayerVisibility(prev => {
      const anyOn = NOISE_GROUP.some(k => prev[k])
      const updates = Object.fromEntries(NOISE_GROUP.map(k => [k, !anyOn]))
      return { ...prev, ...updates }
    })
  }, [])

  const toggleLive = useCallback(() => {
    setLiveOn(prev => {
      if (prev) setLivePositions(carPaths.map(() => 0))
      return !prev
    })
  }, [])

  // Derived booleans for header button active states
  const trafficActive = layerVisibility['main-roads']
  const noiseActive = NOISE_GROUP.some(k => layerVisibility[k])

  return {
    mode, setMode,
    routeType, setRouteType,
    layerVisibility, toggleLayer, toggleNoiseGroup,
    trafficActive, noiseActive,
    ptA, ptB,
    route, routeInfo,
    liveOn, toggleLive, livePositions,
    status, timeDisplay,
    handleMapClick, handleCalcRoute, handleClear,
  }
}
