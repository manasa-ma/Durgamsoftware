import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Monitor, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types/service';
import { ServiceCard } from './ServiceCard';
import { Badge } from '../common/Badge';

export interface DevelopmentServiceCardProps {
  service: ServiceItem;
}

const getDevIcon = (title: string) => {
  if (title.toLowerCase().includes('web')) {
    return <Globe className="w-6 h-6 text-brand-orange" />;
  }
  if (title.toLowerCase().includes('mobile')) {
    return <Smartphone className="w-6 h-6 text-brand-orange" />;
  }
  return <Monitor className="w-6 h-6 text-brand-orange" />;
};

export const DevelopmentServiceCard: React.FC<DevelopmentServiceCardProps> = ({ service }) => {
  return (
    <ServiceCard>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-brand-light-orange flex items-center justify-center">
            {getDevIcon(service.title)}
          </div>
          <Badge variant="navy">Development</Badge>
        </div>

        <h3 className="text-xl font-bold text-brand-navy mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-brand-secondary-text mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Sub-services placeholder list */}
        <div className="space-y-2 mb-6">
          {service.subServices.map((sub, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-brand-secondary-text">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-navy shrink-0" />
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
