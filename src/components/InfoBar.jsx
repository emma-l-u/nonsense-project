export default function InfoBar({ status, timeDisplay }) {
  return (
    <div className="flex flex-wrap gap-4 px-3 py-1.5 bg-[#12122a]/95 border-t border-[#333] text-[11px] text-gray-500 z-50 relative">
      <span className="text-[#a78bfa]">{status}</span>
      <span>Weimar, Thuringia · OSM data</span>
      {timeDisplay && <span>{timeDisplay}</span>}
    </div>
  )
}
