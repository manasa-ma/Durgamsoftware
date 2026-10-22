import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { NavSubItem } from '../../types/navigation';
import { cn } from '../../utils/helpers';

export interface NavDropdownProps {
  label: string;
  to: string;
  items: NavSubItem[];
}

export const NavDropdown: React.FC<NavDropdownProps> = ({ label, to, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Active if current path starts with dropdown root (e.g. /products or /services)
  const isParentActive =
    to !== '/' &&
    (location.pathname === to || location.pathname.startsWith(`${to}/`));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            'inline-flex items-center gap-1.5 text-sm font-medium py-2 transition-colors duration-150',
            isActive || isParentActive
              ? 'text-brand-orange font-semibold'
              : 'text-brand-navy hover:text-brand-orange'
          )
        }
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400',
            (isParentActive || location.pathname === to) && 'text-brand-orange'
          )}
        />
      </NavLink>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-0 mt-1 w-72 rounded-xl bg-white p-2.5 shadow-xl border border-brand-border ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <div className="space-y-1">
            {items.map((item, index) => {
              if (item.isAction) {
                return (
                  <NavLink
                    key={index}
                    to={item.to}
                    end
                    className="mt-2 pt-2 border-t border-brand-border flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-orange hover:bg-brand-light-orange rounded-md transition-colors"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NavLink>
                );
              }

              return (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-lg p-2.5 text-left transition-colors duration-150 group',
                      isActive
                        ? 'bg-brand-light-orange/60 text-brand-orange'
                        : 'hover:bg-brand-light-gray'
                    )
                  }
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className={cn(
                      'text-sm font-semibold transition-colors',
                      location.pathname === item.to
                        ? 'text-brand-orange'
                        : 'text-brand-navy group-hover:text-brand-orange'
                    )}
                  >
                    {item.title}
                  </div>
                  {item.description && (
                    <div className="text-xs text-brand-secondary-text mt-0.5 line-clamp-1">
                      {item.description}
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
