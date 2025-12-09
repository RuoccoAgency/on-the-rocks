import { Instagram, Facebook } from "lucide-react";
import discIcon from "@assets/image_1765306959124.png";

export default function Footer() {
  return (
    <footer className="bg-white py-16 text-black border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
              <div className="h-8 w-auto flex items-center justify-center">
                 <img src={discIcon} alt="On The Rocks Events & Wedding" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-widest text-black">ON THE ROCKS</h3>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
              Creiamo esperienze uniche e indimenticabili per i tuoi momenti più importanti.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm uppercase tracking-widest font-medium text-gray-500">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">Chi Siamo</a>
            <a href="#services" className="hover:text-primary transition-colors">Servizi</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contatti</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} On The Rocks Events & Wedding. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
