import React, { useEffect } from 'react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeader } from '../../components/common/SectionHeader';
import { DevelopmentServiceCard } from '../../components/services/DevelopmentServiceCard';
import { MarketingServiceCard } from '../../components/services/MarketingServiceCard';
import { Button } from '../../components/buttons/Button';
import { SERVICES_DATA } from '../../data/services';
import { updatePageMeta } from '../../utils/seo';
export const ServicesPage = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Services — Application Development & Digital Marketing',
      description:
        'Durgam Soft delivers bespoke application development (web, mobile, desktop) and strategic digital marketing solutions.',
    });
  }, []);
  const devServices = SERVICES_DATA.filter((s) => s.group === 'Application Development');
  const marketingServices = SERVICES_DATA.filter((s) => s.group === 'Digital Marketing');
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Services' }]} />

      {/* Header */}
      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Engineering & Growth"
            title="Professional Services"
            subtitle="Custom software development and high-impact digital marketing designed to solve complex commercial challenges."
            align="center"
          />
        </div>
      </section>

      {/* Application Development Group */}
      <section className="py-16 border-b border-brand-border">
        <div className="container-custom">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
              Core Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Application Development
            </h2>
            <p className="text-sm text-brand-secondary-text mt-1 max-w-2xl">
              Scalable, resilient web, mobile, and native desktop systems architected with modern
              industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {devServices.map((service) => (
              <DevelopmentServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Group */}
      <section className="py-16 bg-brand-light-gray border-b border-brand-border">
        <div className="container-custom">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
              Commercial Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Digital Marketing & SEO
            </h2>
            <p className="text-sm text-brand-secondary-text mt-1 max-w-2xl">
              Search engine optimization, customer acquisition, and performance marketing
              strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {marketingServices.map((service) => (
              <MarketingServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Discuss Your Technical Requirements</h2>
          <p className="text-slate-300 text-sm md:text-base mb-8">
            Partner with Durgam Soft engineers to bring your software application or digital
            campaign to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/contact">
              Consult with Our Team
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/book-demo"
              className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
            >
              Book a Solution Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ServicesPage;
