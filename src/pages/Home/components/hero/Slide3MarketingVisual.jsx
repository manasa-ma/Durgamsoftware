import React from 'react';
import { TrendingUp, Search, Share2, Target, ArrowUpRight, Eye, Megaphone } from 'lucide-react';
export const Slide3MarketingVisual = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center select-none overflow-visible">
      {/* Background radial glow */}
      <div className="absolute w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none hero-animate-pulse-glow" />
      <div className="absolute w-72 h-72 rounded-full bg-brand-navy/5 blur-2xl pointer-events-none -bottom-6 -left-6" />

      {/* CENTER / MAIN: Performance Growth Dashboard Card */}
      <div className="relative z-10 w-[280px] sm:w-[330px] lg:w-[370px] bg-white rounded-xl shadow-2xl border border-slate-200/90 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
        {/* Header */}
        <div className="bg-brand-navy px-3.5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] font-bold text-white tracking-wide">
              Marketing Growth Suite
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-brand-orange/20 text-orange-300 text-[8px] font-bold">
            Live Campaign Analytics
          </span>
        </div>

        {/* Dashboard Body */}
        <div className="p-3.5 bg-slate-50 space-y-3">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-[7px] text-slate-400 font-semibold uppercase">Organic Reach</div>
              <div className="text-[12px] font-extrabold text-brand-navy flex items-center gap-0.5">
                <span>+185%</span>
                <ArrowUpRight className="w-3 h-3 text-emerald-500" />
              </div>
              <div className="text-[7px] text-emerald-600 font-medium">Search Visibility</div>
            </div>

            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-[7px] text-slate-400 font-semibold uppercase">Campaign ROAS</div>
              <div className="text-[12px] font-extrabold text-brand-navy flex items-center gap-0.5">
                <span>4.8x</span>
                <ArrowUpRight className="w-3 h-3 text-brand-orange" />
              </div>
              <div className="text-[7px] text-brand-orange font-medium">Ad Performance</div>
            </div>

            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-[7px] text-slate-400 font-semibold uppercase">CTR Score</div>
              <div className="text-[12px] font-extrabold text-brand-navy flex items-center gap-0.5">
                <span>6.2%</span>
                <ArrowUpRight className="w-3 h-3 text-blue-500" />
              </div>
              <div className="text-[7px] text-blue-600 font-medium">Audience Action</div>
            </div>
          </div>

          {/* Upward Rising Performance SVG Chart */}
          <div className="bg-white p-3 rounded-lg border border-slate-200 relative overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8px] font-bold text-brand-navy">
                Traffic & Conversion Trajectory
              </span>
              <span className="text-[7px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                +42% Growth Trend
              </span>
            </div>

            {/* SVG Chart */}
            <div className="h-24 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 90" fill="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#F97316" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Subtle horizontal grid lines */}
                <line x1="0" y1="20" x2="300" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="#E2E8F0" strokeDasharray="3 3" />
                <line x1="0" y1="80" x2="300" y2="80" stroke="#E2E8F0" strokeDasharray="3 3" />

                {/* Gradient area under curve */}
                <path
                  d="M 0 75 Q 60 70, 110 55 T 200 35 T 300 10 L 300 90 L 0 90 Z"
                  fill="url(#chartGradient)"
                />

                {/* Rising performance curve line */}
                <path
                  d="M 0 75 Q 60 70, 110 55 T 200 35 T 300 10"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="hero-animate-chart"
                />

                {/* Data point pulses */}
                <circle cx="110" cy="55" r="4" fill="#0B1F3A" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="200" cy="35" r="4" fill="#0B1F3A" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="300" cy="10" r="5" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING CARD 1: Google-style Search Ranking Interface (Top Right) */}
      <div className="absolute z-20 right-1 sm:right-4 top-2 sm:top-5 w-48 sm:w-56 bg-white rounded-xl shadow-xl border border-slate-200/90 p-2.5 hero-animate-float">
        <div className="flex items-center gap-1.5 pb-1.5 border-b border-slate-100">
          <Search className="w-3 h-3 text-brand-orange" />
          <span className="text-[8px] font-medium text-slate-600 truncate">
            "best software company near me"
          </span>
        </div>
        <div className="pt-2 space-y-1">
          <div className="flex items-center gap-1">
            <span className="px-1 py-0.2 bg-emerald-100 text-emerald-800 text-[6px] font-bold rounded">
              #1 RANK
            </span>
            <span className="text-[8px] font-bold text-brand-navy truncate">
              Durgam Soft Digital Solutions
            </span>
          </div>
          <div className="text-[7px] text-slate-500 leading-tight">
            Comprehensive custom software, web & mobile applications...
          </div>
          <div className="flex gap-1 pt-0.5">
            <span className="text-[6px] text-brand-orange font-bold">★ 5.0 Rating</span>
            <span className="text-[6px] text-slate-400">• Organic Result</span>
          </div>
        </div>
      </div>

      {/* FLOATING CARD 2: Social Media & Paid Campaign Card (Bottom Left) */}
      <div className="absolute z-20 left-1 sm:left-4 bottom-2 sm:bottom-6 w-44 sm:w-52 bg-white rounded-xl shadow-xl border border-slate-200/90 p-2.5 hero-animate-float-reverse">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5 text-brand-orange" />
            <span className="text-[8px] font-bold text-brand-navy">Campaign Spotlight</span>
          </div>
          <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">
            Active
          </span>
        </div>
        <div className="pt-1.5 space-y-1">
          <div className="flex justify-between items-center text-[7px] text-slate-600">
            <span className="flex items-center gap-1">
              <Eye className="w-2.5 h-2.5 text-slate-400" /> Impressions
            </span>
            <span className="font-bold text-brand-navy">124,500</span>
          </div>
          <div className="flex justify-between items-center text-[7px] text-slate-600">
            <span className="flex items-center gap-1">
              <Target className="w-2.5 h-2.5 text-slate-400" /> Conversion Target
            </span>
            <span className="font-bold text-brand-orange">Optimized</span>
          </div>
        </div>
      </div>

      {/* Pill Badge at Bottom Center */}
      <div className="absolute -bottom-2 z-30 bg-white/95 backdrop-blur-md border border-slate-200 shadow-md rounded-full px-3.5 py-1 flex items-center gap-2">
        <Megaphone className="w-3.5 h-3.5 text-brand-orange" />
        <span className="text-[10px] font-bold text-brand-navy">
          Strategic SEO, PPC & Performance Marketing
        </span>
      </div>
    </div>
  );
};
