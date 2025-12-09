import { motion } from "framer-motion";
import aboutImg from "@assets/stock_images/wedding_couple_artis_6d6ae9f6.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-16 h-1 bg-primary mb-6"
            />
            
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-black/60 text-sm uppercase tracking-[0.2em] font-bold block mb-2"
            >
              La Nostra Storia
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight"
            >
              Chi <span className="text-primary font-script text-6xl ml-2">Siamo</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed space-y-6"
            >
              <h3 className="font-serif text-xl italic text-black">Da On The Rocks Events & Wedding</h3>
              <p>
                "Ogni evento rappresenta qualcosa di unico, fondamentale per noi è contribuire a renderlo tale! Con questo spirito, l’On The Rocks nasce nel 2012 dal desiderio di sviluppare un modo innovativo di gestione di tutto ciò che interessa i servizi per lo spettacolo.
              </p>
              <p>
                Per noi, al di là del singolo elemento, è la totalità del servizio che riesce a valorizzare al meglio ogni singolo evento. Per riuscire nel nostro intento, rivolgendoci a privati ed aziende, offriamo una vasta gamma di servizi dedicati all'intrattenimento e alla pianificazione."
              </p>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl relative z-10 shadow-2xl">
              <img 
                src={aboutImg} 
                alt="Chi Siamo - On The Rocks" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-gray-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
