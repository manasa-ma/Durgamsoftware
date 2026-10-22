export type ServiceGroup = 'Application Development' | 'Digital Marketing';

export interface ServiceItem {
  id: string;
  title: string;
  group: ServiceGroup;
  description: string;
  subServices: string[];
  ctaText: string;
  ctaLink: string;
}
