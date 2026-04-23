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
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Consulenza Wedding Planner",
                items: [],
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Intrattenimento Musicale",
                items: [],
                image: "https://images.unsplash.com/photo-1510076857177-74700760be49?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Artisti",
                items: [],
                image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1535254973040-607b474cb80d?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Selezione Location",
                items: [],
                image: "https://images.unsplash.com/photo-1530103862676-de8c9debad17?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Analisi spese e piano di Budget",
                items: [],
                image: "https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Gestione e timing intero evento",
                items: [],
                image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Disbrigo pratiche",
                items: [],
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Intrattenimento per Feste di Piazza",
                items: [],
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Intrattenimento ed animazione per bambini",
                items: [],
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "ORCHESTRE SPETTACOLO",
                items: ["MusicaMania"],
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1528642463351-8ef004430bb4?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Sviluppo Siti Web & E-commerce",
                items: [],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Brand Identity & Logo Design",
                items: [],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Content Creation & Grafica Pubblicitaria",
                items: [],
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Campagne Pubblicitarie & ADS",
                items: [],
                image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Virtual Reality Storytelling",
                items: [],
                image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c207?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Interactive Guestbook Digitali",
                items: [],
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Intelligenza Artificiale per Eventi",
                items: [],
                image: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&w=800&q=80",
            },
            {
                name: "Droni & Light Show",
                items: [],
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
            },
        ],
    },

    {
        name: "18 ANNI",
        slug: "18-anni",
        subcategories: [
            {
                name: "Festa dei 18 Anni - Organizzazione Completa",
                items: [],
                image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Allestimento Location",
                items: [],
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Dj Set & Intrattenimento",
                items: [],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
            }
        ]
    }
];
