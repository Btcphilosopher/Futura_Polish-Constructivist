import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Language, Product } from '../types';
import { DICTIONARY } from '../data';

interface CollectionsProps {
  currentLang: Language;
  products: Product[];
  onOpenProduct: (product: Product) => void;
}

export default function Collections({ currentLang, products, onOpenProduct }: CollectionsProps) {
  const d = DICTIONARY[currentLang];

  return (
    <section 
      id="collections" 
      className="bg-[#efece4] border-b-4 border-futura-black py-16 md:py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Absolute Decorative Accent Lines */}
      <div className="absolute top-0 right-[25%] w-[1px] h-full bg-futura-black/10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-futura-black/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title Header matching the screenshot */}
        <div className="flex items-center space-x-3 mb-12 md:mb-16 border-b-2 border-futura-black pb-4" id="collections-title-wrapper">
          <h2 className="font-display text-2xl md:text-3.5xl font-extrabold tracking-tighter text-futura-black uppercase">
            {d.collectionsTitle}
          </h2>
          <div className="w-16 h-[3px] bg-futura-red transform -skew-x-[20deg]"></div>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {products.map((p, idx) => {
            const numLabel = `0${idx + 2}`; // 02, 03, 04, 05
            
            // Design distinct background geometry colors/shapes for each card based on index
            // to replicate the avant-garde collage style of the provided image
            const bgSlashes = [
              // Card 1: Solid Red Triangle / Poly
              <div key="s1" className="absolute bottom-0 left-0 w-[80%] h-[70%] bg-futura-red transform skew-x-[-15deg] origin-bottom-left transition-all duration-500 group-hover:bg-futura-black group-hover:scale-105 pointer-events-none"></div>,
              // Card 2: Black angled backplate
              <div key="s2" className="absolute top-[10%] right-0 w-[70%] h-[80%] bg-futura-black transform -skew-y-12 origin-top-right transition-all duration-500 group-hover:bg-futura-red group-hover:scale-105 pointer-events-none"></div>,
              // Card 3: Vertical thick red banner
              <div key="s3" className="absolute top-0 left-[20%] w-[50%] h-full bg-futura-red transition-all duration-500 group-hover:bg-futura-black group-hover:w-[60%] pointer-events-none"></div>,
              // Card 4: Double diagonal fine line cuts
              <div key="s4" className="absolute inset-0 transition-all duration-500 pointer-events-none">
                <div className="absolute bottom-0 right-[15%] w-[45%] h-[85%] bg-futura-black transform -skew-x-[25deg] transition-all duration-500 group-hover:bg-futura-red"></div>
                <div className="absolute top-[20%] left-[10%] w-[10px] h-[70%] bg-futura-red transform rotate-12"></div>
              </div>
            ];

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group cursor-pointer flex flex-col"
                onClick={() => onOpenProduct(p)}
                id={`collection-card-${p.id}`}
              >
                {/* Image Stage Card */}
                <div className="relative aspect-square border-2 border-futura-black bg-futura-cream p-4 overflow-hidden flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                  
                  {/* Avant-garde Collage Geometric Accents */}
                  {bgSlashes[idx % bgSlashes.length]}

                  {/* Serial Number */}
                  <span className="absolute top-2 left-2 z-20 font-mono text-xs font-bold text-futura-black/30 group-hover:text-futura-cream/40">
                    {numLabel} //
                  </span>

                  {/* Product Image - Sitting on top of the geometry */}
                  <div className="relative z-10 w-[85%] h-[85%] flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.titlePL}
                      className="max-w-full max-h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Hover visual scan effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-futura-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>

                {/* Card Labels (Polish / English titles) */}
                <div className="mt-4 flex flex-col items-start text-left pl-1">
                  <h3 className="font-display font-black text-lg md:text-xl text-futura-black uppercase tracking-tight group-hover:text-futura-red transition-colors">
                    {currentLang === 'PL' ? p.titlePL : p.titleEN}
                  </h3>
                  
                  <div className="flex items-center space-x-1.5 mt-1 text-futura-black/60 group-hover:text-futura-red transition-colors font-sans text-xs font-bold uppercase tracking-wider">
                    <span>— {d.seeCollection}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
