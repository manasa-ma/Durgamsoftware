import React from 'react';
import { cn } from '../../utils/helpers';

export interface PlaceholderBoxProps {
  label: string;
  sublabel?: string;
  heightClass?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const PlaceholderBox: React.FC<PlaceholderBoxProps> = ({
  label,
  sublabel,
  heightClass = 'h-64',
  className,
  icon,
}) => {
  return (
    <div
      className={cn(
        'w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center p-6 text-center transition-colors hover:border-brand-orange/40',
        heightClass,
        className
      )}
    >
      {icon && <div className="mb-3 text-brand-navy/60">{icon}</div>}
      <span className="font-mono text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-secondary-text">
        {label}
      </span>
      {sublabel && (
        <span className="mt-1 text-xs text-brand-secondary-text/80 max-w-xs">
          {sublabel}
        </span>
      )}
    </div>
  );
};
