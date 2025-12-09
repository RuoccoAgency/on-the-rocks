import { motion } from "framer-motion";
import heroBg from "@assets/stock_images/concert_dj_party_eve_a38b2e78.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with parallax-like static fixed position or absolute cover */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-primary text-sm md:text-base uppercase tracking-[0.4em] mb-4 font-bold">
            Vivi lo Straordinario
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 leading-tight">
            On The Rocks <br />
            <span className="italic text-white/90">Events & Wedding</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light mb-10 leading-relaxed">
            Creiamo momenti indimenticabili con intrattenimento esclusivo, stile su misura ed esecuzione impeccabile.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Prenota una consulenza
            </motion.a>
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Guarda la nostra collezione
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
