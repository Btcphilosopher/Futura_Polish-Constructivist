import { useState } from 'react';
import { Sliders, Check, ShoppingBag, RotateCcw, AlertTriangle, Hammer } from 'lucide-react';
import { Language, Product, CartItem, ColorOption } from '../types';
import { DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface PersonalizationStudioProps {
  currentLang: Language;
  onAddToCart: (product: Product, quantity: number, selectedColor: ColorOption) => void;
  products: Product[];
}

interface FrameOption {
  id: string;
  namePL: string;
  nameEN: string;
  color: string;
  materialPL: string;
  materialEN: string;
  priceDiffPLN: number;
  priceDiffEUR: number;
}

interface CushionOption {
  id: string;
  namePL: string;
  nameEN: string;
  color: string;
  textilePL: string;
  textileEN: string;
}

export default function PersonalizationStudio({
  currentLang,
  onAddToCart,
  products,
}: PersonalizationStudioProps) {
  // We customize the first product (FUTURA JEDNA)
  const baseProduct = products[0];

  const d = DICTIONARY[currentLang];

  // Options for customizer
  const frameOptions: FrameOption[] = [
    { id: 'black-ash', namePL: 'Matowy Czarny Jesion', nameEN: 'Matte Obsidian Ash', color: '#111111', materialPL: 'Lity jesion, czarna lazura matowa', materialEN: 'Solid ash, charcoal matte stain', priceDiffPLN: 0, priceDiffEUR: 0 },
    { id: 'red-lacquer', namePL: 'Karminowy Lakier', nameEN: 'Carmine Red Lacquer', color: '#a71c1c', materialPL: 'Lity jesion, lakier poliuretanowy połysk', materialEN: 'Solid ash, high-gloss carmine lacquer', priceDiffPLN: 450, priceDiffEUR: 100 },
    { id: 'natural-oak', namePL: 'Dąb Naturalny', nameEN: 'Natural White Oak', color: '#d97706', materialPL: 'Lity dąb, matowy olej ekologiczny', materialEN: 'Solid oak, organic transparent oil-wax', priceDiffPLN: 600, priceDiffEUR: 140 }
  ];

  const cushionOptions: CushionOption[] = [
    { id: 'blue-wool', namePL: 'Głęboki Granat (Wełna Czesana)', nameEN: 'Deep Navy (Combed Wool)', color: '#1e3a8a', textilePL: '92% wełna dziewicza, czesana z surowca', textileEN: '92% virgin combing wool, certified grade' },
    { id: 'crimson-canvas', namePL: 'Krwisty Cynober (Grube Płótno)', nameEN: 'Crimson Cinnabar (Bold Canvas)', color: '#a71c1c', textilePL: '100% bawełna o splocie żaglowym', textileEN: '100% military-grade structural cotton sail-canvas' },
    { id: 'charcoal-felt', namePL: 'Grafitowy Filc (Wełna Owcza)', nameEN: 'Graphite Charcoal (Felt Wool)', color: '#374151', textilePL: 'Naturalny filc prasowany na gorąco', textileEN: '100% compressed thermal sheep felt' }
  ];

  const [selectedFrame, setSelectedFrame] = useState<FrameOption>(frameOptions[0]);
  const [selectedCushion, setSelectedCushion] = useState<CushionOption>(cushionOptions[0]);
  const [isAdded, setIsAdded] = useState(false);

  // Calculate final custom price
  const basePricePLN = baseProduct.pricePLN;
  const basePriceEUR = baseProduct.priceEUR;

  const finalPricePLN = basePricePLN + selectedFrame.priceDiffPLN;
  const finalPriceEUR = basePriceEUR + selectedFrame.priceDiffEUR;

  const handleReset = () => {
    setSelectedFrame(frameOptions[0]);
    setSelectedCushion(cushionOptions[0]);
    setIsAdded(false);
  };

  const handleAddToCart = () => {
    // Generate a custom product entry derived from baseProduct with customized configuration
    const customizedProduct: Product = {
      ...baseProduct,
      id: `${baseProduct.id}-custom-${selectedFrame.id}-${selectedCushion.id}`,
      titlePL: `${baseProduct.titlePL} (STUDIO)`,
      titleEN: `${baseProduct.titleEN} (BESPOKE)`,
      pricePLN: finalPricePLN,
      priceEUR: finalPriceEUR,
      materialsPL: [selectedFrame.materialPL, selectedCushion.textilePL],
      materialsEN: [selectedFrame.materialEN, selectedCushion.textileEN]
    };

    const customColor: ColorOption = {
      namePL: `${selectedFrame.namePL} / ${selectedCushion.namePL}`,
      nameEN: `${selectedFrame.nameEN} / ${selectedCushion.nameEN}`,
      value: selectedCushion.color
    };

    onAddToCart(customizedProduct, 1, customColor);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2500);
  };

  return (
    <section 
      id="customizer" 
      className="bg-[#efece4] border-b-4 border-futura-black py-16 md:py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5 constructivist-grid"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Module Title Header */}
        <div className="flex flex-col items-start text-left mb-12 border-b-2 border-futura-black pb-6" id="customizer-header-section">
          <div className="flex items-center space-x-2">
            <Sliders className="w-5 h-5 text-futura-red" />
            <span className="font-mono text-xs font-bold text-futura-red tracking-widest uppercase">
              STUDIO PERSONALIZACJI // BESPOKE MANUFACTURE
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3.5xl font-extrabold text-futura-black uppercase tracking-tighter mt-1">
            {d.customizerTitle}
          </h2>
          <p className="font-sans text-xs md:text-sm font-semibold text-futura-black/60 uppercase tracking-wide mt-1">
            {d.customizerSubtitle}
          </p>
        </div>

        {/* Customizer Layout Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block (Lg Col 7): The Interactive Vector Blueprint Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[360px] md:min-h-[460px] bg-white border-2 border-futura-black p-6 shadow-xl overflow-hidden">
            
            {/* Constructivist background blueprint metrics */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-futura-black/30 text-left select-none pointer-events-none">
              DRAWING_REF_FT_001A // SCALE: 1:10<br />
              TENSION_LOAD: 1500 N / AXIS_A<br />
              DRAFT_STATE: AP_PROVED
            </div>

            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-futura-black/30 text-right select-none pointer-events-none">
              FORM_FACTOR: CONSTRUCTIVIST<br />
              © FUTURA ATELIER, WARSAW
            </div>

            {/* Crossed structural grids */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-futura-black/10 pointer-events-none"></div>
            <div className="absolute left-1/2 top-0 h-full w-[1px] border-l border-dashed border-futura-black/10 pointer-events-none"></div>

            {/* REACTIVE HIGH-PERFORMANCE CHAIR SVG BLUEPRINT */}
            <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square flex items-center justify-center select-none" id="blueprint-canvas">
              
              {/* Dynamic SVG Drawing of the Constructivist Lounge Chair */}
              <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                
                {/* Spotlight background ring */}
                <circle cx="200" cy="200" r="160" fill="none" stroke="#a71c1c" strokeWidth="1" strokeDasharray="4 8" opacity="0.3" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#111111" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />

                {/* Diagonal measurement leader lines */}
                <line x1="40" y1="360" x2="360" y2="40" stroke="#a71c1c" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
                <text x="320" y="70" fontFamily="monospace" fontSize="8" fill="#a71c1c" opacity="0.7">X_VECTOR</text>

                {/* CHAIR STRUCTURAL ELEMENTS DRAWING (Interactive vector fields!) */}

                {/* 1. Wood Back Leg Framework */}
                <path 
                  d="M120 320 L160 140 L180 140 L135 320 Z" 
                  fill={selectedFrame.color} 
                  stroke="#111111" 
                  strokeWidth="1.5" 
                  className="transition-colors duration-500" 
                />

                {/* 2. Main Angled Front Support Strut (Tension Frame) */}
                <path 
                  d="M110 320 L310 240 L300 220 L125 295 Z" 
                  fill={selectedFrame.color} 
                  stroke="#111111" 
                  strokeWidth="1.5" 
                  className="transition-colors duration-500" 
                />

                {/* 3. Red Fabric Sling Backrest (Cushion Layer) */}
                <path 
                  d="M175 130 L285 290 L275 305 L165 145 Z" 
                  fill={selectedCushion.color} 
                  stroke="#111111" 
                  strokeWidth="1.5" 
                  className="transition-colors duration-500" 
                />

                {/* 4. Triangular Armrest Connectors (Constructivist Sharp Angles) */}
                <path 
                  d="M230 210 L300 130 L315 140 L250 230 Z" 
                  fill={selectedFrame.color} 
                  stroke="#111111" 
                  strokeWidth="1.5" 
                  className="transition-colors duration-500" 
                />
                
                {/* Armrest top plate horizontal */}
                <path 
                  d="M170 180 L305 130 L315 145 L180 195 Z" 
                  fill={selectedFrame.color} 
                  stroke="#111111" 
                  strokeWidth="1.5" 
                  className="transition-colors duration-500" 
                />

                {/* 5. Deep Navy Seat Pad (Upholstery Layer) */}
                <path 
                  d="M140 280 L250 235 L260 255 L150 300 Z" 
                  fill={selectedCushion.color} 
                  stroke="#111111" 
                  strokeWidth="1.5" 
                  className="transition-colors duration-500" 
                />

                {/* Technical Node Overlay Points (Shows constructivist blueprint detailing!) */}
                <circle cx="160" cy="140" r="4" fill="#a71c1c" />
                <circle cx="230" cy="210" r="4" fill="#a71c1c" />
                <circle cx="300" cy="130" r="4" fill="#a71c1c" />
                <circle cx="145" cy="290" r="4" fill="#a71c1c" />
                <circle cx="255" cy="245" r="4" fill="#a71c1c" />

                {/* Dimensions labels vectors */}
                <line x1="120" y1="340" x2="310" y2="340" stroke="#111111" strokeWidth="0.8" />
                <line x1="120" y1="335" x2="120" y2="345" stroke="#111111" strokeWidth="1" />
                <line x1="310" y1="335" x2="310" y2="345" stroke="#111111" strokeWidth="1" />
                <text x="215" y="355" fontFamily="monospace" fontSize="9" fill="#111111" textAnchor="middle" fontWeight="bold">84 CM</text>

                <line x1="340" y1="130" x2="340" y2="320" stroke="#111111" strokeWidth="0.8" />
                <line x1="335" y1="130" x2="345" y2="130" stroke="#111111" strokeWidth="1" />
                <line x1="335" y1="320" x2="345" y2="320" stroke="#111111" strokeWidth="1" />
                <text x="360" y="230" fontFamily="monospace" fontSize="9" fill="#111111" textAnchor="middle" fontWeight="bold" className="rotate-90 origin-center">95 CM</text>

              </svg>
              
            </div>

            {/* Personalization status warning tag */}
            <div className="mt-4 flex items-center space-x-2 border border-futura-black/15 bg-futura-cream/40 px-3 py-1.5 self-start">
              <Hammer className="w-3.5 h-3.5 text-futura-red" />
              <span className="font-mono text-[9px] text-futura-black font-bold uppercase tracking-wider">
                {currentLang === 'PL' ? 'MANUFAKTURA: WYKONANIE RĘCZNE NA ZAMÓWIENIE' : 'PRODUCTION: BESPOKE CRAFTED TO ORDER'}
              </span>
            </div>

          </div>

          {/* Right Block (Lg Col 5): Customization Control Center panel */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-8" id="customizer-controls-panel">
            
            {/* FRAME CONFIG SECTION */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-futura-black/50 font-bold uppercase tracking-widest block">
                [ STEP 01 ] // {d.customizerFrame}
              </span>
              <div className="space-y-2">
                {frameOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedFrame(opt)}
                    className={`w-full flex items-center justify-between border-2 p-3 transition-all duration-300 rounded-none text-left ${
                      selectedFrame.id === opt.id
                        ? 'border-futura-red bg-white shadow'
                        : 'border-futura-black/10 hover:border-futura-black'
                    }`}
                    id={`opt-frame-${opt.id}`}
                  >
                    <div className="flex items-center space-x-3">
                      {/* Swatch circle */}
                      <span 
                        className="w-5 h-5 border border-futura-black/20 block" 
                        style={{ backgroundColor: opt.color }}
                      />
                      <div>
                        <h4 className="font-sans text-xs font-bold text-futura-black uppercase tracking-wide">
                          {currentLang === 'PL' ? opt.namePL : opt.nameEN}
                        </h4>
                        <p className="font-mono text-[9px] text-futura-black/40 uppercase">
                          {currentLang === 'PL' ? opt.materialPL : opt.materialEN}
                        </p>
                      </div>
                    </div>
                    {/* Tick and price markup */}
                    <div className="flex items-center space-x-2">
                      {opt.priceDiffPLN > 0 && (
                        <span className="font-mono text-[10px] text-futura-red font-bold">
                          {currentLang === 'PL' ? `+${opt.priceDiffPLN} PLN` : `+€${opt.priceDiffEUR}`}
                        </span>
                      )}
                      {selectedFrame.id === opt.id && (
                        <Check className="w-4 h-4 text-futura-red" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CUSHION / TEXTILE CONFIG SECTION */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-futura-black/50 font-bold uppercase tracking-widest block">
                [ STEP 02 ] // {d.customizerFabric}
              </span>
              <div className="space-y-2">
                {cushionOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedCushion(opt)}
                    className={`w-full flex items-center justify-between border-2 p-3 transition-all duration-300 rounded-none text-left ${
                      selectedCushion.id === opt.id
                        ? 'border-futura-red bg-white shadow'
                        : 'border-futura-black/10 hover:border-futura-black'
                    }`}
                    id={`opt-cushion-${opt.id}`}
                  >
                    <div className="flex items-center space-x-3">
                      {/* Swatch circle */}
                      <span 
                        className="w-5 h-5 border border-futura-black/20 block" 
                        style={{ backgroundColor: opt.color }}
                      />
                      <div>
                        <h4 className="font-sans text-xs font-bold text-futura-black uppercase tracking-wide">
                          {currentLang === 'PL' ? opt.namePL : opt.nameEN}
                        </h4>
                        <p className="font-mono text-[9px] text-futura-black/40 uppercase">
                          {currentLang === 'PL' ? opt.textilePL : opt.textileEN}
                        </p>
                      </div>
                    </div>
                    {selectedCushion.id === opt.id && (
                      <Check className="w-4 h-4 text-futura-red" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* CUSTOMIZER SUMMARY BANNER */}
            <div className="border-2 border-futura-black p-4 bg-white shadow-md flex justify-between items-center text-left">
              <div>
                <span className="font-mono text-[10px] text-futura-black/50 font-bold uppercase tracking-widest block">
                  {currentLang === 'PL' ? 'ŁĄCZNA CENA' : 'TOTAL PRICE'}
                </span>
                <span className="font-display text-2xl font-black text-futura-red leading-tight">
                  {currentLang === 'PL' ? `${finalPricePLN} PLN` : `€${finalPriceEUR}`}
                </span>
              </div>
              <button
                onClick={handleReset}
                className="p-2 border border-futura-black/20 hover:border-futura-red hover:text-futura-red transition-all cursor-pointer"
                title={d.customizerReset}
                id="reset-customizer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Action CTAs */}
            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full py-4 font-display font-bold text-sm uppercase tracking-wider shadow flex items-center justify-center space-x-2 rounded-none transition-all duration-300 ${
                isAdded
                  ? 'bg-green-700 text-white cursor-default'
                  : 'bg-futura-black text-futura-cream hover:bg-futura-red'
              }`}
              id="add-custom-to-cart-btn"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isAdded ? d.addedToCart : (currentLang === 'PL' ? 'ZAMÓW WYKREOWANY MODEL' : 'ORDER BESPOKE CREATION')}</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
