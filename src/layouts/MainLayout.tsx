import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/navigation/Header';
import { Footer } from '../components/layout/Footer';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top upon navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-primary-text">
      {/* Shared Header Navigation */}
      <Header />

      {/* Dynamic Page Content */}
      <main className="flex-grow">
        {children || <Outlet />}
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
