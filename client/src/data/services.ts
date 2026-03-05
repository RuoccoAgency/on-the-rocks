export interface SubcategoryGroup {
    name: string;
    items: string[];
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
            "Dj Set - Animazione",
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
            "Noleggio e Montaggio impianti audio e luci",
            "Noleggio e montaggio scenografie e luci architetturali",
            "Noleggio e montaggio palchi",
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
        subcategories: [],
    },
    {
        name: "IDEE INNOVATIVE",
        slug: "idee-innovative",
        subcategories: [],
    },
];
