import luisImg    from '../assets/luis.png'
import anneImg    from '../assets/anne.png'
import beateImg   from '../assets/beate.png'
import benediktImg from '../assets/benedikt.png'

// Resolved URLs — used directly in Leaflet divIcons
export const CHARACTER_IMAGES = {
  luis:     luisImg,
  anne:     anneImg,
  beate:    beateImg,
  benedikt: benediktImg,
}

// Avatar components — used in character cards (RoutePlanner)
export function LuisAvatar()     { return <img src={luisImg}     alt="Little Luis"    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> }
export function AnneAvatar()     { return <img src={anneImg}     alt="Aunt Anne"      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> }
export function BeateAvatar()    { return <img src={beateImg}    alt="Busy Beate"     style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> }
export function BenediktAvatar() { return <img src={benediktImg} alt="Biker Benedikt" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> }

export const CHARACTERS = {
  luis:     { id: 'luis',     name: 'Little Luis',    tagline: 'avoid busy roads and fast cars',         routeType: 'safest',  mode: 'walk', color: '#2563eb', cardBg: '#dbeafe', Avatar: LuisAvatar,     voice: (dist, time) => `Luis found a safe path! No scary roads. ${dist} km · ${time} min` },
  anne:     { id: 'anne',     name: 'Aunt Anne',       tagline: 'enjoy promenading like Anne & her pomeranian', routeType: 'nicest',  mode: 'walk', color: '#16a34a', cardBg: '#bbf7d0', Avatar: AnneAvatar,     voice: (dist, time) => `Anne took the scenic way. Her Pomeranian approves. ${time} min of bliss.` },
  beate:    { id: 'beate',    name: 'Busy Beate',      tagline: 'No time to waste',                 routeType: 'fastest', mode: 'walk', color: '#d97706', cardBg: '#fde68a', Avatar: BeateAvatar,    voice: (dist, time) => `Beate approves. ${dist} km, ${time} min. Straight to the point.` },
  benedikt: { id: 'benedikt', name: 'Biker Benedikt',  tagline: 'Always on his fixie',              routeType: 'bike',    mode: 'bike', color: '#ea580c', cardBg: '#fed7aa', Avatar: BenediktAvatar, voice: (dist, time) => `Benedikt mapped his route. ${dist} km. Helmet optional.` },
}

export const CHARACTER_ORDER = ['luis', 'anne', 'beate', 'benedikt']
