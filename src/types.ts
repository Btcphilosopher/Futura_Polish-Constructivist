export type Language = 'PL' | 'EN';

export interface ColorOption {
  namePL: string;
  nameEN: string;
  value: string; // Tailwind color class or hex
}

export interface Product {
  id: string;
  titlePL: string;
  titleEN: string;
  categoryPL: string;
  categoryEN: string;
  descriptionPL: string;
  descriptionEN: string;
  detailsPL: string[];
  detailsEN: string[];
  priceEUR: number;
  pricePLN: number;
  image: string;
  dimensions: string;
  materialsPL: string[];
  materialsEN: string[];
  colors: ColorOption[];
}

export interface CartItem {
  id: string; // unique item id based on product.id + selected color
  product: Product;
  quantity: number;
  selectedColor: ColorOption;
}

export interface Dictionary {
  brandTagline: string;
  brandSub: string;
  navCollections: string;
  navProducts: string;
  navAbout: string;
  navProjects: string;
  navContact: string;
  heroTitleRow1: string;
  heroTitleRow2: string;
  heroTitleRow3: string;
  heroDesc: string;
  heroBtn: string;
  collectionsTitle: string;
  inspirationTitle: string;
  inspirationSub: string;
  inspirationDesc1: string;
  inspirationDesc2: string;
  footerAboutDesc: string;
  footerInfoline: string;
  footerLocation: string;
  footerAllRights: string;
  materialsLabel: string;
  dimensionsLabel: string;
  priceLabel: string;
  addToCart: string;
  addedToCart: string;
  colorLabel: string;
  seeCollection: string;
  cartTitle: string;
  cartEmpty: string;
  cartTotal: string;
  checkoutBtn: string;
  checkoutSuccessTitle: string;
  checkoutSuccessDesc: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formMessage: string;
  formSubmit: string;
  formSubmitting: string;
  formClose: string;
  formRequired: string;
  customizerTitle: string;
  customizerSubtitle: string;
  customizerFrame: string;
  customizerFabric: string;
  customizerReset: string;
}
