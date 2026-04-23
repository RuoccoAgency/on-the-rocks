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
                image: "/inviti%20e%20partecipazioni/Copia di IMG-20260411-WA0039.jpg",
                gallery: [
                    "/inviti%20e%20partecipazioni/Copia di IMG-20260411-WA0039.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0026.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0028.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0035.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0038.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0044.jpg",
                    "/inviti%20e%20partecipazioni/IMG-20260411-WA0084.jpg"
                ]
            },
            {
                name: "Gadget Personalizzati",
                items: [],
            },
            
{
                name: "Allestimento Cerimonia",
                items: [],
                image: "/allestimento%20cerimonia/Copia di IMG-20260411-WA0055.jpg",
                gallery: [
                    "/allestimento%20cerimonia/Copia di IMG-20260411-WA0055.jpg",
                    "/allestimento%20cerimonia/Copia di IMG-20260411-WA0060.jpg",
                    "/allestimento%20cerimonia/Copia di IMG-20260411-WA0065.jpg",
                    "/allestimento%20cerimonia/Copia di IMG-20260411-WA0086.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0027.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0029.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0032.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0034.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0036.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0040.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0041.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0042.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0043.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0045.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0046.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0051.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0112.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0113.jpg",
                    "/allestimento%20cerimonia/IMG-20260411-WA0114.jpg"
                ]
            },
            {
                name: "Allestimento Sala",
                items: [],
                image: "/Allestimento%20sala/IMG-20260411-WA0018.jpg",
                gallery: [
                    "/Allestimento%20sala/IMG-20260411-WA0018.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0026.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0044.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0056.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0057.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0058.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0066.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0067.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0068.jpg",
                    "/Allestimento%20sala/IMG-20260411-WA0086.jpg"
                ]
            },
            
{
                name: "Allestimento Taglio Torta",
                items: [],
                image: "/taglio%20torta/Copia di IMG-20260411-WA0055.jpg",
                gallery: [
                    "/taglio%20torta/Copia di IMG-20260411-WA0055.jpg",
                    "/taglio%20torta/Copia di IMG-20260411-WA0060.jpg",
                    "/taglio%20torta/IMG-20260411-WA0034.jpg",
                    "/taglio%20torta/IMG-20260411-WA0036.jpg",
                    "/taglio%20torta/IMG-20260411-WA0045.jpg",
                    "/taglio%20torta/IMG-20260411-WA0046.jpg",
                    "/taglio%20torta/IMG-20260411-WA0051.jpg"
                ]
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
                image: "/dj%20set%20animazione/IMG-20260411-WA0005.jpg",
                gallery: [
                    "/dj%20set%20animazione/IMG-20260411-WA0005.jpg"
                ]
            },
            
{
                name: "Effetti Speciali",
                items: [],
                image: "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.30.jpeg",
                gallery: [
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.30.jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.31 (1).jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.31 (2).jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.31 (3).jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.31.jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.32.jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.33 (1).jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.33.jpeg",
                    "/effetti%20speciali/WhatsApp Image 2026-04-22 at 12.16.36.jpeg"
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
                image: "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0056.jpg",
                gallery: [
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0056.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0057.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0059.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0060.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0061.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0062.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0063.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0066.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0067.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0068.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0069.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0070.jpg",
                    "/Audio,%20Luci%20e%20Regie/IMG-20260416-WA0071.jpg"
                ]
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
                image: "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0003.jpg",
                gallery: [
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0003.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0004.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0009.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0010.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0011.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0012.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260411-WA0033.jpg",
                    "/Live%20Show%20e%20Cover%20Band/IMG-20260416-WA0064.jpg"
                ]
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
