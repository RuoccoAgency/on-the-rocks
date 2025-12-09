import { motion } from "framer-motion";
import aboutImg from "@assets/stock_images/wedding_couple_artis_6d6ae9f6.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10">
              <img 
                src={aboutImg} 
                alt="Chi Siamo - On The Rocks" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Gold Border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/30 z-0" />
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm uppercase tracking-[0.2em] font-bold block mb-4"
            >
              Chi Siamo
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white mb-8"
            >
              On The Rocks <span className="text-primary italic">Events & Wedding</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed space-y-6 columns-1 md:columns-2 gap-8"
            >
              <p>
                Ogni evento rappresenta qualcosa di unico, fondamentale per noi è contribuire a renderlo tale! Con questo spirito, l’On The Rocks nasce nel 2012 dal desiderio di sviluppare un modo innovativo di gestione di tutto ciò che interessa i servizi per lo spettacolo.
              </p>
              <p>
                Per noi, al di là del singolo elemento, è la totalità del servizio che riesce a valorizzare al meglio ogni singolo evento. Per riuscire nel nostro intento, rivolgendoci a privati ed aziende, offriamo una vasta gamma di servizi dedicati all'intrattenimento e alla pianificazione.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
