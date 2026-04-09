// ── Retro bold illustration avatars ───────────────────────────────────────────
// Style: thick black outlines, flat fills, exaggerated proportions, no gradients

const OUTLINE = '#1a1209'
const SKIN    = '#f4a882'

export function KarlAvatar() {
  return (
    <svg viewBox="0 0 64 80" width="64" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Red cap — blocky brim */}
      <rect x="14" y="12" width="36" height="10" rx="4" fill="#d94030" stroke={OUTLINE} strokeWidth="3"/>
      <ellipse cx="32" cy="12" rx="17" ry="9" fill="#d94030" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="8" y="17" width="12" height="5" rx="2.5" fill="#d94030" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Head */}
      <circle cx="32" cy="30" r="17" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Eyes — big solid circles */}
      <circle cx="24" cy="28" r="4" fill={OUTLINE}/>
      <circle cx="40" cy="28" r="4" fill={OUTLINE}/>
      <circle cx="25.5" cy="26.5" r="1.5" fill="white"/>
      <circle cx="41.5" cy="26.5" r="1.5" fill="white"/>
      {/* Smile */}
      <path d="M23 36 Q32 43 41 36" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Neck */}
      <rect x="26" y="45" width="12" height="7" fill={SKIN}/>
      {/* Blue chunky body */}
      <rect x="14" y="50" width="36" height="22" rx="10" fill="#3b6bc8" stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Button line */}
      <line x1="32" y1="52" x2="32" y2="70" stroke={OUTLINE} strokeWidth="1.5" strokeDasharray="2 3"/>
      {/* Left arm — thick snake-like */}
      <path d="M14 56 Q4 58 6 70" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round" fill="none"/>
      <path d="M14 56 Q4 58 6 70" stroke="#3b6bc8" strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Left hand */}
      <circle cx="6" cy="70" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      {/* Right arm */}
      <path d="M50 56 Q60 58 58 70" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round" fill="none"/>
      <path d="M50 56 Q60 58 58 70" stroke="#3b6bc8" strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Right hand */}
      <circle cx="58" cy="70" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      {/* Legs — short and thick */}
      <rect x="19" y="70" width="11" height="14" rx="5" fill="#3b6bc8" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="34" y="70" width="11" height="14" rx="5" fill="#3b6bc8" stroke={OUTLINE} strokeWidth="3"/>
      {/* Shoes */}
      <ellipse cx="24" cy="82" rx="10" ry="4.5" fill={OUTLINE}/>
      <ellipse cx="39" cy="82" rx="10" ry="4.5" fill={OUTLINE}/>
    </svg>
  )
}

export function ErnaAvatar() {
  return (
    <svg viewBox="0 0 88 80" width="88" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grey hair bun */}
      <ellipse cx="24" cy="8" rx="12" ry="8" fill="#c8c4be" stroke={OUTLINE} strokeWidth="3"/>
      <ellipse cx="24" cy="13" rx="14" ry="7" fill="#d4d0ca" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Head */}
      <circle cx="24" cy="26" r="14" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Glasses — round, retro */}
      <circle cx="19" cy="25" r="5" stroke={OUTLINE} strokeWidth="2.5" fill="rgba(200,230,255,0.4)"/>
      <circle cx="29" cy="25" r="5" stroke={OUTLINE} strokeWidth="2.5" fill="rgba(200,230,255,0.4)"/>
      <line x1="24" y1="25" x2="24" y2="25" stroke={OUTLINE} strokeWidth="1.5"/>
      <line x1="14" y1="24" x2="10" y2="25" stroke={OUTLINE} strokeWidth="2"/>
      <line x1="34" y1="24" x2="38" y2="25" stroke={OUTLINE} strokeWidth="2"/>
      {/* Smile */}
      <path d="M18 31 Q24 36 30 31" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Neck */}
      <rect x="18" y="38" width="12" height="6" fill={SKIN}/>
      {/* Green coat — rounded blob */}
      <path d="M10 44 Q24 40 38 44 L40 68 L8 68 Z"
        fill="#4a9060" stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Coat collar */}
      <path d="M24 44 L20 50 M24 44 L28 50" stroke="#f5edd8" strokeWidth="2" strokeLinecap="round"/>
      {/* Cane arm — left */}
      <path d="M10 50 Q2 54 4 64" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M10 50 Q2 54 4 64" stroke="#4a9060" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <circle cx="4" cy="64" r="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Cane */}
      <path d="M4 64 Q3 72 4 76" stroke="#8b6030" strokeWidth="4" strokeLinecap="round"/>
      <path d="M1 76 Q4 78 8 76" stroke="#8b6030" strokeWidth="3" strokeLinecap="round"/>
      {/* Right arm */}
      <path d="M38 50 Q46 54 44 62" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M38 50 Q46 54 44 62" stroke="#4a9060" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <circle cx="44" cy="62" r="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Legs */}
      <rect x="16" y="66" width="10" height="14" rx="5" fill="#4a9060" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="28" y="66" width="10" height="14" rx="5" fill="#4a9060" stroke={OUTLINE} strokeWidth="3"/>
      <ellipse cx="21" cy="79" rx="9" ry="4" fill={OUTLINE}/>
      <ellipse cx="33" cy="79" rx="9" ry="4" fill={OUTLINE}/>
      {/* Leash — dashed line to dog */}
      <path d="M44 62 C50 58 56 55 62 56" stroke={OUTLINE} strokeWidth="2" strokeDasharray="3 4" fill="none"/>
      {/* ── Pomeranian dog ── */}
      {/* Body floof */}
      <circle cx="70" cy="62" r="10" fill="#f5deb3" stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="62" cy="58" r="7" fill="#f5deb3" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="78" cy="58" r="6" fill="#f5deb3" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="70" cy="54" r="7" fill="#f5deb3" stroke={OUTLINE} strokeWidth="2"/>
      {/* Head */}
      <circle cx="80" cy="52" r="7" fill="#e8c880" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Ear */}
      <ellipse cx="83" cy="47" rx="3.5" ry="4.5" fill="#c8a860" stroke={OUTLINE} strokeWidth="2" transform="rotate(10 83 47)"/>
      {/* Eye, nose */}
      <circle cx="82" cy="51" r="1.8" fill={OUTLINE}/>
      <circle cx="84" cy="53.5" r="1.2" fill="#555"/>
      {/* Tongue */}
      <path d="M82 55 Q84 58 85 55" fill="#f48080" stroke="none"/>
      {/* Legs */}
      <rect x="64" y="70" width="6" height="10" rx="3" fill="#c8a860" stroke={OUTLINE} strokeWidth="2"/>
      <rect x="72" y="70" width="6" height="10" rx="3" fill="#c8a860" stroke={OUTLINE} strokeWidth="2"/>
    </svg>
  )
}

export function BeatriceAvatar() {
  return (
    <svg viewBox="0 0 64 80" width="64" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dark updo hair */}
      <ellipse cx="32" cy="9" rx="14" ry="8" fill="#2d1600" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M18 12 Q32 4 46 12 Q44 3 32 1 Q20 3 18 12Z" fill="#2d1600" stroke={OUTLINE} strokeWidth="2"/>
      <ellipse cx="32" cy="6" rx="7" ry="5" fill="#2d1600"/>
      {/* Head — slightly angular */}
      <circle cx="32" cy="26" r="15" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Arched brows */}
      <path d="M22 19 Q26 17 30 19" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M34 19 Q38 17 42 19" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Eyes — sharp ellipses */}
      <ellipse cx="26" cy="24" rx="3" ry="3.5" fill={OUTLINE}/>
      <ellipse cx="38" cy="24" rx="3" ry="3.5" fill={OUTLINE}/>
      <circle cx="27" cy="22.5" r="1.2" fill="white"/>
      <circle cx="39" cy="22.5" r="1.2" fill="white"/>
      {/* Red lips */}
      <path d="M26 32 Q32 36 38 32" fill="#d94030" stroke={OUTLINE} strokeWidth="1.5"/>
      <path d="M26 32 Q32 30 38 32" fill={SKIN} stroke="none"/>
      {/* Neck */}
      <rect x="26" y="39" width="12" height="7" fill={SKIN}/>
      {/* Amber blazer — angled for dynamic feel */}
      <path d="M14 48 Q32 44 50 48 L52 72 L12 72 Z"
        fill="#d97706" stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Lapels */}
      <path d="M32 48 L27 55 M32 48 L37 55" stroke="#f5edd8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Left arm — swinging forward */}
      <path d="M14 54 Q4 56 6 68" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round" fill="none"/>
      <path d="M14 54 Q4 56 6 68" stroke="#d97706" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <circle cx="6" cy="68" r="5.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      {/* Right arm holding briefcase */}
      <path d="M50 54 Q60 56 58 64" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round" fill="none"/>
      <path d="M50 54 Q60 56 58 64" stroke="#d97706" strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Briefcase */}
      <rect x="51" y="62" width="16" height="12" rx="3" fill="#a0722a" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M54 62 L54 59 Q59 57 64 59 L64 62" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <line x1="51" y1="68" x2="67" y2="68" stroke={OUTLINE} strokeWidth="1.5"/>
      <rect x="58" y="66" width="4" height="4" rx="1" fill="#c8902a" stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Legs — striding */}
      <rect x="19" y="70" width="12" height="13" rx="6" fill="#d97706" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="33" y="70" width="12" height="13" rx="6" fill="#d97706" stroke={OUTLINE} strokeWidth="3"/>
      {/* Heels */}
      <path d="M18 80 L28 80" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      <path d="M34 80 L44 80" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      <line x1="19" y1="78" x2="19" y2="82" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      <line x1="43" y1="78" x2="43" y2="82" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 84 80" width="84" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Beanie hat */}
      <ellipse cx="28" cy="10" rx="15" ry="9" fill="#e06820" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="12" y="12" width="32" height="7" rx="3" fill="#e06820" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Pompom */}
      <circle cx="28" cy="4" r="5" fill="#f5edd8" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Head */}
      <circle cx="28" cy="28" r="16" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Round hipster glasses */}
      <circle cx="21" cy="26" r="5.5" stroke={OUTLINE} strokeWidth="2.5" fill="rgba(180,220,255,0.3)"/>
      <circle cx="35" cy="26" r="5.5" stroke={OUTLINE} strokeWidth="2.5" fill="rgba(180,220,255,0.3)"/>
      <line x1="26.5" y1="26" x2="29.5" y2="26" stroke={OUTLINE} strokeWidth="2"/>
      <line x1="15.5" y1="25" x2="11" y2="26" stroke={OUTLINE} strokeWidth="2"/>
      <line x1="40.5" y1="25" x2="45" y2="26" stroke={OUTLINE} strokeWidth="2"/>
      {/* Glorious handlebar moustache */}
      <path d="M14 35 Q18 31 22 33 Q26 35 28 35 Q30 35 34 33 Q38 31 42 35
               C42 39 38 40 34 37 Q30 35 28 36 Q26 35 22 37 C18 40 14 39 14 35Z"
        fill="#2d1600" stroke={OUTLINE} strokeWidth="2"/>
      {/* Neck */}
      <rect x="22" y="42" width="12" height="7" fill={SKIN}/>
      {/* Orange jacket — leaning forward */}
      <path d="M10 50 Q28 46 46 50 L48 66 L8 66 Z"
        fill="#e06820" stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Jacket collar */}
      <path d="M28 50 L24 57 M28 50 L32 57" stroke="#f5edd8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Arms reaching to handlebars */}
      <path d="M46 54 Q60 50 66 46" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round" fill="none"/>
      <path d="M46 54 Q60 50 66 46" stroke="#e06820" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <circle cx="66" cy="46" r="5.5" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      <path d="M10 54 Q4 52 6 46" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M10 54 Q4 52 6 46" stroke="#e06820" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <circle cx="6" cy="46" r="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Legs to pedals */}
      <path d="M18 66 Q14 72 16 78" stroke={OUTLINE} strokeWidth="9" strokeLinecap="round"/>
      <path d="M18 66 Q14 72 16 78" stroke="#2d4a20" strokeWidth="6" strokeLinecap="round"/>
      <path d="M36 66 Q40 72 38 78" stroke={OUTLINE} strokeWidth="9" strokeLinecap="round"/>
      <path d="M36 66 Q40 72 38 78" stroke="#2d4a20" strokeWidth="6" strokeLinecap="round"/>
      {/* Rear wheel */}
      <circle cx="16" cy="76" r="8" stroke={OUTLINE} strokeWidth="3" fill="none"/>
      <circle cx="16" cy="76" r="3" fill={OUTLINE}/>
      <line x1="16" y1="68" x2="16" y2="84" stroke="#888" strokeWidth="1.5"/>
      <line x1="8"  y1="76" x2="24" y2="76" stroke="#888" strokeWidth="1.5"/>
      {/* Front wheel */}
      <circle cx="68" cy="62" r="10" stroke={OUTLINE} strokeWidth="3" fill="none"/>
      <circle cx="68" cy="62" r="3.5" fill={OUTLINE}/>
      <line x1="68" y1="52" x2="68" y2="72" stroke="#888" strokeWidth="1.5"/>
      <line x1="58" y1="62" x2="78" y2="62" stroke="#888" strokeWidth="1.5"/>
      {/* Bike frame — simple diamond */}
      <path d="M16 76 L30 54 L52 54 L68 62" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
      <path d="M30 54 L16 76" stroke="#aaa" strokeWidth="2"/>
      {/* Handlebars */}
      <path d="M52 54 L68 50" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round"/>
      <path d="M68 50 L72 46" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M68 50 L72 54" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Saddle */}
      <path d="M28 54 L38 54" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round"/>
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
    name: 'Hipster Benedikt',
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
