import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { ServicesPreview } from './components/ServicesPreview';
import { updatePageMeta } from '../../utils/seo';

export const HomePage = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Durgam Soft Pvt. Ltd. — Enterprise Billing Software & Custom Engineering',
      description:
        'Durgam Soft Pvt. Ltd. provides billmaster billing software, POS hardware peripherals, and custom enterprise software development.',
    });
  }, []);

  return (
    <>
      {/* 1. Hero Slideshow */}
      <Hero />

      {/* Video Showcase Section */}
      <VideoSection />

      {/* 2. What We Do (Services Showcase) */}
      <ServicesPreview />
    </>
  );
};

export default HomePage;
