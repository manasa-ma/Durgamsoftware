export interface HeroContent {
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  productVisualPlaceholder: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  category: string;
  location: string;
  employmentType: string;
  applyLink: string;
}

export interface CareersContent {
  headline: string;
  description: string;
  viewOpeningsText: string;
  positions: CareerPosition[];
}

export const HERO_DATA: HeroContent = {
  headline: '[HERO_HEADLINE]',
  description: '[HERO_DESCRIPTION]',
  primaryCtaText: '[PRIMARY_CTA]',
  primaryCtaLink: '/products',
  secondaryCtaText: '[SECONDARY_CTA]',
  secondaryCtaLink: '/book-demo',
  productVisualPlaceholder: '[BILLMASTER_VISUAL_PREVIEW]',
};

export const CAREERS_DATA: CareersContent = {
  headline: '[CAREERS_HEADLINE]',
  description: '[CAREERS_DESCRIPTION]',
  viewOpeningsText: '[VIEW_OPENINGS]',
  positions: [
    {
      id: 'pos-1',
      title: '[JOB_POSITION_1]',
      category: '[JOB_CATEGORY]',
      location: '[LOCATION_PLACEHOLDER]',
      employmentType: '[EMPLOYMENT_TYPE]',
      applyLink: '/careers',
    },
    {
      id: 'pos-2',
      title: '[JOB_POSITION_2]',
      category: '[JOB_CATEGORY]',
      location: '[LOCATION_PLACEHOLDER]',
      employmentType: '[EMPLOYMENT_TYPE]',
      applyLink: '/careers',
    },
  ],
};
