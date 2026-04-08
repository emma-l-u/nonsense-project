import { useMapState } from './hooks/useMapState'
import ControlHeader from './components/ControlHeader'
import MapView from './components/MapView'
import RoutePlanner from './components/RoutePlanner'
import LayerPanel from './components/LayerPanel'
import InfoBar from './components/InfoBar'

export default function App() {
  const state = useMapState()

  return (
    <div className="flex flex-col h-screen bg-[#1a1a2e] text-gray-200 overflow-hidden">
      {/* Top control bar */}
      <ControlHeader
        mode={state.mode}
        setMode={state.setMode}
        routeType={state.routeType}
        setRouteType={state.setRouteType}
        trafficActive={state.trafficActive}
        noiseActive={state.noiseActive}
        liveOn={state.liveOn}
        layerVisibility={state.layerVisibility}
        toggleLayer={state.toggleLayer}
        toggleNoiseGroup={state.toggleNoiseGroup}
        toggleLive={state.toggleLive}
        onClear={state.handleClear}
      />

      {/* Map area — flex-1 + min-h-0 makes the map fill the remaining space */}
      <div className="relative flex-1 min-h-0">
        <MapView
          layerVisibility={state.layerVisibility}
          fetchedRoads={state.fetchedRoads}
          ptA={state.ptA}
          ptB={state.ptB}
          route={state.route}
          routeType={state.routeType}
          liveOn={state.liveOn}
          livePositions={state.livePositions}
          onMapClick={state.handleMapClick}
        />

        {/* Floating panels (positioned over the map) */}
        <RoutePlanner
          ptA={state.ptA}
          ptB={state.ptB}
          routeInfo={state.routeInfo}
          onCalcRoute={state.handleCalcRoute}
          onClear={state.handleClear}
        />

        <LayerPanel
          layerVisibility={state.layerVisibility}
          toggleLayer={state.toggleLayer}
        />

        {/* Live simulation badge */}
        {state.liveOn && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#1e1b4b] border border-[#6d28d9] rounded px-3 py-1 text-[11px] text-[#a78bfa] z-[2000] pointer-events-none">
            ● LIVE — updating traffic conditions
          </div>
        )}
      </div>

      {/* Bottom status bar */}
      <InfoBar status={state.status} timeDisplay={state.timeDisplay} />
    </div>
  )
}
