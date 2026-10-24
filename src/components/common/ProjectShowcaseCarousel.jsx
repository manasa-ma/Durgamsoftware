import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export const ProjectShowcaseCarousel = ({
  projects = [],
  badge = 'Our Work',
  title = 'Featured Work & Case Studies',
  subtitle = 'Real-world software, applications, and digital systems built for growing businesses.',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);

  const total = projects.length;

  const nextSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, total, nextSlide]);

  if (!projects || projects.length === 0) return null;

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    setTouchDeltaX(e.touches[0].clientX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX) > 45) {
      if (touchDeltaX < 0) nextSlide();
      else prevSlide();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
    setIsPaused(false);
  };

  const current = projects[currentIndex];

  return (
    <section id="work-showcase" className="py-14 md:py-20 bg-white border-t border-stone-200/70 font-sans">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#E8683E] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E8683E]" />
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Carousel Card Stage */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-[#FAF7F2] rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Image Mockup Frame */}
              <div className="lg:col-span-7">
                <div className="relative group overflow-hidden rounded-2xl border border-stone-200/90 shadow-md aspect-[16/10] bg-white">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Browser/System Bar Simulation */}
                  <div className="absolute top-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-stone-200/80 shadow-2xs flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                      <span className="ml-2 font-mono text-slate-600 text-[10px] hidden sm:inline truncate max-w-[200px]">
                        {current.url ? current.url : `durgamsoft.com/projects/${current.id}`}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-orange-100 text-[#E8683E] font-bold text-[10px]">
                      Live Project
                    </span>
                  </div>

                  {/* Floating Metric Badge */}
                  {current.metrics && current.metrics[0] && (
                    <div className="absolute bottom-3 right-3 bg-black/90 text-white backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/10 flex items-center gap-2.5">
                      <span className="text-lg font-black text-[#E8683E] font-mono">
                        {current.metrics[0].value}
                      </span>
                      <span className="text-[11px] text-stone-300 font-medium">
                        {current.metrics[0].label}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/70 text-[#E8683E]">
                    {current.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight">
                  {current.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Metrics Pill Grid */}
                {current.metrics && (
                  <div className="grid grid-cols-2 gap-3 py-1">
                    {current.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-white border border-stone-200/80">
                        <span className="text-base font-black text-[#E8683E] block">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                {current.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {current.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-stone-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Live Link Button if available */}
                {current.url && (
                  <div className="pt-2">
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black hover:text-[#E8683E] transition-colors group/link"
                    >
                      <span>Visit {current.urlLabel || current.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          {total > 1 && (
            <div className="flex items-center justify-between pt-6 max-w-6xl mx-auto px-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-[#FAF7F2] hover:bg-stone-200 border border-stone-200 flex items-center justify-center text-slate-700 hover:text-black shadow-2xs transition-all active:scale-95 cursor-pointer"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-[#FAF7F2] hover:bg-stone-200 border border-stone-200 flex items-center justify-center text-slate-700 hover:text-black shadow-2xs transition-all active:scale-95 cursor-pointer"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs text-slate-500 font-medium ml-2">
                  {currentIndex + 1} of {total}
                </span>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex ? 'w-6 bg-[#E8683E]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseCarousel;
