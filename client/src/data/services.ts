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
            },
            {
                name: "Gadget Personalizzati",
                items: [],
            },
            {
                name: "Allestimento Cerimonia",
                items: [],
            },
            {
                name: "Allestimento Sala",
                items: [],
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
            },
            {
                name: "Effetti Speciali",
                items: [],
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
            },
            {
                name: "Noleggio e montaggio scenografie e luci architetturali",
                items: [],
            },
            {
                name: "Noleggio e montaggio palchi",
                items: [],
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
