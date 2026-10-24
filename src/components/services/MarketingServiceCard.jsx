import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';
export const MarketingServiceCard = ({ service }) => {
  const [isTouchActive, setIsTouchActive] = useState(false);
  const cardImage = '/images/digital-marketing.jpg';
  return (
    <div
      onClick={() => setIsTouchActive((prev) => !prev)}
      className="relative rounded-none overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 group min-h-[440px] h-full flex flex-col justify-between bg-brand-navy select-none cursor-pointer"
    >
      {/* 1. FULL CARD IMAGE (Pure image shifted 60px towards top for optimal artwork alignment) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-[calc(100%+80px)] -top-[60px]">
          <img
            src={cardImage}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
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
              <Megaphone className="w-6 h-6 text-brand-orange" />
            </div>
            <Badge variant="orange">Marketing & SEO</Badge>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 leading-snug">{service.title}</h3>

          <p className="text-xs text-slate-300 mb-5 leading-relaxed">{service.description}</p>

          {/* Sub-services / Capabilities */}
          <div className="space-y-2.5 mb-6">
            {service.subServices.map((sub, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-200">
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
};
