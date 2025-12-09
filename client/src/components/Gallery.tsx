import { motion } from "framer-motion";
import img1 from "@assets/stock_images/luxury_wedding_recep_6cc6dc4b.jpg";
import img2 from "@assets/stock_images/concert_dj_party_eve_a38b2e78.jpg";
import img3 from "@assets/stock_images/elegant_table_settin_cbb789d5.jpg";
import img4 from "@assets/stock_images/wedding_couple_artis_6d6ae9f6.jpg";
import img5 from "@assets/stock_images/live_music_band_conc_c0d35b46.jpg";

// Duplicate images to create a fuller gallery grid for demo
const images = [img1, img2, img3, img4, img5, img1, img3, img2];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-bold block mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Momenti <span className="text-primary italic">Catturati</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 2 ? "md:row-span-2" : ""}`}
            >
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white text-2xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
