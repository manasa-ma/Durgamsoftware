import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Printer,
  Code2,
  TrendingUp,
  ArrowRight,
  Quote,
  CheckCircle2,
  Building2,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Users,
  Award,
  Store,
  ShoppingBag,
  Utensils,
  Truck,
  Check,
  Cpu,
  Database,
  WifiOff,
  Zap,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { Button } from '../../components/buttons/Button';
import {
  WHO_WE_ARE_DATA,
  WHAT_WE_DO_PILLARS,
  JOURNEY_MILESTONES,
  MISSION_DATA,
  VALUES_DATA,
  FOUNDER_DATA,
  CUSTOMER_RELATIONSHIPS_DATA,
  CLOSING_CTA_DATA,
} from '../../data/about';
import { updatePageMeta } from '../../utils/seo';
import aboutHeroImg from '../../assets/images/about/about-hero.png';

export const AboutPage: React.FC = () => {
  const [founderImgError, setFounderImgError] = useState(false);

  useEffect(() => {
    updatePageMeta({
      title: 'About Us — Durgam Soft Pvt. Ltd. | Product-Based Software & Technology Solutions',
      description:
        'Durgam Soft Pvt. Ltd. develops billmaster billing software, supplies certified POS hardware, and delivers custom application development and digital marketing solutions.',
    });
  }, []);

  return (
    <div className="bg-white min-h-screen text-brand-primary-text">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* ======================================================== */}
      {/* Hero / Page Header (Hero Banner Image)                   */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-white pt-4 pb-10 md:pt-6 md:pb-14 border-b border-brand-border">
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-white to-white pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Accessible H1 for SEO integrity & screen readers */}
          <h1 className="sr-only">
            About Durgam Soft — Technology With a Purpose
          </h1>

          {/* Hero Banner Image Card */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white transition-all duration-300 hover:shadow-md">
            <img
              src={aboutHeroImg}
              alt="About Durgam Soft — Technology With a Purpose. Durgam Soft Pvt. Ltd. develops software products and provides technology solutions that help businesses simplify operations, improve customer experiences, and embrace digital growth."
              className="w-full h-auto object-cover block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 1. Who We Are (Company Overview & Customers Served)      */}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 border-b border-brand-border" aria-labelledby="who-we-are-heading">
        <div className="container-custom space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Narrative & Customer Focus */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light-orange border border-orange-200">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Who We Are
                </span>
              </div>

              <h2 id="who-we-are-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                {WHO_WE_ARE_DATA.title}
              </h2>

              <p className="text-base sm:text-lg text-brand-secondary-text leading-relaxed">
                {WHO_WE_ARE_DATA.leadParagraph1}
              </p>

              <p className="text-base sm:text-lg text-brand-secondary-text leading-relaxed">
                {WHO_WE_ARE_DATA.leadParagraph2}
              </p>

              {/* Customers We Serve Quick Highlights with Card Hover Animations */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-3">
                  Key Sectors We Serve Daily
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {WHO_WE_ARE_DATA.customerFocusPillars.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-slate-50 border border-brand-border flex items-start gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm hover:border-brand-orange/60 group cursor-default"
                    >
                      <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-brand-secondary-text mt-0.5 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Clean, Crisp, Bright Real-World POS UI Visual with Animation */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm relative transition-all duration-300 hover:shadow-md">
                {/* Simulated Modern Tablet Frame with White Header & Floating Sync Badge */}
                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-slate-50/50 relative">
                  {/* Floating active sync indicator */}
                  <div className="absolute top-2 right-2 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 shadow-xs animate-float-slow">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] font-bold text-emerald-700">Live Counter Active</span>
                  </div>

                  {/* Tablet Top App Bar */}
                  <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-brand-navy font-mono">
                        billmaster POS v2.4
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-brand-navy bg-slate-100 px-2 py-0.5 rounded">
                      Counter #01
                    </span>
                  </div>

                  {/* Simulated Clean Order Lines */}
                  <div className="p-4 space-y-2.5 text-xs text-brand-primary-text bg-white">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                      <div>
                        <div className="font-semibold text-brand-navy">Organic Whole Milk 1L</div>
                        <div className="text-[10px] text-slate-400">Qty: 2 × ₹65.00 (GST 5%)</div>
                      </div>
                      <span className="font-mono font-semibold text-brand-navy">₹130.00</span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                      <div>
                        <div className="font-semibold text-brand-navy">Premium Basmati Rice 5kg</div>
                        <div className="text-[10px] text-slate-400">Qty: 1 × ₹480.00 (GST Exempt)</div>
                      </div>
                      <span className="font-mono font-semibold text-brand-navy">₹480.00</span>
                    </div>

                    {/* Total & Checkout Row */}
                    <div className="pt-2 flex justify-between items-center font-bold text-brand-navy">
                      <span>Total (Incl. Tax)</span>
                      <span className="text-base text-brand-orange font-mono">₹610.00</span>
                    </div>
                  </div>

                  {/* Payment Bar */}
                  <div className="bg-slate-100 px-4 py-2.5 border-t border-slate-200 flex justify-between items-center text-xs">
                    <span className="text-[11px] text-slate-500 font-medium">Payment: UPI / QR Code</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-600" />
                      Receipt Printed
                    </span>
                  </div>
                </div>

                {/* Hardware Connectivity Pills with Hover Animations */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5 transition-all duration-200 hover:border-brand-orange hover:bg-white group cursor-default">
                    <Printer className="w-4 h-4 text-brand-orange shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-brand-navy text-[11px]">80mm Thermal Printer</div>
                      <div className="text-[10px] text-emerald-600 font-medium">Ready & Synced</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5 transition-all duration-200 hover:border-brand-orange hover:bg-white group cursor-default">
                    <Layers className="w-4 h-4 text-brand-orange shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-brand-navy text-[11px]">2D Barcode Scanner</div>
                      <div className="text-[10px] text-emerald-600 font-medium">Auto-Trigger On</div>
                    </div>
                  </div>
                </div>

                {/* Location Footer Note */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-brand-secondary-text">
                  <span className="flex items-center gap-1 font-medium text-brand-navy">
                    <Building2 className="w-3.5 h-3.5 text-brand-orange" />
                    Hyderabad Engineering Lab
                  </span>
                  <span className="text-brand-orange font-semibold">Durgam Soft Ecosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. What We Do (Products, Hardware, Dev & Marketing)      */}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 bg-brand-light-gray border-b border-brand-border" aria-labelledby="what-we-do-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
              Capabilities & Offerings
            </span>
            <h2 id="what-we-do-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              What We Do
            </h2>
            <p className="text-base text-brand-secondary-text mt-3">
              We operate across proprietary software products, certified POS hardware supplies, custom application engineering, and digital growth services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHAT_WE_DO_PILLARS.map((pillar) => {
              const icon =
                pillar.iconName === 'software' ? (
                  <Layers className="w-6 h-6 text-brand-orange" />
                ) : pillar.iconName === 'hardware' ? (
                  <Printer className="w-6 h-6 text-brand-orange" />
                ) : pillar.iconName === 'dev' ? (
                  <Code2 className="w-6 h-6 text-brand-orange" />
                ) : (
                  <TrendingUp className="w-6 h-6 text-brand-orange" />
                );

              return (
                <div
                  key={pillar.id}
                  className="rounded-2xl bg-white p-8 border border-brand-border shadow-xs flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-orange/60"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-brand-light-orange flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                        {icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-brand-navy border border-slate-200">
                        {pillar.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-brand-secondary-text mt-2 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Features checklist with subtle bullet animation */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      {pillar.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-xs text-brand-secondary-text"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 group-hover:scale-110 transition-transform" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={pillar.linkTo}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange group/btn hover:text-brand-orange-hover transition-colors"
                    >
                      <span>Explore {pillar.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. Our Journey (Company Milestones & Product Evolution)  */}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 border-b border-brand-border" aria-labelledby="our-journey-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
              Evolution & Milestones
            </span>
            <h2 id="our-journey-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Our Journey
            </h2>
            <p className="text-base text-brand-secondary-text mt-3">
              From an ambitious software lab in Hyderabad to an integrated product company empowering commercial counters across India.
            </p>
          </div>

          {/* Interactive Animated Timeline Grid */}
          <div className="relative">
            {/* Timeline Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-8 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {JOURNEY_MILESTONES.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-brand-border p-6 shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-brand-orange/60 group"
                >
                  <div>
                    {/* Year / Phase Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange bg-brand-light-orange px-3 py-1 rounded-full border border-orange-200 group-hover:scale-105 transition-transform">
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-brand-orange transition-colors" />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      {item.tag}
                    </span>

                    <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-brand-secondary-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Phase 0{idx + 1}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. Our Mission (Accessible Practical Technology)          */}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 bg-brand-light-gray border-b border-brand-border" aria-labelledby="our-mission-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Mission Statement & Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-navy text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-brand-orange" />
                <span>{MISSION_DATA.badge}</span>
              </div>

              <h2 id="our-mission-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                {MISSION_DATA.headline}
              </h2>

              <p className="text-base sm:text-lg text-brand-secondary-text leading-relaxed">
                {MISSION_DATA.description}
              </p>

              {/* Mission 3 Pillars with Animated Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                {MISSION_DATA.pillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-brand-orange/60 group"
                  >
                    <span className="text-xs font-extrabold text-brand-orange uppercase tracking-wider block mb-1">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-brand-navy mb-1.5 group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-secondary-text leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Architecture Diagram Card (Unique Visual Illustration) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200 p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                      High-Reliability Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Offline First
                  </span>
                </div>

                <div className="space-y-4 py-6">
                  {/* Local Engine Node */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between transition-all duration-200 hover:bg-white hover:border-brand-orange">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-light-orange flex items-center justify-center text-brand-orange">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">billmaster Core Engine</div>
                        <div className="text-[11px] text-slate-500">Sub-second local bill generation</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      0 ms Lag
                    </span>
                  </div>

                  {/* Offline Database Node */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between transition-all duration-200 hover:bg-white hover:border-brand-orange">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-brand-navy">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Encrypted Local Storage</div>
                        <div className="text-[11px] text-slate-500">Continuous operation without internet</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-brand-orange">
                      <WifiOff className="w-3.5 h-3.5" />
                      <span>Zero Interruption</span>
                    </div>
                  </div>

                  {/* Hardware Interface Node */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between transition-all duration-200 hover:bg-white hover:border-brand-orange">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-brand-navy">
                        <Printer className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Direct USB/ESC-POS Drivers</div>
                        <div className="text-[11px] text-slate-500">Instant hardware handshake & printing</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-brand-navy bg-slate-100 px-2 py-0.5 rounded">
                      Plug & Play
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-brand-navy">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    99.99% Counter Availability
                  </span>
                  <span className="text-brand-orange font-bold text-[11px]">Durgam Soft Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. Our Values (Customer Focus, Reliability, etc.)        */}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 border-b border-brand-border" aria-labelledby="our-values-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
              Guiding Principles
            </span>
            <h2 id="our-values-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Our Values
            </h2>
            <p className="text-base text-brand-secondary-text mt-3">
              The fundamental convictions that guide our software engineering, client communication, and commercial ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_DATA.map((value, idx) => {
              const icon =
                value.iconName === 'Users' ? (
                  <Users className="w-5 h-5 text-brand-orange" />
                ) : value.iconName === 'ShieldCheck' ? (
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                ) : value.iconName === 'TrendingUp' ? (
                  <TrendingUp className="w-5 h-5 text-brand-orange" />
                ) : (
                  <Award className="w-5 h-5 text-brand-orange" />
                );

              return (
                <div
                  key={idx}
                  className="p-7 rounded-xl bg-white border border-brand-border shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-orange/60 group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-brand-light-orange flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                      {icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2.5 group-hover:text-brand-orange transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-xs text-brand-secondary-text leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Principle 0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. Meet Our Founder & CEO                                */}
      {/* ======================================================== */}
      <section id="founder" className="py-16 md:py-24 bg-brand-light-gray border-b border-brand-border" aria-labelledby="founder-ceo-heading">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
              Executive Leadership
            </span>
            <h2 id="founder-ceo-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {FOUNDER_DATA.sectionTitle}
            </h2>
            <p className="text-sm text-brand-secondary-text mt-2">
              Guiding product architecture, hardware compatibility, and long-term organizational vision.
            </p>
          </div>

          {/* Profile Card (Desktop: Clean Portrait Left + Bio Right) with Animated Effects */}
          <div className="rounded-2xl bg-white border border-brand-border p-8 md:p-12 shadow-sm max-w-5xl mx-auto transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Photo / Clean Portrait Frame Left */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-slate-50 p-8 text-center border border-slate-200 flex flex-col items-center justify-center min-h-[380px] group">
                  {/* Real Photo with Graceful Monogram Fallback */}
                  {!founderImgError ? (
                    <img
                      src={FOUNDER_DATA.imageSrc}
                      alt={`${FOUNDER_DATA.name}, ${FOUNDER_DATA.designation}`}
                      onError={() => setFounderImgError(true)}
                      className="w-36 h-36 rounded-full object-cover border-3 border-brand-orange mb-5 shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-36 h-36 rounded-full bg-brand-navy border-3 border-brand-orange flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <span className="font-extrabold text-3xl tracking-wider text-white">
                        {FOUNDER_DATA.initials}
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-brand-navy tracking-tight">
                    {FOUNDER_DATA.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mt-1 mb-4">
                    {FOUNDER_DATA.designation}
                  </p>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[11px] text-slate-600 border border-slate-200 shadow-2xs">
                    <Building2 className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Hyderabad, India • Executive Office</span>
                  </div>
                </div>
              </div>

              {/* Bio, Quote, Focus Areas & CTA Right */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                    {FOUNDER_DATA.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-orange mt-0.5">
                    {FOUNDER_DATA.designation}
                  </p>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-3 text-sm text-brand-secondary-text leading-relaxed">
                  {FOUNDER_DATA.bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Vision Quote Card */}
                <div className="relative p-5 rounded-xl bg-slate-50 border-l-4 border-brand-orange transition-all duration-200 hover:shadow-xs">
                  <Quote className="w-7 h-7 text-brand-orange/30 absolute top-3 right-3" />
                  <p className="text-sm sm:text-base italic font-semibold text-brand-navy pr-6 leading-relaxed">
                    "{FOUNDER_DATA.visionQuote}"
                  </p>
                </div>

                {/* Strategic Focus Areas */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-3">
                    Leadership Pillars
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {FOUNDER_DATA.focusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-medium text-brand-secondary-text transition-colors hover:text-brand-navy"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Under Bio */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="md" to={FOUNDER_DATA.ctaLink} className="gap-2 shadow-xs">
                    <MessageSquare className="w-4 h-4" />
                    <span>{FOUNDER_DATA.ctaText}</span>
                  </Button>
                  <Button variant="secondary" size="md" to="/products/billmaster">
                    Explore billmaster Product
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. Our Customer Relationships (Testimonials & Stories)   */}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 border-b border-brand-border" aria-labelledby="customer-relationships-heading">
        <div className="container-custom space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
              {CUSTOMER_RELATIONSHIPS_DATA.badge}
            </span>
            <h2 id="customer-relationships-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {CUSTOMER_RELATIONSHIPS_DATA.title}
            </h2>
            <p className="text-base text-brand-secondary-text mt-3">
              {CUSTOMER_RELATIONSHIPS_DATA.subtitle}
            </p>
          </div>

          {/* Sector Coverage Badges with Hover Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CUSTOMER_RELATIONSHIPS_DATA.clientTypes.map((item, idx) => {
              const icon =
                idx === 0 ? (
                  <Store className="w-5 h-5 text-brand-orange" />
                ) : idx === 1 ? (
                  <ShoppingBag className="w-5 h-5 text-brand-orange" />
                ) : idx === 2 ? (
                  <Utensils className="w-5 h-5 text-brand-orange" />
                ) : (
                  <Truck className="w-5 h-5 text-brand-orange" />
                );

              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-orange/60 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                    {icon}
                  </div>
                  <h3 className="text-sm font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-xs font-semibold text-brand-orange mb-1">{item.metric}</div>
                  <p className="text-[11px] text-brand-secondary-text leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Practical Case Studies / Testimonials (Zoho-Style Authentic Narrative) */}
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">
                  Verified Use Cases & Operational Outlines
                </h3>
                <p className="text-xs text-brand-secondary-text mt-0.5">
                  Real operational challenges solved by Durgam Soft software and hardware.
                </p>
              </div>
              <span className="text-xs font-bold text-brand-orange bg-brand-light-orange px-3 py-1 rounded-full border border-orange-200 self-start sm:self-auto">
                100% Verified Merchant Stories
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {CUSTOMER_RELATIONSHIPS_DATA.stories.map((story) => (
                <div
                  key={story.id}
                  className="p-7 rounded-xl bg-white border border-brand-border shadow-xs flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-orange/60"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold text-brand-navy">{story.clientType}</span>
                      <span className="text-[10px] font-semibold text-brand-orange bg-brand-light-orange px-2 py-0.5 rounded">
                        {story.sector}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-brand-navy block">Operational Challenge:</span>
                        <p className="text-brand-secondary-text mt-0.5 leading-relaxed">{story.challenge}</p>
                      </div>

                      <div className="pt-2">
                        <span className="font-bold text-brand-navy block">Durgam Soft Solution:</span>
                        <p className="text-brand-secondary-text mt-0.5 leading-relaxed">{story.solution}</p>
                      </div>

                      <div className="pt-2">
                        <span className="font-bold text-brand-navy block">Outcome:</span>
                        <p className="text-emerald-700 font-medium mt-0.5 leading-relaxed">{story.result}</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 border-l-2 border-brand-orange text-xs italic text-brand-navy">
                      "{story.quote}"
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-5 text-[11px] text-brand-secondary-text flex items-center justify-between">
                    <div>
                      <div className="font-bold text-brand-navy">{story.author}</div>
                      <div>{story.businessName}</div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. Let's Build Something Meaningful Together (Closing CTA)*/}
      {/* ======================================================== */}
      <section className="py-16 md:py-20 bg-brand-navy text-white relative overflow-hidden" aria-labelledby="closing-cta-heading">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-orange border border-white/20 text-xs font-bold uppercase tracking-wider mb-5 transition-transform hover:scale-105">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Commercial Partnership</span>
          </div>

          <h2 id="closing-cta-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {CLOSING_CTA_DATA.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {CLOSING_CTA_DATA.text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              to={CLOSING_CTA_DATA.primaryButtonLink}
              className="w-full sm:w-auto shadow-md group"
            >
              <span>{CLOSING_CTA_DATA.primaryButtonText}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Link
              to={CLOSING_CTA_DATA.secondaryButtonLink}
              className="text-sm font-semibold text-slate-200 hover:text-brand-orange transition-colors inline-flex items-center gap-1.5 py-2 px-4 group"
            >
              <span>{CLOSING_CTA_DATA.secondaryButtonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
