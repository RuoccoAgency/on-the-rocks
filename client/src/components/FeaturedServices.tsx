import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
        slug: "wedding-services"
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
        slug: "event-planning"
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
        slug: "show-production"
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
        slug: "music-agency"
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
        slug: "artists"
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
        slug: "marketing-communication"
    },
    {
        title: "Idee Innovative",
        image: innovativeImg,
        subservices: [
            "Hai voglia di sviluppare un’idea innovativa?",
            "Sviluppala insieme a noi.."
        ],
        description: "Creatività senza limiti per trasformare concetti visionari in realtà spettacolari.",
        slug: "innovative-ideas"
    }
];

export default function FeaturedServices() {
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
                            onClick={() => setSelectedService(service)}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-magenta-glow">
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

            <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
                <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden bg-white border-none shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide">
                    {selectedService && (
                        <div className="flex flex-col">
                            {/* Modal Banner */}
                            <div className="relative h-48 md:h-64 overflow-hidden shrink-0">
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                            </div>

                            <div className="px-8 pb-10 -mt-12 relative z-10">
                                <DialogHeader className="mb-6">
                                    <DialogTitle className="text-3xl md:text-4xl font-serif text-black mb-2 leading-tight">
                                        {selectedService.title}
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-600 text-base italic">
                                        {selectedService.description}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-4">Cosa offriamo</h4>

                                        {selectedService.groupedSubservices ? (
                                            <div className="space-y-6">
                                                {selectedService.groupedSubservices.map((group: any, idx: number) => (
                                                    <div key={idx} className="bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                                                        <h5 className="text-black text-sm font-bold uppercase tracking-widest mb-3 border-b border-primary/10 pb-2">{group.label}</h5>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                            {group.items.map((item: string, i: number) => (
                                                                <div key={i} className="flex items-center gap-2 text-gray-700">
                                                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                                                    <span className="text-sm">{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {selectedService.subservices?.map((sub: string, i: number) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                        <span className="text-sm font-medium">{sub}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-100">
                                        <Button
                                            className="w-full md:w-auto bg-magenta-gradient hover:shadow-lg transition-all duration-300 text-white rounded-full px-10 py-6 h-auto text-base font-bold group"
                                            asChild
                                        >
                                            <a href="#contact" onClick={() => setSelectedService(null)}>
                                                Contattaci ora
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </Button>
                                        <button
                                            onClick={() => setSelectedService(null)}
                                            className="text-gray-400 hover:text-black transition-colors font-medium text-sm py-2"
                                        >
                                            Torna ai servizi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
