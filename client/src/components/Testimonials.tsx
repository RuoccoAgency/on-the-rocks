import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Elena & Marco",
    role: "Wedding",
    text: "The team at On The Rocks made our wedding absolutely magical. The lighting, the music, the atmosphere—everything was perfect.",
  },
  {
    name: "Giulia Bianchi",
    role: "18th Birthday",
    text: "Best party ever! The DJ set was incredible and the special effects blew everyone away. Highly recommended!",
  },
  {
    name: "TechCorp Inc.",
    role: "Corporate Event",
    text: "Professional, reliable, and incredibly creative. They transformed our annual gala into a high-end experience.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-bold block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Client <span className="text-primary italic">Love</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-black/40 p-10 border border-white/5 relative"
            >
              <Quote className="text-primary/20 w-12 h-12 mb-6 absolute top-6 right-6" />
              <p className="text-white/80 text-lg leading-relaxed mb-8 italic font-serif">
                "{t.text}"
              </p>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">{t.name}</h4>
                <span className="text-primary text-xs uppercase tracking-widest">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
