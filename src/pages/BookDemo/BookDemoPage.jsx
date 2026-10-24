import React, { useState, useEffect } from 'react';
import {
  User,
  Phone,
  Mail,
  Building2,
  Store,
  Package,
  MessageSquare,
  Calendar,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { Button } from '../../components/buttons/Button';
import { updatePageMeta } from '../../utils/seo';

export const BookDemoPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    businessType: 'Retail Store',
    interestedProduct: 'Billmaster Billing Software',
    message: '',
  });

  useEffect(() => {
    updatePageMeta({
      title: 'Book a Demo — Request a Free Walkthrough | Durgam Soft',
      description:
        'Schedule a 1-on-1 personalized demo of Billmaster software, POS hardware peripherals, or custom solutions.',
    });
  }, []);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const emailSubject = `[Demo Request] ${formData.interestedProduct || 'Billmaster'} - ${formData.name || 'Client'} (${formData.businessName || 'Business'})`;

  const formatEmailBody = () => {
    return (
      `Hello Billmaster Team,\n\n` +
      `A new product demo request has been submitted through the website:\n\n` +
      `--------------------------------------------------\n` +
      `Full Name:          ${formData.name}\n` +
      `Phone Number:       ${formData.phone}\n` +
      `Email Address:      ${formData.email}\n` +
      `Business Name:      ${formData.businessName}\n` +
      `Business Type:      ${formData.businessType}\n` +
      `Interested Product: ${formData.interestedProduct}\n` +
      `--------------------------------------------------\n\n` +
      `Message / Requirements:\n` +
      `${formData.message || 'No additional message provided.'}\n\n` +
      `--------------------------------------------------\n` +
      `Destination: contact@billmasterapp.com\n` +
      `Sent via: Durgam Soft / Billmaster Demo Request Page\n`
    );
  };

  const mailtoLink = `mailto:contact@billmasterapp.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(formatEmailBody())}`;

  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@billmasterapp.com&su=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(formatEmailBody())}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      window.location.href = mailtoLink;
    } catch {
      // Fallback handled smoothly by UI state
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      businessType: 'Retail Store',
      interestedProduct: 'Billmaster Billing Software',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] flex flex-col justify-between relative overflow-hidden">
      {/* Decorative soft ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-orange-100/40 to-stone-200/20 rounded-full blur-3xl pointer-events-none -z-0" />

      <div>
        <Breadcrumb items={[{ label: 'Book a Demo' }]} className="bg-transparent border-b border-stone-200/60" />

        <main className="container-custom py-10 sm:py-14 md:py-16 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* The Form Card with Shadow and Clean White Surface */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-stone-200/80 shadow-[0_20px_60px_-15px_rgba(11,31,58,0.12)] transition-shadow duration-300">
              {/* Form Title & Header */}
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#E8683E] border border-orange-200/70 mb-3 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free Live Walkthrough</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-2.5">
                  Book a Product Demo
                </h1>
                <p className="text-sm text-brand-secondary-text max-w-md mx-auto leading-relaxed">
                  Fill in your details below and our team will get in touch to schedule a personalized demonstration.
                </p>
              </div>

              {submitted ? (
                /* Success State */
                <div className="space-y-6 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                      Demo Request Submitted!
                    </h3>
                    <p className="text-sm text-brand-secondary-text max-w-md mx-auto leading-relaxed">
                      Thank you <strong className="text-brand-navy">{formData.name}</strong>. Your request for{' '}
                      <strong className="text-brand-navy">{formData.interestedProduct}</strong> has been prepared for dispatch to{' '}
                      <strong className="text-[#E8683E]">contact@billmasterapp.com</strong>.
                    </p>
                  </div>

                  {/* Summary of submitted details */}
                  <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-stone-200 text-left text-xs space-y-2.5 text-stone-700">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-stone-200/70">
                      <div>
                        <span className="text-stone-400 block text-[11px] font-semibold">NAME</span>
                        <span className="font-semibold text-brand-navy">{formData.name}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[11px] font-semibold">PHONE</span>
                        <span className="font-semibold text-brand-navy">{formData.phone}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-stone-200/70">
                      <div>
                        <span className="text-stone-400 block text-[11px] font-semibold">EMAIL</span>
                        <span className="font-semibold text-brand-navy">{formData.email}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[11px] font-semibold">BUSINESS</span>
                        <span className="font-semibold text-brand-navy">{formData.businessName}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <span className="text-stone-400 block text-[11px] font-semibold">BUSINESS TYPE</span>
                        <span className="font-semibold text-brand-navy">{formData.businessType}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[11px] font-semibold">PRODUCT</span>
                        <span className="font-semibold text-brand-navy">{formData.interestedProduct}</span>
                      </div>
                    </div>
                    {formData.message && (
                      <div className="pt-2 border-t border-stone-200/70">
                        <span className="text-stone-400 block text-[11px] font-semibold">MESSAGE</span>
                        <span className="text-brand-navy">{formData.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#E8683E] hover:bg-[#d4582f] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Default Email App (contact@billmasterapp.com)</span>
                    </a>

                    <a
                      href={gmailComposeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 font-bold text-sm shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                    >
                      <ExternalLink className="w-4 h-4 text-[#E8683E]" />
                      <span>Send via Gmail in Web Browser</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 font-semibold text-xs transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
                      <span>Submit Another Request</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* The Demo Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name and Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-brand-navy mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange('name')}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-primary-text bg-white hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-brand-navy mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        placeholder="e.g. +91 83745 88099"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-primary-text bg-white hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-brand-navy mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Email *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange('email')}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-primary-text bg-white hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-brand-navy mb-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Business Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={handleChange('businessName')}
                        placeholder="Store or enterprise name"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-primary-text bg-white hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 3: Business Type and Interested Product */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-brand-navy mb-1.5 flex items-center gap-1.5">
                        <Store className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Business Type *</span>
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={handleChange('businessType')}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-primary-text bg-white hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200"
                      >
                        <option value="Retail Store">Retail Store</option>
                        <option value="Supermarket / Grocery">Supermarket / Grocery</option>
                        <option value="Restaurant & Cafe">Restaurant & Cafe</option>
                        <option value="Apparel & Clothing">Apparel & Clothing</option>
                        <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                        <option value="Pharmacy & Healthcare">Pharmacy & Healthcare</option>
                        <option value="Other Commercial Business">Other Commercial Business</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-brand-navy mb-1.5 flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Interested Product *</span>
                      </label>
                      <select
                        value={formData.interestedProduct}
                        onChange={handleChange('interestedProduct')}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-primary-text bg-white hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200"
                      >
                        <option value="Billmaster Billing Software">Billmaster Billing Software</option>
                        <option value="Billmaster Mobile POS App">Billmaster Mobile POS App</option>
                        <option value="Complete POS & Hardware Bundle">Complete POS & Hardware Bundle</option>
                        <option value="Thermal Printers & Barcode Scanners">Thermal Printers & Barcode Scanners</option>
                        <option value="Custom Software / Web Development">Custom Software / Web Development</option>
                        <option value="Digital Marketing & SEO Services">Digital Marketing & SEO Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-brand-navy mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Message</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={handleChange('message')}
                      placeholder="Tell us about your billing counters, inventory requirements, or preferred demo time..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-primary-text bg-white hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 space-y-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full gap-2 py-4 rounded-xl font-bold text-base shadow-md hover:shadow-[0_14px_30px_-6px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Request Demo</span>
                    </Button>

                    <p className="text-[11px] text-brand-secondary-text text-center flex items-center justify-center gap-1.5 pt-1">
                      <Mail className="w-3.5 h-3.5 text-[#E8683E] shrink-0" />
                      <span>
                        Direct delivery to{' '}
                        <strong className="text-brand-navy font-semibold">contact@billmasterapp.com</strong>
                      </span>
                    </p>
                  </div>

                  {/* Direct Contact Note */}
                  <p className="text-[12px] text-brand-secondary-text text-center pt-2">
                    Need instant assistance? Call us directly at{' '}
                    <a href="tel:+918374588099" className="font-semibold text-[#E8683E] hover:underline">
                      +91 83745 88099
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookDemoPage;
