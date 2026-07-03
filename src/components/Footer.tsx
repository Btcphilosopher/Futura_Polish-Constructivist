import { Language } from '../types';
import { DICTIONARY } from '../data';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  scrollToSection: (id: string) => void;
}

export default function Footer({ currentLang, scrollToSection }: FooterProps) {
  const d = DICTIONARY[currentLang];

  const infoLinks = [
    { labelPL: 'DOSTAWA', labelEN: 'LOGISTICS / DELIVERY' },
    { labelPL: 'PŁATNOŚCI', labelEN: 'SECURE PAYMENTS' },
    { labelPL: 'ZWROTY', labelEN: 'RETURN POLICIES' },
    { labelPL: 'FAQ', labelEN: 'FAQ' },
  ];

  const companyLinks = [
    { labelPL: 'O NAS', labelEN: 'ABOUT US' },
    { labelPL: 'MANUFAKTURA', labelEN: 'THE MANUFACTURE' },
    { labelPL: 'ZRÓWNOWAŻONY ROZWÓJ', labelEN: 'SUSTAINABILITY' },
    { labelPL: 'KARIERA', labelEN: 'CAREERS' },
  ];

  const socialLinks = [
    { label: 'INSTAGRAM', url: '#' },
    { label: 'FACEBOOK', url: '#' },
    { label: 'PINTEREST', url: '#' },
  ];

  return (
    <footer 
      id="contact" 
      className="bg-futura-black text-futura-cream pt-16 pb-8 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Graphic Lines */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-futura-red"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 pointer-events-none"></div>

      {/* Main Footer Links & Branding Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10 relative z-10">
        
        {/* Left Side: Brand Logotype & Tagline (Lg Col 4) */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <span className="font-display text-3xl font-extrabold tracking-tighter text-white uppercase block">
            FUTURA
          </span>
          <span className="font-mono text-[9px] tracking-widest text-futura-red font-bold uppercase block mt-1.5 mb-6">
            {d.brandTagline}
          </span>
          <p className="font-sans text-xs font-semibold text-futura-cream/50 max-w-sm uppercase tracking-wide leading-relaxed">
            {d.footerAboutDesc}
          </p>
        </div>

        {/* Lg Col 8: Four Columns of Links */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          
          {/* Informacje Column */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-widest border-b border-futura-red pb-1.5 mb-4">
              {currentLang === 'PL' ? 'INFORMACJE' : 'INFORMATION'}
            </h4>
            <ul className="space-y-2 font-sans text-xs font-bold text-futura-cream/65 uppercase tracking-wider">
              {infoLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-futura-red transition-colors duration-200">
                    {currentLang === 'PL' ? link.labelPL : link.labelEN}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* O Firmie Column */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-widest border-b border-futura-red pb-1.5 mb-4">
              {currentLang === 'PL' ? 'O FIRMIE' : 'THE COMPANY'}
            </h4>
            <ul className="space-y-2 font-sans text-xs font-bold text-futura-cream/65 uppercase tracking-wider">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-futura-red transition-colors duration-200">
                    {currentLang === 'PL' ? link.labelPL : link.labelEN}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt Column */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-widest border-b border-futura-red pb-1.5 mb-4">
              {currentLang === 'PL' ? 'KONTAKT' : 'CONTACT'}
            </h4>
            <ul className="space-y-3 font-sans text-xs font-bold text-futura-cream/65 uppercase tracking-wider">
              <li>
                <span className="font-mono text-[9px] text-white/40 block mb-0.5">{d.footerInfoline}</span>
                <a href="tel:+48123456789" className="hover:text-futura-red text-white transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li>
                <span className="font-mono text-[9px] text-white/40 block mb-0.5">Email</span>
                <a href="mailto:biuro@futura.pl" className="hover:text-futura-red text-white transition-colors">
                  BIURO@FUTURA.PL
                </a>
              </li>
              <li>
                <span className="font-mono text-[9px] text-white/40 block mb-0.5">{d.footerLocation}</span>
                <span className="text-futura-cream/90 block">
                  WARSZAWA, POLSKA
                </span>
              </li>
            </ul>
          </div>

          {/* Obserwuj Nas Column */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-widest border-b border-futura-red pb-1.5 mb-4">
              {currentLang === 'PL' ? 'OBSERWUJ NAS' : 'FOLLOW US'}
            </h4>
            <ul className="space-y-2 font-sans text-xs font-bold text-futura-cream/65 uppercase tracking-wider">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="hover:text-futura-red transition-colors duration-200 block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Bar: Copyright and Back to Top */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        
        {/* Copyright */}
        <span className="font-mono text-[10px] text-futura-cream/40 uppercase tracking-widest">
          {d.footerAllRights}
        </span>

        {/* Back to Top */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-2 border border-white/20 hover:border-futura-red hover:text-futura-red px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer"
          id="back-to-top-btn"
        >
          <span>{currentLang === 'PL' ? 'POWRÓT NA GÓRĘ' : 'BACK TO TOP'}</span>
          <ArrowUp className="w-3 h-3" />
        </button>

      </div>

      {/* Beautiful solid red/black diagonal corner detail from the bottom right of screenshot */}
      <div className="absolute bottom-0 right-0 w-32 h-20 bg-futura-red pointer-events-none transform skew-x-[-35deg] origin-bottom-right opacity-90"></div>
      <div className="absolute bottom-0 right-16 w-12 h-12 bg-white pointer-events-none transform skew-x-[-35deg] origin-bottom-right opacity-10"></div>
    </footer>
  );
}
