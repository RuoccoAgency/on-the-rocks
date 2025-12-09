import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import discIcon from "@assets/image_1765306959124.png";

import { 
  HeartHandshake, 
  Music, 
  Mic2, 
  Baby, 
  PartyPopper, 
  ChevronDown,
  ArrowRight
} from "lucide-react";
const servicesData = [
  {
    id: 1,
    title: "Organizzazione Eventi – Wedding Planner",
    icon: HeartHandshake,
    description: "Creare il tuo giorno perfetto con meticolosa attenzione ai dettagli.",
    subcategories: [
      { name: "Allestimento e valorizzazione", desc: "Venue styling & decoration" },
      { name: "Gadget personalizzati", desc: "Customized favors & gifts" },
      { name: "Servizio di consulenza", desc: "Expert event consulting" },
      { name: "Effetti speciali", desc: "Cold sparks, fog, confetti" },
      { name: "Inviti e partecipazioni", desc: "Luxury stationery & invites" },
      { name: "Tutto per il tuo matrimonio", desc: "Complete wedding packages" },
    ]
  },
  {
    id: 2,
    title: "Eventi Musicali",
    icon: Music,
    description: "Grandi eventi musicali e gestione artisti.",
    subcategories: [
      { name: "Feste di piazza", desc: "Public festivals & town events" },
      { name: "DJ management & booking", desc: "Top tier DJ talent" },
      { name: "Artisti", desc: "Performers & entertainers" },
      { name: "Organizzazione eventi musicali", desc: "Full concert production" },
      { name: "Official management eventi", desc: "Full management" }
    ]
  },
  {
    id: 3,
    title: "Intrattenimento Musicale",
    icon: Mic2,
    description: "Performance dal vivo e allestimenti audio di alta qualità.",
    subcategories: [
      { name: "DJ Set / Animazione", desc: "Party atmosphere & hosting" },
      { name: "Allestimenti per concerti", desc: "Professional audio/lighting rigs" },
      { name: "Live Music", desc: "Bands, singers, orchestras" },
    ]
  },
  {
    id: 4,
    title: "Battesimi e Comunioni",
    icon: Baby,
    description: "Celebrare i traguardi familiari con grazia e gioia.",
    subcategories: [
      { name: "Una comunione elegante", desc: "Sophisticated communion parties" },
      { name: "Il battesimo perfetto", desc: "Beautiful baptism receptions" },
    ]
  },
  {
    id: 5,
    title: "18 Anni",
    icon: PartyPopper,
    description: "La celebrazione definitiva per il passaggio all'età adulta.",
    subcategories: [
      { name: "Tutto per i tuoi 18 ANNI", desc: "Organizzazione evento completo" },
    ]
  }
];

export default function ServicesCategories() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold block mb-4">
            Cosa Facciamo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black">
            I Nostri <span className="text-primary font-script">Servizi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              layout
              className={`
                group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500
                ${expandedId === service.id ? 'ring-2 ring-primary shadow-primary/20' : ''}
              `}
            >
              {/* Card Header (Clickable) */}
              <button
                onClick={() => toggleExpand(service.id)}
                className="w-full p-8 md:p-10 flex flex-col md:flex-row items-center md:items-center text-center md:text-left gap-6 md:gap-8 relative z-10 bg-white"
              >
                {/* Icon Container */}
                <div className={`
                  w-20 h-20 flex items-center justify-center rounded-full transition-all duration-500 shrink-0
                  ${expandedId === service.id 
                    ? 'bg-primary text-white shadow-lg scale-110' 
                    : 'bg-gray-50 text-primary group-hover:bg-primary group-hover:text-white'}
                `}>
                  <service.icon className="w-10 h-10 stroke-[1.5px]" />
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className={`
                    text-2xl md:text-3xl font-serif font-bold transition-colors duration-300 mb-2
                    ${expandedId === service.id ? 'text-primary' : 'text-black group-hover:text-primary'}
                  `}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base font-light tracking-wide">
                    {service.description}
                  </p>
                </div>

                {/* Chevron */}
                <div className={`
                  w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 transition-all duration-500 shrink-0
                  ${expandedId === service.id ? 'rotate-180 bg-primary text-white border-primary' : 'text-gray-400 group-hover:text-primary group-hover:border-primary'}
                `}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="bg-[#f7f7f7] text-black"
                  >
                    <div className="px-8 pb-10 md:px-32 md:pb-12 pt-8 border-t border-primary/20">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                        {service.subcategories.map((sub, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center gap-3 group/item p-3 rounded-lg hover:bg-white transition-colors cursor-default"
                          >
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                               <ArrowRight className="w-4 h-4" />
                            </span>
                            <span className="text-black text-lg font-medium group-hover/item:text-primary transition-colors">
                              {sub.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
