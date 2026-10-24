import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Utensils, Store, Truck, Shirt, Building2, ArrowRight } from 'lucide-react';

const getIndustryIcon = (iconName) => {
  switch (iconName) {
    case 'ShoppingBag':
      return <ShoppingBag className="w-6 h-6 text-brand-orange" />;
    case 'Utensils':
      return <Utensils className="w-6 h-6 text-brand-orange" />;
    case 'Store':
      return <Store className="w-6 h-6 text-brand-orange" />;
    case 'Truck':
      return <Truck className="w-6 h-6 text-brand-orange" />;
    case 'Shirt':
      return <Shirt className="w-6 h-6 text-brand-orange" />;
    case 'Building2':
    default:
      return <Building2 className="w-6 h-6 text-brand-orange" />;
  }
};

export const IndustryCard = ({ industry }) => {
  return (
    <div className="rounded-xl bg-white p-6 border border-brand-border hover:border-stone-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group">
      <div>
        <div className="w-12 h-12 rounded-lg bg-brand-light-orange flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
          <div>
            {getIndustryIcon(industry.iconName)}
          </div>
        </div>

        <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
          {industry.name}
        </h3>

        <p className="text-sm text-brand-secondary-text mb-6 leading-relaxed">
          {industry.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <Link
          to={industry.ctaLink}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-navy group-hover:text-brand-orange transition-colors"
        >
          <span>{industry.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
