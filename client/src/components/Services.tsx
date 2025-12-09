import { motion } from "framer-motion";
import { 
  Music, 
  Mic2, 
  PartyPopper, 
  Palette, 
  Lightbulb, 
  Wine, 
  Users, 
  Speaker,
  Sparkles,
  HeartHandshake
} from "lucide-react";

const services = [
  { icon: HeartHandshake, title: "Wedding Planning", desc: "Full-service coordination for your perfect day." },
  { icon: Sparkles, title: "Venue Styling", desc: "Elegant floral arrangements and atmospheric decor." },
  { icon: Music, title: "DJ Sets", desc: "Professional DJs curating the perfect playlist." },
  { icon: Mic2, title: "Live Music", desc: "Bands, soloists, and orchestras for live entertainment." },
  { icon: Speaker, title: "Audio & Lighting", desc: "State-of-the-art sound systems and light shows." },
  { icon: Palette, title: "Invitations", desc: "Custom stationery and digital invites." },
  { icon: PartyPopper, title: "18th Birthday", desc: "Exclusive parties for your milestone celebration." },
  { icon: Lightbulb, title: "Special Effects", desc: "Cold sparks, dry ice fog, and confetti cannons." },
  { icon: Users, title: "Corporate Events", desc: "Professional setups for conferences and galas." },
  { icon: Wine, title: "Gadgets & Favors", desc: "Personalized gifts for your guests." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-bold block mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Exclusive <span className="text-primary italic">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gold Glow Effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <service.icon className="w-10 h-10 text-primary mb-6 stroke-[1.5px]" />
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-primary text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span>Learn More</span>
                <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
