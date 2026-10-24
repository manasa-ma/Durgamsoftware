import React from 'react';
import { cn } from '../../utils/helpers';

export const ServiceCard = ({ children, className }) => {
  return (
    <div
      className={cn(
        'rounded-xl bg-white p-6 md:p-8 border border-brand-border hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between',
        className
      )}
    >
      {children}
    </div>
  );
};
