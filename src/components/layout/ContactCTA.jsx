import React from 'react';
import { Button } from '../buttons/Button';
import { PLACEHOLDERS } from '../../utils/constants';
export const ContactCTA = ({
  headline = PLACEHOLDERS.CONTACT_HEADLINE,
  description = PLACEHOLDERS.CONTACT_DESCRIPTION,
}) => {
  return (
    <section className="bg-brand-navy py-16 md:py-24 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-orange border border-white/20 mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {headline}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/book-demo">
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/contact"
              className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
