import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/download_1765308097320.png";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
        setActiveCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopDropdownOpen(false);
        setActiveCategory(null);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Reset states on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
    setActiveCategory(null);
  }, [location]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || (href.startsWith("#") && location !== "/")) {
      return;
    }

    const id = href.includes("#") ? href.split("#")[1] : null;
    if (!id) return;

    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Chi siamo", href: "/#about" },
    { name: "Servizi", isDropdown: true },
    { name: "Esperienze & Eventi", href: "/#gallery" },
    { name: "Contatti", href: "/#contact" },
  ];

  const toggleMobileCategory = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || desktopDropdownOpen || mobileMenuOpen
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
          <div className="flex flex-col ml-1">
            <span className={`text-lg font-serif font-bold tracking-widest leading-none ${scrolled || desktopDropdownOpen || mobileMenuOpen ? 'text-black' : 'text-white'}`}>
              ON THE ROCKS
            </span>
            <span className="text-primary text-lg font-script leading-none -mt-1 transform -rotate-2 origin-left">
              Event & Wedding
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.isDropdown ? (
                <button
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  className={`text-[13px] uppercase tracking-widest transition-colors relative group font-medium flex items-center gap-1 ${scrolled || desktopDropdownOpen ? 'text-black/80 hover:text-primary' : 'text-white/90 hover:text-primary'
                    }`}
                >
                  {link.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ${desktopDropdownOpen ? 'w-full' : 'group-hover:w-full'}`} />
                </button>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href!)}
                  className={`text-[13px] uppercase tracking-widest transition-colors relative group font-medium ${scrolled || desktopDropdownOpen ? 'text-black/80 hover:text-primary' : 'text-white/90 hover:text-primary'
                    }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              )}
            </div>
          ))}
          <a
            href="/#contact"
            onClick={(e) => scrollToSection(e, "/#contact")}
            className="px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 uppercase text-[11px] tracking-widest font-bold shadow-lg shadow-primary/30"
          >
            Richiedi un preventivo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${scrolled || mobileMenuOpen ? 'text-black' : 'text-white'} block md:hidden`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Dropdown Mega Menu (Compact Version) */}
      <AnimatePresence>
        {desktopDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden md:block absolute top-[calc(100%-8px)] left-1/2 -translate-x-[70%] w-full max-w-[580px] bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden z-[60]"
          >
            <div className="flex h-[360px]">
              {/* Main Categories (Left) */}
              <div className="w-[40%] border-r border-gray-100 py-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
                {servicesData.map((category) => (
                  <div
                    key={category.slug}
                    onMouseEnter={() => setActiveCategory(category.slug)}
                    className={`px-5 py-2.5 cursor-pointer flex justify-between items-center transition-colors ${activeCategory === category.slug ? 'bg-primary/5 text-primary border-r-2 border-primary' : 'hover:bg-gray-50'
                      }`}
                  >
                    <Link
                      href={`/servizi/${category.slug}`}
                      className="font-serif font-bold text-[13px] uppercase tracking-wide block flex-1 leading-tight"
                    >
                      {category.name}
                    </Link>
                    {category.subcategories.length > 0 && <ChevronRight size={14} className="opacity-40" />}
                  </div>
                ))}
              </div>

              {/* Subcategories (Right) */}
              <div className="w-[60%] bg-gray-50/40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
                <AnimatePresence mode="wait">
                  {activeCategory ? (
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 flex flex-col gap-1.5"
                    >
                      {servicesData.find(c => c.slug === activeCategory)?.subcategories.map((sub, idx) => {
                        if (typeof sub === 'string') {
                          return (
                            <Link
                              key={idx}
                              href={`/servizi/${activeCategory}#${sub.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              className="text-gray-600 hover:text-primary transition-colors text-[12px] py-1 border-b border-transparent hover:border-primary/10 leading-tight"
                            >
                              {sub}
                            </Link>
                          );
                        } else {
                          return (
                            <div key={idx} className="mt-2 mb-1">
                              <Link 
                                href={`/servizi/${activeCategory}#${sub.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                className="font-bold text-primary hover:text-primary/70 transition-colors uppercase tracking-widest text-[10px] mb-2 block"
                              >
                                {sub.name}
                              </Link>
                              <div className="flex flex-col gap-1.5 pl-1 border-l border-gray-200">
                                {sub.items.map((item, iIdx) => (
                                  <Link
                                    key={iIdx}
                                    href={`/servizi/${activeCategory}#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                    className="text-gray-600 hover:text-primary transition-colors text-[11.5px] leading-tight"
                                  >
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        }
                      })}
                    </motion.div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-gray-50/20">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                        <ChevronRight className="text-primary/30" />
                      </div>
                      <p className="text-gray-400 font-serif text-[13px] italic leading-relaxed">
                        Esplora l'eccellenza<br />dei nostri servizi
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu (Compact) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 70px)" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-y-auto shadow-xl fixed inset-x-0 top-[70px] z-[40]"
          >
            <div className="flex flex-col p-5 gap-1.5">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-50">
                  {link.isDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileCategory("servizi")}
                        className="flex justify-between items-center w-full py-3.5 text-black font-serif text-lg font-bold uppercase tracking-wider"
                      >
                        {link.name}
                        <ChevronDown size={18} className={`transition-transform duration-300 ${mobileExpanded === "servizi" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "servizi" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            {servicesData.map((category) => (
                              <div key={category.slug} className="mb-1">
                                <button
                                  onClick={() => toggleMobileCategory(category.slug)}
                                  className="flex justify-between items-center w-full py-2.5 text-gray-800 font-bold text-[14px]"
                                >
                                  {category.name}
                                  {category.subcategories.length > 0 && (
                                    <ChevronDown size={14} className={`transition-transform ${mobileExpanded === category.slug ? "rotate-180" : ""}`} />
                                  )}
                                </button>
                                <AnimatePresence>
                                  {(mobileExpanded === category.slug || category.subcategories.length === 0) && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden pl-3 flex flex-col gap-1.5 pb-2"
                                    >
                                      <Link href={`/servizi/${category.slug}`} className="text-primary font-bold text-[12px] uppercase py-1.5 tracking-wider">
                                        Vai alla sezione completa
                                      </Link>
                                      {category.subcategories.map((sub, sIdx) => {
                                        if (typeof sub === 'string') {
                                          return (
                                            <Link
                                              key={sIdx}
                                              href={`/servizi/${category.slug}#${sub.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                              className="text-gray-500 py-1 text-[13px] leading-tight"
                                            >
                                              {sub}
                                            </Link>
                                          );
                                        } else {
                                          return (
                                            <div key={sIdx} className="mt-1">
                                              <Link 
                                                href={`/servizi/${category.slug}#${sub.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                                className="text-[10px] font-bold uppercase text-gray-400 hover:text-primary mb-1.5 tracking-widest block"
                                              >
                                                {sub.name}
                                              </Link>
                                              <div className="flex flex-col gap-1 pl-2 border-l border-gray-100">
                                                {sub.items.map((item, iIdx) => (
                                                  <Link
                                                    key={iIdx}
                                                    href={`/servizi/${category.slug}#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                                    className="text-gray-500 py-1 text-[12.5px] leading-tight"
                                                  >
                                                    {item}
                                                  </Link>
                                                ))}
                                              </div>
                                            </div>
                                          );
                                        }
                                      })}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href!)}
                      className="block py-3.5 text-black/80 hover:text-primary text-lg font-serif font-bold uppercase tracking-wider"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="/#contact"
                onClick={(e) => scrollToSection(e, "/#contact")}
                className="mt-5 px-6 py-4 bg-primary text-white text-center rounded-full font-bold uppercase tracking-widest text-[12px] shadow-xl"
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
