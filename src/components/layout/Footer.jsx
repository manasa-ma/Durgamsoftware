import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { COMPANY_NAME } from '../../utils/constants';
import durgamSoftLogo from '../../assets/logos/durgamsoft-logo.png';

export const Footer = () => {
  const location = useLocation();

  const getEmail = () => {
    const path = location.pathname;
    if (path.startsWith('/careers') || path.startsWith('/jobs')) {
      return 'careers@durgamsoft.com';
    }
    if (path.startsWith('/contact') || path.startsWith('/products/billmaster')) {
      return 'contact@billmasterapp.com';
    }
    return 'info@durgamsoft.com';
  };

  const email = getEmail();
  const navLinks = NAVIGATION_ITEMS.filter((item) => !item.isButton);

  return (
    <footer className="bg-brand-dark-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Company branding */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group inline-flex">
              <img
                src={durgamSoftLogo}
                alt={COMPANY_NAME}
                className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold text-white tracking-tight">{COMPANY_NAME}</span>
            </Link>

            <div className="space-y-2.5 text-xs text-slate-400 mb-6">
              <div>
                <span className="font-semibold text-slate-300">Address: </span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Durgam%20Soft%20Pvt.%20Ltd.%2C%20PNO%20292%2C%20opposite%20Silver%20Oak%20Banglows%2C%20Chinna%2C%20Cherlapalli%2C%20Hyderabad%2C%20Secunderabad%2C%20Telangana%20500051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors leading-relaxed inline"
                >
                  PNO 292, opposite Silver Oak Banglows, Chinna, Cherlapalli, Hyderabad, Secunderabad, Telangana 500051
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-300">Email: </span>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-brand-orange transition-colors"
                >
                  {email}
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-300">Phone: </span>
                <a
                  href="tel:+918374588099"
                  className="hover:text-brand-orange transition-colors"
                >
                  83745 88099
                </a>
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
                <Link
                  to="/products/billmaster"
                  className="hover:text-brand-orange transition-colors"
                >
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
                <Link
                  to="/services/web-development"
                  className="hover:text-brand-orange transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile-development"
                  className="hover:text-brand-orange transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/desktop-development"
                  className="hover:text-brand-orange transition-colors"
                >
                  Desktop Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="hover:text-brand-orange transition-colors"
                >
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
                <Link
                  to="/book-demo"
                  className="hover:text-brand-orange transition-colors font-semibold text-brand-orange"
                >
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
            <span className="hover:text-white cursor-pointer transition-colors">
              [PRIVACY_POLICY]
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              [TERMS_OF_SERVICE]
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">[SITEMAP]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
