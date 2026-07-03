import { useState } from 'react';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { Language, CartItem } from '../types';
import { DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Header({
  currentLang,
  setLang,
  cart,
  setIsCartOpen,
  scrollToSection,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const d = DICTIONARY[currentLang];

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { id: 'collections', label: d.navCollections },
    { id: 'customizer', label: 'STUDIO' },
    { id: 'inspiration', label: d.navAbout },
    { id: 'contact', label: d.navContact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-futura-cream/95 backdrop-blur-md border-b-2 border-futura-black/10 py-4 px-6 md:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logotype */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="cursor-pointer group flex flex-col"
          id="nav-logo"
        >
          <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tighter text-futura-black transition-colors group-hover:text-futura-red">
            FUTURA
          </span>
          <span className="font-mono text-[9px] tracking-widest text-futura-red font-bold">
            POLSKI DESIGN
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative font-sans text-sm font-semibold text-futura-black tracking-wider hover:text-futura-red py-1 transition-colors group"
              id={`nav-item-${item.id}`}
            >
              {item.label}
              {/* Constructivist Underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-futura-red transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Actions (Language, Cart, Mobile Menu Toggle) */}
        <div className="flex items-center space-x-4 md:space-x-6">
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-1 border-r border-futura-black/20 pr-4" id="lang-switcher">
            <button
              onClick={() => setLang('PL')}
              className={`font-sans text-xs font-bold px-1.5 py-0.5 transition-all ${
                currentLang === 'PL'
                  ? 'bg-futura-red text-futura-cream font-extrabold'
                  : 'text-futura-black/50 hover:text-futura-black'
              }`}
            >
              PL
            </button>
            <span className="text-futura-black/30 text-xs">/</span>
            <button
              onClick={() => setLang('EN')}
              className={`font-sans text-xs font-bold px-1.5 py-0.5 transition-all ${
                currentLang === 'EN'
                  ? 'bg-futura-red text-futura-cream font-extrabold'
                  : 'text-futura-black/50 hover:text-futura-black'
              }`}
            >
              EN
            </button>
          </div>

          {/* Cart Icon / Action */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-futura-black text-futura-cream hover:bg-futura-red transition-colors duration-300 shadow-md flex items-center justify-center cursor-pointer rounded-none group"
            id="header-cart-btn"
          >
            <ShoppingCart className="w-4 h-4 transition-transform group-hover:scale-110" />
            
            {/* Cart Badge */}
            <AnimatePresence>
              {totalCartItems > 0 && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-2 -right-2 bg-futura-red text-futura-cream text-[10px] font-mono font-bold w-5 h-5 flex items-center justify-center border-2 border-futura-cream shadow"
                >
                  {totalCartItems}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-futura-black hover:text-futura-red transition-colors focus:outline-none"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-futura-cream border-t border-futura-black/10 mt-3"
          >
            <div className="py-4 flex flex-col space-y-4 px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => scrollToSection(item.id), 200);
                  }}
                  className="text-left font-sans text-base font-bold text-futura-black hover:text-futura-red py-2 border-b border-futura-black/5"
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
