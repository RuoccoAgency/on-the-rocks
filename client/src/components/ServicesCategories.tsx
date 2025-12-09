import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HeartHandshake, 
  Music, 
  Mic2, 
  Baby, 
  PartyPopper, 
  ChevronDown 
} from "lucide-react";

// Data Structure
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
      { name: "Official management eventi", desc: "" } // Added missing item
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
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold block mb-4">
            Esperienze Curate
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
            Servizi <span className="text-primary italic">Esclusivi</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              layout
              className={`
                group relative bg-[#080808] border rounded-sm overflow-hidden transition-all duration-500
                ${expandedId === service.id ? 'border-primary/40 bg-[#0c0c0c]' : 'border-white/5 hover:border-primary/20'}
              `}
            >
              {/* Card Header (Clickable) */}
              <button
                onClick={() => toggleExpand(service.id)}
                className="w-full p-8 md:p-10 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-6 md:gap-8">
                  {/* Icon Container */}
                  <div className={`
                    w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border transition-all duration-500
                    ${expandedId === service.id 
                      ? 'border-primary bg-primary text-black' 
                      : 'border-white/10 bg-white/5 text-primary group-hover:border-primary/50 group-hover:text-primary'}
                  `}>
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5px]" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className={`
                      text-xl md:text-2xl font-serif transition-colors duration-300 mb-2
                      ${expandedId === service.id ? 'text-primary' : 'text-white group-hover:text-primary'}
                    `}>
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-sm md:text-base font-light tracking-wide">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Chevron */}
                <div className={`
                  w-10 h-10 flex items-center justify-center rounded-full border border-white/5 transition-all duration-500
                  ${expandedId === service.id ? 'rotate-180 bg-white/10 text-primary' : 'text-white/30 group-hover:text-primary'}
                `}>
                  <ChevronDown className="w-5 h-5" />
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
                  >
                    <div className="px-8 pb-10 md:px-32 md:pb-12 pt-0">
                      <div className="h-[1px] w-full bg-white/5 mb-8" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        {service.subcategories.map((sub, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 group/item"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                            <div>
                              <h4 className="text-white text-lg font-medium group-hover/item:text-primary transition-colors duration-300">
                                {sub.name}
                              </h4>
                              {sub.desc && (
                                <p className="text-white/30 text-xs uppercase tracking-wider mt-1">
                                  {sub.desc}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Gold Glow Overlay on Hover */}
              <div className={`
                absolute inset-0 pointer-events-none transition-opacity duration-700
                ${expandedId === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
              `}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-20" />
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
