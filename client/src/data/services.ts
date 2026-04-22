export interface SubcategoryGroup {
    name: string;
    items: string[];
    image?: string;
    gallery?: string[];
}

export interface ServiceCategory {
    name: string;
    slug: string;
    subcategories: (string | SubcategoryGroup)[];
}

export const servicesData: ServiceCategory[] = [
    {
        name: "SERVIZI PER I MATRIMONI",
        slug: "matrimoni",
        subcategories: [
            {
                name: "Consulenza, Progettazione, Pianificazione e Timing del tuo Evento",
                items: [],
                image: "/services/wedding-planning.jpg"
            },
            {
                name: "Consulenza Wedding Planner",
                items: [],
                image: "/services/wedding-consultant.jpg"
            },
            {
                name: "Inviti e Partecipazioni",
                items: [],
                image: "/services/inviti.jpg"
            },
            {
                name: "Gadget Personalizzati",
                items: [],
                image: "/services/gadget.jpg"
            },
            {
                name: "Allestimento Cerimonia",
                items: [],
                image: "/services/cerimonia-1.jpg",
                gallery: ["/services/cerimonia-2.jpg"]
            },
            {
                name: "Allestimento Sala",
                items: [],
                image: "/services/sala.jpg"
            },
            {
                name: "Allestimento Taglio Torta",
                items: [],
                image: "/services/cake-cutting.jpg"
            },
            {
                name: "Confettata",
                items: [],
                image: "/services/confettata.jpg"
            },
            {
                name: "Intrattenimento Musicale",
                items: [],
                image: "/services/music.jpg"
            },
            {
                name: "Artisti",
                items: [],
                image: "/services/artists.jpg"
            },
            {
                name: "Dj Set - Animazione",
                items: [],
                image: "/services/dj-set.jpg"
            },
            {
                name: "Effetti Speciali",
                items: [],
                image: "/services/special-effects.jpg"
            },
            {
                name: "APEriWedding - Open Bar",
                items: [],
                image: "/services/aperiwedding.jpg"
            },
        ],
    },
    {
        name: "ORGANIZZAZIONE E PIANIFICAZIONE EVENTI",
        slug: "organizzazione-eventi",
        subcategories: [
            {
                name: "Struttura e Progettazione Evento",
                items: [],
                image: "/services/event-design.jpg"
            },
            {
                name: "Selezione Location",
                items: [],
                image: "/services/location-1.jpg"
            },
            {
                name: "Analisi spese e piano di Budget",
                items: [],
                image: "/services/budget.jpg"
            },
            {
                name: "Gestione e timing intero evento",
                items: [],
                image: "/services/timing.jpg"
            },
            {
                name: "Disbrigo pratiche",
                items: [],
                image: "/services/burocrazia.jpg"
            },
        ],
    },
    {
        name: "SERVIZI PER LO SPETTACOLO",
        slug: "spettacolo",
        subcategories: [
            {
                name: "Noleggio e Montaggio impianti audio e luci",
                items: [],
                image: "/services/audio-luci.jpg",
                gallery: ["/services/audio-luci-2.jpg"]
            },
            {
                name: "Noleggio e montaggio scenografie e luci architetturali",
                items: [],
                image: "/services/scenografia-1.jpg",
                gallery: ["/services/scenografia-2.jpg", "/services/scenografia-3.jpg", "/services/scenografia-4.jpg"]
            },
            {
                name: "Noleggio e montaggio palchi",
                items: [],
                image: "/services/palchi.jpg"
            },
        ],
    },
    {
        name: "AGENZIA MUSICALE",
        slug: "agenzia-musicale",
        subcategories: [
            {
                name: "Intrattenimento Wedding, Eventi Privati ed Eventi aziendali",
                items: [],
                image: "/services/wedding-entertainment.jpg"
            },
            {
                name: "Intrattenimento per Feste di Piazza",
                items: [],
                image: "/services/piazza-entertainment.jpg"
            },
            {
                name: "Intrattenimento ed animazione per bambini",
                items: [],
                image: "/services/kids-entertainment.jpg"
            },
        ],
    },
    {
        name: "ARTISTI",
        slug: "artisti",
        subcategories: [
            {
                name: "TOP",
                items: ["Tartaglia Aneuro", "Valerio Jovine"],
                image: "/services/top-artists.jpg"
            },
            {
                name: "COVER BAND",
                items: [
                    "The Best of Pooh",
                    "VascoVer Band",
                    "Oro - Mango Cover Band",
                    "Il Nostro Canto Libero - Battisti Cover Band",
                    "Canzone - Cover Band Lucio Dalla",
                ],
                image: "/services/cover-band.jpg"
            },
            {
                name: "ORCHESTRE SPETTACOLO",
                items: ["MusicaMania"],
                image: "/services/orchestra.jpg"
            },
            {
                name: "LIVE SHOW",
                items: ["NaltroSound", "Unusual Live Band"],
                image: "/services/liveshow-1.jpg",
                gallery: ["/services/liveshow-2.jpg", "/services/liveshow-3.jpg"]
            },
            {
                name: "FOLK E POPOLARE",
                items: ["Musicastoria", "I Valcalore", "Kiepò"],
                image: "/services/folk.jpg"
            },
        ],
    },
    {
        name: "MARKETING, COMUNICAZIONE E SVILUPPO GRAFICO",
        slug: "marketing",
        subcategories: [
            {
                name: "Digital & Social Media Marketing",
                items: [],
                image: "/services/social-marketing.jpg"
            },
            {
                name: "Sviluppo Siti Web & E-commerce",
                items: [],
                image: "/services/web-development.jpg"
            },
            {
                name: "Brand Identity & Logo Design",
                items: [],
                image: "/services/brand-identity.jpg"
            },
            {
                name: "Content Creation & Grafica Pubblicitaria",
                items: [],
                image: "/services/content-creation.jpg"
            },
            {
                name: "Campagne Pubblicitarie & ADS",
                items: [],
                image: "/services/ads.jpg"
            },
        ],
    },
    {
        name: "IDEE INNOVATIVE",
        slug: "idee-innovative",
        subcategories: [
            {
                name: "Ologrammi & Proiezioni 3D",
                items: [],
                image: "/services/hologram.jpg"
            },
            {
                name: "Virtual Reality Storytelling",
                items: [],
                image: "/services/vr.jpg"
            },
            {
                name: "Interactive Guestbook Digitali",
                items: [],
                image: "/services/guestbook.jpg"
            },
            {
                name: "Intelligenza Artificiale per Eventi",
                items: [],
                image: "/services/ai-events.jpg"
            },
            {
                name: "Droni & Light Show",
                items: [],
                image: "/services/drones.jpg"
            },
        ],
    },
];
