// Character illustrations — realistic portrait style

// ─────────────────────────────────────────────────────────────────────────────
// LITTLE LUIS — 8yo, chubby cheeks, messy blonde hair, backwards cap, ice cream
// ─────────────────────────────────────────────────────────────────────────────
export function LuisAvatar() {
  return (
    <svg viewBox="0 0 112 192" width="112" height="192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lu-face" cx="44%" cy="38%" r="58%">
          <stop offset="0%"   stopColor="#FCDDB8"/>
          <stop offset="55%"  stopColor="#F0B87C"/>
          <stop offset="100%" stopColor="#D8945A"/>
        </radialGradient>
        <linearGradient id="lu-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#F4C898"/>
          <stop offset="100%" stopColor="#D09060"/>
        </linearGradient>
        <radialGradient id="lu-blush" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#EE8888" stopOpacity="0.52"/>
          <stop offset="100%" stopColor="#EE8888" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="lu-hair" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%"   stopColor="#EAC85A"/>
          <stop offset="60%"  stopColor="#CCA032"/>
          <stop offset="100%" stopColor="#A07818"/>
        </linearGradient>
        <linearGradient id="lu-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#D03020"/>
          <stop offset="100%" stopColor="#8A1810"/>
        </linearGradient>
        <linearGradient id="lu-capbrim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#BB2018"/>
          <stop offset="100%" stopColor="#6A0E08"/>
        </linearGradient>
        <radialGradient id="lu-iris" cx="34%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#A07440"/>
          <stop offset="55%"  stopColor="#7A4820"/>
          <stop offset="100%" stopColor="#3A200A"/>
        </radialGradient>
        <linearGradient id="lu-shirt" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F8CA32"/>
          <stop offset="50%"  stopColor="#EEB018"/>
          <stop offset="100%" stopColor="#C88808"/>
        </linearGradient>
        <linearGradient id="lu-shorts" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#3A6ABE"/>
          <stop offset="100%" stopColor="#1A3F8E"/>
        </linearGradient>
        <linearGradient id="lu-pack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#5EB050"/>
          <stop offset="60%"  stopColor="#388830"/>
          <stop offset="100%" stopColor="#266818"/>
        </linearGradient>
        <linearGradient id="lu-shoe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFFFFF"/>
          <stop offset="100%" stopColor="#CCD6E6"/>
        </linearGradient>
        <radialGradient id="lu-scoop" cx="36%" cy="34%" r="64%">
          <stop offset="0%"   stopColor="#FDD8D4"/>
          <stop offset="50%"  stopColor="#F0ACA8"/>
          <stop offset="100%" stopColor="#D87880"/>
        </radialGradient>
        <linearGradient id="lu-cone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#C09050"/>
          <stop offset="100%" stopColor="#865820"/>
        </linearGradient>
      </defs>

      {/* ── BACKPACK ── */}
      <rect x="5" y="75" width="22" height="36" rx="5" fill="url(#lu-pack)" stroke="#1a1209" strokeWidth="1.5"/>
      <rect x="7" y="87" width="18" height="14" rx="3" fill="#2A7020" stroke="#1a1209" strokeWidth="1"/>
      <line x1="8" y1="87" x2="24" y2="87" stroke="#1a1209" strokeWidth="0.7" strokeDasharray="2 2"/>
      <path d="M20 75 Q26 72 28 81" stroke="#286820" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* ── BACK ARM ── */}
      <path d="M25 82 Q14 96 12 110 Q17 112 22 110 Q26 97 34 83 Z" fill="url(#lu-body)" stroke="#1a1209" strokeWidth="1"/>
      <ellipse cx="14" cy="111" rx="5" ry="4" fill="url(#lu-body)" stroke="#1a1209" strokeWidth="1"/>

      {/* ── LEGS ── */}
      <path d="M38 120 Q32 144 30 164 Q36 167 42 165 Q44 143 50 121 Z" fill="url(#lu-shorts)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M30 162 Q24 167 22 171 Q24 175 34 175 Q46 175 48 173 Q50 169 46 165 Q44 163 42 165 Z" fill="url(#lu-shoe)" stroke="#1a1209" strokeWidth="1.2"/>
      <rect x="22" y="171" width="26" height="4" rx="2" fill="#B8C8D8"/>
      <path d="M54 118 Q58 142 56 164 Q62 166 68 165 Q68 142 72 120 Z" fill="url(#lu-shorts)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M56 162 Q52 167 50 171 Q52 175 62 175 Q74 175 76 173 Q78 169 74 165 Q72 163 68 165 Z" fill="url(#lu-shoe)" stroke="#1a1209" strokeWidth="1.2"/>
      <rect x="50" y="171" width="28" height="4" rx="2" fill="#B8C8D8"/>

      {/* ── BODY / T-SHIRT ── */}
      <path d="M26 78 Q36 74 52 74 Q66 74 80 78 L82 120 Q66 126 52 126 Q36 126 28 122 Z" fill="url(#lu-shirt)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M44 74 Q52 70 60 74 Q56 78 52 78 Q48 78 44 74 Z" fill="url(#lu-shirt)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M26 78 Q16 82 12 92 Q17 96 25 92 Q30 86 36 78 Z" fill="url(#lu-shirt)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M80 78 Q90 82 90 92 Q86 96 78 92 Q76 86 72 78 Z" fill="url(#lu-shirt)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── SHORTS ── */}
      <path d="M28 120 Q52 128 82 120 L84 136 Q74 142 66 140 L64 126 L58 126 L56 140 Q44 142 36 138 Z" fill="url(#lu-shorts)" stroke="#1a1209" strokeWidth="1.5"/>

      {/* ── RIGHT ARM + HAND (ice cream) ── */}
      <path d="M74 82 Q84 70 88 60 Q92 52 94 48 Q90 44 86 48 Q82 56 74 68 Q66 80 62 84 Z" fill="url(#lu-body)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M92 44 Q98 38 102 42 Q102 48 98 50 Q94 50 92 46 Z" fill="url(#lu-body)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M94 41 Q96 37 98 39" stroke="#1a1209" strokeWidth="0.6" fill="none"/>
      <path d="M98 40 Q100 36 102 38" stroke="#1a1209" strokeWidth="0.6" fill="none"/>

      {/* ── ICE CREAM ── */}
      <path d="M96 48 L100 66 L108 66 L104 48 Z" fill="url(#lu-cone)" stroke="#1a1209" strokeWidth="1.2"/>
      <line x1="97" y1="52" x2="107" y2="52" stroke="#7A4820" strokeWidth="0.5"/>
      <line x1="97" y1="57" x2="107" y2="57" stroke="#7A4820" strokeWidth="0.5"/>
      <line x1="98" y1="62" x2="107" y2="62" stroke="#7A4820" strokeWidth="0.5"/>
      <ellipse cx="102" cy="43" rx="9" ry="8" fill="url(#lu-scoop)" stroke="#1a1209" strokeWidth="1.2"/>
      <ellipse cx="99" cy="40" rx="3.5" ry="2.5" fill="#FDE8E8" opacity="0.55"/>
      <path d="M108 49 Q109 55 108 61" stroke="#F0A0A0" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Cherry */}
      <circle cx="102" cy="35" r="3" fill="#C02828" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M102 32 Q104 29 106 31" stroke="#3A6010" strokeWidth="1" fill="none"/>
      {/* Sprinkles */}
      <rect x="98" y="39" width="4"   height="1.5" rx="0.7" fill="#F04040" transform="rotate(-20 98 39)"/>
      <rect x="104" y="37" width="4"  height="1.5" rx="0.7" fill="#4090E0" transform="rotate(18 104 37)"/>
      <rect x="101" y="43" width="3.5" height="1.5" rx="0.7" fill="#50C040" transform="rotate(-35 101 43)"/>
      <rect x="106" y="41" width="3.5" height="1.5" rx="0.7" fill="#E0C030" transform="rotate(10 106 41)"/>

      {/* ── NECK ── */}
      <path d="M42 64 Q52 61 62 64 L64 76 Q52 79 40 76 Z" fill="url(#lu-face)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── HEAD — big round chubby child face ── */}
      <path d="M22 37 Q20 16 40 9 Q52 4 66 9 Q82 15 84 31 Q86 47 76 58 Q64 68 52 68 Q36 68 26 56 Q18 46 22 37 Z" fill="url(#lu-face)" stroke="#1a1209" strokeWidth="1.8"/>
      {/* Chubby cheeks */}
      <ellipse cx="74" cy="46" rx="11" ry="9" fill="url(#lu-blush)"/>
      <ellipse cx="28" cy="46" rx="10" ry="8" fill="url(#lu-blush)"/>
      {/* Right ear */}
      <path d="M82 34 Q90 34 90 43 Q90 52 82 52 Q80 50 80 43 Q80 36 82 34 Z" fill="url(#lu-face)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M84 38 Q86 43 84 48" stroke="#C08050" strokeWidth="0.8" fill="none"/>
      {/* Left ear */}
      <path d="M24 34 Q16 34 16 43 Q16 52 24 52 Q26 50 26 43 Q26 36 24 34 Z" fill="url(#lu-face)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── HAIR (messy blonde under/around cap) ── */}
      <path d="M24 26 Q20 18 26 12 Q32 8 36 14 Q30 18 26 26 Z" fill="url(#lu-hair)" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M80 22 Q86 14 82 10 Q76 6 72 12 Q78 16 78 22 Z" fill="url(#lu-hair)" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M28 22 Q36 14 44 10 Q52 7 62 10 Q70 14 76 20 Z" fill="url(#lu-hair)"/>
      {/* Front tufts sticking out under brim */}
      <path d="M34 10 Q32 4 38 5 Q40 1 44 5 Q47 1 51 5 Q54 1 58 5 Q62 2 66 7 Z" fill="url(#lu-hair)" stroke="#1a1209" strokeWidth="0.8"/>

      {/* ── BACKWARDS CAP ── */}
      <path d="M22 32 Q20 12 40 7 Q52 3 66 7 Q82 12 84 30 Q76 34 52 34 Q28 34 22 32 Z" fill="url(#lu-cap)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Brim facing backwards (viewer's left) */}
      <path d="M22 32 Q14 30 10 35 Q12 39 22 37 Q24 35 22 32 Z" fill="url(#lu-capbrim)" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="52" cy="7" r="2.5" fill="#9A1808" stroke="#1a1209" strokeWidth="0.7"/>
      <path d="M24 30 Q52 32 82 30" stroke="rgba(255,255,255,0.14)" strokeWidth="2.5" fill="none"/>
      {/* Cap logo placeholder */}
      <rect x="44" y="12" width="16" height="10" rx="1.5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6"/>

      {/* ── EYES ── */}
      {/* Left */}
      <path d="M28 38 Q37 33 44 38 Q42 45 38 46 Q28 45 28 38 Z" fill="white" stroke="#1a1209" strokeWidth="0.9"/>
      <circle cx="36" cy="41" r="4.2" fill="url(#lu-iris)"/>
      <circle cx="36" cy="41" r="2.4" fill="#1a1209"/>
      <ellipse cx="34.5" cy="39.5" rx="1.3" ry="1" fill="white" opacity="0.9"/>
      <line x1="28" y1="37" x2="27" y2="34" stroke="#1a1209" strokeWidth="0.9"/>
      <line x1="32" y1="34" x2="31" y2="31" stroke="#1a1209" strokeWidth="0.9"/>
      <line x1="36" y1="33" x2="36" y2="30" stroke="#1a1209" strokeWidth="0.9"/>
      <line x1="40" y1="34" x2="42" y2="31" stroke="#1a1209" strokeWidth="0.9"/>
      {/* Right */}
      <path d="M62 36 Q71 31 78 36 Q76 43 72 44 Q62 43 62 36 Z" fill="white" stroke="#1a1209" strokeWidth="0.9"/>
      <circle cx="70" cy="39" r="4.2" fill="url(#lu-iris)"/>
      <circle cx="70" cy="39" r="2.4" fill="#1a1209"/>
      <ellipse cx="68.5" cy="37.5" rx="1.3" ry="1" fill="white" opacity="0.9"/>
      <line x1="62" y1="35" x2="61" y2="32" stroke="#1a1209" strokeWidth="0.9"/>
      <line x1="66" y1="32" x2="65" y2="29" stroke="#1a1209" strokeWidth="0.9"/>
      <line x1="70" y1="31" x2="70" y2="28" stroke="#1a1209" strokeWidth="0.9"/>
      <line x1="74" y1="32" x2="75" y2="29" stroke="#1a1209" strokeWidth="0.9"/>

      {/* ── EYEBROWS (soft, child-like) ── */}
      <path d="M26 34 Q36 29 44 33" stroke="#B08030" strokeWidth="1.7" fill="none" strokeLinecap="round"/>
      <path d="M62 32 Q70 27 78 31" stroke="#B08030" strokeWidth="1.7" fill="none" strokeLinecap="round"/>

      {/* ── NOSE (tiny button) ── */}
      <path d="M54 50 Q58 52 60 54 Q57 57 54 56 Q50 57 48 54 Q50 52 54 50 Z" fill="#C88050" opacity="0.4"/>
      <circle cx="50" cy="55" r="2" fill="#C07848" opacity="0.48"/>
      <circle cx="57" cy="55" r="2" fill="#C07848" opacity="0.48"/>

      {/* ── MOUTH (huge happy grin) ── */}
      <path d="M34 58 Q52 70 72 58" fill="#C07070" fillOpacity="0.3"/>
      <path d="M34 58 Q52 66 72 58 Q52 62 34 58 Z" fill="white" opacity="0.65"/>
      <path d="M34 58 Q44 54 52 56 Q60 54 72 58" stroke="#1a1209" strokeWidth="1.3" fill="none"/>
      <path d="M34 58 Q52 70 72 58" stroke="#B06060" strokeWidth="1.8" fill="none"/>
      {/* Dimples */}
      <circle cx="28" cy="55" r="2.5" fill="#D89070" opacity="0.3"/>
      <circle cx="75" cy="54" r="2.5" fill="#D89070" opacity="0.3"/>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// AUNT ANNE — 70yo, glasses, pearl necklace, pink polka-dot dress, Pomeranian
// ─────────────────────────────────────────────────────────────────────────────
export function AnneAvatar() {
  return (
    <svg viewBox="0 0 122 192" width="122" height="192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="an-face" cx="46%" cy="40%" r="57%">
          <stop offset="0%"   stopColor="#F8D4AA"/>
          <stop offset="55%"  stopColor="#E8AC78"/>
          <stop offset="100%" stopColor="#C88858"/>
        </radialGradient>
        <linearGradient id="an-arm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#E8B080"/>
          <stop offset="100%" stopColor="#C08858"/>
        </linearGradient>
        <linearGradient id="an-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#F2F0F2"/>
          <stop offset="50%"  stopColor="#D8D4D8"/>
          <stop offset="100%" stopColor="#BAB6BA"/>
        </linearGradient>
        <linearGradient id="an-glasses" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#C8A870"/>
          <stop offset="100%" stopColor="#907040"/>
        </linearGradient>
        <linearGradient id="an-dress" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F0BAC8"/>
          <stop offset="50%"  stopColor="#E8AABB"/>
          <stop offset="100%" stopColor="#D08A9A"/>
        </linearGradient>
        <linearGradient id="an-dressshadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(0,0,0,0)"/>
          <stop offset="100%" stopColor="rgba(80,30,50,0.2)"/>
        </linearGradient>
        <radialGradient id="an-iris" cx="36%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#94AAC2"/>
          <stop offset="55%"  stopColor="#6A8AA0"/>
          <stop offset="100%" stopColor="#486A80"/>
        </radialGradient>
        <radialGradient id="an-dog" cx="38%" cy="34%" r="65%">
          <stop offset="0%"   stopColor="#FDF4E6"/>
          <stop offset="55%"  stopColor="#F0DCB4"/>
          <stop offset="100%" stopColor="#D4B87C"/>
        </radialGradient>
        <linearGradient id="an-shoe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#D4A8B2"/>
          <stop offset="100%" stopColor="#A0788A"/>
        </linearGradient>
      </defs>

      {/* ── LEFT ARM HOLDING DOG ── */}
      <path d="M26 84 Q20 98 20 114 Q24 116 30 114 Q32 100 36 84 Z" fill="url(#an-arm)" stroke="#1a1209" strokeWidth="1"/>
      {/* Forearm bent, cradling dog */}
      <path d="M20 114 Q18 124 24 128 Q30 130 38 124 Q40 118 34 114 Z" fill="url(#an-arm)" stroke="#1a1209" strokeWidth="1"/>

      {/* ── POMERANIAN (held in arm) ── */}
      {/* Rear body puff */}
      <ellipse cx="52" cy="118" rx="18" ry="14" fill="url(#an-dog)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Main body */}
      <ellipse cx="36" cy="118" rx="16" ry="14" fill="url(#an-dog)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Chest fluff */}
      <ellipse cx="24" cy="118" rx="10" ry="10" fill="#FDFAF0" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Curly tail */}
      <path d="M66 114 Q76 106 74 116 Q72 124 62 124" fill="url(#an-dog)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Head */}
      <ellipse cx="20" cy="106" rx="13" ry="12" fill="url(#an-dog)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Ears */}
      <path d="M12 100 Q8 92 14 94 Q16 100 14 104 Z" fill="#E8C678" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M26 100 Q32 93 34 97 Q32 102 28 104 Z" fill="#E8C678" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M12 100 Q10 96 13 95" stroke="#F0B0B0" strokeWidth="0.6" fill="none" opacity="0.6"/>
      {/* Eye */}
      <circle cx="16" cy="106" r="3" fill="#1a1209" stroke="#1a1209" strokeWidth="0.5"/>
      <circle cx="15" cy="105" r="0.9" fill="white"/>
      {/* Nose */}
      <ellipse cx="10" cy="110" rx="2.5" ry="1.5" fill="#1a1209"/>
      {/* Tongue */}
      <path d="M8 112 Q10 116 12 112" fill="#E87878" stroke="#1a1209" strokeWidth="0.5"/>

      {/* ── DRESS SKIRT ── */}
      <path d="M30 110 Q24 142 22 174 Q36 178 62 178 Q88 178 98 174 Q98 142 92 110 Z" fill="url(#an-dress)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M72 110 Q82 142 98 174 Q94 144 92 110 Z" fill="url(#an-dressshadow)"/>
      {/* Polka dots on skirt */}
      <circle cx="38" cy="128" r="3" fill="white" opacity="0.7"/>
      <circle cx="54" cy="136" r="3" fill="white" opacity="0.7"/>
      <circle cx="70" cy="126" r="3" fill="white" opacity="0.7"/>
      <circle cx="84" cy="138" r="3" fill="white" opacity="0.7"/>
      <circle cx="44" cy="148" r="3" fill="white" opacity="0.7"/>
      <circle cx="62" cy="152" r="3" fill="white" opacity="0.7"/>
      <circle cx="78" cy="144" r="3" fill="white" opacity="0.7"/>
      <circle cx="34" cy="158" r="3" fill="white" opacity="0.7"/>
      <circle cx="52" cy="162" r="3" fill="white" opacity="0.7"/>
      <circle cx="70" cy="162" r="3" fill="white" opacity="0.7"/>
      <circle cx="86" cy="158" r="3" fill="white" opacity="0.7"/>
      <circle cx="42" cy="170" r="3" fill="white" opacity="0.7"/>
      <circle cx="66" cy="170" r="3" fill="white" opacity="0.7"/>

      {/* ── DRESS BODICE ── */}
      <path d="M34 78 Q46 74 62 74 Q78 74 90 78 L92 110 Q76 116 62 116 Q48 116 32 110 Z" fill="url(#an-dress)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M76 78 L90 78 L92 110 Q88 112 84 110 Z" fill="url(#an-dressshadow)"/>
      {/* Dots on bodice */}
      <circle cx="46" cy="86" r="2.5" fill="white" opacity="0.7"/>
      <circle cx="60" cy="90" r="2.5" fill="white" opacity="0.7"/>
      <circle cx="74" cy="84" r="2.5" fill="white" opacity="0.7"/>
      <circle cx="52" cy="100" r="2.5" fill="white" opacity="0.7"/>
      <circle cx="68" cy="102" r="2.5" fill="white" opacity="0.7"/>
      {/* Sleeves */}
      <path d="M34 78 Q22 82 20 94 Q24 98 32 94 Q34 88 40 78 Z" fill="url(#an-dress)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M90 78 Q100 80 100 92 Q96 96 88 92 Q86 86 82 78 Z" fill="url(#an-dress)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Collar */}
      <path d="M54 74 Q62 70 70 74" stroke="#1a1209" strokeWidth="1" fill="none"/>

      {/* ── PEARL NECKLACE ── */}
      <circle cx="46" cy="72" r="2.2" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.6"/>
      <circle cx="51" cy="70" r="2.2" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.6"/>
      <circle cx="56" cy="69" r="2.2" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.6"/>
      <circle cx="61" cy="69" r="2.2" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.6"/>
      <circle cx="66" cy="69" r="2.2" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.6"/>
      <circle cx="71" cy="70" r="2.2" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.6"/>
      <circle cx="76" cy="72" r="2.2" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.6"/>

      {/* ── RIGHT ARM ── */}
      <path d="M88 82 Q98 92 100 108 Q94 110 88 108 Q84 94 80 82 Z" fill="url(#an-arm)" stroke="#1a1209" strokeWidth="1"/>
      <ellipse cx="100" cy="110" rx="6" ry="5" fill="url(#an-arm)" stroke="#1a1209" strokeWidth="1"/>

      {/* ── SHOES ── */}
      <path d="M26 172 Q20 176 18 180 Q20 184 30 184 Q42 184 44 182 Q46 178 42 174 Q38 172 26 172 Z" fill="url(#an-shoe)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M80 172 Q74 176 72 180 Q74 184 84 184 Q96 184 98 182 Q100 178 96 174 Q92 172 80 172 Z" fill="url(#an-shoe)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── NECK ── */}
      <path d="M50 64 Q62 61 74 64 L76 74 Q62 78 48 74 Z" fill="url(#an-face)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M52 68 Q62 66 72 68" stroke="#C89060" strokeWidth="0.7" fill="none" opacity="0.5"/>

      {/* ── HEAD ── */}
      <path d="M32 38 Q30 18 48 11 Q62 6 76 11 Q90 18 92 34 Q94 50 86 60 Q76 70 62 70 Q46 70 36 60 Q28 50 32 38 Z" fill="url(#an-face)" stroke="#1a1209" strokeWidth="1.8"/>
      {/* Right ear */}
      <path d="M88 36 Q96 36 96 45 Q96 54 88 54 Q86 52 86 45 Q86 38 88 36 Z" fill="url(#an-face)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M90 40 Q92 45 90 50" stroke="#B07848" strokeWidth="0.7" fill="none"/>
      {/* Left ear */}
      <path d="M36 36 Q28 36 28 45 Q28 54 36 54 Q38 52 38 45 Q38 38 36 36 Z" fill="url(#an-face)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Pearl earrings */}
      <circle cx="28" cy="47" r="3" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.8"/>
      <circle cx="96" cy="47" r="3" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.8"/>

      {/* ── WHITE HAIR ── */}
      <path d="M32 38 Q30 18 48 11 Q62 6 76 11 Q90 18 90 34 Q84 28 76 24 Q62 18 48 22 Q36 26 32 38 Z" fill="url(#an-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M36 16 Q44 10 54 8 Q62 6 70 8 Q78 10 84 16 Q76 12 62 12 Q48 12 36 16 Z" fill="url(#an-hair)" stroke="#1a1209" strokeWidth="1"/>
      {/* Side curls */}
      <path d="M32 36 Q26 28 28 20 Q34 14 40 16 Q34 22 32 32 Z" fill="url(#an-hair)" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M92 36 Q98 28 96 20 Q90 14 84 16 Q90 22 90 32 Z" fill="url(#an-hair)" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Wave texture */}
      <path d="M34 30 Q40 22 50 20 Q62 18 72 22 Q80 26 86 32" stroke="#D0CCD0" strokeWidth="2" fill="none" opacity="0.55"/>

      {/* ── EYES ── */}
      {/* Left */}
      <path d="M38 40 Q47 36 52 40 Q50 47 46 48 Q38 47 38 40 Z" fill="white" stroke="#1a1209" strokeWidth="0.9"/>
      <circle cx="45" cy="44" r="3.5" fill="url(#an-iris)"/>
      <circle cx="45" cy="44" r="2" fill="#1a1209"/>
      <ellipse cx="43.8" cy="42.5" rx="1" ry="0.8" fill="white" opacity="0.9"/>
      {/* Right */}
      <path d="M70 38 Q79 34 84 38 Q82 45 78 46 Q70 45 70 38 Z" fill="white" stroke="#1a1209" strokeWidth="0.9"/>
      <circle cx="77" cy="42" r="3.5" fill="url(#an-iris)"/>
      <circle cx="77" cy="42" r="2" fill="#1a1209"/>
      <ellipse cx="75.8" cy="40.5" rx="1" ry="0.8" fill="white" opacity="0.9"/>

      {/* ── CROW'S FEET ── */}
      <path d="M52 46 Q56 49 54 53" stroke="#C08858" strokeWidth="0.6" fill="none" opacity="0.55"/>
      <path d="M52 48 Q57 52 55 56" stroke="#C08858" strokeWidth="0.5" fill="none" opacity="0.45"/>
      <path d="M38 46 Q34 48 36 52" stroke="#C08858" strokeWidth="0.6" fill="none" opacity="0.55"/>
      <path d="M70 44 Q74 46 72 50" stroke="#C08858" strokeWidth="0.6" fill="none" opacity="0.55"/>
      <path d="M84 44 Q88 46 86 50" stroke="#C08858" strokeWidth="0.6" fill="none" opacity="0.55"/>
      {/* Smile lines */}
      <path d="M40 56 Q38 62 40 66" stroke="#C08858" strokeWidth="0.7" fill="none" opacity="0.5"/>
      <path d="M82 54 Q84 60 82 64" stroke="#C08858" strokeWidth="0.7" fill="none" opacity="0.5"/>

      {/* ── GLASSES ── */}
      <rect x="30" y="34" width="28" height="20" rx="10" fill="rgba(200,228,248,0.22)" stroke="url(#an-glasses)" strokeWidth="2.2"/>
      <rect x="64" y="32" width="28" height="20" rx="10" fill="rgba(200,228,248,0.22)" stroke="url(#an-glasses)" strokeWidth="2.2"/>
      <path d="M58 43 Q61 41 64 43" stroke="url(#an-glasses)" strokeWidth="1.6" fill="none"/>
      <line x1="30" y1="44" x2="24" y2="46" stroke="url(#an-glasses)" strokeWidth="1.6"/>
      <line x1="92" y1="42" x2="98" y2="44" stroke="url(#an-glasses)" strokeWidth="1.6"/>
      <path d="M33 36 Q39 33 43 36" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
      <path d="M67 34 Q73 31 77 34" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>

      {/* ── EYEBROWS (thin, grey) ── */}
      <path d="M34 33 Q44 29 52 33" stroke="#909090" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M70 31 Q78 27 84 31" stroke="#909090" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* ── NOSE ── */}
      <path d="M62 52 Q66 55 68 58 Q64 61 60 60 Q56 61 52 58 Q54 55 62 52 Z" fill="#C08858" opacity="0.38"/>
      <circle cx="56" cy="59" r="2" fill="#B07848" opacity="0.42"/>
      <circle cx="64" cy="59" r="2" fill="#B07848" opacity="0.42"/>

      {/* ── MOUTH (warm smile) ── */}
      <path d="M46 62 Q62 72 78 62" fill="#D09080" fillOpacity="0.28"/>
      <path d="M46 62 Q56 58 62 60 Q68 58 78 62" stroke="#1a1209" strokeWidth="1.2" fill="none"/>
      <path d="M46 62 Q62 72 78 62" stroke="#C08070" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// BUSY BEATE — 43yo, black bob, red lipstick, grey blazer, phone, small bag
// ─────────────────────────────────────────────────────────────────────────────
export function BeateAvatar() {
  return (
    <svg viewBox="0 0 108 192" width="108" height="192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bt-face" cx="50%" cy="40%" r="57%">
          <stop offset="0%"   stopColor="#F8D0A8"/>
          <stop offset="50%"  stopColor="#E8A870"/>
          <stop offset="100%" stopColor="#C87848"/>
        </radialGradient>
        <linearGradient id="bt-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#ECA870"/>
          <stop offset="100%" stopColor="#C07848"/>
        </linearGradient>
        <linearGradient id="bt-hair" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%"   stopColor="#2A1E18"/>
          <stop offset="60%"  stopColor="#180E08"/>
          <stop offset="100%" stopColor="#0A0602"/>
        </linearGradient>
        <radialGradient id="bt-iris" cx="36%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#886040"/>
          <stop offset="55%"  stopColor="#5A3A18"/>
          <stop offset="100%" stopColor="#2A1808"/>
        </radialGradient>
        <linearGradient id="bt-blazer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#888890"/>
          <stop offset="50%"  stopColor="#707078"/>
          <stop offset="100%" stopColor="#505058"/>
        </linearGradient>
        <linearGradient id="bt-shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FAFAFA"/>
          <stop offset="100%" stopColor="#DCDCDC"/>
        </linearGradient>
        <linearGradient id="bt-trouser" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#3A3A42"/>
          <stop offset="100%" stopColor="#22222A"/>
        </linearGradient>
        <linearGradient id="bt-shoe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1A1A22"/>
          <stop offset="100%" stopColor="#0A0A12"/>
        </linearGradient>
        <linearGradient id="bt-bag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#3A2840"/>
          <stop offset="100%" stopColor="#1E1228"/>
        </linearGradient>
        <linearGradient id="bt-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1A1A28"/>
          <stop offset="100%" stopColor="#0A0A18"/>
        </linearGradient>
      </defs>

      {/* ── SMALL BAG on left arm ── */}
      <path d="M10 100 Q10 92 20 90 Q30 88 34 92 Q36 96 36 106 Q36 114 32 116 Q22 118 14 114 Q8 110 10 100 Z" fill="url(#bt-bag)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M30 92 Q34 96 34 106" stroke="#0A0818" strokeWidth="1.5" fill="none"/>
      <path d="M16 90 Q16 84 20 84 Q24 84 24 90" stroke="#2A1A38" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <ellipse cx="23" cy="92" rx="4" ry="2.5" fill="#C9A227" stroke="#1a1209" strokeWidth="0.8"/>

      {/* ── LEFT ARM ── */}
      <path d="M32 82 Q20 94 16 110 Q20 114 26 112 Q30 96 40 84 Z" fill="url(#bt-body)" stroke="#1a1209" strokeWidth="1"/>
      <ellipse cx="17" cy="112" rx="5" ry="4" fill="url(#bt-body)" stroke="#1a1209" strokeWidth="1"/>

      {/* ── LEGS / TROUSERS ── */}
      <path d="M38 126 Q32 152 30 172 Q36 174 42 172 Q44 152 50 128 Z" fill="url(#bt-trouser)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Front leg */}
      <path d="M58 124 Q62 150 62 172 Q68 174 74 172 Q72 150 76 126 Z" fill="url(#bt-trouser)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Back shoe */}
      <path d="M30 170 Q24 174 22 178 Q24 184 34 184 Q44 184 46 182 Q48 177 44 173 Q42 171 42 172 Z" fill="url(#bt-shoe)" stroke="#1a1209" strokeWidth="1.2"/>
      <line x1="36" y1="182" x2="32" y2="188" stroke="#0E0E18" strokeWidth="2"/>
      {/* Front shoe */}
      <path d="M62 170 Q56 174 54 178 Q56 184 66 184 Q78 184 80 182 Q82 177 78 173 Q76 171 74 172 Z" fill="url(#bt-shoe)" stroke="#1a1209" strokeWidth="1.2"/>
      <line x1="70" y1="182" x2="66" y2="188" stroke="#0E0E18" strokeWidth="2"/>

      {/* ── WHITE SHIRT ── */}
      <path d="M38 76 Q46 72 54 72 Q62 72 70 76 L72 100 Q62 104 54 104 Q46 104 38 100 Z" fill="url(#bt-shirt)" stroke="#1a1209" strokeWidth="1"/>
      {/* Shirt collar */}
      <path d="M46 72 Q50 66 54 72" stroke="#1a1209" strokeWidth="1" fill="none"/>
      <path d="M54 72 Q58 66 62 72" stroke="#1a1209" strokeWidth="1" fill="none"/>

      {/* ── GREY BLAZER ── */}
      <path d="M30 78 Q38 74 54 74 Q70 74 78 78 L82 126 Q66 132 54 132 Q40 132 34 128 Z" fill="url(#bt-blazer)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Blazer right shadow */}
      <path d="M68 78 L78 78 L82 126 Q78 130 74 128 Z" fill="rgba(0,0,0,0.18)"/>
      {/* Left lapel */}
      <path d="M50 74 Q44 84 40 92 Q46 96 52 94 Q58 86 58 76 Q56 74 52 74 Z" fill="url(#bt-blazer)" stroke="#1a1209" strokeWidth="1"/>
      {/* Right lapel */}
      <path d="M58 76 Q62 86 62 94 Q68 96 72 92 Q68 84 64 74 Z" fill="url(#bt-blazer)" stroke="#1a1209" strokeWidth="1"/>
      {/* Shirt visible between lapels */}
      <path d="M50 88 Q54 84 58 88 L58 100 Q54 102 50 100 Z" fill="url(#bt-shirt)" stroke="none"/>
      {/* Blazer sleeves */}
      <path d="M30 78 Q18 84 16 96 Q22 100 30 96 Q34 88 40 78 Z" fill="url(#bt-blazer)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M78 78 Q90 82 90 96 Q86 100 78 96 Q74 88 70 78 Z" fill="url(#bt-blazer)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Pocket */}
      <rect x="60" y="92" width="10" height="8" rx="1" fill="rgba(0,0,0,0.12)" stroke="#1a1209" strokeWidth="0.7"/>
      {/* Bottom button */}
      <circle cx="54" cy="120" r="2" fill="#505058" stroke="#1a1209" strokeWidth="0.6"/>
      <circle cx="54" cy="110" r="2" fill="#505058" stroke="#1a1209" strokeWidth="0.6"/>

      {/* ── RIGHT ARM + PHONE ── */}
      <path d="M74 82 Q86 72 94 60 Q98 54 100 50 Q96 46 92 50 Q88 58 80 70 Q70 82 66 86 Z" fill="url(#bt-body)" stroke="#1a1209" strokeWidth="1"/>
      {/* Phone */}
      <rect x="92" y="38" width="14" height="24" rx="2.5" fill="url(#bt-phone)" stroke="#1a1209" strokeWidth="1.2"/>
      <rect x="94" y="42" width="10" height="14" rx="1" fill="#2A3050" opacity="0.9"/>
      <ellipse cx="99" cy="40" rx="2" ry="0.8" fill="#1A1A28"/>
      {/* Screen glow */}
      <rect x="94" y="42" width="10" height="14" rx="1" fill="none" stroke="rgba(120,180,255,0.3)" strokeWidth="0.5"/>

      {/* ── NECK ── */}
      <path d="M44 64 Q54 61 64 64 L66 74 Q54 78 42 74 Z" fill="url(#bt-face)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── HEAD ── */}
      <path d="M30 36 Q28 16 46 10 Q54 6 64 10 Q80 16 80 32 Q82 50 74 60 Q64 68 54 68 Q42 68 34 60 Q24 50 30 36 Z" fill="url(#bt-face)" stroke="#1a1209" strokeWidth="1.8"/>
      {/* Right ear */}
      <path d="M78 34 Q86 34 86 43 Q86 52 78 52 Q76 50 76 43 Q76 36 78 34 Z" fill="url(#bt-face)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Left ear */}
      <path d="M32 34 Q24 34 24 43 Q24 52 32 52 Q34 50 34 43 Q34 36 32 34 Z" fill="url(#bt-face)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Gold stud earrings */}
      <circle cx="24" cy="45" r="2.5" fill="#C9A227" stroke="#1a1209" strokeWidth="0.7"/>
      <circle cx="86" cy="45" r="2.5" fill="#C9A227" stroke="#1a1209" strokeWidth="0.7"/>

      {/* ── BOB HAIRCUT — very sharp, chin-length ── */}
      {/* Back volume */}
      <path d="M30 36 Q28 16 46 10 Q54 6 64 10 Q80 16 80 32 Q76 24 70 20 Q58 14 46 16 Q36 18 30 36 Z" fill="url(#bt-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Top & side volume */}
      <path d="M34 14 Q44 8 54 6 Q64 6 72 10 Q80 16 80 28 Q72 14 54 12 Q38 12 34 14 Z" fill="url(#bt-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Left side — sharp angle bob, chin length */}
      <path d="M30 36 Q28 46 30 58 Q34 66 40 68 Q36 64 32 56 Q28 48 32 38 Z" fill="url(#bt-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Right side — sharp angle bob */}
      <path d="M80 34 Q82 46 80 58 Q76 66 70 68 Q74 64 78 56 Q82 48 78 38 Z" fill="url(#bt-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Sharp horizontal cut line (the bob) */}
      <path d="M30 58 Q54 62 80 58" stroke="#1a1209" strokeWidth="1.2" fill="none"/>
      {/* Hair highlight shine */}
      <path d="M36 12 Q54 8 70 12" stroke="#5A4030" strokeWidth="1.5" fill="none" opacity="0.5"/>

      {/* ── EYES ── */}
      {/* Left */}
      <path d="M34 36 Q42 32 48 36 Q46 42 42 43 Q34 42 34 36 Z" fill="white" stroke="#1a1209" strokeWidth="0.9"/>
      <circle cx="41" cy="39" r="3.5" fill="url(#bt-iris)"/>
      <circle cx="41" cy="39" r="2" fill="#1a1209"/>
      <ellipse cx="39.5" cy="37.5" rx="1" ry="0.8" fill="white" opacity="0.9"/>
      <path d="M34 36 Q41 32 48 36" stroke="#1a1209" strokeWidth="1.5" fill="none"/>
      {/* Right */}
      <path d="M60 34 Q68 30 74 34 Q72 40 68 41 Q60 40 60 34 Z" fill="white" stroke="#1a1209" strokeWidth="0.9"/>
      <circle cx="67" cy="37" r="3.5" fill="url(#bt-iris)"/>
      <circle cx="67" cy="37" r="2" fill="#1a1209"/>
      <ellipse cx="65.5" cy="35.5" rx="1" ry="0.8" fill="white" opacity="0.9"/>
      <path d="M60 34 Q67 30 74 34" stroke="#1a1209" strokeWidth="1.5" fill="none"/>

      {/* ── EYEBROWS (strong, defined) ── */}
      <path d="M32 32 Q41 27 48 31" stroke="#1a1209" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M60 30 Q67 25 74 29" stroke="#1a1209" strokeWidth="2.2" fill="none" strokeLinecap="round"/>

      {/* ── NOSE ── */}
      <path d="M54 46 Q58 49 60 52 Q57 55 54 54 Q50 55 48 52 Q50 49 54 46 Z" fill="#C07848" opacity="0.38"/>
      <circle cx="50" cy="53" r="2" fill="#B07040" opacity="0.42"/>
      <circle cx="58" cy="53" r="2" fill="#B07040" opacity="0.42"/>
      <path d="M54 36 Q56 41 56 46" stroke="#C07848" strokeWidth="0.9" fill="none" opacity="0.45"/>

      {/* ── MOUTH — bold red lipstick ── */}
      <path d="M42 58 Q48 54 54 56 Q60 54 66 58 Q64 62 60 64 Q56 66 52 64 Q48 62 42 58 Z" fill="#CC1830" stroke="none"/>
      {/* Upper lip cupid bow */}
      <path d="M42 58 Q46 54 50 56 Q54 54 58 56 Q62 54 66 58" stroke="#A01028" strokeWidth="1.2" fill="none"/>
      {/* Lower lip */}
      <path d="M42 58 Q54 66 66 58" stroke="#A01028" strokeWidth="1.2" fill="none"/>
      {/* Lip shine */}
      <ellipse cx="54" cy="60" rx="5" ry="1.8" fill="rgba(255,160,160,0.4)"/>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// BIKER BENEDIKT — hipster cyclist, big curled moustache, smirk, cigarette
// ─────────────────────────────────────────────────────────────────────────────
export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 108 192" width="108" height="192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bk-face" cx="48%" cy="40%" r="57%">
          <stop offset="0%"   stopColor="#F4C898"/>
          <stop offset="50%"  stopColor="#E4A870"/>
          <stop offset="100%" stopColor="#C88050"/>
        </radialGradient>
        <linearGradient id="bk-arm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#E4A870"/>
          <stop offset="100%" stopColor="#C07840"/>
        </linearGradient>
        <linearGradient id="bk-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#4A3828"/>
          <stop offset="100%" stopColor="#1E1208"/>
        </linearGradient>
        <radialGradient id="bk-iris" cx="36%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#5A8040"/>
          <stop offset="55%"  stopColor="#3A6020"/>
          <stop offset="100%" stopColor="#1A3808"/>
        </radialGradient>
        {/* Casquette / track cycling cap */}
        <linearGradient id="bk-cap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#2A2A2A"/>
          <stop offset="100%" stopColor="#101010"/>
        </linearGradient>
        <linearGradient id="bk-capbrim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#383838"/>
          <stop offset="100%" stopColor="#101010"/>
        </linearGradient>
        {/* Jersey — vintage horizontal stripes */}
        <linearGradient id="bk-jersey1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#C83020"/>
          <stop offset="100%" stopColor="#9A2010"/>
        </linearGradient>
        <linearGradient id="bk-jersey2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F0F0F0"/>
          <stop offset="100%" stopColor="#D8D8D8"/>
        </linearGradient>
        <linearGradient id="bk-trouser" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2A2830"/>
          <stop offset="100%" stopColor="#16141C"/>
        </linearGradient>
        <linearGradient id="bk-shoe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#7A5A30"/>
          <stop offset="100%" stopColor="#503A18"/>
        </linearGradient>
        <linearGradient id="bk-moustache" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#3A2818"/>
          <stop offset="50%"  stopColor="#2A1A08"/>
          <stop offset="100%" stopColor="#3A2818"/>
        </linearGradient>
        <linearGradient id="bk-stubble" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(60,40,20,0)"/>
          <stop offset="100%" stopColor="rgba(60,40,20,0.25)"/>
        </linearGradient>
      </defs>

      {/* ── LEFT ARM ── */}
      <path d="M28 84 Q16 96 14 112 Q18 114 24 112 Q28 98 38 86 Z" fill="url(#bk-arm)" stroke="#1a1209" strokeWidth="1"/>
      <ellipse cx="15" cy="113" rx="5" ry="4" fill="url(#bk-arm)" stroke="#1a1209" strokeWidth="1"/>

      {/* ── LEGS ── */}
      {/* Back leg */}
      <path d="M38 128 Q32 152 30 172 Q36 174 42 172 Q44 152 50 130 Z" fill="url(#bk-trouser)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Front leg */}
      <path d="M58 126 Q62 150 62 172 Q68 174 74 172 Q72 150 76 128 Z" fill="url(#bk-trouser)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Shoes — leather */}
      <path d="M30 170 Q24 174 22 178 Q24 184 34 184 Q46 184 48 182 Q50 177 46 173 Q44 171 42 172 Z" fill="url(#bk-shoe)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M62 170 Q56 174 54 178 Q56 184 66 184 Q78 184 80 182 Q82 177 78 173 Q76 171 74 172 Z" fill="url(#bk-shoe)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Shoe stitching */}
      <path d="M26 180 Q38 178 46 180" stroke="#8A6A30" strokeWidth="0.7" fill="none" opacity="0.7"/>
      <path d="M58 180 Q70 178 78 180" stroke="#8A6A30" strokeWidth="0.7" fill="none" opacity="0.7"/>

      {/* ── VINTAGE JERSEY (horizontal stripes) ── */}
      {/* Jersey body */}
      <path d="M28 80 Q38 76 54 76 Q70 76 80 80 L82 128 Q66 134 54 134 Q40 134 30 130 Z" fill="url(#bk-jersey2)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Red stripe 1 */}
      <path d="M29 80 Q54 78 80 80 L80 88 Q54 90 28 88 Z" fill="url(#bk-jersey1)" stroke="none"/>
      {/* White gap */}
      {/* Red stripe 2 */}
      <path d="M28 96 Q54 94 82 96 L82 104 Q54 106 28 104 Z" fill="url(#bk-jersey1)" stroke="none"/>
      {/* Red stripe 3 */}
      <path d="M28 112 Q54 110 82 112 L82 118 Q54 120 28 118 Z" fill="url(#bk-jersey1)" stroke="none"/>
      {/* Jersey outline redraw on top */}
      <path d="M28 80 Q38 76 54 76 Q70 76 80 80 L82 128 Q66 134 54 134 Q40 134 30 130 Z" fill="none" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Collar */}
      <path d="M46 76 Q54 72 62 76" stroke="#1a1209" strokeWidth="1" fill="none"/>
      {/* Sleeves */}
      <path d="M28 80 Q16 84 14 96 Q18 100 28 96 Q30 90 36 80 Z" fill="url(#bk-jersey2)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M28 88 Q16 88 14 96" fill="url(#bk-jersey1)" stroke="none"/>
      <path d="M80 80 Q92 84 92 96 Q88 100 78 96 Q76 90 72 80 Z" fill="url(#bk-jersey2)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M80 88 Q92 88 92 96" fill="url(#bk-jersey1)" stroke="none"/>
      {/* Jersey number */}
      <rect x="44" y="84" width="20" height="16" rx="2" fill="rgba(255,255,255,0.75)" stroke="#1a1209" strokeWidth="0.8"/>
      <text x="47" y="96" fontFamily="Georgia, serif" fontWeight="bold" fontSize="10" fill="#1a1209">42</text>

      {/* ── RIGHT ARM ── */}
      <path d="M78 84 Q90 92 94 108 Q88 110 82 108 Q78 94 72 84 Z" fill="url(#bk-arm)" stroke="#1a1209" strokeWidth="1"/>
      <ellipse cx="94" cy="110" rx="6" ry="5" fill="url(#bk-arm)" stroke="#1a1209" strokeWidth="1"/>

      {/* ── NECK ── */}
      <path d="M44 66 Q54 63 64 66 L66 76 Q54 80 42 76 Z" fill="url(#bk-face)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── HEAD ── */}
      {/* Superman chin / square jaw — wider at jaw */}
      <path d="M28 36 Q26 16 44 9 Q54 5 66 9 Q82 15 82 32 Q84 50 78 62 Q72 72 62 74 Q54 76 46 74 Q36 72 30 62 Q22 50 28 36 Z" fill="url(#bk-face)" stroke="#1a1209" strokeWidth="1.8"/>
      {/* Strong jaw definition — square chin */}
      <path d="M30 60 Q36 70 46 74 Q54 76 62 74 Q72 72 78 62" stroke="#B07040" strokeWidth="1" fill="none" opacity="0.4"/>
      {/* Chin cleft */}
      <path d="M54 72 Q54 68 54 74" stroke="#B07040" strokeWidth="0.8" fill="none" opacity="0.55"/>
      {/* Stubble shadow on jaw */}
      <path d="M30 58 Q36 70 54 74 Q72 70 78 58 Q72 68 54 70 Q36 68 30 58 Z" fill="url(#bk-stubble)"/>
      {/* Right ear */}
      <path d="M80 34 Q88 34 88 43 Q88 52 80 52 Q78 50 78 43 Q78 36 80 34 Z" fill="url(#bk-face)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Left ear */}
      <path d="M30 34 Q22 34 22 43 Q22 52 30 52 Q32 50 32 43 Q32 36 30 34 Z" fill="url(#bk-face)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── HAIR (visible under/around cap) ── */}
      <path d="M28 28 Q26 14 44 8 Q54 4 66 8 Q82 14 82 30 Q76 22 66 18 Q54 14 44 16 Q34 18 28 28 Z" fill="url(#bk-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Sideburns */}
      <path d="M28 36 Q24 42 26 52 Q28 46 30 40 Z" fill="url(#bk-hair)" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M82 34 Q86 40 84 50 Q82 44 80 38 Z" fill="url(#bk-hair)" stroke="#1a1209" strokeWidth="0.8"/>

      {/* ── CASQUETTE / TRACK CYCLING CAP ── */}
      {/* Cap dome (sits low, slightly forward) */}
      <path d="M28 28 Q26 14 44 8 Q54 4 66 8 Q80 14 82 28 Q76 32 54 32 Q32 32 28 28 Z" fill="url(#bk-cap)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Short flat brim in front */}
      <path d="M30 28 Q54 32 80 28 Q82 32 80 34 Q54 36 30 34 Q28 32 30 28 Z" fill="url(#bk-capbrim)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Cap button */}
      <circle cx="54" cy="7" r="2" fill="#0A0A0A" stroke="#1a1209" strokeWidth="0.7"/>
      {/* Panel seams */}
      <line x1="44" y1="8" x2="36" y2="28" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 3"/>
      <line x1="64" y1="8" x2="72" y2="28" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 3"/>
      {/* White stripe on brim edge */}
      <path d="M32 34 Q54 36 78 34" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3"/>

      {/* ── EYES ── */}
      {/* Left */}
      <path d="M30 38 Q39 34 46 38 Q44 44 40 45 Q30 44 30 38 Z" fill="white" stroke="#1a1209" strokeWidth="0.9"/>
      <circle cx="38" cy="41" r="3.5" fill="url(#bk-iris)"/>
      <circle cx="38" cy="41" r="2" fill="#1a1209"/>
      <ellipse cx="36.5" cy="39.5" rx="1" ry="0.8" fill="white" opacity="0.9"/>
      <path d="M30 38 Q38 34 46 38" stroke="#1a1209" strokeWidth="1.3" fill="none"/>
      {/* Right — slight squint for smirk */}
      <path d="M62 37 Q70 33 76 37 Q74 43 70 44 Q62 43 62 37 Z" fill="white" stroke="#1a1209" strokeWidth="0.9"/>
      <circle cx="69" cy="40" r="3.5" fill="url(#bk-iris)"/>
      <circle cx="69" cy="40" r="2" fill="#1a1209"/>
      <ellipse cx="67.5" cy="38.5" rx="1" ry="0.8" fill="white" opacity="0.9"/>
      <path d="M62 37 Q69 33 76 37" stroke="#1a1209" strokeWidth="1.3" fill="none"/>

      {/* ── EYEBROWS (strong, slightly arched) ── */}
      <path d="M28 34 Q38 29 46 33" stroke="#2A1808" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M62 33 Q70 28 76 32" stroke="#2A1808" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* ── NOSE (straight, strong) ── */}
      <path d="M54 46 Q58 49 60 52 Q57 56 54 55 Q50 56 48 52 Q50 49 54 46 Z" fill="#C07848" opacity="0.38"/>
      <circle cx="50" cy="54" r="2" fill="#B07040" opacity="0.44"/>
      <circle cx="58" cy="54" r="2" fill="#B07040" opacity="0.44"/>
      <path d="M54 36 Q56 41 56 47" stroke="#C07848" strokeWidth="1" fill="none" opacity="0.4"/>

      {/* ── SMIRK (one side up) ── */}
      <path d="M40 60 Q48 56 54 58 Q62 56 70 60 Q62 64 54 62 Q46 64 40 60 Z" fill="#C07858" opacity="0.6"/>
      {/* Smirk line — right side higher */}
      <path d="M40 60 Q47 58 54 60 Q62 56 70 58" stroke="#1a1209" strokeWidth="1.4" fill="none"/>
      <path d="M40 60 Q54 66 70 58" stroke="#A06040" strokeWidth="1" fill="none"/>
      {/* Right side smirk crease */}
      <path d="M70 58 Q74 56 72 62" stroke="#B07040" strokeWidth="0.8" fill="none" opacity="0.6"/>

      {/* ── HANDLEBAR MOUSTACHE (big, curled ends) ── */}
      {/* Centre body */}
      <path d="M40 58 Q54 62 68 58 Q66 66 60 66 Q54 68 48 66 Q42 66 40 58 Z" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="0.8"/>
      {/* LEFT CURL — curls upward */}
      <path d="M40 58 Q34 56 30 58 Q26 62 28 68 Q30 72 34 70 Q36 68 34 64 Q36 60 40 58 Z" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="0.9"/>
      {/* Left curl tip */}
      <path d="M28 68 Q26 72 30 74 Q32 72 30 68" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="0.7"/>
      {/* RIGHT CURL — curls upward */}
      <path d="M68 58 Q74 56 78 58 Q82 62 80 68 Q78 72 74 70 Q72 68 74 64 Q72 60 68 58 Z" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="0.9"/>
      {/* Right curl tip */}
      <path d="M80 68 Q82 72 78 74 Q76 72 78 68" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="0.7"/>
      {/* Moustache highlight */}
      <path d="M42 58 Q54 64 66 58" stroke="#6A4820" strokeWidth="0.8" fill="none" opacity="0.5"/>

      {/* ── CIGARETTE (corner of mouth) ── */}
      <rect x="68" y="61" width="12" height="3" rx="1.2" fill="white" stroke="#CCCCCC" strokeWidth="0.5"/>
      <ellipse cx="80" cy="62.5" rx="2.2" ry="1.5" fill="#E03010"/>
      <ellipse cx="80" cy="62.5" rx="1.2" ry="0.9" fill="#FF6030" opacity="0.8"/>
      {/* Smoke wisps */}
      <path d="M80 60 Q82 56 80 50" stroke="#C8C8C8" strokeWidth="0.9" fill="none" opacity="0.6"/>
      <path d="M81 60 Q84 54 82 46" stroke="#C0C0C0" strokeWidth="0.7" fill="none" opacity="0.5"/>
      <path d="M79 60 Q76 55 78 48" stroke="#C8C8C8" strokeWidth="0.6" fill="none" opacity="0.4"/>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Character data + order
// ─────────────────────────────────────────────────────────────────────────────
export const CHARACTERS = {
  luis:     { id: 'luis',     name: 'Little Luis',     tagline: 'Safe & away from traffic',         routeType: 'safest',  mode: 'walk', color: '#2563eb', cardBg: '#dbeafe', Avatar: LuisAvatar,     voice: (dist, time) => `Luis found a safe path! No scary roads. ${dist} km · ${time} min` },
  anne:     { id: 'anne',     name: 'Aunt Anne',        tagline: 'Slow strolls with her Pomeranian', routeType: 'nicest',  mode: 'walk', color: '#16a34a', cardBg: '#bbf7d0', Avatar: AnneAvatar,     voice: (dist, time) => `Anne took the scenic way. Her Pomeranian approves. ${time} min of bliss.` },
  beate:    { id: 'beate',    name: 'Busy Beate',       tagline: 'No time to waste',                 routeType: 'fastest', mode: 'walk', color: '#d97706', cardBg: '#fde68a', Avatar: BeateAvatar,    voice: (dist, time) => `Beate approves. ${dist} km, ${time} min. Straight to the point.` },
  benedikt: { id: 'benedikt', name: 'Biker Benedikt',   tagline: 'Always on his fixie',              routeType: 'bike',    mode: 'bike', color: '#ea580c', cardBg: '#fed7aa', Avatar: BenediktAvatar, voice: (dist, time) => `Benedikt mapped his route. ${dist} km. Helmet optional.` },
}

export const CHARACTER_ORDER = ['luis', 'anne', 'beate', 'benedikt']
