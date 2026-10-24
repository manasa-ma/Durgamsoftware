import React, { useEffect } from 'react';
import { User, Quote, ArrowLeft } from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeader } from '../../components/common/SectionHeader';
import { PlaceholderBox } from '../../components/common/PlaceholderBox';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/buttons/Button';
import { FOUNDER_DATA } from '../../data/about';
import { updatePageMeta } from '../../utils/seo';
export const FounderPage = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Founder & CEO — Executive Leadership | Durgam Soft',
      description:
        'Executive profile and leadership vision of the Founder & CEO at Durgam Soft Pvt. Ltd.',
    });
  }, []);
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'About Us', to: '/about' }, { label: 'Founder & CEO' }]} />

      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Executive Leadership"
            title="Founder & CEO Profile"
            subtitle="Executive direction, industry vision, and the founding philosophy behind Durgam Soft Pvt. Ltd."
            align="center"
          />
        </div>
      </section>

      <section className="py-16 border-b border-brand-border">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
            <div className="md:col-span-5">
              <PlaceholderBox
                label={FOUNDER_DATA.imagePlaceholder}
                sublabel="High-resolution executive portrait placeholder"
                heightClass="h-80 sm:h-96"
                icon={<User className="w-16 h-16 text-slate-300" />}
              />
            </div>

            <div className="md:col-span-7 space-y-6">
              <div>
                <Badge variant="navy" className="mb-2">
                  Leadership
                </Badge>
                <h1 className="text-3xl font-bold text-brand-navy">{FOUNDER_DATA.name}</h1>
                <p className="text-base font-semibold text-brand-orange mt-1">
                  {FOUNDER_DATA.designation}
                </p>
              </div>

              <div className="relative p-5 rounded-xl bg-brand-light-gray border-l-4 border-brand-orange">
                <Quote className="w-8 h-8 text-brand-orange/30 absolute top-3 right-3" />
                <p className="text-base italic text-brand-navy font-medium pr-6 leading-relaxed">
                  "{FOUNDER_DATA.vision}"
                </p>
              </div>

              <div className="space-y-4 text-sm text-brand-secondary-text leading-relaxed">
                <h3 className="text-lg font-bold text-brand-navy">Executive Background</h3>
                <p>{FOUNDER_DATA.bio}</p>
                <p>[FOUNDER_CAREER_MILESTONES_PLACEHOLDER]</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-brand-border">
            <Button variant="secondary" size="md" to="/about" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to About Us</span>
            </Button>
            <Button variant="primary" size="md" to="/contact">
              Connect with Leadership
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FounderPage;
