import React, { useState } from 'react';
import { ASSETS } from '../data/assets';
import { Sparkles, Wine, GlassWater, ArrowRight } from 'lucide-react';

export const CocktailSection: React.FC = () => {
  const [selectedCocktail, setSelectedCocktail] = useState<'cosmopolitan' | 'longIsland'>('cosmopolitan');

  const cocktails = [
    {
      id: 'cosmopolitan' as const,
      name: 'Cosmopolitan',
      highlightBadge: 'Google Listing Highlight',
      image: ASSETS.cosmopolitan,
      description: 'Customer-highlighted cocktail celebrated for its vibrant hue and classic coupe presentation.',
      glassType: 'Chilled Coupe Glass',
      tagline: 'Refined & Crisp',
      accentColor: 'from-rose-500/20 via-rose-500/5 to-transparent',
      borderColor: 'group-hover:border-rose-500/40',
    },
    {
      id: 'longIsland' as const,
      name: 'Long Island Iced Tea',
      highlightBadge: 'Google Listing Highlight',
      image: ASSETS.longIsland,
      description: 'Listing-highlighted highball classic served over crystal clear ice with rich amber depth.',
      glassType: 'Tall Highball Glass',
      tagline: 'Bold & Layered',
      accentColor: 'from-amber-500/20 via-amber-500/5 to-transparent',
      borderColor: 'group-hover:border-amber-500/40',
    },
  ];

  const current = cocktails.find((c) => c.id === selectedCocktail) || cocktails[0];

  return (
    <section id="cocktails" className="py-24 sm:py-32 relative bg-[#07080a] overflow-hidden">
      {/* Background Lighting & Atmospheric Smoke */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-lime-400 mb-3 block">
            Crafted Mixology
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            Raise Your Glass.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Highlighted directly in guest reviews and business listings, our cocktail
            program brings celebrated favorites to every evening.
          </p>
        </div>

        {/* Interactive Cocktail Switcher & Visual Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: Interactive Selection & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {cocktails.map((cocktail) => {
                const isActive = selectedCocktail === cocktail.id;
                return (
                  <button
                    key={cocktail.id}
                    type="button"
                    onClick={() => setSelectedCocktail(cocktail.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#12161d] border-lime-400/80 shadow-[0_10px_30px_rgba(0,0,0,0.6)] translate-x-2'
                        : 'bg-[#0b0e12] border-white/10 hover:border-white/20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-lime-400">
                        {cocktail.highlightBadge}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                      )}
                    </div>
                    <div className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mb-1">
                      {cocktail.name}
                    </div>
                    <div className="text-xs text-neutral-400 leading-relaxed">
                      {cocktail.description}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Note on authentic cocktail presentation */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-neutral-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Listing-Verified Signature Drinks</span>
              </div>
              <p>
                Diners specifically note a well-curated cocktail experience. Complete
                beverage menu with full spirits inventory is available at the bar.
              </p>
            </div>

            <div>
              <a
                href="#nightlife"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-wider uppercase text-neutral-900 bg-lime-400 hover:bg-lime-300 rounded-lg shadow-md transition-all active:scale-95"
              >
                <span>Explore Drinks & Music</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Immersive Cocktail Visual Experience */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#141820] to-[#090b0e] border border-white/10 p-2 sm:p-4 shadow-2xl group">
              {/* Backlight sweep & smoke glow */}
              <div className="absolute inset-0 bg-radial at-center from-lime-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

              {/* Main Visual Image container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                <img
                  key={current.id}
                  src={current.image}
                  alt={`Sip & Smoke ${current.name} Cocktail`}
                  className="w-full h-full object-cover object-center transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cinematic Glass Vignette & Light Reflections */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

                {/* Soft atmospheric smoke wisps */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07080a] to-transparent pointer-events-none" />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-1 block">
                      {current.tagline}
                    </span>
                    <h4 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                      {current.name}
                    </h4>
                    <span className="text-xs text-neutral-300">
                      {current.glassType}
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-neutral-300">
                    <Wine className="w-3.5 h-3.5 text-lime-400" />
                    <span>Curated Mixology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
