import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@assets/stock_images/wedding_couple_artis_6d6ae9f6.jpg";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen to your vision and understand your unique style and requirements."
  },
  {
    number: "02",
    title: "Planning",
    description: "Our team crafts a bespoke concept, selecting the perfect entertainment and details."
  },
  {
    number: "03",
    title: "Execution",
    description: "We manage every detail on the day, ensuring a flawless and magical experience."
  }
];

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
                alt="About On The Rocks" 
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
              Who We Are
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white mb-8"
            >
              Crafting <span className="text-primary italic">Timeless</span> Memories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-12"
            >
              On The Rocks Events & Wedding brings a fresh, dynamic approach to event planning. 
              Specializing in luxury weddings, exclusive parties, and corporate events, we combine 
              meticulous organization with creative flair. From high-energy DJ sets to elegant 
              orchestral arrangements, we set the perfect tone for your celebration.
            </motion.p>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex gap-6 group"
                >
                  <span className="text-4xl font-serif text-white/10 group-hover:text-primary transition-colors duration-500">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl text-white font-serif mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
