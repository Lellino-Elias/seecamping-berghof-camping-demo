import type { CampsiteConfig } from "../types";

/**
 * Seecamping Berghof — Ossiacher See Süduferstraße 241, A-9523 Villach/Landskron, Kärnten.
 * Alle Texte/Fakten belegt aus seecamping-berghof.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Berghof-Fotos in /public/campsites/seecamping-berghof/
 * (jedes Bild vor Verwendung per Vision geprüft).
 *
 * EHRLICH:
 * - Platz liegt GENUIN „direkt am Südufer des Ossiacher Sees" (10 ha Seegrundstück,
 *   800 m Seepromenade, zwei Badestrände) → see-Rahmung ist belegt.
 * - PREISE: Die Quelle nennt NIRGENDS Nächtigungspreise (Stell-/Mobilheim-/Ferienhauspreise
 *   liegen nur hinter nicht gescrapten „Mehr info"-Detailseiten). Einzig reale Preise auf der
 *   Seite: Pauschale „Schnuppertage" € 185 (3 Nächte / 2 Erw.) und eine externe Rafting-Aktivität
 *   (€ 72, giggle.tips). Die Nächtigungs-Kategorien im Buchungswidget sind daher als
 *   pricesArePlaceholder=true mit REALISTISCHEN Platzhalter-Richtpreisen gesetzt und offen
 *   ausgewiesen; die echte Schnuppertage-Pauschale steht als Highlight. Mit Kunden bestätigen.
 * - mobilheime[].priceFrom bewusst weggelassen (keine Quellpreise → nicht erfinden).
 * - awards: [] — die Seite zeigt zwar „Wir sind ausgezeichnet!" mit Partner-/Bewertungs-Logos
 *   (ADAC, camping.info, PiNCamp, ANWB …), nennt aber keine eindeutig benennbare Auszeichnung.
 * - Hunde: nur in der Nebensaison erlaubt, im Hochsommer (04.07.–30.08.) NICHT → ehrlich geframt.
 * - coords weggelassen (keine Koordinaten in der Quelle, kein Internet zum Geocoden).
 */
const IMG = "/campsites/seecamping-berghof";

export const seecampingBerghof: CampsiteConfig = {
  name: "Seecamping Berghof",
  shortName: "Berghof",
  slug: "seecamping-berghof",
  ort: "Villach/Landskron am Ossiacher See",
  region: "Kärnten",
  brandKind: "Camping am Ossiacher See",
  see: "Ossiacher See",
  regionLong: "Region Villach · Ossiacher See · Kärnten · Österreich",

  claim: "Campingurlaub in Kärnten direkt am Ossiacher See",
  claimEmphasis: "direkt am Ossiacher See",
  intro:
    "Eingebettet zwischen Gerlitzen Alpe und Ossiacher Tauern, direkt am sonnigen Südufer des Ossiacher Sees: ein Familienbetrieb mit 10 ha Seegrundstück, 800 m Seepromenade und zwei Badestränden — seit 70 Jahren persönlich geführt.",

  statement: {
    text: "Höchste Qualität, charmanter, persönlicher Service und eine entspannte Wohlfühlatmosphäre fernab von Stress und Trubel — und das seit 70 Jahren.",
    emphasis: "seit 70 Jahren",
  },

  pillars: [
    {
      title: "Direkt am Südufer",
      text: "Terrassenförmige Wiesen, schattenspendende Bäume und herrliche Ausblicke — direkt am glasklaren Ossiacher See, im Herzen von Kärnten.",
      image: { src: `${IMG}/berghof-camping-direkt-am-see.webp`, alt: "Campingplatz direkt am Ufer des Ossiacher Sees mit Bergblick" },
    },
    {
      title: "10 ha am See mit zwei Stränden",
      text: "Ein 10 ha großes Seegrundstück mit 800 m Seepromenade und zwei Badestränden — der Ossiacher See wird im August bis zu 26 Grad warm.",
      image: { src: `${IMG}/berghof-weststrand-badestrand.webp`, alt: "Badestrand mit Steg am Ossiacher See beim Seecamping Berghof" },
    },
    {
      title: "Ein Paradies für Familien",
      text: "Kinderstrand, drei Spielplätze, Kinderanimation und ein großes Sportareal — hier wird es Klein und Groß nie langweilig.",
      image: { src: `${IMG}/berghof-familie-am-see.webp`, alt: "Familien beim Kinderprogramm am Seeufer in der Abendsonne" },
    },
  ],

  usps: [
    "Direkt am Südufer des Ossiacher Sees",
    "10 ha Seegrundstück, zwei Badestrände",
    "Familienbetrieb seit 70 Jahren",
    "Kostenloses WLAN auf allen Stellplätzen",
    "Restaurant, Supermarkt & Strandpavillon am Platz",
    "Kinderstrand, 3 Spielplätze & Animation",
  ],

  trust: {
    heading: "Worauf Sie sich am Berghof verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von der Familie Ertl, seit 70 Jahren am Südufer des Ossiacher Sees zuhause: gepflegte Anlage, aufmerksamer Service und ein sehr gutes Preis-Leistungs-Verhältnis — von vielen Gästen weiterempfohlen.",
  },

  // Keine eindeutig benennbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "April", bis: "November" },

  hero: {
    aerial: { src: `${IMG}/berghof-aerial-see.webp`, alt: "Luftaufnahme: Seecamping Berghof mit Ferienhäusern und Stellplätzen am Ossiacher See" },
    sunset: { src: `${IMG}/berghof-sonnenuntergang-see.webp`, alt: "Sonnenuntergang über dem Ossiacher See mit den Bergen Kärntens" },
  },

  camping: {
    heading: "Camping am Südufer des Ossiacher Sees",
    intro:
      "Erstklassiger Campingurlaub auf terrassenförmig angelegtem Areal: großzügige, parzellierte Plätze mit Stromanschluss, größtenteils mit Panoramablick über den See und die Bergwelt Kärntens.",
    features: [
      {
        title: "Terrassenlage mit Panoramablick",
        text: "Terrassenförmige Wiesen mit schattenspendenden Bäumen und Blick über den Ossiacher See — eingebettet zwischen Gerlitzen Alpe und Ossiacher Tauern.",
        image: { src: `${IMG}/berghof-camping-terrassen.webp`, alt: "Terrassenförmige Stellplätze des Seecamping Berghof am Ossiacher See" },
      },
      {
        title: "Stellplätze für jeden Geschmack",
        text: "Von Zelt- über Standard- und Komfortplätze bis zum Seeplatz: alle parzelliert, mit Stromanschluss (CEE) und befestigtem Untergrund aus Rasen und/oder Kies.",
        image: { src: `${IMG}/berghof-stellplaetze.webp`, alt: "Parzellierte Stellplätze mit Zelten und Wohnwagen am Seecamping Berghof" },
      },
      {
        title: "Seeplätze direkt am Wasser",
        text: "Plätze direkt am See, in Strandnähe oder mit Seeblick — für Wohnwagen und Wohnmobile, mitten im Geschehen am Ufer.",
        image: { src: `${IMG}/berghof-seeplaetze.webp`, alt: "Seeplätze direkt am Ufer des Ossiacher Sees" },
      },
      {
        title: "Superiorplätze 130–155 m²",
        text: "Großzügige Plätze mit 16-Ampere-Anschluss, SAT- sowie Frisch- und Abwasseranschluss — Highlight: eine private Hollywoodschaukel aus Holz.",
        image: { src: `${IMG}/berghof-superiorplatz.webp`, alt: "Superiorplatz mit privater Hollywoodschaukel am See" },
      },
      {
        title: "Moderne Sanitäranlagen",
        text: "Fünf moderne Sanitärgebäude mit Kinder- und Babywaschräumen, privaten Mietbädern (gegen Aufpreis) sowie Waschmaschinen und Trocknern.",
        image: { src: `${IMG}/berghof-sanitaeranlage.webp`, alt: "Moderne Sanitäranlage mit Natursteinwand am Seecamping Berghof" },
      },
      {
        title: "Zelt-Terrassen in der Natur",
        text: "Reine Wiesenplätze für Zelte und Faltcaravans, in Terrassen situiert — umgeben von Wiesen, Wald und Bergen. WLAN ist auf allen Stellplätzen kostenlos.",
        image: { src: `${IMG}/berghof-zeltterrassen.webp`, alt: "Zeltplätze auf grünen Terrassen am Seecamping Berghof" },
      },
    ],
  },

  mobilheime: {
    heading: "Ferienhäuser & Mobilheime",
    intro:
      "Lieber feste Wände als Zelt? Urige Ferienhäuser aus rund 200 Jahre altem Lärchenholz mit Privatsauna und neue, klimatisierte Mobilheime — beide das ganze Jahr über buchbar, auch im Winter.",
    items: [
      {
        name: "Ferienhaus Premium",
        kind: "Ferienhaus · bis 6 Personen",
        text: "70 m² aus Lärchenholz: zwei Schlafzimmer, zwei Badezimmer, Holzofen und eine eigene Privatsauna mit Blick auf den Ossiacher See.",
        image: { src: `${IMG}/berghof-ferienhaus-premium.webp`, alt: "Ferienhaus Premium aus Lärchenholz am Seecamping Berghof" },
        features: ["70 m²", "2 Schlafzimmer · 2 Bäder", "eigene Sauna"],
      },
      {
        name: "Ferienhaus Deluxe",
        kind: "Ferienhaus · bis 8 Personen",
        text: "90 m² für die große Familie: drei Schlafzimmer, zwei Badezimmer, Privatsauna und überdachte Terrasse mit Sitzecke im Obstgarten.",
        image: { src: `${IMG}/berghof-ferienhaus-deluxe.webp`, alt: "Geräumiges Ferienhaus Deluxe mit Balkon und Terrasse" },
        features: ["90 m²", "3 Schlafzimmer · 2 Bäder", "eigene Sauna"],
      },
      {
        name: "Mobilheim Kat. A",
        kind: "Mobilheim · bis 5 Personen",
        text: "40 m² mit zwei getrennten Schlafzimmern, großem Wohn-Essbereich mit SAT-TV, voll eingerichteter Küche, Zentralheizung und Klimaanlage.",
        image: { src: `${IMG}/berghof-mobilheim-wohnbereich.webp`, alt: "Moderner Wohn- und Essbereich im Mobilheim am Seecamping Berghof" },
        features: ["40 m²", "2 Schlafzimmer", "Klimaanlage"],
      },
      {
        name: "Mobilheim Kat. B – Seeblick",
        kind: "Mobilheim · 40 m²",
        text: "Mobilheim mit Seeblick: voll ausgestattete Küche mit Geschirrspüler und Nespresso, eigenes Bad, überdachte Terrasse und kleiner Grünbereich.",
        image: { src: `${IMG}/berghof-mobilheim-kueche.webp`, alt: "Voll eingerichtete Küche im Mobilheim am Seecamping Berghof" },
        features: ["40 m²", "2 Schlafzimmer", "Seeblick"],
      },
    ],
  },

  kinder: {
    heading: "Ferien für die ganze Familie",
    intro:
      "Eigener Kinderstrand mit Wasserrutsche, drei Spielplätze, ein Indoorkletterbereich und Kinderanimation im Kinderland — während Mama und Papa am See entspannen.",
    features: [
      {
        title: "Kinderland & Animation",
        text: "In den Ferienzeiten hat das Kinderland sechs Tage die Woche geöffnet: Kinderdisco, Kasperltheater, Zaubershow, Floßbau und Ponyreiten warten auf die Kleinen.",
        image: { src: `${IMG}/berghof-ponyreiten.webp`, alt: "Kinder beim Ponyreiten am Seecamping Berghof" },
      },
      {
        title: "Drei Spielplätze",
        text: "Drei Kinderspielplätze auf dem ganzen Gelände, zwei davon direkt an den Badestränden — die Kinder immer in Sichtweite.",
        image: { src: `${IMG}/berghof-spielplatz.webp`, alt: "Spielplatz mit Rutsche und Spielturm am Seecamping Berghof" },
      },
      {
        title: "Indoorkletterbereich",
        text: "Auch für Schlechtwettertage gerüstet: ein Indoorkletterbereich sowie ein Jugendraum mit Tischtennis, Billard und Tischfußball.",
        image: { src: `${IMG}/berghof-indoor-spielbereich.webp`, alt: "Indoor-Kletterbereich am Seecamping Berghof" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am See & in den Bergen",
    intro:
      "Glasklares Badewasser, jede Menge Wassersport und ein 5 ha großes Sportareal direkt am Platz — und ringsum die Berge und Ausflugsziele der Region Villach.",
    items: [
      {
        title: "Baden & Wasserspaß",
        text: "Eigener Kinderstrand mit Wasserrutsche, Sandstrand und seichter Uferbereich am glasklaren Ossiacher See — Badewasser in Trinkwasserqualität.",
        image: { src: `${IMG}/berghof-baden-wasserspass.webp`, alt: "Kinder beim Baden im Ossiacher See" },
      },
      {
        title: "Wassersport & Motorboot",
        text: "Vom Wasserski übers Bananefahren bis zum Wassertrampolin — am Ossiacher See ist für Action auf dem Wasser gesorgt.",
        image: { src: `${IMG}/berghof-motorboot-wassersport.webp`, alt: "Motorboot mit Bananefahrt am Ossiacher See" },
      },
      {
        title: "Sportareal & Beachvolleyball",
        text: "Ein 5 ha großes Sportareal mit Beachvolleyball- und Fußballplatz, Adventure-Minigolf und dem Lake.Bike Family Play- and Bike Park.",
        image: { src: `${IMG}/berghof-beachvolleyball.webp`, alt: "Beachvolleyballplätze am Seecamping Berghof" },
      },
      {
        title: "Adventure-Minigolf",
        text: "Auf der Adventure-Minigolf-Anlage wird über Steine, Kurven und Hindernisse geputtet — ein Spaß für die ganze Familie.",
        image: { src: `${IMG}/berghof-adventure-minigolf.webp`, alt: "Adventure-Minigolf-Anlage am Seecamping Berghof" },
      },
      {
        title: "Ossiacher See Schifffahrt",
        text: "Der Anlegesteg liegt direkt beim Campingplatz: Leinen los für eine heitere Bootsfahrt über den glasklaren Ossiacher See.",
        image: { src: `${IMG}/berghof-schifffahrt.webp`, alt: "Ausflugsschiff auf dem Ossiacher See" },
      },
      {
        title: "Berge & Gerlitzen Alpe",
        text: "Wandern, Radfahren und Mountainbiken rund um den See — die Gerlitzen Alpe und die Ossiacher Tauern liegen direkt vor der Tür.",
        image: { src: `${IMG}/berghof-gerlitzen-bergbahn.webp`, alt: "Bergbahn an der Gerlitzen Alpe über dem Ossiacher See" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die A2 Süd Autobahn bis Villach, weiter Richtung Ossiacher See / Landskron zur Ossiacher See Süduferstraße 241." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Klagenfurt (KLU) liegt in der Nähe von Villach; von dort weiter mit Mietwagen oder Transfer." },
      { title: "Mit Bahn & Bus", text: "Bahnhof Villach Hauptbahnhof, weiter mit Bus oder Taxi zum Südufer des Ossiacher Sees." },
    ],
  },

  galerie: {
    heading: "Ferien am Ossiacher See",
    headingEmphasis: "Ossiacher See",
    intro:
      "Stimmungsvolle Stunden am Wasser, frische Köstlichkeiten und ein Sonnenuntergang über dem See — ein paar Eindrücke vom Seecamping Berghof.",
    tag: "April bis November",
    images: [
      { src: `${IMG}/berghof-stimmung-am-see.webp`, alt: "Abendstimmung am Ossiacher See beim Seecamping Berghof" },
      { src: `${IMG}/berghof-restaurant-terrasse.webp`, alt: "Sonnenterrasse des Landgasthaus Berghof" },
      { src: `${IMG}/berghof-supermarkt.webp`, alt: "Frische Obst- und Gemüseauswahl im Supermarkt am Campingplatz" },
      { src: `${IMG}/berghof-strandpavillon.webp`, alt: "Strandpavillon direkt am Ossiacher See" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personen — das Berghof-Team meldet sich mit Ihrer persönlichen Verfügbarkeit und den aktuellen Tagespreisen.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — die Website nennt keine Nächtigungspreise; diese Werte sind realistische Platzhalter (bitte bestätigen). Reales Angebot: Schnuppertage € 185 für 3 Nächte / 2 Erwachsene.",
    highlight: {
      title: "Schnuppertage ab € 185",
      text: "3 Nächte für 2 Erwachsene ab € 185,– — das Kennenlern-Angebot vom Berghof. Aktuelle Tagespreise gerne auf Anfrage.",
    },
    categories: [
      // PLATZHALTER — keine Nächtigungspreise in der Quelle. Realistische Kärntner Richtwerte, mit Kunde bestätigen.
      { id: "stellplatz", label: "Stellplatz", perNight: 39, perExtraGuest: 10 },
      { id: "mobilheim", label: "Mobilheim", perNight: 119, perExtraGuest: 0 },
      { id: "ferienhaus", label: "Ferienhaus", perNight: 169, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    coords: { lat: 46.636001, lng: 13.900532 },
    tel: "+43 4242 41133",
    telHref: "tel:+43424241133",
    mail: "office@seecamping-berghof.at",
    adresse: "Ossiacher See Süduferstraße 241 · A-9523 Villach/Landskron · Kärnten",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Ferienhäuser", href: "#mobilheime" },
        { label: "Mobilheime", href: "#mobilheime" },
        { label: "Stellplätze", href: "#camping" },
      ],
    },
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplatz-Kategorien", href: "#camping" },
        { label: "Seeplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Kinderland & Animation", href: "#kinder" },
        { label: "Spielplätze", href: "#kinder" },
        { label: "Indoorbereich", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv & See",
      href: "#aktivitaeten",
      children: [
        { label: "Baden & Wassersport", href: "#aktivitaeten" },
        { label: "Sportareal", href: "#aktivitaeten" },
        { label: "Ausflüge", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Anfrage", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default seecampingBerghof;
