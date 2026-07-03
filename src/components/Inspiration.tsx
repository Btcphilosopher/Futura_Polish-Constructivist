import { motion } from 'motion/react';
import { Info, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';

interface InspirationProps {
  currentLang: Language;
}

export default function Inspiration({ currentLang }: InspirationProps) {
  const d = DICTIONARY[currentLang];

  return (
    <section 
      id="inspiration" 
      className="bg-futura-cream border-b-4 border-futura-black py-20 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Avant-garde Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 constructivist-grid"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heavy Typographic Statements */}
        <div className="lg:col-span-5 text-left flex flex-col items-start" id="inspiration-text-panel">
          
          <span className="font-mono text-xs font-bold text-futura-red tracking-widest uppercase mb-4">
            MANIFESTO // 1920 - 2026
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-futura-black uppercase tracking-tighter mb-4">
            {d.inspirationTitle}
            <span className="block text-futura-red">{d.inspirationSub}</span>
          </h2>

          <div className="h-[4px] w-24 bg-futura-black mb-8"></div>

          <div className="space-y-6 text-sm md:text-base font-semibold text-futura-black/80 uppercase tracking-wide">
            <p className="leading-relaxed">
              {d.inspirationDesc1}
            </p>
            <p className="text-futura-red border-l-4 border-futura-red pl-4 font-bold">
              {d.inspirationDesc2}
            </p>
          </div>

          {/* Constructivist Design Detail boxes */}
          <div className="mt-10 grid grid-cols-2 gap-4 w-full">
            <div className="border border-futura-black/20 p-4 bg-futura-cream/50 relative overflow-hidden group hover:border-futura-red transition-colors">
              <span className="font-mono text-xl font-bold text-futura-red block mb-1">98%</span>
              <span className="font-sans text-[10px] font-bold text-futura-black/60 uppercase tracking-wider block">
                {currentLang === 'PL' ? 'Lokalne Surowce' : 'Local Materials'}
              </span>
            </div>
            <div className="border border-futura-black/20 p-4 bg-futura-cream/50 relative overflow-hidden group hover:border-futura-red transition-colors">
              <span className="font-mono text-xl font-bold text-futura-red block mb-1">100%</span>
              <span className="font-sans text-[10px] font-bold text-futura-black/60 uppercase tracking-wider block">
                {currentLang === 'PL' ? 'Polskie Rzemiosło' : 'Polish Manufacture'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High-contrast Architecture Display with Diagonal Splits */}
        <div className="lg:col-span-7 relative w-full flex justify-center items-center min-h-[380px] md:min-h-[480px]">
          
          {/* Heavy black constructivist diagonal layout shape */}
          <div className="absolute top-0 right-[-10%] w-[120%] h-[120%] bg-futura-black transform -rotate-[15deg] origin-top-right z-0 pointer-events-none hidden lg:block"></div>

          {/* Large solid red circle detail from bottom right in image */}
          <div className="absolute -bottom-10 -right-10 w-[240px] h-[240px] rounded-full bg-futura-red z-10 opacity-90 mix-blend-multiply pointer-events-none"></div>

          {/* Architectural Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-full max-w-[580px] border-4 border-futura-black bg-[#edeae0] overflow-hidden group shadow-2xl"
          >
            {/* Image itself */}
            <img 
              src="/src/assets/images/futura_architecture_1783073710186.jpg" 
              alt="Polski Futuryzm Architektura" 
              className="w-full h-auto object-cover grayscale filter contrast-125 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Inner Diagonal Slash Overlay for art styling */}
            <div className="absolute inset-0 bg-gradient-to-tr from-futura-red/20 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            
            {/* Abstract Overlay Grid Lines */}
            <div className="absolute inset-0 border-2 border-dashed border-futura-cream/15 pointer-events-none m-4"></div>

            {/* Image Caption tag in Polish avant-garde layout */}
            <div className="absolute bottom-3 left-3 bg-futura-black text-futura-cream px-3 py-1 font-mono text-[9px] tracking-widest font-bold border border-futura-cream/20">
              INSPIRACJA // BRUTALIZM, KATOWICE (1968)
            </div>
          </motion.div>

          {/* Diagonal slash lines crossing */}
          <div className="absolute left-[5%] bottom-[-5%] w-[3px] h-[120%] bg-futura-red transform -rotate-[45deg] z-20 pointer-events-none hidden sm:block"></div>
          <div className="absolute left-[35%] top-[-5%] w-[1px] h-[120%] bg-futura-black transform rotate-[65deg] z-0 pointer-events-none hidden sm:block"></div>

        </div>

      </div>
    </section>
  );
}
