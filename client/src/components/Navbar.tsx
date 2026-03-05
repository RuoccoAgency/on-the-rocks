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
      // Allow default Link behavior for cross-page anchors
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
          <div className="flex flex-col ml-2">
            <span className={`text-xl font-serif font-bold tracking-widest leading-none ${scrolled || desktopDropdownOpen || mobileMenuOpen ? 'text-black' : 'text-white'}`}>
              ON THE ROCKS
            </span>
            <span className="text-primary text-xl font-script leading-none -mt-1 transform -rotate-2 origin-left">
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
                  className={`text-sm uppercase tracking-widest transition-colors relative group font-medium flex items-center gap-1 ${scrolled || desktopDropdownOpen ? 'text-black/80 hover:text-primary' : 'text-white/90 hover:text-primary'
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
                  className={`text-sm uppercase tracking-widest transition-colors relative group font-medium ${scrolled || desktopDropdownOpen ? 'text-black/80 hover:text-primary' : 'text-white/90 hover:text-primary'
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
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 uppercase text-xs tracking-widest font-bold shadow-lg shadow-primary/30"
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

      {/* Desktop Dropdown Mega Menu */}
      <AnimatePresence>
        {desktopDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl"
            onMouseLeave={() => {
              // Optional: close when leaving the whole block
              // setDesktopDropdownOpen(false);
              // setActiveCategory(null);
            }}
          >
            <div className="container mx-auto flex">
              {/* Main Categories (Left) */}
              <div className="w-1/3 border-r border-gray-100 py-8">
                {servicesData.map((category) => (
                  <div
                    key={category.slug}
                    onMouseEnter={() => setActiveCategory(category.slug)}
                    className={`px-8 py-4 cursor-pointer flex justify-between items-center transition-colors ${activeCategory === category.slug ? 'bg-primary/5 text-primary border-r-2 border-primary' : 'hover:bg-gray-50'
                      }`}
                  >
                    <Link href={`/servizi/${category.slug}`} className="font-serif font-bold text-lg uppercase tracking-wider block flex-1">
                      {category.name}
                    </Link>
                    {category.subcategories.length > 0 && <ChevronRight size={18} />}
                  </div>
                ))}
              </div>

              {/* Subcategories (Right) */}
              <div className="w-2/3 p-10 bg-gray-50/50">
                <AnimatePresence mode="wait">
                  {activeCategory ? (
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-2 gap-x-12 gap-y-4"
                    >
                      {servicesData.find(c => c.slug === activeCategory)?.subcategories.map((sub, idx) => {
                        if (typeof sub === 'string') {
                          return (
                            <Link
                              key={idx}
                              href={`/servizi/${activeCategory}#${sub.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              className="text-gray-600 hover:text-primary transition-colors text-sm py-1 border-b border-transparent hover:border-primary/20"
                            >
                              {sub}
                            </Link>
                          );
                        } else {
                          return (
                            <div key={idx} className="col-span-1 mb-4">
                              <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-3 text-primary">{sub.name}</h4>
                              <div className="flex flex-col gap-2">
                                {sub.items.map((item, iIdx) => (
                                  <Link
                                    key={iIdx}
                                    href={`/servizi/${activeCategory}#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                    className="text-gray-600 hover:text-primary transition-colors text-sm"
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
                    <div className="h-full flex items-center justify-center text-gray-400 font-serif italic">
                      Seleziona una categoria per visualizzare i dettagli
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-y-auto shadow-xl fixed inset-x-0 top-[70px] z-[40]"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-50 pb-2">
                  {link.isDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileCategory("servizi")}
                        className="flex justify-between items-center w-full py-4 text-black font-serif text-xl font-bold uppercase tracking-wider"
                      >
                        {link.name}
                        <ChevronDown className={`transition-transform ${mobileExpanded === "servizi" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "servizi" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {servicesData.map((category) => (
                              <div key={category.slug} className="mb-2">
                                <button
                                  onClick={() => toggleMobileCategory(category.slug)}
                                  className="flex justify-between items-center w-full py-3 text-gray-800 font-medium"
                                >
                                  {category.name}
                                  {category.subcategories.length > 0 && (
                                    <ChevronDown size={16} className={`transition-transform ${mobileExpanded === category.slug ? "rotate-180" : ""}`} />
                                  )}
                                </button>
                                <AnimatePresence>
                                  {(mobileExpanded === category.slug || category.subcategories.length === 0) && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden pl-4 flex flex-col gap-2 pb-2"
                                    >
                                      <Link href={`/servizi/${category.slug}`} className="text-primary font-bold text-sm uppercase py-1">
                                        Vai alla pagina {category.name}
                                      </Link>
                                      {category.subcategories.map((sub, sIdx) => {
                                        if (typeof sub === 'string') {
                                          return (
                                            <Link
                                              key={sIdx}
                                              href={`/servizi/${category.slug}#${sub.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                              className="text-gray-500 py-1 text-sm"
                                            >
                                              {sub}
                                            </Link>
                                          );
                                        } else {
                                          return (
                                            <div key={sIdx} className="mt-2">
                                              <p className="text-xs font-bold uppercase text-gray-400 mb-1">{sub.name}</p>
                                              <div className="flex flex-col gap-1 pl-2">
                                                {sub.items.map((item, iIdx) => (
                                                  <Link
                                                    key={iIdx}
                                                    href={`/servizi/${category.slug}#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                                    className="text-gray-500 py-1 text-sm"
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
                      className="block py-4 text-black/80 hover:text-primary text-xl font-serif font-bold uppercase tracking-wider"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="/#contact"
                onClick={(e) => scrollToSection(e, "/#contact")}
                className="mt-6 px-6 py-4 bg-primary text-white text-center rounded-full font-bold uppercase tracking-widest text-sm shadow-xl"
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
