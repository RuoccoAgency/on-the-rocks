import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Import assets using the alias
import weddingImg from "@assets/wedding_hero.png";
import eventPlanningImg from "@assets/event_planning.png";
import showProductionImg from "@assets/show_production.png";
import musicAgencyImg from "@assets/music_agency.png";
import artistsImg from "@assets/artists.png";
import marketingImg from "@assets/marketing.png";
import innovativeImg from "@assets/innovative_ideas.png";

const services = [
    {
        title: "Servizi per i Matrimoni",
        image: weddingImg,
        subservices: [
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
            "APEriWedding - Open Bar"
        ],
        description: "Il tuo matrimonio da sogno, perfettamente orchestrato in ogni dettaglio tecnico ed emozionale.",
        slug: "matrimoni"
    },
    {
        title: "Organizzazione e Pianificazione Eventi",
        image: eventPlanningImg,
        subservices: [
            "Struttura e Progettazione Evento",
            "Selezione Location",
            "Analisi spese e piano di Budget",
            "Gestione e timing intero evento",
            "Disbrigo pratiche"
        ],
        description: "Pianificazione professionale e logistica completa per eventi aziendali e privati.",
        slug: "organizzazione-eventi"
    },
    {
        title: "Servizi per lo Spettacolo",
        image: showProductionImg,
        subservices: [
            "Noleggio e Montaggio impianti audio e luci",
            "Noleggio e montaggio scenografie e luci architetturali",
            "Noleggio e montaggio palchi"
        ],
        description: "Service tecnico di alta qualità con attrezzature all'avanguardia per ogni tipo di spettacolo.",
        slug: "spettacolo"
    },
    {
        title: "Agenzia Musicale",
        image: musicAgencyImg,
        subservices: [
            "Intrattenimento Wedding, Eventi Privati ed Eventi aziendali",
            "Intrattenimento per Feste di Piazza",
            "Intrattenimento ed animazione per bambini"
        ],
        description: "Direzione artistica e gestione musicale per rendere unico ogni momento del tuo evento.",
        slug: "agenzia-musicale"
    },
    {
        title: "Artisti",
        image: artistsImg,
        groupedSubservices: [
            { label: "TOP", items: ["Tartaglia Aneuro", "Valerio Jovine"] },
            { label: "COVER BAND", items: ["The Best of Pooh", "VascoVer Band", "Oro (Mango Cover Band)", "Il Nostro Canto Libero (Battisti Cover Band)", "Canzone (Lucio Dalla Cover Band)"] },
            { label: "ORCHESTRE SPETTACOLO", items: ["MusicaMania"] },
            { label: "LIVE SHOW", items: ["NaltroSound", "Unusual Live Band"] },
            { label: "FOLK E POPOLARE", items: ["Musicastoria", "I Valcalore", "Kiepò"] }
        ],
        description: "Performance d'eccellenza con i migliori artisti e band del panorama nazionale.",
        slug: "artisti"
    },
    {
        title: "Marketing, Comunicazione e Sviluppo Grafico",
        image: marketingImg,
        subservices: [
            "Sviluppiamo ogni tua idea.. la rendiamo reale graficamente",
            "Promozione dell'evento",
            "Comunicazione con Sponsor e Fornitori"
        ],
        description: "Sviluppiamo ogni tua idea.. la rendiamo reale graficamente e ci occupiamo della promozione nonché della comunicazione.",
        slug: "marketing"
    },
    {
        title: "Idee Innovative",
        image: innovativeImg,
        subservices: [
            "Hai voglia di sviluppare un’idea innovativa?",
            "Sviluppala insieme a noi.."
        ],
        description: "Creatività senza limiti per trasformare concetti visionari in realtà spettacolari.",
        slug: "idee-innovative"
    }
];

import { useLocation } from "wouter";

export default function FeaturedServices() {
    const [, setLocation] = useLocation();
    const [selectedService, setSelectedService] = useState<any | null>(null);

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold block mb-4">
                        La Nostra Eccellenza
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-6">
                        I Nostri <span className="text-primary font-script">Servizi</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer relative"
                            onClick={() => setLocation(`/servizi/${service.slug}`)}
                        >
                            <div className="relative aspect-video sm:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-magenta-glow">
                                {/* Background Image */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <div className="w-12 h-0.5 bg-primary mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        {service.description}
                                    </p>

                                    <div className="mt-6 flex items-center text-primary text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        Scopri di più <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
