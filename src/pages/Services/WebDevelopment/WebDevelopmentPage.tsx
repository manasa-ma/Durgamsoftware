import React, { useEffect } from 'react';
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { PlaceholderBox } from '../../../components/common/PlaceholderBox';
import { Button } from '../../../components/buttons/Button';
import { updatePageMeta } from '../../../utils/seo';

export const WebDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Web Application Development — Durgam Soft',
      description:
        'Custom web application development services by Durgam Soft, delivering robust cloud architectures, APIs, and modern frontends.',
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        items={[
          { label: 'Services', to: '/services' },
          { label: 'Web Application Development' },
        ]}
      />

      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Application Development"
            title="Web Application Development"
            subtitle="Engineered for performance, high availability, and seamless scalability across cloud infrastructures."
            align="center"
          />

          <div className="max-w-4xl mx-auto mt-8">
            <PlaceholderBox
              label="[WEB_APPLICATION_ARCHITECTURE_DIAGRAM]"
              sublabel="Full-stack enterprise application layout placeholder"
              heightClass="h-64 sm:h-80"
              icon={<Globe className="w-10 h-10 text-brand-orange" />}
            />
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-brand-border">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Capabilities & Scope
          </h2>
          <p className="text-brand-secondary-text mb-8 leading-relaxed">
            [SERVICE_DESCRIPTION]
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              '[CAPABILITY_WEB_PORTALS]',
              '[CAPABILITY_CLOUD_APIS]',
              '[CAPABILITY_DATABASE_INTEGRATION]',
              '[CAPABILITY_RESPONSIVE_UI]',
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-brand-light-gray border border-brand-border flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm font-semibold text-brand-navy">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" size="lg" to="/contact" className="gap-2">
              <span>Request Web Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" to="/services">
              Back to Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
