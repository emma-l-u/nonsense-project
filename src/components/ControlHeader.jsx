const IC = ({ color, children }) => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
    stroke={color} strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

const WalkIcon = () => (
  <IC color="#4ade80">
    <circle cx="13" cy="4" r="2"/>
    <path d="M13 6 L11 11"/>
    <path d="M11 8.5 L9 11 M11 8.5 L14.5 10"/>
    <path d="M11 11 L9 19 M11 11 L14 18"/>
  </IC>
)

const DogIcon = () => (
  <IC color="#fb923c">
    <ellipse cx="11" cy="15" rx="5.5" ry="3.5"/>
    <circle cx="17.5" cy="12" r="2.5"/>
    <path d="M18.5 9.5 C20.5 8 22 10.5 19.5 12.5"/>
    <circle cx="19.8" cy="12.5" r="0.4" fill="#fb923c" stroke="none"/>
    <path d="M5.5 14 C4 12 3 10 5 9"/>
    <line x1="8" y1="18.5" x2="7.5" y2="22"/>
    <line x1="10.5" y1="18.5" x2="10.5" y2="22"/>
    <line x1="13" y1="18.5" x2="13" y2="22"/>
    <line x1="15" y1="17.5" x2="15.5" y2="21"/>
  </IC>
)

const DinoIcon = () => (
  <IC color="#a78bfa">
    <ellipse cx="12" cy="15" rx="5" ry="4"/>
    <path d="M14 11 C15 9 16 7 17 6"/>
    <path d="M15.5 3.5 C17 2.5 21 4 21 6.5 C21 8.5 19 9.5 17 9.5 C15.5 9.5 14.5 8.5 15 7 C15.5 5.5 15.5 4.5 15.5 3.5 Z"/>
    <path d="M21 6.5 L23 7.5"/>
    <path d="M13.5 13 L16 14.5 L15 16"/>
    <path d="M7 15 C5 16 3 15 2 13"/>
    <path d="M9.5 19 L8 23"/>
    <path d="M13 19 L14 23"/>
  </IC>
)

const CloverIcon = () => (
  <IC color="#34d399">
    <circle cx="12" cy="9.5" r="2.8"/>
    <circle cx="14.5" cy="12" r="2.8"/>
    <circle cx="12" cy="14.5" r="2.8"/>
    <circle cx="9.5" cy="12" r="2.8"/>
    <path d="M12 17.5 C12 19.5 11 21 10 22"/>
  </IC>
)

export default function ControlHeader() {
  return (
    <header className="absolute top-4 left-1/2 -translate-x-1/2 z-[2000] pointer-events-none flex items-center gap-3"
      style={{
        background: '#FFE566',
        borderRadius: 999,
        padding: '7px 20px',
        boxShadow: '0 0 18px rgba(255,229,102,0.7), 0 0 6px rgba(255,229,102,0.5)',
        border: '1.5px solid rgba(255,229,102,0.9)',
      }}>
      <WalkIcon />
      <DogIcon />
      <h1
        className="text-xl font-black mx-1"
        style={{
          fontFamily: "'Nunito', sans-serif",
          letterSpacing: '-0.01em',
          color: '#1a1209',
        }}
      >
        WHYmar?
      </h1>
      <DinoIcon />
      <CloverIcon />
    </header>
  )
}
