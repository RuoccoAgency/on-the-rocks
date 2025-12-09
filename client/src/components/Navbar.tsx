import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/download_1765308097320.png";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Chi siamo", href: "#about" },
    { name: "Servizi", href: "#services" },
    { name: "Esperienze & Eventi", href: "#gallery" },
    { name: "Contatti", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white shadow-lg py-3 text-black" 
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="flex items-center justify-center transition-opacity hover:opacity-80">
             <img 
               src={logoImg} 
               alt="On The Rocks Logo"
               className="h-10 w-auto object-contain"
             />
           </div>
           {/* Text aligned to the right of the logo */}
           <div className="flex flex-col ml-2">
             <span className={`text-xl font-serif font-bold tracking-widest leading-none ${scrolled ? 'text-black' : 'text-white'}`}>
               ON THE ROCKS
             </span>
             <span className="text-primary text-xl font-script leading-none -mt-1 transform -rotate-2 origin-left">
               Event & Wedding
             </span>
           </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm uppercase tracking-widest transition-colors relative group font-medium ${
                scrolled ? 'text-black/80 hover:text-primary' : 'text-white/90 hover:text-primary'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 uppercase text-xs tracking-widest font-bold shadow-lg shadow-primary/30"
          >
            Richiedi un preventivo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${scrolled ? 'text-black' : 'text-white'} block md:hidden`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-black/80 hover:text-primary text-lg font-serif"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="mt-4 px-6 py-3 bg-primary text-white text-center rounded-full font-bold uppercase tracking-widest text-xs"
              >
                Richiedi un preventivo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
