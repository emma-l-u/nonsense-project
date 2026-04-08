// Simplified top bar — just title and clear button
// All route/layer settings live in the left panel
export default function ControlHeader({ onClear }) {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#0f0f1e] border-b border-[#2a2a4a]">
      <h1 className="text-sm font-semibold text-[#a78bfa] tracking-wide">
        🗺 Weimar Movement &amp; Noise Map
      </h1>
      <button
        onClick={onClear}
        className="text-[11px] px-3 py-1 rounded border border-[#444] bg-[#1e1e3a] text-gray-400 hover:text-gray-200 hover:border-[#666] cursor-pointer transition-colors"
      >
        ✕ Clear route
      </button>
    </header>
  )
}
