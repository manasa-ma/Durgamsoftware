import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home/HomePage';
import ProductsPage from '../pages/Products/ProductsPage';
import BillmasterPage from '../pages/Products/Billmaster/BillmasterPage';
import HardwarePage from '../pages/Products/Hardware/HardwarePage';
import ServicesPage from '../pages/Services/ServicesPage';
import WebDevelopmentPage from '../pages/Services/WebDevelopment/WebDevelopmentPage';
import MobileDevelopmentPage from '../pages/Services/MobileDevelopment/MobileDevelopmentPage';
import DesktopDevelopmentPage from '../pages/Services/DesktopDevelopment/DesktopDevelopmentPage';
import DigitalMarketingPage from '../pages/Services/DigitalMarketing/DigitalMarketingPage';
import IndustriesPage from '../pages/Industries/IndustriesPage';
import AboutPage from '../pages/About/AboutPage';
import FounderPage from '../pages/About/FounderPage';
import ResourcesPage from '../pages/Resources/ResourcesPage';
import BlogPage from '../pages/Resources/Blog/BlogPage';
import BlogPostPage from '../pages/Resources/Blog/BlogPostPage';
import CareersPage from '../pages/Careers/CareersPage';
import ContactPage from '../pages/Contact/ContactPage';
import BookDemoPage from '../pages/BookDemo/BookDemoPage';
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products',
        element: <BillmasterPage />,
      },
      {
        path: '/products/billmaster',
        element: <BillmasterPage />,
      },
      {
        path: '/products/hardware',
        element: <HardwarePage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
      {
        path: '/services/web-development',
        element: <WebDevelopmentPage />,
      },
      {
        path: '/services/mobile-development',
        element: <MobileDevelopmentPage />,
      },
      {
        path: '/services/desktop-development',
        element: <DesktopDevelopmentPage />,
      },
      {
        path: '/services/digital-marketing',
        element: <DigitalMarketingPage />,
      },
      {
        path: '/industries',
        element: <IndustriesPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/about/founder',
        element: <FounderPage />,
      },
      {
        path: '/resources',
        element: <ResourcesPage />,
      },
      {
        path: '/resources/blog',
        element: <BlogPage />,
      },
      {
        path: '/resources/blog/:slug',
        element: <BlogPostPage />,
      },
      {
        path: '/careers',
        element: <CareersPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/book-demo',
        element: <BookDemoPage />,
      },
    ],
  },
]);
export default router;
