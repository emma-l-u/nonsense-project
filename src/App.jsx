import { useMapState } from './hooks/useMapState'
import ControlHeader from './components/ControlHeader'
import MapView from './components/MapView'
import RoutePlanner from './components/RoutePlanner'
import LayerPanel from './components/LayerPanel'
import InfoBar from './components/InfoBar'

export default function App() {
  const s = useMapState()

  return (
    <div className="flex flex-col h-screen bg-[#1a1a2e] text-gray-200 overflow-hidden">
      <ControlHeader
        mode={s.mode} setMode={s.setMode}
        routeType={s.routeType} setRouteType={s.setRouteType}
        trafficActive={s.trafficActive} noiseActive={s.noiseActive}
        liveOn={s.liveOn} layerVisibility={s.layerVisibility}
        toggleLayer={s.toggleLayer} toggleNoiseGroup={s.toggleNoiseGroup}
        toggleLive={s.toggleLive} onClear={s.handleClear}
      />

      <div className="relative flex-1 min-h-0">
        <MapView
          layerVisibility={s.layerVisibility}
          fetchedRoads={s.fetchedRoads}
          fetchedBikeLanes={s.fetchedBikeLanes}
          fetchedCarPaths={s.fetchedCarPaths}
          ptA={s.ptA} ptB={s.ptB}
          route={s.route} routeType={s.routeType}
          liveOn={s.liveOn} livePositions={s.livePositions}
          onMapClick={s.handleMapClick}
          isPlacing={s.isPlacing}
        />

        <RoutePlanner
          ptA={s.ptA} ptB={s.ptB}
          routeInfo={s.routeInfo}
          onCalcRoute={s.handleCalcRoute}
          onClear={s.handleClear}
          searchA={s.searchA} setSearchA={s.setSearchA}
          searchingA={s.searchingA} onSearchA={s.handleSearchA}
          searchB={s.searchB} setSearchB={s.setSearchB}
          searchingB={s.searchingB} onSearchB={s.handleSearchB}
        />

        <LayerPanel layerVisibility={s.layerVisibility} toggleLayer={s.toggleLayer} />

        {s.liveOn && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#1e1b4b] border border-[#6d28d9] rounded px-3 py-1 text-[11px] text-[#a78bfa] z-[2000] pointer-events-none">
            ● LIVE — traffic simulation running
          </div>
        )}
      </div>

      <InfoBar status={s.status} timeDisplay={s.timeDisplay} />
    </div>
  )
}
