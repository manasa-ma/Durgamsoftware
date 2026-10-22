import React from 'react';
import { Target, Award, Shield } from 'lucide-react';
import { COMPANY_OVERVIEW_DATA } from '../../data/about';
import { Badge } from '../common/Badge';
import { PlaceholderBox } from '../common/PlaceholderBox';

export const CompanyIntro: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <Badge variant="orange" className="mb-3">
          Company Overview
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
          {COMPANY_OVERVIEW_DATA.headline}
        </h3>
        <p className="text-base font-semibold text-brand-orange mb-3">
          {COMPANY_OVERVIEW_DATA.subheadline}
        </p>
        <p className="text-brand-secondary-text mb-6 leading-relaxed">
          {COMPANY_OVERVIEW_DATA.description}
        </p>

        {/* Mission Statement placeholder box */}
        <div className="p-4 rounded-lg bg-brand-light-gray border-l-4 border-l-brand-orange mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-1">
            Our Mission
          </span>
          <p className="text-sm italic text-brand-secondary-text">
            {COMPANY_OVERVIEW_DATA.missionStatement}
          </p>
        </div>

        {/* Pillars / Values placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-white border border-brand-border text-center">
            <Target className="w-5 h-5 text-brand-orange mx-auto mb-2" />
            <span className="text-xs font-semibold text-brand-navy block">
              {COMPANY_OVERVIEW_DATA.values[0]}
            </span>
          </div>
          <div className="p-4 rounded-lg bg-white border border-brand-border text-center">
            <Shield className="w-5 h-5 text-brand-orange mx-auto mb-2" />
            <span className="text-xs font-semibold text-brand-navy block">
              {COMPANY_OVERVIEW_DATA.values[1]}
            </span>
          </div>
          <div className="p-4 rounded-lg bg-white border border-brand-border text-center">
            <Award className="w-5 h-5 text-brand-orange mx-auto mb-2" />
            <span className="text-xs font-semibold text-brand-navy block">
              {COMPANY_OVERVIEW_DATA.values[2]}
            </span>
          </div>
        </div>
      </div>

      <div>
        <PlaceholderBox
          label="[COMPANY_OFFICE_OR_TEAM_VISUAL]"
          sublabel="[MEDIA_ASSET_PLACEHOLDER]"
          heightClass="h-80 sm:h-96"
        />
      </div>
    </div>
  );
};
