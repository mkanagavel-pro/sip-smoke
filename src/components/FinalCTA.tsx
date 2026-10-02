import React from 'react';
import { SipSmokeLogo } from './SipSmokeLogo';
import { Navigation, UtensilsCrossed } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface FinalCTAProps {
  onOpenDirections: () => void;
  onExploreMenu: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenDirections,
  onExploreMenu,
}) => {
  return (
    <section className="py-28 relative bg-[#07080a] overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Night ambience"
          className="w-full h-full object-cover opacity-20 filter blur-[2px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/80 to-[#07080a]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <div className="mb-6">
          <SipSmokeLogo size="lg" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
          Your Night Starts Here.
        </h2>

        <p className="font-serif-luxury text-lg sm:text-xl text-amber-300 font-medium tracking-widest uppercase mb-4">
          Food. Drinks. Music. Atmosphere.
        </p>

        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mb-10 leading-relaxed">
          Whether unwinding with crafted cocktails or gathering for Sunday DJ sessions,
          experience Salem's premier resto-bar destination.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-lime-400 via-lime-300 to-amber-300 hover:from-lime-300 hover:to-amber-200 rounded-xl shadow-lg hover:shadow-lime-500/25 active:scale-95 transition-all cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>EXPLORE THE MENU</span>
          </button>

          <button
            type="button"
            onClick={onOpenDirections}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl active:scale-95 transition-all cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>GET DIRECTIONS</span>
          </button>
        </div>
      </div>
    </section>
  );
};
