import React from 'react';
import { cn } from '../../utils/helpers';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'navy' | 'gray';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  className,
}) => {
  const variantStyles = {
    orange: 'bg-brand-light-orange text-brand-orange border border-orange-200',
    navy: 'bg-slate-100 text-brand-navy border border-slate-200',
    gray: 'bg-brand-light-gray text-brand-secondary-text border border-brand-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
