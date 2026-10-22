import React, { useEffect } from 'react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeader } from '../../components/common/SectionHeader';
import { IndustryCard } from '../../components/industries/IndustryCard';
import { Button } from '../../components/buttons/Button';
import { INDUSTRIES_DATA } from '../../data/industries';
import { updatePageMeta } from '../../utils/seo';

export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Industries We Serve — Durgam Soft',
      description:
        'Tailored billing and software solutions across Retail, Restaurants, Supermarkets, Wholesale, Fashion, and commercial enterprises.',
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Industries' }]} />

      {/* Header */}
      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Target Sectors"
            title="Industries We Serve"
            subtitle="Specialized point-of-sale configurations and digital workflows engineered for the specific requirements of each vertical."
            align="center"
          />
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 border-b border-brand-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Customization CTA */}
      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8">
            billmaster and our software architectures are modular and easily configured to accommodate unique commercial workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/book-demo">
              Schedule an Industry Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/contact"
              className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
