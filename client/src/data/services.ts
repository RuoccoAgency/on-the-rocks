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
            },
            {
                name: "Consulenza Wedding Planner",
                items: [],
            },
            {
                name: "Inviti e Partecipazioni",
                items: [],
                image: "/services/inviti.jpg",
            },
            {
                name: "Gadget Personalizzati",
                items: [],
                image: "/services/gadget.jpg",
            },
            {
                name: "Allestimento Cerimonia",
                items: [],
                image: "/services/cerimonia-1.jpg",
                gallery: ["/services/cerimonia-2.jpg", "/services/cerimonia-3.jpg"]
            },
            {
                name: "Allestimento Sala",
                items: [],
                image: "/services/sala.jpg",
                gallery: ["/services/sala-2.jpg", "/services/sala-3.jpg", "/services/sala-4.jpg"]
            },
            {
                name: "Allestimento Taglio Torta",
                items: [],
            },
            {
                name: "Confettata",
                items: [],
            },
            {
                name: "Intrattenimento Musicale",
                items: [],
            },
            {
                name: "Artisti",
                items: [],
            },
            {
                name: "Dj Set - Animazione",
                items: [],
                image: "/services/dj-set.jpg",
            },
            {
                name: "Effetti Speciali",
                items: [],
                image: "/effetti%20speciali/WhatsApp%20Image%202026-04-22%20at%2012.16.30.jpeg",
                gallery: [
                    "/effetti%20speciali/WhatsApp%20Image%202026-04-22%20at%2012.16.31.jpeg",
                    "/effetti%20speciali/WhatsApp%20Image%202026-04-22%20at%2012.16.31%20(1).jpeg",
                    "/effetti%20speciali/WhatsApp%20Image%202026-04-22%20at%2012.16.31%20(2).jpeg",
                    "/effetti%20speciali/WhatsApp%20Image%202026-04-22%20at%2012.16.31%20(3).jpeg",
                    "/effetti%20speciali/WhatsApp%20Image%202026-04-22%20at%2012.16.32.jpeg",
                    "/effetti%20speciali/WhatsApp%20Image%202026-04-22%20at%2012.16.33.jpeg",
                    "/effetti%20speciali/WhatsApp%20Image%202026-04-22%20at%2012.16.33%20(1).jpeg",
                    "/effetti%20speciali/WhatsApp%20Image%202026-04-22%20at%2012.16.36.jpeg"
                ]
            },
            {
                name: "APEriWedding - Open Bar",
                items: [],
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
            },
            {
                name: "Selezione Location",
                items: [],
                image: "/services/location-1.jpg",
            },
            {
                name: "Analisi spese e piano di Budget",
                items: [],
            },
            {
                name: "Gestione e timing intero evento",
                items: [],
            },
            {
                name: "Disbrigo pratiche",
                items: [],
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
                image: "/services/palchi.jpg",
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
            },
            {
                name: "Intrattenimento per Feste di Piazza",
                items: [],
            },
            {
                name: "Intrattenimento ed animazione per bambini",
                items: [],
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
            },
            {
                name: "ORCHESTRE SPETTACOLO",
                items: ["MusicaMania"],
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
            },
            {
                name: "Sviluppo Siti Web & E-commerce",
                items: [],
            },
            {
                name: "Brand Identity & Logo Design",
                items: [],
            },
            {
                name: "Content Creation & Grafica Pubblicitaria",
                items: [],
            },
            {
                name: "Campagne Pubblicitarie & ADS",
                items: [],
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
            },
            {
                name: "Virtual Reality Storytelling",
                items: [],
            },
            {
                name: "Interactive Guestbook Digitali",
                items: [],
            },
            {
                name: "Intelligenza Artificiale per Eventi",
                items: [],
            },
            {
                name: "Droni & Light Show",
                items: [],
            },
        ],
    },
];
