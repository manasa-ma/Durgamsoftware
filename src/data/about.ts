export interface PillarCard {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: 'software' | 'hardware' | 'dev' | 'marketing';
  features: string[];
  linkTo: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface CustomerStory {
  id: string;
  clientType: string;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
  quote: string;
  author: string;
  businessName: string;
}

export interface DirectorData {
  id: string;
  sectionTitle: string;
  name: string;
  designation: string;
  initials: string;
  imageSrc: string;
  imagePlaceholder: string;
  bioParagraphs: string[];
  visionQuote: string;
  focusAreas: string[];
  profileLink: string;
  ctaText: string;
  ctaLink: string;
}

export interface ClosingCtaData {
  heading: string;
  text: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export const WHO_WE_ARE_DATA = {
  sectionBadge: 'Who We Are',
  title: 'A Product-Based Technology Company for Modern Businesses',
  leadParagraph1:
    'Durgam Soft Pvt. Ltd. is a product-based technology company headquartered in Hyderabad, dedicated to engineering its own proprietary business software products and integrated POS hardware solutions. As a product-focused organization, we design and refine intuitive, high-reliability tools that store owners, supermarket managers, and commercial operators can rely on every single day to run seamless counter and backend operations.',
  leadParagraph2:
    'Our core software product is billmaster — our flagship billing, inventory management, and point-of-sale platform built in-house for speed, offline reliability, and effortless usability. We pair our software products directly with certified thermal receipt printers, barcode scanners, and label printing hardware, while also providing custom software engineering and digital marketing solutions to help growing businesses move forward with confidence.',
  customerFocusPillars: [
    {
      title: 'Retail Stores & Boutiques',
      desc: 'Barcode scanning, barcode label printing, and fast counter checkout.',
    },
    {
      title: 'Supermarkets & Groceries',
      desc: 'High-speed billing, weighing machine sync, and multi-counter inventory tracking.',
    },
    {
      title: 'Restaurants & Cafés',
      desc: 'KOT management, fast settlement, and daily sales auditing.',
    },
    {
      title: 'Wholesale & Distributors',
      desc: 'Batch tracking, GST compliant bulk invoicing, and credit ledger maintenance.',
    },
  ],
};

export const WHAT_WE_DO_PILLARS: PillarCard[] = [
  {
    id: 'software-products',
    title: 'Software Products (billmaster)',
    category: 'Flagship Platform',
    description:
      'Our proprietary billing, inventory, and POS software suite. Available as a full-featured desktop management system and mobile companion app.',
    iconName: 'software',
    features: [
      'Rapid GST billing & thermal receipt generation',
      'Real-time inventory and stock replenishment alerts',
      'Mobile app for catalog and counter mobility',
      'Daily profit, tax, and sales analytics',
    ],
    linkTo: '/products/billmaster',
  },
  {
    id: 'hardware-supplies',
    title: 'POS Hardware & Consumables',
    category: 'Certified Equipment',
    description:
      'Pre-configured hardware peripherals tested for 100% plug-and-play compatibility with billmaster and commercial POS setups.',
    iconName: 'hardware',
    features: [
      'High-speed 2-inch & 3-inch thermal receipt printers',
      'Handheld 1D and 2D QR code barcode scanners',
      'Direct thermal barcode and shipping label printers',
      'High-grade thermal paper rolls & sticker consumables',
    ],
    linkTo: '/products/hardware',
  },
  {
    id: 'custom-development',
    title: 'Application Development',
    category: 'Engineering Services',
    description:
      'End-to-end bespoke software engineering for businesses with specialized operational needs or scaling requirements.',
    iconName: 'dev',
    features: [
      'Modern, scalable web applications and cloud portals',
      'Native iOS and Android mobile app development',
      'High-performance desktop applications for local workflows',
      'Custom database design and legacy data migrations',
    ],
    linkTo: '/services',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    category: 'Commercial Solutions',
    description:
      'Results-focused marketing services designed to increase search presence, attract qualified buyers, and grow commercial revenue.',
    iconName: 'marketing',
    features: [
      'Technical & on-page Search Engine Optimization (SEO)',
      'Local search ranking and Google Business Profile optimization',
      'Lead generation and customer acquisition campaigns',
      'Conversion rate optimization and performance tracking',
    ],
    linkTo: '/services/digital-marketing',
  },
];

export const JOURNEY_MILESTONES: Milestone[] = [
  {
    year: 'Foundation',
    title: 'Established in Hyderabad',
    description:
      'Founded with a clear vision: eliminate billing friction and software complexity for Indian retail merchants and commercial businesses.',
    tag: 'Corporate Origins',
  },
  {
    year: 'Product Launch',
    title: 'Launch of billmaster Desktop POS',
    description:
      'Engineered and released the first edition of billmaster POS, bringing one-click billing, GST reporting, and stock control to counter businesses.',
    tag: 'Flagship Milestone',
  },
  {
    year: 'Hardware Expansion',
    title: 'Certified POS Hardware Supply',
    description:
      'Established direct hardware sourcing to provide verified thermal printers, scanners, and label rolls guaranteed to interface seamlessly with billmaster.',
    tag: 'Ecosystem Growth',
  },
  {
    year: 'Mobile Mobility',
    title: 'billmaster Mobile App Release',
    description:
      'Expanded the product line with a companion mobile app, enabling store owners to manage catalogs, view real-time sales, and bill on the move.',
    tag: 'Multi-Device Suite',
  },
  {
    year: 'Expansion',
    title: 'Custom Engineering & Digital Services',
    description:
      'Formed dedicated engineering divisions for custom web/mobile application development and digital marketing to service scaling enterprises.',
    tag: 'Full-Service Solutions',
  },
];

export const MISSION_DATA = {
  badge: 'Our Mission',
  headline: 'Making Useful, Practical Technology Accessible to Every Business',
  description:
    'Our mission is to democratize dependable software and business equipment. We believe that technology should empower business owners rather than intimidate them. We build software that boots up fast, runs reliably without constant internet connectivity, and makes day-to-day store management effortless.',
  pillars: [
    {
      title: 'Frictionless Usability',
      desc: 'Software designed so counter staff can be fully trained in less than 15 minutes.',
    },
    {
      title: 'Operational Independence',
      desc: 'Robust offline-first architectures that keep billing operational even during network outages.',
    },
    {
      title: 'Economical Value',
      desc: 'Affordable, transparent pricing without hidden implementation fees or forced lock-ins.',
    },
  ],
};

export const VALUES_DATA: ValueItem[] = [
  {
    title: 'Customer Focus',
    description:
      'We spend time understanding real billing counters, retail desks, and warehouse floors. Every product feature begins with user needs, not boardroom speculation.',
    iconName: 'Users',
  },
  {
    title: 'Reliability',
    description:
      'Billing counters cannot afford software crashes during rush hours. We engineer our software and select our hardware with uncompromising standards of stability.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Software is never complete. We continuously release performance improvements, statutory tax updates, and UX refinements based on direct merchant feedback.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Accountability',
    description:
      'We stand firmly behind our products, hardware compatibility, and engineering deliverables. When you reach out to us, you connect directly with responsible professionals.',
    iconName: 'Award',
  },
];

export const FOUNDER_DATA: DirectorData = {
  id: 'venu-durgam',
  sectionTitle: 'Meet Our Founder & CEO',
  name: 'Venu Durgam',
  designation: 'Founder & CEO, Durgam Soft Pvt. Ltd.',
  initials: 'VD',
  imageSrc: '/images/about/venu-durgam.jpg',
  imagePlaceholder: 'Venu Durgam — Founder & CEO Portrait',
  bioParagraphs: [
    'Venu Durgam is the Founder and Chief Executive Officer of Durgam Soft Pvt. Ltd. With an engineering mindset and deep respect for commercial business operations, he established Durgam Soft in Hyderabad as a dedicated product-based technology company to build software that business owners genuinely enjoy using.',
    'Recognizing that traditional billing software was often bloated, difficult to learn, and prone to peripheral hardware mismatches, Venu led the in-house architecture and development of billmaster. His hands-on involvement spans core product design, intuitive user interface development, and rigorous testing of thermal printers and barcode scanners.',
    'Under his leadership, Durgam Soft continues to expand its product footprint across India, combining the proprietary billmaster software ecosystem, certified point-of-sale hardware, and specialized technology services to help businesses grow.',
  ],
  visionQuote:
    'Technology should make business simpler, not harder. That’s the standard we hold every product and every project to.',
  focusAreas: [
    'Hands-On Product Architecture',
    'POS Hardware & Consumables Verification',
    'Customer-Centric UX Design',
    'SME Empowerment & Operational Excellence',
  ],
  profileLink: '/about/founder',
  ctaText: 'Talk to Our Team',
  ctaLink: '/contact',
};

export const DIRECTORS: DirectorData[] = [FOUNDER_DATA];

export const CUSTOMER_RELATIONSHIPS_DATA = {
  badge: 'Customer Relationships',
  title: 'Built on Trust & Everyday Dependability',
  subtitle:
    'From busy neighborhood supermarkets to multi-counter retail stores and distribution centers, Durgam Soft powers daily commercial transactions.',
  clientTypes: [
    {
      name: 'Supermarkets & Hypermarkets',
      metric: 'Rapid Counter Checkout',
      detail: 'Multi-counter barcode scanning and automated barcode price lookup.',
    },
    {
      name: 'Apparel & Fashion Outlets',
      metric: 'Size & Variant Management',
      detail: 'Label printing with custom barcodes, sizes, colors, and discount rules.',
    },
    {
      name: 'Restaurants, Cafés & Bakeries',
      metric: 'Instant Kitchen Order Sync',
      detail: 'Quick table management, KOT printing, and flexible digital payments.',
    },
    {
      name: 'Wholesale & FMCG Traders',
      metric: 'Bulk Invoicing & Ledger',
      detail: 'GST bulk invoicing, customer credit tracking, and fast batch dispatch.',
    },
  ],
  stories: [
    {
      id: 'story-1',
      clientType: 'Retail Supermarket',
      sector: 'Supermarket & Groceries',
      challenge:
        'Frequent software freezes and printer driver errors during peak evening hours caused customer queue delays.',
      solution:
        'Implemented billmaster POS paired with certified 80mm thermal receipt printers and 2D barcode scanners.',
      result:
        'Zero counter downtime, instantaneous barcode lookups, and significantly faster bill clearing during rush hours.',
      quote:
        'billmaster made checkout significantly smoother. The thermal printer connection never drops, and my staff learned the interface in one afternoon.',
      author: 'Retail Store Manager',
      businessName: 'Hyderabad Supermarket Chain',
    },
    {
      id: 'story-2',
      clientType: 'Apparel & Fashion Store',
      sector: 'Clothing & Lifestyle',
      challenge:
        'Difficulty printing customized barcode price tags and managing frequent inventory adjustments across sizes and styles.',
      solution:
        'Deployed billmaster barcode label module alongside Durgam Soft industrial label printers and wax-resin ribbons.',
      result:
        'Professional in-house barcode labeling with complete stock audit accuracy across all apparel categories.',
      quote:
        'The combination of billmaster and certified label printers solved our barcode printing headaches permanently.',
      author: 'Business Owner',
      businessName: 'Fashion Boutique & Lifestyle Store',
    },
    {
      id: 'story-3',
      clientType: 'Distribution Enterprise',
      sector: 'Wholesale & Logistics',
      challenge:
        'Needed automated GST invoicing and customer outstanding payment reminders for high-volume daily supply runs.',
      solution:
        'Customized billmaster wholesale edition with automated ledger tracking and batch inventory dispatch.',
      result:
        'Streamlined dispatch workflow, accurate GST filings, and real-time oversight of receivables.',
      quote:
        'Durgam Soft understands the practical reality of Indian wholesale trade. Their team is responsive and accountable.',
      author: 'Managing Partner',
      businessName: 'Commercial Wholesale Distributors',
    },
  ],
};

export const CLOSING_CTA_DATA: ClosingCtaData = {
  heading: 'Let’s Build Something Meaningful Together',
  text: 'Whether you need billmaster, billing hardware, a custom application or digital marketing support — we’re ready to understand your requirements.',
  primaryButtonText: 'Book a billmaster Demo',
  primaryButtonLink: '/book-demo',
  secondaryButtonText: 'Contact Us',
  secondaryButtonLink: '/contact',
};

// Backward-compatible alias for existing imports
export const COMPANY_OVERVIEW_DATA = {
  headline: 'Durgam Soft Pvt. Ltd.',
  description:
    'Durgam Soft Pvt. Ltd. is a product-based technology company that builds its own software products and delivers application development and digital solutions to help businesses work smarter and grow.',
  subheadline: 'Product-Based Business Software & POS Hardware',
  eyebrow: 'About Durgam Soft',
  heroHeadline: 'Building Technology That Helps Businesses Move Forward',
  heroSubheading:
    'Durgam Soft Pvt. Ltd. is a product-based technology company that builds its own software products and delivers application development and digital solutions to help businesses work smarter and grow.',
  sectionTitle: 'Who We Are',
  leadParagraph1: WHO_WE_ARE_DATA.leadParagraph1,
  leadParagraph2: WHO_WE_ARE_DATA.leadParagraph2,
  pillars: WHAT_WE_DO_PILLARS,
  mission: MISSION_DATA.description,
  values: VALUES_DATA.map((v) => v.title),
  location: 'Hyderabad, India',
};
