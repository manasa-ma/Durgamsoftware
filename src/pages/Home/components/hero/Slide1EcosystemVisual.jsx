import React from 'react';
import {
  Smartphone,
  Globe,
  TrendingUp,
  Receipt,
  Server,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
export const Slide1EcosystemVisual = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center select-none overflow-visible">
      {/* Background radial glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none hero-animate-pulse-glow" />
      <div className="absolute w-64 h-64 rounded-full bg-brand-navy/5 blur-2xl pointer-events-none -top-4 -left-4" />

      {/* SVG Connecting glowing paths */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="glowLineOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FB923C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Path to Smartphone (Bottom Left) */}
        <path
          d="M 280 230 C 230 260 180 320 140 360"
          stroke="url(#glowLineOrange)"
          strokeWidth="2"
          className="hero-animate-dash"
          filter="url(#glowFilter)"
        />

        {/* Path to Web Preview (Top Right) */}
        <path
          d="M 330 190 C 390 160 440 140 480 120"
          stroke="url(#glowLineOrange)"
          strokeWidth="2"
          className="hero-animate-dash"
          filter="url(#glowFilter)"
        />

        {/* Path to Growth Analytics (Top Left) */}
        <path
          d="M 250 180 C 200 140 160 110 110 90"
          stroke="url(#glowLineOrange)"
          strokeWidth="2"
          className="hero-animate-dash"
          filter="url(#glowFilter)"
        />

        {/* Path to Billmaster POS & Printer (Bottom Right) */}
        <path
          d="M 360 250 C 420 280 460 330 500 370"
          stroke="url(#glowLineOrange)"
          strokeWidth="2"
          className="hero-animate-dash"
          filter="url(#glowFilter)"
        />

        {/* Animated pulse dots on paths */}
        <circle cx="210" cy="290" r="3" fill="#F97316" />
        <circle cx="410" cy="150" r="3" fill="#F97316" />
        <circle cx="180" cy="125" r="3" fill="#F97316" />
        <circle cx="430" cy="310" r="3" fill="#F97316" />
      </svg>

      {/* CENTRAL COMPONENT: Modern Enterprise Cloud Monitor */}
      <div className="relative z-10 w-[270px] sm:w-[320px] lg:w-[360px] bg-white rounded-xl shadow-2xl border border-slate-200/90 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
        {/* Monitor Titlebar */}
        <div className="bg-brand-navy px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 text-[10px] font-mono text-slate-300">
              durgamsoft.cloud/console
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[9px] font-medium text-emerald-300 uppercase tracking-wider">
              Live
            </span>
          </div>
        </div>

        {/* Monitor Internal UI */}
        <div className="p-3.5 bg-slate-50 space-y-3">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <div>
              <div className="text-[10px] font-bold text-brand-navy tracking-tight">
                Enterprise Suite
              </div>
              <div className="text-[8px] text-slate-500">Connected Services Orchestrator</div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-orange-100 text-brand-orange text-[9px] font-bold">
              v4.8 Active
            </span>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-[8px] text-slate-400 font-medium">Core API</div>
              <div className="text-[11px] font-bold text-brand-navy">99.98%</div>
              <div className="text-[7px] text-emerald-600 font-semibold flex items-center gap-0.5">
                <CheckCircle2 className="w-2 h-2" /> Uptime
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-[8px] text-slate-400 font-medium">Sync Rate</div>
              <div className="text-[11px] font-bold text-brand-navy">12ms</div>
              <div className="text-[7px] text-brand-orange font-semibold">Real-Time</div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-[8px] text-slate-400 font-medium">Services</div>
              <div className="text-[11px] font-bold text-brand-navy">All Active</div>
              <div className="text-[7px] text-blue-600 font-semibold">Integrated</div>
            </div>
          </div>

          {/* Mini Activity Chart Mock */}
          <div className="bg-brand-navy rounded-lg p-2.5 text-white">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-semibold text-slate-200 flex items-center gap-1">
                <Server className="w-3 h-3 text-brand-orange" /> Multi-Platform Sync
              </span>
              <span className="text-[8px] font-mono text-orange-400">Stream Connected</span>
            </div>
            <div className="h-8 flex items-end gap-1.5 pt-1">
              {[45, 65, 50, 85, 70, 95, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-brand-orange to-amber-300 rounded-t-xs transition-all duration-300"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Monitor Base Stand */}
        <div className="h-2 bg-slate-300 w-full" />
      </div>

      {/* FLOATING CARD 1: Smartphone with Mobile App (Bottom Left) */}
      <div className="absolute z-20 left-1 sm:left-4 bottom-2 sm:bottom-6 w-32 sm:w-40 bg-white rounded-2xl p-2 shadow-xl border border-slate-200/90 hero-animate-float">
        <div className="bg-brand-navy rounded-xl p-2 text-white">
          <div className="flex justify-between items-center mb-1">
            <Smartphone className="w-3 h-3 text-brand-orange" />
            <span className="text-[7px] font-mono text-slate-300">iOS & Android</span>
          </div>
          <div className="text-[9px] font-bold text-white leading-tight">Mobile Suite</div>
          <div className="mt-1.5 p-1 bg-white/10 rounded-md text-[7px] text-slate-200 flex items-center justify-between">
            <span>Orders / Sync</span>
            <span className="text-emerald-400 font-bold">Done</span>
          </div>
        </div>
        <div className="mt-1 flex items-center justify-between px-1">
          <span className="text-[8px] font-semibold text-brand-navy">Web & Mobile Apps</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
        </div>
      </div>

      {/* FLOATING CARD 2: Modern Web Browser Preview (Top Right) */}
      <div className="absolute z-20 right-2 sm:right-6 top-3 sm:top-6 w-36 sm:w-44 bg-white rounded-xl shadow-xl border border-slate-200/90 p-2.5 hero-animate-float-reverse">
        <div className="flex items-center gap-1 pb-1.5 border-b border-slate-100">
          <Globe className="w-3 h-3 text-brand-orange" />
          <span className="text-[8px] font-mono text-slate-500 truncate">
            https://yourcompany.com
          </span>
        </div>
        <div className="pt-2 space-y-1">
          <div className="h-2 w-3/4 bg-brand-navy rounded-xs" />
          <div className="h-1.5 w-1/2 bg-slate-200 rounded-xs" />
          <div className="flex gap-1 pt-1">
            <span className="px-1.5 py-0.5 rounded-xs bg-brand-light-orange text-brand-orange text-[7px] font-bold">
              Responsive
            </span>
            <span className="px-1.5 py-0.5 rounded-xs bg-slate-100 text-brand-navy text-[7px] font-medium">
              High Speed
            </span>
          </div>
        </div>
      </div>

      {/* FLOATING CARD 3: Digital Growth / Analytics (Top Left) */}
      <div className="absolute z-20 left-2 sm:left-6 top-4 sm:top-8 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-orange-200/80 p-2.5 hero-animate-float">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-light-orange flex items-center justify-center text-brand-orange">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[7px] uppercase tracking-wider text-slate-500 font-semibold">
              Growth Analytics
            </div>
            <div className="text-[12px] font-extrabold text-brand-navy flex items-center gap-1">
              <span>+185%</span>
              <span className="text-[8px] font-semibold text-emerald-600">ROI</span>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING CARD 4: Billmaster POS & Thermal Printer Slip (Bottom Right) */}
      <div className="absolute z-20 right-1 sm:right-4 bottom-2 sm:bottom-4 w-38 sm:w-48 bg-white rounded-xl shadow-xl border border-slate-200/90 p-2.5 hero-animate-float-reverse">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
          <div className="flex items-center gap-1">
            <Receipt className="w-3.5 h-3.5 text-brand-orange" />
            <span className="text-[9px] font-bold text-brand-navy">Billmaster POS</span>
          </div>
          <span className="text-[7px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1 rounded">
            PRINTER READY
          </span>
        </div>
        {/* Receipt Slip Preview */}
        <div className="mt-1.5 bg-slate-50 border border-dashed border-slate-300 p-1.5 rounded text-[7px] text-slate-600 font-mono">
          <div className="flex justify-between font-bold text-brand-navy">
            <span>INVOICE #8921</span>
            <span>PAID</span>
          </div>
          <div className="flex justify-between text-slate-400 text-[6px]">
            <span>Hardware + Soft</span>
            <span>₹14,500</span>
          </div>
        </div>
      </div>

      {/* Pill Badge at Bottom Center */}
      <div className="absolute -bottom-2 z-30 bg-white/90 backdrop-blur-md border border-slate-200 shadow-md rounded-full px-3 py-1 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
        <span className="text-[10px] font-semibold text-brand-navy">Unified Digital Ecosystem</span>
      </div>
    </div>
  );
};
