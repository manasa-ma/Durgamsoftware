import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { COMPANY_NAME } from '../../utils/constants';

export const Footer: React.FC = () => {
  const navLinks = NAVIGATION_ITEMS.filter((item) => !item.isButton);

  return (
    <footer className="bg-brand-dark-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Company branding */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-md bg-brand-orange flex items-center justify-center text-white font-bold text-lg">
                DS
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              [COMPANY_FOOTER_SUMMARY_PLACEHOLDER]
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <span className="font-semibold text-slate-300">Address: </span>
                <span>[ADDRESS]</span>
              </div>
              <div>
                <span className="font-semibold text-slate-300">Email: </span>
                <span>[EMAIL]</span>
              </div>
              <div>
                <span className="font-semibold text-slate-300">Phone: </span>
                <span>[PHONE]</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products" className="hover:text-brand-orange transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products/billmaster" className="hover:text-brand-orange transition-colors">
                  billmaster Software
                </Link>
              </li>
              <li>
                <Link to="/products/hardware" className="hover:text-brand-orange transition-colors">
                  POS & Hardware
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-brand-orange transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="hover:text-brand-orange transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="hover:text-brand-orange transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/services/desktop-development" className="hover:text-brand-orange transition-colors">
                  Desktop Applications
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-brand-orange transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-brand-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/book-demo" className="hover:text-brand-orange transition-colors font-semibold text-brand-orange">
                  Book a Demo →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">[PRIVACY_POLICY]</span>
            <span className="hover:text-white cursor-pointer transition-colors">[TERMS_OF_SERVICE]</span>
            <span className="hover:text-white cursor-pointer transition-colors">[SITEMAP]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
