// ── Character avatar illustrations ────────────────────────────────────────────
export function KarlAvatar() {
  return (
    <svg viewBox="0 0 48 58" width="48" height="58" fill="none">
      {/* red cap */}
      <ellipse cx="24" cy="12" rx="11" ry="5" fill="#e84040"/>
      <rect x="13" y="10" width="22" height="5" rx="2.5" fill="#e84040"/>
      <rect x="9" y="13" width="6" height="3" rx="1.5" fill="#e84040"/>
      {/* head */}
      <circle cx="24" cy="21" r="11" fill="#fdc9a0"/>
      {/* eyes */}
      <circle cx="20" cy="20" r="2.2" fill="#333"/>
      <circle cx="28" cy="20" r="2.2" fill="#333"/>
      <circle cx="20.9" cy="19.1" r="0.9" fill="white"/>
      <circle cx="28.9" cy="19.1" r="0.9" fill="white"/>
      {/* smile */}
      <path d="M19 25 Q24 29 29 25" stroke="#c07850" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* rosy cheeks */}
      <circle cx="18" cy="24" r="2.5" fill="#f9a8a8" opacity="0.5"/>
      <circle cx="30" cy="24" r="2.5" fill="#f9a8a8" opacity="0.5"/>
      {/* blue shirt body */}
      <rect x="16" y="32" width="16" height="15" rx="4" fill="#4a8fd9"/>
      {/* arms */}
      <line x1="16" y1="36" x2="9" y2="43" stroke="#fdc9a0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="32" y1="36" x2="39" y2="43" stroke="#fdc9a0" strokeWidth="3.5" strokeLinecap="round"/>
      {/* green backpack (right side, slightly behind) */}
      <rect x="32" y="30" width="8" height="11" rx="2" fill="#4caf50" opacity="0.9"/>
      <rect x="33" y="28" width="2" height="4" rx="1" fill="#388e3c"/>
      {/* legs */}
      <line x1="20" y1="47" x2="19" y2="56" stroke="#4a8fd9" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="28" y1="47" x2="29" y2="56" stroke="#4a8fd9" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  )
}

export function ErnaAvatar() {
  return (
    <svg viewBox="0 0 64 58" width="64" height="58" fill="none">
      {/* hair bun */}
      <ellipse cx="21" cy="7" rx="8" ry="5.5" fill="#cccac6"/>
      <ellipse cx="21" cy="10" rx="9" ry="5" fill="#d4d1cc"/>
      {/* head */}
      <circle cx="21" cy="19" r="10" fill="#f0c8a0"/>
      {/* glasses */}
      <circle cx="17.5" cy="19" r="3.5" stroke="#5a3a1a" strokeWidth="1.3" fill="rgba(180,220,255,0.35)"/>
      <circle cx="24.5" cy="19" r="3.5" stroke="#5a3a1a" strokeWidth="1.3" fill="rgba(180,220,255,0.35)"/>
      <line x1="21" y1="19" x2="21" y2="19" stroke="#5a3a1a" strokeWidth="0.8"/>
      <line x1="14" y1="19" x2="11" y2="20" stroke="#5a3a1a" strokeWidth="1"/>
      <line x1="28" y1="19" x2="31" y2="20" stroke="#5a3a1a" strokeWidth="1"/>
      {/* gentle smile */}
      <path d="M16 23.5 Q21 27 26 23.5" stroke="#c07850" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* purple coat */}
      <path d="M12 29 Q21 26 30 29 L32 46 L10 46 Z" fill="#9b6bb5"/>
      {/* collar */}
      <path d="M21 29 L18 34 M21 29 L24 34" stroke="#f0e8f8" strokeWidth="1.2"/>
      {/* cane arm */}
      <line x1="12" y1="33" x2="5" y2="40" stroke="#f0c8a0" strokeWidth="3" strokeLinecap="round"/>
      <line x1="5" y1="40" x2="4" y2="50" stroke="#8b6030" strokeWidth="2" strokeLinecap="round"/>
      <line x1="2" y1="50" x2="6" y2="50" stroke="#8b6030" strokeWidth="2" strokeLinecap="round"/>
      {/* other arm */}
      <line x1="30" y1="33" x2="36" y2="38" stroke="#f0c8a0" strokeWidth="3" strokeLinecap="round"/>
      {/* legs */}
      <line x1="18" y1="46" x2="17" y2="55" stroke="#6b4b8b" strokeWidth="4" strokeLinecap="round"/>
      <line x1="24" y1="46" x2="25" y2="55" stroke="#6b4b8b" strokeWidth="4" strokeLinecap="round"/>
      {/* ── Pomeranian ── */}
      {/* body floof */}
      <circle cx="50" cy="43" r="8" fill="#f5deb3"/>
      <circle cx="44" cy="40" r="6" fill="#f5deb3"/>
      <circle cx="56" cy="40" r="5" fill="#f5deb3"/>
      <circle cx="50" cy="37" r="5.5" fill="#f5deb3"/>
      {/* head */}
      <circle cx="57" cy="36" r="5" fill="#e8c880"/>
      {/* ear */}
      <ellipse cx="59" cy="32" rx="2.5" ry="3.5" fill="#c8a860" transform="rotate(10 59 32)"/>
      {/* eye + nose */}
      <circle cx="58.5" cy="35.5" r="1.2" fill="#333"/>
      <circle cx="60" cy="37.5" r="0.8" fill="#666"/>
      {/* tiny tongue */}
      <path d="M59 38.5 Q60.5 40 61 38.5" fill="#f48080" stroke="none"/>
      {/* legs */}
      <line x1="44" y1="49" x2="43" y2="55" stroke="#c8a860" strokeWidth="2" strokeLinecap="round"/>
      <line x1="48" y1="51" x2="47" y2="56" stroke="#c8a860" strokeWidth="2" strokeLinecap="round"/>
      <line x1="53" y1="51" x2="54" y2="56" stroke="#c8a860" strokeWidth="2" strokeLinecap="round"/>
      {/* leash */}
      <path d="M36 38 C40 40 42 42 44 41" stroke="#aaa" strokeWidth="0.9" fill="none" strokeDasharray="2 2"/>
    </svg>
  )
}

export function BeatriceAvatar() {
  return (
    <svg viewBox="0 0 52 58" width="52" height="58" fill="none">
      {/* updo hair */}
      <ellipse cx="26" cy="8" rx="9" ry="6" fill="#2d1600"/>
      <path d="M17 10 Q26 5 35 10 Q34 4 26 3 Q18 4 17 10Z" fill="#2d1600"/>
      <ellipse cx="26" cy="5" rx="5" ry="4" fill="#2d1600"/>
      {/* head */}
      <circle cx="26" cy="19" r="10.5" fill="#fdc9a0"/>
      {/* eyebrows — arched, serious-ish */}
      <path d="M19 14.5 Q22 13 25 14" stroke="#2d1600" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M27 14 Q30 13 33 14.5" stroke="#2d1600" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      {/* eyes */}
      <ellipse cx="22" cy="18" rx="2" ry="2.3" fill="#333"/>
      <ellipse cx="30" cy="18" rx="2" ry="2.3" fill="#333"/>
      <circle cx="22.8" cy="17.1" r="0.9" fill="white"/>
      <circle cx="30.8" cy="17.1" r="0.9" fill="white"/>
      {/* red lips */}
      <path d="M22 23.5 Q26 26 30 23.5" fill="#e84040" stroke="none"/>
      <path d="M22 23.5 Q26 22 30 23.5" fill="#fdc9a0" stroke="none"/>
      {/* navy blazer */}
      <path d="M16 29 Q26 26 36 29 L38 48 L14 48 Z" fill="#1a2a6b"/>
      {/* collar lapels */}
      <path d="M26 29 L22 35 M26 29 L30 35" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      {/* left arm */}
      <line x1="16" y1="33" x2="8" y2="40" stroke="#fdc9a0" strokeWidth="3.5" strokeLinecap="round"/>
      {/* right arm holding briefcase */}
      <line x1="36" y1="33" x2="42" y2="38" stroke="#fdc9a0" strokeWidth="3.5" strokeLinecap="round"/>
      {/* briefcase */}
      <rect x="39" y="36" width="12" height="9" rx="2" fill="#a0722a"/>
      <path d="M41 36 L41 34 Q45 32 49 34 L49 36" stroke="#a0722a" strokeWidth="1.5" fill="none"/>
      <line x1="39" y1="40.5" x2="51" y2="40.5" stroke="#8b6020" strokeWidth="0.8"/>
      <rect x="44" y="39" width="3" height="3" rx="0.5" fill="#c8902a"/>
      {/* legs */}
      <line x1="22" y1="48" x2="20" y2="56" stroke="#1a2a6b" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="30" y1="48" x2="32" y2="56" stroke="#1a2a6b" strokeWidth="4.5" strokeLinecap="round"/>
      {/* heels */}
      <line x1="18" y1="56" x2="22" y2="56" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
      <line x1="30" y1="56" x2="34" y2="56" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 72 58" width="72" height="58" fill="none">
      {/* hair — short sides, wavy top */}
      <path d="M18 12 C18 4 34 4 34 12" fill="#2d1600"/>
      <ellipse cx="26" cy="7" rx="8" ry="4" fill="#2d1600"/>
      {/* head */}
      <circle cx="26" cy="18" r="10.5" fill="#fdc9a0"/>
      {/* round hipster glasses */}
      <circle cx="21" cy="17" r="3.8" stroke="#2d1600" strokeWidth="1.5" fill="rgba(180,220,255,0.3)"/>
      <circle cx="31" cy="17" r="3.8" stroke="#2d1600" strokeWidth="1.5" fill="rgba(180,220,255,0.3)"/>
      <line x1="24.8" y1="17" x2="27.2" y2="17" stroke="#2d1600" strokeWidth="1.2"/>
      <line x1="17.2" y1="17" x2="14" y2="18" stroke="#2d1600" strokeWidth="1.2"/>
      <line x1="34.8" y1="17" x2="38" y2="18" stroke="#2d1600" strokeWidth="1.2"/>
      {/* glorious handlebar mustache */}
      <path d="M16 23 Q19 20 23 22 Q26 24 26 24 Q26 24 29 22 Q33 20 36 23" fill="#2d1600"/>
      <path d="M16 23 C15 26 17 28 20 26 Q23 24 26 25 Q29 24 32 26 C35 28 37 26 36 23" fill="#2d1600"/>
      {/* teal cycling jacket, leaning posture */}
      <path d="M18 28 Q26 25 34 28 L36 40 L16 40 Z" fill="#2a7a5a"/>
      {/* arms forward to handlebars */}
      <line x1="34" y1="30" x2="48" y2="34" stroke="#fdc9a0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="18" y1="30" x2="16" y2="40" stroke="#fdc9a0" strokeWidth="3" strokeLinecap="round"/>
      {/* legs to pedals */}
      <line x1="20" y1="40" x2="14" y2="50" stroke="#1a4a30" strokeWidth="4" strokeLinecap="round"/>
      <line x1="28" y1="40" x2="36" y2="50" stroke="#1a4a30" strokeWidth="4" strokeLinecap="round"/>
      {/* rear wheel */}
      <circle cx="14" cy="50" r="7" stroke="#444" strokeWidth="2" fill="none"/>
      <circle cx="14" cy="50" r="2" fill="#444"/>
      <line x1="14" y1="43" x2="14" y2="57" stroke="#666" strokeWidth="0.8"/>
      <line x1="7" y1="50" x2="21" y2="50" stroke="#666" strokeWidth="0.8"/>
      {/* front wheel */}
      <circle cx="56" cy="50" r="7" stroke="#444" strokeWidth="2" fill="none"/>
      <circle cx="56" cy="50" r="2" fill="#444"/>
      <line x1="56" y1="43" x2="56" y2="57" stroke="#666" strokeWidth="0.8"/>
      <line x1="49" y1="50" x2="63" y2="50" stroke="#666" strokeWidth="0.8"/>
      {/* bike frame */}
      <path d="M14 50 L28 34 L44 34 L56 50" stroke="#888" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <line x1="28" y1="34" x2="14" y2="50" stroke="#999" strokeWidth="1.5"/>
      {/* saddle */}
      <path d="M24 34 L32 34" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
      {/* handlebars */}
      <line x1="46" y1="32" x2="56" y2="30" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <line x1="56" y1="30" x2="58" y2="26" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="56" y1="30" x2="60" y2="32" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
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
    color: '#60a5fa',
    cardBg: '#0f2a3d',
    Avatar: KarlAvatar,
    voice: (dist, time) =>
      `Karl found a safe path! No scary roads ahead. ${dist} km · ${time} min`,
  },
  erna: {
    id: 'erna',
    name: 'Aunt Erna',
    tagline: 'Slow strolls with her Pomeranian',
    routeType: 'nicest',
    mode: 'walk',
    color: '#86efac',
    cardBg: '#0f2d1a',
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
    color: '#fbbf24',
    cardBg: '#2a1c08',
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
    color: '#f97316',
    cardBg: '#2a1508',
    Avatar: BenediktAvatar,
    voice: (dist, time) =>
      `Benedikt mapped his route. ${dist} km. Helmet optional.`,
  },
}

export const CHARACTER_ORDER = ['karl', 'erna', 'beatrice', 'benedikt']
