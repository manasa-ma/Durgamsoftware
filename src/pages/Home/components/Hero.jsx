import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HERO_DATA } from '../data';
import { Button } from '../../../components/buttons/Button';
import { Badge } from '../../../components/common/Badge';
import { PlaceholderBox } from '../../../components/common/PlaceholderBox';
import { SECTION_IDS } from '../../../utils/constants';

export const Hero = () => {
  return (
    <section
      id={SECTION_IDS.HOME}
      className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-28 border-b border-brand-border"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <Badge variant="orange" className="mb-4">
                Enterprise Software & POS Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-tight">
                {HERO_DATA.headline}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-brand-secondary-text max-w-2xl leading-relaxed">
              {HERO_DATA.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button variant="primary" size="lg" to={HERO_DATA.primaryCtaLink} className="gap-2">
                <span>{HERO_DATA.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" to={HERO_DATA.secondaryCtaLink}>
                {HERO_DATA.secondaryCtaText}
              </Button>
            </div>

            {/* Value Indicators / Supporting points */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>billmaster Billing</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>POS & Hardware</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Custom Software</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-tr from-brand-light-gray to-white p-4 border border-brand-border shadow-xl">
              <PlaceholderBox
                label={HERO_DATA.productVisualPlaceholder}
                sublabel="Interactive billmaster dashboard and device preview mockup"
                heightClass="h-80 sm:h-96"
              />

              {/* Floating pill badge preview */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-brand-border rounded-lg shadow-md p-3 hidden sm:flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-brand-navy">
                  [PLATFORM_STATUS_PREVIEW]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
