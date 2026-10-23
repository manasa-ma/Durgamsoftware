import React, { useEffect } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  HeartHandshake,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/buttons/Button';
import { CAREERS_DATA } from '../Home/data';
import { updatePageMeta } from '../../utils/seo';

export const CareersPage = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Careers — Join Our Engineering Team | Durgam Soft',
      description:
        'Explore open roles, career opportunities, and our engineering culture at Durgam Soft Pvt. Ltd.',
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Careers' }]} />

      {/* Header */}
      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Careers & Culture"
            title="Work With Durgam Soft"
            subtitle="Build mission-critical software and commercial systems alongside experienced engineers and product leaders."
            align="center"
          />
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 border-b border-brand-border">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
              Company Culture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Why Work With Us</h2>
            <p className="text-sm text-brand-secondary-text mt-2">
              Our engineering principles focus on technical rigor, product autonomy, and continuous
              professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-white border border-brand-border">
              <div className="w-10 h-10 rounded-lg bg-brand-light-orange flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">High-Impact Engineering</h3>
              <p className="text-xs text-brand-secondary-text leading-relaxed">
                Work directly on systems that power real-time commercial retail transactions and
                enterprise logistics.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-brand-border">
              <div className="w-10 h-10 rounded-lg bg-brand-light-orange flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Technical Excellence</h3>
              <p className="text-xs text-brand-secondary-text leading-relaxed">
                Emphasis on clean code, automated testing, reliable architectures, and scalable
                patterns.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-brand-border">
              <div className="w-10 h-10 rounded-lg bg-brand-light-orange flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Collaborative Environment</h3>
              <p className="text-xs text-brand-secondary-text leading-relaxed">
                Open communication, supportive mentorship from senior developers, and ownership of
                client outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-brand-light-gray border-b border-brand-border">
        <div className="container-custom max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
              Current Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Open Positions</h2>
            <p className="text-sm text-brand-secondary-text mt-2">
              Browse available openings across our engineering, product, and client success
              divisions.
            </p>
          </div>

          <div className="space-y-4">
            {CAREERS_DATA.positions.map((pos) => (
              <div
                key={pos.id}
                className="p-6 rounded-xl bg-white border border-brand-border flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-brand-orange hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="navy">{pos.category}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">{pos.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-brand-secondary-text mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {pos.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {pos.employmentType}
                    </span>
                  </div>
                </div>

                <div>
                  <Button
                    variant="primary"
                    size="md"
                    to="/contact"
                    className="gap-2 w-full md:w-auto"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application CTA */}
      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="container-custom max-w-2xl">
          <Briefcase className="w-10 h-10 text-brand-orange mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Don't See an Exact Match?</h2>
          <p className="text-slate-300 text-sm md:text-base mb-8">
            We are always interested in connecting with passionate software engineers, mobile
            developers, and technical problem solvers.
          </p>
          <Button variant="primary" size="lg" to="/contact">
            Send General Application
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
