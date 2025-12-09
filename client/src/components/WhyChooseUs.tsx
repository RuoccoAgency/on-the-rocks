import { motion } from "framer-motion";
import { Award, Lightbulb, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Affidabilità",
    description: "Manteniamo le promesse con assoluta precisione e puntualità."
  },
  {
    icon: Lightbulb,
    title: "Creatività",
    description: "Concept innovativi che trasformano spazi ordinari in esperienze magiche."
  },
  {
    icon: Award,
    title: "Eccellenza",
    description: "Servizi di qualità premiata e attenzione ai minimi dettagli."
  },
  {
    icon: Clock,
    title: "Esperienza",
    description: "Anni di esperienza nella gestione di eventi e matrimoni di alto profilo."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group text-center p-8 rounded-sm bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500 text-primary">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
