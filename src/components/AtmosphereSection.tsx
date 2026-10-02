import React, { useState } from 'react';
import { ASSETS } from '../data/assets';
import { Eye, Sparkles, Moon, Flame } from 'lucide-react';

export const AtmosphereSection: React.FC = () => {
  const [activeMood, setActiveMood] = useState<number>(0);

  const moods = [
    {
      title: 'Warm Amber Glow',
      detail: 'Curated pendant fixtures and under-counter ambient LEDs produce an intimate, golden radiance.',
      tag: 'Lighting',
    },
    {
      title: 'Dark Stone & Reflections',
      detail: 'Polished granite countertops reflect backlit glassware and glowing ice silhouettes.',
      tag: 'Materials',
    },
    {
      title: 'Subtle Smoky Haze',
      detail: 'Gentle atmospheric mist drifting through dark lounge tones creates cinematic visual depth.',
      tag: 'Atmosphere',
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-[#07080a] overflow-hidden">
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Atmospheric bar interior"
          className="w-full h-full object-cover opacity-15 filter blur-sm scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080a] via-[#07080a]/80 to-[#07080a]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 mb-3 block">
            Cinematic Ambience
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Feel The Night.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Every element—from textured charcoal walls to the soft clink of cocktail
            glassware—is tuned to elevate your nocturnal escape.
          </p>
        </div>

        {/* Atmospheric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {moods.map((mood, index) => (
            <div
              key={mood.title}
              onMouseEnter={() => setActiveMood(index)}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeMood === index
                  ? 'bg-[#10141a] border-amber-400/60 shadow-[0_15px_30px_rgba(245,158,11,0.15)] -translate-y-1.5'
                  : 'bg-[#0b0e12]/80 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  {mood.tag}
                </span>
                <span className="text-xs text-neutral-500 font-mono">0{index + 1}</span>
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
                {mood.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {mood.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
