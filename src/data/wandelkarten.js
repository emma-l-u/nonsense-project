// Data sourced from weimar.wandelkarten.de — sustainable & community places in Weimar

export const WANDEL_CATS = {
  food:      { label: 'Food & Market',     emoji: '😋', color: '#6ECC8A' },
  community: { label: 'Community & Free',  emoji: '🤝', color: '#B48EF2' },
  repair:    { label: 'Repair & Services', emoji: '🔧', color: '#7C2030' },
  culture:   { label: 'Library & Books',   emoji: '',   color: '#52B8F0' },
}

// Filtered to valid Weimar coordinates only (lng roughly 11.27–11.42)
export const WANDEL_POIS = [

  // ── Food & Market ──────────────────────────────────────────────────────────
  { id: 'f1',  cat: 'food', name: 'Bioladen Rosmarin',          addr: 'Herderplatz 3',                lat: 50.9808226, lng: 11.3291889, info: 'Organic grocery (EVG)' },
  { id: 'f2',  cat: 'food', name: 'Bioladen Kirschberg',         addr: 'Eduard-Rosenthal-Str. 22a',    lat: 50.9873168, lng: 11.3327027, info: 'Organic grocery (EVG)' },
  { id: 'f3',  cat: 'food', name: 'Brotklappe',                  addr: 'Frauenplan 8',                 lat: 50.9775075, lng: 11.3280740, info: 'Bakery' },
  { id: 'f4',  cat: 'food', name: 'Brotklappe',                  addr: 'Trierer Straße 46',            lat: 50.9779414, lng: 11.3173072, info: 'Bakery' },
  { id: 'f5',  cat: 'food', name: 'Bäcker Süpke',                addr: 'Röhrstraße 21b',               lat: 50.9878377, lng: 11.3173071, info: 'Bakery' },
  { id: 'f6',  cat: 'food', name: 'Bäckerei Rose',               addr: 'Lisztstraße 1',                lat: 50.9780370, lng: 11.3217698, info: 'Bakery' },
  { id: 'f7',  cat: 'food', name: 'Denns Biomarkt',              addr: 'Damaschkestraße 1',            lat: 50.9798528, lng: 11.3094289, info: 'Organic supermarket' },
  { id: 'f8',  cat: 'food', name: 'Reformhaus Dr. Geller',       addr: 'Kaufstraße 1',                 lat: 50.9796247, lng: 11.3291870, info: 'Health food & natural products' },
  { id: 'f9',  cat: 'food', name: 'Reformhaus Wünscher',         addr: 'Schützengasse 5',              lat: 50.9782218, lng: 11.3267305, info: 'Health food & natural products' },
  { id: 'f10', cat: 'food', name: 'Röstbrüder',                  addr: 'Kaufstraße 19',                lat: 50.9808050, lng: 11.3296450, info: 'Coffee roastery & café' },
  { id: 'f11', cat: 'food', name: 'Röstbrüder',                  addr: 'Richard-Wagner-Str. 17',       lat: 50.9769226, lng: 11.3194345, info: 'Coffee roastery & café' },
  { id: 'f12', cat: 'food', name: 'Wochenmarkt Weimar',          addr: 'Marktplatz',                   lat: 50.9784000, lng: 11.3294000, info: 'Weekly farmers market — Tue, Thu, Sat' },
  { id: 'f13', cat: 'food', name: 'Biebereis Manufaktur',        addr: 'Erfurter Str. 35',             lat: 50.9804689, lng: 11.3183578, info: 'Artisan ice cream' },
  { id: 'f14', cat: 'food', name: 'Biebereis Eismanufaktur',     addr: 'Windischenstraße 25',          lat: 50.9796146, lng: 11.3276531, info: 'Artisan ice cream & patisserie' },
  { id: 'f15', cat: 'food', name: 'Gönnataler Fleischerei',      addr: 'Marktstraße 22',               lat: 50.9801238, lng: 11.3277188, info: 'Regional wild & poultry butcher' },
  { id: 'f16', cat: 'food', name: "Gretchens Restaurant & Café", addr: 'Seifengasse 8',                lat: 50.9775737, lng: 11.3295942, info: 'Café & restaurant' },
  { id: 'f17', cat: 'food', name: 'Eine Welt Laden',             addr: 'Windischenstraße 24',          lat: 50.9796972, lng: 11.3278090, info: 'Fair trade shop — food & gifts' },
  { id: 'f18', cat: 'food', name: 'Gemüsebande',                 addr: 'Alte Bahnhofstraße, Schöndorf',lat: 51.0136301, lng: 11.3537567, info: 'Community vegetable cooperative' },

  // ── Community & Free ───────────────────────────────────────────────────────
  { id: 'c1',  cat: 'community', name: 'Schenke – Umsonstladen', addr: 'Carl-August-Allee 11',          lat: 50.9888950, lng: 11.3260970,
    info: 'Free shop — clothing, household, books & more',
    hours: 'Wed 16–20 · Fri 14–18 · Sun 12–18',
    contact: 'schenke.weimar@posteo.de',
  },
  { id: 'c2',  cat: 'community', name: 'Fairteiler Alte Feuerwache',   addr: 'Mozartstraße 21',         lat: 50.9801544, lng: 11.3179385, info: 'Community sharing shelf — free food & goods' },
  { id: 'c3',  cat: 'community', name: 'Fairteiler Damaschkestraße',   addr: 'Damaschkestraße 19a',     lat: 50.9778424, lng: 11.3038945, info: 'Community sharing shelf — free food & goods' },
  { id: 'c4',  cat: 'community', name: 'Fairteiler KH11',              addr: 'Karl-Haußknecht-Str. 11', lat: 50.9727345, lng: 11.3268353, info: 'Community sharing shelf — free food & goods' },
  { id: 'c5',  cat: 'community', name: 'Fairteiler Peter-Cornelius',   addr: 'Peter-Cornelius-Str. 6',  lat: 50.9816860, lng: 11.3137980, info: 'Community sharing shelf — free food & goods' },
  { id: 'c6',  cat: 'community', name: 'Fairteiler Gelbe Zora',        addr: 'Zöllnerstraße 2',         lat: 50.9768027, lng: 11.3169354, info: 'Community sharing shelf — free food & goods' },
  { id: 'c7',  cat: 'community', name: 'Fairteiler OMA',               addr: 'Ernst-Kohl-Str. 23',      lat: 50.9892727, lng: 11.3243962, info: 'Community sharing shelf — free food & goods' },
  { id: 'c8',  cat: 'community', name: 'Campusgarten Bauhaus-Uni',     addr: 'Amalienstraße 13',        lat: 50.9749669, lng: 11.3274390, info: 'Community garden — open to all' },
  { id: 'c9',  cat: 'community', name: 'Obstnatur e.V.',               addr: 'Goetheplatz 9b',          lat: 50.9827908, lng: 11.3261352, info: 'Fruit tree mapping & harvesting cooperative' },
  { id: 'c10', cat: 'community', name: 'Kleiderkammer TAV',            addr: 'Friesstraße 21',          lat: 50.9887000, lng: 11.3310000, info: 'Low-cost clothing from the Unemployed Association' },
  { id: 'c11', cat: 'community', name: 'Refill-Station Blauer Salon',  addr: 'Puschkinstraße 3',        lat: 50.9784335, lng: 11.3297689, info: 'Refill station — bring your own bottle' },

  // ── Repair & Services ──────────────────────────────────────────────────────
  { id: 'r1',  cat: 'repair', name: 'Rad Doktor',               addr: 'Heinrich-Heine-Str. 18',      lat: 50.9798562, lng: 11.3237943, info: 'Bike repair shop' },
  { id: 'r2',  cat: 'repair', name: 'CUBE Store',               addr: 'Hummelstraße 2a',             lat: 50.9791811, lng: 11.3260605, info: 'Bike shop & repair' },
  { id: 'r3',  cat: 'repair', name: 'Fahrradpumpe Mensa',       addr: 'Marienstraße 13',             lat: 50.9756212, lng: 11.3296130, info: 'Public bike pump — free to use' },
  { id: 'r4',  cat: 'repair', name: 'Radpumpe Rad-Doktor',      addr: 'Heinrich-Heine-Str. 18',      lat: 50.9800154, lng: 11.3234596, info: 'Public bike pump — free to use' },
  { id: 'r5',  cat: 'repair', name: 'Elektro Beltzner',         addr: 'Carl-von-Ossietzky-Str. 12', lat: 50.9883655, lng: 11.3327904, info: 'Electronics repair' },
  { id: 'r6',  cat: 'repair', name: 'Hifi Senf',                addr: 'Rollplatz 7',                 lat: 50.9829867, lng: 11.3260409, info: 'Hi-fi & electronics repair' },
  { id: 'r7',  cat: 'repair', name: 'Ulrich Klett',             addr: 'Humboldtstraße 6',            lat: 50.9766220, lng: 11.3267377, info: 'Shoe repair' },
  { id: 'r8',  cat: 'repair', name: 'Multiservice Bergmann',    addr: 'Erfurter Straße 7',           lat: 50.9797146, lng: 11.3221992, info: 'General repairs & alterations' },
  { id: 'r9',  cat: 'repair', name: 'Messer-/Scherenschleiferei', addr: 'Schöndorfer Hauptstr. 45', lat: 51.0136614, lng: 11.3480447, info: 'Knife & scissor sharpening' },
  { id: 'r10', cat: 'repair', name: 'Repaircafé Kromsdorf',     addr: 'Dorfstraße 61, Kromsdorf',    lat: 51.0029203, lng: 11.3633439, info: 'Community repair café' },
  { id: 'r11', cat: 'repair', name: 'schauschau',               addr: 'Teichgasse 4',                lat: 50.9810693, lng: 11.3284175, info: 'Ethical & sustainable fashion' },
  { id: 'r12', cat: 'repair', name: 'LOVEAFAIR Organic',        addr: 'Marktstraße 22',              lat: 50.9801238, lng: 11.3277188, info: 'Organic clothing' },
  { id: 'r13', cat: 'repair', name: 'Seife & Sinne',            addr: 'Karl-Liebknecht-Str. 13',     lat: 50.9837808, lng: 11.3256752, info: 'Natural cosmetics & soap' },
  { id: 'r14', cat: 'repair', name: 'Schirmfachgeschäft Pennewitz', addr: 'Rittergasse 19',          lat: 50.9802843, lng: 11.3279165, info: 'Umbrella repair & specialist' },
  { id: 'r15', cat: 'repair', name: 'WC Kollegiengasse',        addr: 'Kollegiengasse 8',            lat: 50.9791688, lng: 11.3309221, info: 'Public toilet' },

  // ── Library & Books ────────────────────────────────────────────────────────
  { id: 'b1',  cat: 'culture', name: 'Stadtbücherei Weimar',        addr: 'Steubenstraße 1',              lat: 50.9770569, lng: 11.3268184, info: 'Public library — books, media, events' },
  { id: 'b2',  cat: 'culture', name: 'Hauptbibliothek HfM',         addr: 'Platz der Demokratie 2/3',     lat: 50.9786170, lng: 11.3314990, info: 'Music university library — open to public' },
  { id: 'b3',  cat: 'culture', name: 'Stadtbibliothek Schöndorf',   addr: 'Max-Reichpietsch-Str. 14',     lat: 51.0136671, lng: 11.3360037, info: 'Public library branch' },
  { id: 'b4',  cat: 'culture', name: 'Büchertauschregal nahkauf',   addr: 'Bodelschwinghstraße 82',       lat: 50.9718196, lng: 11.3442608, info: 'Free book exchange shelf' },
  { id: 'b5',  cat: 'culture', name: 'Büchertauschregal',           addr: 'Paul-Schneider-Straße',        lat: 50.9790943, lng: 11.3069915, info: 'Free book exchange shelf' },
]
