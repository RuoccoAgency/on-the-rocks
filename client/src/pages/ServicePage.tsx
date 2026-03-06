import { useRoute } from "wouter";
import { servicesData, ServiceCategory, SubcategoryGroup } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageIcon } from "lucide-react";

interface SelectedSubcategory {
    title: string;
    parentService: string;
}

export default function ServicePage() {
    const [, params] = useRoute("/servizi/:slug");
    const service = servicesData.find((s) => s.slug === params?.slug);
    const [selectedSub, setSelectedSub] = useState<SelectedSubcategory | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params?.slug]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-serif">Servizio non trovato</h1>
            </div>
        );
    }

    // Determine layout type
    const isCardLayout = ['matrimoni', 'organizzazione-eventi', 'spettacolo', 'agenzia-musicale', 'artisti'].includes(service.slug);

    // Prepare items for card layout
    const cardItems = service.slug === 'artisti'
        ? service.subcategories.map(sub => {
            if (typeof sub === 'object') return { title: sub.name, items: sub.items };
            return { title: sub, items: [] };
        })
        : service.subcategories.map(sub => {
            if (typeof sub === 'string') return { title: sub, items: [] };
            return { title: sub.name, items: sub.items };
        });

    return (
        <div className="bg-white min-h-screen text-black overflow-x-hidden">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-48 pb-32 bg-black text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src={`https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80`}
                        alt={service.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary font-script text-3xl mb-4 block">Eccellenza On The Rocks</span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tighter uppercase leading-none">
                            {service.name}
                        </h1>
                        <div className="h-1.5 w-32 bg-primary mb-10" />
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
                            Progettiamo esperienze straordinarie nel settore {service.slug === 'matrimoni' ? "del wedding" : service.name.toLowerCase()}.
                            Dalla consulenza creativa alla gestione logistica, ogni dettaglio è una promessa di perfezione.
                        </p>
                    </motion.div>
                </div>
            </section>

            {isCardLayout ? (
                /* Subcategories Grid Section (Cards with Modals) */
                <section className="py-24 bg-[#fafafa]">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-tight">I Nostri Servizi</h2>
                                <p className="text-gray-500 text-lg">Esplora le nostre subcategorie e scopri come possiamo rendere unico il tuo evento.</p>
                            </div>
                            <div className="hidden md:block">
                                <span className="text-primary font-bold text-sm uppercase tracking-widest border-b-2 border-primary/20 pb-1">
                                    {cardItems.length} Soluzioni Disponibili
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {cardItems.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    onClick={() => setSelectedSub({
                                        title: item.title,
                                        parentService: service.name,
                                        description: item.items.length > 0 ? `Include: ${item.items.join(', ')}` : undefined
                                    } as any)}
                                    className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                            <ImageIcon size={48} strokeWidth={1} className="text-gray-300" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                                            <span className="px-6 py-3 bg-white text-black font-bold text-[10px] uppercase tracking-[0.2em] rounded-full shadow-xl">
                                                Scopri di più
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <div className="w-10 h-0.5 bg-gray-200 mb-6 group-hover:w-full group-hover:bg-primary transition-all duration-700" />
                                        <div className="mt-auto flex items-center text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                                            Dettagli Servizio <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                /* Standard Content Layout (Marketing & Innovative Ideas) */
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tight leading-none text-magenta-gradient">
                                    {service.name}
                                </h2>
                                <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                                    <p>
                                        In On The Rocks, crediamo che ogni {service.slug === 'marketing' ? 'brand' : 'idea'} meriti un approccio unico e visionario.
                                        Il nostro servizio di {service.name.toLowerCase()} è stato progettato per superare i confini convenzionali,
                                        fondendo creatività pura e strategia d'avanguardia.
                                    </p>
                                    <p>
                                        Collaboriamo con i migliori professionisti del settore per implementare soluzioni che non solo rispondano alle vostre esigenze attuali,
                                        ma anticipino le tendenze future del mercato.
                                    </p>
                                    <ul className="space-y-3 pt-4">
                                        {service.subcategories.map((sub, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span className="font-bold text-black uppercase text-sm tracking-wider">{typeof sub === 'string' ? sub : sub.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    asChild
                                    className="px-12 py-8 bg-black hover:bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[11px] transition-all"
                                >
                                    <a href="/#contact">Prenota una consulenza</a>
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden group shadow-2xl shadow-black/10"
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                    <div className="flex flex-col items-center gap-4">
                                        <ImageIcon size={64} strokeWidth={1} />
                                        <span className="text-[10px] uppercase tracking-[0.4em]">Section Image Placeholder</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />

                                {service.slug === 'idee-innovative' && (
                                    /* Additional Gallery Mockup for Innovative Ideas */
                                    <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                                        <div className="h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center">
                                            <ImageIcon size={20} className="text-white/20" />
                                        </div>
                                        <div className="h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center">
                                            <ImageIcon size={20} className="text-white/20" />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Modal Popup for Card Layout */}
            <Dialog open={!!selectedSub} onOpenChange={(open) => !open && setSelectedSub(null)}>
                <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden bg-white border-none rounded-3xl shadow-3xl">
                    <div className="relative h-48 md:h-64 bg-black">
                        <div className="absolute inset-0 bg-primary opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center text-white/30">
                            <ImageIcon size={64} strokeWidth={1} />
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 z-10">
                            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">{selectedSub?.parentService}</span>
                            <DialogTitle className="text-3xl md:text-5xl font-serif font-bold text-white uppercase leading-none">
                                {selectedSub?.title}
                            </DialogTitle>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <DialogDescription className="sr-only">
                            Dettagli del servizio {selectedSub?.title} offerto da On The Rocks.
                        </DialogDescription>
                        <div className="mb-10 text-gray-500 leading-relaxed text-lg">
                            <p>
                                Il nostro servizio di <strong>{selectedSub?.title}</strong> rappresenta l'apice dell'eccellenza e della personalizzazione.
                                Ogni aspetto viene curato dal nostro team di esperti per garantire che la visione del cliente si trasformi in una realtà indimenticabile.
                            </p>
                            {(selectedSub as any)?.description && (
                                <p className="mt-4 italic text-primary/80 font-medium">
                                    {(selectedSub as any).description}
                                </p>
                            )}
                            <p className="mt-4 text-base">
                                Utilizziamo esclusivamente le migliori tecnologie e fornitori selezionati per offrire un risultato di altissimo livello,
                                tipico dello stile "On The Rocks".
                            </p>
                        </div>

                        {/* Image Gallery Placeholders */}
                        <div className="mb-12">
                            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-6 border-b pb-2">Gallery Anteprima</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 hover:bg-gray-100 transition-colors group">
                                        <ImageIcon className="text-gray-200 group-hover:text-primary/20 transition-colors" size={24} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <Button
                                asChild
                                className="w-full sm:w-auto px-10 py-7 bg-primary hover:bg-primary/90 text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all hover:scale-105"
                            >
                                <a href="/#contact" onClick={() => setSelectedSub(null)}>
                                    Richiedi informazioni
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setSelectedSub(null)}
                                className="w-full sm:w-auto px-10 py-7 border-gray-200 text-gray-400 hover:text-black rounded-full font-bold uppercase tracking-widest text-xs transition-all"
                            >
                                Chiudi
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* CTA Section */}
            <section className="py-24 bg-black text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tighter">Hai un'idea in mente?</h2>
                    <p className="text-xl mb-12 text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Il nostro team è a tua completa disposizione per trasformare ogni desiderio in un progetto unico e memorabile.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-block px-14 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-full hover:bg-primary hover:text-white transition-all shadow-2xl hover:scale-105"
                    >
                        Inizia Ora
                    </a>
                </div>
                {/* Background decorative elements */}
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            </section>

            <Footer />
        </div>
    );
}
