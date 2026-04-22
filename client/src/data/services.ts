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
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Consulenza Wedding Planner",
                items: [],
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
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
                image: "https://images.unsplash.com/photo-1535254973040-607b474cb80d?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Confettata",
                items: [],
                image: "https://images.unsplash.com/photo-1530103862676-de8c9debad17?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Intrattenimento Musicale",
                items: [],
                image: "https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Artisti",
                items: [],
                image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Dj Set - Animazione",
                items: [],
                image: "/services/dj-set.jpg"
            },
            {
                name: "Effetti Speciali",
                items: [],
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "APEriWedding - Open Bar",
                items: [],
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
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
                image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Selezione Location",
                items: [],
                image: "/services/location-1.jpg"
            },
            {
                name: "Analisi spese e piano di Budget",
                items: [],
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Gestione e timing intero evento",
                items: [],
                image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Disbrigo pratiche",
                items: [],
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
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
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Intrattenimento per Feste di Piazza",
                items: [],
                image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Intrattenimento ed animazione per bambini",
                items: [],
                image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=800&q=80"
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
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80"
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
                image: "https://images.unsplash.com/photo-1528642463351-8ef004430bb4?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "ORCHESTRE SPETTACOLO",
                items: ["MusicaMania"],
                image: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=800&q=80"
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
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
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
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Sviluppo Siti Web & E-commerce",
                items: [],
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Brand Identity & Logo Design",
                items: [],
                image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Content Creation & Grafica Pubblicitaria",
                items: [],
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Campagne Pubblicitarie & ADS",
                items: [],
                image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c207?auto=format&fit=crop&w=800&q=80"
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
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Virtual Reality Storytelling",
                items: [],
                image: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Interactive Guestbook Digitali",
                items: [],
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Intelligenza Artificiale per Eventi",
                items: [],
                image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Droni & Light Show",
                items: [],
                image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
            },
        ],
    },
];
