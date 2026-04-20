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
            "Consulenza, Progettazione, Pianificazione e Timing del tuo Evento",
            "Consulenza Wedding Planner",
            "Inviti e Partecipazioni",
            "Gadget Personalizzati",
            "Allestimento Sala",
            "Allestimento Taglio Torta",
            "Confettata",
            "Intrattenimento Musicale",
            "Artisti",
            {
                name: "Dj Set - Animazione",
                items: [],
                image: "/services/dj-set.jpg"
            },
            "Effetti Speciali",
            "APEriWedding - Open Bar",
        ],
    },
    {
        name: "ORGANIZZAZIONE E PIANIFICAZIONE EVENTI",
        slug: "organizzazione-eventi",
        subcategories: [
            "Struttura e Progettazione Evento",
            "Selezione Location",
            "Analisi spese e piano di Budget",
            "Gestione e timing intero evento",
            "Disbrigo pratiche",
        ],
    },
    {
        name: "SERVIZI PER LO SPETTACOLO",
        slug: "spettacolo",
        subcategories: [
            {
                name: "Noleggio e Montaggio impianti audio e luci",
                items: [],
                image: "/services/audio-luci.jpg"
            },
            "Noleggio e montaggio scenografie e luci architetturali",
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
            "Intrattenimento Wedding, Eventi Privati ed Eventi aziendali",
            "Intrattenimento per Feste di Piazza",
            "Intrattenimento ed animazione per bambini",
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
            "Digital & Social Media Marketing",
            "Sviluppo Siti Web & E-commerce",
            "Brand Identity & Logo Design",
            "Content Creation & Grafica Pubblicitaria",
            "Campagne Pubblicitarie & ADS",
        ],
    },
    {
        name: "IDEE INNOVATIVE",
        slug: "idee-innovative",
        subcategories: [
            "Ologrammi & Proiezioni 3D",
            "Virtual Reality Storytelling",
            "Interactive Guestbook Digitali",
            "Intelligenza Artificiale per Eventi",
            "Droni & Light Show",
        ],
    },
];
