// Thin-line SVG icons — consistent stroke style, muted lavender to match the app theme
const IC = ({ children }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
    stroke="rgba(167,139,250,0.65)" strokeWidth="1.4"
    strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

const WalkIcon = () => (
  <IC>
    <circle cx="13" cy="4" r="2"/>
    {/* torso */}
    <path d="M13 6 L11 11"/>
    {/* arms */}
    <path d="M11 8.5 L9 11 M11 8.5 L14.5 10"/>
    {/* legs */}
    <path d="M11 11 L9 19 M11 11 L14 18"/>
  </IC>
)

const DogIcon = () => (
  <IC>
    {/* body */}
    <ellipse cx="11" cy="15" rx="5.5" ry="3.5"/>
    {/* head */}
    <circle cx="17.5" cy="12" r="2.5"/>
    {/* droopy ear */}
    <path d="M18.5 9.5 C20.5 8 22 10.5 19.5 12.5"/>
    {/* nose dot */}
    <circle cx="19.8" cy="12.5" r="0.4" fill="rgba(167,139,250,0.65)" stroke="none"/>
    {/* tail */}
    <path d="M5.5 14 C4 12 3 10 5 9"/>
    {/* legs */}
    <line x1="8" y1="18.5" x2="7.5" y2="22"/>
    <line x1="10.5" y1="18.5" x2="10.5" y2="22"/>
    <line x1="13" y1="18.5" x2="13" y2="22"/>
    <line x1="15" y1="17.5" x2="15.5" y2="21"/>
  </IC>
)

const DinoIcon = () => (
  <IC>
    {/* body */}
    <ellipse cx="12" cy="15" rx="5" ry="4"/>
    {/* neck */}
    <path d="M14 11 C15 9 16 7 17 6"/>
    {/* head */}
    <path d="M15.5 3.5 C17 2.5 21 4 21 6.5 C21 8.5 19 9.5 17 9.5 C15.5 9.5 14.5 8.5 15 7 C15.5 5.5 15.5 4.5 15.5 3.5 Z"/>
    {/* jaw / open mouth */}
    <path d="M21 6.5 L23 7.5"/>
    {/* tiny arm */}
    <path d="M13.5 13 L16 14.5 L15 16"/>
    {/* tail */}
    <path d="M7 15 C5 16 3 15 2 13"/>
    {/* legs */}
    <path d="M9.5 19 L8 23"/>
    <path d="M13 19 L14 23"/>
  </IC>
)

const CloverIcon = () => (
  <IC>
    {/* four petals */}
    <circle cx="12" cy="9.5" r="2.8"/>
    <circle cx="14.5" cy="12" r="2.8"/>
    <circle cx="12" cy="14.5" r="2.8"/>
    <circle cx="9.5" cy="12" r="2.8"/>
    {/* stem */}
    <path d="M12 17.5 C12 19.5 11 21 10 22"/>
  </IC>
)

export default function ControlHeader() {
  return (
    <header className="flex items-center justify-center gap-3 px-4 py-2">
      <WalkIcon />
      <DogIcon />
      <h1
        className="text-xl font-semibold text-white tracking-widest mx-2"
        style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: '0.1em' }}
      >
        Walkable Weimar
      </h1>
      <DinoIcon />
      <CloverIcon />
    </header>
  )
}
