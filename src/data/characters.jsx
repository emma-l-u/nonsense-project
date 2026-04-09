const OUTLINE = '#1a1209'
const SKIN    = '#f4a882'

// ── Little Karl — big backpack, ice cream ──────────────────────────────────────
export function KarlAvatar() {
  return (
    <svg viewBox="0 0 82 94" width="82" height="94" fill="none">
      {/* Backpack — drawn FIRST so body covers the overlap */}
      <rect x="44" y="44" width="22" height="28" rx="5" fill="#22c55e" stroke={OUTLINE} strokeWidth="2.5"/>
      <rect x="44" y="44" width="22" height="9"  rx="4" fill="#16a34a" stroke={OUTLINE} strokeWidth="2"/>
      <rect x="46" y="56" width="18" height="10" rx="3" fill="#15803d" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="55" cy="61" r="2.5" fill="#22c55e" stroke={OUTLINE} strokeWidth="1.5"/>

      {/* Cap */}
      <ellipse cx="34" cy="12" rx="18" ry="9" fill="#d94030" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="15" y="12" width="38" height="10" rx="4" fill="#d94030" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="8"  y="17" width="13" height="5"  rx="2.5" fill="#d94030" stroke={OUTLINE} strokeWidth="2.5"/>

      {/* Head */}
      <circle cx="34" cy="30" r="17" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      <circle cx="26" cy="28" r="4"  fill={OUTLINE}/>
      <circle cx="42" cy="28" r="4"  fill={OUTLINE}/>
      <circle cx="27.5" cy="26.5" r="1.5" fill="white"/>
      <circle cx="43.5" cy="26.5" r="1.5" fill="white"/>
      <path d="M25 36 Q34 43 43 36" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" fill="none"/>

      {/* Neck */}
      <rect x="28" y="45" width="12" height="7" fill={SKIN}/>

      {/* Body — drawn OVER backpack */}
      <rect x="16" y="50" width="36" height="22" rx="10" fill="#3b6bc8" stroke={OUTLINE} strokeWidth="3.5"/>
      <line x1="34" y1="52" x2="34" y2="70" stroke={OUTLINE} strokeWidth="1.5" strokeDasharray="2 3"/>

      {/* Backpack chest straps */}
      <path d="M22 53 Q30 60 22 68" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M46 53 Q38 60 46 68" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <line x1="25" y1="62" x2="43" y2="62" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round"/>

      {/* Left arm — down */}
      <path d="M16 57 Q5 60 7 72" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M16 57 Q5 60 7 72" stroke="#3b6bc8" strokeWidth="8"  strokeLinecap="round"/>
      <circle cx="7" cy="72" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>

      {/* Right arm — raised, holding ice cream */}
      <path d="M52 57 Q64 50 63 38" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M52 57 Q64 50 63 38" stroke="#3b6bc8" strokeWidth="8"  strokeLinecap="round"/>
      <circle cx="63" cy="38" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>

      {/* Ice cream cone */}
      <path d="M55 38 L63 58 L71 38 Z" fill="#c8902a" stroke={OUTLINE} strokeWidth="2.5"/>
      <line x1="57" y1="43" x2="69" y2="43" stroke="#a07020" strokeWidth="1.2"/>
      <line x1="58" y1="49" x2="68" y2="49" stroke="#a07020" strokeWidth="1.2"/>
      {/* Scoop */}
      <circle cx="63" cy="27" r="12" fill="#ffd6e0" stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M57 27 Q63 21 69 27" stroke="#ffaac8" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* Cherry */}
      <circle cx="63" cy="16" r="4" fill="#d94030" stroke={OUTLINE} strokeWidth="2"/>
      <path d="M63 13 Q66 8 70 10" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Legs */}
      <rect x="21" y="70" width="12" height="14" rx="5" fill="#3b6bc8" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="35" y="70" width="12" height="14" rx="5" fill="#3b6bc8" stroke={OUTLINE} strokeWidth="3"/>
      <ellipse cx="27" cy="83" rx="11" ry="4.5" fill={OUTLINE}/>
      <ellipse cx="41" cy="83" rx="11" ry="4.5" fill={OUTLINE}/>
    </svg>
  )
}

// ── Aunt Erna — strolling with her Pomeranian ──────────────────────────────────
export function ErnaAvatar() {
  return (
    <svg viewBox="0 0 96 84" width="96" height="84" fill="none">
      {/* Hair bun */}
      <ellipse cx="24" cy="8"  rx="12" ry="8" fill="#c8c4be" stroke={OUTLINE} strokeWidth="3"/>
      <ellipse cx="24" cy="13" rx="14" ry="7" fill="#d4d0ca" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Hairpin */}
      <line x1="18" y1="8" x2="30" y2="8" stroke="#8b6030" strokeWidth="2" strokeLinecap="round"/>

      {/* Head */}
      <circle cx="24" cy="26" r="14" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>

      {/* Glasses */}
      <circle cx="19" cy="25" r="5" stroke={OUTLINE} strokeWidth="2.5" fill="rgba(200,230,255,0.45)"/>
      <circle cx="29" cy="25" r="5" stroke={OUTLINE} strokeWidth="2.5" fill="rgba(200,230,255,0.45)"/>
      <line x1="24" y1="25" x2="24" y2="25" stroke={OUTLINE} strokeWidth="1.5"/>
      <line x1="14" y1="24" x2="10" y2="25" stroke={OUTLINE} strokeWidth="2"/>
      <line x1="34" y1="24" x2="38" y2="25" stroke={OUTLINE} strokeWidth="2"/>

      {/* Smile + rosy cheek */}
      <path d="M18 31 Q24 36 30 31" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="28" r="3" fill="#f9a8a8" opacity="0.5"/>
      <circle cx="32" cy="28" r="3" fill="#f9a8a8" opacity="0.5"/>

      {/* Neck */}
      <rect x="18" y="38" width="12" height="6" fill={SKIN}/>

      {/* Green coat */}
      <path d="M10 44 Q24 40 38 44 L40 70 L8 70 Z" fill="#4a9060" stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Coat collar */}
      <path d="M24 44 L20 51 M24 44 L28 51" stroke="#f5edd8" strokeWidth="2" strokeLinecap="round"/>
      {/* Coat buttons */}
      <circle cx="24" cy="55" r="2" fill="#f5edd8" stroke={OUTLINE} strokeWidth="1"/>
      <circle cx="24" cy="62" r="2" fill="#f5edd8" stroke={OUTLINE} strokeWidth="1"/>

      {/* Left arm — holding cane */}
      <path d="M10 50 Q2 55 4 66" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round"/>
      <path d="M10 50 Q2 55 4 66" stroke="#4a9060" strokeWidth="7"  strokeLinecap="round"/>
      <circle cx="4" cy="66" r="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Cane */}
      <path d="M4 66 Q3 74 4 78" stroke="#8b6030" strokeWidth="4" strokeLinecap="round"/>
      <path d="M1 78 Q4 80 8 78" stroke="#8b6030" strokeWidth="3" strokeLinecap="round"/>

      {/* Right arm — holding leash */}
      <path d="M38 50 Q46 54 45 63" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round"/>
      <path d="M38 50 Q46 54 45 63" stroke="#4a9060" strokeWidth="7"  strokeLinecap="round"/>
      <circle cx="45" cy="63" r="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>

      {/* Legs */}
      <rect x="16" y="68" width="10" height="16" rx="5" fill="#4a9060" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="28" y="68" width="10" height="16" rx="5" fill="#4a9060" stroke={OUTLINE} strokeWidth="3"/>
      <ellipse cx="21" cy="82" rx="10" ry="4" fill={OUTLINE}/>
      <ellipse cx="33" cy="82" rx="10" ry="4" fill={OUTLINE}/>

      {/* Leash — dashed curve to dog */}
      <path d="M45 63 C50 60 56 57 64 58" stroke={OUTLINE} strokeWidth="2" strokeDasharray="3 4" fill="none"/>

      {/* ── Pomeranian ── */}
      {/* Body floof */}
      <circle cx="74" cy="64" r="10" fill="#f5deb3" stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="66" cy="60" r="7"  fill="#f5deb3" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="82" cy="60" r="6"  fill="#f5deb3" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="74" cy="56" r="7"  fill="#f5deb3" stroke={OUTLINE} strokeWidth="2"/>
      {/* Head */}
      <circle cx="84" cy="54" r="7" fill="#e8c880" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Ear */}
      <ellipse cx="87" cy="49" rx="3.5" ry="4.5" fill="#c8a860" stroke={OUTLINE} strokeWidth="2" transform="rotate(10 87 49)"/>
      {/* Eye, nose, tongue */}
      <circle cx="86" cy="53" r="1.8" fill={OUTLINE}/>
      <circle cx="88" cy="55.5" r="1.2" fill="#555"/>
      <path d="M86 57 Q88 60 89 57" fill="#f48080" stroke="none"/>
      {/* Little collar */}
      <path d="M78 56 Q84 58 90 56" stroke="#d94030" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Legs */}
      <rect x="66" y="72" width="6" height="10" rx="3" fill="#c8a860" stroke={OUTLINE} strokeWidth="2"/>
      <rect x="74" y="72" width="6" height="10" rx="3" fill="#c8a860" stroke={OUTLINE} strokeWidth="2"/>
    </svg>
  )
}

// ── Busy Beatrice — phone to ear, bags everywhere ──────────────────────────────
export function BeatriceAvatar() {
  return (
    <svg viewBox="0 0 82 90" width="82" height="90" fill="none">
      {/* Hair updo */}
      <ellipse cx="34" cy="9" rx="14" ry="8" fill="#2d1600" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M20 12 Q34 5 48 12 Q46 3 34 1 Q22 3 20 12Z" fill="#2d1600" stroke={OUTLINE} strokeWidth="2"/>
      <ellipse cx="34" cy="6" rx="7" ry="5" fill="#2d1600"/>
      {/* Hair pin / accessory */}
      <ellipse cx="44" cy="7" rx="3" ry="5" fill="#d94030" stroke={OUTLINE} strokeWidth="2" transform="rotate(-20 44 7)"/>

      {/* Head */}
      <circle cx="34" cy="26" r="15" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>

      {/* Arched brows */}
      <path d="M24 19 Q28 17 32 19" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M36 19 Q40 17 44 19" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Eyes — one normal, one slightly squinting from phone call */}
      <ellipse cx="28" cy="24" rx="3" ry="3.5" fill={OUTLINE}/>
      <ellipse cx="40" cy="24" rx="3" ry="2.5" fill={OUTLINE}/>  {/* squinting */}
      <circle cx="29" cy="22.5" r="1.2" fill="white"/>
      <circle cx="41" cy="22.5" r="1.2" fill="white"/>
      {/* Lips — slight smirk */}
      <path d="M28 32 Q34 35 40 32" fill="#d94030" stroke={OUTLINE} strokeWidth="1.5"/>
      <path d="M28 32 Q34 30 40 32" fill={SKIN} stroke="none"/>

      {/* Phone pressed to left ear */}
      <rect x="6" y="18" width="9" height="16" rx="3" fill="#1a1209" stroke={OUTLINE} strokeWidth="2"/>
      <rect x="7" y="20" width="7" height="10" rx="2" fill="#334155"/>
      <circle cx="10.5" cy="32" r="1.5" fill="#475569"/>

      {/* Neck */}
      <rect x="28" y="39" width="12" height="7" fill={SKIN}/>

      {/* Amber blazer */}
      <path d="M16 48 Q34 44 52 48 L54 72 L14 72 Z" fill="#d97706" stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Lapels */}
      <path d="M34 48 L29 55 M34 48 L39 55" stroke="#f5edd8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Blazer pocket square */}
      <path d="M44 52 L48 52 L47 56 L43 56 Z" fill="#f5edd8" stroke={OUTLINE} strokeWidth="1"/>

      {/* Left arm — raised to ear holding phone */}
      <path d="M16 54 Q10 44 12 34" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M16 54 Q10 44 12 34" stroke="#d97706" strokeWidth="8"  strokeLinecap="round"/>
      <circle cx="12" cy="34" r="5.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>

      {/* Right arm — holding bags */}
      <path d="M52 54 Q62 58 60 68" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M52 54 Q62 58 60 68" stroke="#d97706" strokeWidth="8"  strokeLinecap="round"/>
      <circle cx="60" cy="68" r="5.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>

      {/* Handbag */}
      <rect x="58" y="68" width="18" height="14" rx="4" fill="#c8902a" stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M61 68 Q67 62 73 68" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <line x1="58" y1="75" x2="76" y2="75" stroke={OUTLINE} strokeWidth="1.5"/>
      <rect x="64" y="73" width="8" height="4" rx="1.5" fill="#e8b04a" stroke={OUTLINE} strokeWidth="1.5"/>

      {/* Shopping bag */}
      <rect x="62" y="76" width="16" height="16" rx="3" fill="#fbbf24" stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M64 76 Q65 70 66 68" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M76 76 Q75 70 74 68" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Bag contents hint */}
      <line x1="65" y1="83" x2="76" y2="83" stroke={OUTLINE} strokeWidth="1.2" strokeDasharray="2 2"/>

      {/* Legs — dynamic stride */}
      <rect x="21" y="70" width="12" height="14" rx="6" fill="#d97706" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="35" y="70" width="12" height="14" rx="6" fill="#d97706" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M20 82 L30 82" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      <path d="M36 82 L46 82" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      <line x1="21" y1="80" x2="21" y2="86" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      <line x1="45" y1="80" x2="45" y2="86" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

// ── Biker Benedikt — fixie, cigarette, shades, hipster kit ────────────────────
export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 92 84" width="92" height="84" fill="none">
      {/* Cycling helmet */}
      <ellipse cx="30" cy="10" rx="16" ry="10" fill="#e06820" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="13" y="13" width="34" height="7" rx="3" fill="#e06820" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Helmet vents */}
      <rect x="18" y="7"  width="4" height="8" rx="2" fill="#c8501a"/>
      <rect x="24" y="6"  width="4" height="9" rx="2" fill="#c8501a"/>
      <rect x="30" y="6"  width="4" height="9" rx="2" fill="#c8501a"/>
      <rect x="36" y="7"  width="4" height="8" rx="2" fill="#c8501a"/>
      {/* Helmet chin strap */}
      <path d="M14 18 Q14 24 20 26" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Head */}
      <circle cx="30" cy="28" r="16" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>

      {/* Sunglasses — solid dark lenses, very cool */}
      <circle cx="22" cy="26" r="5.5" fill="#0f2a4a" stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="36" cy="26" r="5.5" fill="#0f2a4a" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Lens shine */}
      <ellipse cx="20" cy="24" rx="2.2" ry="1.4" fill="rgba(255,255,255,0.25)" transform="rotate(-20 20 24)"/>
      <ellipse cx="34" cy="24" rx="2.2" ry="1.4" fill="rgba(255,255,255,0.25)" transform="rotate(-20 34 24)"/>
      {/* Frame bridge + arms */}
      <line x1="27.5" y1="26" x2="30.5" y2="26" stroke={OUTLINE} strokeWidth="2"/>
      <line x1="16.5" y1="25" x2="12"   y2="26" stroke={OUTLINE} strokeWidth="2"/>
      <line x1="41.5" y1="25" x2="46"   y2="26" stroke={OUTLINE} strokeWidth="2"/>

      {/* Glorious handlebar moustache */}
      <path d="M15 35 Q19 31 23 33 Q27 35 30 35 Q33 35 37 33 Q41 31 45 35
               C45 39 41 40 37 37 Q33 35 30 36 Q27 35 23 37 C19 40 15 39 15 35Z"
        fill="#2d1600" stroke={OUTLINE} strokeWidth="2"/>

      {/* Cigarette — sticking out of mouth right side */}
      <rect x="43" y="33" width="16" height="4" rx="2" fill="#fffde0" stroke={OUTLINE} strokeWidth="1.5"/>
      <rect x="54" y="33" width="5"  height="4" rx="1" fill="#f97316" stroke={OUTLINE} strokeWidth="1"/>
      <circle cx="59" cy="33" r="2" fill="#ef4444" opacity="0.7"/>
      {/* Smoke wisps */}
      <path d="M61 31 Q64 27 62 25" stroke="#aaa" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M63 30 Q67 26 65 24" stroke="#aaa" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <rect x="24" y="42" width="12" height="7" fill={SKIN}/>

      {/* Cycling jersey — orange with stripe */}
      <path d="M12 50 Q30 46 48 50 L50 66 L10 66 Z" fill="#e06820" stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      <path d="M18 50 L17 66" stroke="#c8501a" strokeWidth="3"/>
      <path d="M42 50 L43 66" stroke="#c8501a" strokeWidth="3"/>
      {/* Jersey collar */}
      <path d="M30 50 L26 57 M30 50 L34 57" stroke="#f5edd8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Race number */}
      <rect x="22" y="54" width="16" height="9" rx="2" fill="#f5edd8" stroke={OUTLINE} strokeWidth="1.5"/>
      <text x="30" y="62" textAnchor="middle" fontSize="6" fontWeight="900" fill={OUTLINE} fontFamily="sans-serif">42</text>

      {/* Arms reaching to handlebars */}
      <path d="M48 54 Q62 50 68 46" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M48 54 Q62 50 68 46" stroke="#e06820" strokeWidth="8"  strokeLinecap="round"/>
      <circle cx="68" cy="46" r="5.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      <path d="M12 54 Q6 52 8 46"   stroke={OUTLINE} strokeWidth="10" strokeLinecap="round"/>
      <path d="M12 54 Q6 52 8 46"   stroke="#e06820" strokeWidth="7"  strokeLinecap="round"/>
      <circle cx="8"  cy="46" r="5"  fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>

      {/* Legs to pedals */}
      <path d="M20 66 Q16 72 18 78" stroke={OUTLINE} strokeWidth="9" strokeLinecap="round"/>
      <path d="M20 66 Q16 72 18 78" stroke="#2d4a20" strokeWidth="6" strokeLinecap="round"/>
      <path d="M38 66 Q42 72 40 78" stroke={OUTLINE} strokeWidth="9" strokeLinecap="round"/>
      <path d="M38 66 Q42 72 40 78" stroke="#2d4a20" strokeWidth="6" strokeLinecap="round"/>

      {/* Rear wheel */}
      <circle cx="18" cy="76" r="8" stroke={OUTLINE} strokeWidth="3" fill="none"/>
      <circle cx="18" cy="76" r="3" fill={OUTLINE}/>
      <line x1="18" y1="68" x2="18" y2="84" stroke="#888" strokeWidth="1.5"/>
      <line x1="10" y1="76" x2="26" y2="76" stroke="#888" strokeWidth="1.5"/>

      {/* Front wheel */}
      <circle cx="72" cy="62" r="10" stroke={OUTLINE} strokeWidth="3" fill="none"/>
      <circle cx="72" cy="62" r="3.5" fill={OUTLINE}/>
      <line x1="72" y1="52" x2="72" y2="72" stroke="#888" strokeWidth="1.5"/>
      <line x1="62" y1="62" x2="82" y2="62" stroke="#888" strokeWidth="1.5"/>

      {/* Bike frame */}
      <path d="M18 76 L32 54 L54 54 L72 62" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
      <path d="M32 54 L18 76" stroke="#aaa" strokeWidth="2"/>

      {/* Handlebars — drop bars, very hipster */}
      <path d="M54 54 L70 50" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      <path d="M70 50 L74 46" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M70 50 L74 54" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round"/>

      {/* Saddle */}
      <path d="M30 54 L40 54" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round"/>
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
