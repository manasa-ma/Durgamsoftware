import React, { useEffect } from 'react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeader } from '../../components/common/SectionHeader';
import { CompanyIntro } from '../../components/about/CompanyIntro';
import { FounderPreview } from '../../components/about/FounderPreview';
import { Button } from '../../components/buttons/Button';
import { updatePageMeta } from '../../utils/seo';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'About Us — Durgam Soft Pvt. Ltd.',
      description:
        'Learn about Durgam Soft Pvt. Ltd., our corporate mission, values, engineering philosophy, and executive leadership.',
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Header */}
      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Company & People"
            title="About Durgam Soft"
            subtitle="Building dependable, scalable software systems and billing solutions for businesses worldwide."
            align="center"
          />
        </div>
      </section>

      {/* Company Overview & Mission */}
      <section className="py-16 border-b border-brand-border">
        <div className="container-custom">
          <CompanyIntro />
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-brand-light-gray border-b border-brand-border">
        <div className="container-custom">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
              Executive Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Founder & CEO
            </h2>
            <p className="text-sm text-brand-secondary-text mt-2">
              Visionary guidance steering our product innovation and client partnerships.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FounderPreview />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Partner with Durgam Soft
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8">
            Discover how our technology products and engineering teams can accelerate your business operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/book-demo">
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/careers"
              className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
            >
              Explore Careers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
