import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export const FoodSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'STARTERS' | 'MAIN COURSE' | 'SIDES' | 'BAR BITES'>('STARTERS');

  const categories = [
    {
      id: 'STARTERS' as const,
      label: 'STARTERS',
      subtitle: 'Crispy & Sizzling Appetizers',
      highlight: 'Spicy bar bites and tandoori-inspired starters designed to complement cold drinks.',
    },
    {
      id: 'MAIN COURSE' as const,
      label: 'MAIN COURSE',
      subtitle: 'Hearty Resto Bar Specialties',
      highlight: 'Satisfying evening platters and traditional regional gravies for a full dinner experience.',
    },
    {
      id: 'SIDES' as const,
      label: 'SIDES',
      subtitle: 'Diner-Celebrated Accompaniments',
      highlight: 'Customer reviews specifically praise unlimited side dish servings paired with every order.',
    },
    {
      id: 'BAR BITES' as const,
      label: 'BAR BITES',
      subtitle: 'Finger Foods & Snacks',
      highlight: 'Crunchy savories and quick bites crafted for lingering conversations and late nights.',
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="menu" className="py-24 relative bg-[#090b0e] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 mb-2 block">
            Culinary Craft
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Food That Completes the Night.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From sizzling starters to the diner-celebrated unlimited side dishes,
            every plate is crafted to pair with late-night conversations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-amber-400 text-neutral-950 shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                  : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Elegant Menu Showcase Box */}
        <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <UtensilsCrossed className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                {currentCategory.subtitle}
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-3">
                {currentCategory.label}
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                {currentCategory.highlight}
              </p>
            </div>

            {/* Note on official menu representation */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left sm:text-center text-xs text-neutral-400 leading-relaxed max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-1.5 font-semibold text-neutral-300 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Concept Menu Preview</span>
              </div>
              Official item listings, daily specials, and exact pricing will be published
              upon final business sign-off. Guests consistently celebrate hearty portions
              and complimentary side dishes.
            </div>

            {/* Supported Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto pt-2 text-xs text-neutral-300 text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Unlimited sides mentioned by guests</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Cooked fresh for evening dining</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#cocktails"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Explore Drink Pairings</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
