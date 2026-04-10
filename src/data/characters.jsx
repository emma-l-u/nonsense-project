// ── Color palette ─────────────────────────────────────────────────────────────
const OUTLINE = '#1a1209'
const SK      = '#E8B888'   // base skin
const SK2     = '#C8905A'   // skin shadow
const SK3     = '#F5CFA8'   // skin highlight
const HD      = '#2A1E12'   // dark hair
const HG      = '#B4ACA4'   // grey hair
const CB      = '#2D4AB5'   // cobalt blue
const DP      = '#C87268'   // dusty pink
const OR      = '#E06020'   // orange
const CR      = '#F5EDDC'   // cream
const GO      = '#C9A227'   // gold
const DKBL   = '#1A2D6E'   // dark navy

// ── Karl ──────────────────────────────────────────────────────────────────────
// 8-year-old boy walking right, right arm raised with ice cream
export function KarlAvatar() {
  return (
    <svg viewBox="0 0 108 174" width="108" height="174" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* === BACKPACK (behind body) === */}
      <path d="M8 55 C5 52 5 48 9 47 L24 47 C28 47 29 49 29 52 L28 85 C28 88 26 90 23 90 L10 90 C7 90 6 87 7 84 Z"
            fill={GO} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Backpack strap arc */}
      <path d="M10 47 C14 42 20 42 24 47" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Backpack pocket */}
      <path d="M10 67 C16 65 22 65 28 67 L28 80 C22 82 16 82 10 80 Z"
            fill="#B08010" stroke={OUTLINE} strokeWidth="1" strokeLinejoin="round"/>
      {/* Backpack zipper line */}
      <path d="M11 67 C19 65 26 67" stroke={OUTLINE} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === BACK ARM (swings behind, left arm) === */}
      <path d="M25 72 C14 78 8 88 6 96"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M25 72 C14 78 8 88 6 96"
            stroke={CB} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      {/* Left hand silhouette — fingers visible */}
      <path d="M3 94 C0 92 0 86 2 84 C0 80 3 77 6 79
               C5 75 8 73 11 76 C11 72 14 71 16 74
               C19 70 22 71 21 76 C24 75 25 78 23 82
               C25 85 24 91 20 94 C14 97 5 96 3 94 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Knuckle bumps */}
      <path d="M5 82 C8 80 11 80" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M12 78 C15 76 18 77" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === BACK LEG === */}
      {/* Thigh — wider at top, tapers to knee */}
      <path d="M28 97 C22 108 20 118 22 126"
            stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M28 97 C22 108 20 118 22 126"
            stroke={DKBL} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Knee protrusion */}
      <ellipse cx="22" cy="126" rx="6" ry="5" fill={DKBL} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Calf — narrower */}
      <path d="M22 130 C20 140 22 150 24 156"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M22 130 C20 140 22 150 24 156"
            stroke={DKBL} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      {/* Ankle */}
      <ellipse cx="24" cy="156" rx="5" ry="4" fill={SK} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Back shoe — white sneaker shape */}
      <path d="M12 158 C10 164 12 168 20 168 C30 168 34 164 33 160 C33 157 28 156 24 157 Z"
            fill={CR} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Sole stripe */}
      <path d="M12 165 C20 167 30 166 33 163" stroke={CB} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Laces */}
      <path d="M16 162 C20 161 25 161" stroke={OUTLINE} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === BODY — striped T-shirt === */}
      <path d="M22 58 C20 54 24 52 30 52 L70 52 C76 52 78 55 77 59 L75 95 C75 99 71 101 67 100 L28 100 C23 100 21 97 22 94 Z"
            fill={CB} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Cream horizontal stripes — slightly curved */}
      <path d="M22 62 C44 60 76 62" stroke={CR} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M22 70 C44 68 76 70" stroke={CR} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M22 78 C44 76 75 78" stroke={CR} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M22 86 C44 84 75 86" stroke={CR} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Shirt fold/shadow line */}
      <path d="M46 52 C47 70 46 88 46 100" stroke="#2038A0" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>

      {/* === FRONT LEG === */}
      <path d="M58 97 C64 108 64 119 62 127"
            stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M58 97 C64 108 64 119 62 127"
            stroke={DKBL} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Knee */}
      <ellipse cx="62" cy="127" rx="6" ry="5" fill={DKBL} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Calf */}
      <path d="M62 131 C62 141 60 151 58 157"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M62 131 C62 141 60 151 58 157"
            stroke={DKBL} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      {/* Ankle */}
      <ellipse cx="58" cy="157" rx="5" ry="4" fill={SK} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Front shoe */}
      <path d="M46 159 C44 165 46 170 54 170 C64 170 70 166 70 162 C70 159 65 158 58 158 Z"
            fill={CR} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M46 166 C54 169 64 168 70 165" stroke={CB} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M50 163 C56 162 62 162" stroke={OUTLINE} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === NECK === */}
      <path d="M44 52 C44 56 48 58 52 58 L56 58 C60 58 64 56 64 52 Z" fill={SK}/>
      <path d="M46 52 C46 56 50 58 54 58" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === HEAD — profile facing right === */}
      {/* Main head path: back of skull → crown → forehead → brow → nose bridge → tip → philtrum → upper lip → chin → jaw → back */}
      <path d="M36 8 C36 5 40 3 48 3 C58 3 66 5 70 12
               C73 17 74 22 72 27 C73 28 75 30 76 33
               C77 36 76 40 74 43 C73 46 70 49 66 50
               C68 51 69 54 66 56 C62 58 58 58 56 57
               C54 56 52 55 52 53 C48 53 44 52 42 50
               C38 47 36 44 36 40 C34 36 34 30 36 24
               C36 18 36 12 36 8 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* Face shadow — right side/temple */}
      <path d="M66 8 C70 14 73 22 72 30 C74 26 74 18 70 12 Z" fill={SK2} opacity="0.5"/>
      {/* Under-chin shadow */}
      <path d="M52 53 C54 56 60 57 66 56 C62 58 56 58 52 53 Z" fill={SK2} opacity="0.6"/>
      {/* Forehead highlight */}
      <path d="M52 6 C58 5 64 7 68 12 C66 8 60 5 54 5 Z" fill={SK3} opacity="0.8"/>
      {/* Cheek highlight */}
      <ellipse cx="67" cy="38" rx="4" ry="3" fill={SK3} opacity="0.6"/>

      {/* Hair — dark messy, layered shapes */}
      {/* Base hair mass */}
      <path d="M36 22 C36 12 40 5 48 3 C58 2 67 5 72 12
               C69 8 62 5 54 5 C44 5 38 10 36 22 Z"
            fill={HD} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Messy tuft at crown */}
      <path d="M44 4 C46 0 50 -1 54 1 C50 1 47 3 46 5 Z" fill={HD}/>
      <path d="M52 3 C55 0 60 1 63 4 C60 3 56 3 54 5 Z" fill={HD}/>
      {/* Hair highlight */}
      <path d="M42 8 C46 5 52 4 58 6 C52 5 46 7 44 10 Z" fill="#4A3820" opacity="0.6"/>

      {/* === EAR === */}
      <path d="M36 26 C33 24 31 26 30 30 C29 34 31 38 34 39 C36 39 38 37 37 33 C38 30 38 27 36 26 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Inner ear detail */}
      <path d="M34 28 C32 30 32 35 34 37" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === EYE — almond shaped, realistic === */}
      {/* Eye white — almond path */}
      <path d="M62 24 C64 21 68 21 71 23 C69 26 65 26 62 24 Z"
            fill="white" stroke={OUTLINE} strokeWidth="1"/>
      {/* Iris */}
      <circle cx="67" cy="23" r="3" fill="#4A6B8A"/>
      {/* Pupil */}
      <circle cx="67" cy="23" r="1.8" fill={OUTLINE}/>
      {/* Catchlight */}
      <circle cx="68.5" cy="21.5" r="0.8" fill="white"/>
      {/* Upper eyelid crease */}
      <path d="M62 24 C65 21 69 21 72 23" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Lower lash line */}
      <path d="M62 24 C65 26 69 26 72 24" stroke={OUTLINE} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
      {/* Eyebrow — child, slightly arched */}
      <path d="M61 20 C64 17 69 17 73 19" stroke={HD} strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* === NOSE — profile line + tip + nostril shadow === */}
      {/* Nose bridge and tip */}
      <path d="M72 28 C74 30 76 32 76 35 C76 37 75 39 73 40" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Nostril shadow */}
      <path d="M73 38 C74 40 72 42 70 41" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Nose tip highlight */}
      <ellipse cx="75" cy="34" rx="1.5" ry="2" fill={SK3} opacity="0.7"/>

      {/* === LIPS === */}
      {/* Upper lip */}
      <path d="M65 46 C67 44 70 44 72 45 C71 46 69 47 67 47 Z" fill={DP} stroke={OUTLINE} strokeWidth="1"/>
      {/* Lower lip */}
      <path d="M65 47 C67 48 71 48 73 47 C72 49 69 50 66 49 Z" fill={DP} stroke={OUTLINE} strokeWidth="0.8"/>
      {/* Smile line */}
      <path d="M65 47 C67 48 71 47" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* Rosy cheek flush */}
      <ellipse cx="70" cy="38" rx="5" ry="4" fill={DP} opacity="0.3"/>

      {/* === FRONT ARM — raised, holding ice cream === */}
      <path d="M68 72 C78 60 84 46 84 36"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M68 72 C78 60 84 46 84 36"
            stroke={CB} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      {/* Right hand gripping cone */}
      <path d="M80 35 C78 32 78 26 80 23 C82 20 85 21 85 25
               C85 21 88 19 91 21 C93 23 92 27 91 30
               C93 26 96 26 98 29 C99 32 97 36 94 37
               C96 38 97 42 95 44 C92 46 86 45 82 42
               C79 40 79 37 80 35 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Knuckle lines */}
      <path d="M84 30 C86 28 89 29" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M89 28 C91 26 94 27" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === ICE CREAM === */}
      {/* Cone */}
      <path d="M83 42 C84 42 94 42 94 42 L89 64 Z"
            fill="#8B5E3C" stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Cone texture lines */}
      <line x1="85" y1="48" x2="92" y2="48" stroke="#6A3E1C" strokeWidth="1" strokeLinecap="round"/>
      <line x1="86" y1="54" x2="92" y2="54" stroke="#6A3E1C" strokeWidth="1" strokeLinecap="round"/>
      <line x1="87" y1="60" x2="91" y2="60" stroke="#6A3E1C" strokeWidth="1" strokeLinecap="round"/>
      {/* Scoop */}
      <circle cx="88" cy="32" r="13" fill={DP} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Scoop highlight */}
      <ellipse cx="83" cy="26" rx="5" ry="4" fill="#E0A098" opacity="0.7" transform="rotate(-20 83 26)"/>
      {/* Cherry on top */}
      <circle cx="88" cy="19" r="4.5" fill="#C02020" stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Cherry highlight */}
      <circle cx="86" cy="17" r="1.5" fill="#E04040" opacity="0.8"/>
      {/* Sprinkles */}
      <line x1="82" y1="26" x2="85" y2="23" stroke={CR} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="90" y1="24" x2="93" y2="27" stroke={GO} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="84" y1="34" x2="88" y2="32" stroke="#5BCFE0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="92" y1="30" x2="94" y2="34" stroke={CR} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Drip */}
      <path d="M96 36 C97 40 97 44 96 46" stroke={DP} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

// ── Erna ──────────────────────────────────────────────────────────────────────
// Elderly woman, 70s, walking right, slight forward lean, cane left, leash right
export function ErnaAvatar() {
  return (
    <svg viewBox="0 0 158 168" width="158" height="168" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* === HEAD — elderly profile facing right === */}
      {/* Main head shape — softer jaw, slightly stooped angle */}
      <path d="M18 14 C18 8 22 5 30 4 C38 3 46 6 50 12
               C53 17 54 22 52 27 C53 29 55 31 55 34
               C56 37 54 41 52 44 C50 47 47 50 44 51
               C46 52 47 55 44 57 C40 59 36 59 34 57
               C32 56 30 54 30 52 C26 52 22 50 20 47
               C17 44 16 40 17 35 C16 30 16 24 18 18 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* Jowl softness / age line */}
      <path d="M30 48 C32 50 36 52 40 51" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>
      {/* Temple shadow */}
      <path d="M46 8 C50 14 52 22 50 30 C52 24 52 14 48 10 Z" fill={SK2} opacity="0.4"/>
      {/* Under-chin shadow */}
      <path d="M34 57 C37 59 42 58 44 57 C40 59 36 59 34 57 Z" fill={SK2} opacity="0.5"/>
      {/* Highlight on cheekbone */}
      <ellipse cx="47" cy="35" rx="4" ry="3" fill={SK3} opacity="0.6"/>

      {/* === GREY HAIR BUN === */}
      {/* Back hair mass */}
      <path d="M18 22 C18 10 22 5 30 4 C22 6 20 12 20 22 Z" fill={HG}/>
      {/* Top hair over skull */}
      <path d="M20 16 C22 8 28 4 36 4 C44 4 50 8 52 14
               C46 8 38 5 30 6 C24 7 20 12 20 16 Z"
            fill={HG} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Hair highlight */}
      <path d="M24 8 C30 5 38 4 44 7 C38 5 30 5 26 10 Z" fill="white" opacity="0.25"/>
      {/* Bun — layered ellipses behind head */}
      <ellipse cx="22" cy="8" rx="10" ry="7" fill={HG} stroke={OUTLINE} strokeWidth="1.5"/>
      <ellipse cx="20" cy="6" rx="7" ry="5" fill="#C8C4BC"/>
      {/* Bun detail lines */}
      <path d="M13 6 C17 3 23 3 27 6" stroke="#9A9690" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M14 9 C18 6 24 6 28 9" stroke="#9A9690" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Bun hairpin */}
      <line x1="18" y1="4" x2="22" y2="12" stroke={OUTLINE} strokeWidth="1" strokeLinecap="round"/>

      {/* === EAR === */}
      <path d="M18 28 C15 26 13 28 13 33 C12 37 14 41 17 41 C19 41 21 39 20 35 C21 32 21 29 18 28 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M16 30 C14 32 14 37 16 39" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* Gold drop earring */}
      <line x1="16" y1="41" x2="15" y2="47" stroke={GO} strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="15" cy="50" rx="3" ry="4" fill={GO} stroke={OUTLINE} strokeWidth="1"/>

      {/* === EYE — almond, elderly, deep set === */}
      <path d="M40 24 C42 21 46 20 49 22 C47 25 43 26 40 24 Z"
            fill="white" stroke={OUTLINE} strokeWidth="1"/>
      <circle cx="45" cy="23" r="2.8" fill="#5A7080"/>
      <circle cx="45" cy="23" r="1.6" fill={OUTLINE}/>
      <circle cx="46" cy="21.5" r="0.7" fill="white"/>
      {/* Upper eyelid — heavier for age */}
      <path d="M40 24 C43 21 47 21 50 23" stroke={OUTLINE} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* Lower lash / eye bag */}
      <path d="M40 25 C43 27 47 27 50 25" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Crow's foot */}
      <path d="M39 25 C37 26 36 28" stroke={SK2} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M39 23 C37 23 35 24" stroke={SK2} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      {/* Eyebrow — thin, slightly greyed */}
      <path d="M38 19 C41 17 46 17 50 19" stroke={HG} strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* === ROUND GLASSES === */}
      <circle cx="45" cy="25" r="9" stroke={OUTLINE} strokeWidth="1.5" fill="rgba(200,230,255,0.18)"/>
      {/* Glasses bridge to temple */}
      <line x1="36" y1="25" x2="28" y2="26" stroke={OUTLINE} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Frame detail */}
      <circle cx="45" cy="25" r="9" stroke={GO} strokeWidth="0.5" fill="none" opacity="0.4"/>

      {/* === NOSE === */}
      <path d="M53 30 C55 32 56 35 55 38" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Nostril shadow */}
      <path d="M54 36 C55 38 53 40 51 39" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Nasolabial fold (age) */}
      <path d="M51 38 C50 42 50 46 51 48" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>

      {/* === LIPS === */}
      <path d="M44 47 C46 45 49 45 51 47 C50 48 47 48 44 47 Z" fill={DP} stroke={OUTLINE} strokeWidth="1" opacity="0.9"/>
      <path d="M44 48 C46 49 50 49 52 47 C51 49 48 51 45 50 Z" fill={DP} stroke={OUTLINE} strokeWidth="0.8" opacity="0.9"/>
      {/* Corner mouth lines */}
      <path d="M44 47 C43 48 43 49" stroke={SK2} strokeWidth="0.8" fill="none" strokeLinecap="round"/>

      {/* === NECK === */}
      <path d="M28 56 C28 60 32 62 36 62 L42 62 C46 62 50 60 50 56 Z" fill={SK}/>
      {/* Neck shadow */}
      <path d="M30 56 C30 60 34 62 38 62" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === BODY — long dusty pink coat, slight forward lean === */}
      {/* Coat main shape — stooped posture (slightly angled) */}
      <path d="M14 68 C12 64 16 62 22 62 L50 62 C56 62 58 65 57 70
               L55 120 C55 126 51 128 46 128 L20 128 C14 128 12 124 13 118 Z"
            fill={DP} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* Coat collar */}
      <path d="M34 64 C31 68 30 72 M34 64 C37 68 38 72" stroke={CR} strokeWidth="2" strokeLinecap="round"/>
      {/* Coat lapel */}
      <path d="M30 64 C28 70 28 76" stroke={OUTLINE} strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Coat button line */}
      <path d="M34 74 C34 90 34 106 34 120" stroke={OUTLINE} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"/>
      <circle cx="34" cy="80" r="1.5" fill={OUTLINE} opacity="0.5"/>
      <circle cx="34" cy="90" r="1.5" fill={OUTLINE} opacity="0.5"/>
      <circle cx="34" cy="100" r="1.5" fill={OUTLINE} opacity="0.5"/>
      {/* Coat fold/highlight */}
      <path d="M46 64 C47 82 47 100 46 120" stroke="#E090A0" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      {/* Argyle diamond pattern — gold */}
      {[
        [20, 80], [32, 74], [44, 80],
        [16, 94], [28, 88], [40, 88], [52, 94],
        [20, 108], [32, 102], [44, 108],
        [24, 120], [36, 116], [48, 120],
      ].map(([x, y], i) => (
        <path key={i}
          d={`M${x} ${y - 5} L${x + 5} ${y} L${x} ${y + 5} L${x - 5} ${y} Z`}
          fill="none" stroke={GO} strokeWidth="1"/>
      ))}

      {/* === LEFT ARM — cane side === */}
      <path d="M13 78 C6 86 4 98 4 110"
            stroke={OUTLINE} strokeWidth="9" strokeLinecap="round" fill="none"/>
      <path d="M13 78 C6 86 4 98 4 110"
            stroke={DP} strokeWidth="6.5" strokeLinecap="round" fill="none"/>
      {/* Left hand gripping cane */}
      <path d="M1 108 C-2 106 -2 100 0 97 C-2 93 1 90 4 92
               C3 88 6 86 9 89 C9 85 12 84 14 87
               C17 84 20 85 19 89 C22 88 23 92 21 95
               C23 98 22 105 18 108 C12 112 3 111 1 108 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Cane */}
      <line x1="4" y1="110" x2="6" y2="150" stroke="#8B5E3C" strokeWidth="4" strokeLinecap="round"/>
      {/* Cane handle curve */}
      <path d="M4 150 C5 156 8 160 12 157" stroke="#8B5E3C" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Cane rubber tip */}
      <ellipse cx="6" cy="150" rx="3" ry="3" fill="#4A3020" stroke={OUTLINE} strokeWidth="1"/>

      {/* === RIGHT ARM — leash side === */}
      <path d="M56 78 C64 86 66 98 66 110"
            stroke={OUTLINE} strokeWidth="9" strokeLinecap="round" fill="none"/>
      <path d="M56 78 C64 86 66 98 66 110"
            stroke={DP} strokeWidth="6.5" strokeLinecap="round" fill="none"/>
      {/* Right hand */}
      <path d="M63 108 C60 106 60 100 62 97 C60 93 63 90 66 92
               C65 88 68 86 71 89 C71 85 74 84 76 87
               C79 84 82 85 81 89 C84 88 85 92 83 95
               C85 98 84 105 80 108 C74 112 65 111 63 108 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Leash — slight curve to dog */}
      <path d="M66 110 C80 106 96 104 112 108" stroke={OUTLINE} strokeWidth="1.5" strokeDasharray="4 4" fill="none" strokeLinecap="round"/>

      {/* === LEGS below coat hem === */}
      {/* Back leg — slow stride */}
      <path d="M20 126 C16 134 16 142 18 150"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M20 126 C16 134 16 142 18 150"
            stroke="#8090A0" strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      {/* Ankle */}
      <ellipse cx="18" cy="150" rx="4.5" ry="3.5" fill={SK} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Back shoe — low heel, rounded toe */}
      <path d="M8 152 C7 157 9 161 16 161 C24 161 28 158 28 154 C28 151 24 150 18 151 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M28 156 C26 159 22 160 16 160" stroke="#444" strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* Front leg — just slightly ahead */}
      <path d="M38 126 C40 134 40 142 38 150"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M38 126 C40 134 40 142 38 150"
            stroke="#8090A0" strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="38" cy="150" rx="4.5" ry="3.5" fill={SK} stroke={OUTLINE} strokeWidth="1.5"/>
      <path d="M28 152 C27 157 29 161 36 161 C44 161 50 158 50 154 C50 151 46 150 38 151 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M50 156 C48 159 44 160 36 160" stroke="#444" strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === POMERANIAN DOG === */}
      {/* Body — fluffy layered shapes */}
      {/* Back body puff */}
      <path d="M106 106 C100 98 98 90 102 84 C106 78 114 76 120 80 C126 84 128 92 124 100 Z"
            fill={CR} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Main body puff */}
      <ellipse cx="120" cy="94" rx="14" ry="11" fill={GO} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Chest/mane puff */}
      <ellipse cx="108" cy="90" rx="10" ry="8" fill={CR} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Head */}
      <ellipse cx="116" cy="80" rx="11" ry="9" fill={GO} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Ears — pointed */}
      <path d="M110 74 C110 68 114 66 116 70 C114 68 111 70 110 74 Z" fill={GO} stroke={OUTLINE} strokeWidth="1.5"/>
      <path d="M120 72 C121 66 125 66 126 70 C124 68 121 70 120 72 Z" fill={GO} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Inner ear */}
      <path d="M112 73 C112 70 114 69 115 71" stroke={DP} strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M121 71 C121 68 123 68 124 70" stroke={DP} strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Snout */}
      <ellipse cx="126" cy="85" rx="7" ry="5" fill={CR} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Nose */}
      <ellipse cx="130" cy="83" rx="2" ry="1.5" fill={OUTLINE}/>
      {/* Eye */}
      <circle cx="120" cy="79" r="2.5" fill={OUTLINE}/>
      <circle cx="120.8" cy="78.2" r="0.8" fill="white"/>
      {/* Second eye (slight profile) */}
      <circle cx="126" cy="80" r="1.8" fill={OUTLINE}/>
      <circle cx="126.6" cy="79.4" r="0.6" fill="white"/>
      {/* Tongue */}
      <path d="M128 87 C128 90 130 92 129 90 C131 92 133 90 132 87 Z" fill={DP} stroke={OUTLINE} strokeWidth="1"/>
      {/* Collar */}
      <path d="M112 88 C118 92 126 90 130 86" stroke="#E02020" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Collar tag */}
      <circle cx="121" cy="92" r="2" fill={GO} stroke={OUTLINE} strokeWidth="1"/>
      {/* Fluffy body texture lines */}
      <path d="M110 88 C112 84 116 84 118 88" stroke={CR} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M118 92 C120 88 124 88 126 92" stroke={CR} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>
      {/* Tail — curled up */}
      <path d="M108 96 C100 90 98 82 104 78 C102 86 104 94 108 96 Z"
            fill={GO} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Legs — 3 short legs */}
      <path d="M108 106 C106 112 108 118 110 120" stroke={OUTLINE} strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M108 106 C106 112 108 118 110 120" stroke={GO} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M118 108 C118 114 118 120 118 122" stroke={OUTLINE} strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M118 108 C118 114 118 120 118 122" stroke={GO} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M128 106 C130 112 128 118 126 120" stroke={OUTLINE} strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M128 106 C130 112 128 118 126 120" stroke={GO} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      {/* Paws */}
      <ellipse cx="110" cy="121" rx="5" ry="3" fill={CR} stroke={OUTLINE} strokeWidth="1.2"/>
      <ellipse cx="118" cy="123" rx="5" ry="3" fill={CR} stroke={OUTLINE} strokeWidth="1.2"/>
      <ellipse cx="126" cy="121" rx="5" ry="3" fill={CR} stroke={OUTLINE} strokeWidth="1.2"/>
    </svg>
  )
}

// ── Beatrice ──────────────────────────────────────────────────────────────────
// Professional woman, late 30s, fast walk right, phone to ear, handbag
export function BeatriceAvatar() {
  return (
    <svg viewBox="0 0 108 174" width="108" height="174" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* === BACK ARM — raised, phone to ear (left arm) === */}
      <path d="M22 66 C14 56 12 44 14 34"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M22 66 C14 56 12 44 14 34"
            stroke={OR} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      {/* Left hand holding phone */}
      <path d="M10 32 C8 30 8 24 10 21 C12 18 15 19 15 23
               C15 19 18 17 21 19 C23 21 22 25 21 28
               C23 24 26 24 28 27 C29 30 27 34 24 35
               C26 36 27 40 25 42 C22 44 16 43 12 40
               C10 38 10 35 10 32 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Phone — flat rectangle */}
      <path d="M6 14 C6 10 9 9 12 9 L20 9 C23 9 24 11 24 14
               L24 30 C24 33 22 34 19 34 L11 34 C8 34 6 33 6 30 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="1"/>
      <rect x="7" y="13" width="16" height="15" rx="1" fill="#1e3a5f"/>
      <circle cx="15" cy="31" r="1.5" fill="#334155"/>

      {/* === HEAD — profile facing right, confident angular === */}
      <path d="M20 10 C20 5 24 3 32 3 C42 3 50 6 54 12
               C57 17 58 22 56 27 C57 29 59 32 59 35
               C60 38 58 42 56 46 C54 49 51 52 48 53
               C50 54 51 57 48 59 C44 61 40 61 38 59
               C36 58 34 56 34 54 C30 54 26 52 24 49
               C21 46 20 42 21 37 C20 32 20 18 20 10 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* Temple/cheekbone shadow */}
      <path d="M50 8 C54 14 56 22 54 30 C56 24 56 14 52 10 Z" fill={SK2} opacity="0.45"/>
      {/* Cheekbone highlight */}
      <ellipse cx="51" cy="36" rx="4" ry="3" fill={SK3} opacity="0.6"/>
      {/* Jawline definition */}
      <path d="M34 54 C38 56 44 57 48 55" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
      {/* Forehead highlight */}
      <ellipse cx="40" cy="8" rx="6" ry="3" fill={SK3} opacity="0.5"/>

      {/* === DARK UPDO BUN === */}
      {/* Hair sweeping back from face */}
      <path d="M20 20 C20 10 24 4 32 3 C24 5 22 12 22 20 Z" fill={HD}/>
      {/* Top hair */}
      <path d="M22 14 C24 6 30 3 38 3 C46 3 52 7 54 13
               C48 8 40 5 32 5 C26 6 22 10 22 14 Z"
            fill={HD} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Bun shape — tight, compact above head */}
      <path d="M26 4 C28 0 34 -2 40 0 C46 2 50 6 48 10
               C46 6 40 3 34 3 C30 3 28 5 26 4 Z"
            fill={HD} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      <ellipse cx="36" cy="4" rx="10" ry="5" fill={HD} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Bun highlight */}
      <path d="M28 2 C32 0 38 0 42 3 C38 1 32 1 30 4 Z" fill="#4A3820" opacity="0.6"/>
      {/* Hair pin */}
      <line x1="34" y1="0" x2="38" y2="8" stroke={GO} strokeWidth="1" strokeLinecap="round"/>

      {/* === EAR === */}
      <path d="M20 30 C17 28 15 30 15 35 C14 39 16 43 19 43 C21 43 23 41 22 37 C23 34 23 31 20 30 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M18 32 C16 34 16 39 18 41" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* Gold drop earring */}
      <line x1="18" y1="43" x2="16" y2="50" stroke={GO} strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="16" cy="53" rx="3" ry="4" fill={GO} stroke={OUTLINE} strokeWidth="1"/>
      {/* Earring detail */}
      <line x1="14" y1="50" x2="18" y2="56" stroke={GO} strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>

      {/* === EYE — almond, bold === */}
      <path d="M44 25 C46 22 50 21 53 23 C51 26 47 27 44 25 Z"
            fill="white" stroke={OUTLINE} strokeWidth="1"/>
      <circle cx="49" cy="24" r="3" fill="#3A4A5A"/>
      <circle cx="49" cy="24" r="1.7" fill={OUTLINE}/>
      <circle cx="50.5" cy="22.5" r="0.8" fill="white"/>
      {/* Strong upper eyelid */}
      <path d="M44 25 C47 21 51 21 54 23" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Lower lash */}
      <path d="M44 26 C47 28 51 27 54 25" stroke={OUTLINE} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
      {/* Bold eyebrow */}
      <path d="M42 21 C46 18 51 18 55 20" stroke={HD} strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* === NOSE === */}
      <path d="M56 30 C58 32 59 35 59 38" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M58 37 C59 39 57 41 55 40" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>
      <ellipse cx="58" cy="35" rx="1.5" ry="2" fill={SK3} opacity="0.6"/>

      {/* === LIPS — bold, defined === */}
      <path d="M48 51 C51 48 55 48 57 50 C55 51 52 52 49 51 Z" fill={DP} stroke={OUTLINE} strokeWidth="1"/>
      <path d="M48 51 C51 53 55 53 58 51 C57 54 53 55 50 54 Z" fill="#B85858" stroke={OUTLINE} strokeWidth="0.8"/>
      <path d="M48 51 C52 52 56 51" stroke={OUTLINE} strokeWidth="0.8" fill="none" strokeLinecap="round"/>

      {/* === NECK === */}
      <path d="M32 58 C32 62 36 64 40 64 L46 64 C50 64 54 62 54 58 Z" fill={SK}/>
      <path d="M34 58 C34 62 38 64 42 64" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === BODY — orange blazer with cream vertical stripes === */}
      <path d="M22 70 C20 66 24 64 30 64 L72 64 C78 64 80 67 79 72
               L77 102 C77 107 73 110 68 109 L28 109 C22 109 20 106 22 102 Z"
            fill={OR} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* Blazer lapel */}
      <path d="M40 66 C36 72 34 78 M40 66 C44 72 46 78" stroke={CR} strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 66 C34 74 34 82" stroke={OUTLINE} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
      {/* Cream vertical stripes */}
      <path d="M30 66 C29 80 28 95 28 109" stroke={CR} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M42 66 C41 80 40 95 40 109" stroke={CR} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M54 66 C53 80 52 95 52 109" stroke={CR} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M66 66 C65 80 64 95 64 109" stroke={CR} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      {/* Blazer pocket */}
      <path d="M64 72 C68 71 74 73 72 80 L67 79 Q63 78 64 72 Z" fill={CR} stroke={OUTLINE} strokeWidth="1"/>
      {/* Blazer fold shadow */}
      <path d="M50 66 C51 80 51 95 50 109" stroke="#B04010" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3"/>

      {/* === FRONT ARM — carries handbag (right arm forward) === */}
      <path d="M74 78 C82 84 86 96 86 106"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M74 78 C82 84 86 96 86 106"
            stroke={OR} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      {/* Right hand */}
      <path d="M82 104 C80 102 80 96 82 93 C80 89 83 86 86 88
               C85 84 88 82 91 85 C91 81 94 80 96 83
               C99 80 102 81 101 85 C104 84 105 88 103 91
               C105 94 104 101 100 104 C94 108 84 107 82 104 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Knuckle detail */}
      <path d="M86 96 C88 94 91 95" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M92 94 C94 92 97 93" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === HANDBAG === */}
      <path d="M80 108 C78 104 84 103 108 103 C112 104 112 108 112 114
               L112 130 C112 136 108 137 104 137 L86 137 C82 137 80 134 80 128 Z"
            fill={DKBL} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Bag strap loops */}
      <path d="M88 103 C87 97 93 95 99 97 C105 95 111 97 110 103"
            stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Bag detail */}
      <path d="M80 118 L112 118" stroke="#0A1840" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M94 118 C94 112 98 112 98 118" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="96" cy="118" r="2" fill={GO} stroke={OUTLINE} strokeWidth="1"/>
      {/* Bag highlight */}
      <path d="M82 106 C84 104 88 104 90 107 C88 104 84 104 82 106 Z" fill="white" opacity="0.15"/>

      {/* === BACK LEG — trails behind (left leg) === */}
      <path d="M28 107 C18 118 14 130 16 142"
            stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M28 107 C18 118 14 130 16 142"
            stroke={DKBL} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Knee */}
      <ellipse cx="16" cy="142" rx="6" ry="5" fill={DKBL} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Calf */}
      <path d="M16 146 C15 154 16 160 18 164"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M16 146 C15 154 16 160 18 164"
            stroke={DKBL} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="18" cy="164" rx="5" ry="4" fill={SK} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Back heel lifted — pumps/heels */}
      <path d="M8 166 C6 170 8 173 14 173 C22 173 28 170 28 166 C28 163 24 162 18 163 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Heel detail */}
      <rect x="6" y="170" width="4" height="6" rx="1" fill={OUTLINE}/>
      <path d="M10 173 C16 174 24 173 28 170" stroke="#444" strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === FRONT LEG — long stride forward (right leg) === */}
      <path d="M58 107 C68 118 70 130 68 142"
            stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M58 107 C68 118 70 130 68 142"
            stroke={DKBL} strokeWidth="7" strokeLinecap="round" fill="none"/>
      <ellipse cx="68" cy="142" rx="6" ry="5" fill={DKBL} stroke={OUTLINE} strokeWidth="1.5"/>
      <path d="M68 146 C70 154 68 162 66 166"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M68 146 C70 154 68 162 66 166"
            stroke={DKBL} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="66" cy="166" rx="5" ry="4" fill={SK} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Front shoe — flat on ground, confident step */}
      <path d="M54 168 C52 172 54 174 60 174 C70 174 76 171 76 167 C76 164 72 163 66 164 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Heel */}
      <rect x="52" y="170" width="4" height="6" rx="1" fill={OUTLINE}/>
      <path d="M56 174 C62 174 70 173 76 170" stroke="#444" strokeWidth="1" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

// ── Benedikt ──────────────────────────────────────────────────────────────────
// Man, late 40s, fixie bike, leaning forward, orange helmet, moustache, cigarette
export function BenediktAvatar() {
  return (
    <svg viewBox="0 0 158 120" width="158" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* === REAR WHEEL === */}
      <circle cx="30" cy="92" r="22" stroke={OUTLINE} strokeWidth="2" fill="none"/>
      <circle cx="30" cy="92" r="20" stroke="#666" strokeWidth="0.8" fill="none" opacity="0.5"/>
      {/* Spokes */}
      <line x1="30" y1="70" x2="30" y2="114" stroke="#888" strokeWidth="1.2"/>
      <line x1="8"  y1="92" x2="52" y2="92"  stroke="#888" strokeWidth="1.2"/>
      <line x1="14" y1="76" x2="46" y2="108" stroke="#888" strokeWidth="1"/>
      <line x1="46" y1="76" x2="14" y2="108" stroke="#888" strokeWidth="1"/>
      <line x1="10" y1="84" x2="50" y2="100" stroke="#888" strokeWidth="0.8"/>
      <line x1="50" y1="84" x2="10" y2="100" stroke="#888" strokeWidth="0.8"/>
      {/* Hub */}
      <circle cx="30" cy="92" r="5" fill={OUTLINE}/>
      <circle cx="30" cy="92" r="2.5" fill="#888"/>

      {/* === FRONT WHEEL === */}
      <circle cx="124" cy="84" r="22" stroke={OUTLINE} strokeWidth="2" fill="none"/>
      <circle cx="124" cy="84" r="20" stroke="#666" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <line x1="124" y1="62" x2="124" y2="106" stroke="#888" strokeWidth="1.2"/>
      <line x1="102" y1="84" x2="146" y2="84"  stroke="#888" strokeWidth="1.2"/>
      <line x1="108" y1="68" x2="140" y2="100" stroke="#888" strokeWidth="1"/>
      <line x1="140" y1="68" x2="108" y2="100" stroke="#888" strokeWidth="1"/>
      <line x1="104" y1="76" x2="144" y2="92"  stroke="#888" strokeWidth="0.8"/>
      <line x1="144" y1="76" x2="104" y2="92"  stroke="#888" strokeWidth="0.8"/>
      <circle cx="124" cy="84" r="5" fill={OUTLINE}/>
      <circle cx="124" cy="84" r="2.5" fill="#888"/>

      {/* === FRAME — thin fixie frame === */}
      {/* Chainstay (rear axle to bottom bracket) */}
      <line x1="30" y1="92" x2="68" y2="82" stroke={CB} strokeWidth="3" strokeLinecap="round"/>
      {/* Seatstay (rear axle to seat tube) */}
      <line x1="30" y1="92" x2="56" y2="56" stroke={CB} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Seat tube */}
      <line x1="56" y1="56" x2="68" y2="82" stroke={CB} strokeWidth="3" strokeLinecap="round"/>
      {/* Top tube (seat to head tube) */}
      <line x1="56" y1="56" x2="98" y2="48" stroke={CB} strokeWidth="3" strokeLinecap="round"/>
      {/* Down tube (bottom bracket to head tube) */}
      <line x1="68" y1="82" x2="98" y2="48" stroke={CB} strokeWidth="3" strokeLinecap="round"/>
      {/* Fork (head tube to front axle) */}
      <line x1="98" y1="48" x2="124" y2="84" stroke={CB} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Frame highlights */}
      <line x1="56" y1="56" x2="98" y2="48" stroke="#4060C8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>

      {/* === SADDLE === */}
      <path d="M50 54 C54 51 60 51 64 54" stroke={OUTLINE} strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M50 54 C54 51 60 51 64 54" stroke="#4A3020" strokeWidth="3" strokeLinecap="round" fill="none"/>

      {/* === HANDLEBARS — drop bars === */}
      <path d="M96 44 C104 40 110 38 116 40" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" fill="none"/>
      {/* Drops */}
      <path d="M96 44 C96 50 98 54 102 54" stroke={OUTLINE} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M116 40 C116 46 118 50 122 50" stroke={OUTLINE} strokeWidth="3.5" strokeLinecap="round" fill="none"/>

      {/* === CHAIN RING === */}
      <circle cx="68" cy="82" r="10" stroke={OUTLINE} strokeWidth="2" fill="none"/>
      <circle cx="68" cy="82" r="6" stroke={OUTLINE} strokeWidth="1.5" fill="none" opacity="0.5"/>
      <circle cx="68" cy="82" r="3" fill={OUTLINE}/>
      {/* Chain suggestion */}
      <path d="M68 92 C56 100 38 98 30 92" stroke={OUTLINE} strokeWidth="1.5" fill="none" opacity="0.4"/>

      {/* === PEDALS === */}
      {/* Left pedal (near) — pushing down */}
      <rect x="56" y="96" width="12" height="4" rx="1" fill={OUTLINE} transform="rotate(-10 62 98)"/>
      {/* Right pedal (far) — pulling up */}
      <rect x="62" y="68" width="12" height="4" rx="1" fill={OUTLINE} transform="rotate(-10 68 70)"/>

      {/* === BACK LEG — pushing down on pedal === */}
      {/* Thigh */}
      <path d="M52 60 C56 70 58 80 60 90"
            stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M52 60 C56 70 58 80 60 90"
            stroke={DKBL} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Knee */}
      <ellipse cx="60" cy="90" rx="6" ry="5" fill={DKBL} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Calf */}
      <path d="M60 94 C62 100 62 104 60 108"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M60 94 C62 100 62 104 60 108"
            stroke={DKBL} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      {/* Ankle + cycling shoe */}
      <ellipse cx="60" cy="108" rx="5" ry="4" fill={SK} stroke={OUTLINE} strokeWidth="1.5"/>
      <path d="M50 110 C48 114 50 116 56 116 C64 116 70 114 70 110 C70 108 66 107 60 109 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Shoe cleat line */}
      <line x1="52" y1="113" x2="68" y2="113" stroke="#666" strokeWidth="1" strokeLinecap="round"/>

      {/* === FRONT LEG — pulling up on pedal === */}
      {/* Thigh angled up */}
      <path d="M60 62 C68 54 74 50 80 50"
            stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M60 62 C68 54 74 50 80 50"
            stroke={DKBL} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Knee */}
      <ellipse cx="80" cy="50" rx="6" ry="5" fill={DKBL} stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Calf going down to pedal */}
      <path d="M80 54 C80 60 76 66 72 70"
            stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M80 54 C80 60 76 66 72 70"
            stroke={DKBL} strokeWidth="5.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="72" cy="70" rx="5" ry="4" fill={SK} stroke={OUTLINE} strokeWidth="1.5"/>
      <path d="M62 72 C60 76 62 78 68 78 C76 78 82 76 82 72 C82 69 78 68 72 70 Z"
            fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="64" y1="75" x2="80" y2="75" stroke="#666" strokeWidth="1" strokeLinecap="round"/>

      {/* === BODY — cobalt cycling jersey, forward lean ~30° === */}
      <path d="M52 58 C64 46 84 42 100 44 L106 66 C94 72 74 74 56 70 Z"
            fill={CB} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* Orange side stripes on jersey */}
      <path d="M52 58 C54 62 56 68 56 70" stroke={OR} strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M100 44 C102 50 104 58 106 66" stroke={OR} strokeWidth="5" strokeLinecap="round" fill="none"/>
      {/* Jersey texture/fold */}
      <path d="M72 46 C74 56 74 66 72 70" stroke="#2038A0" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"/>
      {/* Race number plate — cream rect on chest */}
      <path d="M68 50 C68 46 72 45 76 45 L92 45 C96 45 98 47 98 50
               L98 62 C98 65 95 66 92 66 L76 66 C72 66 68 64 68 62 Z"
            fill={CR} stroke={OUTLINE} strokeWidth="1.5"/>
      <text x="83" y="60" textAnchor="middle" fontSize="11" fontWeight="900" fill={OUTLINE} fontFamily="Georgia, serif">42</text>

      {/* === LEFT ARM — forward to handlebars === */}
      <path d="M56 62 C72 54 86 48 96 46"
            stroke={OUTLINE} strokeWidth="9" strokeLinecap="round" fill="none"/>
      <path d="M56 62 C72 54 86 48 96 46"
            stroke={CB} strokeWidth="6.5" strokeLinecap="round" fill="none"/>
      {/* Left hand on drops */}
      <path d="M93 44 C91 42 91 36 93 33 C95 30 98 31 98 35
               C98 31 101 29 104 31 C106 33 105 37 104 40
               C106 36 109 36 111 39 C112 42 110 46 107 47
               C109 48 110 52 108 54 C105 56 99 55 95 52
               C93 50 93 47 93 44 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>

      {/* === RIGHT ARM — forward to handlebars === */}
      <path d="M68 58 C80 52 92 48 106 46"
            stroke={OUTLINE} strokeWidth="9" strokeLinecap="round" fill="none"/>
      <path d="M68 58 C80 52 92 48 106 46"
            stroke={CB} strokeWidth="6.5" strokeLinecap="round" fill="none"/>
      {/* Right hand on bars */}
      <path d="M103 44 C101 42 101 36 103 33 C105 30 108 31 108 35
               C108 31 111 29 114 31 C116 33 115 37 114 40
               C116 36 119 36 121 39 C122 42 120 46 117 47
               C119 48 120 52 118 54 C115 56 109 55 105 52
               C103 50 103 47 103 44 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>

      {/* === HEAD — profile facing right, forward lean === */}
      <path d="M28 22 C28 12 34 8 44 7 C54 6 62 10 66 18
               C70 24 70 30 68 36 C70 38 72 41 71 44
               C70 47 68 50 65 52 C62 54 59 55 56 54
               C58 56 58 59 56 61 C53 63 49 63 47 61
               C45 60 44 58 44 56 C40 56 36 54 34 51
               C30 47 28 43 29 38 C28 34 28 28 28 22 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* Face shadow */}
      <path d="M60 10 C66 16 70 26 68 36 C70 28 68 16 64 12 Z" fill={SK2} opacity="0.4"/>
      {/* Cheekbone highlight */}
      <ellipse cx="60" cy="36" rx="4" ry="3" fill={SK3} opacity="0.6"/>
      {/* Jaw/neck muscle suggestion */}
      <path d="M44 56 C46 58 52 60 56 58" stroke={SK2} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>

      {/* === NECK — muscles visible in cycling position === */}
      <path d="M38 58 C38 63 44 66 48 66 L54 66 C58 66 62 63 62 58 Z" fill={SK}/>
      {/* Neck muscle line */}
      <path d="M42 58 C42 63 46 65 50 65" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === ORANGE CYCLING HELMET === */}
      <path d="M26 26 C26 14 34 7 44 6 C54 5 64 10 68 20
               C72 26 70 34 66 36 L30 36 C27 34 26 30 26 26 Z"
            fill={OR} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round"/>
      {/* Helmet vents — dark lines */}
      <path d="M32 14 L32 28" stroke="#A04010" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M38 12 L38 28" stroke="#A04010" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M44 10 L44 28" stroke="#A04010" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M50 11 L50 28" stroke="#A04010" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M56 12 L56 28" stroke="#A04010" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M62 14 L62 28" stroke="#A04010" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Helmet highlight */}
      <path d="M34 12 C42 8 52 8 62 14 C52 10 42 10 36 14 Z" fill="white" opacity="0.2"/>
      {/* Chin strap */}
      <path d="M28 32 C28 40 34 44 38 46" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M34 44 C36 46 40 46 42 44" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* === EAR === */}
      <path d="M28 28 C25 26 23 28 23 33 C22 37 24 41 27 41 C29 41 31 39 30 35 C31 32 31 29 28 28 Z"
            fill={SK} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round"/>

      {/* === DARK CYCLING SUNGLASSES === */}
      <path d="M44 34 C44 28 50 26 56 27 C62 28 68 30 68 36 C68 40 64 42 58 42 C52 42 44 40 44 34 Z"
            fill="#0a1428" stroke={OUTLINE} strokeWidth="1.5"/>
      {/* Glasses arm to ear */}
      <line x1="44" y1="34" x2="30" y2="35" stroke={OUTLINE} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Lens glint */}
      <ellipse cx="52" cy="30" rx="5" ry="2.5" fill="white" opacity="0.15" transform="rotate(-10 52 30)"/>
      <ellipse cx="62" cy="32" rx="3" ry="1.5" fill="white" opacity="0.12" transform="rotate(-10 62 32)"/>

      {/* === NOSE — profile === */}
      <path d="M66 38 C68 40 70 43 69 46" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M68 44 C69 46 67 48 65 47" stroke={SK2} strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* === HANDLEBAR MOUSTACHE — curled at ends === */}
      {/* Center base */}
      <path d="M52 52 C56 50 60 50 64 52" stroke={HD} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Left curl */}
      <path d="M52 52 C48 50 44 52 42 56 C40 60 44 62 46 60 C44 60 42 58 44 56 C46 54 50 53 52 52 Z"
            fill={HD} stroke={OUTLINE} strokeWidth="1"/>
      {/* Right curl */}
      <path d="M64 52 C68 50 72 52 74 56 C76 60 72 62 70 60 C72 60 74 58 72 56 C70 54 66 53 64 52 Z"
            fill={HD} stroke={OUTLINE} strokeWidth="1"/>

      {/* === CIGARETTE + SMOKE === */}
      <rect x="62" y="49" width="14" height="4" rx="2" fill={CR} stroke={OUTLINE} strokeWidth="1"/>
      <rect x="73" y="49" width="5" height="4" rx="1.5" fill={OR}/>
      {/* Ember glow */}
      <circle cx="77" cy="51" r="2.5" fill="#E53E3E" opacity="0.7"/>
      {/* Smoke wisps */}
      <path d="M78 47 C80 43 79 39 82 35" stroke="#CCCCCC" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.8"/>
      <path d="M80 46 C83 42 82 38 85 34" stroke="#CCCCCC" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M79 44 C81 41 80 37 83 33" stroke="#DDDDDD" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"/>
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
