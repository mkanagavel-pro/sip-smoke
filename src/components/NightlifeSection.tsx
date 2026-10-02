import React from 'react';
import { ASSETS } from '../data/assets';
import { Disc3, Music, Volume2, Sparkles, Calendar, Check } from 'lucide-react';

export const NightlifeSection: React.FC = () => {
  return (
    <section id="nightlife" className="py-24 sm:py-32 relative bg-[#090b0e] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-lime-400 mb-3 block">
            Weekend Culture
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            After Dark, The Energy Changes.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Diners consistently highlight a lively ambience, with weekend beats
            and Sunday DJ nights bringing Salem together for memorable nights out.
          </p>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={ASSETS.nightlife}
                  alt="Sip & Smoke Sunday Night DJ Ambience"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Bottom Card Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/20 border border-lime-400/40 text-lime-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Disc3 className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>Customer Review Spotlight</span>
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
                  Sunday Night DJ Sessions
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg">
                  Lively Sunday nights with DJ music are highlighted in customer reviews,
                  creating an electric atmosphere after sunset.
                </p>
              </div>
            </div>
          </div>

          {/* Details & Review Topics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                  <Volume2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-xl font-bold text-white">
                    Sound & Energy
                  </h4>
                  <p className="text-xs text-amber-400">
                    Guest-Mentioned Music Topics
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Music className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">
                      Tamil Songs & Popular Tracks
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Guests highlight regional favorites and crowd-pleasing dance hits.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Disc3 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">
                      Sunday DJ Nights
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Consistently praised as the highlight of Salem weekend nightlife.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Sparkles className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">
                      Electric Crowd Ambience
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      A vibrant space where music, drinks, and friends converge.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-neutral-400 border-t border-white/10">
                <span className="font-semibold text-neutral-300">Note: </span>
                Music programming aligns with weekly resto-bar hours until 11:30 PM.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
