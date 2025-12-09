import { Instagram, Facebook, Disc } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                 <Disc className="w-6 h-6 animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-widest">ON THE ROCKS</h3>
            </div>
            <p className="text-white/50 text-sm max-w-xs mx-auto md:mx-0">
              Creiamo esperienze uniche e indimenticabili per i tuoi momenti più importanti.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm uppercase tracking-widest font-medium text-white/70">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">Chi Siamo</a>
            <a href="#services" className="hover:text-primary transition-colors">Servizi</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contatti</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-xs">
          © {new Date().getFullYear()} On The Rocks Events & Wedding. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
