import { useState, useEffect } from 'react';
import { X, Check, Plus, Minus, Info, Ruler, Sparkles } from 'lucide-react';
import { Product, Language, ColorOption } from '../types';
import { DICTIONARY } from '../data';
import { motion } from 'motion/react';

interface ProductDrawerProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedColor: ColorOption) => void;
  currentLang: Language;
}

export default function ProductDrawer({
  product,
  isOpen,
  onClose,
  onAddToCart,
  currentLang,
}: ProductDrawerProps) {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const d = DICTIONARY[currentLang];

  // Sync color selection when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setQuantity(1);
      setIsAdded(false);
    }
  }, [product]);

  if (!product || !isOpen) return null;

  const handleAdd = () => {
    if (selectedColor) {
      onAddToCart(product, quantity, selectedColor);
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }
  };

  const title = currentLang === 'PL' ? product.titlePL : product.titleEN;
  const category = currentLang === 'PL' ? product.categoryPL : product.categoryEN;
  const description = currentLang === 'PL' ? product.descriptionPL : product.descriptionEN;
  const details = currentLang === 'PL' ? product.detailsPL : product.detailsEN;
  const priceLabelText = currentLang === 'PL' ? `${product.pricePLN} PLN` : `€${product.priceEUR}`;
  const materials = currentLang === 'PL' ? product.materialsPL : product.materialsEN;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end" id="product-drawer-overlay">
      {/* Black Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-futura-black cursor-crosshair"
      />

      {/* Drawer Body Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-xl bg-futura-cream border-l-4 border-futura-black h-full shadow-2xl flex flex-col z-10"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b-2 border-futura-black p-6 bg-[#efece4]">
          <div className="text-left">
            <span className="font-mono text-[9px] tracking-widest text-futura-red font-bold uppercase block mb-1">
              {category}
            </span>
            <h2 className="font-display text-2xl font-black text-futura-black uppercase tracking-tight">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 border-2 border-futura-black hover:bg-futura-red hover:text-futura-cream transition-colors duration-300"
            id="close-drawer-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 text-left">
          
          {/* Main Product Display Card */}
          <div className="relative border-2 border-futura-black bg-white p-4 shadow-md overflow-hidden group">
            {/* Color preview overlay for feedback */}
            {selectedColor && (
              <div 
                className="absolute inset-0 opacity-5 mix-blend-multiply transition-colors duration-500 pointer-events-none"
                style={{ backgroundColor: selectedColor.value }}
              />
            )}
            <div className="bg-neutral-100 p-2 flex items-center justify-center aspect-video max-h-[220px] overflow-hidden">
              <img
                src={product.image}
                alt={title}
                className="max-h-full max-w-full object-contain filter drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Geometric Slash */}
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-futura-red transform rotate-45 translate-y-6 translate-x-6"></div>
          </div>

          {/* Description Block */}
          <div className="space-y-2">
            <h4 className="font-display text-sm font-extrabold text-futura-black uppercase tracking-wider border-b border-futura-black/15 pb-1">
              O PROJEKCIE / ABOUT THE DESIGN
            </h4>
            <p className="font-sans text-sm font-medium text-futura-black/80 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Color Option Selector */}
          {selectedColor && (
            <div className="space-y-3 bg-[#efece4] p-4 border border-futura-black/20">
              <div className="flex justify-between items-center">
                <span className="font-display text-xs font-bold text-futura-black uppercase tracking-wider">
                  {d.colorLabel}
                </span>
                <span className="font-mono text-[10px] text-futura-red font-bold uppercase">
                  {currentLang === 'PL' ? selectedColor.namePL : selectedColor.nameEN}
                </span>
              </div>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-8 h-8 rounded-none border-2 transition-all duration-300 ${
                      selectedColor.value === color.value
                        ? 'border-futura-red scale-110 shadow-md ring-2 ring-futura-red/30'
                        : 'border-futura-black/40 hover:border-futura-black'
                    }`}
                    style={{ backgroundColor: color.value === '#efece4' ? '#e5e5e5' : color.value }}
                    id={`color-opt-${index}`}
                  >
                    {selectedColor.value === color.value && (
                      <Check className="absolute inset-0 m-auto w-4 h-4 text-white font-bold mix-blend-difference" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Dimensions */}
            <div className="border border-futura-black/15 p-4 bg-white/40 space-y-2">
              <div className="flex items-center space-x-2 text-futura-black/55 font-mono text-[10px] font-bold uppercase tracking-wider">
                <Ruler className="w-3.5 h-3.5" />
                <span>{d.dimensionsLabel}</span>
              </div>
              <p className="font-sans text-sm font-bold text-futura-black uppercase">
                {product.dimensions}
              </p>
            </div>

            {/* Materials */}
            <div className="border border-futura-black/15 p-4 bg-white/40 space-y-2">
              <div className="flex items-center space-x-2 text-futura-black/55 font-mono text-[10px] font-bold uppercase tracking-wider">
                <Info className="w-3.5 h-3.5" />
                <span>{d.materialsLabel}</span>
              </div>
              <p className="font-sans text-xs font-semibold text-futura-black/90 uppercase tracking-wide leading-tight">
                {materials.join(', ')}
              </p>
            </div>

          </div>

          {/* Handcrafting Details Bullets */}
          <div className="space-y-2.5">
            <h4 className="font-display text-sm font-extrabold text-futura-black uppercase tracking-wider border-b border-futura-black/15 pb-1">
              SPECYFIKACJA TECHNICZNA / CRAFT SPECS
            </h4>
            <ul className="space-y-2 font-sans text-xs font-semibold text-futura-black/80">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-futura-red font-bold font-mono">/ {index + 1}</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Checkout Actions */}
        <div className="border-t-2 border-futura-black p-6 bg-[#efece4] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Price Tag */}
          <div className="flex flex-col items-start text-left">
            <span className="font-mono text-[9px] text-futura-black/50 uppercase tracking-widest font-bold">
              {d.priceLabel}
            </span>
            <span className="font-display text-2xl font-black text-futura-red">
              {priceLabelText}
            </span>
          </div>

          {/* Quantity Controls & Add Button */}
          <div className="flex items-center space-x-3 flex-1 md:flex-none justify-end">
            
            {/* Quantity Selector */}
            <div className="flex items-center border-2 border-futura-black bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-futura-red hover:text-futura-cream transition-colors cursor-pointer"
                id="qty-minus"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-4 font-mono font-bold text-sm text-futura-black">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-futura-red hover:text-futura-cream transition-colors cursor-pointer"
                id="qty-plus"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`flex-1 md:flex-none px-6 py-3.5 font-display font-bold text-sm tracking-wide shadow flex items-center justify-center space-x-2 rounded-none transition-all duration-300 ${
                isAdded
                  ? 'bg-green-700 text-white cursor-default'
                  : 'bg-futura-red text-futura-cream hover:bg-futura-black hover:scale-102 active:scale-98'
              }`}
              id="add-to-cart-drawer-btn"
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 animate-ping" />
                  <span>{d.addedToCart}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{d.addToCart}</span>
                </>
              )}
            </button>

          </div>

        </div>

      </motion.div>
    </div>
  );
}
