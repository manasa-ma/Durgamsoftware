import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { NavDropdown } from './NavDropdown';
import { MobileMenu } from './MobileMenu';
import { Button } from '../buttons/Button';
import { cn } from '../../utils/helpers';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const regularLinks = NAVIGATION_ITEMS.filter((item) => !item.isButton);
  const actionButtons = NAVIGATION_ITEMS.filter((item) => item.isButton);

  return (
    <nav className="w-full bg-white border-b border-brand-border sticky top-0 z-40 shadow-xs transition-shadow duration-200">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Durgam Soft Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center text-white font-bold text-xl tracking-wider group-hover:bg-brand-orange transition-colors">
                DS
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-brand-navy">
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
              item.children && item.children.length > 0 ? (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  to={item.to}
                  items={item.children}
                />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium py-2 transition-colors duration-150 relative',
                      isActive
                        ? 'text-brand-orange font-semibold'
                        : 'text-brand-navy hover:text-brand-orange'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full animate-in fade-in duration-150" />
                      )}
                    </>
                  )}
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
