import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif font-bold text-white tracking-widest mb-2">ON THE ROCKS</h3>
          <p className="text-white/40 text-xs uppercase tracking-wider">Events & Wedding</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
            <Linkedin size={18} />
          </a>
        </div>

        <div className="text-white/30 text-xs">
          © {new Date().getFullYear()} On The Rocks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
