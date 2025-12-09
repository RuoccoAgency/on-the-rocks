import { Instagram, Facebook } from "lucide-react";
import logoImg from "@assets/download_1765308097320.png";

export default function Footer() {
  return (
    <footer className="bg-primary py-16 text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
              <div className="h-10 w-auto flex items-center justify-center">
                 <img 
                   src={logoImg} 
                   alt="On The Rocks Logo" 
                   className="h-10 w-auto object-contain brightness-0 invert"
                 />
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-widest text-white">ON THE ROCKS</h3>
            </div>
            <p className="text-white/80 text-sm max-w-xs mx-auto md:mx-0">
              Creiamo esperienze uniche e indimenticabili per i tuoi momenti più importanti.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm uppercase tracking-widest font-medium text-white/80">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">Chi Siamo</a>
            <a href="#services" className="hover:text-white transition-colors">Servizi</a>
            <a href="#contact" className="hover:text-white transition-colors">Contatti</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-xs">
          © {new Date().getFullYear()} On The Rocks Events & Wedding. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
