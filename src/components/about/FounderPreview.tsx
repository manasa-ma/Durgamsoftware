import React from 'react';
import { Link } from 'react-router-dom';
import { User, Quote, ArrowRight } from 'lucide-react';
import { FOUNDER_DATA } from '../../data/about';
import { Badge } from '../common/Badge';
import { PlaceholderBox } from '../common/PlaceholderBox';

export const FounderPreview: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white border border-brand-border p-8 md:p-12 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Founder Photo Placeholder */}
        <div className="md:col-span-4">
          <PlaceholderBox
            label={FOUNDER_DATA.imagePlaceholder}
            heightClass="h-72 w-full"
            icon={<User className="w-12 h-12 text-slate-400" />}
          />
        </div>

        {/* Founder Info & Statement */}
        <div className="md:col-span-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="navy">Leadership</Badge>
              <span className="text-xs font-semibold uppercase text-brand-orange">
                Executive Profile
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              {FOUNDER_DATA.name}
            </h3>

            <p className="text-sm font-semibold text-brand-orange mt-1 mb-4">
              {FOUNDER_DATA.designation}
            </p>

            <p className="text-sm text-brand-secondary-text leading-relaxed mb-6">
              {FOUNDER_DATA.bio}
            </p>

            {/* Vision statement */}
            <div className="relative p-4 rounded-xl bg-brand-light-gray border-l-4 border-brand-navy mb-6">
              <Quote className="w-6 h-6 text-brand-orange/40 absolute top-3 right-3" />
              <p className="text-sm italic text-brand-navy font-medium pr-6">
                "{FOUNDER_DATA.vision}"
              </p>
            </div>
          </div>

          <div>
            <Link
              to={FOUNDER_DATA.profileLink}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
            >
              <span>View Executive Biography</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
