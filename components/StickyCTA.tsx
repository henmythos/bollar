import React from 'react';
import { PhoneIcon, WhatsAppIcon } from './Icons';

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 flex md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:+919347334431" 
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-white text-brand-900 font-bold border-r border-gray-200 active:bg-gray-100"
      >
        <PhoneIcon className="w-5 h-5 text-brand-900" />
        Call Now
      </a>
      <a 
        href="https://wa.me/919347334431?text=Hi,%20I%20am%20interested%20in%20Bollaar%20Properties." 
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold-600 text-white font-bold active:bg-gold-700"
      >
        <WhatsAppIcon className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
};