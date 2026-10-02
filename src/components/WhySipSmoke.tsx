import React from 'react';
import { WHY_REASONS } from '../data/businessInfo';

export const WhySipSmoke: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-[#090b0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-lime-400 mb-3 block">
            Salem Nightlife Distinction
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Why Sip & Smoke?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Six defining characteristics that make Sip & Smoke a favorite gathering
            point for evenings out in Salem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {WHY_REASONS.map((reason) => (
            <div
              key={reason.num}
              className="p-6 sm:p-8 rounded-2xl bg-[#0e1217] border border-white/10 hover:border-lime-400/40 transition-all duration-300 group"
            >
              <div className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-lime-400/30 group-hover:text-lime-400/70 transition-colors mb-4">
                {reason.num}
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-white mb-2 group-hover:text-lime-300 transition-colors">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
