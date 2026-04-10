const OUTLINE = '#1a1209'
const SKIN    = '#F5C0A0'

// ── Little Karl ───────────────────────────────────────────────────────────────
export function KarlAvatar() {
  return (
    <svg viewBox="0 0 108 148" width="108" height="148" fill="none">

      {/* Backpack — behind body */}
      <rect x="6" y="50" width="22" height="33" rx="5" fill="#F5C31A" stroke={OUTLINE} strokeWidth="3"/>
      <rect x="8" y="48" width="18" height="8"  rx="3" fill="#E8B510" stroke={OUTLINE} strokeWidth="2.5"/>
      <rect x="10" y="67" width="14" height="8" rx="2" fill="#E8B510" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="17" cy="71" r="2.5" fill="#F5C31A" stroke={OUTLINE} strokeWidth="1.5"/>

      {/* Back arm — swings back and down */}
      <path d="M22 64 Q9 72 7 85"  stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M22 64 Q9 72 7 85"  stroke="#2D4AB5"  strokeWidth="7"  strokeLinecap="round"/>
      {/* Back hand — palm + 5 fingers pointing downward */}
      <ellipse cx="8" cy="86" rx="9" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Thumb — angled left */}
      <path d="M2 84 Q-7 82 -8 76 Q-6 71 -1 73 Q3 75 3 81Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* 4 fingers down */}
      <rect x="1"   y="92" width="4"   height="12" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="5.5" y="93" width="4.5" height="13" rx="2.2" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="10.5"y="92" width="4"   height="12" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="15"  y="91" width="3.5" height="10" rx="1.8" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>

      {/* Back leg — thigh → knee → calf → ankle → shoe */}
      <path d="M30 84 Q20 98 22 112"  stroke={OUTLINE} strokeWidth="14" strokeLinecap="round"/>
      <path d="M30 84 Q20 98 22 112"  stroke="#2D4AB5"  strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="22" cy="112" rx="9" ry="8" fill="#2D4AB5" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M22 112 Q18 124 22 134" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M22 112 Q18 124 22 134" stroke="#2D4AB5"  strokeWidth="7"  strokeLinecap="round"/>
      <ellipse cx="22" cy="134" rx="6" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M10 134 Q8 142 19 142 Q31 142 35 138 Q35 134 27 134Z" fill={OUTLINE}/>

      {/* Body */}
      <rect x="18" y="51" width="52" height="36" rx="10" fill="#2D4AB5" stroke={OUTLINE} strokeWidth="3.5"/>
      <line x1="18" y1="60" x2="70" y2="60" stroke="white" strokeWidth="4"   opacity="0.85"/>
      <line x1="18" y1="69" x2="70" y2="69" stroke="white" strokeWidth="4"   opacity="0.85"/>
      <line x1="18" y1="78" x2="70" y2="78" stroke="white" strokeWidth="3.5" opacity="0.8"/>

      {/* Front leg — thigh → knee → calf → ankle → shoe */}
      <path d="M54 84 Q64 98 62 113"  stroke={OUTLINE} strokeWidth="14" strokeLinecap="round"/>
      <path d="M54 84 Q64 98 62 113"  stroke="#2D4AB5"  strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="62" cy="113" rx="9" ry="8" fill="#2D4AB5" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M62 113 Q66 125 62 135" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M62 113 Q66 125 62 135" stroke="#2D4AB5"  strokeWidth="7"  strokeLinecap="round"/>
      <ellipse cx="62" cy="135" rx="6" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M51 135 Q49 143 60 143 Q74 143 78 139 Q78 135 68 135Z" fill={OUTLINE}/>

      {/* Neck */}
      <rect x="46" y="45" width="14" height="9" fill={SKIN}/>

      {/* Head — profile right */}
      <circle cx="54" cy="24" r="21" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      <path d="M34 15 Q54 2 74 15 Q70 3 54 4 Q38 3 34 15Z" fill={OUTLINE}/>
      <ellipse cx="35" cy="27" rx="5.5" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      <circle cx="65" cy="18" r="7" fill={OUTLINE}/>
      <circle cx="66.5" cy="16.5" r="3" fill="white"/>
      <path d="M74 24 L80 28 L74 32" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M68 37 Q76 41 71 42" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Front arm — raised, holding ice cream */}
      <path d="M68 62 Q80 50 84 37"  stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M68 62 Q80 50 84 37"  stroke="#2D4AB5"  strokeWidth="7"  strokeLinecap="round"/>
      {/* Right hand — palm + 5 fingers gripping upward */}
      <ellipse cx="84" cy="37" rx="9" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Thumb — angled right */}
      <path d="M91 35 Q99 33 101 27 Q99 22 94 24 Q90 27 91 33Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* 4 fingers upward */}
      <rect x="76"  y="23" width="4"   height="15" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="80.5"y="20" width="4.5" height="18" rx="2.2" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="85.5"y="21" width="4"   height="17" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="90"  y="24" width="3.5" height="14" rx="1.8" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>

      {/* Ice cream */}
      <path d="M80 35 L86 55 L92 35 Z" fill="#8B5E3C" stroke={OUTLINE} strokeWidth="2.5"/>
      <line x1="81.5" y1="42" x2="90.5" y2="42" stroke="#6B3E1C" strokeWidth="1.5"/>
      <line x1="82.5" y1="48" x2="89.5" y2="48" stroke="#6B3E1C" strokeWidth="1.5"/>
      <circle cx="86" cy="22" r="13" fill="#F5A0B8" stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="86" cy="10" r="5"  fill="#D44F3C" stroke={OUTLINE} strokeWidth="2"/>
    </svg>
  )
}

// ── Aunt Erna ─────────────────────────────────────────────────────────────────
export function ErnaAvatar() {
  return (
    <svg viewBox="0 0 152 142" width="152" height="142" fill="none">

      {/* Head — profile right */}
      <circle cx="30" cy="24" r="19" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Hair bun */}
      <ellipse cx="30" cy="11" rx="16" ry="10" fill="#C0BCBA" stroke={OUTLINE} strokeWidth="3"/>
      <ellipse cx="25" cy="16" rx="11"  ry="7"  fill="#C8C4C0" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Ear */}
      <ellipse cx="14" cy="27" rx="5.5" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      <circle cx="14" cy="33" r="3.5" fill="#D44F3C" stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Eye */}
      <circle cx="38" cy="19" r="6" fill={OUTLINE}/>
      <circle cx="39.5" cy="17.5" r="2.5" fill="white"/>
      {/* Glasses */}
      <circle cx="38" cy="22" r="7.5" stroke={OUTLINE} strokeWidth="2.5" fill="rgba(180,220,255,0.25)"/>
      <line x1="30.5" y1="21" x2="24" y2="22" stroke={OUTLINE} strokeWidth="2"/>
      {/* Nose */}
      <path d="M46 27 L52 31 L46 35" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Smile */}
      <path d="M40 37 Q47 40 43 41" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <rect x="24" y="41" width="12" height="8" fill={SKIN}/>

      {/* Body — sage green polka dot coat */}
      <rect x="8" y="47" width="40" height="34" rx="10" fill="#4A8060" stroke={OUTLINE} strokeWidth="3.5"/>
      <path d="M28 49 L24 56 M28 49 L32 56" stroke="#F5EDD8" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="16" cy="57" r="2.5" fill="#A0C890"/>
      <circle cx="28" cy="55" r="2.5" fill="#A0C890"/>
      <circle cx="38" cy="57" r="2.5" fill="#A0C890"/>
      <circle cx="20" cy="65" r="2.5" fill="#A0C890"/>
      <circle cx="34" cy="65" r="2.5" fill="#A0C890"/>
      <circle cx="28" cy="72" r="2.5" fill="#A0C890"/>

      {/* Left arm — holds cane, swings forward */}
      <path d="M10 57 Q2 63 4 76"   stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M10 57 Q2 63 4 76"   stroke="#4A8060"  strokeWidth="7"  strokeLinecap="round"/>
      {/* Left hand — palm + 5 fingers (holding cane) */}
      <ellipse cx="4" cy="77" rx="8" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Thumb */}
      <path d="M-2 75 Q-10 73 -11 67 Q-9 62 -4 64 Q0 67 -1 73Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* 4 fingers down (gripping cane) */}
      <rect x="-1"  y="83" width="4"   height="12" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="3.5" y="84" width="4"   height="13" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="8"   y="83" width="3.5" height="12" rx="1.8" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="12"  y="82" width="3"   height="10" rx="1.5" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      {/* Cane */}
      <line x1="4" y1="77" x2="5" y2="118" stroke="#8B5E3C" strokeWidth="4" strokeLinecap="round"/>
      <path d="M2 118 Q5 124 10 119" stroke="#8B5E3C" strokeWidth="3.5" strokeLinecap="round" fill="none"/>

      {/* Right arm — leash to dog */}
      <path d="M46 57 Q58 62 60 74"  stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M46 57 Q58 62 60 74"  stroke="#4A8060"  strokeWidth="7"  strokeLinecap="round"/>
      {/* Right hand — palm + 5 fingers (holding leash) */}
      <ellipse cx="60" cy="75" rx="8" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Thumb */}
      <path d="M66 73 Q74 71 75 65 Q73 60 68 62 Q64 65 65 71Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* 4 fingers down */}
      <rect x="53"  y="81" width="4"   height="12" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="57.5"y="82" width="4"   height="13" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="62"  y="81" width="3.5" height="12" rx="1.8" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="66"  y="80" width="3"   height="10" rx="1.5" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      {/* Leash */}
      <path d="M60 74 C70 68 85 66 96 70" stroke={OUTLINE} strokeWidth="2" strokeDasharray="3 4" fill="none"/>

      {/* Back leg — slow stroll, upright stride */}
      <path d="M16 80 Q10 94 12 108"  stroke={OUTLINE} strokeWidth="14" strokeLinecap="round"/>
      <path d="M16 80 Q10 94 12 108"  stroke="#4A8060"  strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="12" cy="108" rx="9" ry="8" fill="#4A8060" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M12 108 Q10 119 12 129" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M12 108 Q10 119 12 129" stroke="#4A8060"  strokeWidth="7"  strokeLinecap="round"/>
      <ellipse cx="12" cy="129" rx="6" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M0 129 Q-2 137 9 137 Q21 137 25 133 Q25 129 17 129Z" fill={OUTLINE}/>

      {/* Front leg */}
      <path d="M32 80 Q40 94 38 108"  stroke={OUTLINE} strokeWidth="14" strokeLinecap="round"/>
      <path d="M32 80 Q40 94 38 108"  stroke="#4A8060"  strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="38" cy="108" rx="9" ry="8" fill="#4A8060" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M38 108 Q42 119 38 129" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M38 108 Q42 119 38 129" stroke="#4A8060"  strokeWidth="7"  strokeLinecap="round"/>
      <ellipse cx="38" cy="129" rx="6" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M27 129 Q25 137 36 137 Q50 137 54 133 Q54 129 44 129Z" fill={OUTLINE}/>

      {/* Pomeranian dog */}
      <circle cx="106" cy="76" r="11" fill="#D4B896" stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="97"  cy="70" r="8"  fill="#D4B896" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="105" cy="64" r="7"  fill="#D4B896" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="113" cy="63" r="8"  fill="#E8C880" stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M111 56 Q116 50 120 57" fill="#C8A050" stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="118" cy="61" r="2.5" fill={OUTLINE}/>
      <circle cx="120" cy="66" r="1.8" fill="#555"/>
      <path d="M118 70 Q121 74 122 70" fill="#F48080"/>
      <path d="M107 66 Q113 68 118 66" stroke="#D44F3C" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Dog legs */}
      <path d="M98 84 Q96 92 98 100"  stroke={OUTLINE} strokeWidth="6" strokeLinecap="round"/>
      <path d="M98 84 Q96 92 98 100"  stroke="#C8A050" strokeWidth="4" strokeLinecap="round"/>
      <path d="M106 85 Q106 93 106 101" stroke={OUTLINE} strokeWidth="6" strokeLinecap="round"/>
      <path d="M106 85 Q106 93 106 101" stroke="#C8A050" strokeWidth="4" strokeLinecap="round"/>
      <path d="M114 84 Q116 92 114 100" stroke={OUTLINE} strokeWidth="6" strokeLinecap="round"/>
      <path d="M114 84 Q116 92 114 100" stroke="#C8A050" strokeWidth="4" strokeLinecap="round"/>
      {/* Paws */}
      <ellipse cx="98"  cy="102" rx="5" ry="3" fill="#C8A050" stroke={OUTLINE} strokeWidth="1.8"/>
      <ellipse cx="106" cy="103" rx="5" ry="3" fill="#C8A050" stroke={OUTLINE} strokeWidth="1.8"/>
      <ellipse cx="114" cy="102" rx="5" ry="3" fill="#C8A050" stroke={OUTLINE} strokeWidth="1.8"/>
    </svg>
  )
}

// ── Busy Beatrice ─────────────────────────────────────────────────────────────
export function BeatriceAvatar() {
  return (
    <svg viewBox="0 0 108 148" width="108" height="148" fill="none">

      {/* Back arm — raised holding phone near ear */}
      <path d="M18 60 Q8 50 10 36"   stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M18 60 Q8 50 10 36"   stroke="#D44F3C"  strokeWidth="7"  strokeLinecap="round"/>
      {/* Left hand — palm + 5 fingers (holding phone) */}
      <ellipse cx="10" cy="34" rx="9" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Thumb */}
      <path d="M4 36 Q-4 38 -5 44 Q-3 49 2 47 Q6 44 5 38Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* 4 fingers upward */}
      <rect x="3"    y="20" width="4"   height="15" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="7.5"  y="17" width="4.5" height="18" rx="2.2" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="12.5" y="18" width="4"   height="17" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="17"   y="21" width="3.5" height="14" rx="1.8" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      {/* Phone */}
      <rect x="2" y="14" width="9" height="16" rx="2.5" fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5"/>
      <rect x="3" y="16" width="7" height="10" rx="1.5" fill="#334155"/>
      <circle cx="6.5" cy="27" r="1.5" fill="#475569"/>

      {/* Head — profile right */}
      <circle cx="34" cy="24" r="20" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Hair updo */}
      <path d="M15 15 Q34 2 53 15 Q49 3 34 4 Q19 3 15 15Z" fill={OUTLINE}/>
      <ellipse cx="34" cy="9" rx="10" ry="7" fill={OUTLINE}/>
      {/* Ear */}
      <ellipse cx="16" cy="27" rx="5.5" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      <line x1="16" y1="31" x2="16" y2="38" stroke="#F5C31A" strokeWidth="2"/>
      <circle cx="16" cy="39" r="3.5" fill="#F5C31A" stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Eye */}
      <circle cx="43" cy="19" r="7" fill={OUTLINE}/>
      <circle cx="44.5" cy="17.5" r="3" fill="white"/>
      {/* Nose */}
      <path d="M52 25 L58 29 L52 33" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Lips */}
      <path d="M46 37 Q53 40 49 41" stroke="#D44F3C" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <rect x="28" y="42" width="12" height="9" fill={SKIN}/>

      {/* Body — red vertical-stripe blazer */}
      <rect x="12" y="49" width="50" height="36" rx="10" fill="#D44F3C" stroke={OUTLINE} strokeWidth="3.5"/>
      <line x1="22" y1="49" x2="22" y2="85" stroke="white" strokeWidth="3"   opacity="0.8"/>
      <line x1="32" y1="49" x2="32" y2="85" stroke="white" strokeWidth="3"   opacity="0.8"/>
      <line x1="42" y1="49" x2="42" y2="85" stroke="white" strokeWidth="3"   opacity="0.8"/>
      <rect x="42" y="54" width="10" height="8" rx="1.5" fill="white" stroke={OUTLINE} strokeWidth="1.5"/>

      {/* Front arm — carries bags, hand down */}
      <path d="M60 60 Q72 66 74 80"  stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M60 60 Q72 66 74 80"  stroke="#D44F3C"  strokeWidth="7"  strokeLinecap="round"/>
      {/* Right hand — palm + 5 fingers (carrying bags) */}
      <ellipse cx="74" cy="81" rx="9" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Thumb */}
      <path d="M80 79 Q88 77 89 71 Q87 66 82 68 Q78 71 79 77Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* 4 fingers down */}
      <rect x="67"  y="87" width="4"   height="13" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="71.5"y="88" width="4.5" height="14" rx="2.2" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="76.5"y="87" width="4"   height="13" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="81"  y="86" width="3.5" height="11" rx="1.8" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>

      {/* Handbag — yellow */}
      <rect x="70" y="90" width="26" height="18" rx="4" fill="#F5C31A" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M73 90 Q83 81 93 90"  stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <rect x="76" y="96" width="12" height="7"  rx="2" fill="#D4A810" stroke={OUTLINE} strokeWidth="2"/>
      {/* Shopping bag */}
      <rect x="72" y="104" width="22" height="18" rx="3" fill="white" stroke={OUTLINE} strokeWidth="2.5"/>
      <line x1="76" y1="104" x2="75" y2="96"  stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="90" y1="104" x2="91" y2="96"  stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="72" y="116" width="22" height="6" rx="0" fill="#D44F3C"/>

      {/* Back leg — dynamic fast stride */}
      <path d="M20 84 Q10 99 12 114"  stroke={OUTLINE} strokeWidth="14" strokeLinecap="round"/>
      <path d="M20 84 Q10 99 12 114"  stroke={OUTLINE}  strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="12" cy="114" rx="9" ry="8" fill={OUTLINE} stroke={OUTLINE} strokeWidth="3"/>
      <path d="M12 114 Q8 126 12 136"  stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <ellipse cx="12" cy="136" rx="6" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M0 136 Q-2 144 9 144 Q21 144 25 140 Q25 136 17 136Z" fill={OUTLINE}/>

      {/* Front leg — longer stride forward */}
      <path d="M44 84 Q56 99 54 115"  stroke={OUTLINE} strokeWidth="14" strokeLinecap="round"/>
      <path d="M44 84 Q56 99 54 115"  stroke={OUTLINE}  strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="54" cy="115" rx="9" ry="8" fill={OUTLINE} stroke={OUTLINE} strokeWidth="3"/>
      <path d="M54 115 Q58 127 54 137" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <ellipse cx="54" cy="137" rx="6" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M43 137 Q41 145 52 145 Q66 145 70 141 Q70 137 60 137Z" fill={OUTLINE}/>
    </svg>
  )
}

// ── Biker Benedikt ────────────────────────────────────────────────────────────
export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 150 114" width="150" height="114" fill="none">

      {/* Head — profile right */}
      <circle cx="34" cy="24" r="18" fill={SKIN} stroke={OUTLINE} strokeWidth="3.5"/>
      {/* Helmet */}
      <ellipse cx="34" cy="13" rx="19" ry="13" fill="#E86020" stroke={OUTLINE} strokeWidth="3.5"/>
      <rect x="15" y="16" width="38" height="10" rx="3" fill="#E86020" stroke={OUTLINE} strokeWidth="2.5"/>
      <rect x="20" y="8"  width="4" height="10" rx="2" fill="#C85000"/>
      <rect x="27" y="7"  width="4" height="11" rx="2" fill="#C85000"/>
      <rect x="34" y="7"  width="4" height="11" rx="2" fill="#C85000"/>
      <rect x="41" y="8"  width="4" height="10" rx="2" fill="#C85000"/>
      <path d="M16 21 Q15 28 22 31" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Ear */}
      <ellipse cx="18" cy="28" rx="5.5" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="3"/>
      {/* Sunglasses */}
      <ellipse cx="42" cy="24" rx="9" ry="6.5" fill="#0f2a4a" stroke={OUTLINE} strokeWidth="2.5"/>
      <line x1="33" y1="23" x2="28" y2="24" stroke={OUTLINE} strokeWidth="2"/>
      <ellipse cx="39" cy="21" rx="3" ry="1.8" fill="rgba(255,255,255,0.22)" transform="rotate(-20 39 21)"/>
      {/* Nose */}
      <path d="M50 29 L56 33 L50 37" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Handlebar moustache */}
      <path d="M38 37 Q42 33 46 35 Q50 33 46 39 Q44 37 42 38 Q40 39 38 37Z" fill={OUTLINE}/>
      {/* Cigarette + ember + smoke */}
      <rect x="46" y="35" width="15" height="4" rx="2" fill="#FFFDE0" stroke={OUTLINE} strokeWidth="1.5"/>
      <rect x="58" y="35" width="4"  height="4" rx="1" fill="#F97316"/>
      <circle cx="62" cy="35" r="2.5" fill="#ef4444" opacity="0.65"/>
      <path d="M63 33 Q66 28 64 26" stroke="#bbb" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M65 32 Q69 27 67 25" stroke="#bbb" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <rect x="28" y="40" width="12" height="8" fill={SKIN}/>

      {/* Body — orange cycling jersey */}
      <path d="M10 48 Q30 44 52 48 L54 66 L8 66 Z" fill="#E86020" stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      <line x1="16" y1="48" x2="14" y2="66" stroke="#C85000" strokeWidth="5"/>
      <line x1="46" y1="48" x2="48" y2="66" stroke="#C85000" strokeWidth="5"/>
      <rect x="20" y="52" width="22" height="11" rx="2" fill="#F5EDD8" stroke={OUTLINE} strokeWidth="2"/>
      <text x="31" y="62" textAnchor="middle" fontSize="7" fontWeight="900" fill={OUTLINE} fontFamily="sans-serif">42</text>

      {/* Left arm — to handlebar, with 5-finger hand */}
      <path d="M10 54 Q4 52 6 44"   stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M10 54 Q4 52 6 44"   stroke="#E86020"  strokeWidth="7"  strokeLinecap="round"/>
      {/* Left hand — gripping handlebar */}
      <ellipse cx="6" cy="43" rx="8" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Thumb */}
      <path d="M1 41 Q-7 39 -8 33 Q-6 28 -1 30 Q3 33 2 39Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* 4 fingers */}
      <rect x="-1"  y="29" width="4"   height="14" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="3.5" y="27" width="4"   height="16" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="8"   y="28" width="3.5" height="15" rx="1.8" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="12"  y="30" width="3"   height="13" rx="1.5" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>

      {/* Right arm — to handlebar */}
      <path d="M52 54 Q68 50 76 45"  stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M52 54 Q68 50 76 45"  stroke="#E86020"  strokeWidth="7"  strokeLinecap="round"/>
      {/* Right hand — gripping handlebar */}
      <ellipse cx="76" cy="44" rx="8" ry="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Thumb */}
      <path d="M82 42 Q90 40 91 34 Q89 29 84 31 Q80 34 81 40Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* 4 fingers */}
      <rect x="70"  y="30" width="4"   height="14" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="74.5"y="28" width="4"   height="16" rx="2"   fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="79"  y="29" width="3.5" height="15" rx="1.8" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>
      <rect x="83"  y="31" width="3"   height="13" rx="1.5" fill={SKIN} stroke={OUTLINE} strokeWidth="1.8"/>

      {/* Cycling legs — pedaling position */}
      {/* Back leg — pushing back/up */}
      <path d="M18 66 Q12 72 14 82"  stroke={OUTLINE} strokeWidth="13" strokeLinecap="round"/>
      <path d="M18 66 Q12 72 14 82"  stroke="#2D4A20"  strokeWidth="9"  strokeLinecap="round"/>
      <ellipse cx="14" cy="82" rx="8" ry="7" fill="#2D4A20" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M14 82 Q16 90 12 96"  stroke={OUTLINE} strokeWidth="10" strokeLinecap="round"/>
      <path d="M14 82 Q16 90 12 96"  stroke="#2D4A20"  strokeWidth="6"  strokeLinecap="round"/>
      {/* Back foot on pedal */}
      <ellipse cx="12" cy="96" rx="5" ry="4" fill={SKIN} stroke={OUTLINE} strokeWidth="2"/>
      <rect x="4" y="96" width="16" height="5" rx="2" fill={OUTLINE}/>

      {/* Front leg — pushing down */}
      <path d="M36 66 Q44 72 42 83"  stroke={OUTLINE} strokeWidth="13" strokeLinecap="round"/>
      <path d="M36 66 Q44 72 42 83"  stroke="#2D4A20"  strokeWidth="9"  strokeLinecap="round"/>
      <ellipse cx="42" cy="83" rx="8" ry="7" fill="#2D4A20" stroke={OUTLINE} strokeWidth="3"/>
      <path d="M42 83 Q44 93 40 100" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round"/>
      <path d="M42 83 Q44 93 40 100" stroke="#2D4A20"  strokeWidth="6"  strokeLinecap="round"/>
      {/* Front foot on pedal */}
      <ellipse cx="40" cy="100" rx="5" ry="4" fill={SKIN} stroke={OUTLINE} strokeWidth="2"/>
      <rect x="32" y="100" width="16" height="5" rx="2" fill={OUTLINE}/>

      {/* Rear wheel */}
      <circle cx="18" cy="88" r="12" stroke={OUTLINE} strokeWidth="3.5" fill="none"/>
      <circle cx="18" cy="88" r="4"  fill={OUTLINE}/>
      <line x1="18" y1="76" x2="18" y2="100" stroke="#888" strokeWidth="1.5"/>
      <line x1="6"  y1="88" x2="30" y2="88"  stroke="#888" strokeWidth="1.5"/>
      <line x1="9"  y1="79" x2="27" y2="97"  stroke="#888" strokeWidth="1.2"/>
      <line x1="27" y1="79" x2="9"  y2="97"  stroke="#888" strokeWidth="1.2"/>

      {/* Front wheel */}
      <circle cx="88" cy="76" r="14" stroke={OUTLINE} strokeWidth="3.5" fill="none"/>
      <circle cx="88" cy="76" r="4"  fill={OUTLINE}/>
      <line x1="88" y1="62" x2="88" y2="90"  stroke="#888" strokeWidth="1.5"/>
      <line x1="74" y1="76" x2="102" y2="76"  stroke="#888" strokeWidth="1.5"/>
      <line x1="78" y1="66" x2="98" y2="86"  stroke="#888" strokeWidth="1.2"/>
      <line x1="98" y1="66" x2="78" y2="86"  stroke="#888" strokeWidth="1.2"/>

      {/* Bike frame */}
      <path d="M18 88 L30 56 L58 56 L88 76" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinejoin="round"/>
      <path d="M30 56 L18 88" stroke="#aaa" strokeWidth="2"/>
      {/* Handlebars */}
      <path d="M58 56 L78 50"  stroke={OUTLINE} strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M78 50 L82 44"  stroke={OUTLINE} strokeWidth="3"   strokeLinecap="round"/>
      <path d="M78 50 L82 56"  stroke={OUTLINE} strokeWidth="3"   strokeLinecap="round"/>
      {/* Saddle */}
      <path d="M28 56 L44 56"  stroke={OUTLINE} strokeWidth="5"   strokeLinecap="round"/>
      {/* Chain ring */}
      <circle cx="30" cy="74" r="6" stroke={OUTLINE} strokeWidth="2.5" fill="none"/>
      <circle cx="30" cy="74" r="2" fill={OUTLINE}/>
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
