import React from 'react';
import { Utensils, Wine, Music2, Moon } from 'lucide-react';
import { EXPERIENCE_PILLARS } from '../data/businessInfo';

export const ExperienceSection: React.FC = () => {
  const icons = {
    food: <Utensils className="w-6 h-6 text-amber-400" />,
    cocktails: <Wine className="w-6 h-6 text-lime-400" />,
    music: <Music2 className="w-6 h-6 text-amber-300" />,
    ambience: <Moon className="w-6 h-6 text-lime-300" />,
  };

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#07080a] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-lime-400 mb-3 block">
            The Nightlife Destination
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            An Evening Worth Remembering.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Step into a space where food, drinks, music and atmosphere come together
            after sunset.
          </p>
        </div>

        {/* 4 Premium Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group relative bg-[#0d1014] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-lime-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Subtle top corner ambient glow on hover */}
              <div className="absolute -top-px -right-px w-24 h-24 bg-gradient-to-bl from-lime-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-lime-400/40 transition-all duration-300">
                    {icons[pillar.id as keyof typeof icons]}
                  </div>
                  <span className="font-serif-luxury text-neutral-600 font-bold text-sm tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-widest text-amber-400/90 mb-1">
                  {pillar.tagline}
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-white mb-3 tracking-wide group-hover:text-lime-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
                <span>Sip & Smoke Ambience</span>
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400/40 group-hover:bg-lime-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
