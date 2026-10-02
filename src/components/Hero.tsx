import React, { useState, useEffect } from 'react';
import { ASSETS } from '../data/assets';
import { BUSINESS_INFO } from '../data/businessInfo';
import { SipSmokeLogo } from './SipSmokeLogo';
import { Star, MapPin, ChevronDown, Compass, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDirections: () => void;
  onExploreExperience: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDirections, onExploreExperience }) => {
  const [revealStep, setRevealStep] = useState(0);

  useEffect(() => {
    // Cinematic opening sequence
    const t1 = setTimeout(() => setRevealStep(1), 150); // warm glow
    const t2 = setTimeout(() => setRevealStep(2), 400); // smoke movement
    const t3 = setTimeout(() => setRevealStep(3), 800); // logo emerges
    const t4 = setTimeout(() => setRevealStep(4), 1200); // bar lights
    const t5 = setTimeout(() => setRevealStep(5), 1600); // headline and CTAs reveal

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#07080a]"
    >
      {/* Background Bar Atmosphere with Cinematic Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Sip & Smoke Resto Bar Interior Ambience"
          className={`w-full h-full object-cover object-center transition-all duration-1000 ${
            revealStep >= 4 ? 'opacity-40 scale-100' : 'opacity-20 scale-105'
          }`}
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic gradients to guarantee legibility and moody depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/70 to-[#07080a]/90" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-[#07080a]/60 to-[#07080a]" />

        {/* Ambient atmospheric smoke and glow bursts */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-lime-500/10 blur-[130px] pointer-events-none transition-opacity duration-1000 ${
            revealStep >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none transition-opacity duration-1000 ${
            revealStep >= 2 ? 'opacity-80' : 'opacity-0'
          }`}
        />

        {/* Smoke drift overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30 animate-smoke pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Prominent Authentic Logo */}
        <div
          className={`mb-6 transition-all duration-700 transform ${
            revealStep >= 3
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-90'
          }`}
        >
          <SipSmokeLogo size="xl" animated={revealStep < 5} />
        </div>

        {/* Subtitle / Brand category kicker */}
        <div
          className={`inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-amber-400 transition-all duration-700 ${
            revealStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-amber-400/80" />
          <span>The Resto Bar</span>
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-amber-400/80" />
        </div>

        {/* Main Headline */}
        <h1
          className={`font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 max-w-4xl text-balance transition-all duration-700 ${
            revealStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          SIP. SMOKE.{' '}
          <span className="text-lime-gradient drop-shadow-[0_0_20px_rgba(163,230,53,0.3)]">
            UNWIND.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          className={`text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 transition-all duration-700 ${
            revealStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Good food, crafted cocktails and a nightlife atmosphere made for
          unforgettable evenings in Salem.
        </p>

        {/* Business Proof Metadata Strip */}
        <div
          className={`flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-neutral-300 mb-10 pb-4 border-b border-white/10 transition-all duration-700 ${
            revealStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-white font-bold">{BUSINESS_INFO.rating}</span>
            <span className="text-neutral-400 font-normal">({BUSINESS_INFO.reviewsCount} reviews)</span>
          </div>

          <span className="text-neutral-600 hidden sm:inline" aria-hidden="true">·</span>

          <span className="text-neutral-300 font-medium">
            {BUSINESS_INFO.priceRange}
          </span>

          <span className="text-neutral-600 hidden sm:inline" aria-hidden="true">·</span>

          <div className="flex items-center gap-1 text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-lime-400 shrink-0" />
            <span>Salem, Tamil Nadu</span>
          </div>
        </div>

        {/* Hero CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto transition-all duration-700 ${
            revealStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            type="button"
            onClick={onExploreExperience}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-lime-400 via-lime-300 to-amber-300 hover:from-lime-300 hover:to-amber-200 rounded-lg shadow-lg hover:shadow-lime-500/25 active:scale-95 transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>EXPLORE THE EXPERIENCE</span>
          </button>

          <button
            type="button"
            onClick={onOpenDirections}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded-lg active:scale-95 transition-all cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>GET DIRECTIONS</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={onExploreExperience}
          className="mt-14 inline-flex flex-col items-center gap-1 text-[11px] tracking-widest uppercase text-neutral-500 hover:text-neutral-300 transition-colors focus-visible:outline-none"
          aria-label="Scroll down to experience"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-lime-400" />
        </button>
      </div>
    </section>
  );
};
