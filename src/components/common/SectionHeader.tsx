import React from 'react';
import { Badge } from './Badge';
import { cn } from '../../utils/helpers';

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl',
        className
      )}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant="orange">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-brand-secondary-text leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
