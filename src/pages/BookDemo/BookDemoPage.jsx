import React, { useState, useEffect } from 'react';
import { CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/buttons/Button';
import { updatePageMeta } from '../../utils/seo';

export const BookDemoPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: 'Retail',
    interestedProduct: 'billmaster Software',
    message: '',
  });

  useEffect(() => {
    updatePageMeta({
      title: 'Book a Demo — Personalized Walkthrough | Durgam Soft',
      description:
        'Schedule a 1-on-1 personalized demo of billmaster billing software, POS hardware peripherals, or custom solutions.',
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Book a Demo' }]} />

      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Live Demonstration"
            title="Book a Solution Demo"
            subtitle="Get a personalized, guided demonstration of billmaster and hardware peripherals adapted to your operational requirements."
            align="center"
          />
        </div>
      </section>

      <section className="py-16 border-b border-brand-border">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Demo Value Proposition Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">What to Expect</h3>
                <p className="text-sm text-brand-secondary-text leading-relaxed">
                  During this 30-minute demonstration, our solution specialists will address your
                  enterprise requirements:
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div className="text-xs text-brand-secondary-text">
                    <strong className="text-brand-navy block text-sm">
                      Tailored POS Walkthrough
                    </strong>
                    Explore billmaster configured for your business vertical.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div className="text-xs text-brand-secondary-text">
                    <strong className="text-brand-navy block text-sm">
                      Hardware Interfacing Review
                    </strong>
                    Test printer and barcode scanning workflows.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div className="text-xs text-brand-secondary-text">
                    <strong className="text-brand-navy block text-sm">
                      Deployment & Licensing Roadmap
                    </strong>
                    Transparent guidance on onboarding timelines and migration.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-light-orange border border-orange-200 text-xs text-brand-navy space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-orange">
                  <ShieldCheck className="w-4 h-4" />
                  <span>No Obligation</span>
                </div>
                <p className="text-brand-secondary-text">
                  Direct consultation with a technical product expert with zero sales pressure.
                </p>
              </div>
            </div>

            {/* Demo Booking Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-white border border-brand-border shadow-xs">
                {submitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-emerald-950">Demo Request Submitted</h4>
                    <p className="text-sm text-emerald-800 leading-relaxed">
                      Thank you for your interest! A technical specialist will contact you at{' '}
                      <strong>{formData.email}</strong> to coordinate a convenient demonstration
                      time.
                    </p>
                    <div className="pt-4">
                      <Button variant="secondary" size="sm" to="/">
                        Return to Homepage
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Retail Store / Enterprise Ltd."
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy mb-1">
                          Business Type *
                        </label>
                        <select
                          value={formData.businessType}
                          onChange={(e) =>
                            setFormData({ ...formData, businessType: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange bg-white"
                        >
                          <option value="Retail">Retail</option>
                          <option value="Restaurants & Cafés">Restaurants & Cafés</option>
                          <option value="Supermarkets">Supermarkets</option>
                          <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                          <option value="Clothing & Fashion">Clothing & Fashion</option>
                          <option value="Other Commercial Enterprise">
                            Other Commercial Enterprise
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-navy mb-1">
                          Interested Product *
                        </label>
                        <select
                          value={formData.interestedProduct}
                          onChange={(e) =>
                            setFormData({ ...formData, interestedProduct: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange bg-white"
                        >
                          <option value="billmaster Software">billmaster Software</option>
                          <option value="billmaster Mobile App">billmaster Mobile App</option>
                          <option value="Complete POS & Hardware Bundle">
                            Complete POS & Hardware Bundle
                          </option>
                          <option value="Thermal Printers & Scanners">
                            Thermal Printers & Scanners
                          </option>
                          <option value="Custom Application Development">
                            Custom Application Development
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1">
                        Operational Requirements / Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current setup, number of billing counters, or timeline..."
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Demo Request</span>
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemoPage;
