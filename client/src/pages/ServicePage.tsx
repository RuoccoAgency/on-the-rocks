import { useRoute } from "wouter";
import { servicesData } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ServicePage() {
    const [, params] = useRoute("/servizi/:slug");
    const service = servicesData.find((s) => s.slug === params?.slug);

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

    return (
        <div className="bg-white min-h-screen text-black overflow-x-hidden">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-40 pb-24 bg-black text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-script text-2xl mb-4 block">On The Rocks</span>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 tracking-tight uppercase">{service.name}</h1>
                        <div className="h-1 w-24 bg-primary mb-8" />
                        <p className="text-xl text-white/70 max-w-3xl font-light leading-relaxed">
                            Esplora l'eccellenza nei nostri servizi di {service.name.toLowerCase()}.
                            Ogni dettaglio è curato con la massima precisione per garantire un risultato memorabile e di altissimo livello.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Subcategories Section */}
            <section className="py-24 bg-[#fafafa]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.subcategories.map((sub, idx) => {
                            if (typeof sub === "string") {
                                return (
                                    <motion.div
                                        key={idx}
                                        id={sub.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (idx % 2) * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-10 border border-gray-200 rounded-3xl bg-white hover:border-primary/30 transition-all group shadow-sm hover:shadow-xl"
                                    >
                                        <span className="text-primary/10 text-6xl font-serif absolute right-6 top-6 transition-colors group-hover:text-primary/20">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors pr-12">{sub}</h3>
                                        <div className="w-12 h-0.5 bg-gray-200 mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                                        <p className="text-gray-500 leading-relaxed">
                                            Offriamo consulenza professionale e gestione completa per "{sub}". La nostra esperienza nel settore ci permette di trasformare ogni necessità in una soluzione di successo, curata in ogni minimo dettaglio tecnico e creativo.
                                        </p>
                                    </motion.div>
                                );
                            } else {
                                return (
                                    <div key={idx} className="col-span-full mt-12">
                                        <div className="flex items-center gap-4 mb-12">
                                            <div className="h-px flex-1 bg-gray-200" />
                                            <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-wider px-4">{sub.name}</h2>
                                            <div className="h-px flex-1 bg-gray-200" />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {sub.items.map((item, iIdx) => (
                                                <motion.div
                                                    key={iIdx}
                                                    id={item.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: (iIdx % 3) * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all text-center group cursor-default"
                                                >
                                                    <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{item}</h4>
                                                    <p className="text-sm text-gray-400 uppercase tracking-widest">{sub.name}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Vuoi saperne di più su {service.name}?</h2>
                    <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                        Il nostro team è a tua disposizione per una consulenza personalizzata e gratuita.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-block px-12 py-4 bg-white text-primary font-bold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-all shadow-xl"
                    >
                        Contattaci Ora
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
