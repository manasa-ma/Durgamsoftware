import React, { useState } from 'react';
import { MapPin, Send } from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/buttons/Button';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (key) => (e) =>
    setFormData({ ...formData, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const companyName = 'Durgam Soft Pvt. Ltd.';
  const address =
    'PNO 292, opposite Silver Oak Banglows, Chinna, Cherlapalli, Hyderabad, Secunderabad, Telangana 500051';

  const mapQuery = `${companyName}, ${address}`;
  const mapEmbedUrl =
    'https://maps.google.com/maps?q=' +
    encodeURIComponent(mapQuery) +
    '&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent(mapQuery);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <section className="py-16 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Get in Touch"
            title="Contact Durgam Soft"
            subtitle="Reach out to our team for sales, support, or software development inquiries."
            align="center"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-brand-light-gray via-brand-light-orange/40 to-white">
        {/* Soft decorative glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-brand-orange/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-20 w-[32rem] h-[32rem] rounded-full bg-brand-navy/10 blur-3xl"
        />
        {/* Faint dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #CBD5E1 1px, transparent 0)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)',
          }}
        />

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-white/85 backdrop-blur-sm border border-brand-border shadow-[0_18px_50px_-20px_rgba(11,31,58,0.28)]">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    Message Sent
                  </h3>
                  <p className="text-brand-secondary-text">
                    Thank you for contacting Durgam Soft. Our team will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange('name')}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange('email')}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={handleChange('company')}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange('subject')}
                      placeholder="What is this regarding?"
                      className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange('message')}
                      placeholder="Tell us how we can help"
                      className="w-full px-4 py-3 rounded-lg border border-brand-border text-sm text-brand-primary-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-brand-light-gray border-t border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Visit Us"
            title="Our Office"
            subtitle="Come see us at our Hyderabad office."
            align="center"
          />

          <div className="max-w-4xl mx-auto">
            {/* Map Frame with Floating Red Pin Company Badge */}
            <div className="relative rounded-2xl border border-brand-border overflow-hidden shadow-md bg-slate-100">
              {/* Floating Red Pin Badge */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-red-100 shadow-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-sm shadow-red-500/40">
                  <MapPin className="w-4 h-4 fill-white text-white animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{companyName}</span>
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                  </div>
                  <div className="text-[11px] text-slate-500">Corporate HQ • Cherlapalli, Hyderabad</div>
                </div>
              </div>

              <iframe
                title="Durgam Soft Pvt. Ltd. Office Location"
                src={mapEmbedUrl}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Office Information Card with Red Pin Highlight */}
            <div className="mt-8 p-6 sm:p-7 bg-white rounded-2xl border border-brand-border shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-6 h-6 text-red-600 fill-red-100" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                    <h3 className="text-lg font-bold text-brand-navy">
                      {companyName}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                      Main Office
                    </span>
                  </div>
                  <p className="text-sm text-brand-secondary-text leading-relaxed max-w-xl">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 fill-white" />
                  <span>Get Directions</span>
                </a>
                <p className="text-xs text-brand-secondary-text">Mon–Fri, 9 AM – 6 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-brand-border">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-brand-secondary-text text-sm">
              Have questions? Email us or call us and we&rsquo;ll be happy to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
