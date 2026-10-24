import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/helpers';
export const NavDropdown = ({ label, to, items = [], sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Active if current path starts with dropdown root (e.g. /services) OR any child item path
  const isChildActive =
    (items || []).some(
      (item) =>
        item.to && (location.pathname === item.to || location.pathname.startsWith(`${item.to}/`))
    ) ||
    (sections || []).some((sec) =>
      sec.items?.some(
        (item) =>
          item.to && (location.pathname === item.to || location.pathname.startsWith(`${item.to}/`))
      )
    );

  const isParentActive =
    (to !== '/' && (location.pathname === to || location.pathname.startsWith(`${to}/`))) ||
    isChildActive;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
          className={cn(
            'absolute left-0 mt-1 rounded-xl bg-white shadow-xl border border-brand-border ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1 duration-150',
            sections ? 'w-[560px] p-4' : 'w-72 p-2.5'
          )}
        >
          {sections ? (
            <div className="grid grid-cols-2 gap-4">
              {sections.map((section, sIdx) => {
                const regularSectionItems = section.items.filter((i) => !i.isAction);
                const actionSectionItems = section.items.filter((i) => i.isAction);
                return (
                  <div
                    key={sIdx}
                    className={cn(
                      'flex flex-col justify-between',
                      sIdx > 0 && 'border-l border-slate-100 pl-4'
                    )}
                  >
                    <div>
                      {/* Section Subtitle */}
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-orange px-2.5 mb-2 pb-1.5 border-b border-brand-light-orange/40 flex items-center justify-between">
                        <span>{section.subtitle}</span>
                      </div>

                      <div className="space-y-1">
                        {regularSectionItems.map((item, index) => {
                          const isItemActive =
                            location.pathname === item.to ||
                            location.pathname.startsWith(`${item.to}/`);
                          return (
                            <NavLink
                              key={index}
                              to={item.to}
                              className={cn(
                                'block rounded-lg p-2 text-left transition-colors duration-150 group',
                                isItemActive
                                  ? 'bg-brand-light-orange/60 text-brand-orange'
                                  : 'hover:bg-brand-light-gray'
                              )}
                              role="menuitem"
                              onClick={() => setIsOpen(false)}
                            >
                              <div
                                className={cn(
                                  'text-sm font-semibold transition-colors',
                                  isItemActive
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

                    {/* Action link at the bottom of the section */}
                    {actionSectionItems.length > 0 && (
                      <div className="mt-3 pt-2 border-t border-brand-border space-y-1">
                        {actionSectionItems.map((actionItem, aIdx) => (
                          <NavLink
                            key={aIdx}
                            to={actionItem.to}
                            end
                            className="flex items-center justify-between px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange hover:bg-brand-light-orange rounded-md transition-colors"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{actionItem.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
};
