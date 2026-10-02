import React from 'react';
import { Navigation, Bookmark, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface ContactCTAProps {
  onOpenDirections: () => void;
  onSaveLocation: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  onOpenDirections,
  onSaveLocation,
}) => {
  return (
    <section className="py-20 relative bg-[#090b0e] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-[#11161d] to-[#0a0d11] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-lime-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-lime-400 block">
              Salem Evenings
            </span>

            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
              Planning A Night Out?
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Find us in Seerangapalayam, Salem. Walk in for an evening of handcrafted
              cocktails, flavorful dinner pairings, and weekend musical energy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenDirections}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-lime-400 to-amber-300 hover:from-lime-300 hover:to-amber-200 rounded-xl shadow-lg active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </button>

              <button
                type="button"
                onClick={onSaveLocation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl active:scale-95 transition-all"
              >
                <Bookmark className="w-4 h-4 text-amber-400" />
                <span>SAVE LOCATION</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
