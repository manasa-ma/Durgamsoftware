import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Printer, Code2, ArrowRight, Building2 } from 'lucide-react';
import { COMPANY_OVERVIEW_DATA } from '../../data/about';
import { Badge } from '../common/Badge';

export const CompanyIntro = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Text (55-60%) */}
        <div className="lg:col-span-7 space-y-6">
          <Badge variant="orange" className="mb-1">
            {COMPANY_OVERVIEW_DATA.sectionTitle}
          </Badge>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
            Technology Engineered for Practical Business Growth
          </h3>

          <p className="text-base text-brand-secondary-text leading-relaxed">
            {COMPANY_OVERVIEW_DATA.leadParagraph1}
          </p>

          <p className="text-base text-brand-secondary-text leading-relaxed">
            {COMPANY_OVERVIEW_DATA.leadParagraph2}
          </p>
        </div>

        {/* Right Column: Clean Bright Product Visual Mockup */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm relative">
            {/* Tablet Frame */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
              <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs font-bold text-brand-navy">
                    billmaster POS v2.4
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-brand-navy bg-slate-100 px-2 py-0.5 rounded">
                  Counter #01 • Online
                </span>
              </div>

              <div className="p-4 space-y-2 text-xs bg-white">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="font-medium text-brand-navy">Standard Store Checkout</span>
                  <span className="text-emerald-600 font-semibold text-[10px] bg-emerald-50 px-2 py-0.5 rounded">
                    GST Active
                  </span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500">
                  <span>Fast Inventory Synchronization</span>
                  <span className="font-mono font-bold text-brand-navy">Ready</span>
                </div>
              </div>
            </div>

            {/* Hardware Status */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-brand-orange shrink-0" />
                <div>
                  <div className="font-bold text-brand-navy text-[11px]">Thermal Printer</div>
                  <div className="text-[10px] text-slate-500">80mm Ready</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-brand-orange shrink-0" />
                <div>
                  <div className="font-bold text-brand-navy text-[11px]">Barcode Scanner</div>
                  <div className="text-[10px] text-slate-500">2D / QR Ready</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 font-medium text-brand-navy">
                <Building2 className="w-3.5 h-3.5 text-brand-orange" />
                Hyderabad HQ • Product Lab
              </span>
              <span className="text-brand-orange font-semibold">Durgam Soft Ecosystem</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {COMPANY_OVERVIEW_DATA.pillars.map((pillar) => {
          const icon =
            pillar.iconName === 'software' ? (
              <Layers className="w-6 h-6 text-brand-orange" />
            ) : pillar.iconName === 'hardware' ? (
              <Printer className="w-6 h-6 text-brand-orange" />
            ) : (
              <Code2 className="w-6 h-6 text-brand-orange" />
            );

          return (
            <div
              key={pillar.id}
              className="p-6 rounded-xl bg-white border border-brand-border hover:border-brand-orange hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-light-orange flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors">
                  <div className="group-hover:text-white transition-colors">{icon}</div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block mb-1">
                  {pillar.category}
                </span>
                <h4 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-sm text-brand-secondary-text leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {pillar.linkTo && (
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={pillar.linkTo}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-orange transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mission / Values Block */}
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-100 border border-brand-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Our Mission
            </span>
            <p className="text-base sm:text-lg text-brand-navy font-semibold leading-relaxed">
              "{COMPANY_OVERVIEW_DATA.mission}"
            </p>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
              Our Core Values
            </span>
            <div className="flex flex-wrap gap-2">
              {COMPANY_OVERVIEW_DATA.values.map((val) => (
                <span
                  key={val}
                  className="px-3 py-1.5 rounded-lg bg-white border border-brand-border text-xs font-semibold text-brand-navy shadow-2xs"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
