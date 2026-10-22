export type BillmasterCategory = 'Billing Software' | 'Mobile App';

export interface BillmasterProduct {
  id: string;
  name: string;
  category: BillmasterCategory;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export type HardwareCategory =
  | 'Thermal Printers'
  | 'Barcode Scanners'
  | 'Label Printers'
  | 'Paper Rolls'
  | 'Labels';

export interface HardwareProduct {
  id: string;
  name: string;
  category: HardwareCategory;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  itemCountPlaceholder: string;
}
