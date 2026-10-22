import { NavItem } from '../types/navigation';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Products',
    to: '/products',
    children: [
      {
        title: 'billmaster',
        to: '/products/billmaster',
        description: 'Billing software & mobile application ecosystem',
      },
      {
        title: 'Hardware',
        to: '/products/hardware',
        description: 'Thermal printers, scanners, label printers & supplies',
      },
      {
        title: 'View All Products',
        to: '/products',
        description: 'Explore the full product suite and peripherals',
        isAction: true,
      },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      {
        title: 'Web Development',
        to: '/services/web-development',
        description: 'Scalable cloud, SaaS, and enterprise web applications',
      },
      {
        title: 'Mobile App Development',
        to: '/services/mobile-development',
        description: 'iOS and Android native and cross-platform apps',
      },
      {
        title: 'Desktop Application Development',
        to: '/services/desktop-development',
        description: 'High-performance desktop systems and POS tools',
      },
      {
        title: 'Digital Marketing',
        to: '/services/digital-marketing',
        description: 'SEO, performance marketing, and digital growth',
      },
      {
        title: 'View All Services',
        to: '/services',
        description: 'Full-cycle custom engineering capabilities',
        isAction: true,
      },
    ],
  },
  {
    label: 'Industries',
    to: '/industries',
  },
  {
    label: 'About Us',
    to: '/about-us',
  },
  {
    label: 'Resources',
    to: '/resources',
    children: [
      {
        title: 'Blog',
        to: '/resources/blog',
        description: 'Industry insights, technology articles, and updates',
      },
      {
        title: 'View All Resources',
        to: '/resources',
        description: 'Knowledge base and resource overview',
        isAction: true,
      },
    ],
  },
  {
    label: 'Careers',
    to: '/careers',
  },
  {
    label: 'Contact Us',
    to: '/contact',
    isButton: true,
    buttonVariant: 'secondary',
  },
  {
    label: 'Book a Demo',
    to: '/book-demo',
    isButton: true,
    buttonVariant: 'primary',
  },
];
