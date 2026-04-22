import { useRoute } from "wouter";
import { servicesData, ServiceCategory, SubcategoryGroup } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

interface SelectedSubcategory {
    title: string;
    parentService: string;
    image?: string;
    gallery?: string[];
    description?: string;
}

export default function ServicePage() {
    const [, params] = useRoute("/servizi/:slug");
    const serviceSlug = params?.slug?.toLowerCase().replace(/\s+/g, '-');
    const service = servicesData.find((s) => s.slug === serviceSlug);
    const [selectedSub, setSelectedSub] = useState<SelectedSubcategory | null>(null);
    const [lightboxImages, setLightboxImages] = useState<string[]>([]);
    const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

    const openLightbox = (images: string[], index: number) => {
        setLightboxImages(images);
        setGalleryIndex(index);
    };

    const apeImages = [
        "/APEriWedding/IMG-20260411-WA0025.jpg",
        "/APEriWedding/IMG-20260411-WA0013.jpg",
        "/APEriWedding/IMG-20260411-WA0006.jpg",
        "/APEriWedding/IMG-20260411-WA0007.jpg",
        "/APEriWedding/IMG-20260411-WA0008.jpg",
        "/APEriWedding/IMG-20260411-WA0014.jpg",
        "/APEriWedding/IMG-20260411-WA0024.jpg",
    ];

    const nextImage = () => {
        if (galleryIndex !== null && lightboxImages.length > 0) {
            setGalleryIndex((galleryIndex + 1) % lightboxImages.length);
        }
    };

    const prevImage = () => {
        if (galleryIndex !== null && lightboxImages.length > 0) {
            setGalleryIndex((galleryIndex - 1 + lightboxImages.length) % lightboxImages.length);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Handle hash for deep linking to subcategories
        if (service && window.location.hash) {
            const hash = decodeURIComponent(window.location.hash.substring(1)).toLowerCase().replace(/\s+/g, '-');
            const sub = service.subcategories.find(s => {
                const title = typeof s === 'string' ? s : s.name;
                return title.toLowerCase().replace(/[^a-z0-9]/g, '-') === hash;
            });

            if (sub) {
                const item = typeof sub === 'string' 
                    ? { title: sub, items: [], image: undefined, gallery: undefined }
                    : { title: sub.name, items: sub.items, image: sub.image, gallery: sub.gallery };
                
                setSelectedSub({
                    title: item.title,
                    parentService: service.name,
                    image: item.image,
                    gallery: item.gallery,
                    description: item.items.length > 0 ? `Include: ${item.items.join(', ')}` : undefined
                });
            }
        }
    }, [params?.slug, service]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-serif">Servizio non trovato</h1>
            </div>
        );
    }

    // Determine layout type (Always use card layout now)
    const isCardLayout = true;

    // Prepare items for card layout
    const cardItems = service.subcategories.map(sub => {
        if (typeof sub === 'string') return { title: sub, items: [], image: undefined, gallery: undefined };
        return { 
            title: sub.name, 
            items: sub.items, 
            image: sub.image, 
            gallery: sub.gallery 
        };
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
                <>
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                            {cardItems.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="relative h-48 sm:h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                            {item.image ? (
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="flex flex-col items-center gap-2">
                                                    <ImageIcon size={40} strokeWidth={1} className="text-gray-300" />
                                                    <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">On The Rocks</span>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <div className="w-10 h-0.5 bg-gray-200 mb-6 group-hover:w-full group-hover:bg-primary transition-all duration-700" />
                                        
                                        <div className="mt-auto">
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedSub({
                                                        title: item.title,
                                                        parentService: service.name,
                                                        image: item.image,
                                                        gallery: item.gallery,
                                                        description: item.items.length > 0 ? `Include: ${item.items.join(', ')}` : undefined
                                                    });
                                                }}
                                                className="w-full bg-gray-50 hover:bg-primary text-gray-400 hover:text-white rounded-xl py-6 font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2"
                                            >
                                                Scopri di più <ArrowRight size={14} />
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    </section>

                    {service.slug === 'matrimoni' && (
                        <section className="py-32 bg-white overflow-hidden border-t border-gray-50">
                            <div className="container mx-auto px-6">
                                <div className="flex flex-col items-center text-center mb-20">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ once: true }}
                                        className="max-w-3xl"
                                    >
                                        <span className="text-primary font-script text-3xl mb-4 block">Originalità e Stile</span>
                                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tight">APEriWedding</h2>
                                        <div className="h-1 w-20 bg-primary mx-auto mb-8" />
                                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                                            È un aperitivo innovativo servito su un’Ape degli anni ’80, pensato per rendere il matrimonio ancora più originale, elegante e memorabile. Un’idea scenografica e di grande impatto, perfetta per accogliere gli ospiti con stile e creare un momento conviviale, raffinato e diverso dal solito.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* APEriWedding Featured Image (Strictly Static) */}
                                <div className="mb-12 rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[21/9] select-none cursor-default">
                                    <img 
                                        src={apeImages[0]} 
                                        alt="APEriWedding Featured" 
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                    <div className="absolute bottom-10 left-10 text-white pointer-events-none">
                                        <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-2 block">Premium Experience</span>
                                        <h3 className="text-3xl md:text-5xl font-serif font-bold uppercase">L'Arte dell'Aperitivo</h3>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                    {apeImages.slice(1).map((src, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            onClick={() => openLightbox(apeImages.slice(1), index)}
                                            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 aspect-square"
                                        >
                                            <img 
                                                src={src} 
                                                alt={`APEriWedding photo ${index + 1}`} 
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </>
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
                                        {service.subcategories.map((sub, i) => {
                                            const subObj = typeof sub === 'string' 
                                                ? { title: sub, items: [], image: undefined, gallery: undefined }
                                                : { title: sub.name, items: sub.items, image: sub.image, gallery: sub.gallery };
                                            
                                            return (
                                                <li 
                                                    key={i} 
                                                    className="flex items-center gap-3 cursor-pointer group/item"
                                                    onClick={() => setSelectedSub({
                                                        title: subObj.title,
                                                        parentService: service.name,
                                                        image: subObj.image,
                                                        gallery: subObj.gallery,
                                                        description: subObj.items.length > 0 ? `Include: ${subObj.items.join(', ')}` : undefined
                                                    })}
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                                                    <span className="font-bold text-black uppercase text-sm tracking-wider group-hover/item:text-primary transition-colors">
                                                        {subObj.title}
                                                    </span>
                                                </li>
                                            );
                                        })}
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
                                className="relative aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10 select-none cursor-default"
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300 pointer-events-none">
                                    <div className="flex flex-col items-center gap-4">
                                        <ImageIcon size={64} strokeWidth={1} />
                                        <span className="text-[10px] uppercase tracking-[0.4em]">Section Image Placeholder</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />

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
                <DialogContent className="max-w-[95vw] sm:max-w-[700px] w-full max-h-[90vh] sm:max-h-[85vh] p-0 bg-white border-none rounded-[2rem] shadow-3xl overflow-hidden flex flex-col">
                    <DialogHeader className="sr-only">
                        <DialogTitle>{selectedSub?.title}</DialogTitle>
                        <DialogDescription>Dettagli del servizio {selectedSub?.title}</DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex-1 overflow-y-auto custom-scrollbar-v2 scroll-smooth outline-none touch-pan-y overscroll-contain relative">
                        {/* Main Hero Header - Static & Non-Interactive (Allows scrolling) */}
                        <div 
                            className="relative h-56 sm:h-80 bg-gray-900 overflow-hidden border-b border-gray-100 select-none pointer-events-none"
                        >
                            {selectedSub?.image ? (
                                <div 
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${selectedSub.image})` }}
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
                            )}
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            
                            <div className="absolute bottom-6 left-8 right-8 text-white">
                                <motion.span 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-2 block"
                                >
                                    {selectedSub?.parentService}
                                </motion.span>
                                <h2 className="text-2xl md:text-4xl font-serif font-bold uppercase leading-tight tracking-tight">
                                    {selectedSub?.title}
                                </h2>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <DialogDescription className="sr-only">
                                Dettagli del servizio {selectedSub?.title} offerto da On The Rocks.
                            </DialogDescription>

                            <div className="mb-10 text-gray-600 leading-relaxed text-base md:text-lg">
                                <p className="mb-4">
                                    Il nostro servizio di <strong>{selectedSub?.title}</strong> rappresenta l'apice dell'eccellenza e della personalizzazione nel panorama degli eventi. 
                                    Ogni aspetto viene curato dal nostro team di esperti con meticolosa attenzione ai dettagli, garantendo che ogni elemento sia in perfetta armonia con la visione del cliente.
                                </p>
                                <p>
                                    Dalla fase di concept iniziale fino alla realizzazione finale, ci impegniamo a trasformare idee astratte in realtà indimenticabili, 
                                    creando atmosfere uniche che lasciano un segno indelebile in ogni ospite.
                                </p>
                                {(selectedSub as any)?.description && (
                                    <div className="mt-6 p-4 bg-gray-50 rounded-2xl border-l-4 border-primary/40 italic text-gray-700 font-medium text-sm md:text-base">
                                        {(selectedSub as any).description}
                                    </div>
                                )}
                                {(() => {
                                    const fullGallery = (selectedSub?.gallery || []).filter(Boolean) as string[];
                                    if (fullGallery.length === 0) return null;

                                    return (
                                        <div className="mb-10">
                                            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-4 border-b pb-2">Dettagli Gallery</h4>
                                            <div className="grid grid-cols-4 gap-3">
                                                {fullGallery.map((img, i) => (
                                                    <div
                                                        key={i}
                                                        onClick={(e) => { e.stopPropagation(); openLightbox(fullGallery, i); }}
                                                        className="aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100 group cursor-pointer"
                                                    >
                                                        <img src={img} alt={`${selectedSub.title} gallery ${i + 1}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>

                            <div className="flex flex-col gap-3">
                                <Button
                                    asChild
                                    className="w-full py-7 bg-primary hover:bg-primary/90 text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]"
                                >
                                    <a href="/#contact" onClick={() => setSelectedSub(null)}>
                                        Richiedi una consulenza
                                    </a>
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={() => setSelectedSub(null)}
                                    className="w-full text-gray-400 hover:text-black font-bold uppercase tracking-widest text-[10px] transition-all"
                                >
                                    Chiudi finestra
                                </Button>
                            </div>
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

            {/* APEriWedding Gallery Lightbox */}
            <Dialog open={galleryIndex !== null} onOpenChange={(open) => !open && setGalleryIndex(null)}>
                <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 bg-black/95 border-none outline-none shadow-none flex flex-col justify-center items-center overflow-hidden">
                    <button 
                        onClick={() => setGalleryIndex(null)}
                        className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative w-full h-[80vh] flex items-center justify-center p-4">
                        <motion.img
                            key={galleryIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            src={galleryIndex !== null ? lightboxImages[galleryIndex] : ""}
                            alt="Gallery detail"
                            className="max-w-full max-h-full object-contain shadow-2xl"
                        />

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white border border-white/20 backdrop-blur-md"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white border border-white/20 backdrop-blur-md"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/50 text-white text-xs font-bold tracking-[0.2em] rounded-full backdrop-blur-md border border-white/10 italic">
                            {(galleryIndex || 0) + 1} / {lightboxImages.length}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
