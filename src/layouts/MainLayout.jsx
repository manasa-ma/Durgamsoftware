import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/navigation/Header';
import { Footer } from '../components/layout/Footer';
export const MainLayout = ({ children }) => {
  const { pathname, hash } = useLocation();
  // Scroll to top upon navigating to a new route, or scroll to hash if present
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-primary-text">
      {/* Shared Header Navigation */}
      <Header />

      {/* Dynamic Page Content */}
      <main className="flex-grow">{children || <Outlet />}</main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};
export default MainLayout;
