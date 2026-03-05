import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Elena & Marco",
    role: "Matrimonio",
    text: "Il team di On The Rocks ha reso il nostro matrimonio assolutamente magico. Le luci, la musica, l'atmosfera: tutto era perfetto.",
  },
  {
    name: "Giulia Bianchi",
    role: "18esimo Compleanno",
    text: "La festa più bella di sempre! Il DJ set è stato incredibile e gli effetti speciali hanno lasciato tutti a bocca aperta. Altamente consigliato!",
  },
  {
    name: "TechCorp Inc.",
    role: "Evento Aziendale",
    text: "Professionali, affidabili e incredibilmente creativi. Hanno trasformato il nostro gala annuale in un'esperienza di alto livello.",
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
            Dicono di Noi
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            L'amore dei <span className="text-primary italic">Clienti</span>
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
