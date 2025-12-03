import React from 'react';
import { PhoneIcon, WhatsAppIcon, DocIcon } from './Icons';

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 grid grid-cols-3 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] h-12">
      {/* Enquire Button */}
      <a 
        href="#contact" 
        className="flex flex-col items-center justify-center gap-0.5 bg-white text-brand-900 border-r border-gray-100 active:bg-gray-50 transition-colors"
      >
        <DocIcon className="w-3.5 h-3.5 text-brand-900" />
        <span className="text-[10px] font-bold uppercase tracking-wide">Enquire</span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919347334431?text=Hi,%20I%20am%20interested%20in%20Bollaar%20Properties." 
        className="flex flex-col items-center justify-center gap-0.5 bg-brand-900 text-gold-500 border-r border-gray-700 active:bg-brand-800 transition-colors"
      >
        <WhatsAppIcon className="w-3.5 h-3.5" />
        <span className="text-[10px] font-bold uppercase tracking-wide">WhatsApp</span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+919347334431" 
        className="flex flex-col items-center justify-center gap-0.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white active:brightness-90 transition-all"
      >
        <PhoneIcon className="w-3.5 h-3.5" />
        <span className="text-[10px] font-bold uppercase tracking-wide">Call</span>
      </a>
    </div>
  );
};