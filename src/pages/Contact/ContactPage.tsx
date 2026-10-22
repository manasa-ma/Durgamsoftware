import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/buttons/Button';
import { updatePageMeta } from '../../utils/seo';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    updatePageMeta({
      title: 'Contact Us — Durgam Soft Pvt. Ltd.',
      description:
        'Get in touch with Durgam Soft Pvt. Ltd. for billing software inquiries, hardware orders, or custom development projects.',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Communication"
            title="Contact Durgam Soft"
            subtitle="Reach out to our sales, customer support, or software engineering teams."
            align="center"
          />
        </div>
      </section>

      <section className="py-16 border-b border-brand-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  Corporate Office & Channels
                </h2>
                <p className="text-sm text-brand-secondary-text leading-relaxed">
                  Have a question regarding billmaster POS, hardware procurement, or application development? Our team is available to assist.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-light-gray border border-brand-border">
                  <div className="w-10 h-10 rounded-lg bg-brand-light-orange flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy">Headquarters Location</h3>
                    <p className="text-xs text-brand-secondary-text mt-1">[ADDRESS]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-light-gray border border-brand-border">
                  <div className="w-10 h-10 rounded-lg bg-brand-light-orange flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy">Phone Support</h3>
                    <p className="text-xs text-brand-secondary-text mt-1">[PHONE]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-light-gray border border-brand-border">
                  <div className="w-10 h-10 rounded-lg bg-brand-light-orange flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy">Email Inquiries</h3>
                    <p className="text-xs text-brand-secondary-text mt-1">[EMAIL]</p>
                  </div>
                </div>
              </div>

              {/* Social Channels Placeholder */}
              <div className="pt-4 border-t border-brand-border">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-3">
                  Connect Online
                </span>
                <div className="flex items-center gap-3 text-xs text-brand-secondary-text">
                  <span className="p-2 rounded-md bg-brand-light-gray border border-brand-border cursor-pointer hover:text-brand-orange">
                    [SOCIAL_LINK_LINKEDIN]
                  </span>
                  <span className="p-2 rounded-md bg-brand-light-gray border border-brand-border cursor-pointer hover:text-brand-orange">
                    [SOCIAL_LINK_TWITTER]
                  </span>
                  <span className="p-2 rounded-md bg-brand-light-gray border border-brand-border cursor-pointer hover:text-brand-orange">
                    [SOCIAL_LINK_FACEBOOK]
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-brand-border shadow-xs">
                <h3 className="text-2xl font-bold text-brand-navy mb-2 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-brand-orange" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-sm text-brand-secondary-text mb-6">
                  Fill out the form below and an engineer or account representative will reply within one business day.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-emerald-900 mb-1">
                      Message Received
                    </h4>
                    <p className="text-sm text-emerald-700">
                      Thank you for contacting Durgam Soft. Our team has received your message and will review it shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="General Inquiry / Project"
                          className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-navy mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your requirements..."
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full gap-2">
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
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

export default ContactPage;
