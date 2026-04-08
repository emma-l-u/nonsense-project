import { useMapState } from './hooks/useMapState'
import ControlHeader from './components/ControlHeader'
import MapView from './components/MapView'
import RoutePlanner from './components/RoutePlanner'
import LayerPanel from './components/LayerPanel'
import InfoBar from './components/InfoBar'
import TimeSlider from './components/TimeSlider'

export default function App() {
  const s = useMapState()

  return (
    <div className="flex flex-col h-screen bg-[#0f0f1e] text-gray-200 overflow-hidden">

      <div className="relative flex-1 min-h-0">
        <ControlHeader />
        <MapView
          layerVisibility={s.layerVisibility}
          fetchedRoads={s.fetchedRoads}
          fetchedBikeLanes={s.fetchedBikeLanes}
          fetchedCarPaths={s.fetchedCarPaths}
          osmParks={s.osmParks}
          osmPedestrian={s.osmPedestrian}
          ptA={s.ptA} ptB={s.ptB}
          route={s.route} routeType={s.routeType}
          liveOn={s.liveOn} livePositions={s.livePositions}
          simHour={s.simHour}
          onMapClick={s.handleMapClick}
          isPlacing={s.isPlacing}
        />

        {/* Unified left panel */}
        <RoutePlanner
          ptA={s.ptA} ptB={s.ptB}
          routeInfo={s.routeInfo}
          mode={s.mode} setMode={s.setMode}
          routeType={s.routeType} setRouteType={s.setRouteType}
          onCalcRoute={s.handleCalcRoute}
          onClear={s.handleClear}
          searchA={s.searchA} setSearchA={s.setSearchA}
          searchingA={s.searchingA} onSearchA={s.handleSearchA}
          searchB={s.searchB} setSearchB={s.setSearchB}
          searchingB={s.searchingB} onSearchB={s.handleSearchB}
          noiseActive={s.noiseActive} toggleNoiseGroup={s.toggleNoiseGroup}
          liveOn={s.liveOn} toggleLive={s.toggleLive}
        />

        {/* Layer detail panel */}
        <LayerPanel layerVisibility={s.layerVisibility} toggleLayer={s.toggleLayer} />

        {s.liveOn && (
          <>
            <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-[#1e1b4b] border border-[#6d28d9] rounded-full px-4 py-1 text-[11px] text-[#a78bfa] z-[2000] pointer-events-none">
              ● LIVE — traffic simulation
            </div>
            <TimeSlider simHour={s.simHour} setSimHour={s.setSimHour} liveOn={s.liveOn} />
          </>
        )}
      </div>

      <InfoBar status={s.status} timeDisplay={s.timeDisplay} />
    </div>
  )
}
