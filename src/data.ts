import { Product, Dictionary } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'hero-chair',
    titlePL: 'FUTURA JEDNA',
    titleEN: 'FUTURA ONE',
    categoryPL: 'Fotel Awangardowy',
    categoryEN: 'Avant-garde Armchair',
    descriptionPL: 'Ikoniczny fotel wypoczynkowy inspirowany polskim konstruktywizmem lat 20. XX wieku. Dynamiczna, skrajnie geometryczna forma z litego drewna jesionowego lakierowanego na czarny mat, połączona z wyrazistym, krwistoczerwonym płótnem oparcia.',
    descriptionEN: 'An iconic lounge chair inspired by Polish constructivism of the 1920s. A dynamic, strictly geometric form made of solid ash wood lacquered in matte black, paired with a striking, blood-red canvas backrest.',
    detailsPL: [
      'Konstrukcja oparta na złotym podziale i diagonalnych liniach napięcia.',
      'Siedzisko z luksusowej wełny czesanej w kolorze głębokiego granatu.',
      'Oparcie wykonane z potrójnie wzmacnianego płótna żeglarskiego.',
      'Ręcznie montowane i numerowane w limitowanej edycji.'
    ],
    detailsEN: [
      'Structure built upon the golden ratio and diagonal tension lines.',
      'Seat upholstered in premium combed wool of deep navy-blue hue.',
      'Backrest crafted from triple-reinforced high-durability marine canvas.',
      'Hand-assembled and individually numbered in a strictly limited edition.'
    ],
    priceEUR: 1450,
    pricePLN: 6200,
    image: '/src/assets/images/futura_hero_chair_1783073691802.jpg',
    dimensions: '84 x 72 x 95 cm',
    materialsPL: ['Drewno Jesionowe', 'Wełna Czesana', 'Płótno Bawełniane', 'Stal Malowana'],
    materialsEN: ['Solid Ash Wood', 'Combed Wool', 'Cotton Canvas', 'Powder-coated Steel'],
    colors: [
      { namePL: 'Krwista Czerwień / Granat', nameEN: 'Crimson Red / Navy', value: '#a71c1c' },
      { namePL: 'Pełna Czerń', nameEN: 'Solid Obsidian', value: '#111111' },
      { namePL: 'Naturalny Jesion / Kobalt', nameEN: 'Natural Ash / Cobalt', value: '#2563eb' }
    ]
  },
  {
    id: 'konstrukcja',
    titlePL: 'KONSTRUKCJA',
    titleEN: 'CONSTRUCTION',
    categoryPL: 'Krzesło Metalowe',
    categoryEN: 'Tubular Chair',
    descriptionPL: 'Minimalistyczne krzesło z giętej stali chromowanej, nawiązujące do estetyki Bauhausu oraz polskiej awangardy użytkowej. Siedzisko z naciąganej, surowej skóry bydlęcej zapewnia niezrównany komfort i trwałość.',
    descriptionEN: 'A minimalist chair crafted from bent chrome-plated steel tubing, drawing inspiration from Bauhaus aesthetics and Polish functional avant-garde. The sling seat made of raw, thick bovine leather guarantees unparalleled durability.',
    detailsPL: [
      'Precyzyjnie profilowane rurki stalowe spawane bezszwowo.',
      'Siedzisko i oparcie z naturalnej skóry licowej o grubości 4 mm.',
      'Amortyzująca, sprężysta konstrukcja samonośna.',
      'Sygnowane grawerem na spodzie ramy.'
    ],
    detailsEN: [
      'Precision-profiled steel tubing with seamless aerospace-grade welding.',
      'Sling seat and backrest cut from 4mm thick full-grain vegetable-tanned leather.',
      'Shock-absorbing, flexible cantilever frame design.',
      'Features an engraved authenticity seal on the underside of the frame.'
    ],
    priceEUR: 680,
    pricePLN: 2900,
    image: '/src/assets/images/coll_konstrukcja_1783073722053.jpg',
    dimensions: '76 x 58 x 62 cm',
    materialsPL: ['Rury Stalowe', 'Skóra Licowa', 'Chromowany mosiądz'],
    materialsEN: ['Steel Tubing', 'Full-Grain Leather', 'Chrome-Plated Brass'],
    colors: [
      { namePL: 'Czarne Gięte', nameEN: 'Obsidian Sling', value: '#111111' },
      { namePL: 'Konstruktywistyczna Czerwień', nameEN: 'Constructivist Red', value: '#a71c1c' },
      { namePL: 'Naturalna Skóra Koniakowa', nameEN: 'Natural Cognac Sling', value: '#b45309' }
    ]
  },
  {
    id: 'harmonia',
    titlePL: 'HARMONIA',
    titleEN: 'HARMONY',
    categoryPL: 'Stolik Kawowy',
    categoryEN: 'Coffee Table',
    descriptionPL: 'Brutalizujący stolik kawowy o rzeźbiarskiej bryle. Masywny, cylindryczny cokół wykonany z czernionego dębu podtrzymuje doskonale wyważony, okrągły blat. Charakterystycznym akcentem jest stalowa sfera leżąca u podstawy.',
    descriptionEN: 'A sculptural, brutalist-inspired coffee table. A massive cylindrical plinth carved from blackened oak supports a perfectly balanced circular top, accented with a solid steel sphere resting on the floor.',
    detailsPL: [
      'Blat z selekcjonowanego litego dębu szczotkowanego.',
      'Unikalna przeciwwaga wykonana z litej stali polerowanej na wysoki połysk.',
      'Głębokie wybarwienie ekologicznym olejo-woskiem w odcieniu węgla.',
      'Stabilność gwarantowana przez ukryte dociążenie podstawy.'
    ],
    detailsEN: [
      'Tabletop crafted from meticulously selected, wire-brushed solid oak.',
      'Unique contrasting sphere counterweight made of high-polish solid steel.',
      'Rich, deep charcoal hue achieved using organic charcoal oil-wax coating.',
      'Absolute stability provided by a heavy, concealed cast-iron counterweight inside.'
    ],
    priceEUR: 890,
    pricePLN: 3800,
    image: '/src/assets/images/coll_harmonia_1783073733544.jpg',
    dimensions: 'Ø 90 x 42 cm',
    materialsPL: ['Lity Dąb Szczotkowany', 'Stal Polerowana', 'Żeliwny Rdzeń'],
    materialsEN: ['Solid Brushed Oak', 'Polished Steel Sphere', 'Cast Iron Core'],
    colors: [
      { namePL: 'Szczotkowany Czarny Dąb', nameEN: 'Carbon Black Oak', value: '#111111' },
      { namePL: 'Cynobrowy Dąb', nameEN: 'Vermillion Stained Oak', value: '#a71c1c' },
      { namePL: 'Surowy Bielony Dąb', nameEN: 'Raw Bleached Oak', value: '#f5f5f4' }
    ]
  },
  {
    id: 'geometria',
    titlePL: 'GEOMETRIA',
    titleEN: 'GEOMETRY',
    categoryPL: 'Komoda / Kredens',
    categoryEN: 'Sideboard Credenza',
    descriptionPL: 'Niski, geometryczny kredens o horyzontalnych proporcjach. Fronty o ostrych liniach podziału zostały wykonane ze strukturalnego, matowego MDF-u barwionego w masie. Całość spoczywa na delikatnych, geometrycznych nóżkach.',
    descriptionEN: 'A low-slung, architectural credenza emphasizing horizontal lines. The fronts feature sharp, angular geometric cuts carved out of solid body-dyed structural matte MDF, resting on elegant, slender steel stiletto legs.',
    detailsPL: [
      'Zintegrowany bezuchwytowy system otwierania "Push-to-open".',
      'Wnętrze wykończone szlachetnym fornirem orzechowym.',
      'Nogi ze stali nierdzewnej malowanej proszkowo na kolor rdzawy.',
      'Cztery niezależne, głębokie komory z regulowanymi półkami.'
    ],
    detailsEN: [
      'Seamless hardware-free push-to-open magnetic latches.',
      'Cabinet interior lined with luxurious native walnut wood veneer.',
      'Slender, high-tensile steel legs powder-coated in a signature rust red.',
      'Four independent, spacious storage bays featuring adjustable shelving.'
    ],
    priceEUR: 1950,
    pricePLN: 8300,
    image: '/src/assets/images/coll_geometria_1783073744922.jpg',
    dimensions: '180 x 48 x 65 cm',
    materialsPL: ['MDF Barwiony w Masie', 'Fornir Orzechowy', 'Stal Nierdzewna'],
    materialsEN: ['Thick Through-Colored MDF', 'Walnut Veneer', 'Powder-coated Stainless Steel'],
    colors: [
      { namePL: 'Głęboki Grafit', nameEN: 'Deep Graphite', value: '#1f2937' },
      { namePL: 'Karmelowy Orzech / Czerń', nameEN: 'Caramel Walnut / Black', value: '#78350f' },
      { namePL: 'Karminowy Mat', nameEN: 'Carmine Red Matte', value: '#a71c1c' }
    ]
  },
  {
    id: 'minimalizm',
    titlePL: 'MINIMALIZM',
    titleEN: 'MINIMALISM',
    categoryPL: 'Szezlong / Leżanka',
    categoryEN: 'Daybed Lounger',
    descriptionPL: 'Ultralekka wizualnie leżanka wypoczynkowa składająca się ze smukłego stalowego profilu i płaskiego, skórzanego materaca. Całość uzupełnia geometryczny, cylindryczny zagłówek mocowany za pomocą pasów.',
    descriptionEN: 'An ultra-lightweight daybed constructed from razor-thin black steel profiles and a flat, tufted leather mattress. Finished with an adjustable cylindrical leather bolster pillow secured by heavy straps.',
    detailsPL: [
      'Rama ze stali spawanej precyzyjnie TIG pod kątem prostym.',
      'Materac wypełniony pianką o wysokiej sprężystości (Memory Foam).',
      'Ręcznie pikowane przeszycia tapicerskie z ozdobną kedrą.',
      'Pasy nośne z grubej, technicznej skóry rymarskiej.'
    ],
    detailsEN: [
      'Industrial-grade steel frame hand-welded with absolute precision.',
      'Comfort-focused dual-density orthopedic memory foam mattress.',
      'Meticulously hand-tufted upholstery stitch lines with custom welt piping.',
      'Heavy-duty load-bearing support straps made of genuine saddle leather.'
    ],
    priceEUR: 1650,
    pricePLN: 7100,
    image: '/src/assets/images/coll_minimalizm_1783073755945.jpg',
    dimensions: '190 x 70 x 38 cm',
    materialsPL: ['Stal Karbonowa', 'Skóra Pikowana', 'Skórzane Pasy Rymańskie'],
    materialsEN: ['Carbon Steel Frame', 'Tufted Aniline Leather', 'Saddle Leather Straps'],
    colors: [
      { namePL: 'Surowa Czerń', nameEN: 'Raw Ink Black', value: '#111111' },
      { namePL: 'Węgiel i Oliwka', nameEN: 'Carbon & Olive', value: '#365314' },
      { namePL: 'Gliniana Czerwień', nameEN: 'Terracotta Red', value: '#a71c1c' }
    ]
  }
];

export const DICTIONARY: Record<'PL' | 'EN', Dictionary> = {
  PL: {
    brandTagline: 'POLSKI DESIGN. PRZYSZŁOŚĆ WNĘTRZ.',
    brandSub: 'FUTURYSTYCZNE MEBLE KOLEKCJONERSKIE',
    navCollections: 'KOLEKCJE',
    navProducts: 'PRODUKTY',
    navAbout: 'O NAS',
    navProjects: 'PROJEKTY',
    navContact: 'KONTAKT',
    heroTitleRow1: 'MEBLE',
    heroTitleRow2: 'DLA',
    heroTitleRow3: 'PRZYSZŁOŚCI',
    heroDesc: 'FUTURA TWORZY EKSKLUZYWNE MEBLE DLA TYCH, KTÓRZY CENIĄ FORMĘ, FUNKCJĘ I WIZJĘ.',
    heroBtn: 'ZOBACZ KOLEKCJĘ',
    collectionsTitle: 'KOLEKCJE',
    inspirationTitle: 'POLSKI FUTURYZM.',
    inspirationSub: 'NASZA INSPIRACJA. WASZA PRZYSZŁOŚĆ.',
    inspirationDesc1: 'CZERPIEMY Z DZIEDZICTWA AWANGARDY, BY TWORZYĆ MEBLE PONADCZASOWE, ŚMIAŁE I FUNKCJONALNE.',
    inspirationDesc2: 'PROJEKTOWANE I PRODUKOWANE W POLSCE.',
    footerAboutDesc: 'FUTURA TO MANUFAKTURA MEBLARSKA ZAŁOŻONA W POLSCE, KOJARZĄCA KLASYCZNE RZEMIOSŁO Z AWANGARDOWĄ FORMĄ.',
    footerInfoline: 'Infolinia / Telefon',
    footerLocation: 'Siedziba / Salon',
    footerAllRights: '© FUTURA 2026. WSZELKIE PRAWA ZASTRZEŻONE.',
    materialsLabel: 'Materiały',
    dimensionsLabel: 'Wymiary',
    priceLabel: 'Cena',
    addToCart: 'Dodaj do Koszyka',
    addedToCart: 'Dodano do Koszyka!',
    colorLabel: 'Wybierz Wykończenie',
    seeCollection: 'ZOBACZ',
    cartTitle: 'Twój Koszyk / Zapytanie',
    cartEmpty: 'Twój koszyk jest pusty. Dodaj unikalne meble Futury.',
    cartTotal: 'Szacowana Wartość',
    checkoutBtn: 'Złóż zapytanie ofertowe',
    checkoutSuccessTitle: 'ZAPYTANIE WYSŁANE',
    checkoutSuccessDesc: 'Dziękujemy! Twoje zapytanie dotyczące mebli FUTURA zostało zarejestrowane. Nasz doradca artystyczny skontaktuje się z Tobą w ciągu 24 godzin.',
    formName: 'Imię i Nazwisko',
    formEmail: 'Adres Email',
    formPhone: 'Numer Telefonu',
    formMessage: 'Uwagi do zamówienia / Wymiary specjalne',
    formSubmit: 'Wyślij zapytanie techniczne',
    formSubmitting: 'Przesyłanie danych do manufaktury...',
    formClose: 'Zamknij',
    formRequired: 'To pole jest wymagane',
    customizerTitle: 'STUDIO PERSONALIZACJI',
    customizerSubtitle: 'Dostosuj materiały i kolory legendarnego projektu',
    customizerFrame: 'Wykończenie ramy / konstrukcji',
    customizerFabric: 'Tapicerka / Detale kolorystyczne',
    customizerReset: 'Resetuj do konfiguracji oryginalnej'
  },
  EN: {
    brandTagline: 'POLISH DESIGN. FUTURE OF INTERIORS.',
    brandSub: 'FUTURISTIC COLLECTIBLE FURNITURE',
    navCollections: 'COLLECTIONS',
    navProducts: 'PRODUCTS',
    navAbout: 'ABOUT US',
    navProjects: 'PROJECTS',
    navContact: 'CONTACT',
    heroTitleRow1: 'FURNITURE',
    heroTitleRow2: 'FOR THE',
    heroTitleRow3: 'FUTURE',
    heroDesc: 'FUTURA CREATES EXCLUSIVE FURNITURE FOR THOSE WHO APPRECIATE FORM, FUNCTION, AND VISION.',
    heroBtn: 'VIEW COLLECTION',
    collectionsTitle: 'COLLECTIONS',
    inspirationTitle: 'POLISH FUTURISM.',
    inspirationSub: 'OUR INSPIRATION. YOUR FUTURE.',
    inspirationDesc1: 'WE DRAW FROM THE HERITAGE OF THE AVANT-GARDE TO CREATE TIMELESS, BOLD, AND FUNCTIONAL PIECES.',
    inspirationDesc2: 'PROUDLY DESIGNED AND MANUFACTURED IN POLAND.',
    footerAboutDesc: 'FUTURA IS A FURNITURE ATELIER FOUNDED IN POLAND, COMBINING CLASSICAL CRAFTSMANSHIP WITH AVANT-GARDE GEOMETRIES.',
    footerInfoline: 'Infoline / Phone',
    footerLocation: 'Headquarters / Showroom',
    footerAllRights: '© FUTURA 2026. ALL RIGHTS RESERVED.',
    materialsLabel: 'Materials',
    dimensionsLabel: 'Dimensions',
    priceLabel: 'Price',
    addToCart: 'Add to Cart / Inquiry',
    addedToCart: 'Added to Cart!',
    colorLabel: 'Select Finish',
    seeCollection: 'VIEW DETAILS',
    cartTitle: 'Your Cart / Custom Inquiry',
    cartEmpty: 'Your cart is currently empty. Add unique pieces from the Futura collection.',
    cartTotal: 'Estimated Total',
    checkoutBtn: 'Submit Custom Spec Inquiry',
    checkoutSuccessTitle: 'INQUIRY SUBMITTED',
    checkoutSuccessDesc: 'Thank you! Your custom inquiry for FUTURA furniture has been logged. Our design curator will contact you within 24 hours with material swatches and a custom shipping estimate.',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formPhone: 'Phone Number',
    formMessage: 'Custom dimension requests / Material preferences',
    formSubmit: 'Submit Specifications to Atelier',
    formSubmitting: 'Transmitting details to our Polish workshop...',
    formClose: 'Close',
    formRequired: 'This field is required',
    customizerTitle: 'PERSONALIZATION STUDIO',
    customizerSubtitle: 'Tailor the finishes of the legendary designer piece',
    customizerFrame: 'Frame finish / structure',
    customizerFabric: 'Upholstery / Accent colorway',
    customizerReset: 'Reset to original configuration'
  }
};
