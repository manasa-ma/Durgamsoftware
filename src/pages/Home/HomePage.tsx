import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { CompanyOverview } from './components/CompanyOverview';
import { ProductsPreview } from './components/ProductsPreview';
import { ServicesPreview } from './components/ServicesPreview';
import { IndustriesPreview } from './components/IndustriesPreview';
import { AboutPreview } from './components/AboutPreview';
import { ResourcesPreview } from './components/ResourcesPreview';
import { CareersPreview } from './components/CareersPreview';
import { ContactCTA } from '../../components/layout/ContactCTA';
import { updatePageMeta } from '../../utils/seo';

export const HomePage: React.FC = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Durgam Soft Pvt. Ltd. — Enterprise Billing Software & Custom Engineering',
      description:
        'Durgam Soft Pvt. Ltd. provides billmaster billing software, POS hardware peripherals, and custom enterprise software development.',
    });
  }, []);

  return (
    <>
      {/* 1. Hero / Company Overview */}
      <Hero />
      <CompanyOverview />

      {/* 2. Products Preview */}
      <ProductsPreview />

      {/* 3. Services Preview */}
      <ServicesPreview />

      {/* 4. Industries Preview */}
      <IndustriesPreview />

      {/* 5. About Us Preview */}
      <AboutPreview />

      {/* 6. Resources / Blog Preview */}
      <ResourcesPreview />

      {/* 7. Careers Preview */}
      <CareersPreview />

      {/* 8. Contact CTA */}
      <ContactCTA />
    </>
  );
};

export default HomePage;
