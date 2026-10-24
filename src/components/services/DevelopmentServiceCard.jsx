import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Monitor, Receipt, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { Badge } from '../common/Badge';
const SERVICE_IMAGES = {
  'web-development': '/images/web-application-development.jpg',
  'mobile-development': '/images/mobile-app-development.jpg',
  'billing-software': '/images/billmaster-card.jpg',
  'desktop-development': '/images/desktop-application-development.jpg',
};
const getBadgeText = (id) => {
  if (id === 'web-development') return 'Web Apps';
  if (id === 'mobile-development') return 'Mobile Apps';
  if (id === 'billing-software') return 'Billing Software';
  if (id === 'desktop-development') return 'Desktop Apps';
  return 'Development';
};
const getDevIcon = (title) => {
  if (title.toLowerCase().includes('web')) {
    return <Globe className="w-6 h-6 text-brand-orange" />;
  }
  if (title.toLowerCase().includes('mobile')) {
    return <Smartphone className="w-6 h-6 text-brand-orange" />;
  }
  if (title.toLowerCase().includes('bill')) {
    return <Receipt className="w-6 h-6 text-brand-orange" />;
  }
  return <Monitor className="w-6 h-6 text-brand-orange" />;
};
export const DevelopmentServiceCard = ({ service }) => {
  const isBilling = service.id.includes('bill') || service.title.toLowerCase().includes('bill');
  const cardImage = SERVICE_IMAGES[service.id];
  // Mobile touch tap toggle support for image cards
  const [isTouchActive, setIsTouchActive] = useState(false);
  // If this service has a dedicated full image (Web, Mobile & Desktop Development)
  if (cardImage) {
    const badgeText = getBadgeText(service.id);
    return (
      <div
        onClick={() => setIsTouchActive((prev) => !prev)}
        className={`relative rounded-none overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 group min-h-[440px] h-full flex flex-col justify-between ${
          isBilling ? 'bg-white' : 'bg-brand-navy'
        } select-none cursor-pointer`}
      >
        {/* 1. FULL CARD IMAGE (Pure image: no text overlays, completely clean) */}
        <div
          className={`absolute inset-0 w-full h-full overflow-hidden bg-white ${
            isBilling ? 'flex items-center justify-center p-3 sm:p-4' : ''
          }`}
        >
          <img
            src={cardImage}
            alt={service.title}
            className={`w-full h-full ${
              isBilling
                ? 'object-contain object-center scale-100'
                : 'object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105'
            }`}
          />
        </div>

        {/* 2. HOVER INFORMATION OVERLAY (Appears on hover, disappears on unhover) */}
        <div
          className={`relative z-10 w-full h-full bg-brand-navy/95 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-400 ease-in-out ${
            isTouchActive
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-3 group-hover:translate-y-0'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-none bg-brand-light-orange/20 border border-brand-orange/40 flex items-center justify-center">
                {getDevIcon(service.title)}
              </div>
              <Badge variant="orange">{badgeText}</Badge>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 leading-snug">{service.title}</h3>

            <p className="text-xs text-slate-300 mb-5 leading-relaxed">{service.description}</p>

            {/* Sub-services / Capabilities */}
            <div className="space-y-2.5 mb-6">
              {service.subServices.map((sub, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs font-medium text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                  <span className="leading-tight">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
            <Link
              to={service.ctaLink}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange hover:text-white transition-colors"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  // Standard Information View (For Web Development, Billmaster) - Straight edges
  return (
    <ServiceCard
      className={`min-h-[440px] h-full ${
        isBilling ? 'border-orange-200 hover:border-brand-orange' : ''
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-none flex items-center justify-center transition-colors ${
              isBilling
                ? 'bg-orange-100 group-hover:bg-brand-orange/20'
                : 'bg-brand-light-orange group-hover:bg-brand-orange/15'
            }`}
          >
            {getDevIcon(service.title)}
          </div>
          <Badge variant={isBilling ? 'orange' : 'navy'}>
            {isBilling ? 'Billing Software' : 'Development'}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-brand-navy mb-2 leading-snug group-hover:text-brand-orange transition-colors">
          {service.title}
        </h3>

        <p className="text-xs text-brand-secondary-text mb-5 leading-relaxed">
          {service.description}
        </p>

        {/* Sub-services list */}
        <div className="space-y-2 mb-6">
          {service.subServices.map((sub, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
              <span className="leading-tight">{sub}</span>
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
