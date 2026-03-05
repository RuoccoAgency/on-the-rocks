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
        title: "Servizi Wedding",
        image: weddingImg,
        subservices: [
            "Consulenza Wedding Planner",
            "Partecipazioni e Wedding Stationery",
            "Gadget Personalizzati",
            "Allestimento e Scenografie",
            "Allestimento Taglio Torta",
            "Sweet Table e Confettata",
            "DJ Set e Animazione",
            "Angolo Open Bar"
        ],
        description: "Il tuo matrimonio da sogno, perfettamente orchestrato dalla prima consulenza all'ultimo ballo.",
        slug: "wedding-services"
    },
    {
        title: "Organizzazione Eventi",
        image: eventPlanningImg,
        subservices: [
            "Design e Progettazione Eventi",
            "Ricerca Location",
            "Gestione Budget",
            "Coordinamento e Timing",
            "Supporto Amministrativo"
        ],
        description: "Pianificazione professionale per eventi di ogni scala, assicurando che ogni dettaglio rispecchi la tua visione.",
        slug: "event-planning"
    },
    {
        title: "Service e Produzione Spettacoli",
        image: showProductionImg,
        subservices: [
            "Noleggio Audio e Luci",
            "Allestimento Palco",
            "Installazioni Luci Scenografiche"
        ],
        description: "Eccellenza tecnologica in audio, luci e strutture per performance indimenticabili.",
        slug: "show-production"
    },
    {
        title: "Agenzia Musicale",
        image: musicAgencyImg,
        subservices: [
            "Intrattenimento per Matrimoni",
            "Eventi Privati",
            "Eventi Aziendali",
            "Feste di Piazza e Festival",
            "Animazione per Bambini"
        ],
        description: "Curiamo la colonna sonora perfetta e l'intrattenimento per ogni pubblico e occasione.",
        slug: "music-agency"
    },
    {
        title: "Artisti",
        image: artistsImg,
        subservices: [
            "Cover Band",
            "Live Band",
            "Orchestre Spettacolo",
            "Gruppi Musica Popolare"
        ],
        description: "Accesso esclusivo a performer d'élite, band e gruppi artistici per eventi di alto impatto.",
        slug: "artists"
    },
    {
        title: "Marketing e Comunicazione",
        image: marketingImg,
        subservices: [
            "Sviluppo Grafico",
            "Promozione Eventi",
            "Comunicazione Sponsor"
        ],
        description: "Branding strategico e promozione per garantire che il tuo evento raggiunga il pubblico giusto.",
        slug: "marketing-communication"
    },
    {
        title: "Idee Innovative",
        image: innovativeImg,
        subservices: [
            "Concept Creativi per Eventi",
            "Sviluppo di Nuove Idee"
        ],
        description: "Superiamo i confini con concetti unici e lungimiranti che rendono il tuo evento eccezionale.",
        slug: "innovative-ideas"
    }
];

export default function FeaturedServices() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section id="featured-services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold block mb-4">
                        La Nostra Esperienza
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
                <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white border-none shadow-2xl">
                    {selectedService && (
                        <div className="flex flex-col">
                            {/* Modal Banner */}
                            <div className="relative h-48 md:h-64 overflow-hidden">
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                            </div>

                            <div className="px-8 pb-10 -mt-12 relative z-10">
                                <DialogHeader className="mb-6">
                                    <DialogTitle className="text-3xl md:text-4xl font-serif text-black mb-2">
                                        {selectedService.title}
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-600 text-base italic">
                                        {selectedService.description}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-4">Cosa offriamo</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedService.subservices.map((sub, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="flex items-center gap-3 text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                    <span className="text-sm font-medium">{sub}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 flex justify-between items-center border-t border-gray-100">
                                        <Button
                                            className="bg-magenta-gradient hover:shadow-lg transition-all duration-300 text-white rounded-full px-8 py-6 h-auto text-base font-bold group"
                                            asChild
                                        >
                                            <a href={`/services/${selectedService.slug}`}>
                                                Scopri di più
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </Button>
                                        <button
                                            onClick={() => setSelectedService(null)}
                                            className="text-gray-400 hover:text-black transition-colors font-medium text-sm"
                                        >
                                            Chiudi
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
