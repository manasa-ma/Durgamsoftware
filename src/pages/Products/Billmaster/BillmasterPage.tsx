import React, { useEffect } from 'react';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { BillmasterCard } from '../../../components/products/BillmasterCard';
import { PlaceholderBox } from '../../../components/common/PlaceholderBox';
import { Button } from '../../../components/buttons/Button';
import { BILLMASTER_PRODUCTS } from '../../../data/products';
import { updatePageMeta } from '../../../utils/seo';

export const BillmasterPage: React.FC = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'billmaster — Billing Software & Mobile POS Solutions',
      description:
        'Discover billmaster by Durgam Soft: comprehensive billing software and mobile POS solutions built for high-throughput enterprises.',
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        items={[
          { label: 'Products', to: '/products' },
          { label: 'billmaster' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Flagship Product"
            title="billmaster Software Ecosystem"
            subtitle="Next-generation billing, inventory management, and mobile point-of-sale software engineered by Durgam Soft Pvt. Ltd."
            align="center"
          />

          <div className="mt-8 max-w-4xl mx-auto">
            <PlaceholderBox
              label="[BILLMASTER_PLATFORM_OVERVIEW_VISUAL]"
              sublabel="Desktop and mobile POS interface preview"
              heightClass="h-72 sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* Product Modules */}
      <section className="py-16 border-b border-brand-border">
        <div className="container-custom">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Ecosystem Components
            </h2>
            <p className="text-sm text-brand-secondary-text mt-2">
              Available as a full-featured desktop management system and a mobile billing companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BILLMASTER_PRODUCTS.map((prod) => (
              <BillmasterCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Experience billmaster in Action
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8">
            Schedule a personalized walkthrough of billmaster tailored to your business operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/book-demo">
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/products/hardware"
              className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
            >
              Explore Compatible Hardware
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillmasterPage;
