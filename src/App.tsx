import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Inspiration from './components/Inspiration';
import PersonalizationStudio from './components/PersonalizationStudio';
import Footer from './components/Footer';
import ProductDrawer from './components/ProductDrawer';
import CartDrawer from './components/CartDrawer';

import { PRODUCTS } from './data';
import { Language, CartItem, Product, ColorOption } from './types';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('PL');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDrawerOpen, setIsProductDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on init
  useEffect(() => {
    const savedCart = localStorage.getItem('futura_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        console.error('Failed to parse saved cart:', err);
      }
    }
  }, []);

  // Save cart to localStorage on changes
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('futura_cart', JSON.stringify(newCart));
  };

  const handleAddToCart = (product: Product, quantity: number, selectedColor: ColorOption) => {
    const itemId = `${product.id}-${selectedColor.value}`;
    const existingIndex = cart.findIndex((item) => item.id === itemId);

    if (existingIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      saveCart(updatedCart);
    } else {
      const newItem: CartItem = {
        id: itemId,
        product,
        quantity,
        selectedColor,
      };
      saveCart([...cart, newItem]);
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCart(updatedCart);
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    saveCart(updatedCart);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDrawerOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // The first product in our list is the hero chair "FUTURA ONE"
  const heroProduct = PRODUCTS[0];
  const collectionProducts = PRODUCTS.slice(1);

  return (
    <div className="min-h-screen bg-futura-cream font-sans text-futura-black select-none antialiased flex flex-col relative">
      
      {/* Navigation Header */}
      <Header
        currentLang={currentLang}
        setLang={setCurrentLang}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        scrollToSection={scrollToSection}
      />

      {/* Main Content Layout */}
      <main className="flex-1 flex flex-col">
        {/* Hero Banner Section */}
        <Hero
          currentLang={currentLang}
          heroProduct={heroProduct}
          scrollToSection={scrollToSection}
          onOpenProduct={handleOpenProduct}
        />

        {/* Collections Catalog Section */}
        <Collections
          currentLang={currentLang}
          products={collectionProducts}
          onOpenProduct={handleOpenProduct}
        />

        {/* Customizer Bespoke Personalization Studio */}
        <PersonalizationStudio
          currentLang={currentLang}
          onAddToCart={handleAddToCart}
          products={PRODUCTS}
        />

        {/* Artistic Heritage Inspiration Section */}
        <Inspiration
          currentLang={currentLang}
        />
      </main>

      {/* Footer contacts & details */}
      <Footer
        currentLang={currentLang}
        scrollToSection={scrollToSection}
      />

      {/* Interactive Overlay Drawer Panels */}
      <AnimatePresence>
        {isProductDrawerOpen && (
          <ProductDrawer
            product={selectedProduct}
            isOpen={isProductDrawerOpen}
            onClose={() => setIsProductDrawerOpen(false)}
            onAddToCart={handleAddToCart}
            currentLang={currentLang}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer
            cart={cart}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            currentLang={currentLang}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
