import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { servicesData } from "@/data/services";
import { 
  HeartHandshake, 
  Music, 
  Mic2, 
  Baby, 
  PartyPopper, 
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Settings
} from "lucide-react";

// Map slugs to appropriate icons
const CATEGORY_ICONS: Record<string, any> = {
  'matrimoni': HeartHandshake,
  'organizzazione-eventi': Settings,
  'spettacolo': Zap,
  'agenzia-musicale': Music,
  'artisti': Mic2,
  'marketing': Globe,
  'idee-innovative': Sparkles
};

export default function ServicesCategories() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedId(expandedId === slug ? null : slug);
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black uppercase tracking-tight">
            I Nostri <span className="text-primary font-script lowercase normal-case">Servizi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {servicesData.map((category) => {
            const Icon = CATEGORY_ICONS[category.slug] || HeartHandshake;
            const isExpanded = expandedId === category.slug;

            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                layout
                className={`
                  group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500
                  ${isExpanded ? 'ring-2 ring-primary/20 shadow-primary/10' : ''}
                `}
              >
                {/* Card Header (Clickable) */}
                <button
                  onClick={(e) => {
                    // If clicking the button directly, toggle expand
                    toggleExpand(category.slug);
                  }}
                  className="w-full p-6 md:p-10 flex flex-col md:flex-row items-center md:items-center text-center md:text-left gap-6 md:gap-8 relative z-10 bg-white"
                >
                  {/* Icon Container */}
                  <div className={`
                    w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl transition-all duration-500 shrink-0
                    ${isExpanded 
                      ? 'bg-primary text-white shadow-lg scale-105' 
                      : 'bg-gray-50 text-primary group-hover:bg-primary/10 group-hover:scale-105'}
                  `}>
                    <Icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5px]" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h3 className={`
                      text-xl md:text-2xl font-serif font-bold transition-colors duration-300 mb-2 uppercase tracking-wide
                      ${isExpanded ? 'text-primary' : 'text-black group-hover:text-primary'}
                    `}>
                      {category.name}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Link 
                            href={`/servizi/${category.slug}`}
                            className="text-primary text-[10px] uppercase font-bold tracking-[0.2em] border-b border-primary/20 hover:border-primary transition-all"
                        >
                            Esplora Categoria
                        </Link>
                    </div>
                  </div>

                  {/* Chevron */}
                  <div className={`
                    w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 transition-all duration-500 shrink-0
                    ${isExpanded ? 'rotate-180 bg-primary text-white border-primary' : 'text-gray-400 group-hover:text-primary group-hover:border-primary'}
                  `}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="bg-[#fafafa] text-black"
                    >
                      <div className="px-8 pb-10 md:px-24 md:pb-12 pt-8 border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12">
                          {category.subcategories.map((sub, idx) => {
                            const subName = typeof sub === 'string' ? sub : sub.name;
                            const subSlug = subName.toLowerCase().replace(/[^a-z0-9]/g, '-');
                            
                            return (
                              <Link
                                key={idx}
                                href={`/servizi/${category.slug}#${subSlug}`}
                                className="flex items-center gap-3 group/item p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                              >
                                <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 transition-transform group-hover/item:scale-110">
                                   <ArrowRight className="w-4 h-4" />
                                </span>
                                <span className="text-black text-[15px] font-medium group-hover/item:text-primary transition-colors uppercase tracking-tight">
                                  {subName}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
