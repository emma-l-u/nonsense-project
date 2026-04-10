const OUTLINE = '#1a1209'
const SKIN    = '#F5C0A0'

// ── Little Karl — profile head, striped shirt, backpack, ice cream ─────────────
export function KarlAvatar() {
  return (
    <svg viewBox="0 0 82 96" width="82" height="96" fill="none">
      {/* Backpack — on his back (left side, behind body) */}
      <rect x="8" y="40" width="20" height="30" rx="5" fill="#F5C31A" stroke={OUTLINE} strokeWidth="3.5"/>
      <rect x="10" y="38" width="16" height="8"  rx="3" fill="#E8B510" stroke={OUTLINE} strokeWidth="2.5"/>
      <rect x="12" y="56" width="12" height="8"  rx="2" fill="#E8B510" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="18" cy="60" r="2.5" fill="#F5C31A" stroke={OUTLINE} strokeWidth="1.5"/>

      {/* Head — profile facing right */}
      <circle cx="38" cy="22" r="18" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Hair */}
      <path d="M21 14 Q38 2 56 14 Q52 4 38 5 Q24 4 21 14Z" fill={OUTLINE}/>
      {/* Ear on left */}
      <ellipse cx="22" cy="25" rx="5" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      {/* Single eye — right side of face profile */}
      <circle cx="46" cy="18" r="6" fill={OUTLINE}/>
      <circle cx="47.5" cy="16.5" r="2.5" fill="white"/>
      {/* Nose bump */}
      <path d="M54 24 L59 28 L54 32" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Smile */}
      <path d="M48 35 Q55 39 50 40" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <rect x="32" y="38" width="12" height="8" fill={SKIN}/>

      {/* Body — blue with bold white horizontal stripes */}
      <rect x="16" y="44" width="38" height="26" rx="9" fill="#2D4AB5" stroke={OUTLINE} strokeWidth="3.5"/>
      <line x1="16" y1="52" x2="54" y2="52" stroke="white" strokeWidth="4" opacity="0.85"/>
      <line x1="16" y1="61" x2="54" y2="61" stroke="white" strokeWidth="4" opacity="0.85"/>

      {/* Left arm — down, oversized hand */}
      <path d="M18 54 Q5 58 4 70" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M18 54 Q5 58 4 70" stroke="#2D4AB5" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="4" cy="70" r="9.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>

      {/* Right arm — raised, holding ice cream */}
      <path d="M52 52 Q65 44 68 32" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M52 52 Q65 44 68 32" stroke="#2D4AB5" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="68" cy="32" r="9.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>

      {/* Ice cream — cone + scoop + cherry */}
      <path d="M60 32 L68 52 L76 32 Z" fill="#8B5E3C" stroke={OUTLINE} strokeWidth="2.5"/>
      <line x1="62" y1="38" x2="74" y2="38" stroke="#6B3E1C" strokeWidth="1.5"/>
      <line x1="63" y1="44" x2="73" y2="44" stroke="#6B3E1C" strokeWidth="1.5"/>
      <circle cx="68" cy="21" r="12" fill="#F5A0B8" stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="68" cy="10" r="4.5" fill="#D44F3C" stroke={OUTLINE} strokeWidth="2"/>

      {/* Legs */}
      <rect x="20" y="68" width="14" height="20" rx="6" fill="#2D4AB5" stroke={OUTLINE} strokeWidth="3.5"/>
      <rect x="38" y="68" width="14" height="20" rx="6" fill="#2D4AB5" stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Shoes — bold flat blocks */}
      <rect x="14" y="84" width="22" height="9" rx="4" fill={OUTLINE}/>
      <rect x="36" y="84" width="20" height="9" rx="4" fill={OUTLINE}/>
    </svg>
  )
}

// ── Aunt Erna — profile right, polka-dot coat, cane, Pomeranian ───────────────
export function ErnaAvatar() {
  return (
    <svg viewBox="0 0 96 90" width="96" height="90" fill="none">
      {/* Head — profile facing right */}
      <circle cx="26" cy="22" r="16" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Hair bun — grey */}
      <ellipse cx="26" cy="10" rx="14" ry="9"  fill="#C0BCBA" stroke={OUTLINE} strokeWidth="3"/>
      <ellipse cx="22" cy="15" rx="10" ry="6"  fill="#C8C4C0" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Ear on left */}
      <ellipse cx="12" cy="24" rx="5" ry="6.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      {/* Single eye — profile right */}
      <circle cx="34" cy="18" r="5.5" fill={OUTLINE}/>
      <circle cx="35.5" cy="16.5" r="2" fill="white"/>
      {/* Round glasses */}
      <circle cx="34" cy="21" r="7" stroke={OUTLINE} strokeWidth="2.5" fill="rgba(180,220,255,0.28)"/>
      <line x1="27" y1="20" x2="22" y2="21" stroke={OUTLINE} strokeWidth="2"/>
      {/* Nose bump */}
      <path d="M40 25 L45 28 L40 31" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Smile */}
      <path d="M36 34 Q42 37 38 38" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Earring (left ear) */}
      <circle cx="12" cy="30" r="3" fill="#D44F3C" stroke={OUTLINE} strokeWidth="1.5"/>

      {/* Neck */}
      <rect x="20" y="36" width="12" height="7" fill={SKIN}/>

      {/* Body — sage green coat with polka dots */}
      <rect x="8" y="42" width="36" height="28" rx="9" fill="#4A8060" stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Coat collar */}
      <path d="M26 44 L22 51 M26 44 L30 51" stroke="#F5EDD8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Polka dot pattern */}
      <circle cx="16" cy="52" r="2.5" fill="#A0C890"/>
      <circle cx="26" cy="50" r="2.5" fill="#A0C890"/>
      <circle cx="36" cy="52" r="2.5" fill="#A0C890"/>
      <circle cx="20" cy="60" r="2.5" fill="#A0C890"/>
      <circle cx="32" cy="60" r="2.5" fill="#A0C890"/>
      <circle cx="26" cy="66" r="2.5" fill="#A0C890"/>

      {/* Left arm — cane side, oversized hand */}
      <path d="M10 52 Q2 56 4 66" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M10 52 Q2 56 4 66" stroke="#4A8060" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="4" cy="66" r="8.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Cane */}
      <line x1="4" y1="66" x2="5" y2="82" stroke="#8B5E3C" strokeWidth="4" strokeLinecap="round"/>
      <path d="M2 82 Q5 86 9 82" stroke="#8B5E3C" strokeWidth="3.5" strokeLinecap="round" fill="none"/>

      {/* Right arm — leash, oversized hand */}
      <path d="M42 52 Q52 56 54 64" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M42 52 Q52 56 54 64" stroke="#4A8060" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="54" cy="64" r="8.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Leash — dashed curve to dog */}
      <path d="M54 64 C62 59 68 58 76 60" stroke={OUTLINE} strokeWidth="2" strokeDasharray="3 4" fill="none"/>

      {/* Legs */}
      <rect x="12" y="68" width="12" height="17" rx="5" fill="#4A8060" stroke={OUTLINE} strokeWidth="3.5"/>
      <rect x="28" y="68" width="12" height="17" rx="5" fill="#4A8060" stroke={OUTLINE} strokeWidth="3.5"/>
      <rect x="6"  y="81" width="20" height="8" rx="4" fill={OUTLINE}/>
      <rect x="26" y="81" width="18" height="8" rx="4" fill={OUTLINE}/>

      {/* Pomeranian */}
      <circle cx="80" cy="64" r="10" fill="#D4B896" stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="72" cy="60" r="7"  fill="#D4B896" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="80" cy="56" r="6"  fill="#D4B896" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="86" cy="55" r="7"  fill="#E8C880" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Ear */}
      <path d="M84 49 Q88 44 91 50" fill="#C8A050" stroke={OUTLINE} strokeWidth="2"/>
      {/* Eye + nose */}
      <circle cx="89" cy="53" r="2.2" fill={OUTLINE}/>
      <circle cx="91" cy="57" r="1.5" fill="#555"/>
      {/* Tongue */}
      <path d="M89 60 Q91 63 92 60" fill="#F48080" stroke="none"/>
      {/* Collar */}
      <path d="M81 57 Q86 59 91 57" stroke="#D44F3C" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Dog legs */}
      <rect x="72" y="72" width="6" height="12" rx="3" fill="#C8A050" stroke={OUTLINE} strokeWidth="2"/>
      <rect x="80" y="72" width="6" height="12" rx="3" fill="#C8A050" stroke={OUTLINE} strokeWidth="2"/>
    </svg>
  )
}

// ── Busy Beatrice — profile right, vertical-stripe blazer, bags, phone ─────────
export function BeatriceAvatar() {
  return (
    <svg viewBox="0 0 84 92" width="84" height="92" fill="none">
      {/* Head — profile facing right */}
      <circle cx="30" cy="22" r="17" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Hair updo — bold dark shape */}
      <path d="M14 14 Q30 2 48 14 Q44 3 30 4 Q16 3 14 14Z" fill={OUTLINE}/>
      <ellipse cx="30" cy="8" rx="8" ry="6" fill={OUTLINE}/>
      {/* Ear on left */}
      <ellipse cx="15" cy="25" rx="5" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      {/* Single eye — profile right */}
      <circle cx="38" cy="18" r="6" fill={OUTLINE}/>
      <circle cx="39.5" cy="16.5" r="2.2" fill="white"/>
      {/* Nose bump */}
      <path d="M46 24 L51 28 L46 32" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Lips */}
      <path d="M42 35 Q48 38 44 39" stroke="#D44F3C" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Earring */}
      <line x1="15" y1="28" x2="15" y2="34" stroke="#F5C31A" strokeWidth="2"/>
      <circle cx="15" cy="35" r="3" fill="#F5C31A" stroke={OUTLINE} strokeWidth="1.5"/>

      {/* Phone — pressed to right ear area */}
      <rect x="47" y="12" width="8" height="14" rx="2.5" fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5"/>
      <rect x="48" y="14" width="6" height="8"  rx="1.5" fill="#334155"/>
      <circle cx="51" cy="24" r="1.5" fill="#475569"/>

      {/* Neck */}
      <rect x="24" y="37" width="12" height="7" fill={SKIN}/>

      {/* Body — red blazer with bold white vertical stripes */}
      <rect x="10" y="43" width="40" height="28" rx="9" fill="#D44F3C" stroke={OUTLINE} strokeWidth="3.5"/>
      <line x1="20" y1="43" x2="20" y2="71" stroke="white" strokeWidth="3" opacity="0.8"/>
      <line x1="30" y1="43" x2="30" y2="71" stroke="white" strokeWidth="3" opacity="0.8"/>
      <line x1="40" y1="43" x2="40" y2="71" stroke="white" strokeWidth="3" opacity="0.8"/>
      {/* Pocket square */}
      <rect x="38" y="48" width="9" height="7" rx="1.5" fill="white" stroke={OUTLINE} strokeWidth="1.5"/>

      {/* Left arm — raised up (holding phone near head), oversized hand */}
      <path d="M12 52 Q5 42 8 30" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M12 52 Q5 42 8 30" stroke="#D44F3C" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="8" cy="30" r="9.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>

      {/* Right arm — bags, oversized hand */}
      <path d="M48 52 Q60 57 62 68" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M48 52 Q60 57 62 68" stroke="#D44F3C" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="62" cy="68" r="9.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>

      {/* Handbag — yellow */}
      <rect x="58" y="66" width="22" height="16" rx="4" fill="#F5C31A" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M61 66 Q69 58 77 66" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <rect x="64" y="71" width="10" height="6" rx="2" fill="#D4A810" stroke={OUTLINE} strokeWidth="2"/>

      {/* Shopping bag — white with stripe */}
      <rect x="60" y="78" width="20" height="16" rx="3" fill="white" stroke={OUTLINE} strokeWidth="2.5"/>
      <line x1="64" y1="78" x2="63" y2="70" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="76" y1="78" x2="77" y2="70" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="60" y="87" width="20" height="5" rx="0" fill="#D44F3C"/>

      {/* Legs */}
      <rect x="15" y="69" width="13" height="19" rx="6" fill={OUTLINE}/>
      <rect x="32" y="69" width="13" height="19" rx="6" fill={OUTLINE}/>
      <rect x="10" y="83" width="20" height="8" rx="4" fill={OUTLINE}/>
      <rect x="30" y="83" width="18" height="8" rx="4" fill={OUTLINE}/>
    </svg>
  )
}

// ── Biker Benedikt — profile right, jersey, shades, cigarette, fixie ──────────
export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 92 86" width="92" height="86" fill="none">
      {/* Head — profile facing right */}
      <circle cx="32" cy="22" r="17" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Helmet */}
      <ellipse cx="32" cy="11" rx="18" ry="12" fill="#E86020" stroke={OUTLINE} strokeWidth="3.5"/>
      <rect x="13" y="14" width="38" height="9" rx="3" fill="#E86020" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Helmet vents */}
      <rect x="18" y="7"  width="4" height="9" rx="2" fill="#C85000"/>
      <rect x="25" y="6"  width="4" height="10" rx="2" fill="#C85000"/>
      <rect x="32" y="6"  width="4" height="10" rx="2" fill="#C85000"/>
      <rect x="39" y="7"  width="4" height="9" rx="2" fill="#C85000"/>
      {/* Chin strap */}
      <path d="M14 20 Q14 27 20 29" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Ear on left */}
      <ellipse cx="17" cy="26" rx="5" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      {/* Sunglasses — solid dark, profile */}
      <ellipse cx="40" cy="22" rx="8" ry="6" fill="#0f2a4a" stroke={OUTLINE} strokeWidth="2.5"/>
      <line x1="32" y1="21" x2="27" y2="22" stroke={OUTLINE} strokeWidth="2"/>
      {/* Lens shine */}
      <ellipse cx="37" cy="19.5" rx="2.5" ry="1.5" fill="rgba(255,255,255,0.22)" transform="rotate(-20 37 19.5)"/>
      {/* Nose */}
      <path d="M47 27 L52 30 L47 33" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Handlebar moustache */}
      <path d="M36 34 Q40 30 44 32 Q48 30 44 36 Q42 34 40 35 Q38 36 36 34Z" fill={OUTLINE}/>
      {/* Cigarette */}
      <rect x="44" y="32" width="14" height="4" rx="2" fill="#FFFDE0" stroke={OUTLINE} strokeWidth="1.5"/>
      <rect x="55" y="32" width="4"  height="4" rx="1" fill="#F97316"/>
      <circle cx="59" cy="32" r="2.5" fill="#ef4444" opacity="0.65"/>
      {/* Smoke */}
      <path d="M61 30 Q64 26 62 24" stroke="#bbb" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M63 29 Q67 25 65 23" stroke="#bbb" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <rect x="26" y="38" width="12" height="7" fill={SKIN}/>

      {/* Body — orange cycling jersey with bold side stripes + race number */}
      <path d="M10 46 Q30 42 50 46 L52 64 L8 64 Z" fill="#E86020" stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      <line x1="16" y1="46" x2="14" y2="64" stroke="#C85000" strokeWidth="5"/>
      <line x1="44" y1="46" x2="46" y2="64" stroke="#C85000" strokeWidth="5"/>
      {/* Race number */}
      <rect x="20" y="50" width="20" height="11" rx="2" fill="#F5EDD8" stroke={OUTLINE} strokeWidth="2"/>
      <text x="30" y="60" textAnchor="middle" fontSize="7" fontWeight="900" fill={OUTLINE} fontFamily="sans-serif">42</text>

      {/* Left arm — to handlebars, oversized hand */}
      <path d="M10 52 Q4 50 6 42" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M10 52 Q4 50 6 42" stroke="#E86020" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="6" cy="42" r="8.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>

      {/* Right arm — to handlebars, oversized hand */}
      <path d="M50 52 Q64 47 70 42" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M50 52 Q64 47 70 42" stroke="#E86020" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="70" cy="42" r="8.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>

      {/* Legs — cycling position */}
      <path d="M18 64 Q14 70 16 78" stroke={OUTLINE} strokeWidth="9" strokeLinecap="round"/>
      <path d="M18 64 Q14 70 16 78" stroke="#2D4A20" strokeWidth="6" strokeLinecap="round"/>
      <path d="M38 64 Q42 70 40 78" stroke={OUTLINE} strokeWidth="9" strokeLinecap="round"/>
      <path d="M38 64 Q42 70 40 78" stroke="#2D4A20" strokeWidth="6" strokeLinecap="round"/>

      {/* Rear wheel */}
      <circle cx="16" cy="74" r="10" stroke={OUTLINE} strokeWidth="3.5" fill="none"/>
      <circle cx="16" cy="74" r="3.5" fill={OUTLINE}/>
      <line x1="16" y1="64" x2="16" y2="84" stroke="#888" strokeWidth="1.5"/>
      <line x1="6"  y1="74" x2="26" y2="74" stroke="#888" strokeWidth="1.5"/>

      {/* Front wheel */}
      <circle cx="76" cy="62" r="12" stroke={OUTLINE} strokeWidth="3.5" fill="none"/>
      <circle cx="76" cy="62" r="3.5" fill={OUTLINE}/>
      <line x1="76" y1="50" x2="76" y2="74" stroke="#888" strokeWidth="1.5"/>
      <line x1="64" y1="62" x2="88" y2="62" stroke="#888" strokeWidth="1.5"/>

      {/* Frame */}
      <path d="M16 74 L32 52 L56 52 L76 62" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinejoin="round"/>
      <path d="M32 52 L16 74" stroke="#aaa" strokeWidth="2"/>
      {/* Handlebars */}
      <path d="M56 52 L72 48" stroke={OUTLINE} strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M72 48 L76 43" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      <path d="M72 48 L76 53" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      {/* Saddle */}
      <path d="M30 52 L44 52" stroke={OUTLINE} strokeWidth="5" strokeLinecap="round"/>
    </svg>
  )
}

// ── Character definitions ──────────────────────────────────────────────────────
export const CHARACTERS = {
  karl: {
    id: 'karl',
    name: 'Little Karl',
    tagline: 'Safe & away from traffic',
    routeType: 'safest',
    mode: 'walk',
    color: '#2563eb',
    cardBg: '#dbeafe',
    Avatar: KarlAvatar,
    voice: (dist, time) =>
      `Karl found a safe path! No scary roads. ${dist} km · ${time} min`,
  },
  erna: {
    id: 'erna',
    name: 'Aunt Erna',
    tagline: 'Slow strolls with her Pomeranian',
    routeType: 'nicest',
    mode: 'walk',
    color: '#16a34a',
    cardBg: '#bbf7d0',
    Avatar: ErnaAvatar,
    voice: (dist, time) =>
      `Erna took the scenic way. Her Pomeranian approves. ${time} min of bliss.`,
  },
  beatrice: {
    id: 'beatrice',
    name: 'Busy Beatrice',
    tagline: 'No time to waste',
    routeType: 'fastest',
    mode: 'walk',
    color: '#d97706',
    cardBg: '#fde68a',
    Avatar: BeatriceAvatar,
    voice: (dist, time) =>
      `Beatrice approves. ${dist} km, ${time} min. Straight to the point.`,
  },
  benedikt: {
    id: 'benedikt',
    name: 'Biker Benedikt',
    tagline: 'Always on his fixie',
    routeType: 'bike',
    mode: 'bike',
    color: '#ea580c',
    cardBg: '#fed7aa',
    Avatar: BenediktAvatar,
    voice: (dist, time) =>
      `Benedikt mapped his route. ${dist} km. Helmet optional.`,
  },
}

export const CHARACTER_ORDER = ['karl', 'erna', 'beatrice', 'benedikt']
