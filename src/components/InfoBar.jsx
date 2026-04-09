export default function InfoBar({ status, timeDisplay }) {
  return (
    <div className="flex flex-wrap gap-4 px-4 py-2 bg-white border-t text-[11px] z-50 relative"
      style={{ borderColor: 'rgba(26,18,9,0.1)', fontFamily: "'Nunito', sans-serif" }}>
      <span className="font-bold" style={{ color: '#1a1209' }}>{status}</span>
      <span style={{ color: 'rgba(26,18,9,0.45)' }}>Weimar, Thuringia · OSM data</span>
      {timeDisplay && <span style={{ color: 'rgba(26,18,9,0.45)' }}>{timeDisplay}</span>}
    </div>
  )
}
