import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight, TrendingUp } from 'lucide-react';
import { ServiceItem } from '../../types/service';
import { ServiceCard } from './ServiceCard';
import { Badge } from '../common/Badge';

export interface MarketingServiceCardProps {
  service: ServiceItem;
}

export const MarketingServiceCard: React.FC<MarketingServiceCardProps> = ({ service }) => {
  return (
    <ServiceCard className="border-brand-orange/30">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
            <Megaphone className="w-6 h-6 text-brand-orange" />
          </div>
          <Badge variant="orange">Marketing & SEO</Badge>
        </div>

        <h3 className="text-xl font-bold text-brand-navy mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-brand-secondary-text mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Sub-services */}
        <div className="space-y-2 mb-6">
          {service.subServices.map((sub, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-brand-secondary-text">
              <TrendingUp className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>{sub}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-brand-border">
        <Link
          to={service.ctaLink}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </ServiceCard>
  );
};
