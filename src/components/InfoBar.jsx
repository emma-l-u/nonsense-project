export default function InfoBar({ status, timeDisplay }) {
  return (
    <div className="flex flex-wrap gap-4 px-4 py-2 bg-white border-t text-[11px] z-50 relative"
      style={{ borderColor: '#ede9f8' }}>
      <span className="font-medium" style={{
        background: 'linear-gradient(135deg, #7c3aed, #db2777)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>{status}</span>
      <span style={{ color: '#a09ab8' }}>Weimar, Thuringia · OSM data</span>
      {timeDisplay && <span style={{ color: '#a09ab8' }}>{timeDisplay}</span>}
    </div>
  )
}
