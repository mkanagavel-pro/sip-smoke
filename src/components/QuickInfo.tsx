import React from 'react';
import { Star, IndianRupee, GlassWater, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const QuickInfo: React.FC = () => {
  return (
    <section className="relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-[#0f1217]/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {/* Rating */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
                  {BUSINESS_INFO.rating}
                </span>
                <span className="text-amber-400 text-xs">★</span>
              </div>
              <div className="text-xs text-neutral-400 font-medium">
                {BUSINESS_INFO.reviewsCount} Google Reviews
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 shrink-0">
              <IndianRupee className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                ₹200–₹1,200
              </div>
              <div className="text-xs text-neutral-400">
                Per Person Estimate
              </div>
            </div>
          </div>

          {/* Business Type */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 shrink-0">
              <GlassWater className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                Resto Bar
              </div>
              <div className="text-xs text-neutral-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-neutral-500" />
                Salem, Tamil Nadu
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-emerald-300">
                Until 11:30 PM
              </div>
              <div className="text-[11px] text-neutral-400">
                Listed Hours (Holiday hours may vary)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
