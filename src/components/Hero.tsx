import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Language, Product } from '../types';
import { DICTIONARY } from '../data';

interface HeroProps {
  currentLang: Language;
  heroProduct: Product;
  scrollToSection: (id: string) => void;
  onOpenProduct: (product: Product) => void;
}

export default function Hero({
  currentLang,
  heroProduct,
  scrollToSection,
  onOpenProduct,
}: HeroProps) {
  const d = DICTIONARY[currentLang];

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-76px)] bg-futura-cream overflow-hidden px-6 md:px-12 py-12 md:py-20 flex items-center border-b-4 border-futura-black"
    >
      {/* Background Constructivist Diagonals & Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 constructivist-grid"></div>
      
      {/* Heavy Diagonal Slash Accent 1 (Top Left to Bottom Right) */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[150%] bg-gradient-to-br from-futura-red/10 to-transparent transform -skew-x-[30deg] pointer-events-none"></div>
      
      {/* Dark Bold Accent Shape from image (Lower left diagonal cut) */}
      <div className="absolute bottom-0 left-[-5%] w-[35%] h-[30%] bg-futura-black transform -skew-y-12 origin-bottom-left hidden md:block pointer-events-none"></div>

      {/* Red Accent Block (Lower right) */}
      <div className="absolute bottom-0 right-0 w-[20%] h-[15%] bg-futura-red transform skew-y-12 origin-bottom-right hidden md:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Bold Constructivist Typography & Text */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col mb-1"
          >
            <span className="font-mono text-xs tracking-widest text-futura-red font-bold uppercase mb-2">
              {d.brandSub}
            </span>
          </motion.div>

          {/* Main Massive Constructivist Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-futura-black flex flex-col mb-6"
          >
            <span>{d.heroTitleRow1}</span>
            <span className="text-futura-black">{d.heroTitleRow2}</span>
            <span className="text-futura-red">{d.heroTitleRow3}</span>
          </motion.h1>

          {/* Heavy Black Horizontal Line Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-[6px] bg-futura-black mb-8"
          ></motion.div>

          {/* Core Brand Manifesto / Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-sm md:text-base font-semibold text-futura-black/80 max-w-md leading-relaxed tracking-wide uppercase mb-10"
          >
            {d.heroDesc}
          </motion.p>

          {/* Dynamic Parallelogram Skewed Button (See collections) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* The primary skewed red button */}
            <button
              onClick={() => scrollToSection('collections')}
              className="relative group overflow-hidden cursor-pointer w-full sm:w-auto px-8 py-4 bg-futura-red text-futura-cream font-display font-bold tracking-wider text-sm transition-transform hover:-translate-y-1 active:translate-y-0"
              id="hero-cta-btn"
            >
              {/* Skew Background container */}
              <div className="absolute inset-0 bg-futura-black transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
              
              <div className="relative z-10 flex items-center justify-center space-x-2">
                <span>{d.heroBtn}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            </button>

            {/* Customizer Studio Fast-Link */}
            <button
              onClick={() => scrollToSection('customizer')}
              className="relative group border-2 border-futura-black font-sans font-bold tracking-wider text-sm px-6 py-4 text-futura-black bg-transparent hover:bg-futura-black hover:text-futura-cream transition-colors duration-300 flex items-center justify-center"
              id="hero-secondary-btn"
            >
              <span>STUDIO DESIGNU</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Interactive Constructivist Furniture Stage */}
        <div className="lg:col-span-6 flex justify-center items-center relative min-h-[450px] md:min-h-[550px] w-full">
          
          {/* Constructivist Geometric Circle and Crossed Lines Background */}
          <div className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] rounded-full bg-[#e7dfcb] border border-futura-black/10 flex items-center justify-center z-0">
            {/* Rotating structural accent */}
            <div className="absolute w-[110%] h-[1px] bg-futura-black/40 rotate-[35deg]"></div>
            <div className="absolute w-[110%] h-[1px] bg-futura-black/40 -rotate-[55deg]"></div>
            {/* Spotlight ring */}
            <div className="w-[85%] h-[85%] rounded-full border-2 border-dashed border-futura-red/20"></div>
          </div>

          {/* Heavy black constructivist backdrop slash */}
          <div className="absolute w-[50px] h-[120%] bg-futura-black transform rotate-[40deg] z-0 opacity-90 hidden sm:block"></div>
          {/* Crimson accent slash */}
          <div className="absolute w-[15px] h-[100%] bg-futura-red transform -rotate-[25deg] z-0 opacity-80 left-[20%] hidden sm:block"></div>

          {/* MAIN HERO CHAIR VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 60, delay: 0.3 }}
            className="relative z-10 bg-transparent group cursor-pointer max-w-[360px] md:max-w-[420px]"
            onClick={() => onOpenProduct(heroProduct)}
            id="hero-product-card"
          >
            <div className="relative border-4 border-futura-black bg-futura-cream shadow-2xl p-4 overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(167,28,28,0.25)] group-hover:border-futura-red">
              
              {/* Product Category and Label Tag */}
              <div className="absolute top-2 left-2 z-20 bg-futura-red text-futura-cream px-2 py-0.5 text-[9px] font-mono tracking-widest font-bold">
                01 // {heroProduct.categoryPL.toUpperCase()}
              </div>

              {/* The high-quality image */}
              <div className="bg-[#edeae0] overflow-hidden flex items-center justify-center">
                <img
                  src={heroProduct.image}
                  alt={heroProduct.titlePL}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Footer Info */}
              <div className="mt-4 flex justify-between items-end border-t border-futura-black/10 pt-3">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-futura-black group-hover:text-futura-red transition-colors">
                    {currentLang === 'PL' ? heroProduct.titlePL : heroProduct.titleEN}
                  </h3>
                  <p className="font-mono text-[10px] text-futura-black/50">
                    {heroProduct.dimensions}
                  </p>
                </div>
                <div className="bg-futura-black text-futura-cream px-3 py-1 text-xs font-mono font-bold">
                  {currentLang === 'PL' ? `${heroProduct.pricePLN} PLN` : `€${heroProduct.priceEUR}`}
                </div>
              </div>
            </div>

            {/* Quick customization badge */}
            <div className="absolute -bottom-3 -right-3 bg-futura-red text-futura-cream p-2 font-mono text-[9px] font-bold tracking-widest uppercase shadow border border-futura-cream z-20 animate-pulse">
              {currentLang === 'PL' ? 'KLIKNIJ ABY SPRAWDZIĆ' : 'CLICK TO CUSTOMIZE'}
            </div>
          </motion.div>

          {/* Right Edge Vertical Branding Text (matches image margin text) */}
          <div className="absolute right-[-15px] lg:right-[-40px] top-1/2 transform -translate-y-1/2 flex-col items-center space-y-6 hidden md:flex z-10 select-none">
            {/* The vertical text line */}
            <span className="font-mono text-[9px] tracking-[0.4em] text-futura-black/60 uppercase whitespace-nowrap rotate-90 origin-center my-12">
              {currentLang === 'PL' ? 'FORMA PODĄŻA ZA FUNKCJĄ' : 'FORM FOLLOWS FUNCTION'}
            </span>

            {/* Page Bullets */}
            <div className="flex flex-col space-y-2 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-futura-red border border-futura-red"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-futura-cream border border-futura-black/40"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-futura-cream border border-futura-black/40"></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
