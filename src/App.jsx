import { useMapState } from './hooks/useMapState'
import { useSoundscape } from './hooks/useSoundscape'
import { useBackgroundMusic } from './hooks/useBackgroundMusic'
import ControlHeader from './components/ControlHeader'
import MapView from './components/MapView'
import RoutePlanner from './components/RoutePlanner'
import InfoBar from './components/InfoBar'
import TimeSlider from './components/TimeSlider'
import CommunityPanel from './components/CommunityPanel'

export default function App() {
  const s = useMapState()
  useSoundscape(s.route, s.selectedCharacter)
  useBackgroundMusic(!!s.route)

  return (
    <div className="flex flex-col h-screen text-gray-700 overflow-hidden" style={{ background: '#ffffff' }}>

      <div className="relative flex-1 min-h-0">
        <ControlHeader />

        <MapView
          layerVisibility={s.layerVisibility}
          fetchedRoads={s.fetchedRoads}
          fetchedBikeLanes={s.fetchedBikeLanes}
          osmParks={s.osmParks}
          osmPedestrian={s.osmPedestrian}
          ptA={s.ptA} ptB={s.ptB}
          route={s.route} routeType={s.routeType}
          liveOn={s.liveOn} simHour={s.simHour}
          onMapClick={s.handleMapClick}
          isPlacing={s.isPlacing}
          communityPins={s.communityPins}
          pinMode={s.pinMode}
          onRemovePin={s.handleRemovePin}
          showWandel={s.showWandel}
          wandelCats={s.wandelCats}
        />

        <RoutePlanner
          ptA={s.ptA} ptB={s.ptB}
          routeInfo={s.routeInfo}
          selectedCharacter={s.selectedCharacter}
          setSelectedCharacter={s.setSelectedCharacter}
          onCalcRoute={s.handleCalcRoute}
          onClear={s.handleClear}
          searchA={s.searchA} setSearchA={s.setSearchA}
          searchingA={s.searchingA} onSearchA={s.handleSearchA}
          searchB={s.searchB} setSearchB={s.setSearchB}
          searchingB={s.searchingB} onSearchB={s.handleSearchB}
          noiseActive={s.noiseActive} toggleNoiseGroup={s.toggleNoiseGroup}
          layerVisibility={s.layerVisibility} toggleLayer={s.toggleLayer}
          liveOn={s.liveOn} toggleLive={s.toggleLive}
        />

        <CommunityPanel
          communityPins={s.communityPins}
          pinMode={s.pinMode}
          setPinMode={s.setPinMode}
          pendingPin={s.pendingPin}
          onAddPin={s.handleAddPin}
          onCancelPin={s.handleCancelPin}
          showWandel={s.showWandel} toggleWandel={s.toggleWandel}
          wandelCats={s.wandelCats} toggleWandelCat={s.toggleWandelCat}
        />

        <div className="live-badge absolute top-14 left-1/2 rounded-full px-4 py-1 text-[11px] font-semibold z-[2000] pointer-events-none"
          style={s.liveOn
            ? { background: '#ef4444', color: '#fff', boxShadow: '0 0 12px rgba(239,68,68,0.7)' }
            : { background: 'linear-gradient(135deg, #7c3aed, #db2777)', color: 'white', boxShadow: '0 2px 12px rgba(124,58,237,0.4)' }
          }>
          ● LIVE — traffic simulation
        </div>
        {s.liveOn && (
          <TimeSlider simHour={s.simHour} setSimHour={s.setSimHour} liveOn={s.liveOn} />
        )}
      </div>

      <InfoBar status={s.status} timeDisplay={s.timeDisplay} />
    </div>
  )
}
