import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/helpers';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'navy' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  to,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3',
  };

  const variantStyles = {
    // Primary CTA: Orange (#F97316) -> Orange Hover (#EA580C)
    primary:
      'bg-brand-orange text-white hover:bg-brand-orange-hover focus:ring-brand-orange shadow-xs font-semibold',
    // Secondary CTA: White + Navy border (#0B1F3A)
    secondary:
      'bg-white text-brand-navy border border-brand-navy hover:bg-brand-light-gray focus:ring-brand-navy font-semibold',
    // Navy CTA
    navy:
      'bg-brand-navy text-white hover:bg-brand-dark-navy focus:ring-brand-navy shadow-xs font-semibold',
    // Ghost
    ghost:
      'text-brand-navy hover:bg-brand-light-gray focus:ring-brand-navy font-semibold',
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
