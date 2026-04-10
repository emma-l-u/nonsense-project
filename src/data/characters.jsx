// Premium character illustrations — realistic gradient-based SVG style

export function KarlAvatar() {
  return (
    <svg viewBox="0 0 120 192" width="120" height="192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Skin gradients */}
        <radialGradient id="k-skin-face" cx="60%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#F8D4B2"/>
          <stop offset="55%" stopColor="#E8A870"/>
          <stop offset="100%" stopColor="#C88050"/>
        </radialGradient>
        <linearGradient id="k-skin-neck" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C88050"/>
          <stop offset="40%" stopColor="#E8A870"/>
          <stop offset="100%" stopColor="#D49060"/>
        </linearGradient>
        <linearGradient id="k-skin-arm-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0C090"/>
          <stop offset="100%" stopColor="#C88050"/>
        </linearGradient>
        <linearGradient id="k-skin-arm-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D49060"/>
          <stop offset="100%" stopColor="#B87040"/>
        </linearGradient>
        {/* Hair */}
        <linearGradient id="k-hair-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A2A18"/>
          <stop offset="100%" stopColor="#1A0E08"/>
        </linearGradient>
        {/* Iris */}
        <radialGradient id="k-iris" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#6A9CD0"/>
          <stop offset="60%" stopColor="#4A7AB0"/>
          <stop offset="100%" stopColor="#2A5A90"/>
        </radialGradient>
        {/* Shirt */}
        <linearGradient id="k-shirt" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3A5CC5"/>
          <stop offset="50%" stopColor="#2D4AB5"/>
          <stop offset="100%" stopColor="#1D3280"/>
        </linearGradient>
        <linearGradient id="k-shirt-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,0,0,0)"/>
          <stop offset="100%" stopColor="rgba(0,0,32,0.28)"/>
        </linearGradient>
        {/* Shorts */}
        <linearGradient id="k-shorts" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A2D6E"/>
          <stop offset="100%" stopColor="#0E1E50"/>
        </linearGradient>
        {/* Backpack */}
        <linearGradient id="k-pack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E4BC40"/>
          <stop offset="60%" stopColor="#C49A20"/>
          <stop offset="100%" stopColor="#9A7818"/>
        </linearGradient>
        <linearGradient id="k-pack-pocket" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D0A830"/>
          <stop offset="100%" stopColor="#8A6810"/>
        </linearGradient>
        {/* Sneaker */}
        <linearGradient id="k-shoe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="80%" stopColor="#E8E8E8"/>
          <stop offset="100%" stopColor="#C8C8C8"/>
        </linearGradient>
        <linearGradient id="k-sole" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8090C0"/>
          <stop offset="100%" stopColor="#5060A0"/>
        </linearGradient>
        {/* Ice cream */}
        <radialGradient id="k-scoop" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F4C8C8"/>
          <stop offset="60%" stopColor="#E8A0A0"/>
          <stop offset="100%" stopColor="#D07878"/>
        </radialGradient>
        <linearGradient id="k-cone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A87040"/>
          <stop offset="100%" stopColor="#7A4820"/>
        </linearGradient>
      </defs>

      {/* === BACKPACK (drawn first, behind body) === */}
      <rect x="6" y="54" width="26" height="42" rx="6" fill="url(#k-pack)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Backpack pocket */}
      <rect x="8" y="72" width="22" height="18" rx="4" fill="url(#k-pack-pocket)" stroke="#1a1209" strokeWidth="1"/>
      {/* Zipper line */}
      <line x1="10" y1="72" x2="28" y2="72" stroke="#1a1209" strokeWidth="0.8" strokeDasharray="2 2"/>
      {/* Shoulder strap */}
      <path d="M22 54 Q28 52 30 62" stroke="#A07820" strokeWidth="3" fill="none"/>
      {/* Buckle */}
      <rect x="26" y="63" width="6" height="4" rx="1" fill="#C9A227" stroke="#1a1209" strokeWidth="0.7"/>

      {/* === BACK ARM (hangs naturally) === */}
      <path d="M28 78 Q18 90 16 102 Q20 104 24 102 Q28 92 36 80 Z" fill="url(#k-skin-arm-back)" stroke="#1a1209" strokeWidth="1"/>
      {/* Back hand */}
      <ellipse cx="18" cy="104" rx="5" ry="4" fill="url(#k-skin-arm-back)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M14 103 Q13 108 14 110" stroke="#1a1209" strokeWidth="0.7" fill="none"/>
      <path d="M17 104 Q16 109 17 111" stroke="#1a1209" strokeWidth="0.7" fill="none"/>
      <path d="M20 104 Q20 108 21 110" stroke="#1a1209" strokeWidth="0.7" fill="none"/>

      {/* === BACK LEG === */}
      <path d="M40 100 Q34 118 32 134 Q38 136 42 134 Q44 118 48 100 Z" fill="url(#k-shorts)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Back leg lower */}
      <path d="M34 134 Q30 150 32 162 Q36 164 40 162 Q40 150 42 134 Z" fill="url(#k-skin-arm-back)" stroke="#1a1209" strokeWidth="1"/>
      {/* Back shoe */}
      <path d="M32 162 Q26 168 24 172 Q24 176 32 176 Q44 176 48 174 Q50 170 46 166 Q42 162 40 162 Z" fill="url(#k-shoe)" stroke="#1a1209" strokeWidth="1.5"/>
      <rect x="24" y="172" width="26" height="4" rx="2" fill="url(#k-sole)"/>

      {/* === BODY / TORSO === */}
      <path d="M28 56 Q32 54 54 54 Q60 54 66 56 L68 100 Q60 104 50 104 Q40 104 32 100 Z" fill="url(#k-shirt)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Shirt shadow overlay */}
      <path d="M60 56 L66 56 L68 100 Q64 102 60 102 Z" fill="url(#k-shirt-shadow)"/>
      {/* Horizontal cream stripes */}
      <path d="M30 64 Q48 62 66 64 Q66 66 48 66 Q30 66 30 64 Z" fill="#F5EDDC" opacity="0.85"/>
      <path d="M30 72 Q48 70 66 72 Q66 74 48 74 Q30 74 30 72 Z" fill="#F5EDDC" opacity="0.85"/>
      <path d="M30 80 Q48 78 66 80 Q66 82 48 82 Q30 82 30 80 Z" fill="#F5EDDC" opacity="0.85"/>
      <path d="M30 88 Q48 86 66 88 Q66 90 48 90 Q30 90 30 88 Z" fill="#F5EDDC" opacity="0.85"/>
      {/* Collar */}
      <path d="M44 54 Q50 50 56 54" stroke="#1a1209" strokeWidth="1" fill="none"/>
      {/* Sleeves */}
      <path d="M28 56 Q18 62 16 72 Q20 76 28 72 Q32 66 36 56 Z" fill="url(#k-shirt)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M66 56 Q76 60 78 70 Q74 74 66 72 Q62 64 60 56 Z" fill="url(#k-shirt)" stroke="#1a1209" strokeWidth="1.5"/>

      {/* === SHORTS === */}
      <path d="M32 100 Q50 106 68 100 L70 134 Q62 138 56 138 L54 120 L50 120 L48 138 Q42 138 32 134 Z" fill="url(#k-shorts)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Leg hem lines */}
      <line x1="32" y1="134" x2="48" y2="138" stroke="#1a1209" strokeWidth="1"/>
      <line x1="52" y1="138" x2="70" y2="134" stroke="#1a1209" strokeWidth="1"/>

      {/* === FRONT LEG === */}
      <path d="M54 136 Q56 152 56 168 Q60 170 66 168 Q66 152 68 136 Z" fill="url(#k-skin-arm-front)" stroke="#1a1209" strokeWidth="1"/>
      {/* Front shoe */}
      <path d="M56 168 Q52 174 50 178 Q50 182 58 182 Q72 182 76 180 Q78 176 74 172 Q70 168 66 168 Z" fill="url(#k-shoe)" stroke="#1a1209" strokeWidth="1.5"/>
      <rect x="50" y="178" width="28" height="4" rx="2" fill="url(#k-sole)"/>
      {/* Lace eyelets */}
      <circle cx="56" cy="174" r="1" fill="#2D4AB5"/>
      <circle cx="60" cy="173" r="1" fill="#2D4AB5"/>
      <circle cx="64" cy="173" r="1" fill="#2D4AB5"/>
      {/* Lace bow */}
      <path d="M58 173 Q60 170 62 173" stroke="#E8E8F8" strokeWidth="1" fill="none"/>
      <circle cx="60" cy="173" r="1.5" fill="#E8E8F8"/>

      {/* === NECK === */}
      <path d="M44 46 Q50 44 56 46 L58 58 Q50 60 42 58 Z" fill="url(#k-skin-neck)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* === HEAD === */}
      <path d="M36 22 Q34 8 50 6 Q68 4 78 14 Q86 22 84 34 Q82 44 76 48 Q68 54 56 52 Q44 52 38 44 Q32 36 36 22 Z" fill="url(#k-skin-face)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Ear */}
      <path d="M38 32 Q32 34 32 38 Q32 43 38 44 Q40 42 40 38 Q40 34 38 32 Z" fill="url(#k-skin-face)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M36 35 Q34 38 36 41" stroke="#C07848" strokeWidth="0.8" fill="none"/>
      {/* Chubby cheek highlight */}
      <ellipse cx="70" cy="38" rx="7" ry="5" fill="#F8D4B2" opacity="0.4"/>
      {/* Rosy cheek blush */}
      <ellipse cx="72" cy="40" rx="6" ry="4" fill="#E0A0A0" opacity="0.35"/>

      {/* === HAIR === */}
      <path d="M36 22 Q34 8 50 5 Q68 3 78 14 Q70 10 54 10 Q40 12 36 22 Z" fill="url(#k-hair-base)"/>
      {/* Messy tufts */}
      <path d="M46 7 Q48 2 52 6 Q54 1 58 5 Q62 2 64 7 Q60 5 56 6 Q52 5 46 7 Z" fill="url(#k-hair-base)" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Hair highlight strands */}
      <path d="M46 10 Q52 7 60 10" stroke="#6A5040" strokeWidth="1.5" fill="none"/>
      <path d="M42 15 Q46 12 50 14" stroke="#6A5040" strokeWidth="1" fill="none"/>
      {/* Fringe */}
      <path d="M38 22 Q42 14 52 13 Q60 13 68 17 Q62 14 54 15 Q46 16 40 22 Z" fill="url(#k-hair-base)"/>
      {/* Gloss */}
      <path d="M44 9 Q52 6 60 9" stroke="#8A7060" strokeWidth="1.2" fill="none" opacity="0.7"/>

      {/* === EYE === */}
      <path d="M62 26 Q68 23 74 26 Q72 30 66 31 Q60 30 62 26 Z" fill="white" stroke="#1a1209" strokeWidth="0.8"/>
      <circle cx="67" cy="28" r="4" fill="url(#k-iris)"/>
      <circle cx="67" cy="28" r="2" fill="#1A1209"/>
      <ellipse cx="65.5" cy="26.5" rx="1" ry="0.8" fill="white" opacity="0.9"/>
      {/* Upper eyelid */}
      <path d="M62 26 Q67 22 74 26" stroke="#1a1209" strokeWidth="1.2" fill="none"/>
      {/* Lashes */}
      <line x1="63" y1="25" x2="62" y2="23" stroke="#1a1209" strokeWidth="0.8"/>
      <line x1="66" y1="23" x2="65" y2="21" stroke="#1a1209" strokeWidth="0.8"/>
      <line x1="69" y1="23" x2="69" y2="21" stroke="#1a1209" strokeWidth="0.8"/>
      <line x1="72" y1="24" x2="73" y2="22" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Eyebrow */}
      <path d="M61 21 Q67 18 74 21" stroke="#5A4030" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

      {/* === NOSE === */}
      <path d="M76 32 Q80 34 80 37 Q78 38 76 37" stroke="#C07848" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <circle cx="78" cy="38" r="1.2" fill="#C07848" opacity="0.5"/>

      {/* === MOUTH === */}
      <path d="M68 43 Q72 48 79 43" fill="#E09888" fillOpacity="0.4" stroke="none"/>
      <path d="M68 43 Q71 41 74 42 Q77 41 79 43" stroke="#C07858" strokeWidth="1.2" fill="none"/>
      <path d="M68 43 Q72 48 79 43" stroke="#D08878" strokeWidth="1.5" fill="none"/>

      {/* === FRONT ARM (raised, holding ice cream) === */}
      <path d="M60 60 Q72 46 84 34 Q88 30 92 26 Q96 22 100 24 Q98 28 94 28 Q90 32 86 36 Q74 48 62 62 Z" fill="url(#k-skin-arm-front)" stroke="#1a1209" strokeWidth="1"/>

      {/* === HAND holding cone === */}
      <path d="M94 22 Q100 16 106 18 Q106 24 102 26 Q98 28 94 26 Z" fill="url(#k-skin-arm-front)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M96 18 Q98 14 100 16" stroke="#1a1209" strokeWidth="0.7" fill="none"/>
      <path d="M100 17 Q102 13 104 15" stroke="#1a1209" strokeWidth="0.7" fill="none"/>

      {/* === ICE CREAM === */}
      <path d="M97 24 L104 48 L112 48 L106 24 Z" fill="url(#k-cone)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Grid lines */}
      <line x1="99" y1="28" x2="111" y2="28" stroke="#7A4020" strokeWidth="0.6"/>
      <line x1="100" y1="33" x2="111" y2="33" stroke="#7A4020" strokeWidth="0.6"/>
      <line x1="100" y1="38" x2="111" y2="38" stroke="#7A4020" strokeWidth="0.6"/>
      <line x1="101" y1="43" x2="111" y2="43" stroke="#7A4020" strokeWidth="0.6"/>
      <line x1="99" y1="26" x2="104" y2="48" stroke="#7A4020" strokeWidth="0.5"/>
      <line x1="103" y1="26" x2="108" y2="48" stroke="#7A4020" strokeWidth="0.5"/>
      <line x1="107" y1="26" x2="111" y2="44" stroke="#7A4020" strokeWidth="0.5"/>
      {/* Scoop */}
      <ellipse cx="104" cy="20" rx="10" ry="9" fill="url(#k-scoop)" stroke="#1a1209" strokeWidth="1.2"/>
      <ellipse cx="100" cy="16" rx="4" ry="3" fill="#F8D4D4" opacity="0.55"/>
      {/* Drip */}
      <path d="M110 26 Q112 32 111 38" stroke="#E8A0A0" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Cherry */}
      <circle cx="104" cy="11" r="3" fill="#C03030" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M104 8 Q106 5 108 7" stroke="#4A7020" strokeWidth="1" fill="none"/>
      {/* Sprinkles */}
      <rect x="98" y="18" width="4" height="1.5" rx="0.7" fill="#F5EDDC" transform="rotate(-20 98 18)"/>
      <rect x="107" y="16" width="4" height="1.5" rx="0.7" fill="#E4BC40" transform="rotate(15 107 16)"/>
      <rect x="102" y="22" width="4" height="1.5" rx="0.7" fill="#F08040" transform="rotate(-35 102 22)"/>
    </svg>
  )
}

export function ErnaAvatar() {
  return (
    <svg viewBox="0 0 175 188" width="175" height="188" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="e-skin-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0C898"/>
          <stop offset="55%" stopColor="#D49060"/>
          <stop offset="100%" stopColor="#B87040"/>
        </linearGradient>
        <linearGradient id="e-skin-neck" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C88050"/>
          <stop offset="50%" stopColor="#E0A878"/>
          <stop offset="100%" stopColor="#C88050"/>
        </linearGradient>
        <linearGradient id="e-skin-hand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E0A878"/>
          <stop offset="100%" stopColor="#B87040"/>
        </linearGradient>
        {/* Grey bun layers */}
        <linearGradient id="e-hair-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#908880"/>
          <stop offset="100%" stopColor="#706860"/>
        </linearGradient>
        <linearGradient id="e-hair-mid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B8B0A8"/>
          <stop offset="100%" stopColor="#A09890"/>
        </linearGradient>
        <linearGradient id="e-hair-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D4CCC8"/>
          <stop offset="100%" stopColor="#C0B8B4"/>
        </linearGradient>
        <radialGradient id="e-iris" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#9AABB8"/>
          <stop offset="60%" stopColor="#7A8898"/>
          <stop offset="100%" stopColor="#5A6878"/>
        </radialGradient>
        <linearGradient id="e-coat" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E0A090"/>
          <stop offset="40%" stopColor="#D4847A"/>
          <stop offset="100%" stopColor="#B06060"/>
        </linearGradient>
        <linearGradient id="e-coat-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,0,0,0)"/>
          <stop offset="100%" stopColor="rgba(80,0,0,0.22)"/>
        </linearGradient>
        <linearGradient id="e-cane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9A6E3A"/>
          <stop offset="100%" stopColor="#6A4018"/>
        </linearGradient>
        <linearGradient id="e-shoe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#787878"/>
          <stop offset="100%" stopColor="#484848"/>
        </linearGradient>
        <radialGradient id="e-dog-body" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F5E4C0"/>
          <stop offset="55%" stopColor="#E8C878"/>
          <stop offset="100%" stopColor="#C0A040"/>
        </radialGradient>
        <radialGradient id="e-dog-chest" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FDFAF0"/>
          <stop offset="100%" stopColor="#F0E0B0"/>
        </radialGradient>
        <radialGradient id="e-dog-head" cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F0DC98"/>
          <stop offset="100%" stopColor="#C8A030"/>
        </radialGradient>
      </defs>

      {/* === CANE === */}
      <line x1="54" y1="92" x2="54" y2="182" stroke="#6A4018" strokeWidth="4" strokeLinecap="round"/>
      <path d="M54 92 Q54 84 62 80 Q68 78 72 82" fill="none" stroke="#7A4E2A" strokeWidth="5" strokeLinecap="round"/>
      <path d="M52 84 Q54 78 64 76 Q72 74 74 82 Q72 86 68 86 Q60 88 54 90 Z" fill="url(#e-cane)" stroke="#1a1209" strokeWidth="1"/>
      <ellipse cx="54" cy="182" rx="4" ry="3" fill="#2A2A2A" stroke="#1a1209" strokeWidth="0.8"/>

      {/* === LEASH (dashed line) === */}
      <path d="M88 108 Q110 118 118 110" stroke="#1a1209" strokeWidth="1.5" strokeDasharray="3 5" fill="none"/>

      {/* === POMERANIAN DOG === */}
      {/* Rear puffs */}
      <ellipse cx="152" cy="138" rx="18" ry="14" fill="url(#e-dog-body)" stroke="#1a1209" strokeWidth="1"/>
      {/* Main body */}
      <ellipse cx="136" cy="136" rx="20" ry="16" fill="url(#e-dog-body)" stroke="#1a1209" strokeWidth="1"/>
      {/* Chest puff */}
      <ellipse cx="122" cy="136" rx="12" ry="11" fill="url(#e-dog-chest)" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Curled tail */}
      <path d="M154 132 Q164 122 162 130 Q160 138 154 138" fill="url(#e-dog-body)" stroke="#1a1209" strokeWidth="1"/>
      {/* Head */}
      <ellipse cx="120" cy="120" rx="15" ry="13" fill="url(#e-dog-head)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Left ear */}
      <path d="M112 114 Q108 106 114 108 Q118 110 116 116 Z" fill="#E8C060" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M113 113 Q110 108 114 109" fill="#F0B0B0" stroke="none" opacity="0.6"/>
      {/* Right ear */}
      <path d="M126 113 Q130 106 134 110 Q132 116 128 116 Z" fill="#E8C060" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Dog eye */}
      <circle cx="118" cy="120" r="3" fill="#1A1209" stroke="#1a1209" strokeWidth="0.5"/>
      <circle cx="117" cy="119" r="0.8" fill="white"/>
      {/* Nose */}
      <ellipse cx="110" cy="124" rx="2.5" ry="1.5" fill="#1A1209"/>
      {/* Tongue */}
      <path d="M108 126 Q110 130 112 126" fill="#E87878" stroke="#1a1209" strokeWidth="0.5"/>
      {/* Whiskers */}
      <line x1="110" y1="122" x2="102" y2="120" stroke="#1a1209" strokeWidth="0.5"/>
      <line x1="110" y1="124" x2="102" y2="124" stroke="#1a1209" strokeWidth="0.5"/>
      <line x1="110" y1="126" x2="102" y2="128" stroke="#1a1209" strokeWidth="0.5"/>
      <line x1="110" y1="122" x2="118" y2="118" stroke="#1a1209" strokeWidth="0.5"/>
      {/* Red collar */}
      <path d="M114 130 Q130 126 136 128 Q136 132 130 134 Q114 134 114 130 Z" fill="#D04040" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Gold tag */}
      <ellipse cx="126" cy="135" rx="3" ry="3.5" fill="#C9A227" stroke="#1a1209" strokeWidth="0.7"/>
      {/* Legs */}
      <ellipse cx="124" cy="150" rx="5" ry="8" fill="#D4A840" stroke="#1a1209" strokeWidth="0.8"/>
      <ellipse cx="134" cy="151" rx="5" ry="8" fill="#D4A840" stroke="#1a1209" strokeWidth="0.8"/>
      <ellipse cx="144" cy="150" rx="5" ry="8" fill="#C09030" stroke="#1a1209" strokeWidth="0.8"/>
      <ellipse cx="152" cy="149" rx="5" ry="8" fill="#C09030" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Paws */}
      <ellipse cx="124" cy="158" rx="5" ry="3" fill="#E0B848" stroke="#1a1209" strokeWidth="0.7"/>
      <ellipse cx="134" cy="159" rx="5" ry="3" fill="#E0B848" stroke="#1a1209" strokeWidth="0.7"/>
      <ellipse cx="144" cy="158" rx="5" ry="3" fill="#C09030" stroke="#1a1209" strokeWidth="0.7"/>
      <ellipse cx="152" cy="157" rx="5" ry="3" fill="#C09030" stroke="#1a1209" strokeWidth="0.7"/>

      {/* === BACK LEG === */}
      <path d="M60 128 Q56 150 56 168 Q62 170 70 168 Q70 150 72 128 Z" fill="url(#e-skin-hand)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M56 168 Q50 172 50 176 Q50 180 60 180 Q72 180 74 178 Q76 174 72 170 Q70 168 68 168 Z" fill="url(#e-shoe)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* === FRONT LEG === */}
      <path d="M72 128 Q72 150 70 168 Q76 170 84 168 Q84 150 84 128 Z" fill="url(#e-skin-hand)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M70 168 Q66 172 66 176 Q66 180 76 180 Q88 180 90 178 Q92 174 88 170 Q86 168 84 168 Z" fill="url(#e-shoe)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* === COAT BODY === */}
      <path d="M48 36 Q54 34 72 34 Q82 34 88 36 L92 128 Q80 132 72 132 Q64 132 56 130 L52 128 Z" fill="url(#e-coat)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M84 36 L88 36 L92 128 Q90 130 86 130 Z" fill="url(#e-coat-shadow)"/>
      {/* Lapel */}
      <path d="M68 36 Q64 44 60 52 Q64 56 70 56 Q76 52 76 44 Q76 38 72 36 Z" fill="#C06868" stroke="#1a1209" strokeWidth="1"/>
      {/* Buttons */}
      <ellipse cx="72" cy="60" rx="2.5" ry="3" fill="#D4847A" stroke="#1a1209" strokeWidth="0.8"/>
      <ellipse cx="72" cy="74" rx="2.5" ry="3" fill="#D4847A" stroke="#1a1209" strokeWidth="0.8"/>
      <ellipse cx="72" cy="88" rx="2.5" ry="3" fill="#D4847A" stroke="#1a1209" strokeWidth="0.8"/>
      <ellipse cx="72" cy="102" rx="2.5" ry="3" fill="#D4847A" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Argyle diamonds */}
      <g stroke="#C9A227" strokeWidth="0.8" fill="none" opacity="0.7">
        <path d="M58 64 L62 58 L66 64 L62 70 Z"/>
        <path d="M66 64 L70 58 L74 64 L70 70 Z"/>
        <path d="M74 64 L78 58 L82 64 L78 70 Z"/>
        <path d="M58 80 L62 74 L66 80 L62 86 Z"/>
        <path d="M66 80 L70 74 L74 80 L70 86 Z"/>
        <path d="M74 80 L78 74 L82 80 L78 86 Z"/>
        <path d="M58 96 L62 90 L66 96 L62 102 Z"/>
        <path d="M66 96 L70 90 L74 96 L70 102 Z"/>
        <path d="M74 96 L78 90 L82 96 L78 102 Z"/>
        <circle cx="62" cy="64" r="0.7" fill="#C9A227"/>
        <circle cx="70" cy="64" r="0.7" fill="#C9A227"/>
        <circle cx="78" cy="64" r="0.7" fill="#C9A227"/>
        <circle cx="62" cy="80" r="0.7" fill="#C9A227"/>
        <circle cx="70" cy="80" r="0.7" fill="#C9A227"/>
        <circle cx="78" cy="80" r="0.7" fill="#C9A227"/>
        <circle cx="62" cy="96" r="0.7" fill="#C9A227"/>
        <circle cx="70" cy="96" r="0.7" fill="#C9A227"/>
        <circle cx="78" cy="96" r="0.7" fill="#C9A227"/>
      </g>
      {/* Coat hem */}
      <path d="M52 128 Q72 132 92 128" stroke="#1a1209" strokeWidth="1.2" fill="none"/>

      {/* === LEFT ARM (holding cane) === */}
      <path d="M52 56 Q44 72 50 88 Q54 92 60 90 Q60 72 62 58 Z" fill="url(#e-coat)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M50 88 Q46 94 50 98 Q56 100 60 96 Q62 92 60 90 Z" fill="url(#e-skin-hand)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M50 92 Q48 96 50 98" stroke="#1a1209" strokeWidth="0.7" fill="none"/>

      {/* === RIGHT ARM (holding leash) === */}
      <path d="M84 56 Q92 72 90 90 Q86 94 82 92 Q80 76 80 58 Z" fill="url(#e-coat)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M90 90 Q92 96 90 100 Q84 102 80 98 Q78 94 80 92 Z" fill="url(#e-skin-hand)" stroke="#1a1209" strokeWidth="1"/>

      {/* === NECK === */}
      <path d="M60 34 Q68 32 76 34 L78 46 Q68 50 60 46 Z" fill="url(#e-skin-neck)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M62 42 Q68 44 74 42" stroke="#C07848" strokeWidth="0.8" fill="none" opacity="0.6"/>

      {/* === HEAD === */}
      <path d="M52 20 Q50 8 64 6 Q80 4 88 14 Q94 22 90 32 Q88 40 82 44 Q74 50 64 48 Q54 46 50 38 Q48 30 52 20 Z" fill="url(#e-skin-face)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Jowl suggestion */}
      <path d="M52 38 Q50 44 54 46 Q58 48 62 46" stroke="#B87040" strokeWidth="0.8" fill="none" opacity="0.7"/>
      {/* Ear */}
      <path d="M52 28 Q46 30 46 34 Q46 39 52 40 Q54 38 54 34 Q54 30 52 28 Z" fill="url(#e-skin-face)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M50 31 Q48 34 50 38" stroke="#C07848" strokeWidth="0.7" fill="none"/>
      {/* Gold earring */}
      <line x1="50" y1="40" x2="50" y2="48" stroke="#C9A227" strokeWidth="1.5"/>
      <ellipse cx="50" cy="51" rx="3" ry="4" fill="#C9A227" stroke="#1a1209" strokeWidth="0.7"/>

      {/* === GREY BUN === */}
      <ellipse cx="76" cy="12" rx="16" ry="12" fill="url(#e-hair-base)" stroke="#1a1209" strokeWidth="1.2"/>
      <ellipse cx="76" cy="10" rx="12" ry="9" fill="url(#e-hair-mid)"/>
      <ellipse cx="76" cy="9" rx="8" ry="5" fill="url(#e-hair-top)" opacity="0.8"/>
      <path d="M56 18 Q60 10 68 8 Q74 6 80 8" stroke="#908880" strokeWidth="2" fill="none"/>
      {/* Bun pin */}
      <line x1="70" y1="8" x2="82" y2="14" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="82" cy="14" r="2" fill="#C9A227" stroke="#1a1209" strokeWidth="0.5"/>

      {/* === GLASSES === */}
      <circle cx="72" cy="26" r="9" stroke="#C9A227" strokeWidth="2" fill="none"/>
      <path d="M63 24 Q58 22 55 24" stroke="#C9A227" strokeWidth="1.5" fill="none"/>
      <path d="M81 22 Q86 20 88 24" stroke="#C9A227" strokeWidth="1.5" fill="none"/>
      <path d="M66 20 Q68 18 71 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>

      {/* === EYE === */}
      <path d="M65 26 Q70 23 76 26 Q74 30 70 31 Q64 30 65 26 Z" fill="white" stroke="none"/>
      <circle cx="70" cy="27" r="3.5" fill="url(#e-iris)"/>
      <circle cx="70" cy="27" r="1.8" fill="#1A1209"/>
      <ellipse cx="68.5" cy="25.5" rx="0.8" ry="0.6" fill="white" opacity="0.9"/>
      <path d="M65 26 Q70 22 76 26" stroke="#1a1209" strokeWidth="1" fill="none"/>
      {/* Crow's feet */}
      <path d="M77 24 Q80 22 82 20" stroke="#B87040" strokeWidth="0.7" fill="none"/>
      <path d="M77 26 Q81 25 84 24" stroke="#B87040" strokeWidth="0.6" fill="none"/>
      <path d="M77 28 Q80 28 82 29" stroke="#B87040" strokeWidth="0.5" fill="none"/>

      {/* === AGE LINES === */}
      <path d="M76 34 Q74 38 73 42" stroke="#B87040" strokeWidth="0.8" fill="none" opacity="0.7"/>
      <path d="M60 18 Q68 16 76 18" stroke="#B87040" strokeWidth="0.6" fill="none" opacity="0.5"/>
      <path d="M62 22 Q68 20 74 22" stroke="#B87040" strokeWidth="0.5" fill="none" opacity="0.4"/>

      {/* === NOSE === */}
      <path d="M84 28 Q88 32 88 36 Q86 38 82 37" stroke="#C07848" strokeWidth="1.2" fill="none"/>
      <circle cx="86" cy="38" r="1.5" fill="#C07848" opacity="0.4"/>

      {/* === LIPS === */}
      <path d="M72 42 Q76 40 80 41 Q78 44 76 45 Q72 44 72 42 Z" fill="#C08878" stroke="none"/>
      <path d="M72 42 Q75 40 78 41 Q80 40 82 42" stroke="#A06858" strokeWidth="1" fill="none"/>
      <path d="M72 42 Q76 46 82 42" stroke="#C08878" strokeWidth="1.2" fill="none"/>
    </svg>
  )
}

export function BeatriceAvatar() {
  return (
    <svg viewBox="0 0 120 192" width="120" height="192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="b-skin-face" cx="55%" cy="40%" r="58%">
          <stop offset="0%" stopColor="#F4C898"/>
          <stop offset="50%" stopColor="#D49060"/>
          <stop offset="100%" stopColor="#B87040"/>
        </radialGradient>
        <linearGradient id="b-skin-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8A870"/>
          <stop offset="100%" stopColor="#C07848"/>
        </linearGradient>
        <linearGradient id="b-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A3020"/>
          <stop offset="100%" stopColor="#1A0E08"/>
        </linearGradient>
        <radialGradient id="b-iris" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#9A6030"/>
          <stop offset="55%" stopColor="#7A4018"/>
          <stop offset="100%" stopColor="#3A1808"/>
        </radialGradient>
        <linearGradient id="b-blazer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F07030"/>
          <stop offset="50%" stopColor="#E06020"/>
          <stop offset="100%" stopColor="#C04010"/>
        </linearGradient>
        <linearGradient id="b-blazer-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,0,0,0)"/>
          <stop offset="100%" stopColor="rgba(60,10,0,0.30)"/>
        </linearGradient>
        <linearGradient id="b-trousers" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A2D6E"/>
          <stop offset="100%" stopColor="#0E1E50"/>
        </linearGradient>
        <linearGradient id="b-bag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2A3D80"/>
          <stop offset="100%" stopColor="#0E1E50"/>
        </linearGradient>
        <linearGradient id="b-shopbag1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEFCF5"/>
          <stop offset="100%" stopColor="#E8E0CC"/>
        </linearGradient>
        <linearGradient id="b-shopbag2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8EEF8"/>
          <stop offset="100%" stopColor="#C8D4E8"/>
        </linearGradient>
        <linearGradient id="b-shoe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2A3D80"/>
          <stop offset="100%" stopColor="#0E1E50"/>
        </linearGradient>
        <linearGradient id="b-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A3E"/>
          <stop offset="100%" stopColor="#1A1A2E"/>
        </linearGradient>
      </defs>

      {/* === SHOPPING BAGS === */}
      <rect x="6" y="110" width="18" height="24" rx="2" fill="url(#b-shopbag2)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M10 110 Q11 104 14 104 Q17 104 18 110" stroke="#9090A0" strokeWidth="1.2" fill="none"/>
      <line x1="8" y1="118" x2="22" y2="118" stroke="#A8B8D0" strokeWidth="0.6"/>
      <rect x="18" y="106" width="20" height="28" rx="2" fill="url(#b-shopbag1)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M22 106 Q23 100 27 100 Q31 100 32 106" stroke="#808080" strokeWidth="1.2" fill="none"/>
      <line x1="20" y1="116" x2="36" y2="116" stroke="#C0B8A0" strokeWidth="0.6"/>

      {/* === NAVY HANDBAG === */}
      <path d="M14 90 Q14 86 22 84 Q30 82 34 86 Q36 90 36 100 Q36 108 32 110 Q22 112 16 108 Q12 104 14 90 Z" fill="url(#b-bag)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M32 86 Q36 90 36 100 Q36 108 32 110" stroke="#0A1440" strokeWidth="2" fill="none"/>
      <path d="M18 84 Q18 78 22 78 Q26 78 26 84" stroke="#1A2D6E" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="25" cy="86" rx="4" ry="2.5" fill="#C9A227" stroke="#1a1209" strokeWidth="0.8"/>

      {/* === BACK LEG (behind) === */}
      <path d="M44 96 Q36 130 34 168 Q40 170 46 168 Q50 130 52 96 Z" fill="url(#b-trousers)" stroke="#1a1209" strokeWidth="1.2"/>
      <line x1="44" y1="96" x2="40" y2="168" stroke="#0A1440" strokeWidth="0.7" opacity="0.5"/>
      {/* Back shoe */}
      <path d="M34 168 Q28 172 28 176 Q28 182 38 182 Q50 182 52 180 Q54 175 50 170 Q48 168 46 168 Z" fill="url(#b-shoe)" stroke="#1a1209" strokeWidth="1.2"/>
      <line x1="36" y1="180" x2="32" y2="186" stroke="#0E1E50" strokeWidth="2"/>
      <path d="M44 170 Q50 172 52 176" stroke="rgba(100,130,200,0.5)" strokeWidth="1" fill="none"/>

      {/* === BLAZER === */}
      <path d="M36 38 Q44 36 62 36 Q72 36 80 38 L82 96 Q72 100 62 100 Q50 100 40 96 Z" fill="url(#b-blazer)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M72 38 L80 38 L82 96 Q80 98 76 98 Z" fill="url(#b-blazer-shadow)"/>
      {/* Lapel */}
      <path d="M58 38 Q54 48 50 56 Q56 60 62 58 Q68 52 68 44 Q68 38 64 36 Z" fill="#D05020" stroke="#1a1209" strokeWidth="1"/>
      {/* Cream stripes */}
      <line x1="50" y1="46" x2="50" y2="96" stroke="#F5EDDC" strokeWidth="2.5" opacity="0.8"/>
      <line x1="72" y1="46" x2="72" y2="96" stroke="#F5EDDC" strokeWidth="2.5" opacity="0.8"/>
      {/* Breast pocket */}
      <rect x="66" y="52" width="10" height="8" rx="1" fill="#D05020" stroke="#1a1209" strokeWidth="0.7"/>
      <path d="M67 52 Q71 48 74 52" fill="#F5EDDC" stroke="#E8DDCA" strokeWidth="0.5"/>
      {/* Shoulder */}
      <path d="M36 38 Q40 34 46 36" stroke="#D05020" strokeWidth="1.5" fill="none"/>
      <path d="M80 38 Q78 34 74 36" stroke="#D05020" strokeWidth="1.5" fill="none"/>
      {/* Sleeves */}
      <path d="M36 38 Q24 44 22 60 Q28 64 36 60 Q40 50 44 38 Z" fill="url(#b-blazer)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M80 38 Q92 42 94 58 Q88 62 82 60 Q78 50 76 38 Z" fill="url(#b-blazer)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* === TROUSERS === */}
      <path d="M40 96 Q60 102 82 96 L84 166 Q76 170 70 168 L68 140 L62 140 L60 168 Q52 170 46 166 Z" fill="url(#b-trousers)" stroke="#1a1209" strokeWidth="1.5"/>
      <line x1="52" y1="96" x2="56" y2="140" stroke="#0A1440" strokeWidth="0.8" opacity="0.5"/>
      <line x1="74" y1="96" x2="72" y2="168" stroke="#0A1440" strokeWidth="0.8" opacity="0.5"/>

      {/* === FRONT LEG (long stride forward) === */}
      <path d="M66 138 Q68 154 68 170 Q74 172 80 170 Q80 154 84 138 Z" fill="url(#b-trousers)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M68 170 Q64 174 64 178 Q64 184 74 184 Q86 184 88 182 Q90 177 86 172 Q84 170 80 170 Z" fill="url(#b-shoe)" stroke="#1a1209" strokeWidth="1.2"/>
      <line x1="72" y1="182" x2="68" y2="188" stroke="#0E1E50" strokeWidth="2"/>
      <path d="M76 172 Q82 174 86 178" stroke="rgba(100,130,200,0.5)" strokeWidth="1" fill="none"/>

      {/* === NECK === */}
      <path d="M50 36 Q60 32 70 36 L72 50 Q60 54 48 50 Z" fill="url(#b-skin-body)" stroke="#1a1209" strokeWidth="1"/>

      {/* === HEAD === */}
      <path d="M40 22 Q38 8 54 6 Q72 4 82 14 Q90 22 88 32 Q86 40 80 46 Q72 52 60 50 Q48 50 42 42 Q36 34 40 22 Z" fill="url(#b-skin-face)" stroke="#1a1209" strokeWidth="1.5"/>
      <ellipse cx="75" cy="34" rx="6" ry="4" fill="#F4C898" opacity="0.3"/>
      {/* Ear */}
      <path d="M42 28 Q36 30 36 35 Q36 40 42 41 Q44 39 44 35 Q44 30 42 28 Z" fill="url(#b-skin-face)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M40 31 Q38 35 40 39" stroke="#C07848" strokeWidth="0.7" fill="none"/>
      {/* Gold earring */}
      <line x1="40" y1="40" x2="40" y2="50" stroke="#C9A227" strokeWidth="1.5"/>
      <path d="M37 50 Q40 55 43 50 Q41 48 40 50 Z" fill="#C9A227" stroke="#1a1209" strokeWidth="0.6"/>

      {/* === HAIR UPDO === */}
      <path d="M54 6 Q72 2 82 12 Q78 8 64 8 Q56 10 52 16 Z" fill="url(#b-hair)" stroke="#1a1209" strokeWidth="1"/>
      <ellipse cx="72" cy="10" rx="12" ry="9" fill="url(#b-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M46 18 Q52 10 62 8" stroke="#6A4828" strokeWidth="1.5" fill="none"/>
      {/* Gold hairpin */}
      <line x1="68" y1="8" x2="78" y2="14" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="78" cy="14" r="2" fill="#E8E0D0" stroke="#C9A227" strokeWidth="0.8"/>

      {/* === EYE === */}
      <path d="M62 26 Q70 22 78 26 Q76 31 70 32 Q62 31 62 26 Z" fill="white" stroke="#1a1209" strokeWidth="0.8"/>
      <circle cx="70" cy="28" r="4" fill="url(#b-iris)"/>
      <circle cx="70" cy="28" r="2" fill="#1A1209"/>
      <ellipse cx="68.5" cy="26.5" rx="1" ry="0.8" fill="white" opacity="0.9"/>
      {/* Strong brow */}
      <path d="M62 22 Q69 18 77 22" stroke="#2A1808" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M62 26 Q69 23 78 26" stroke="#1a1209" strokeWidth="1.5" fill="none"/>
      <line x1="63" y1="25" x2="62" y2="22" stroke="#1a1209" strokeWidth="0.8"/>
      <line x1="66" y1="23" x2="65" y2="20" stroke="#1a1209" strokeWidth="0.8"/>
      <line x1="70" y1="22" x2="70" y2="19" stroke="#1a1209" strokeWidth="0.8"/>
      <line x1="74" y1="23" x2="75" y2="20" stroke="#1a1209" strokeWidth="0.8"/>

      {/* === NOSE === */}
      <path d="M80 30 Q86 34 86 38 Q84 41 80 40" stroke="#C07848" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <circle cx="84" cy="40" r="1.5" fill="#C07848" opacity="0.4"/>

      {/* === LIPS === */}
      <path d="M72 44 Q76 42 80 43 Q78 46 76 47 Q72 46 72 44 Z" fill="#B83040" stroke="none"/>
      <path d="M70 43 Q73 40 76 42 Q79 40 82 43" stroke="#A02030" strokeWidth="1.2" fill="none"/>
      <path d="M70 43 Q74 48 82 43" fill="#C84050" fillOpacity="0.6" stroke="#A02030" strokeWidth="1"/>
      <ellipse cx="76" cy="46" rx="2.5" ry="1" fill="rgba(255,200,200,0.5)"/>

      {/* === RIGHT ARM (phone) === */}
      <path d="M76 46 Q88 38 98 30 Q102 26 104 22 Q100 18 96 20 Q92 24 88 32 Q78 42 72 46 Z" fill="url(#b-skin-body)" stroke="#1a1209" strokeWidth="1"/>
      {/* Phone */}
      <rect x="96" y="10" width="14" height="22" rx="2" fill="url(#b-phone)" stroke="#1a1209" strokeWidth="1.2"/>
      <rect x="98" y="13" width="10" height="14" rx="1" fill="#2E3A5A" opacity="0.8"/>
      <ellipse cx="103" cy="12" rx="2" ry="0.8" fill="#2A2A3E"/>

      {/* === LEFT ARM (bags) === */}
      <path d="M38 48 Q24 64 22 82 Q26 86 32 84 Q36 68 42 48 Z" fill="url(#b-skin-body)" stroke="#1a1209" strokeWidth="1"/>
      {/* Left hand */}
      <path d="M22 82 Q18 90 22 94 Q28 96 34 92 Q36 88 32 84 Z" fill="url(#b-skin-body)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M22 86 Q20 90 22 94" stroke="#1a1209" strokeWidth="0.7" fill="none"/>
      <path d="M26 86 Q25 91 27 94" stroke="#1a1209" strokeWidth="0.7" fill="none"/>
      <path d="M30 85 Q30 90 32 93" stroke="#1a1209" strokeWidth="0.7" fill="none"/>
    </svg>
  )
}

export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 175 132" width="175" height="132" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bn-skin" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#EEBC88"/>
          <stop offset="55%" stopColor="#E4A870"/>
          <stop offset="100%" stopColor="#C88050"/>
        </radialGradient>
        <linearGradient id="bn-skin-arm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E4A870"/>
          <stop offset="100%" stopColor="#C07840"/>
        </linearGradient>
        <linearGradient id="bn-helmet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F88040"/>
          <stop offset="55%" stopColor="#E06020"/>
          <stop offset="100%" stopColor="#B04000"/>
        </linearGradient>
        <linearGradient id="bn-jersey" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3A5CC5"/>
          <stop offset="50%" stopColor="#2D4AB5"/>
          <stop offset="100%" stopColor="#1D3280"/>
        </linearGradient>
        <linearGradient id="bn-side-stripe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F07030"/>
          <stop offset="100%" stopColor="#C04010"/>
        </linearGradient>
        <linearGradient id="bn-shorts" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A2A"/>
          <stop offset="100%" stopColor="#2A2A3A"/>
        </linearGradient>
        <linearGradient id="bn-frame" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#787888"/>
          <stop offset="50%" stopColor="#606878"/>
          <stop offset="100%" stopColor="#484858"/>
        </linearGradient>
        <radialGradient id="bn-rim" cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="#1A1A1A"/>
          <stop offset="90%" stopColor="#2A2A2A"/>
          <stop offset="100%" stopColor="#111111"/>
        </radialGradient>
        <radialGradient id="bn-chain-ring" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0C040"/>
          <stop offset="60%" stopColor="#C9A227"/>
          <stop offset="100%" stopColor="#A07818"/>
        </radialGradient>
        <linearGradient id="bn-saddle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A07050"/>
          <stop offset="60%" stopColor="#8B5E3C"/>
          <stop offset="100%" stopColor="#6B3E1C"/>
        </linearGradient>
        <linearGradient id="bn-bar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D0D8E0"/>
          <stop offset="50%" stopColor="#A0A8B0"/>
          <stop offset="100%" stopColor="#707880"/>
        </linearGradient>
        <linearGradient id="bn-shoe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A2A"/>
          <stop offset="100%" stopColor="#0A0A18"/>
        </linearGradient>
      </defs>

      {/* ===== BICYCLE ===== */}

      {/* REAR WHEEL */}
      <circle cx="32" cy="100" r="26" fill="url(#bn-rim)" stroke="#111111" strokeWidth="1.5"/>
      <circle cx="32" cy="100" r="20" fill="none" stroke="#333333" strokeWidth="1"/>
      {/* Rear spokes */}
      <line x1="32" y1="100" x2="32" y2="74" stroke="#888888" strokeWidth="0.8"/>
      <line x1="32" y1="100" x2="32" y2="126" stroke="#888888" strokeWidth="0.8"/>
      <line x1="32" y1="100" x2="6" y2="100" stroke="#888888" strokeWidth="0.8"/>
      <line x1="32" y1="100" x2="58" y2="100" stroke="#888888" strokeWidth="0.8"/>
      <line x1="32" y1="100" x2="14" y2="82" stroke="#888888" strokeWidth="0.8"/>
      <line x1="32" y1="100" x2="50" y2="118" stroke="#888888" strokeWidth="0.8"/>
      <line x1="32" y1="100" x2="50" y2="82" stroke="#888888" strokeWidth="0.8"/>
      <line x1="32" y1="100" x2="14" y2="118" stroke="#888888" strokeWidth="0.8"/>
      {/* Rear hub */}
      <circle cx="32" cy="100" r="5" fill="#222222" stroke="#111" strokeWidth="1"/>
      <circle cx="32" cy="100" r="2" fill="#111111"/>

      {/* FRONT WHEEL */}
      <circle cx="126" cy="90" r="24" fill="url(#bn-rim)" stroke="#111111" strokeWidth="1.5"/>
      <circle cx="126" cy="90" r="18" fill="none" stroke="#333333" strokeWidth="1"/>
      {/* Front spokes */}
      <line x1="126" y1="90" x2="126" y2="66" stroke="#888888" strokeWidth="0.8"/>
      <line x1="126" y1="90" x2="126" y2="114" stroke="#888888" strokeWidth="0.8"/>
      <line x1="126" y1="90" x2="102" y2="90" stroke="#888888" strokeWidth="0.8"/>
      <line x1="126" y1="90" x2="150" y2="90" stroke="#888888" strokeWidth="0.8"/>
      <line x1="126" y1="90" x2="109" y2="73" stroke="#888888" strokeWidth="0.8"/>
      <line x1="126" y1="90" x2="143" y2="107" stroke="#888888" strokeWidth="0.8"/>
      <line x1="126" y1="90" x2="143" y2="73" stroke="#888888" strokeWidth="0.8"/>
      <line x1="126" y1="90" x2="109" y2="107" stroke="#888888" strokeWidth="0.8"/>
      {/* Front hub */}
      <circle cx="126" cy="90" r="4" fill="#222222" stroke="#111" strokeWidth="1"/>
      <circle cx="126" cy="90" r="2" fill="#111111"/>

      {/* CHAIN STAY */}
      <path d="M32 100 Q50 96 66 96" stroke="#606878" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M32 100 Q50 96 66 96" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinecap="round" fill="none"/>

      {/* CHAINRING */}
      <circle cx="66" cy="96" r="13" fill="url(#bn-chain-ring)" stroke="#806010" strokeWidth="1.2"/>
      <circle cx="66" cy="96" r="9" fill="#B08020" stroke="#806010" strokeWidth="0.8"/>
      <circle cx="66" cy="96" r="4" fill="#8A6018" stroke="#604010" strokeWidth="0.7"/>
      {/* Tooth bumps */}
      <circle cx="66" cy="83" r="2" fill="#C9A227" stroke="#806010" strokeWidth="0.5"/>
      <circle cx="66" cy="109" r="2" fill="#C9A227" stroke="#806010" strokeWidth="0.5"/>
      <circle cx="53" cy="96" r="2" fill="#C9A227" stroke="#806010" strokeWidth="0.5"/>
      <circle cx="79" cy="96" r="2" fill="#C9A227" stroke="#806010" strokeWidth="0.5"/>
      <circle cx="57" cy="87" r="2" fill="#C9A227" stroke="#806010" strokeWidth="0.5"/>
      <circle cx="75" cy="105" r="2" fill="#C9A227" stroke="#806010" strokeWidth="0.5"/>
      <circle cx="75" cy="87" r="2" fill="#C9A227" stroke="#806010" strokeWidth="0.5"/>
      <circle cx="57" cy="105" r="2" fill="#C9A227" stroke="#806010" strokeWidth="0.5"/>

      {/* CHAIN */}
      <path d="M66 104 Q50 108 32 104" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
      {/* Rear cog */}
      <circle cx="32" cy="100" r="7" fill="#2A2A2A" stroke="#111" strokeWidth="0.8"/>

      {/* SEAT TUBE */}
      <path d="M66 96 L60 62" stroke="#606878" strokeWidth="5" strokeLinecap="round"/>
      <path d="M66 96 L60 62" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinecap="round"/>

      {/* SEAT POST */}
      <line x1="60" y1="62" x2="58" y2="50" stroke="#505060" strokeWidth="3" strokeLinecap="round"/>

      {/* SADDLE */}
      <path d="M48 52 Q58 48 70 50 Q72 52 70 55 Q58 57 48 55 Q46 54 48 52 Z" fill="url(#bn-saddle)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M50 52 Q60 50 68 52" stroke="#7A5030" strokeWidth="0.7" fill="none" opacity="0.6"/>

      {/* TOP TUBE */}
      <path d="M60 62 L98 56" stroke="#606878" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M60 62 L98 56" stroke="rgba(255,255,255,0.18)" strokeWidth="1.8" strokeLinecap="round"/>

      {/* HEAD TUBE */}
      <path d="M98 56 L104 72" stroke="#606878" strokeWidth="6" strokeLinecap="round"/>
      <path d="M98 56 L104 72" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round"/>

      {/* DOWN TUBE */}
      <path d="M98 56 L66 96" stroke="#606878" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M98 56 L66 96" stroke="rgba(255,255,255,0.15)" strokeWidth="1.8" strokeLinecap="round"/>

      {/* FORK */}
      <path d="M104 72 L126 90" stroke="#606878" strokeWidth="4" strokeLinecap="round"/>
      <path d="M104 72 L126 90" stroke="rgba(255,255,255,0.18)" strokeWidth="1.6" strokeLinecap="round"/>

      {/* STEM */}
      <line x1="100" y1="54" x2="100" y2="44" stroke="#909090" strokeWidth="4" strokeLinecap="round"/>

      {/* DROP HANDLEBARS */}
      <path d="M100 44 Q110 42 116 46 Q120 50 118 58 Q116 62 112 62" stroke="url(#bn-bar)" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M100 44 Q90 42 86 48 Q84 52 86 58 Q88 62 92 62" stroke="url(#bn-bar)" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Bar tape ends */}
      <circle cx="112" cy="62" r="3" fill="#1A1A2A" stroke="#111" strokeWidth="0.8"/>
      <circle cx="92" cy="62" r="3" fill="#1A1A2A" stroke="#111" strokeWidth="0.8"/>
      {/* Bar highlight */}
      <path d="M100 44 Q110 42 116 46" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none"/>

      {/* PEDALS */}
      <rect x="60" y="106" width="14" height="5" rx="1.5" fill="#404040" stroke="#1a1209" strokeWidth="0.8"/>
      <rect x="60" y="82" width="14" height="5" rx="1.5" fill="#404040" stroke="#1a1209" strokeWidth="0.8"/>

      {/* ===== RIGHT LEG (down, pushing pedal) ===== */}
      {/* Thigh in shorts */}
      <path d="M74 70 Q78 88 70 110 Q76 114 84 112 Q88 90 86 70 Z" fill="url(#bn-shorts)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Quad muscle highlight */}
      <path d="M76 72 Q80 90 74 108" stroke="rgba(255,255,255,0.12)" strokeWidth="5" fill="none"/>
      {/* Knee */}
      <ellipse cx="78" cy="111" rx="7" ry="5" fill="url(#bn-skin)" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Calf */}
      <path d="M70 110 Q66 120 68 130 Q74 132 80 130 Q80 120 84 110 Z" fill="url(#bn-skin)" stroke="#1a1209" strokeWidth="1"/>
      {/* Right shoe on pedal */}
      <path d="M68 128 Q60 130 58 132 Q60 132 76 132 Q80 132 80 130 Q80 128 76 128 Z" fill="url(#bn-shoe)" stroke="#1a1209" strokeWidth="1"/>
      <rect x="62" y="130" width="10" height="3" rx="1" fill="#606060"/>

      {/* ===== LEFT LEG (up, pulling) ===== */}
      {/* Thigh going back-up */}
      <path d="M78 72 Q70 62 64 54 Q60 50 58 52 Q60 56 64 58 Q70 66 74 72 Z" fill="url(#bn-shorts)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Knee upper */}
      <ellipse cx="62" cy="54" rx="6" ry="5" fill="url(#bn-skin)" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Calf going up */}
      <path d="M58 54 Q60 46 64 42 Q68 38 72 40 Q70 44 66 46 Q62 50 62 54 Z" fill="url(#bn-skin)" stroke="#1a1209" strokeWidth="1"/>
      {/* Left shoe up */}
      <path d="M64 40 Q60 36 58 34 Q54 32 56 36 Q58 40 62 42 Q66 44 70 42 Q70 40 68 40 Z" fill="url(#bn-shoe)" stroke="#1a1209" strokeWidth="1"/>
      <rect x="57" y="37" width="8" height="3" rx="1" fill="#606060" transform="rotate(-20 57 37)"/>

      {/* ===== JERSEY BODY (leaning forward) ===== */}
      <path d="M60 52 Q66 44 84 46 Q92 48 98 56 Q96 72 90 80 Q82 84 74 82 Q64 78 58 70 Q54 62 60 52 Z" fill="url(#bn-jersey)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Jersey right side shadow */}
      <path d="M90 56 Q98 58 98 70 Q96 78 90 80" fill="#1D3280" opacity="0.5" stroke="none"/>
      {/* Orange side stripe left */}
      <path d="M62 54 Q58 62 60 72 Q64 76 68 74 Q66 62 68 52 Z" fill="url(#bn-side-stripe)" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Orange side stripe right */}
      <path d="M92 56 Q96 66 94 76 Q90 80 86 78 Q88 66 88 54 Z" fill="url(#bn-side-stripe)" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Race number */}
      <rect x="72" y="56" width="20" height="16" rx="2" fill="#F5EDDC" stroke="#1a1209" strokeWidth="0.8"/>
      <text x="74" y="68" fontFamily="Georgia, serif" fontWeight="bold" fontSize="10" fill="#1a1209">42</text>
      {/* Sleeve cuffs */}
      <path d="M62 52 Q56 50 52 54 Q50 58 54 60 Q56 58 62 56 Z" fill="#1D3280" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M96 58 Q102 56 106 58 Q108 62 104 64 Q100 62 94 62 Z" fill="#1D3280" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Sleeves */}
      <path d="M60 52 Q52 48 48 54 Q46 60 52 64 Q56 62 62 56 Z" fill="url(#bn-jersey)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M96 56 Q104 52 108 56 Q110 62 106 66 Q100 64 94 60 Z" fill="url(#bn-jersey)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ===== ARMS ===== */}
      {/* Left arm to left drop bar */}
      <path d="M50 64 Q44 66 40 70 Q38 74 40 78 Q44 76 46 74 Q48 68 54 64 Z" fill="url(#bn-skin-arm)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M40 76 Q38 80 40 84 Q44 86 48 84 Q50 80 48 76 Z" fill="url(#bn-skin-arm)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M40 78 Q38 82 40 84" stroke="#1a1209" strokeWidth="0.6" fill="none"/>
      <path d="M43 78 Q42 83 44 84" stroke="#1a1209" strokeWidth="0.6" fill="none"/>

      {/* Right arm to right drop bar */}
      <path d="M102 62 Q108 64 112 68 Q114 72 112 76 Q108 74 104 70 Q100 66 96 62 Z" fill="url(#bn-skin-arm)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M112 74 Q114 78 112 82 Q108 84 104 82 Q102 78 104 74 Z" fill="url(#bn-skin-arm)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M112 76 Q114 80 112 82" stroke="#1a1209" strokeWidth="0.6" fill="none"/>

      {/* ===== NECK ===== */}
      <path d="M68 46 Q76 42 82 44 L84 54 Q76 58 68 56 Z" fill="url(#bn-skin)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M70 48 Q72 44 74 46" stroke="#B87040" strokeWidth="0.8" fill="none" opacity="0.6"/>

      {/* ===== HEAD (leaning forward) ===== */}
      <path d="M64 26 Q62 14 72 10 Q86 6 96 14 Q104 20 102 30 Q100 38 94 42 Q86 48 76 46 Q66 44 62 36 Q60 30 64 26 Z" fill="url(#bn-skin)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Five-o-clock shadow */}
      <path d="M64 34 Q66 42 74 46 Q82 48 90 44 Q96 40 100 34" fill="none" stroke="rgba(80,50,20,0.22)" strokeWidth="5"/>

      {/* === HELMET === */}
      <path d="M64 26 Q62 14 72 10 Q86 6 98 12 Q106 16 104 26 Q102 28 96 28 Q88 22 76 22 Q68 24 64 26 Z" fill="url(#bn-helmet)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Helmet vents */}
      <rect x="73" y="10" width="6" height="10" rx="2" fill="#A03000" opacity="0.7"/>
      <rect x="81" y="9" width="6" height="11" rx="2" fill="#A03000" opacity="0.7"/>
      <rect x="89" y="10" width="5" height="10" rx="2" fill="#A03000" opacity="0.7"/>
      {/* Helmet edge */}
      <path d="M64 26 Q68 24 76 22 Q88 22 96 28 Q102 28 104 26" stroke="#C05010" strokeWidth="1.5" fill="none"/>
      {/* Chin strap */}
      <path d="M64 26 Q62 30 64 34 Q66 36 68 36" stroke="#C05010" strokeWidth="1.5" fill="none"/>

      {/* === SUNGLASSES === */}
      <path d="M64 28 Q74 24 88 28 Q90 32 88 36 Q78 40 68 38 Q62 36 62 32 Q62 28 64 28 Z" fill="#0A1830" stroke="#1a1209" strokeWidth="1"/>
      <path d="M66 28 Q72 26 78 28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" fill="none"/>
      <path d="M62 30 Q58 28 56 26" stroke="#0A1830" strokeWidth="1.5" fill="none"/>

      {/* === HANDLEBAR MOUSTACHE === */}
      <path d="M76 40 Q72 38 68 40 Q66 42 68 44 Q72 44 76 42 Z" fill="#2A1E12" stroke="#1a1209" strokeWidth="0.7"/>
      <path d="M76 40 Q82 38 86 36 Q90 34 92 36 Q90 40 86 42 Q82 42 76 42 Z" fill="#2A1E12" stroke="#1a1209" strokeWidth="0.7"/>
      <ellipse cx="76" cy="40" rx="3" ry="2" fill="#2A1E12"/>

      {/* === CIGARETTE === */}
      <rect x="90" y="40" width="10" height="3" rx="1" fill="white" stroke="#CCCCCC" strokeWidth="0.5"/>
      <ellipse cx="100" cy="41.5" rx="2" ry="1.5" fill="#E03010"/>
      <ellipse cx="100" cy="41.5" rx="1" ry="0.8" fill="#FF6030" opacity="0.8"/>
      {/* Smoke */}
      <path d="M100 40 Q102 36 100 32" stroke="#D0D0D0" strokeWidth="0.8" fill="none" opacity="0.6"/>
      <path d="M101 40 Q104 34 102 28" stroke="#D0D0D0" strokeWidth="0.7" fill="none" opacity="0.5"/>
      <path d="M99 40 Q96 35 98 30" stroke="#C0C0C0" strokeWidth="0.6" fill="none" opacity="0.4"/>
    </svg>
  )
}

export const CHARACTERS = {
  karl:     { id: 'karl',     name: 'Little Karl',    tagline: 'Safe & away from traffic',        routeType: 'safest',  mode: 'walk', color: '#2563eb', cardBg: '#dbeafe', Avatar: KarlAvatar,     voice: (dist, time) => `Karl found a safe path! No scary roads. ${dist} km · ${time} min` },
  erna:     { id: 'erna',     name: 'Aunt Erna',       tagline: 'Slow strolls with her Pomeranian', routeType: 'nicest',  mode: 'walk', color: '#16a34a', cardBg: '#bbf7d0', Avatar: ErnaAvatar,     voice: (dist, time) => `Erna took the scenic way. Her Pomeranian approves. ${time} min of bliss.` },
  beatrice: { id: 'beatrice', name: 'Busy Beatrice',   tagline: 'No time to waste',                routeType: 'fastest', mode: 'walk', color: '#d97706', cardBg: '#fde68a', Avatar: BeatriceAvatar, voice: (dist, time) => `Beatrice approves. ${dist} km, ${time} min. Straight to the point.` },
  benedikt: { id: 'benedikt', name: 'Biker Benedikt',  tagline: 'Always on his fixie',             routeType: 'bike',    mode: 'bike', color: '#ea580c', cardBg: '#fed7aa', Avatar: BenediktAvatar, voice: (dist, time) => `Benedikt mapped his route. ${dist} km. Helmet optional.` },
}

export const CHARACTER_ORDER = ['karl', 'erna', 'beatrice', 'benedikt']
