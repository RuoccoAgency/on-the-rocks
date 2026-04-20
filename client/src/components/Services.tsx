import { motion } from "framer-motion";
import { Link } from "wouter";
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
  { icon: HeartHandshake, title: "Wedding Planning", desc: "Full-service coordination for your perfect day.", link: "/servizi/matrimoni" },
  { icon: Sparkles, title: "Venue Styling", desc: "Elegant floral arrangements and atmospheric decor.", link: "/servizi/matrimoni#allestimento-cerimonia" },
  { icon: Music, title: "DJ Sets", desc: "Professional DJs curating the perfect playlist.", link: "/servizi/matrimoni#dj-set---animazione" },
  { icon: Mic2, title: "Live Music", desc: "Bands, soloists, and orchestras for live entertainment.", link: "/servizi/artisti#live-show" },
  { icon: Speaker, title: "Audio & Lighting", desc: "State-of-the-art sound systems and light shows.", link: "/servizi/spettacolo" },
  { icon: Palette, title: "Invitations", desc: "Custom stationery and digital invites.", link: "/servizi/matrimoni#inviti-e-partecipazioni" },
  { icon: PartyPopper, title: "Eventi Privati", desc: "Exclusive parties for your milestone celebration.", link: "/servizi/organizzazione-eventi" },
  { icon: Lightbulb, title: "Idee Innovative", desc: "Cold sparks, dry ice fog, and olograms.", link: "/servizi/idee-innovative" },
  { icon: Users, title: "Corporate Events", desc: "Professional setups for conferences and galas.", link: "/servizi/organizzazione-eventi" },
  { icon: Wine, title: "Gadgets & Favors", desc: "Personalized gifts for your guests.", link: "/servizi/matrimoni#gadget-personalizzati" },
];

export default function Services() {
  return (
    <section id="services-overview" className="py-24 bg-[#050505]">
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
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tight">
            Exclusive <span className="text-primary font-script lowercase normal-case">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300 h-full relative overflow-hidden flex flex-col"
              >
                {/* Gold Glow Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <service.icon className="w-10 h-10 text-primary mb-6 stroke-[1.5px]" />
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-primary text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Scopri di più</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper component for Icon
import { ArrowRight } from "lucide-react";
