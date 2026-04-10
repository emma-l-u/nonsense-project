const OUTLINE = '#1a1209'
const SKIN    = '#E8C09A'   // warm dusty skin
const COBALT  = '#2D4AB5'   // cobalt blue
const DPINK   = '#C87268'   // dusty pink
const ORANGE  = '#E06020'   // editorial orange
const CREAM   = '#F5EDDC'   // warm cream
const GOLD    = '#C9A227'   // golden yellow
const GREY    = '#9B9086'   // warm grey

// ── Karl ──────────────────────────────────────────────────────────────────────
export function KarlAvatar() {
  return (
    <svg viewBox="0 0 112 160" width="112" height="160" fill="none">

      {/* Backpack — organic shape behind body */}
      <path d="M8 52 Q6 48 10 47 L28 47 Q32 47 32 51 L32 82 Q32 87 28 88 L10 88 Q6 88 5 83 Z"
            fill={GOLD} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      <path d="M10 47 Q19 41 28 47" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M11 67 Q20 65 30 67" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="19" cy="76" r="4" fill="#A07A10" stroke={OUTLINE} strokeWidth="2"/>

      {/* Back arm — swings behind */}
      <path d="M22 66 Q8 76 5 92"  stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M22 66 Q8 76 5 92"  stroke={COBALT}  strokeWidth="8"  strokeLinecap="round"/>
      {/* Left hand — open palm, fingers point slightly back/down */}
      {/* Palm */}
      <path d="M1 90 Q-3 88 -3 82 Q-2 76 2 77 Q1 71 4 70 Q8 69 9 75 Q9 69 13 68 Q17 68 17 74
               Q17 68 21 69 Q25 70 23 76 Q27 75 27 81 Q27 88 21 92 Q13 96 5 94 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>

      {/* Back leg — thigh → knee → calf → shoe */}
      <path d="M30 90 Q19 106 20 120" stroke={OUTLINE} strokeWidth="14" strokeLinecap="round"/>
      <path d="M30 90 Q19 106 20 120" stroke={COBALT}  strokeWidth="10" strokeLinecap="round"/>
      <path d="M12 118 Q14 110 20 110 Q28 110 30 118 Q30 126 22 128 Q14 126 12 118 Z"
            fill={COBALT} stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round"/>
      <path d="M20 126 Q17 138 21 148" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M20 126 Q17 138 21 148" stroke={COBALT}  strokeWidth="7"  strokeLinecap="round"/>
      <ellipse cx="21" cy="148" rx="7" ry="5.5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M8 149 Q6 157 18 157 Q32 157 36 153 Q36 149 27 149 Z" fill={OUTLINE}/>

      {/* Body — organic cobalt shape */}
      <path d="M20 56 Q18 52 24 51 L74 51 Q80 52 79 57 L76 90 Q76 96 70 96 L24 96 Q18 96 18 90 Z"
            fill={COBALT} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Cream horizontal stripes — slightly curved to follow form */}
      <path d="M18 64 Q48 62 79 64" stroke={CREAM} strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M18 73 Q48 71 79 73" stroke={CREAM} strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M18 82 Q48 80 79 82" stroke={CREAM} strokeWidth="4" fill="none" strokeLinecap="round"/>

      {/* Front leg */}
      <path d="M56 90 Q68 108 66 122" stroke={OUTLINE} strokeWidth="14" strokeLinecap="round"/>
      <path d="M56 90 Q68 108 66 122" stroke={COBALT}  strokeWidth="10" strokeLinecap="round"/>
      <path d="M58 120 Q60 112 66 112 Q74 112 76 120 Q76 128 68 130 Q60 128 58 120 Z"
            fill={COBALT} stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round"/>
      <path d="M66 128 Q70 140 66 150" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M66 128 Q70 140 66 150" stroke={COBALT}  strokeWidth="7"  strokeLinecap="round"/>
      <ellipse cx="66" cy="150" rx="7" ry="5.5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M54 151 Q52 159 64 159 Q80 159 84 155 Q84 151 74 151 Z" fill={OUTLINE}/>

      {/* Neck */}
      <path d="M48 47 Q50 52 54 52 L64 52 Q68 52 70 47 Z" fill={SKIN}/>

      {/* Head — profile right, expressive */}
      <path d="M34 26 Q34 4 56 4 Q78 4 78 26 Q78 46 56 46 Q34 46 34 26 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Hair — brushy dark shape */}
      <path d="M34 18 Q36 5 54 5 Q70 5 78 16 Q72 4 56 5 Q40 6 34 18 Z" fill={OUTLINE}/>
      <path d="M34 16 Q38 8 50 8 Q36 12 34 20 Z" fill={OUTLINE}/>
      {/* Ear — profile */}
      <path d="M35 28 Q28 24 29 34 Q30 42 37 40 Q40 37 38 28 Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Big expressive eye */}
      <circle cx="65" cy="20" r="8.5" fill={OUTLINE}/>
      <circle cx="67" cy="18"  r="3.5" fill="white"/>
      <circle cx="67" cy="18"  r="1.5" fill={OUTLINE}/>
      {/* Eyebrow — confident arc */}
      <path d="M57 11 Q64 7 73 11" stroke={OUTLINE} strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Nose bump */}
      <path d="M76 27 Q83 31 77 36" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Big grin */}
      <path d="M67 40 Q75 44 70 47" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Rosy cheek — editorial spot */}
      <ellipse cx="71" cy="35" rx="6" ry="4" fill={DPINK} opacity="0.55"/>

      {/* Front arm — raised, holding ice cream */}
      <path d="M72 66 Q86 54 90 38" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M72 66 Q86 54 90 38" stroke={COBALT}  strokeWidth="8"  strokeLinecap="round"/>
      {/* Right hand — gripping ice cream, fingers wrap upward */}
      <path d="M84 37 Q80 35 79 29 Q79 22 83 21 Q84 21 84 26
               Q84 19 88 18 Q93 18 93 25 Q93 18 97 19 Q102 20 101 27
               Q102 21 106 23 Q109 26 107 32
               Q109 35 107 40 Q103 46 96 46 Q88 46 84 37 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Knuckle lines */}
      <path d="M85 32 Q88 30 91 31" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M92 30 Q95 28 98 30" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Ice cream */}
      <path d="M86 38 L92 60 L98 38 Z" fill="#7A4E2E" stroke={OUTLINE} strokeWidth="2.5"/>
      <line x1="87.5" y1="46" x2="96.5" y2="46" stroke="#5A3010" strokeWidth="1.5"/>
      <line x1="88.5" y1="52" x2="95.5" y2="52" stroke="#5A3010" strokeWidth="1.5"/>
      <circle cx="92" cy="24" r="15" fill={DPINK} stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="92" cy="10" r="5.5" fill="#A03030" stroke={OUTLINE} strokeWidth="2"/>
      {/* Sprinkles */}
      <line x1="87" y1="20" x2="90" y2="17" stroke={CREAM} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="93" y1="18" x2="96" y2="21" stroke={GOLD}  strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="90" y1="28" x2="94" y2="26" stroke={CREAM} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

// ── Erna ──────────────────────────────────────────────────────────────────────
export function ErnaAvatar() {
  return (
    <svg viewBox="0 0 158 154" width="158" height="154" fill="none">

      {/* Head — profile right */}
      <path d="M12 26 Q12 5 32 5 Q52 5 52 26 Q52 45 32 45 Q12 45 12 26 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Hair bun — warm grey, editorial shape */}
      <path d="M12 20 Q14 4 30 4 Q42 4 50 14 Q42 2 28 4 Q16 6 12 20 Z" fill={GREY}/>
      <path d="M12 18 Q16 6 30 6 Q22 10 16 20 Z" fill={GREY}/>
      <ellipse cx="26" cy="8" rx="14" ry="9" fill={GREY} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M16 12 Q26 4 38 12 Q32 6 26 7 Q20 8 16 12 Z" fill="#7A7470"/>
      {/* Ear */}
      <path d="M13 28 Q6 24 7 34 Q8 42 15 40 Q18 37 16 28 Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Earring */}
      <circle cx="13" cy="42" r="4" fill={GOLD} stroke={OUTLINE} strokeWidth="2"/>
      {/* Eye — profile */}
      <circle cx="41" cy="21" r="6.5" fill={OUTLINE}/>
      <circle cx="42.5" cy="19.5" r="2.5" fill="white"/>
      {/* Round glasses */}
      <circle cx="41" cy="24" r="9" stroke={OUTLINE} strokeWidth="2.5" fill="rgba(180,220,255,0.22)"/>
      <path d="M32.5" cy="23" x2="26" y2="24" stroke={OUTLINE} strokeWidth="2"/>
      <line x1="32.5" y1="23" x2="25" y2="24" stroke={OUTLINE} strokeWidth="2"/>
      {/* Eyebrow */}
      <path d="M34 14 Q39 11 46 14" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Nose */}
      <path d="M50 29 Q57 33 51 38" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M44 42 Q50 45 46 47" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <path d="M26 43 Q28 49 32 49 L42 49 Q46 49 48 43 Z" fill={SKIN}/>

      {/* Body — dusty pink coat, organic shape */}
      <path d="M10 53 Q8 49 14 48 L52 48 Q58 49 57 54 L55 88 Q55 94 49 94 L14 94 Q8 94 8 88 Z"
            fill={DPINK} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Collar V */}
      <path d="M34 50 L30 58 M34 50 L38 58" stroke={CREAM} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Diamond/argyle pattern */}
      {[
        [18, 62], [30, 58], [42, 62],
        [14, 72], [26, 68], [38, 68], [50, 72],
        [18, 80], [30, 76], [42, 80],
        [22, 88], [34, 86], [46, 88],
      ].map(([x, y], i) => (
        <path key={i}
          d={`M${x} ${y-6} L${x+5} ${y} L${x} ${y+6} L${x-5} ${y} Z`}
          fill="none" stroke={GOLD} strokeWidth="1.5"/>
      ))}

      {/* Left arm — cane side */}
      <path d="M11 62 Q2 68 4 82"  stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M11 62 Q2 68 4 82"  stroke={DPINK}   strokeWidth="7"  strokeLinecap="round"/>
      {/* Left hand — gripping cane */}
      <path d="M0 80 Q-4 78 -4 72 Q-3 66 0 67 Q-1 61 2 60 Q6 59 7 65
               Q7 59 11 58 Q15 58 15 64 Q15 58 19 59 Q23 60 21 66
               Q25 65 25 71 Q25 78 19 82 Q11 86 3 84 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Cane */}
      <line x1="4" y1="82" x2="5" y2="128" stroke="#6B4E2A" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M2 128 Q5 136 11 130" stroke="#6B4E2A" strokeWidth="4" fill="none" strokeLinecap="round"/>

      {/* Right arm — leash */}
      <path d="M54 62 Q66 68 68 82"  stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M54 62 Q66 68 68 82"  stroke={DPINK}   strokeWidth="7"  strokeLinecap="round"/>
      {/* Right hand */}
      <path d="M64 80 Q60 78 60 72 Q61 66 64 67 Q63 61 66 60 Q70 59 71 65
               Q71 59 75 58 Q79 58 79 64 Q79 58 83 59 Q87 60 85 66
               Q89 65 89 71 Q89 78 83 82 Q75 86 67 84 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Leash — dashed to dog */}
      <path d="M68 82 C78 76 95 74 110 78" stroke={OUTLINE} strokeWidth="2" strokeDasharray="3 5" fill="none" strokeLinecap="round"/>

      {/* Back leg */}
      <path d="M17 90 Q10 106 12 120" stroke={OUTLINE} strokeWidth="13" strokeLinecap="round"/>
      <path d="M17 90 Q10 106 12 120" stroke={DPINK}   strokeWidth="9"  strokeLinecap="round"/>
      <path d="M5 118 Q7 111 12 110 Q19 110 21 118 Q21 125 14 127 Q7 125 5 118 Z"
            fill={DPINK} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M12 125 Q10 135 12 143" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round"/>
      <path d="M12 125 Q10 135 12 143" stroke={DPINK}   strokeWidth="6"  strokeLinecap="round"/>
      <ellipse cx="12" cy="143" rx="6" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M0 144 Q-2 151 10 151 Q22 151 26 147 Q26 144 18 144 Z" fill={OUTLINE}/>

      {/* Front leg */}
      <path d="M36 90 Q44 106 42 120" stroke={OUTLINE} strokeWidth="13" strokeLinecap="round"/>
      <path d="M36 90 Q44 106 42 120" stroke={DPINK}   strokeWidth="9"  strokeLinecap="round"/>
      <path d="M34 118 Q36 111 42 110 Q49 110 51 118 Q51 125 44 127 Q37 125 34 118 Z"
            fill={DPINK} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M42 125 Q46 135 42 143" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round"/>
      <path d="M42 125 Q46 135 42 143" stroke={DPINK}   strokeWidth="6"  strokeLinecap="round"/>
      <ellipse cx="42" cy="143" rx="6" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M31 144 Q29 151 41 151 Q55 151 59 147 Q59 144 49 144 Z" fill={OUTLINE}/>

      {/* Pomeranian — editorial illustration style */}
      <circle cx="120" cy="82" r="13" fill={CREAM} stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="110" cy="74" r="9"  fill={CREAM} stroke={OUTLINE} strokeWidth="2"/>
      <circle cx="118" cy="69" r="8"  fill={GOLD}  stroke={OUTLINE} strokeWidth="2.5"/>
      <circle cx="126" cy="68" r="9"  fill={GOLD}  stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Ears */}
      <path d="M124 61 Q128 54 133 62" fill={GOLD} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* Face */}
      <circle cx="130" cy="67" r="3"   fill={OUTLINE}/>
      <circle cx="132" cy="72" r="2"   fill="#555"/>
      <path d="M129 76 Q132 80 134 76"  fill={DPINK} stroke="none"/>
      {/* Collar */}
      <path d="M118 72 Q124 75 130 72" stroke={ORANGE} strokeWidth="3" strokeLinecap="round"/>
      {/* Dog legs — organic strokes */}
      <path d="M110 92 Q108 102 110 112" stroke={OUTLINE} strokeWidth="6" strokeLinecap="round"/>
      <path d="M110 92 Q108 102 110 112" stroke={GOLD}    strokeWidth="4" strokeLinecap="round"/>
      <path d="M120 93 Q120 103 120 113" stroke={OUTLINE} strokeWidth="6" strokeLinecap="round"/>
      <path d="M120 93 Q120 103 120 113" stroke={GOLD}    strokeWidth="4" strokeLinecap="round"/>
      <path d="M130 92 Q132 102 130 112" stroke={OUTLINE} strokeWidth="6" strokeLinecap="round"/>
      <path d="M130 92 Q132 102 130 112" stroke={GOLD}    strokeWidth="4" strokeLinecap="round"/>
      {/* Paws */}
      <ellipse cx="110" cy="114" rx="6" ry="4" fill={CREAM} stroke={OUTLINE} strokeWidth="1.8"/>
      <ellipse cx="120" cy="115" rx="6" ry="4" fill={CREAM} stroke={OUTLINE} strokeWidth="1.8"/>
      <ellipse cx="130" cy="114" rx="6" ry="4" fill={CREAM} stroke={OUTLINE} strokeWidth="1.8"/>
    </svg>
  )
}

// ── Beatrice ──────────────────────────────────────────────────────────────────
export function BeatriceAvatar() {
  return (
    <svg viewBox="0 0 112 160" width="112" height="160" fill="none">

      {/* Back arm — raised, holds phone to ear */}
      <path d="M19 64 Q10 54 12 38" stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M19 64 Q10 54 12 38" stroke={ORANGE}  strokeWidth="8"  strokeLinecap="round"/>
      {/* Left hand — gripping phone */}
      <path d="M8 36 Q4 34 4 28 Q5 22 8 22 Q8 16 12 15 Q16 15 16 21
               Q16 15 20 15 Q24 15 24 22 Q24 15 28 16 Q32 18 30 24
               Q33 23 33 29 Q33 36 27 40 Q20 44 11 42 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Phone */}
      <path d="M3 14 Q3 10 6 10 L15 10 Q18 10 18 14 L18 28 Q18 32 15 32 L6 32 Q3 32 3 28 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5"/>
      <rect x="4" y="13" width="13" height="14" rx="1.5" fill="#1e3a5f"/>
      <circle cx="10.5" cy="29.5" r="1.8" fill="#334155"/>

      {/* Head — profile right */}
      <path d="M16 26 Q16 5 38 5 Q60 5 60 26 Q60 47 38 47 Q16 47 16 26 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Hair updo — editorial bold shape */}
      <path d="M16 18 Q20 3 38 4 Q52 4 60 16 Q52 3 38 5 Q24 6 16 18 Z" fill={OUTLINE}/>
      <path d="M32 6 Q38 0 46 5 Q40 2 36 5 Z" fill={OUTLINE}/>
      <ellipse cx="37" cy="7" rx="10" ry="6" fill={OUTLINE}/>
      {/* Ear */}
      <path d="M17 28 Q10 24 11 34 Q12 42 19 40 Q22 37 20 28 Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Earring — gold drop */}
      <line x1="17" y1="34" x2="17" y2="41" stroke={GOLD} strokeWidth="2"/>
      <circle cx="17" cy="43" r="4" fill={GOLD} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Eye */}
      <circle cx="49" cy="21" r="8" fill={OUTLINE}/>
      <circle cx="51" cy="19" r="3.5" fill="white"/>
      <circle cx="51" cy="19" r="1.5" fill={OUTLINE}/>
      {/* Eyebrow */}
      <path d="M41 12 Q49 8 57 12" stroke={OUTLINE} strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Nose */}
      <path d="M58 27 Q65 32 59 37" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Lips — bold editorial */}
      <path d="M51 42 Q58 46 54 48" stroke={DPINK} strokeWidth="4" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <path d="M30 45 Q32 51 38 51 L48 51 Q52 51 54 45 Z" fill={SKIN}/>

      {/* Body — orange blazer, organic shape */}
      <path d="M14 55 Q12 51 18 50 L72 50 Q78 51 77 56 L75 90 Q75 96 69 96 L18 96 Q12 96 12 90 Z"
            fill={ORANGE} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Cream vertical stripes */}
      <path d="M24 50 Q23 73 22 96" stroke={CREAM} strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M36 50 Q35 73 34 96" stroke={CREAM} strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M48 50 Q47 73 46 96" stroke={CREAM} strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M60 50 Q59 73 58 96" stroke={CREAM} strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Pocket square */}
      <path d="M60 56 Q64 54 70 57 L68 64 Q64 67 60 64 Z" fill={CREAM} stroke={OUTLINE} strokeWidth="1.5"/>

      {/* Front arm — carries bags */}
      <path d="M72 66 Q84 72 86 86"  stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M72 66 Q84 72 86 86"  stroke={ORANGE}  strokeWidth="8"  strokeLinecap="round"/>
      {/* Right hand — carrying bags */}
      <path d="M82 84 Q78 82 78 76 Q79 70 82 71 Q81 65 84 64 Q88 63 89 69
               Q89 63 93 62 Q97 62 97 68 Q97 62 101 63 Q105 65 103 71
               Q107 70 107 76 Q107 83 101 87 Q93 91 85 89 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>

      {/* Handbag — gold */}
      <path d="M82 92 Q80 88 86 87 L106 87 Q112 88 112 94 L112 108 Q112 114 106 115 L86 115 Q80 115 80 108 Z"
            fill={GOLD} stroke={OUTLINE} strokeWidth="3"/>
      <path d="M85 87 Q94 79 103 87" stroke={OUTLINE} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M84 99 Q94 97 108 99" stroke="#A07A10" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Shopping bag */}
      <path d="M80 112 Q78 110 82 109 L108 109 Q112 110 112 114 L112 130 Q112 134 108 135 L82 135 Q78 135 78 130 Z"
            fill={CREAM} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M85 109 L84 101 M103 109 L104 101" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M78 124 L112 124" stroke={ORANGE} strokeWidth="5"/>

      {/* Back leg — big stride */}
      <path d="M21 92 Q10 110 12 126" stroke={OUTLINE} strokeWidth="13" strokeLinecap="round"/>
      <path d="M21 92 Q10 110 12 126" stroke={OUTLINE} strokeWidth="9"  strokeLinecap="round"/>
      <path d="M4 124 Q6 116 12 116 Q20 116 22 124 Q22 132 14 134 Q6 132 4 124 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M12 132 Q8 143 12 152" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="12" cy="152" rx="6.5" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M0 153 Q-2 160 10 160 Q24 160 28 156 Q28 153 18 153 Z" fill={OUTLINE}/>

      {/* Front leg — longer stride forward */}
      <path d="M50 92 Q62 110 60 126" stroke={OUTLINE} strokeWidth="13" strokeLinecap="round"/>
      <path d="M50 92 Q62 110 60 126" stroke={OUTLINE} strokeWidth="9"  strokeLinecap="round"/>
      <path d="M52 124 Q54 116 60 116 Q68 116 70 124 Q70 132 62 134 Q54 132 52 124 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M60 132 Q64 143 60 152" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="60" cy="152" rx="6.5" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M49 153 Q47 160 59 160 Q73 160 77 156 Q77 153 67 153 Z" fill={OUTLINE}/>
    </svg>
  )
}

// ── Benedikt ──────────────────────────────────────────────────────────────────
export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 158 120" width="158" height="120" fill="none">

      {/* Head — profile right */}
      <path d="M16 26 Q16 6 36 6 Q56 6 56 26 Q56 44 36 44 Q16 44 16 26 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Helmet — bold orange shape */}
      <path d="M14 22 Q14 3 36 3 Q58 3 58 22 Q58 30 54 32 L18 32 Q14 30 14 22 Z"
            fill={ORANGE} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Helmet vents */}
      <path d="M20 10 L20 22" stroke="#A04010" strokeWidth="4" strokeLinecap="round"/>
      <path d="M27 8  L27 22" stroke="#A04010" strokeWidth="4" strokeLinecap="round"/>
      <path d="M34 7  L34 22" stroke="#A04010" strokeWidth="4" strokeLinecap="round"/>
      <path d="M41 8  L41 22" stroke="#A04010" strokeWidth="4" strokeLinecap="round"/>
      <path d="M48 10 L48 22" stroke="#A04010" strokeWidth="4" strokeLinecap="round"/>
      {/* Strap */}
      <path d="M16 28 Q15 35 22 38" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Ear */}
      <path d="M17 28 Q10 24 11 34 Q12 41 19 39 Q22 36 20 28 Z" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Sunglasses — bold editorial shape */}
      <path d="M34 26 Q34 18 44 18 Q54 18 54 26 Q54 32 44 32 Q34 32 34 26 Z"
            fill="#0a1f3a" stroke={OUTLINE} strokeWidth="2.5"/>
      <line x1="34" y1="25" x2="28" y2="26" stroke={OUTLINE} strokeWidth="2.5"/>
      {/* Lens glint */}
      <ellipse cx="40" cy="22" rx="3.5" ry="2" fill="rgba(255,255,255,0.2)" transform="rotate(-15 40 22)"/>
      {/* Nose */}
      <path d="M53 30 Q60 34 54 40" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Handlebar moustache — editorial swoops */}
      <path d="M38 40 Q44 35 48 38 Q52 36 50 43 Q48 40 44 42 Q41 43 38 40 Z" fill={OUTLINE}/>
      <path d="M38 40 Q34 37 30 40 Q28 43 32 44 Q35 44 38 40 Z" fill={OUTLINE}/>
      {/* Cigarette */}
      <rect x="48" y="37" width="15" height="4" rx="2" fill={CREAM} stroke={OUTLINE} strokeWidth="1.5"/>
      <rect x="60" y="37" width="5"  height="4" rx="1.5" fill={ORANGE}/>
      <circle cx="65" cy="38" r="3" fill="#e53e3e" opacity="0.6"/>
      {/* Smoke wisps */}
      <path d="M66 35 Q70 30 68 27" stroke="#bbb" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M68 34 Q73 29 71 26" stroke="#bbb" strokeWidth="1.4" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <path d="M28 42 Q30 48 36 48 L46 48 Q50 48 52 42 Z" fill={SKIN}/>

      {/* Body — cobalt jersey, organic */}
      <path d="M8 50 Q28 46 54 50 L56 70 L6 70 Z"
            fill={COBALT} stroke={OUTLINE} strokeWidth="3.5" strokeLinejoin="round"/>
      {/* Jersey accents */}
      <path d="M14 50 L12 70" stroke={ORANGE} strokeWidth="5" strokeLinecap="round"/>
      <path d="M48 50 L50 70" stroke={ORANGE} strokeWidth="5" strokeLinecap="round"/>
      {/* Race number plate */}
      <path d="M20 54 Q20 50 24 50 L42 50 Q46 50 46 54 L46 64 Q46 68 42 68 L24 68 Q20 68 20 64 Z"
            fill={CREAM} stroke={OUTLINE} strokeWidth="2"/>
      <text x="33" y="64" textAnchor="middle" fontSize="10" fontWeight="900" fill={OUTLINE} fontFamily="Georgia, serif">42</text>

      {/* Left arm — to handlebar */}
      <path d="M8 58 Q4 55 6 46"  stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M8 58 Q4 55 6 46"  stroke={COBALT}  strokeWidth="7"  strokeLinecap="round"/>
      {/* Left hand — gripping */}
      <path d="M2 44 Q-2 42 -2 36 Q-1 30 2 30 Q1 24 5 23 Q9 22 10 28
               Q10 22 14 21 Q18 21 18 27 Q18 21 22 23 Q26 25 24 31
               Q28 30 28 36 Q28 43 22 47 Q14 51 5 49 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>

      {/* Right arm — to handlebar */}
      <path d="M54 58 Q70 53 78 48" stroke={OUTLINE} strokeWidth="11" strokeLinecap="round"/>
      <path d="M54 58 Q70 53 78 48" stroke={COBALT}  strokeWidth="7"  strokeLinecap="round"/>
      {/* Right hand */}
      <path d="M74 46 Q70 44 70 38 Q71 32 74 32 Q73 26 77 25 Q81 24 82 30
               Q82 24 86 23 Q90 23 90 29 Q90 23 94 24 Q98 27 96 33
               Q100 32 100 38 Q100 45 94 49 Q86 53 77 51 Z"
            fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round"/>

      {/* Cycling legs — pedaling */}
      {/* Back leg — pushing up/back */}
      <path d="M16 70 Q10 78 12 88"  stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M16 70 Q10 78 12 88"  stroke="#1a3010"  strokeWidth="8"  strokeLinecap="round"/>
      <path d="M5 86 Q7 79 12 78 Q19 78 21 86 Q21 93 14 95 Q7 93 5 86 Z"
            fill="#1a3010" stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M12 93 Q14 100 10 106" stroke={OUTLINE} strokeWidth="9" strokeLinecap="round"/>
      <path d="M12 93 Q14 100 10 106" stroke="#1a3010" strokeWidth="5" strokeLinecap="round"/>
      <ellipse cx="10" cy="106" rx="5.5" ry="4" fill={SKIN} stroke={OUTLINE} strokeWidth="2"/>
      <rect x="2" y="106" width="16" height="5" rx="2" fill={OUTLINE}/>

      {/* Front leg — pushing down */}
      <path d="M38 70 Q46 78 44 90"  stroke={OUTLINE} strokeWidth="12" strokeLinecap="round"/>
      <path d="M38 70 Q46 78 44 90"  stroke="#1a3010"  strokeWidth="8"  strokeLinecap="round"/>
      <path d="M36 88 Q38 81 44 80 Q51 80 53 88 Q53 95 46 97 Q39 95 36 88 Z"
            fill="#1a3010" stroke={OUTLINE} strokeWidth="2.5"/>
      <path d="M44 95 Q46 103 42 109" stroke={OUTLINE} strokeWidth="9" strokeLinecap="round"/>
      <path d="M44 95 Q46 103 42 109" stroke="#1a3010" strokeWidth="5" strokeLinecap="round"/>
      <ellipse cx="42" cy="109" rx="5.5" ry="4" fill={SKIN} stroke={OUTLINE} strokeWidth="2"/>
      <rect x="34" y="109" width="16" height="5" rx="2" fill={OUTLINE}/>

      {/* Rear wheel */}
      <circle cx="18" cy="94"  r="13" stroke={OUTLINE} strokeWidth="3.5" fill="none"/>
      <circle cx="18" cy="94"  r="4.5" fill={OUTLINE}/>
      <line x1="18" y1="81" x2="18" y2="107" stroke="#888" strokeWidth="1.5"/>
      <line x1="5"  y1="94" x2="31" y2="94"  stroke="#888" strokeWidth="1.5"/>
      <line x1="9"  y1="84" x2="27" y2="104" stroke="#888" strokeWidth="1.2"/>
      <line x1="27" y1="84" x2="9"  y2="104" stroke="#888" strokeWidth="1.2"/>

      {/* Front wheel */}
      <circle cx="94" cy="82"  r="15" stroke={OUTLINE} strokeWidth="3.5" fill="none"/>
      <circle cx="94" cy="82"  r="4.5" fill={OUTLINE}/>
      <line x1="94" y1="67" x2="94" y2="97"  stroke="#888" strokeWidth="1.5"/>
      <line x1="79" y1="82" x2="109" y2="82" stroke="#888" strokeWidth="1.5"/>
      <line x1="83" y1="72" x2="105" y2="92" stroke="#888" strokeWidth="1.2"/>
      <line x1="105"y1="72" x2="83" y2="92"  stroke="#888" strokeWidth="1.2"/>

      {/* Frame */}
      <path d="M18 94 L32 60 L60 60 L94 82" stroke={OUTLINE} strokeWidth="3.5" fill="none" strokeLinejoin="round"/>
      <path d="M32 60 L18 94" stroke="#aaa" strokeWidth="2.5"/>
      {/* Handlebars */}
      <path d="M60 60 L82 54"  stroke={OUTLINE} strokeWidth="4"   strokeLinecap="round"/>
      <path d="M82 54 L86 48"  stroke={OUTLINE} strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M82 54 L86 60"  stroke={OUTLINE} strokeWidth="3.5" strokeLinecap="round"/>
      {/* Saddle */}
      <path d="M30 60 L48 60"  stroke={OUTLINE} strokeWidth="6"   strokeLinecap="round"/>
      {/* Chain ring */}
      <circle cx="32" cy="78" r="7"   stroke={OUTLINE} strokeWidth="2.5" fill="none"/>
      <circle cx="32" cy="78" r="2.5" fill={OUTLINE}/>
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
