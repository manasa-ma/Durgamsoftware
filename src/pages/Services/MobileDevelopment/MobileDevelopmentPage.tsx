import React, { useEffect } from 'react';
import { Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { PlaceholderBox } from '../../../components/common/PlaceholderBox';
import { Button } from '../../../components/buttons/Button';
import { updatePageMeta } from '../../../utils/seo';

export const MobileDevelopmentPage: React.FC = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Mobile App Development — Durgam Soft',
      description:
        'Native iOS, Android, and cross-platform mobile application development services by Durgam Soft.',
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        items={[
          { label: 'Services', to: '/services' },
          { label: 'Mobile App Development' },
        ]}
      />

      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Application Development"
            title="Mobile App Development"
            subtitle="Native and cross-platform applications built for intuitive usability, offline resilience, and fast performance."
            align="center"
          />

          <div className="max-w-4xl mx-auto mt-8">
            <PlaceholderBox
              label="[MOBILE_APP_MOCKUP_PREVIEW]"
              sublabel="iOS and Android device layout preview"
              heightClass="h-64 sm:h-80"
              icon={<Smartphone className="w-10 h-10 text-brand-orange" />}
            />
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-brand-border">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Mobile Development Capabilities
          </h2>
          <p className="text-brand-secondary-text mb-8 leading-relaxed">
            [SERVICE_DESCRIPTION]
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              '[CAPABILITY_CROSS_PLATFORM]',
              '[CAPABILITY_NATIVE_IOS_ANDROID]',
              '[CAPABILITY_POS_INTEGRATION]',
              '[CAPABILITY_SECURE_STORAGE]',
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-brand-light-gray border border-brand-border flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm font-semibold text-brand-navy">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" size="lg" to="/contact" className="gap-2">
              <span>Request Mobile App Consultation</span>
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

export default MobileDevelopmentPage;
