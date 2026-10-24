import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const VideoSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    // IntersectionObserver to auto-play when in view, and pause when scrolling away
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          // Scrolled into "See Our Solutions in Action"
          video.play().catch(() => {
            video.muted = true;
            setIsMuted(true);
            video.play().catch((e) => console.log('Autoplay deferred:', e));
          });
        } else {
          // Scrolled out of view (e.g. to "What We Do" section or back up to hero)
          video.pause();
        }
      },
      {
        threshold: [0, 0.3, 0.6],
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section
      id="services-video"
      ref={sectionRef}
      className="bg-white -mt-[50px] py-12 md:py-16 border-b border-brand-border relative z-10"
    >
      <div className="container-custom max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            See Our Solutions In Action
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Take a quick walkthrough of Durgam Soft's enterprise engineering capabilities, smart billing suite, and digital services.
          </p>
        </div>

        {/* Video Player Card Container */}
        <div className="relative mx-auto rounded-2xl bg-white p-2.5 sm:p-4 shadow-xl border border-slate-200/90 overflow-hidden group">
          {/* Subtle Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] via-amber-400 to-[#0B1F3A]" />

          {/* 16:9 Responsive Video Element */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0B1F3A] shadow-inner">
            <video
              ref={videoRef}
              controls
              playsInline
              muted={isMuted}
              loop
              preload="auto"
              className="w-full h-full object-cover rounded-xl"
              aria-label="Durgam Soft Services Showcase Video"
            >
              <source src="/videos/services-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Quick Unmute / Mute floating pill */}
            <button
              type="button"
              onClick={toggleSound}
              className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mute</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
