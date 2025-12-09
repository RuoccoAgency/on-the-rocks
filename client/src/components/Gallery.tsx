import { motion } from "framer-motion";
import img1 from "@assets/stock_images/luxury_wedding_recep_6cc6dc4b.jpg";
import img2 from "@assets/stock_images/concert_dj_party_eve_a38b2e78.jpg";
import img3 from "@assets/stock_images/elegant_table_settin_cbb789d5.jpg";
import img4 from "@assets/stock_images/wedding_couple_artis_6d6ae9f6.jpg";
import img5 from "@assets/stock_images/live_music_band_conc_c0d35b46.jpg";
import { ZoomIn } from "lucide-react";

// Gallery Items with captions
const galleryItems = [
  { img: img1, title: "Wedding Setup", category: "Matrimoni" },
  { img: img2, title: "DJ Set & Party", category: "Eventi Musicali" },
  { img: img3, title: "Dettagli Eleganti", category: "Allestimenti" },
  { img: img4, title: "Momenti Speciali", category: "Cerimonie" },
  { img: img5, title: "Live Concert", category: "Concerti" },
  { img: img1, title: "Luxury Decor", category: "Design" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-bold block mb-4">
            Il Nostro Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black">
            Esperienze & <span className="text-primary font-script">Eventi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-white/80 text-xs uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
