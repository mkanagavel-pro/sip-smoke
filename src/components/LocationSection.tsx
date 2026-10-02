import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Copy, Check, ExternalLink, Bookmark } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface LocationSectionProps {
  onOpenDirections: () => void;
  onSaveLocation: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  onOpenDirections,
  onSaveLocation,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `${BUSINESS_INFO.name} - ${BUSINESS_INFO.subtitle}, ${BUSINESS_INFO.address.full} (Plus Code: ${BUSINESS_INFO.address.plusCode})`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 sm:py-32 relative bg-[#07080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 mb-3 block">
            Visit Us In Salem
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Find Us After Sunset.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Conveniently located on Ramakrishna Road near Balram Enclave Apartment in Seerangapalayam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Address & Hours Detail Card */}
          <div className="lg:col-span-5 bg-[#0d1015] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div>
                <div className="font-serif-luxury text-2xl font-bold text-white mb-1">
                  {BUSINESS_INFO.name}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  {BUSINESS_INFO.subtitle}
                </div>
              </div>

              {/* Full Address */}
              <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">{BUSINESS_INFO.address.line1}</p>
                    <p className="text-neutral-400">{BUSINESS_INFO.address.landmark}</p>
                    <p className="text-neutral-400">
                      {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.city}
                    </p>
                    <p className="text-neutral-400">
                      {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Plus Code */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Google Plus Code:</span>
                  <span className="font-mono font-bold text-lime-300 bg-lime-400/10 px-2 py-0.5 rounded">
                    {BUSINESS_INFO.address.plusCode}
                  </span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-bold text-white">Listed Hours</span>
                </div>
                <div className="text-sm font-semibold text-emerald-400 pl-6">
                  {BUSINESS_INFO.hours.listed}
                </div>
                <div className="text-[11px] text-neutral-400 pl-6">
                  {BUSINESS_INFO.hours.note}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={onOpenDirections}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-lime-400 to-amber-300 hover:from-lime-300 hover:to-amber-200 rounded-xl transition-all active:scale-95 shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </button>

                <button
                  type="button"
                  onClick={onSaveLocation}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold tracking-wider uppercase text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl transition-all active:scale-95"
                >
                  <Bookmark className="w-4 h-4 text-amber-400" />
                  <span>SAVE LOCATION</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Address copied to clipboard!' : 'Copy full address & Plus Code'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 bg-[#0b0e12] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative min-h-[380px] flex flex-col">
            {/* Embedded Responsive Interactive Map Frame */}
            <iframe
              title="Sip & Smoke Resto Bar Salem Map"
              src="https://maps.google.com/maps?q=94,%20Ramakrishna%20Rd,%20near%20Balram%20Enclave%20Apartment,%20Seerangapalayam,%20Salem,%20Tamil%20Nadu%20636007&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[340px] flex-1 border-0 filter grayscale-[40%] contrast-125 invert-[85%] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom floating map quick bar */}
            <div className="p-4 bg-[#0d1015]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="truncate">Seerangapalayam, Salem (Near Balram Enclave)</span>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-lime-400 hover:text-lime-300 font-semibold tracking-wider uppercase text-[11px] shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
