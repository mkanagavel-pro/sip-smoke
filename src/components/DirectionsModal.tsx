import React, { useState } from 'react';
import { X, MapPin, Navigation, Copy, Check, ExternalLink, Calendar, Share2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'directions' | 'save';
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({
  isOpen,
  onClose,
  mode = 'directions',
}) => {
  const [copied, setCopied] = useState(false);
  const [calendarDownloaded, setCalendarDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${BUSINESS_INFO.name} - ${BUSINESS_INFO.subtitle}\nAddress: ${BUSINESS_INFO.address.full}\nPlus Code: ${BUSINESS_INFO.address.plusCode}\nGoogle Maps: ${BUSINESS_INFO.googleMapsUrl}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCalendar = () => {
    // Generate .ics calendar event for an evening at Sip & Smoke
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//KEAGROW//Sip and Smoke//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Evening at Sip & Smoke (The Resto Bar)',
      `DESCRIPTION:Resto Bar experience in Salem. Good food\\, crafted cocktails and nightlife vibes.\\nAddress: ${BUSINESS_INFO.address.full}`,
      `LOCATION:${BUSINESS_INFO.address.full}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Sip_and_Smoke_Salem.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarDownloaded(true);
    setTimeout(() => setCalendarDownloaded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-lg w-full bg-[#0d1015] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-lime-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-lime-400 mb-1">
              {mode === 'save' ? 'Save Location' : 'Directions & Navigation'}
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-white">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs text-amber-400 font-medium uppercase tracking-wider">
              {BUSINESS_INFO.subtitle} · Seerangapalayam, Salem
            </p>
          </div>

          {/* Address Box */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
              <MapPin className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">{BUSINESS_INFO.address.line1}</p>
                <p className="text-neutral-400">{BUSINESS_INFO.address.landmark}</p>
                <p className="text-neutral-400">
                  {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-neutral-400">Google Plus Code:</span>
              <span className="font-mono font-bold text-lime-300 bg-lime-400/10 px-2 py-0.5 rounded">
                {BUSINESS_INFO.address.plusCode}
              </span>
            </div>
          </div>

          {/* Hours Info */}
          <div className="text-xs text-neutral-400 p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
            <span>Listed Hours:</span>
            <span className="font-semibold text-emerald-400">Open until 11:30 PM</span>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-lime-400 to-amber-300 hover:from-lime-300 hover:to-amber-200 rounded-xl shadow-lg active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Open In Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Address'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadCalendar}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl transition-all"
              >
                {calendarDownloaded ? <Check className="w-4 h-4 text-amber-400" /> : <Calendar className="w-4 h-4" />}
                <span>{calendarDownloaded ? 'Saved!' : 'Save Calendar'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
