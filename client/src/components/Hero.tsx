import { motion } from "framer-motion";
import heroBg from "@assets/stock_images/concert_dj_party_eve_a38b2e78.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-80"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-primary text-3xl md:text-5xl font-script mb-4 transform -rotate-2">
            Emozioni & Spettacolo
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight font-bold tracking-tight">
            CREIAMO <span className="text-primary">ESPERIENZE</span> <br />
            INDIMENTICABILI
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light mb-10 leading-relaxed">
            Gestione completa di eventi, spettacoli musicali, matrimoni e celebrazioni esclusive. La tua visione, la nostra regia.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(217,10,108,0.4)]"
            >
              Prenota una consulenza
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-all"
            >
              Scopri i nostri servizi
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
        <span className="text-white/70 text-[10px] uppercase tracking-widest">Scorri</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
