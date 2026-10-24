import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { NavDropdown } from './NavDropdown';
import { MobileMenu } from './MobileMenu';
import { Button } from '../buttons/Button';
import { cn } from '../../utils/helpers';
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const regularLinks = NAVIGATION_ITEMS.filter((item) => !item.isButton);
  const actionButtons = NAVIGATION_ITEMS.filter((item) => item.isButton);

  const isLinkActive = (item, isActive) => {
    if (item.to.includes('#')) {
      const hash = item.to.split('#')[1];
      return location.pathname === '/' && location.hash === `#${hash}`;
    }
    if (item.to === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return isActive;
  };

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-brand-border sticky top-0 z-50 shadow-sm transition-all duration-200">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Durgam Soft Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src="/images/durgamsoft-logo.png"
                alt="Durgam Soft"
                className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors">
                  Durgam Soft
                </span>
                <span className="text-[10px] tracking-widest uppercase text-brand-orange font-semibold">
                  Pvt. Ltd.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-5 xl:space-x-7">
            {regularLinks.map((item) =>
              (item.children && item.children.length > 0) || (item.sections && item.sections.length > 0) ? (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  to={item.to}
                  items={item.children}
                  sections={item.sections}
                />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={(e) => {
                    if (item.to.includes('#')) {
                      const [targetPath, hash] = item.to.split('#');
                      if (location.pathname === targetPath || (targetPath === '/' && location.pathname === '/')) {
                        const elem = document.getElementById(hash);
                        if (elem) {
                          e.preventDefault();
                          elem.scrollIntoView({ behavior: 'smooth' });
                          window.history.pushState(null, '', item.to);
                        }
                      }
                    }
                  }}
                  className={({ isActive }) => {
                    const active = isLinkActive(item, isActive);
                    return cn(
                      'text-sm font-medium py-2 transition-colors duration-150 relative',
                      active
                        ? 'text-brand-orange font-semibold'
                        : 'text-brand-navy hover:text-brand-orange'
                    );
                  }}
                >
                  {({ isActive }) => {
                    const active = isLinkActive(item, isActive);
                    return (
                      <>
                        <span>{item.label}</span>
                        {active && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full animate-in fade-in duration-150" />
                        )}
                      </>
                    );
                  }}
                </NavLink>
              )
            )}
          </div>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            {actionButtons.map((btn) => (
              <Button
                key={btn.label}
                variant={btn.buttonVariant || 'primary'}
                size="sm"
                to={btn.to}
              >
                {btn.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy hover:bg-brand-light-gray focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAVIGATION_ITEMS}
      />
    </nav>
  );
};
