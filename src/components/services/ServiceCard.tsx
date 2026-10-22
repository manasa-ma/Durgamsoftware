import React from 'react';
import { cn } from '../../utils/helpers';

export interface ServiceCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'rounded-xl bg-white p-6 md:p-8 border border-brand-border hover:border-brand-orange/40 transition-all duration-200 hover:shadow-md flex flex-col justify-between',
        className
      )}
    >
      {children}
    </div>
  );
};
