import type { CampsiteConfig } from "../types";

const IMG = "/campsites/seecamping-berghof";

const seecampingBerghof: CampsiteConfig = {
  name: "Seecamping Berghof",
  shortName: "Berghof",
  slug: "seecamping-berghof",
  ort: "Villach/Landskron",
  region: "Kärnten",
  brandKind: "Camping am Ossiacher See",
  see: "Ossiacher See",
  regionLong: "Ossiacher See · Region Villach · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Familiencamping direkt am Südufer des Ossiacher Sees",
  claimEmphasis: "Ossiacher Sees",
  emailDetail: "euer 800-Meter-Seeufer mit zwei eigenen Badestränden",
  intro:
    "Zwischen Gerlitzen Alpe und Ossiacher Tauern liegt auf einem terrassierten Seegrundstück der Platz, den Familie Ertl seit 70 Jahren führt — direkt am sonnigen Südufer des glasklaren Ossiacher Sees.",

  logo: { src: `${IMG}/logo.png`, alt: "Seecamping Berghof Logo" },

  statement: {
    text: "Zehn Hektar Seegrundstück, 800 Meter Promenade, zwei Badestrände — und mittendrin dein Stellplatz.",
    emphasis: "zwei Badestrände",
  },

  pillars: [
    {
      title: "Direkt am Südufer",
      text: "Großzügige Plätze am sonnigen Südufer des Ossiacher Sees — mit Seezugang, Promenade und Blick auf die Berge Kärntens.",
      image: { src: `${IMG}/pillar-see.webp`, alt: "Stellplätze direkt am Ossiacher See beim Seecamping Berghof" },
    },
    {
      title: "Plätze mit Seeblick",
      text: "Seeplätze in Strandnähe und Superiorplätze mit privater Hollywoodschaukel — Panoramablick über See und Bergwelt inklusive.",
      image: { src: `${IMG}/pillar-seeblick.webp`, alt: "Seeplatz mit Hollywoodschaukel und Blick auf den Ossiacher See" },
    },
    {
      title: "Mehr als nur Stellplatz",
      text: "Im Obstgarten steht das Feriendorf: urige Holzhäuser aus Lärchenholz und gemütliche Mobilheime — ganzjährig buchbar, auch im Winter.",
      image: { src: `${IMG}/pillar-feriendorf.webp`, alt: "Feriendorf aus Holzhäusern am Ossiacher See — Luftaufnahme" },
    },
  ],

  usps: [
    "Direkt am Ossiacher See",
    "800 m Seepromenade",
    "Zwei Badestrände",
    "Seit 70 Jahren Familie Ertl",
    "Kostenloses WLAN",
    "Restaurant & Supermarkt",
  ],

  trust: {
    heading: "Darauf ist am Berghof seit 70 Jahren Verlass",
    headingEmphasis: "seit 70 Jahren",
    intro:
      "Ein Familienbetrieb am Südufer des Ossiacher Sees: terrassierte Wiesen mit Seeblick, fünf moderne Sanitärgebäude, eigenes Restaurant und Supermarkt — gepflegt, persönlich und mitten in der Natur Kärntens.",
  },

  awards: [],

  saison: { von: "17. April", bis: "2. November" },

  hero: {
    aerial: { src: `${IMG}/hero-aerial.webp`, alt: "Seecamping Berghof am sonnigen Südufer des Ossiacher Sees" },
    sunset: { src: `${IMG}/hero-sunset.webp`, alt: "Sonnenaufgang über dem Ossiacher See" },
  },

  breather: {
    image: { src: `${IMG}/breather-abend.webp`, alt: "Abendlicht über den Stellplätzen am Schilfufer des Ossiacher Sees" },
    line: "Abendlicht über dem Schilf — der See wird ganz still.",
  },

  camping: {
    heading: "Camping am Südufer",
    intro:
      "Terrassierte Wiesen, schattenspendende Bäume und kurze Wege zum Wasser — vom Zeltplatz bis zum Superiorplatz mit Seeblick findest du hier deinen Platz.",
    features: [
      {
        title: "Terrassierte Stellplätze",
        text: "Parzellierte Plätze auf terrassenförmig angelegten Wiesen — von 60 bis 155 m², alle mit Stromanschluss und befestigtem Untergrund.",
        image: { src: `${IMG}/camping-terrassen.webp`, alt: "Terrassierte Stellplätze am Seecamping Berghof" },
      },
      {
        title: "Ruhige Zeltterrassen",
        text: "Reine Wiesenplätze für Zelte und Faltcaravans, in Terrassen über dem See situiert — geschützt zwischen Bäumen gelegen.",
        image: { src: `${IMG}/camping-zelte.webp`, alt: "Zeltterrassen auf der Wiese am Seecamping Berghof" },
      },
      {
        title: "Fünf moderne Sanitärgebäude",
        text: "Top ausgestattete Dusch- und WC-Anlagen, Kinder- und Babywaschräume sowie private Mietbäder — von jedem Stellplatz bequem erreichbar.",
        image: { src: `${IMG}/camping-sanitaer.webp`, alt: "Modernes Sanitärgebäude mit Schieferwänden am Seecamping Berghof" },
      },
      {
        title: "Restaurant mit Terrasse",
        text: "Im Landgasthaus Berghof gibt es Kärntner Kasnudeln, Rippchen und mehr — mit großer Terrasse, dazu einmal pro Woche eine Weinverkostung.",
        image: { src: `${IMG}/camping-restaurant.webp`, alt: "Landgasthaus Berghof am Campingplatz" },
      },
      {
        title: "Platzeigener Supermarkt",
        text: "Frische Zutaten für den selbst gekochten Urlaubsschmaus gibt es direkt am Platz — täglich geöffnet, kurze Wege inklusive.",
        image: { src: `${IMG}/camping-supermarkt.webp`, alt: "Platzeigener Supermarkt am Seecamping Berghof" },
      },
      {
        title: "Seeplätze am Ufer",
        text: "Plätze direkt am See, in Strandnähe oder mit Seeblick — morgens zuerst der Blick übers Wasser, dann ein paar Schritte zum Baden.",
        image: { src: `${IMG}/camping-seeplatz.webp`, alt: "Seeplatz am Schilfufer des Ossiacher Sees" },
      },
    ],
  },

  mobilheime: {
    heading: "Mobilheime & Ferienhäuser",
    intro:
      "Campingfeeling ohne eigenes Zelt: kompakte Mobilheime und urige Ferienhäuser aus Lärchenholz im Obstgarten — beide auch in den Wintermonaten buchbar.",
    items: [
      {
        name: "Mobilheim",
        kind: "bis 5 Personen · rund 40 m²",
        text: "Sieben heimelige Holzhäuschen auf der Mobilheimterrasse: zwei Schlafzimmer, voll ausgestattete Küche, eigene überdachte Terrasse — eine Kategorie sogar mit Seeblick.",
        image: { src: `${IMG}/mobilheim-aussen.webp`, alt: "Mobilheim mit überdachter Terrasse am Seecamping Berghof" },
        features: ["2 getrennte Schlafzimmer", "Voll ausgestattete Küche", "Klimaanlage & Zentralheizung", "Überdachte Terrasse"],
      },
      {
        name: "Ferienhaus Premium",
        kind: "70 m² · 2 Schlafzimmer · Sauna",
        text: "Neue Häuser aus rund 200 Jahre altem Lärchenholz — mit gusseisernem Holzofen im Wohnbereich und einer Privatsauna mit Blick auf den Ossiacher See.",
        image: { src: `${IMG}/ferienhaus-aussen.webp`, alt: "Ferienhaus aus Lärchenholz am Seecamping Berghof" },
        features: ["Privatsauna mit Seeblick", "2 Badezimmer", "Gusseiserner Holzofen", "Überdachte Terrasse"],
      },
      {
        name: "Ferienhaus Deluxe",
        kind: "90 m² · 3 Schlafzimmer · bis 6 Personen",
        text: "Das große Lärchenholzhaus mit drei Schlafzimmern, zwei Bädern und eigener Sauna — Platz für die ganze Familie, mit Balkon und überdachter Terrasse.",
        image: { src: `${IMG}/ferienhaus-deluxe.webp`, alt: "Ferienhaus Deluxe mit Balkon und Terrasse am Seecamping Berghof" },
        features: ["3 Schlafzimmer", "Private Sauna", "2 Badezimmer", "Balkon & Terrasse"],
      },
    ],
  },

  kinder: {
    heading: "Ein Paradies für Familien",
    intro:
      "Drei Außen- und ein Indoor-Spielplatz, ein eigenes Animationsteam und ganz viel Platz zum Draußensein — bei freiem Programm langweilt sich hier kein Kind.",
    features: [
      {
        title: "Ponyreiten",
        text: "Beim Freizeitprogramm geht es im Sommer immer wieder aufs Pony — gemächlich übers Gelände, gleich neben dem Spielplatz.",
        image: { src: `${IMG}/kids-pony.webp`, alt: "Ponyreiten für Kinder am Seecamping Berghof" },
      },
      {
        title: "Floßbau am See",
        text: "Selbst ein Floß bauen und damit auf den Ossiacher See hinauspaddeln — ein Klassiker aus dem Berghof-Freizeitprogramm.",
        image: { src: `${IMG}/kids-floss.webp`, alt: "Kinder beim Floßbau am Ossiacher See" },
      },
      {
        title: "Eigenes Kinderbad",
        text: "Liebevoll gestaltete Kinder- und Babywaschräume mit Apfelbaum-Waschbecken — Sauberwerden wird hier fast zum Spiel.",
        image: { src: `${IMG}/kids-kinderbad.webp`, alt: "Kinderbad mit Apfelbaum-Waschbecken am Seecamping Berghof" },
      },
    ],
  },

  aktivitaeten: {
    heading: "See, Berge & die Region Villach",
    intro:
      "Baden, Radfahren, Wandern, Bergbahn fahren — der Ossiacher See liegt direkt vor dem Vorzelt, und ringsum wartet die Vielfalt der Region Villach.",
    items: [
      {
        title: "Baden & Strandpavillon",
        text: "Zwei Badestrände, ein Strandkiosk und der Strandpavillon am Weststrand — der Sprung ins glasklare Wasser ist nur ein paar Schritte entfernt.",
        image: { src: `${IMG}/aktiv-strandpavillon.webp`, alt: "Strandpavillon am Weststrand des Ossiacher Sees" },
      },
      {
        title: "Radfahren & Mountainbiken",
        text: "Rund um den See führen Rad- und Mountainbike-Wege wie der Alban-Berg-Trail — Räder können direkt am Platz gemietet werden.",
        image: { src: `${IMG}/aktiv-mtb.webp`, alt: "Mountainbiken auf einem Trail über dem Ossiacher See" },
      },
      {
        title: "Auf die Gerlitzen Alpe",
        text: "Mit der Kanzelbahn hinauf auf die Gerlitzen Alpe — oben weiter Blick über den Ossiacher See bis weit nach Kärnten hinein.",
        image: { src: `${IMG}/aktiv-gerlitzen.webp`, alt: "Kanzelbahn auf die Gerlitzen Alpe über dem Ossiacher See" },
      },
      {
        title: "Natur am Bleistätter Moor",
        text: "Spazier- und Wanderwege führen zu magischen Orten wie dem Bleistätter Moor mit seinem Aussichtsturm — Ruhe und Naturkino inklusive.",
        image: { src: `${IMG}/aktiv-moor.webp`, alt: "Aussichtsturm am Bleistätter Moor bei Villach" },
      },
      {
        title: "Gipfel & Aussicht",
        text: "Die Bergwelt rund um Villach lädt zu Touren ein — vom Hausberg Dobratsch bis zu stillen Abendstimmungen über den Gipfeln.",
        image: { src: `${IMG}/aktiv-dobratsch.webp`, alt: "Abendstimmung am Dobratsch bei Villach" },
      },
      {
        title: "Kärntner Kulinarik",
        text: "Eine zünftige Brettljause, regionale Spezialitäten und Weine aus dem Alpen-Adria-Raum — die Region schmeckt man bei jedem Bissen.",
        image: { src: `${IMG}/aktiv-brettljause.webp`, alt: "Kärntner Brettljause in der Region Villach" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Ossiacher See",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 Tauern Autobahn bis Villach, dann der Ossiacher See Süduferstraße bis Hausnummer 241 in Landskron folgen — beschildert." },
      { title: "Mit der Bahn", text: "Hauptbahnhof Villach, rund 10 Minuten mit Bus oder Taxi ans Südufer des Ossiacher Sees." },
      { title: "Mit dem Flugzeug", text: "Flughafen Klagenfurt am Wörthersee in etwa 30 Fahrminuten — ideal für die Anreise aus der Ferne." },
    ],
  },

  galerie: {
    heading: "Sommer am Ossiacher See",
    headingEmphasis: "Ossiacher See",
    intro: "Seeluft, terrassierte Wiesen und lange Abende am Wasser — ein paar Eindrücke vom Seecamping Berghof.",
    tag: "April bis November",
    images: [
      { src: `${IMG}/galerie-seeufer.webp`, alt: "Stellplatz direkt am Ufer des Ossiacher Sees" },
      { src: `${IMG}/galerie-wiese.webp`, alt: "Wohnmobile auf der sonnigen Wiese am Seecamping Berghof" },
      { src: `${IMG}/galerie-abend.webp`, alt: "Zelte im Abendlicht am Ossiacher See" },
      { src: `${IMG}/galerie-steg.webp`, alt: "Pause am Steg mit Blick über den Ossiacher See" },
    ],
  },

  booking: {
    heading: "Sicher dir deinen Sommer am Ossiacher See",
    headingEmphasis: "am Ossiacher See",
    intro: "Wähle Zeitraum und Kategorie — Familie Ertl meldet sich persönlich mit deiner Verfügbarkeit und dem passenden Angebot.",
    pricesArePlaceholder: false,
    priceNote:
      "Schnuppertage ab € 185 für 3 Nächte & 2 Personen (inkl. Strom, Seerundfahrt mit der MS Ossiach & Zwei-Gang-Menü). Stell- und Hauspreise auf Anfrage. Zzgl. Ortstaxe € 2,70 p. P. (Juni/Juli/Sept.) bzw. € 2,20 (April/Mai/Okt./Nov.) und Umweltabgabe € 5,10 pro Stellplatz.",
    highlight: {
      title: "Schnuppertage ab € 185",
      text: "3 Nächte für 2 Personen inklusive Strom, einer Seerundfahrt mit der MS Ossiach und einem Zwei-Gang-Menü im Landgasthaus.",
    },
    categories: [
      { id: "zeltplatz", label: "Zeltplatz" },
      { id: "standardplatz", label: "Standard- / Komfortplatz" },
      { id: "seeplatz", label: "Seeplatz" },
      { id: "superiorplatz", label: "Superiorplatz" },
      { id: "mobilheim", label: "Mobilheim" },
      { id: "ferienhaus", label: "Ferienhaus" },
    ],
  },

  kontakt: {
    coords: { lat: 46.653752, lng: 13.932682 },
    tel: "+43 4242 41133",
    telHref: "tel:+43424241133",
    mail: "office@seecamping-berghof.at",
    adresse: "Ossiacher See Süduferstraße 241 · 9523 Villach/Landskron · Kärnten",
  },

  languages: ["DE", "EN", "NL"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default seecampingBerghof;
