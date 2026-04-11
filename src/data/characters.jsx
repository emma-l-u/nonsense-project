// Character illustrations — Disney-inspired portrait style, square, head-to-hip

// ─────────────────────────────────────────────────────────────────────────────
// LITTLE LUIS — 8yo, backwards cap, chubby cheeks, ice cream, Disney kid style
// ─────────────────────────────────────────────────────────────────────────────
export function LuisAvatar() {
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lu-skin" cx="44%" cy="38%" r="58%">
          <stop offset="0%"   stopColor="#FDDCB5"/>
          <stop offset="55%"  stopColor="#F0B87C"/>
          <stop offset="100%" stopColor="#D8905C"/>
        </radialGradient>
        <radialGradient id="lu-blush" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#F27070" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#F27070" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="lu-hair" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%"   stopColor="#EEC84A"/>
          <stop offset="60%"  stopColor="#CCA030"/>
          <stop offset="100%" stopColor="#A07818"/>
        </linearGradient>
        <linearGradient id="lu-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#D43020"/>
          <stop offset="100%" stopColor="#8A1810"/>
        </linearGradient>
        <radialGradient id="lu-iris" cx="34%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#A87840"/>
          <stop offset="55%"  stopColor="#7A4820"/>
          <stop offset="100%" stopColor="#3A2008"/>
        </radialGradient>
        <linearGradient id="lu-shirt" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F8CA30"/>
          <stop offset="100%" stopColor="#C88808"/>
        </linearGradient>
        <linearGradient id="lu-pack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#62B852"/>
          <stop offset="100%" stopColor="#2A6820"/>
        </linearGradient>
        <radialGradient id="lu-scoop" cx="36%" cy="34%" r="62%">
          <stop offset="0%"   stopColor="#FDDAD6"/>
          <stop offset="55%"  stopColor="#F0ACA8"/>
          <stop offset="100%" stopColor="#D87880"/>
        </radialGradient>
        <linearGradient id="lu-cone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#C89050"/>
          <stop offset="100%" stopColor="#865820"/>
        </linearGradient>
      </defs>

      {/* ── BACKPACK STRAP (behind head/body) ── */}
      <path d="M 18 72 Q 14 80 14 92 Q 18 94 22 92 Q 24 80 28 72 Z" fill="url(#lu-skin)" stroke="#1a1209" strokeWidth="1"/>

      {/* ── ICE CREAM (upper right, held up) ── */}
      <path d="M 98 60 L 103 80 L 111 80 L 106 60 Z" fill="url(#lu-cone)" stroke="#1a1209" strokeWidth="1.2"/>
      <line x1="99" y1="64" x2="110" y2="64" stroke="#7A4820" strokeWidth="0.5"/>
      <line x1="99" y1="69" x2="110" y2="69" stroke="#7A4820" strokeWidth="0.5"/>
      <line x1="100" y1="74" x2="110" y2="74" stroke="#7A4820" strokeWidth="0.5"/>
      <ellipse cx="104" cy="55" rx="9" ry="8" fill="url(#lu-scoop)" stroke="#1a1209" strokeWidth="1.2"/>
      <ellipse cx="101" cy="52" rx="3.5" ry="2.5" fill="#FDEAEA" opacity="0.6"/>
      <path d="M 110 61 Q 111 67 110 73" stroke="#F0A0A0" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="104" cy="47" r="3" fill="#C02828" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M 104 44 Q 106 41 108 43" stroke="#3A6010" strokeWidth="1" fill="none"/>
      <rect x="100" y="51" width="4"   height="1.5" rx="0.7" fill="#F04040" transform="rotate(-20 100 51)"/>
      <rect x="106" y="49" width="4"   height="1.5" rx="0.7" fill="#4090E0" transform="rotate(18 106 49)"/>
      <rect x="103" y="55" width="3.5" height="1.5" rx="0.7" fill="#50C040" transform="rotate(-35 103 55)"/>

      {/* ── SHIRT + SHOULDERS ── */}
      <path d="M 12 96 Q 18 90 44 88 Q 60 86 76 88 Q 102 90 108 96 L 108 120 Q 60 124 12 120 Z" fill="url(#lu-shirt)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M 44 88 Q 60 84 76 88 Q 70 92 60 92 Q 50 92 44 88 Z" fill="url(#lu-shirt)" stroke="#1a1209" strokeWidth="1"/>
      {/* Sleeve */}
      <path d="M 12 96 Q 6 98 4 106 Q 8 110 16 106 Q 18 100 22 96 Z" fill="url(#lu-shirt)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── HEAD — big round chubby child ── */}
      <path d="M 18 42 Q 16 18 36 8 Q 48 3 60 3 Q 74 3 88 8 Q 106 18 106 42 Q 108 62 94 74 Q 80 84 60 84 Q 40 84 26 74 Q 16 62 18 42 Z" fill="url(#lu-skin)" stroke="#1a1209" strokeWidth="2"/>
      {/* Chubby cheeks */}
      <ellipse cx="92" cy="52" rx="13" ry="11" fill="url(#lu-blush)"/>
      <ellipse cx="26" cy="52" rx="12" ry="10" fill="url(#lu-blush)"/>
      {/* Right ear */}
      <path d="M 104 40 Q 114 40 114 50 Q 114 60 104 60 Q 102 58 102 50 Q 102 42 104 40 Z" fill="url(#lu-skin)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Left ear */}
      <path d="M 18 40 Q 8 40 8 50 Q 8 60 18 60 Q 20 58 20 50 Q 20 42 18 40 Z" fill="url(#lu-skin)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── HAIR under / around cap ── */}
      <path d="M 20 30 Q 16 20 22 12 Q 28 8 34 14 Q 28 20 24 30 Z" fill="url(#lu-hair)" stroke="#1a1209" strokeWidth="0.9"/>
      <path d="M 100 28 Q 106 18 102 10 Q 96 6 90 12 Q 96 18 98 28 Z" fill="url(#lu-hair)" stroke="#1a1209" strokeWidth="0.9"/>
      <path d="M 28 14 Q 38 8 50 5 Q 60 3 72 5 Q 82 8 92 14 Z" fill="url(#lu-hair)"/>
      <path d="M 34 8 Q 32 2 38 3 Q 41 0 46 4 Q 49 0 54 4 Q 57 0 62 4 Q 66 1 70 6 Z" fill="url(#lu-hair)" stroke="#1a1209" strokeWidth="0.9"/>

      {/* ── BACKWARDS CAP ── */}
      <path d="M 18 36 Q 16 14 38 6 Q 50 2 62 2 Q 76 2 90 6 Q 106 14 104 36 Q 94 40 60 40 Q 26 40 18 36 Z" fill="url(#lu-cap)" stroke="#1a1209" strokeWidth="1.8"/>
      {/* Brim at back */}
      <path d="M 18 36 Q 10 34 6 40 Q 8 46 18 44 Q 20 42 18 36 Z" fill="#B02010" stroke="#1a1209" strokeWidth="1.3"/>
      <circle cx="60" cy="4" r="3" fill="#9A1808" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M 22 34 Q 60 38 100 34" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" fill="none"/>

      {/* ── EYES — big Disney eyes ── */}
      {/* Left */}
      <path d="M 28 44 Q 38 37 48 44 Q 46 54 42 56 Q 28 54 28 44 Z" fill="white" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="38" cy="49" r="6" fill="url(#lu-iris)"/>
      <circle cx="38" cy="49" r="3.5" fill="#1a1209"/>
      <ellipse cx="35.5" cy="46" rx="3" ry="2.2" fill="white" opacity="0.95"/>
      <circle cx="41" cy="52" r="1.2" fill="rgba(255,255,255,0.7)"/>
      <path d="M 28 44 Q 38 37 48 44" stroke="#1a1209" strokeWidth="2.2" fill="none"/>
      <line x1="28" y1="43" x2="26" y2="40" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="33" y1="38" x2="32" y2="35" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="38" y1="37" x2="38" y2="34" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="43" y1="38" x2="44" y2="35" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="48" y1="43" x2="50" y2="40" stroke="#1a1209" strokeWidth="1.3"/>
      {/* Right */}
      <path d="M 72 42 Q 82 35 92 42 Q 90 52 86 54 Q 72 52 72 42 Z" fill="white" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="82" cy="47" r="6" fill="url(#lu-iris)"/>
      <circle cx="82" cy="47" r="3.5" fill="#1a1209"/>
      <ellipse cx="79.5" cy="44" rx="3" ry="2.2" fill="white" opacity="0.95"/>
      <circle cx="85" cy="50" r="1.2" fill="rgba(255,255,255,0.7)"/>
      <path d="M 72 42 Q 82 35 92 42" stroke="#1a1209" strokeWidth="2.2" fill="none"/>
      <line x1="72" y1="41" x2="70" y2="38" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="77" y1="36" x2="76" y2="33" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="82" y1="35" x2="82" y2="32" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="87" y1="36" x2="88" y2="33" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="92" y1="41" x2="94" y2="38" stroke="#1a1209" strokeWidth="1.3"/>

      {/* ── BROWS (soft, rounded) ── */}
      <path d="M 26 40 Q 37 34 48 38" stroke="#B08030" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 72 38 Q 82 32 92 36" stroke="#B08030" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* ── NOSE (tiny dots) ── */}
      <circle cx="55" cy="64" r="2.2" fill="#C88050" opacity="0.5"/>
      <circle cx="65" cy="64" r="2.2" fill="#C88050" opacity="0.5"/>

      {/* ── MOUTH (huge happy grin) ── */}
      <path d="M 36 70 Q 60 82 84 70 Q 60 74 36 70 Z" fill="white" opacity="0.65"/>
      <path d="M 36 70 Q 48 66 60 68 Q 72 66 84 70" stroke="#1a1209" strokeWidth="1.5" fill="none"/>
      <path d="M 36 70 Q 60 84 84 70" stroke="#C06868" strokeWidth="2" fill="none"/>
      <circle cx="28" cy="68" r="3" fill="#E89080" opacity="0.35"/>
      <circle cx="92" cy="66" r="3" fill="#E89080" opacity="0.35"/>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// AUNT ANNE — 70yo, glasses, pearls, polka-dot dress, Pomeranian, Disney granny
// ─────────────────────────────────────────────────────────────────────────────
export function AnneAvatar() {
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="an-skin" cx="46%" cy="40%" r="57%">
          <stop offset="0%"   stopColor="#F8D4AA"/>
          <stop offset="55%"  stopColor="#E8AC78"/>
          <stop offset="100%" stopColor="#C88858"/>
        </radialGradient>
        <radialGradient id="an-blush" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#EE9090" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#EE9090" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="an-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#F4F2F4"/>
          <stop offset="50%"  stopColor="#D8D4D8"/>
          <stop offset="100%" stopColor="#BAB6BA"/>
        </linearGradient>
        <linearGradient id="an-glasses" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#C8A870"/>
          <stop offset="100%" stopColor="#906840"/>
        </linearGradient>
        <radialGradient id="an-iris" cx="36%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#90AACC"/>
          <stop offset="55%"  stopColor="#6888A0"/>
          <stop offset="100%" stopColor="#486880"/>
        </radialGradient>
        <linearGradient id="an-dress" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F2BACB"/>
          <stop offset="100%" stopColor="#D88EA8"/>
        </linearGradient>
        <radialGradient id="an-dog" cx="38%" cy="34%" r="65%">
          <stop offset="0%"   stopColor="#FDF4E6"/>
          <stop offset="55%"  stopColor="#F0DCB4"/>
          <stop offset="100%" stopColor="#D4B87C"/>
        </radialGradient>
      </defs>

      {/* ── DRESS BODICE ── */}
      <path d="M 10 96 Q 20 90 44 88 Q 60 86 76 88 Q 100 90 110 96 L 110 120 Q 60 124 10 120 Z" fill="url(#an-dress)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* White polka dots on dress */}
      <circle cx="28" cy="100" r="3" fill="white" opacity="0.75"/>
      <circle cx="48" cy="106" r="3" fill="white" opacity="0.75"/>
      <circle cx="68" cy="100" r="3" fill="white" opacity="0.75"/>
      <circle cx="88" cy="108" r="3" fill="white" opacity="0.75"/>
      <circle cx="38" cy="113" r="3" fill="white" opacity="0.75"/>
      <circle cx="60" cy="116" r="3" fill="white" opacity="0.75"/>
      <circle cx="82" cy="115" r="3" fill="white" opacity="0.75"/>
      <circle cx="100" cy="107" r="3" fill="white" opacity="0.75"/>
      {/* Collar */}
      <path d="M 46 88 Q 60 84 74 88 Q 68 92 60 92 Q 52 92 46 88 Z" fill="url(#an-dress)" stroke="#1a1209" strokeWidth="1"/>
      {/* Sleeves */}
      <path d="M 10 96 Q 2 98 2 108 Q 6 112 14 108 Q 16 102 20 96 Z" fill="url(#an-dress)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── POMERANIAN (lower left corner) ── */}
      <ellipse cx="22" cy="114" rx="14" ry="10" fill="url(#an-dog)" stroke="#1a1209" strokeWidth="1.2"/>
      <ellipse cx="12" cy="112" rx="8" ry="7" fill="#FDFAF0" stroke="#1a1209" strokeWidth="0.8"/>
      <ellipse cx="8" cy="105" rx="9" ry="8" fill="url(#an-dog)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M 2 102 Q -2 96 3 97 Q 5 101 3 105 Z" fill="#E8C678" stroke="#1a1209" strokeWidth="0.8"/>
      <path d="M 14 101 Q 18 96 20 99 Q 18 103 15 104 Z" fill="#E8C678" stroke="#1a1209" strokeWidth="0.8"/>
      <circle cx="5" cy="105" r="2.5" fill="#1a1209" stroke="#1a1209" strokeWidth="0.4"/>
      <circle cx="4.2" cy="104.2" r="0.8" fill="white"/>
      <ellipse cx="1" cy="108" rx="2" ry="1.2" fill="#1a1209"/>
      <path d="M 0 110 Q 2 113 4 110" fill="#E87878" stroke="#1a1209" strokeWidth="0.5"/>

      {/* ── PEARL NECKLACE ── */}
      <circle cx="42" cy="85" r="2.5" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.7"/>
      <circle cx="48" cy="83" r="2.5" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.7"/>
      <circle cx="54" cy="82" r="2.5" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.7"/>
      <circle cx="60" cy="81" r="2.5" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.7"/>
      <circle cx="66" cy="82" r="2.5" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.7"/>
      <circle cx="72" cy="83" r="2.5" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.7"/>
      <circle cx="78" cy="85" r="2.5" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.7"/>

      {/* ── HEAD ── */}
      <path d="M 22 42 Q 20 18 40 10 Q 52 4 62 4 Q 74 4 86 10 Q 102 18 100 42 Q 102 62 90 72 Q 78 82 60 82 Q 44 82 32 72 Q 20 62 22 42 Z" fill="url(#an-skin)" stroke="#1a1209" strokeWidth="2"/>
      <ellipse cx="88" cy="52" rx="11" ry="9" fill="url(#an-blush)"/>
      <ellipse cx="32" cy="52" rx="10" ry="8" fill="url(#an-blush)"/>
      {/* Right ear */}
      <path d="M 98 40 Q 108 40 108 50 Q 108 60 98 60 Q 96 58 96 50 Q 96 42 98 40 Z" fill="url(#an-skin)" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="108" cy="50" r="3.2" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.9"/>
      {/* Left ear */}
      <path d="M 24 40 Q 14 40 14 50 Q 14 60 24 60 Q 26 58 26 50 Q 26 42 24 40 Z" fill="url(#an-skin)" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="14" cy="50" r="3.2" fill="#F0EEE8" stroke="#D0C8C0" strokeWidth="0.9"/>

      {/* ── WHITE HAIR ── */}
      <path d="M 22 42 Q 20 18 40 10 Q 52 4 62 4 Q 74 4 86 10 Q 100 18 100 40 Q 92 30 80 24 Q 62 16 44 22 Q 32 26 22 42 Z" fill="url(#an-hair)" stroke="#1a1209" strokeWidth="1.3"/>
      <path d="M 28 12 Q 40 6 54 4 Q 62 3 72 4 Q 82 6 90 12 Q 78 8 62 8 Q 46 8 28 12 Z" fill="url(#an-hair)" stroke="#1a1209" strokeWidth="1"/>
      <path d="M 22 42 Q 16 32 18 20 Q 24 12 30 14 Q 24 22 22 36 Z" fill="url(#an-hair)" stroke="#1a1209" strokeWidth="0.9"/>
      <path d="M 100 42 Q 106 32 104 20 Q 98 12 92 14 Q 98 22 100 36 Z" fill="url(#an-hair)" stroke="#1a1209" strokeWidth="0.9"/>
      <path d="M 28 34 Q 36 24 46 20 Q 60 16 74 22 Q 82 26 88 34" stroke="#E0DCE0" strokeWidth="2.5" fill="none" opacity="0.7"/>

      {/* ── EYES — kind Disney eyes ── */}
      {/* Left */}
      <path d="M 30 42 Q 40 36 50 42 Q 48 51 44 53 Q 30 51 30 42 Z" fill="white" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="40" cy="46" r="5.5" fill="url(#an-iris)"/>
      <circle cx="40" cy="46" r="3" fill="#1a1209"/>
      <ellipse cx="37.5" cy="43.5" rx="2.5" ry="1.8" fill="white" opacity="0.95"/>
      <circle cx="43" cy="49" r="1.1" fill="rgba(255,255,255,0.7)"/>
      <path d="M 30 42 Q 40 36 50 42" stroke="#1a1209" strokeWidth="2" fill="none"/>
      {/* Right */}
      <path d="M 70 40 Q 80 34 90 40 Q 88 49 84 51 Q 70 49 70 40 Z" fill="white" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="80" cy="44" r="5.5" fill="url(#an-iris)"/>
      <circle cx="80" cy="44" r="3" fill="#1a1209"/>
      <ellipse cx="77.5" cy="41.5" rx="2.5" ry="1.8" fill="white" opacity="0.95"/>
      <circle cx="83" cy="47" r="1.1" fill="rgba(255,255,255,0.7)"/>
      <path d="M 70 40 Q 80 34 90 40" stroke="#1a1209" strokeWidth="2" fill="none"/>

      {/* ── GLASSES ── */}
      <rect x="24" y="36" width="30" height="22" rx="11" fill="rgba(200,228,248,0.2)" stroke="url(#an-glasses)" strokeWidth="2.5"/>
      <rect x="66" y="34" width="30" height="22" rx="11" fill="rgba(200,228,248,0.2)" stroke="url(#an-glasses)" strokeWidth="2.5"/>
      <path d="M 54 46 Q 57 44 66 46" stroke="url(#an-glasses)" strokeWidth="2" fill="none"/>
      <line x1="24" y1="47" x2="16" y2="50" stroke="url(#an-glasses)" strokeWidth="2"/>
      <line x1="96" y1="45" x2="104" y2="48" stroke="url(#an-glasses)" strokeWidth="2"/>
      <path d="M 27 38 Q 34 34 40 38" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" fill="none"/>
      <path d="M 69 36 Q 76 32 82 36" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" fill="none"/>

      {/* ── BROWS (thin, grey) ── */}
      <path d="M 26 36 Q 38 31 50 35" stroke="#909090" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M 70 34 Q 80 29 90 33" stroke="#909090" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

      {/* ── CROW'S FEET ── */}
      <path d="M 50 49 Q 54 52 52 57" stroke="#C08858" strokeWidth="0.7" fill="none" opacity="0.55"/>
      <path d="M 90 47 Q 94 50 92 55" stroke="#C08858" strokeWidth="0.7" fill="none" opacity="0.55"/>
      <path d="M 30 49 Q 26 52 28 56" stroke="#C08858" strokeWidth="0.7" fill="none" opacity="0.5"/>
      <path d="M 70 47 Q 66 50 68 54" stroke="#C08858" strokeWidth="0.7" fill="none" opacity="0.5"/>

      {/* ── NOSE ── */}
      <circle cx="55" cy="62" r="2.2" fill="#C08858" opacity="0.42"/>
      <circle cx="65" cy="62" r="2.2" fill="#C08858" opacity="0.42"/>

      {/* ── SMILE ── */}
      <path d="M 42 70 Q 60 80 78 70" fill="#D09080" fillOpacity="0.28"/>
      <path d="M 42 70 Q 52 66 60 68 Q 68 66 78 70" stroke="#1a1209" strokeWidth="1.4" fill="none"/>
      <path d="M 42 70 Q 60 80 78 70" stroke="#C08070" strokeWidth="1.8" fill="none"/>
      <path d="M 38 68 Q 36 73 38 78" stroke="#C08858" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <path d="M 82 66 Q 84 71 82 76" stroke="#C08858" strokeWidth="0.8" fill="none" opacity="0.5"/>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// BUSY BEATE — 43yo, sharp bob, red lips, grey blazer, always on her phone
// ─────────────────────────────────────────────────────────────────────────────
export function BeateAvatar() {
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bt-skin" cx="50%" cy="40%" r="57%">
          <stop offset="0%"   stopColor="#F8D0A8"/>
          <stop offset="50%"  stopColor="#E8A870"/>
          <stop offset="100%" stopColor="#C87848"/>
        </radialGradient>
        <linearGradient id="bt-hair" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%"   stopColor="#2A1E16"/>
          <stop offset="60%"  stopColor="#160A04"/>
          <stop offset="100%" stopColor="#080402"/>
        </linearGradient>
        <radialGradient id="bt-iris" cx="35%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#906040"/>
          <stop offset="55%"  stopColor="#5C3A18"/>
          <stop offset="100%" stopColor="#2A1808"/>
        </radialGradient>
        <linearGradient id="bt-blazer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#888890"/>
          <stop offset="100%" stopColor="#505058"/>
        </linearGradient>
        <linearGradient id="bt-shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FAFAFA"/>
          <stop offset="100%" stopColor="#DCDCDC"/>
        </linearGradient>
        <linearGradient id="bt-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1A1A28"/>
          <stop offset="100%" stopColor="#08080E"/>
        </linearGradient>
        <linearGradient id="bt-bag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#3A2840"/>
          <stop offset="100%" stopColor="#1A1028"/>
        </linearGradient>
      </defs>

      {/* ── PHONE (upper right, she's looking at it) ── */}
      <rect x="88" y="30" width="14" height="24" rx="2.5" fill="url(#bt-phone)" stroke="#1a1209" strokeWidth="1.3"/>
      <rect x="90" y="34" width="10" height="14" rx="1" fill="#2A3055" opacity="0.9"/>
      <rect x="90" y="34" width="10" height="14" rx="1" fill="none" stroke="rgba(100,160,255,0.3)" strokeWidth="0.6"/>
      <ellipse cx="95" cy="32" rx="2" ry="0.8" fill="#101018"/>
      {/* Arm holding phone */}
      <path d="M 80 76 Q 88 64 92 52 Q 94 44 94 38 Q 90 34 86 38 Q 84 46 80 58 Q 74 72 70 78 Z" fill="url(#bt-skin)" stroke="#1a1209" strokeWidth="1"/>

      {/* ── BLAZER + SHIRT ── */}
      <path d="M 8 96 Q 18 90 44 88 Q 60 86 76 88 Q 102 90 112 96 L 112 120 Q 60 124 8 120 Z" fill="url(#bt-blazer)" stroke="#1a1209" strokeWidth="1.5"/>
      {/* White shirt between lapels */}
      <path d="M 48 88 Q 56 84 64 88 Q 62 96 60 100 Q 58 96 56 92 Q 52 96 50 92 Z" fill="url(#bt-shirt)" stroke="#1a1209" strokeWidth="0.9"/>
      {/* Left lapel */}
      <path d="M 44 88 Q 38 98 40 108 Q 46 112 52 110 Q 50 100 50 92 Q 48 88 44 88 Z" fill="url(#bt-blazer)" stroke="#1a1209" strokeWidth="1"/>
      {/* Right lapel */}
      <path d="M 76 88 Q 82 98 80 108 Q 74 112 68 110 Q 70 100 70 92 Q 72 88 76 88 Z" fill="url(#bt-blazer)" stroke="#1a1209" strokeWidth="1"/>
      {/* Buttons */}
      <circle cx="60" cy="108" r="2.2" fill="#505058" stroke="#1a1209" strokeWidth="0.7"/>
      {/* Sleeves */}
      <path d="M 8 96 Q 0 98 0 108 Q 4 114 12 110 Q 16 104 20 96 Z" fill="url(#bt-blazer)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── SMALL BAG on left side ── */}
      <path d="M 4 106 Q 4 100 12 98 Q 18 96 22 100 Q 24 104 22 112 Q 18 116 12 114 Q 4 112 4 106 Z" fill="url(#bt-bag)" stroke="#1a1209" strokeWidth="1.2"/>
      <ellipse cx="14" cy="100" rx="4" ry="2.2" fill="#C9A227" stroke="#1a1209" strokeWidth="0.7"/>

      {/* ── HEAD ── */}
      <path d="M 24 42 Q 22 18 42 10 Q 52 5 62 5 Q 74 5 84 10 Q 100 18 98 42 Q 100 62 88 72 Q 76 80 60 80 Q 44 80 34 72 Q 22 62 24 42 Z" fill="url(#bt-skin)" stroke="#1a1209" strokeWidth="2"/>
      {/* Right ear */}
      <path d="M 96 40 Q 106 40 106 50 Q 106 60 96 60 Q 94 58 94 50 Q 94 42 96 40 Z" fill="url(#bt-skin)" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="106" cy="50" r="3" fill="#C9A227" stroke="#1a1209" strokeWidth="0.8"/>
      {/* Left ear */}
      <path d="M 26 40 Q 16 40 16 50 Q 16 60 26 60 Q 28 58 28 50 Q 28 42 26 40 Z" fill="url(#bt-skin)" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="16" cy="50" r="3" fill="#C9A227" stroke="#1a1209" strokeWidth="0.8"/>

      {/* ── HAIR — sharp precise bob ── */}
      <path d="M 24 42 Q 22 18 42 10 Q 52 5 62 5 Q 74 5 84 10 Q 100 18 98 40 Q 90 26 76 20 Q 62 14 48 18 Q 36 22 24 42 Z" fill="url(#bt-hair)" stroke="#1a1209" strokeWidth="1.3"/>
      <path d="M 28 10 Q 40 4 54 3 Q 62 2 72 3 Q 82 5 90 10 Q 76 6 62 6 Q 48 6 28 10 Z" fill="url(#bt-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Left side bob — straight chin-length cut */}
      <path d="M 24 42 Q 20 52 22 64 Q 26 74 34 78 Q 28 72 24 60 Q 20 50 24 44 Z" fill="url(#bt-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Right side bob — straight chin-length cut */}
      <path d="M 98 42 Q 102 52 100 64 Q 96 74 88 78 Q 94 72 98 60 Q 102 50 98 44 Z" fill="url(#bt-hair)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Sharp horizontal cut line */}
      <path d="M 24 64 Q 60 68 100 64" stroke="#1a1209" strokeWidth="1.3" fill="none"/>
      {/* Shine */}
      <path d="M 30 10 Q 54 5 76 10" stroke="#4A3828" strokeWidth="1.5" fill="none" opacity="0.5"/>

      {/* ── EYES — sophisticated Disney eyes, looking slightly right ── */}
      {/* Left */}
      <path d="M 28 42 Q 38 36 48 42 Q 46 50 42 52 Q 28 50 28 42 Z" fill="white" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="38" cy="46" r="5.5" fill="url(#bt-iris)"/>
      <circle cx="38" cy="46" r="3.2" fill="#1a1209"/>
      <ellipse cx="35.5" cy="43.5" rx="2.5" ry="1.8" fill="white" opacity="0.95"/>
      <circle cx="41" cy="49" r="1.1" fill="rgba(255,255,255,0.7)"/>
      <path d="M 28 42 Q 38 36 48 42" stroke="#1a1209" strokeWidth="2.5" fill="none"/>
      <line x1="28" y1="41" x2="26" y2="38" stroke="#1a1209" strokeWidth="1.4"/>
      <line x1="34" y1="37" x2="33" y2="34" stroke="#1a1209" strokeWidth="1.4"/>
      <line x1="38" y1="36" x2="38" y2="33" stroke="#1a1209" strokeWidth="1.4"/>
      <line x1="43" y1="37" x2="44" y2="34" stroke="#1a1209" strokeWidth="1.4"/>
      <line x1="48" y1="41" x2="50" y2="38" stroke="#1a1209" strokeWidth="1.4"/>
      {/* Right */}
      <path d="M 68 40 Q 78 34 88 40 Q 86 48 82 50 Q 68 48 68 40 Z" fill="white" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="78" cy="44" r="5.5" fill="url(#bt-iris)"/>
      <circle cx="78" cy="44" r="3.2" fill="#1a1209"/>
      <ellipse cx="75.5" cy="41.5" rx="2.5" ry="1.8" fill="white" opacity="0.95"/>
      <circle cx="81" cy="47" r="1.1" fill="rgba(255,255,255,0.7)"/>
      <path d="M 68 40 Q 78 34 88 40" stroke="#1a1209" strokeWidth="2.5" fill="none"/>
      <line x1="68" y1="39" x2="66" y2="36" stroke="#1a1209" strokeWidth="1.4"/>
      <line x1="73" y1="35" x2="72" y2="32" stroke="#1a1209" strokeWidth="1.4"/>
      <line x1="78" y1="34" x2="78" y2="31" stroke="#1a1209" strokeWidth="1.4"/>
      <line x1="83" y1="35" x2="85" y2="32" stroke="#1a1209" strokeWidth="1.4"/>
      <line x1="88" y1="39" x2="90" y2="36" stroke="#1a1209" strokeWidth="1.4"/>

      {/* ── BROWS (strong, bold) ── */}
      <path d="M 26 37 Q 37 31 48 36" stroke="#1a1209" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 68 35 Q 78 29 88 34" stroke="#1a1209" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* ── NOSE ── */}
      <circle cx="54" cy="60" r="2.2" fill="#B07040" opacity="0.42"/>
      <circle cx="64" cy="60" r="2.2" fill="#B07040" opacity="0.42"/>
      <path d="M 59 50 Q 60 56 60 60" stroke="#C07848" strokeWidth="0.9" fill="none" opacity="0.4"/>

      {/* ── RED LIPS ── */}
      <path d="M 42 68 Q 50 64 60 66 Q 70 64 78 68 Q 76 74 70 76 Q 64 78 58 76 Q 52 74 42 68 Z" fill="#CC1830"/>
      <path d="M 42 68 Q 48 63 54 65 Q 58 63 64 65 Q 70 63 78 68" stroke="#A01028" strokeWidth="1.3" fill="none"/>
      <path d="M 42 68 Q 60 78 78 68" stroke="#A01028" strokeWidth="1.3" fill="none"/>
      <ellipse cx="60" cy="71" rx="6" ry="2" fill="rgba(255,160,160,0.4)"/>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// BIKER BENEDIKT — hipster cyclist, big curled moustache, smirk, cigarette
// ─────────────────────────────────────────────────────────────────────────────
export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bk-skin" cx="48%" cy="40%" r="57%">
          <stop offset="0%"   stopColor="#F4C898"/>
          <stop offset="50%"  stopColor="#E4A870"/>
          <stop offset="100%" stopColor="#C88050"/>
        </radialGradient>
        <linearGradient id="bk-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#4A3828"/>
          <stop offset="100%" stopColor="#1A0E06"/>
        </linearGradient>
        <radialGradient id="bk-iris" cx="35%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#5A8040"/>
          <stop offset="55%"  stopColor="#3A6020"/>
          <stop offset="100%" stopColor="#1A3808"/>
        </radialGradient>
        <linearGradient id="bk-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2E2E2E"/>
          <stop offset="100%" stopColor="#0A0A0A"/>
        </linearGradient>
        <linearGradient id="bk-jersey1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#C83020"/>
          <stop offset="100%" stopColor="#9A1A10"/>
        </linearGradient>
        <linearGradient id="bk-jersey2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F0F0F0"/>
          <stop offset="100%" stopColor="#D0D0D0"/>
        </linearGradient>
        <linearGradient id="bk-moustache" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#3A2818"/>
          <stop offset="50%"  stopColor="#2A1A08"/>
          <stop offset="100%" stopColor="#3A2818"/>
        </linearGradient>
        <linearGradient id="bk-stubble" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(50,30,10,0)"/>
          <stop offset="100%" stopColor="rgba(50,30,10,0.28)"/>
        </linearGradient>
      </defs>

      {/* ── JERSEY (visible at bottom) ── */}
      <path d="M 8 96 Q 18 90 44 88 Q 60 86 76 88 Q 102 90 112 96 L 112 120 Q 60 124 8 120 Z" fill="url(#bk-jersey2)" stroke="#1a1209" strokeWidth="1.5"/>
      <path d="M 8 96 Q 60 92 112 96 L 112 104 Q 60 108 8 104 Z" fill="url(#bk-jersey1)" stroke="none"/>
      <path d="M 8 110 Q 60 106 112 110 L 112 118 Q 60 122 8 118 Z" fill="url(#bk-jersey1)" stroke="none"/>
      {/* Jersey outline */}
      <path d="M 8 96 Q 18 90 44 88 Q 60 86 76 88 Q 102 90 112 96 L 112 120 Q 60 124 8 120 Z" fill="none" stroke="#1a1209" strokeWidth="1.5"/>
      {/* Collar */}
      <path d="M 46 88 Q 60 84 74 88 Q 68 92 60 92 Q 52 92 46 88 Z" fill="url(#bk-jersey2)" stroke="#1a1209" strokeWidth="1"/>
      {/* Sleeve */}
      <path d="M 8 96 Q 0 100 0 110 Q 4 114 12 110 Q 14 104 20 96 Z" fill="url(#bk-jersey2)" stroke="#1a1209" strokeWidth="1.2"/>
      <path d="M 8 100 Q 0 104 0 110" fill="url(#bk-jersey1)" stroke="none"/>
      {/* Race number */}
      <rect x="48" y="96" width="24" height="18" rx="2" fill="rgba(255,255,255,0.8)" stroke="#1a1209" strokeWidth="0.8"/>
      <text x="51" y="109" fontFamily="Georgia,serif" fontWeight="bold" fontSize="11" fill="#1a1209">42</text>

      {/* ── HEAD — square jaw, strong chin ── */}
      <path d="M 20 40 Q 18 16 40 8 Q 52 3 62 3 Q 74 3 86 8 Q 104 16 102 40 Q 104 60 96 70 Q 86 80 70 84 Q 60 86 52 84 Q 36 80 28 70 Q 18 60 20 40 Z" fill="url(#bk-skin)" stroke="#1a1209" strokeWidth="2"/>
      {/* Jaw squareness hint */}
      <path d="M 20 56 Q 26 72 38 80 Q 52 86 70 84 Q 86 80 98 70 Q 104 62 102 52" stroke="#B07840" strokeWidth="0.9" fill="none" opacity="0.35"/>
      {/* Chin cleft */}
      <path d="M 60 82 Q 60 78 60 84" stroke="#B07040" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* Stubble shadow */}
      <path d="M 20 58 Q 26 72 60 82 Q 94 72 102 58 Q 94 72 60 74 Q 26 72 20 58 Z" fill="url(#bk-stubble)"/>
      {/* Right ear */}
      <path d="M 100 38 Q 110 38 110 48 Q 110 58 100 58 Q 98 56 98 48 Q 98 40 100 38 Z" fill="url(#bk-skin)" stroke="#1a1209" strokeWidth="1.2"/>
      {/* Left ear */}
      <path d="M 22 38 Q 12 38 12 48 Q 12 58 22 58 Q 24 56 24 48 Q 24 40 22 38 Z" fill="url(#bk-skin)" stroke="#1a1209" strokeWidth="1.2"/>

      {/* ── HAIR visible under / around cap ── */}
      <path d="M 20 40 Q 18 18 40 8 Q 52 3 62 3 Q 74 3 86 8 Q 104 16 102 38 Q 94 24 80 18 Q 62 12 44 16 Q 30 20 20 40 Z" fill="url(#bk-hair)" stroke="#1a1209" strokeWidth="1.3"/>
      {/* Sideburns */}
      <path d="M 20 44 Q 14 52 16 62 Q 18 56 22 50 Z" fill="url(#bk-hair)" stroke="#1a1209" strokeWidth="0.9"/>
      <path d="M 102 44 Q 108 52 106 62 Q 104 56 100 50 Z" fill="url(#bk-hair)" stroke="#1a1209" strokeWidth="0.9"/>

      {/* ── CASQUETTE (track cycling cap) ── */}
      <path d="M 20 36 Q 18 14 40 6 Q 52 2 62 2 Q 74 2 86 6 Q 104 14 102 36 Q 92 40 60 40 Q 28 40 20 36 Z" fill="url(#bk-cap)" stroke="#1a1209" strokeWidth="1.8"/>
      {/* Short flat brim at front */}
      <path d="M 22 36 Q 60 40 100 36 Q 102 40 100 42 Q 60 46 22 42 Q 20 40 22 36 Z" fill="#1A1A1A" stroke="#1a1209" strokeWidth="1.3"/>
      <circle cx="60" cy="5" r="2.2" fill="#080808" stroke="#1a1209" strokeWidth="0.7"/>
      <line x1="44" y1="6" x2="34" y2="36" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 3"/>
      <line x1="78" y1="6" x2="88" y2="36" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 3"/>
      <path d="M 24" y1="42" x2="98" y2="42"/>
      <path d="M 24 42 Q 60 44 98 42" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" fill="none"/>

      {/* ── EYES — confident Disney eyes ── */}
      {/* Left */}
      <path d="M 26 44 Q 36 38 46 44 Q 44 52 40 54 Q 26 52 26 44 Z" fill="white" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="36" cy="48" r="5.5" fill="url(#bk-iris)"/>
      <circle cx="36" cy="48" r="3.2" fill="#1a1209"/>
      <ellipse cx="33.5" cy="45.5" rx="2.5" ry="1.8" fill="white" opacity="0.95"/>
      <circle cx="39" cy="51" r="1.1" fill="rgba(255,255,255,0.7)"/>
      <path d="M 26 44 Q 36 38 46 44" stroke="#1a1209" strokeWidth="2.2" fill="none"/>
      <line x1="26" y1="43" x2="24" y2="40" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="31" y1="39" x2="30" y2="36" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="36" y1="38" x2="36" y2="35" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="41" y1="39" x2="42" y2="36" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="46" y1="43" x2="48" y2="40" stroke="#1a1209" strokeWidth="1.3"/>
      {/* Right */}
      <path d="M 72 43 Q 82 37 92 43 Q 90 51 86 53 Q 72 51 72 43 Z" fill="white" stroke="#1a1209" strokeWidth="1.2"/>
      <circle cx="82" cy="47" r="5.5" fill="url(#bk-iris)"/>
      <circle cx="82" cy="47" r="3.2" fill="#1a1209"/>
      <ellipse cx="79.5" cy="44.5" rx="2.5" ry="1.8" fill="white" opacity="0.95"/>
      <circle cx="85" cy="50" r="1.1" fill="rgba(255,255,255,0.7)"/>
      <path d="M 72 43 Q 82 37 92 43" stroke="#1a1209" strokeWidth="2.2" fill="none"/>
      <line x1="72" y1="42" x2="70" y2="39" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="77" y1="38" x2="76" y2="35" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="82" y1="37" x2="82" y2="34" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="87" y1="38" x2="88" y2="35" stroke="#1a1209" strokeWidth="1.3"/>
      <line x1="92" y1="42" x2="94" y2="39" stroke="#1a1209" strokeWidth="1.3"/>

      {/* ── BROWS (strong, slightly raised one side — smirk) ── */}
      <path d="M 24 39 Q 35 33 46 38" stroke="#2A1808" strokeWidth="2.3" fill="none" strokeLinecap="round"/>
      {/* Right brow slightly raised */}
      <path d="M 72 37 Q 82 30 92 36" stroke="#2A1808" strokeWidth="2.3" fill="none" strokeLinecap="round"/>

      {/* ── NOSE ── */}
      <circle cx="54" cy="62" r="2.5" fill="#B07040" opacity="0.44"/>
      <circle cx="66" cy="62" r="2.5" fill="#B07040" opacity="0.44"/>
      <path d="M 60 50 Q 62 56 62 62" stroke="#C07848" strokeWidth="1" fill="none" opacity="0.38"/>

      {/* ── SMIRK (right side raised) ── */}
      <path d="M 38 70 Q 50 66 60 68 Q 70 66 80 70 Q 72 76 64 76 Q 56 74 38 70 Z" fill="#C07858" opacity="0.55"/>
      <path d="M 38 70 Q 46 67 54 69 Q 60 67 70 67 Q 76 67 80 70" stroke="#1a1209" strokeWidth="1.5" fill="none"/>
      <path d="M 38 70 Q 60 78 80 70" stroke="#A06040" strokeWidth="1.2" fill="none"/>
      <path d="M 80 70 Q 84 67 82 74" stroke="#B07040" strokeWidth="0.9" fill="none" opacity="0.6"/>

      {/* ── HANDLEBAR MOUSTACHE — very big, very Disney ── */}
      {/* Centre mass */}
      <path d="M 38 67 Q 60 72 82 67 Q 80 76 72 77 Q 60 79 48 77 Q 40 76 38 67 Z" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="1"/>
      {/* LEFT CURL — thick arm curling up */}
      <path d="M 38 67 Q 30 64 24 66 Q 18 70 20 78 Q 22 84 28 82 Q 32 80 30 74 Q 32 68 38 67 Z" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="1.1"/>
      {/* Left curl tip — final upward spiral */}
      <path d="M 20 78 Q 16 84 20 88 Q 24 86 22 80" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="0.9"/>
      {/* RIGHT CURL */}
      <path d="M 82 67 Q 90 64 96 66 Q 102 70 100 78 Q 98 84 92 82 Q 88 80 90 74 Q 88 68 82 67 Z" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="1.1"/>
      {/* Right curl tip */}
      <path d="M 100 78 Q 104 84 100 88 Q 96 86 98 80" fill="url(#bk-moustache)" stroke="#1a1209" strokeWidth="0.9"/>
      {/* Moustache highlight */}
      <path d="M 42 67 Q 60 73 78 67" stroke="#6A4820" strokeWidth="0.9" fill="none" opacity="0.5"/>

      {/* ── CIGARETTE ── */}
      <rect x="78" y="70" width="14" height="3.5" rx="1.5" fill="white" stroke="#CCCCCC" strokeWidth="0.5"/>
      <ellipse cx="92" cy="71.5" rx="2.5" ry="1.8" fill="#E03010"/>
      <ellipse cx="92" cy="71.5" rx="1.2" ry="0.9" fill="#FF6030" opacity="0.8"/>
      <path d="M 92 69 Q 94 64 92 58" stroke="#C8C8C8" strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M 93 69 Q 96 62 94 54" stroke="#C0C0C0" strokeWidth="0.8" fill="none" opacity="0.5"/>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Character data + order
// ─────────────────────────────────────────────────────────────────────────────
export const CHARACTERS = {
  luis:     { id: 'luis',     name: 'Little Luis',    tagline: 'Safe & away from traffic',         routeType: 'safest',  mode: 'walk', color: '#2563eb', cardBg: '#dbeafe', Avatar: LuisAvatar,     voice: (dist, time) => `Luis found a safe path! No scary roads. ${dist} km · ${time} min` },
  anne:     { id: 'anne',     name: 'Aunt Anne',       tagline: 'Slow strolls with her Pomeranian', routeType: 'nicest',  mode: 'walk', color: '#16a34a', cardBg: '#bbf7d0', Avatar: AnneAvatar,     voice: (dist, time) => `Anne took the scenic way. Her Pomeranian approves. ${time} min of bliss.` },
  beate:    { id: 'beate',    name: 'Busy Beate',      tagline: 'No time to waste',                 routeType: 'fastest', mode: 'walk', color: '#d97706', cardBg: '#fde68a', Avatar: BeateAvatar,    voice: (dist, time) => `Beate approves. ${dist} km, ${time} min. Straight to the point.` },
  benedikt: { id: 'benedikt', name: 'Biker Benedikt',  tagline: 'Always on his fixie',              routeType: 'bike',    mode: 'bike', color: '#ea580c', cardBg: '#fed7aa', Avatar: BenediktAvatar, voice: (dist, time) => `Benedikt mapped his route. ${dist} km. Helmet optional.` },
}

export const CHARACTER_ORDER = ['luis', 'anne', 'beate', 'benedikt']
