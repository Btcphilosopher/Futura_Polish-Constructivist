import { useState, FormEvent } from 'react';
import { X, Trash2, Mail, Phone, User, MessageSquare, Send, CheckCircle2, RotateCcw } from 'lucide-react';
import { CartItem, Language } from '../types';
import { DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface CartDrawerProps {
  cart: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  currentLang: Language;
}

export default function CartDrawer({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currentLang,
}: CartDrawerProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const d = DICTIONARY[currentLang];

  if (!isOpen) return null;

  // Calculate pricing
  const totalPLN = cart.reduce((acc, item) => acc + item.product.pricePLN * item.quantity, 0);
  const totalEUR = cart.reduce((acc, item) => acc + item.product.priceEUR * item.quantity, 0);

  const priceText = currentLang === 'PL' ? `${totalPLN} PLN` : `€${totalEUR}`;

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = d.formRequired;
    if (!formData.email.trim()) {
      tempErrors.email = d.formRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = currentLang === 'PL' ? 'Niepoprawny format email' : 'Invalid email format';
    }
    if (!formData.phone.trim()) tempErrors.phone = d.formRequired;
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate transmitting data to the Polish manufacture workshop
      setTimeout(() => {
        const randNum = Math.floor(1000 + Math.random() * 9000);
        setTicketNumber(`FT-2026-${randNum}`);
        setIsSubmitting(false);
        setIsSuccess(true);
        onClearCart();
      }, 2200);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end" id="cart-drawer-overlay">
      {/* Black Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-futura-black cursor-crosshair"
      />

      {/* Drawer Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-xl bg-futura-cream border-l-4 border-futura-black h-full shadow-2xl flex flex-col z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-futura-black p-6 bg-[#efece4]">
          <h2 className="font-display text-xl font-black text-futura-black uppercase tracking-tight flex items-center space-x-2">
            <span>{d.cartTitle}</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 border-2 border-futura-black hover:bg-futura-red hover:text-futura-cream transition-colors duration-300"
            id="close-cart-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Panel Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <AnimatePresence mode="wait">
            
            {/* SUCCESS SCREEN */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 text-center py-12 px-4"
                key="success"
              >
                <div className="flex justify-center">
                  <CheckCircle2 className="w-16 h-16 text-green-700 animate-bounce" />
                </div>
                <h3 className="font-display text-2xl font-black text-futura-black uppercase tracking-tight">
                  {d.checkoutSuccessTitle}
                </h3>
                
                {/* Custom order ticket badge */}
                <div className="bg-futura-black text-futura-cream font-mono py-2 px-4 text-xs tracking-widest font-bold inline-block border-2 border-futura-red">
                  SPEC_ID: {ticketNumber}
                </div>

                <p className="font-sans text-sm font-semibold text-futura-black/80 uppercase tracking-wide leading-relaxed">
                  {d.checkoutSuccessDesc}
                </p>

                <div className="pt-6 border-t border-futura-black/10">
                  <button
                    onClick={handleResetForm}
                    className="px-8 py-3.5 bg-futura-black text-futura-cream font-display font-bold text-sm uppercase tracking-wider hover:bg-futura-red transition-all duration-300"
                    id="success-close-btn"
                  >
                    {d.formClose}
                  </button>
                </div>
              </motion.div>
            ) : isSubmitting ? (
              /* SUBMITTING / TRANSMITTING SCREEN */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 space-y-6"
                key="loading"
              >
                <div className="relative w-16 h-16">
                  {/* Polish constructivist avant-garde loading spinner */}
                  <div className="absolute inset-0 border-4 border-dashed border-futura-red rounded-full animate-spin"></div>
                  <div className="absolute inset-2 bg-futura-black transform rotate-45 animate-pulse"></div>
                </div>
                <p className="font-mono text-xs text-futura-red font-bold uppercase tracking-widest animate-pulse text-center">
                  {d.formSubmitting}
                </p>
              </motion.div>
            ) : cart.length === 0 ? (
              /* EMPTY CART SCREEN */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 space-y-4"
                key="empty"
              >
                <p className="font-sans text-sm font-semibold text-futura-black/60 uppercase tracking-wide">
                  {d.cartEmpty}
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 border-2 border-futura-black hover:bg-futura-red hover:text-futura-cream font-sans font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  {currentLang === 'PL' ? 'WRÓĆ DO KATALOGU' : 'BACK TO CATALOGUE'}
                </button>
              </motion.div>
            ) : (
              /* STANDARD CART & INQUIRY LIST */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
                key="cart-items-form"
              >
                {/* List of Cart Items */}
                <div className="space-y-4">
                  {cart.map((item) => {
                    const itemTitle = currentLang === 'PL' ? item.product.titlePL : item.product.titleEN;
                    const itemPrice = currentLang === 'PL' ? `${item.product.pricePLN * item.quantity} PLN` : `€${item.product.priceEUR * item.quantity}`;
                    const colorName = currentLang === 'PL' ? item.selectedColor.namePL : item.selectedColor.nameEN;

                    return (
                      <div
                        key={item.id}
                        className="flex border-2 border-futura-black bg-white p-3 relative group"
                        id={`cart-item-${item.id}`}
                      >
                        {/* Thumbnail */}
                        <div className="w-20 h-20 bg-neutral-100 flex items-center justify-center p-1 border-r border-futura-black/15">
                          <img
                            src={item.product.image}
                            alt={itemTitle}
                            className="max-h-full max-w-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Mid Section Info */}
                        <div className="flex-1 px-4 flex flex-col justify-between items-start text-left">
                          <div>
                            <h4 className="font-display font-extrabold text-sm text-futura-black uppercase leading-tight">
                              {itemTitle}
                            </h4>
                            <p className="font-mono text-[9px] text-futura-red uppercase font-bold mt-0.5">
                              {colorName}
                            </p>
                          </div>

                          {/* Quantities adjusters */}
                          <div className="flex items-center border border-futura-black bg-neutral-50 scale-90 origin-left">
                            <button
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-1.5 py-0.5 hover:bg-futura-red hover:text-white transition-colors"
                            >
                              -
                            </button>
                            <span className="px-3 font-mono text-xs font-bold text-futura-black">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="px-1.5 py-0.5 hover:bg-futura-red hover:text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Right Section Action / Cost */}
                        <div className="flex flex-col justify-between items-end pr-1">
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-futura-black/40 hover:text-futura-red p-1 transition-colors"
                            id={`remove-item-${item.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <span className="font-mono text-xs font-bold text-futura-black">
                            {itemPrice}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtotal summary banner */}
                <div className="border-2 border-futura-black p-4 bg-[#efece4] flex justify-between items-center text-left">
                  <div>
                    <span className="font-display text-xs font-black text-futura-black uppercase block tracking-wider">
                      {d.cartTotal}
                    </span>
                    <span className="font-mono text-[9px] text-futura-black/50 block">
                      {currentLang === 'PL' ? 'Ustalona wycena przed transportem' : 'Estimated pricing prior to logistics'}
                    </span>
                  </div>
                  <span className="font-display text-xl font-black text-futura-red">
                    {priceText}
                  </span>
                </div>

                {/* Heavy line spacer */}
                <div className="h-[2px] bg-futura-black/20 my-2"></div>

                {/* Inquiries checkout form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <h3 className="font-display text-xs font-black text-futura-black uppercase tracking-widest border-b border-futura-black/15 pb-1 mb-2">
                    {currentLang === 'PL' ? 'DANE KONTAKTOWE ZAMÓWIENIA' : 'ORDER DETAILS & CONTACT'}
                  </h3>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-futura-black font-bold uppercase block">
                      {d.formName} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-futura-black/40" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-white border border-futura-black/20 focus:border-futura-red focus:outline-none pl-10 pr-4 py-2.5 font-sans text-xs uppercase font-semibold text-futura-black rounded-none transition-colors ${
                          errors.name ? 'border-futura-red' : ''
                        }`}
                        placeholder="JAN KOWALSKI"
                      />
                    </div>
                    {errors.name && <span className="text-futura-red text-[10px] font-mono font-bold uppercase">{errors.name}</span>}
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Email field */}
                    <div className="space-y-1">
                      <label className="font-mono text-[10px] text-futura-black font-bold uppercase block">
                        {d.formEmail} *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-futura-black/40" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full bg-white border border-futura-black/20 focus:border-futura-red focus:outline-none pl-10 pr-4 py-2.5 font-sans text-xs uppercase font-semibold text-futura-black rounded-none transition-colors ${
                            errors.email ? 'border-futura-red' : ''
                          }`}
                          placeholder="EX@DOMAIN.COM"
                        />
                      </div>
                      {errors.email && <span className="text-futura-red text-[10px] font-mono font-bold uppercase">{errors.email}</span>}
                    </div>

                    {/* Phone field */}
                    <div className="space-y-1">
                      <label className="font-mono text-[10px] text-futura-black font-bold uppercase block">
                        {d.formPhone} *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-futura-black/40" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full bg-white border border-futura-black/20 focus:border-futura-red focus:outline-none pl-10 pr-4 py-2.5 font-sans text-xs uppercase font-semibold text-futura-black rounded-none transition-colors ${
                            errors.phone ? 'border-futura-red' : ''
                          }`}
                          placeholder="+48 123 456 789"
                        />
                      </div>
                      {errors.phone && <span className="text-futura-red text-[10px] font-mono font-bold uppercase">{errors.phone}</span>}
                    </div>

                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-futura-black font-bold uppercase block">
                      {d.formMessage}
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-futura-black/40" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-white border border-futura-black/20 focus:border-futura-red focus:outline-none pl-10 pr-4 py-2.5 font-sans text-xs uppercase font-semibold text-futura-black rounded-none transition-colors resize-none"
                        placeholder="NPRZ. INDYWIDUALNE WYMIARY LUB SPECYFICZNY KOLOR LAKIERU..."
                      />
                    </div>
                  </div>

                  {/* Submit checkout CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-futura-red text-futura-cream font-display font-bold text-sm uppercase tracking-wider shadow flex items-center justify-center space-x-2 rounded-none hover:bg-futura-black transition-colors duration-300"
                    id="submit-inquiry-btn"
                  >
                    <Send className="w-4 h-4" />
                    <span>{d.checkoutBtn}</span>
                  </button>

                </form>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
}
