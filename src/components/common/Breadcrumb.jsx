import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../utils/helpers';

export const Breadcrumb = ({ items, className }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('py-4 border-b border-brand-border bg-brand-light-gray/60', className)}
    >
      <div className="container-custom">
        <ol className="flex items-center space-x-2 text-xs md:text-sm text-brand-secondary-text">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-brand-orange transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {isLast || !item.to ? (
                  <span
                    className="font-medium text-brand-navy"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.to} className="hover:text-brand-orange transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
