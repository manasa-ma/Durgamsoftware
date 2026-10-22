export interface CompanyOverviewData {
  headline: string;
  subheadline: string;
  description: string;
  missionStatement: string;
  values: string[];
}

export interface FounderData {
  name: string;
  designation: string;
  imagePlaceholder: string;
  bio: string;
  vision: string;
  profileLink: string;
}

export const COMPANY_OVERVIEW_DATA: CompanyOverviewData = {
  headline: 'Durgam Soft Pvt. Ltd.',
  subheadline: '[COMPANY_OVERVIEW_SUBHEADLINE]',
  description: '[COMPANY_DESCRIPTION]',
  missionStatement: '[MISSION_STATEMENT_PLACEHOLDER]',
  values: [
    '[CORE_VALUE_1]',
    '[CORE_VALUE_2]',
    '[CORE_VALUE_3]',
  ],
};

export const FOUNDER_DATA: FounderData = {
  name: '[FOUNDER_NAME]',
  designation: '[FOUNDER_DESIGNATION]',
  imagePlaceholder: '[FOUNDER_IMAGE_PLACEHOLDER]',
  bio: '[FOUNDER_BIO]',
  vision: '[FOUNDER_VISION]',
  profileLink: '/about/founder',
};
